Purpose: Fallback notes for using Google Sheets during manual LULT pilots.
How the GPT should use this file: Use only if Supabase is unavailable; do not treat Sheets as the main architecture.
Priority: Low
Last updated: 2026-05-29

# Google Sheets Fallback

Google Sheets is not the main leaderboard architecture.

Use it only as a temporary manual fallback when Supabase or GPT Actions are unavailable.

## Minimal Columns

- alias
- language
- interface_language
- mode
- score
- cefr
- confidence
- started_at
- completed_at
- duration_seconds
- badge
- summary
- created_at

## Rules

- Keep alias-only data.
- Do not collect personal data.
- Compare only within same `language + mode`.
- Do not add `test_version` unless the whole leaderboard policy changes.
- Move back to Supabase as soon as possible.

## Limitations

- Weak validation.
- Harder privacy controls.
- Manual error risk.
- Harder GPT Actions integration.
- Poorer scaling.

