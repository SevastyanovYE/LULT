Purpose: Notes on how the LULT Supabase schema follows the Basic PostgreSQL Rules reference.
How the GPT should use this file: Use as human-facing implementation rationale for database design.
Priority: Medium
Last updated: 2026-05-29

# PostgreSQL Rules Applied

This note summarizes how the LULT leaderboard schema applies the rules from `Basic PostgreSQL Rules.pdf`.

## Applied Rules

- PostgreSQL/Supabase is the source of truth for structured leaderboard data.
- The table represents one clear entity: `attempts`.
- Table and column names use `snake_case`.
- The table has an explicit primary key: `id uuid primary key default gen_random_uuid()`.
- Required fields use `not null`.
- Real-world moments use `timestamptz`.
- Missing optional values use `null`, not fake dates, zeroes, or empty placeholders.
- Database constraints protect score ranges, confidence values, interface language, duration, and alias length.
- Indexes match real query patterns:
  - lookup previous best by `alias + language + mode`;
  - rank by `language + mode + score`;
  - inspect recent attempts by `created_at`.
- Row Level Security is enabled.
- Schema changes are tracked in version control through `supabase/migrations/`.

## Supabase UI Warning

Do not create this table by uploading the `.sql` file through **Table Editor > Import data**.

That import tool is for spreadsheet-style files. It will parse SQL lines as data rows and may report:

- delimiter issues;
- too many fields;
- primary key not selected.

Use **SQL Editor** or Supabase migrations instead.

