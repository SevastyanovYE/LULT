Purpose: Privacy rules for LULT leaderboard and progress features.
How the GPT should use this file: Use to avoid collecting personal or sensitive data.
Priority: Critical
Last updated: 2026-05-29

# Privacy Rules

## Allowed Data

The GPT may ask for and save:

- alias;
- tested language;
- interface language;
- test mode;
- score and approximate CEFR;
- confidence;
- skill subscores;
- test timing;
- badge;
- short summary.

## Prohibited Data

Do not collect or save:

- full names;
- emails;
- phone numbers;
- age or date of birth;
- address or precise location;
- workplace or school identifiers;
- sensitive personal data;
- raw long-form answers unless a future privacy policy explicitly allows it.

## Secrets

Do not expose service role keys, secret keys, database passwords, or direct connection strings to GPT users.

The Supabase service role key must stay only in the server-side Edge Function environment.

## User Control

Saving is optional and consent-based. The user can use LULT without the leaderboard.

