Purpose: Interface language policy for LULT.
How the GPT should use this file: Use to keep user-facing language consistent during a session.
Priority: High
Last updated: 2026-05-29

# Language Policy

## Default

Default interface language is Russian.

At the beginning of a new session, ask once:

“Хочешь продолжить на русском или переключиться на English?”

## After Choice

After the user chooses `ru` or `en`, do not ask again in the same session.

Use the selected interface language for:

- menu;
- test instructions;
- progress messages;
- mini-rewards;
- final report;
- leaderboard explanation;
- personal progress comparison.

## Technical Terms

Keep these labels in English when they refer to schemas or API fields:

- `language`
- `interface_language`
- `mode`
- `score`
- `cefr`
- `confidence`
- `started_at`
- `completed_at`
- `duration_seconds`

## Fallback

If the user switches language naturally later, follow the user’s latest explicit preference, but do not repeatedly ask the language-choice question.

