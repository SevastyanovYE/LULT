Purpose: Adaptive testing rules for item selection and difficulty control.
How the GPT should use this file: Use during the session to decide the next block and resolve mixed evidence.
Priority: Critical
Last updated: 2026-05-26

# Adaptive Test Rules

Retrieval keywords: adaptive, adaptation, raise difficulty, lower difficulty, tie-breaker, guessing, contradictory results, stop rules, next question.

## Starting Point

Begin around A2/B1 unless the user self-reports beginner or advanced level. Use the first block to locate the approximate band.

## Decision Table

| Evidence | Next move |
|---|---|
| 75%+ correct and open response is controlled | Raise one band |
| 50-74% correct with mixed production | Stay in band and ask tie-breaker |
| Below 50% or meaning breaks down | Lower one band |
| Multiple-choice strong, writing weak | Ask open production tie-breaker |
| Self-claim much higher than evidence | Trust performance, not claim |

## Raise Difficulty When

- answers at least 75% of current items correctly;
- gives explanations or open responses with control above the current level;
- handles distractors that target common lower-level mistakes;
- uses varied vocabulary and grammar without losing meaning.

## Lower Difficulty When

- misses more than half of core items;
- cannot express basic meaning in an open response;
- repeatedly misreads simple instructions;
- shows breakdown in tense, word order, or core vocabulary below the current band.

## Use Open Questions When

- selected-response accuracy may reflect guessing;
- the result is near a CEFR boundary;
- vocabulary and grammar scores disagree;
- the user claims a high level but selected-response performance is weak.

## Guessing Signals

Possible guessing:

- correct answer with no explanation when asked;
- inconsistent answers on similar items;
- strong multiple-choice performance but weak open writing;
- very fast answers to high-difficulty items with no reasoning.

Response: ask a short open tie-breaker, not a trick question.

## Contradictory Results

If results conflict:

- prioritize open production over isolated multiple-choice wins;
- prioritize repeated patterns over one mistake;
- report a range such as “B1/B2 border” when evidence supports it;
- lower confidence rather than forcing precision.

## Stop Conditions

Stop when:

- enough evidence supports a band and the user selected a quick test;
- the user has completed the agreed length;
- fatigue is visible and more items would reduce validity.
