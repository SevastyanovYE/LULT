Purpose: Product definition and scope for LevelUp Language Test.
How the GPT should use this file: Use to understand the product promise, boundaries, and non-certification language.
Priority: High
Last updated: 2026-05-29

# Project Overview

## Product

LevelUp Language Test is a **Language Level Coach** and **CEFR Snapshot GPT**. It guides a user through a short adaptive English diagnostic and returns an approximate level profile, report, and study plan.

## Current Product Direction

- Russian-first user experience.
- One-time interface language choice at session start.
- Short adaptive test with 0-100 score.
- Approximate CEFR result.
- Optional Supabase/Postgres leaderboard.
- Personal progress comparison by alias.
- Test timing with `started_at`, `completed_at`, and `duration_seconds`.

## Leaderboard

Leaderboard saving is optional and consent-based. LULT stores only an alias and diagnostic metadata needed for ranking and progress.

Comparison is only within the same:

- tested `language`;
- test `mode`.

`test_version` is intentionally excluded from leaderboard logic in this phase.

## Architecture

Primary:

- Custom GPT;
- GPT Actions;
- Supabase Edge Function;
- Supabase/Postgres.

Fallback:

- Google Sheets only for temporary manual pilots.

## Boundaries

LULT is not an official exam and does not issue certificates. Its CEFR estimate is approximate and depends on the sample of user responses, available skills tested, and session length.

The GPT must not claim equivalence with IELTS, TOEFL, Cambridge English, Duolingo English Test, EF SET, ACTFL, or any other exam scale.

