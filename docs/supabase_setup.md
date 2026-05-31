Purpose: Step-by-step Supabase setup for the LULT leaderboard.
How the GPT should use this file: Use as human-facing setup documentation.
Priority: High
Last updated: 2026-05-29

# Supabase Setup

## 1. Project

Use the Supabase project:

`https://tljcovuwbhoxtimhxxlw.supabase.co`

## 2. Run SQL Schema

Open **SQL Editor** in Supabase and run:

- `actions/supabase_schema.sql`

This creates the `attempts` table, indexes, constraints, and enables Row Level Security.

Do **not** use **Table Editor > Import data** for this file. That screen is for CSV/spreadsheet imports, so it will treat SQL lines as rows, fail delimiter detection, and may say that no primary key was selected.

If you already tried Import data and created a broken table with one text column:

1. delete that broken imported table;
2. open SQL Editor;
3. paste and run `actions/supabase_schema.sql`;
4. confirm that table `attempts` has primary key `id`.

Alternative with Supabase CLI:

- use `supabase/migrations/202605290001_create_attempts.sql`.

## 3. Configure Edge Function Secrets

Set secrets in Supabase, not in repository files:

```text
SUPABASE_URL=https://tljcovuwbhoxtimhxxlw.supabase.co
SUPABASE_SERVICE_ROLE_KEY=<your-service-role-or-secret-key>
LULT_ACTION_API_KEY=<your-action-api-key>
DATABASE_URL=postgresql://postgres:<YOUR-PASSWORD>@db.tljcovuwbhoxtimhxxlw.supabase.co:5432/postgres
```

Do not commit real secret keys, database passwords, service role keys, or full connection strings with passwords.

Because real credentials were shared during setup, rotate the Supabase secret key and database password before production use.

## 4. Deploy Edge Function

From a machine with Supabase CLI configured:

```bash
supabase functions deploy hyper-api
```

Function URL:

`https://tljcovuwbhoxtimhxxlw.supabase.co/functions/v1/hyper-api`

In Supabase Dashboard > Edge Functions > `hyper-api` > Settings, turn **Verify JWT** off.

Why: GPT Actions uses `Authorization: Bearer <LULT_ACTION_API_KEY>`, which is checked by the Edge Function code. Supabase JWT verification expects a Supabase-signed JWT and rejects the request before the function runs.

After changing the setting, save it and test again. The expected failure without a matching action key is now JSON from the function, not a Supabase JWT error:

```json
{
  "error": "unauthorized",
  "message": "Missing or invalid API key."
}
```

## 5. Test Endpoint

```bash
curl -X GET \
  "https://tljcovuwbhoxtimhxxlw.supabase.co/functions/v1/hyper-api/leaderboards?language=english&mode=quick&limit=10" \
  -H "Authorization: Bearer $LULT_ACTION_API_KEY"
```

## 6. Connect GPT Actions

Use:

- `actions/openapi_schema_leaderboard.yaml`
- `docs/gpt_actions_setup.md`
