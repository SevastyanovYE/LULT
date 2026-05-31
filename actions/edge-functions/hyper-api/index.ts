// Purpose: Supabase Edge Function draft for the LULT leaderboard API.
// How the GPT should use this file: Use as the first implementation draft for GPT Actions.
// Priority: High
// Last updated: 2026-05-29

import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

type JsonRecord = Record<string, unknown>;

type AttemptInsert = {
  alias: string;
  language: string;
  interface_language: "ru" | "en";
  mode: string;
  score: number;
  cefr: string;
  confidence: "low" | "medium" | "high";
  vocabulary_score: number | null;
  grammar_score: number | null;
  reading_score: number | null;
  writing_score: number | null;
  speaking_score: number | null;
  listening_score: number | null;
  started_at: string | null;
  completed_at: string | null;
  duration_seconds: number | null;
  badge: string | null;
  summary: string | null;
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

const jsonHeaders = {
  ...corsHeaders,
  "Content-Type": "application/json",
};

const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const actionApiKey = Deno.env.get("LULT_ACTION_API_KEY") ?? "";

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (!isAuthorized(req)) {
    return errorResponse(401, "unauthorized", "Missing or invalid API key.");
  }

  try {
    const url = new URL(req.url);
    const path = normalizePath(url.pathname);

    if (req.method === "POST" && path === "/attempts") {
      return await handlePostAttempt(req);
    }

    if (req.method === "GET" && path === "/leaderboards") {
      return await handleGetLeaderboard(url);
    }

    const profileMatch = path.match(/^\/profiles\/([^/]+)\/progress$/);
    if (req.method === "GET" && profileMatch) {
      return await handleGetProfileProgress(url, decodeURIComponent(profileMatch[1]));
    }

    return errorResponse(404, "not_found", "Route not found.");
  } catch (error) {
    console.error(error);
    return errorResponse(500, "internal_error", "Unexpected server error.");
  }
});

function isAuthorized(req: Request): boolean {
  if (!actionApiKey) return false;
  const header = req.headers.get("authorization") ?? "";
  return header === `Bearer ${actionApiKey}`;
}

function normalizePath(pathname: string): string {
  const withoutTrailingSlash = pathname.replace(/\/+$/, "") || "/";
  return withoutTrailingSlash
    .replace(/^\/functions\/v1\/hyper-api(?=\/|$)/, "")
    .replace(/^\/hyper-api(?=\/|$)/, "")
    .replace(/^\/leaderboard(?=\/|$)/, "") || "/";
}

async function handlePostAttempt(req: Request): Promise<Response> {
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return errorResponse(400, "invalid_json", "Request body must be valid JSON.");
  }

  const validation = validateAttempt(body as JsonRecord);
  if (!validation.ok) {
    return errorResponse(400, "invalid_request", validation.message);
  }

  const attempt = validation.value;

  // Chosen order: compute previous best before inserting the current attempt.
  const previousBest = await fetchPreviousBest(attempt.alias, attempt.language, attempt.mode);

  const { data: inserted, error: insertError } = await supabase
    .from("attempts")
    .insert(attempt)
    .select("id, alias, language, mode, score, cefr, badge, duration_seconds, created_at")
    .single();

  if (insertError) {
    console.error(insertError);
    return errorResponse(500, "insert_failed", "Could not save attempt.");
  }

  const rank = await computeRank(String(inserted.id), attempt.language, attempt.mode);
  const leaderboardSlice = await fetchLeaderboard(attempt.language, attempt.mode, 10);
  const previousBestScore = previousBest?.score ?? null;
  const delta = previousBestScore === null ? null : attempt.score - previousBestScore;
  const improved = delta === null ? null : delta > 0;

  return jsonResponse({
    saved: true,
    current_score: attempt.score,
    previous_best_score: previousBestScore,
    delta,
    improved,
    previous_cefr: previousBest?.cefr ?? null,
    current_cefr: attempt.cefr,
    rank,
    leaderboard_slice: leaderboardSlice,
  });
}

async function handleGetLeaderboard(url: URL): Promise<Response> {
  const language = normalizeSimple(url.searchParams.get("language") ?? "");
  const mode = normalizeSimple(url.searchParams.get("mode") ?? "");
  const limit = clampLimit(url.searchParams.get("limit"));

  if (!language || !mode) {
    return errorResponse(400, "missing_query", "Query parameters language and mode are required.");
  }

  const entries = await fetchLeaderboard(language, mode, limit);
  return jsonResponse({ language, mode, entries });
}

async function handleGetProfileProgress(url: URL, rawAlias: string): Promise<Response> {
  const alias = normalizeAlias(rawAlias);
  const language = normalizeSimple(url.searchParams.get("language") ?? "");
  const mode = normalizeSimple(url.searchParams.get("mode") ?? "");

  if (!alias || !language || !mode) {
    return errorResponse(400, "missing_query", "Alias, language, and mode are required.");
  }

  const { data, error } = await supabase
    .from("attempts")
    .select("id, alias, score, cefr, badge, duration_seconds, created_at")
    .eq("alias", alias)
    .eq("language", language)
    .eq("mode", mode)
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) {
    console.error(error);
    return errorResponse(500, "query_failed", "Could not load profile progress.");
  }

  const history = (data ?? []).map((entry, index) => ({
    rank: index + 1,
    alias: entry.alias,
    score: entry.score,
    cefr: entry.cefr,
    badge: entry.badge,
    duration_seconds: entry.duration_seconds,
    created_at: entry.created_at,
  }));

  const sortedByBest = [...(data ?? [])].sort(compareAttempts);
  const bestScore = sortedByBest[0]?.score ?? null;
  const latestScore = data?.[0]?.score ?? null;

  return jsonResponse({
    alias,
    language,
    mode,
    best_score: bestScore,
    latest_score: latestScore,
    attempts_count: data?.length ?? 0,
    history,
  });
}

function validateAttempt(body: JsonRecord):
  | { ok: true; value: AttemptInsert }
  | { ok: false; message: string } {
  const alias = normalizeAlias(readString(body.alias));
  const language = normalizeSimple(readString(body.language));
  const interfaceLanguage = normalizeSimple(readString(body.interface_language) || "ru");
  const mode = normalizeSimple(readString(body.mode));
  const score = readInteger(body.score);
  const cefr = readString(body.cefr).trim();
  const confidence = normalizeSimple(readString(body.confidence));
  const subscores = isRecord(body.subscores) ? body.subscores : {};

  if (!alias) return { ok: false, message: "alias is required and must be 2-32 characters." };
  if (!language) return { ok: false, message: "language is required." };
  if (!mode) return { ok: false, message: "mode is required." };
  if (score === null || score < 0 || score > 100) return { ok: false, message: "score must be 0-100." };
  if (!cefr) return { ok: false, message: "cefr is required." };
  if (!["low", "medium", "high"].includes(confidence)) {
    return { ok: false, message: "confidence must be low, medium, or high." };
  }
  if (!["ru", "en"].includes(interfaceLanguage)) {
    return { ok: false, message: "interface_language must be ru or en." };
  }

  return {
    ok: true,
    value: {
      alias,
      language,
      interface_language: interfaceLanguage as "ru" | "en",
      mode,
      score,
      cefr,
      confidence: confidence as "low" | "medium" | "high",
      vocabulary_score: readOptionalScore(subscores.vocabulary_score),
      grammar_score: readOptionalScore(subscores.grammar_score),
      reading_score: readOptionalScore(subscores.reading_score),
      writing_score: readOptionalScore(subscores.writing_score),
      speaking_score: readOptionalScore(subscores.speaking_score),
      listening_score: readOptionalScore(subscores.listening_score),
      started_at: readOptionalIso(body.started_at),
      completed_at: readOptionalIso(body.completed_at),
      duration_seconds: readOptionalNonNegativeInteger(body.duration_seconds),
      badge: readOptionalShortText(body.badge, 64),
      summary: readOptionalShortText(body.summary, 500),
    },
  };
}

async function fetchPreviousBest(alias: string, language: string, mode: string) {
  const { data, error } = await supabase
    .from("attempts")
    .select("id, score, cefr, duration_seconds, created_at")
    .eq("alias", alias)
    .eq("language", language)
    .eq("mode", mode)
    .order("score", { ascending: false })
    .order("created_at", { ascending: true })
    .limit(50);

  if (error) throw error;
  return [...(data ?? [])].sort(compareAttempts)[0] ?? null;
}

async function fetchLeaderboard(language: string, mode: string, limit: number) {
  // TODO: For large leaderboards, replace this with an RPC or SQL view that computes rank in Postgres.
  const { data, error } = await supabase
    .from("attempts")
    .select("id, alias, score, cefr, badge, duration_seconds, created_at")
    .eq("language", language)
    .eq("mode", mode)
    .limit(500);

  if (error) throw error;

  return [...(data ?? [])]
    .sort(compareAttempts)
    .slice(0, limit)
    .map((entry, index) => ({
      rank: index + 1,
      alias: entry.alias,
      score: entry.score,
      cefr: entry.cefr,
      badge: entry.badge,
      duration_seconds: entry.duration_seconds,
      created_at: entry.created_at,
    }));
}

async function computeRank(id: string, language: string, mode: string): Promise<number | null> {
  // TODO: For large leaderboards, replace this with a Postgres RPC that returns exact rank.
  const { data, error } = await supabase
    .from("attempts")
    .select("id, score, duration_seconds, created_at")
    .eq("language", language)
    .eq("mode", mode)
    .limit(500);

  if (error) throw error;

  const sorted = [...(data ?? [])].sort(compareAttempts);
  const index = sorted.findIndex((entry) => entry.id === id);
  return index === -1 ? null : index + 1;
}

function compareAttempts(a: any, b: any): number {
  if ((b.score ?? 0) !== (a.score ?? 0)) return (b.score ?? 0) - (a.score ?? 0);

  const aDuration = typeof a.duration_seconds === "number" ? a.duration_seconds : Number.POSITIVE_INFINITY;
  const bDuration = typeof b.duration_seconds === "number" ? b.duration_seconds : Number.POSITIVE_INFINITY;
  if (aDuration !== bDuration) return aDuration - bDuration;

  const aTime = new Date(a.created_at ?? 0).getTime();
  const bTime = new Date(b.created_at ?? 0).getTime();
  if (aTime !== bTime) return aTime - bTime;

  return String(a.id ?? "").localeCompare(String(b.id ?? ""));
}

function normalizeAlias(value: string): string {
  return value.trim().replace(/\s+/g, " ").slice(0, 32);
}

function normalizeSimple(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, "_").slice(0, 48);
}

function readString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function readInteger(value: unknown): number | null {
  return Number.isInteger(value) ? (value as number) : null;
}

function readOptionalScore(value: unknown): number | null {
  const score = readInteger(value);
  return score !== null && score >= 0 && score <= 100 ? score : null;
}

function readOptionalNonNegativeInteger(value: unknown): number | null {
  if (value === undefined || value === null) return null;
  const intValue = readInteger(value);
  return intValue !== null && intValue >= 0 ? intValue : null;
}

function readOptionalIso(value: unknown): string | null {
  if (typeof value !== "string" || !value.trim()) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date.toISOString();
}

function readOptionalShortText(value: unknown, maxLength: number): string | null {
  if (typeof value !== "string") return null;
  const text = value.trim();
  return text ? text.slice(0, maxLength) : null;
}

function isRecord(value: unknown): value is JsonRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function clampLimit(value: string | null): number {
  const parsed = Number.parseInt(value ?? "10", 10);
  if (Number.isNaN(parsed)) return 10;
  return Math.min(Math.max(parsed, 1), 50);
}

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: jsonHeaders });
}

function errorResponse(status: number, error: string, message: string): Response {
  return jsonResponse({ error, message }, status);
}

// Production hardening TODO:
// - Add rate limiting and abuse detection.
// - Restrict CORS origins after the GPT Actions flow is final.
// - Add alias moderation for offensive or identifying aliases.
// - Move ranking to a Postgres RPC for large datasets.
// - Add structured logs and alerting.
// - Add automated tests with a local Supabase stack.
