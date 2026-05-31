Purpose: Public privacy policy for LULT GPT Actions.
How the GPT should use this file: Use as the public privacy policy URL for OpenAI GPT Builder.
Priority: Critical
Last updated: 2026-05-31

# Privacy Policy

Effective date: 2026-05-31

## What LULT Is

LULT — LevelUp Language Test is a Custom GPT that provides a short adaptive English diagnostic, an approximate CEFR-level estimate, a score, a report, a study plan, and an optional leaderboard.

LULT is not an official exam or certificate.

## What Data Is Saved

Using the diagnostic test does not require saving leaderboard data.

In test modes, LULT may ask before the first diagnostic question whether you want the final result saved to the leaderboard. If you explicitly agree, LULT may store:

- alias;
- tested language;
- interface language;
- test mode;
- score;
- approximate CEFR level;
- confidence label;
- optional skill subscores;
- `started_at`;
- `completed_at`;
- `duration_seconds`;
- badge;
- short result summary;
- `created_at`.

Raw long-form test answers are not stored in the leaderboard by default.

## What Data Is Not Collected

LULT does not ask for or intentionally store:

- full names;
- email addresses;
- phone numbers;
- age or date of birth;
- home address or precise location;
- workplace or school identifiers;
- sensitive personal data.

Please do not enter personal or sensitive information as your leaderboard alias.

## Where Data Is Stored

Leaderboard data is stored in Supabase/Postgres for the LULT project.

GPT Actions are used to send consent-based leaderboard requests from the Custom GPT to the LULT Supabase Edge Function.

## Consent

Leaderboard submission is optional. LULT should ask for explicit consent before saving a result.

If you do not consent, LULT should not save a leaderboard attempt.

## Sharing

LULT does not sell leaderboard data.

Public leaderboard views may show public-safe fields such as alias, score, approximate CEFR level, badge, duration, and date.

## Data Removal

To request removal of a leaderboard alias or related attempts, use the GitHub repository contact route:

https://github.com/SevastyanovYE/LULT/issues

Include the alias you want removed. Do not include sensitive personal data in the request.

## Changes

This policy may be updated as LULT changes. The current version is kept in this repository.
