Purpose: Setup notes for the LULT Supabase Edge Function.
How the GPT should use this file: Use as implementation guidance for deploying the leaderboard function.
Priority: Medium
Last updated: 2026-05-29

# Hyper API Edge Function

This folder contains the first implementation draft for the LULT leaderboard GPT Actions API.

## Routes

- `POST /attempts`
- `GET /leaderboards`
- `GET /profiles/{alias}/progress`

When deployed as a Supabase Edge Function named `hyper-api`, the public URL is:

`https://tljcovuwbhoxtimhxxlw.supabase.co/functions/v1/hyper-api`

## Supabase JWT Setting

Turn **Verify JWT** off in the Supabase function settings for `hyper-api`.

LULT uses a custom GPT Actions bearer key checked inside the function:

```text
Authorization: Bearer <your LULT_ACTION_API_KEY>
```

If Verify JWT is on, Supabase rejects GPT Actions before this function runs with errors like `UNAUTHORIZED_INVALID_JWT_FORMAT`.

If Verify JWT is off but the GPT Actions key is wrong, the function returns:

```json
{
  "error": "unauthorized",
  "message": "Missing or invalid API key."
}
```

## Required Secrets

Set these in Supabase Edge Function secrets:

```text
SUPABASE_URL=https://tljcovuwbhoxtimhxxlw.supabase.co
SUPABASE_SERVICE_ROLE_KEY=<your-service-role-or-secret-key>
LULT_ACTION_API_KEY=<your-action-api-key>
```

Do not commit real secret keys, database passwords, or direct connection strings.

## Deploy

```bash
supabase functions deploy hyper-api
```

## Test

Use fake test data and a real `LULT_ACTION_API_KEY` from your local environment.

```bash
curl -X GET \
  "https://tljcovuwbhoxtimhxxlw.supabase.co/functions/v1/hyper-api/leaderboards?language=english&mode=quick&limit=10" \
  -H "Authorization: Bearer $LULT_ACTION_API_KEY"
```
