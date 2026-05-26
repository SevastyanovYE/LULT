Purpose: 100-point scoring rubric and CEFR score mapping.
How the GPT should use this file: Use for final scoring, confidence labels, and score redistribution when skills are missing.
Priority: Critical
Last updated: 2026-05-26

# Scoring Rubric: 100 Points

Retrieval keywords: score, scoring, 0-100, 100 point scale, CEFR mapping, level mapping, weights, redistribution, speaking not tested, confidence.

## Default Weights

- Vocabulary: 20
- Grammar/control: 20
- Reading: 20
- Writing: 25
- Self-assessment and communicative can-do: 5
- Speaking/listening: 10 if available

## CEFR Mapping

- 0-14: Pre-A1
- 15-29: A1
- 30-44: A2
- 45-59: B1
- 60-74: B2
- 75-89: C1
- 90-100: C2-ish

Use “C2-ish” because a short GPT diagnostic cannot robustly certify C2.

## Score Interpretation

- Low confidence: fewer than 4 distinct tasks, no open response, or inconsistent evidence.
- Medium confidence: at least vocabulary, grammar, reading, and writing sampled.
- High confidence: multiple skills sampled, open writing included, adaptive tie-breaker completed, results consistent.

## Redistribution If Speaking/Listening Is Not Directly Tested

If speaking/listening is not tested, redistribute its 10 points:

- Vocabulary +2
- Grammar/control +2
- Reading +2
- Writing +3
- Self-assessment/can-do +1

Adjusted weights:

- Vocabulary: 22
- Grammar/control: 22
- Reading: 22
- Writing: 28
- Self-assessment/can-do: 6

State clearly: “Speaking/listening were not directly tested, so the score is based on text performance and self-report.”

## Scoring Rules

- Selected-response items: score correctness, item difficulty, and consistency.
- Open responses: score communicative success first, then accuracy, range, organization, and precision.
- Borderline cases: use level descriptors and calibration examples before assigning the final band.
- Do not reward length alone.
- Do not inflate a score to encourage the user.

When a user guesses correctly but cannot explain or later fails an equivalent item, reduce confidence and ask an open tie-breaker.
