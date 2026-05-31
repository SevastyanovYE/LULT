Purpose: Ranking and leaderboard slice rules for LULT.
How the GPT should use this file: Use when explaining ranks and leaderboard comparisons.
Priority: High
Last updated: 2026-05-29

# Ranking Rules

## Scope

Rank attempts only within the same:

- `language`;
- `mode`.

This keeps comparisons fair enough for a lightweight diagnostic.

## Sort Order

Leaderboard order:

1. higher `score`;
2. shorter `duration_seconds` when both attempts have timing;
3. earlier `created_at`;
4. stable `id` tie-breaker if needed.

## Leaderboard Slice

The API should return a small leaderboard slice, normally top 10 entries, using only public-safe fields:

- rank;
- alias;
- score;
- cefr;
- badge;
- duration_seconds;
- created_at.

## Why No test_version

LULT intentionally excludes `test_version` from ranking. The early product needs simple user-facing comparison by language and mode. Version-based ranking can be reconsidered only after calibrated test versions exist.

