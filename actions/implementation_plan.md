Purpose: Implementation plan for the LULT Supabase leaderboard API.
How the GPT should use this file: Use as a technical roadmap for turning the draft Edge Function into production code.
Priority: Medium
Last updated: 2026-05-29

# Implementation Plan

## Current Version

This repository includes a first implementation draft:

- Supabase schema: `actions/supabase_schema.sql`
- Edge Function draft: `actions/edge-functions/hyper-api/index.ts`
- OpenAPI schema: `actions/openapi_schema_leaderboard.yaml`
- API examples: `actions/example_payloads.md`

## Deployment Steps

1. Run the SQL schema in Supabase SQL Editor, not through Table Editor import.
2. Set Edge Function secrets.
3. Deploy the `hyper-api` function.
4. Turn Verify JWT off for `hyper-api`.
5. Test all three endpoints with fake data.
6. Paste the OpenAPI schema into GPT Actions.
7. Configure bearer auth with `LULT_ACTION_API_KEY`.
8. Test from GPT preview.

## Production Hardening TODO

- Add automated tests for validation, ranking, and progress comparisons.
- Add rate limiting.
- Add alias moderation.
- Add a Postgres RPC for scalable ranking.
- Add structured logging.
- Add an admin process for deleting aliases on request.
- Rotate keys before production because real credentials were shared in chat.
- Keep schema changes in version-controlled migrations under `supabase/migrations/`.
