Purpose: Architecture overview for the LULT leaderboard and personal progress system.
How the GPT should use this file: Use to understand the intended storage and API architecture.
Priority: High
Last updated: 2026-05-29

# Leaderboard Architecture

## Primary Architecture

LULT uses:

- Custom GPT as the user interface;
- GPT Actions as the API bridge;
- Supabase Edge Function as the HTTPS API layer;
- Supabase/Postgres as the main leaderboard database.

## Request Flow

1. User completes a LULT diagnostic.
2. GPT produces the final report.
3. GPT explains optional leaderboard saving.
4. User gives explicit consent.
5. GPT asks for alias only.
6. GPT Action calls the Supabase Edge Function.
7. Edge Function validates the request and uses server-side Supabase credentials.
8. Postgres stores the attempt.
9. Edge Function returns rank and personal progress.
10. GPT explains the result in the selected interface language.

## Why Supabase/Postgres

- Structured constraints.
- SQL indexes for ranking and progress.
- Server-side secrets through Edge Functions.
- Easier migration path than a spreadsheet.

## Why No Google Sheets As Primary

Google Sheets is convenient for manual pilots but is weaker for privacy boundaries, ranking logic, API validation, and future scale.

## Why No test_version

The current leaderboard compares by `language + mode`. `test_version` is intentionally excluded to keep early leaderboards understandable and avoid fragmenting small result pools.

