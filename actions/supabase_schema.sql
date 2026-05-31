-- Purpose: Supabase/Postgres schema for the LULT leaderboard.
-- How the GPT should use this file: Use as the SQL setup script for the primary leaderboard storage.
-- Priority: Critical
-- Last updated: 2026-05-29

-- IMPORTANT:
-- Run this file in Supabase SQL Editor or through a migration.
-- Do not upload this file in Table Editor > Import data.
-- The import tool treats SQL lines as spreadsheet rows and cannot detect this primary key.

create extension if not exists pgcrypto;

create table if not exists public.attempts (
  id uuid primary key default gen_random_uuid(),
  alias text not null,
  language text not null,
  interface_language text not null default 'ru',
  mode text not null,
  score integer not null check (score between 0 and 100),
  cefr text not null,
  confidence text not null,
  vocabulary_score integer,
  grammar_score integer,
  reading_score integer,
  writing_score integer,
  speaking_score integer,
  listening_score integer,
  started_at timestamptz,
  completed_at timestamptz,
  duration_seconds integer,
  badge text,
  summary text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  constraint chk_attempts_alias_length check (char_length(btrim(alias)) between 2 and 32),
  constraint chk_attempts_language_length check (char_length(btrim(language)) between 2 and 32),
  constraint chk_attempts_mode_length check (char_length(btrim(mode)) between 2 and 48),
  constraint chk_attempts_confidence_allowed check (confidence in ('low', 'medium', 'high')),
  constraint chk_attempts_interface_language_allowed check (interface_language in ('ru', 'en')),
  constraint chk_attempts_duration_non_negative check (duration_seconds is null or duration_seconds >= 0),
  constraint chk_attempts_vocabulary_score_range check (vocabulary_score is null or vocabulary_score between 0 and 100),
  constraint chk_attempts_grammar_score_range check (grammar_score is null or grammar_score between 0 and 100),
  constraint chk_attempts_reading_score_range check (reading_score is null or reading_score between 0 and 100),
  constraint chk_attempts_writing_score_range check (writing_score is null or writing_score between 0 and 100),
  constraint chk_attempts_speaking_score_range check (speaking_score is null or speaking_score between 0 and 100),
  constraint chk_attempts_listening_score_range check (listening_score is null or listening_score between 0 and 100)
);

create index if not exists idx_attempts_alias_language_mode
  on public.attempts (alias, language, mode);

create index if not exists idx_attempts_language_mode_score_desc
  on public.attempts (language, mode, score desc, duration_seconds asc nulls last, created_at asc);

create index if not exists idx_attempts_created_at_desc
  on public.attempts (created_at desc);

alter table public.attempts enable row level security;

-- Writes and reads should go through the server-side Edge Function using a service role secret.
-- Do not expose the service role key to clients or GPT users.
-- No public RLS policies are created in v0.1.
