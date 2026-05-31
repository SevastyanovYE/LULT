Purpose: HTTP API contract for LULT GPT Actions leaderboard integration.
How the GPT should use this file: Use to understand request and response fields for leaderboard actions.
Priority: Critical
Last updated: 2026-05-29

# API Contract

Base URL:

`https://tljcovuwbhoxtimhxxlw.supabase.co/functions/v1/hyper-api`

Auth:

`Authorization: Bearer YOUR_LULT_ACTION_API_KEY`

Never place real service role keys or database passwords in GPT Actions.

## POST /attempts

Save one consent-based attempt and return personal progress plus rank.

Request:

- `alias`: string, required.
- `language`: string, required.
- `interface_language`: `ru` or `en`, required.
- `mode`: string, required.
- `score`: integer 0-100, required.
- `cefr`: string, required.
- `confidence`: `low`, `medium`, or `high`, required.
- `subscores`: object, optional.
- `started_at`: ISO timestamp, optional.
- `completed_at`: ISO timestamp, optional.
- `duration_seconds`: integer, optional.
- `badge`: string, optional.
- `summary`: string, optional.

Response:

- `saved`: boolean.
- `current_score`: integer.
- `previous_best_score`: integer or null.
- `delta`: integer or null.
- `improved`: boolean or null.
- `previous_cefr`: string or null.
- `current_cefr`: string.
- `rank`: integer or null.
- `leaderboard_slice`: array.

## GET /leaderboards

Query:

- `language`: string, required.
- `mode`: string, required.
- `limit`: integer, optional, default 10, max 50.

Response:

- `language`
- `mode`
- `entries`

## GET /profiles/{alias}/progress

Query:

- `language`: string, required.
- `mode`: string, required.

Response:

- `alias`
- `language`
- `mode`
- `best_score`
- `latest_score`
- `attempts_count`
- `history`

## Error Shape

Errors return JSON:

```json
{
  "error": "short_error_code",
  "message": "Human-readable message"
}
```

