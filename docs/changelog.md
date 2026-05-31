Purpose: Technical changelog for repository edits.
How the GPT should use this file: Use to track changes, not as runtime assessment knowledge.
Priority: Low
Last updated: 2026-05-26

# Changelog

## v0.1.0 - 2026-05-26

Added initial repository structure and first working Markdown content for:

- GPT configuration;
- Knowledge files;
- English question bank;
- research scaffolding;
- manual tests;
- setup documentation.

## v0.1.1 - 2026-05-26

Improved Custom GPT usability:

- added `Retrieval keywords` blocks to all `knowledge/*.md` files;
- tightened several Knowledge files for faster retrieval;
- moved scoring math authority to `knowledge/02_scoring_rubric_100.md`;
- expanded `knowledge/10_calibration_examples.md` to 12 clearer synthetic benchmarks;
- updated README and Custom GPT setup guide.

## v0.1.2 - 2026-05-26

Strengthened research layer:

- rebuilt `research/bibliography.md` with verified official and review-level sources;
- updated CEFR and language assessment notes;
- added adaptive testing notes;
- added evidence summary with solid/uncertain/not-claim/practical sections.

## v0.2.0 - 2026-05-29

Implemented leaderboard repository layer:

- added `leaderboard/` rules and privacy docs;
- added `actions/supabase_schema.sql`;
- added GPT Actions OpenAPI schema and API contract;
- added Supabase Edge Function draft;
- added Supabase/GPT Actions setup docs;
- updated README, project overview, GPT main instructions, menu flow, language policy, and starters.

## v0.2.1 - 2026-05-29

Fixed Supabase schema setup guidance:

- clarified that `actions/supabase_schema.sql` must be run in SQL Editor, not imported as spreadsheet data;
- added version-controlled Supabase migration under `supabase/migrations/`;
- aligned schema naming, timestamps, constraints, and indexes with the PostgreSQL rules reference;
- added PostgreSQL rules application notes.

## v0.2.2 - 2026-05-31

Aligned GPT Actions with deployed Supabase function:

- changed the canonical Edge Function slug from `leaderboard` to `hyper-api`;
- updated OpenAPI server URL and setup docs;
- documented that Supabase Verify JWT must be off because GPT Actions uses a custom bearer key;
- made Edge Function route normalization accept `hyper-api` paths defensively.

## v0.2.3 - 2026-05-31

Added public privacy policy:

- added root `PRIVACY_POLICY.md` for OpenAI GPT Builder;
- linked privacy policy URLs from README and GPT Actions setup docs.

## v0.2.4 - 2026-05-31

Updated leaderboard-first GPT flow:

- changed test flow so GPT asks leaderboard consent and alias before the first diagnostic question;
- instructed GPT to call `saveAttempt` automatically after the final report when consent was given;
- updated conversation starters and menu text to surface leaderboard/ranking behavior.
