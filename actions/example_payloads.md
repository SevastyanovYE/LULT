Purpose: Example request and response payloads for LULT leaderboard API.
How the GPT should use this file: Use as examples for testing GPT Actions and API behavior.
Priority: Medium
Last updated: 2026-05-29

# Example Payloads

All examples use fake aliases and placeholder auth. Do not put real secrets in this file.

## POST /attempts: First Attempt

Request:

```http
POST /attempts
Authorization: Bearer YOUR_LULT_ACTION_API_KEY
Content-Type: application/json
```

```json
{
  "alias": "SkyLearner",
  "language": "english",
  "interface_language": "ru",
  "mode": "quick",
  "score": 62,
  "cefr": "B2",
  "confidence": "medium",
  "subscores": {
    "vocabulary_score": 66,
    "grammar_score": 58,
    "reading_score": 70,
    "writing_score": 60
  },
  "started_at": "2026-05-29T10:00:00Z",
  "completed_at": "2026-05-29T10:08:40Z",
  "duration_seconds": 520,
  "badge": "Independent Communicator",
  "summary": "Strong reading and clear writing; grammar control needs consistency."
}
```

Response:

```json
{
  "saved": true,
  "current_score": 62,
  "previous_best_score": null,
  "delta": null,
  "improved": null,
  "previous_cefr": null,
  "current_cefr": "B2",
  "rank": 4,
  "leaderboard_slice": [
    {
      "rank": 1,
      "alias": "NorthStar",
      "score": 78,
      "cefr": "C1",
      "badge": "Precision Pilot",
      "duration_seconds": 740,
      "created_at": "2026-05-29T09:20:00Z"
    }
  ]
}
```

## POST /attempts: Improved Repeat

Response:

```json
{
  "saved": true,
  "current_score": 69,
  "previous_best_score": 62,
  "delta": 7,
  "improved": true,
  "previous_cefr": "B2",
  "current_cefr": "B2",
  "rank": 2,
  "leaderboard_slice": []
}
```

## POST /attempts: Lower Repeat With CEFR Change

Response:

```json
{
  "saved": true,
  "current_score": 58,
  "previous_best_score": 62,
  "delta": -4,
  "improved": false,
  "previous_cefr": "B2",
  "current_cefr": "B1",
  "rank": 8,
  "leaderboard_slice": []
}
```

## GET /leaderboards

Request:

```http
GET /leaderboards?language=english&mode=quick&limit=10
Authorization: Bearer YOUR_LULT_ACTION_API_KEY
```

Response:

```json
{
  "language": "english",
  "mode": "quick",
  "entries": [
    {
      "rank": 1,
      "alias": "NorthStar",
      "score": 78,
      "cefr": "C1",
      "badge": "Precision Pilot",
      "duration_seconds": 740,
      "created_at": "2026-05-29T09:20:00Z"
    }
  ]
}
```

## GET /profiles/{alias}/progress

Request:

```http
GET /profiles/SkyLearner/progress?language=english&mode=quick
Authorization: Bearer YOUR_LULT_ACTION_API_KEY
```

Response:

```json
{
  "alias": "SkyLearner",
  "language": "english",
  "mode": "quick",
  "best_score": 69,
  "latest_score": 58,
  "attempts_count": 3,
  "history": [
    {
      "rank": 1,
      "alias": "SkyLearner",
      "score": 58,
      "cefr": "B1",
      "badge": "Conversation Builder",
      "duration_seconds": 500,
      "created_at": "2026-05-29T11:00:00Z"
    }
  ]
}
```

