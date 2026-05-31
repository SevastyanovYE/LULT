Purpose: Rules for saving and explaining LULT leaderboard entries.
How the GPT should use this file: Use when explaining optional leaderboard submission after a final result.
Priority: High
Last updated: 2026-05-31

# Leaderboard Rules

## Consent First

Leaderboard submission is optional. For test modes, the GPT should ask for explicit consent before the first diagnostic question so it can save automatically after the final report.

Do not save anything if the user does not clearly agree.

## Alias Only

Ask for an alias only. Do not ask for full name, email, phone number, age, location, or sensitive personal data.

## Comparison Scope

Compare scores only within the same:

- tested `language`;
- test `mode`.

Do not compare a writing-only score with a full CEFR diagnostic score. Do not compare English scores with another tested language.

## Timing

Store:

- `started_at`: when the test begins;
- `completed_at`: when the final report is ready;
- `duration_seconds`: elapsed test time;
- `created_at`: when the attempt is saved.

Timing helps users understand pace and makes ties easier to rank.

## User Explanation

In Russian:

“После результата я могу сразу сохранить попытку в лидерборд и показать твоё место, дельту к прошлому лучшему результату и топ по этому режиму. Для этого нужен только короткий alias, без личных данных.”

In English:

“After the result, I can save this attempt to the leaderboard and show your rank, delta against your previous best, and the top entries for this mode. I only need a short alias, no personal data.”
