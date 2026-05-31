Purpose: Rules for comparing a user's new result against their previous best.
How the GPT should use this file: Use after a consent-based leaderboard submission to explain personal progress.
Priority: High
Last updated: 2026-05-29

# Personal Progress Rules

## Matching Rule

Personal progress is calculated for the same:

- `alias`;
- `language`;
- `mode`.

The same alias in another language or mode is a separate profile.

## Previous Best

Before saving a new attempt, find the previous best attempt for the same `alias + language + mode`.

Previous best ranking order:

1. higher `score`;
2. shorter `duration_seconds` when both values exist;
3. earlier `created_at`.

## Delta

After saving, compute:

- `delta = current_score - previous_best_score`;
- `improved = true` if delta is positive;
- `improved = false` if delta is zero or negative;
- `improved = null` if no previous best exists.

If the score is equal, explain it as “matched previous best” even though `improved` is `false`.

## CEFR Change

If `previous_cefr` differs from `current_cefr`, show both.

Russian wording:

- Improved: “Ты улучшил(а) лучший результат на +{delta} баллов.”
- Declined: “Сегодня результат на {delta} баллов ниже предыдущего лучшего. Это нормально: короткие диагностики немного шумят.”
- Matched: “Ты повторил(а) свой предыдущий лучший результат.”

