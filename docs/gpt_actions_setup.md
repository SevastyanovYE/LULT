Purpose: Step-by-step GPT Actions setup for the LULT leaderboard.
How the GPT should use this file: Use as human-facing setup documentation for GPT Builder.
Priority: High
Last updated: 2026-05-31

# GPT Actions Setup

## 1. Open GPT Builder

Open the LULT GPT in GPT Builder and go to Actions.

## 2. Paste OpenAPI Schema

Paste the contents of:

- `actions/openapi_schema_leaderboard.yaml`

The schema uses:

`https://tljcovuwbhoxtimhxxlw.supabase.co/functions/v1/hyper-api`

Privacy Policy URL:

`https://github.com/SevastyanovYE/LULT/blob/main/PRIVACY_POLICY.md`

Raw Privacy Policy URL:

`https://raw.githubusercontent.com/SevastyanovYE/LULT/main/PRIVACY_POLICY.md`

## 3. Configure Auth

Use API key / bearer authentication:

```text
Authorization: Bearer YOUR_LULT_ACTION_API_KEY
```

Store the real `LULT_ACTION_API_KEY` only in GPT Actions authentication settings. Paste only the key value unless the UI explicitly asks for the full header value.

Recommended GPT Builder auth setup:

- Authentication type: API key.
- Auth type / location: Bearer or Authorization header.
- Header name, if requested: `Authorization`.
- Value format, if requested: `Bearer YOUR_LULT_ACTION_API_KEY`.

Do not paste service role keys or database passwords into GPT Instructions or Knowledge.

In Supabase Edge Function settings for `hyper-api`, turn **Verify JWT** off. GPT Actions does not send a Supabase JWT for this API; it sends the custom action key that the Edge Function validates.

If Verify JWT stays on, calls can fail before reaching the function with:

```text
UNAUTHORIZED_INVALID_JWT_FORMAT
Auth header is not 'Bearer {token}'
```

## 4. Test Action Calls

Test:

- `getLeaderboard` with `language=english`, `mode=quick`.
- `saveAttempt` with fake alias and fake diagnostic data.
- `getProfileProgress` with the same fake alias.

## 5. What Not To Expose

Never expose:

- Supabase service role key;
- Supabase secret key;
- database password;
- direct connection string with password;
- raw user answers;
- personal data.

## 6. GPT Behavior Check

The GPT should:

- ask consent before the first diagnostic question in test modes;
- ask alias only;
- call `saveAttempt` automatically after the final result when consent was given;
- show rank, leaderboard slice, and personal progress after saving;
- explain progress and leaderboard in the selected interface language.

## 7. Troubleshooting

- `NOT_FOUND` from Supabase usually means the OpenAPI server URL uses the wrong function slug.
- `UNAUTHORIZED_INVALID_JWT_FORMAT` means Supabase **Verify JWT** is still on, so the request is rejected before the Edge Function code runs.
- JSON `{"error":"unauthorized"}` from the function means Verify JWT is off, but `LULT_ACTION_API_KEY` in GPT Actions does not match the Edge Function secret.
- JSON `{"error":"not_found"}` from the function means the request reached the function, but the path does not match `/attempts`, `/leaderboards`, or `/profiles/{alias}/progress`.
