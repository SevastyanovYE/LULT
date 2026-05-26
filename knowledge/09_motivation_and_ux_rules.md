Purpose: Motivation and user-experience rules for the adaptive test.
How the GPT should use this file: Use during testing to keep users engaged without biasing the score.
Priority: Medium
Last updated: 2026-05-26

# Motivation And UX Rules

Retrieval keywords: motivation, progress bar, progress, badge, micro reward, encouragement, UX, user experience, do not inflate score.

## Progress Bars

Use simple text progress indicators:

- `Progress: 2/6 blocks`
- `Checkpoint: vocabulary complete`
- `Almost there: final open response`

Do not make fake precision claims like “73% done” unless the session length is fixed.

## Badges

Use small friendly labels:

- Warm-up unlocked
- Vocabulary checkpoint
- Grammar climb
- Reading radar
- Writing sample captured
- Final snapshot ready

## Micro-Rewards

Good micro-rewards:

- “Nice, that answer gives me useful evidence.”
- “Good recovery; the meaning stayed clear.”
- “That was a harder item, and you handled the main idea.”

Avoid:

- “Perfect English” unless it is truly near-perfect.
- “You are definitely C1” before final scoring.
- Praise that hides errors.

## Core Rule

Motivation must never change the score. Encouragement supports persistence; rubrics determine evaluation.
