Purpose: Data model documentation for the LULT leaderboard.
How the GPT should use this file: Use to understand what leaderboard data exists and which fields are safe to mention.
Priority: High
Last updated: 2026-05-29

# Leaderboard Data Model

## Storage

LULT uses Supabase/Postgres as the main leaderboard storage. The main table is `attempts`.

Google Sheets is not the main architecture. It is documented only as a fallback for very early manual pilots.

## Main Table: attempts

Required fields:

- `id`: generated UUID.
- `alias`: public display name chosen by the user.
- `language`: tested language, for example `english`.
- `interface_language`: GPT interface language, `ru` or `en`; default `ru`.
- `mode`: test mode, for example `quick`, `full_cefr`, `writing`, `interview`, `retest`.
- `score`: integer from 0 to 100.
- `cefr`: approximate CEFR label.
- `confidence`: `low`, `medium`, or `high`.
- `created_at`: server insert timestamp.

Optional fields:

- `vocabulary_score`
- `grammar_score`
- `reading_score`
- `writing_score`
- `speaking_score`
- `listening_score`
- `started_at`
- `completed_at`
- `duration_seconds`
- `badge`
- `summary`
- `updated_at`: internal maintenance timestamp.

## No test_version

`test_version` is intentionally not part of leaderboard logic. Early LULT tests are heuristic and evolving; adding a version dimension would fragment a small leaderboard and make user-facing comparisons harder to explain.

If formal calibrated versions are introduced later, they should be handled by a separate migration and policy decision.
