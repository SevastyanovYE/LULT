Purpose: Entry point for the LevelUp Language Test repository.
How the GPT should use this file: Use for project orientation only; do not use as the main testing rubric.
Priority: Medium
Last updated: 2026-05-31

# LevelUp Language Test (LULT)

LULT is a Custom GPT knowledge and configuration repository for a short adaptive English diagnostic. It estimates an approximate CEFR level, gives a 0-100 score, produces a report and study plan, and can optionally save a consent-based leaderboard attempt.

The user interface is Russian-first. At the beginning of a new session, the GPT asks once whether the user wants Russian or English, then keeps using that interface language.

## Architecture

Primary leaderboard architecture:

- Custom GPT for the test experience.
- GPT Actions for API calls.
- Supabase Edge Function as HTTPS API layer.
- Supabase/Postgres as leaderboard storage.

Google Sheets is documented only as a fallback in `docs/google_sheets_fallback.md`.

## What To Put In GPT Instructions

Paste:

- `gpt-config/main_instructions.md`

Use while configuring:

- `gpt-config/conversation_starters.md`
- `gpt-config/menu_flow.md`
- `gpt-config/language_policy.md`
- `gpt-config/gpt_builder_checklist.md`

## What To Upload To Knowledge

Upload:

- `knowledge/`
- `question-bank/`
- `research/`
- `tests/`
- `docs/`
- `leaderboard/`

Do not paste the full question bank into Instructions.

## GPT Actions

Use:

- `actions/openapi_schema_leaderboard.yaml`
- `actions/api_contract.md`
- `docs/gpt_actions_setup.md`

Privacy Policy URL for OpenAI GPT Builder:

`https://github.com/SevastyanovYE/LULT/blob/main/PRIVACY_POLICY.md`

Raw URL:

`https://raw.githubusercontent.com/SevastyanovYE/LULT/main/PRIVACY_POLICY.md`

Supabase project URL:

`https://tljcovuwbhoxtimhxxlw.supabase.co`

Do not commit real secret keys, service role keys, database passwords, or connection strings with passwords.

## Leaderboard Rules

- Submission is optional and consent-based.
- In test modes, LULT asks for consent and alias before the first diagnostic question, then saves automatically after the final report if consent was given.
- Use alias only.
- Do not collect full names, emails, phone numbers, age, or sensitive personal data.
- Compare only within the same `language + mode`.
- Store timing: `started_at`, `completed_at`, `duration_seconds`, `created_at`.
- No `test_version` in leaderboard logic.

## Quick Start

1. Open Supabase SQL Editor and run `actions/supabase_schema.sql`.
2. Deploy `actions/edge-functions/hyper-api`.
3. Turn Verify JWT off for the Supabase `hyper-api` function.
4. Configure GPT Actions with `actions/openapi_schema_leaderboard.yaml`.
5. Paste `gpt-config/main_instructions.md` into GPT Instructions.
6. Upload Knowledge folders.
7. Test with fake leaderboard data before using with real users.

Important: do not upload `actions/supabase_schema.sql` through Table Editor > Import data. It is SQL, not a spreadsheet. Use SQL Editor or the migration file in `supabase/migrations/`.

## Important Limitation

LULT is a diagnostic coaching tool. It is not an official CEFR exam, certificate, placement test, IELTS/TOEFL/Cambridge/Duolingo/EF SET clone, or substitute for a trained human examiner.
