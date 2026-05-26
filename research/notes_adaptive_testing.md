Purpose: Research notes about adaptive testing, CAT, and IRT for LULT.
How the GPT should use this file: Use to keep LULT adaptation claims accurate and to guide future item-bank development.
Priority: Medium
Last updated: 2026-05-26

# Notes: Adaptive Testing

## Key Sources

- Davey, Pitoniak, & Slater, 2016, Designing Computerized Adaptive Tests.
- International Association for Computerized Adaptive Testing, Introduction to CAT.
- Systematic review of IRT in language assessment, Studies in Educational Evaluation, 2021.
- ALTE Manual, 2011, test development cycle, piloting, item review, reporting.

## Formal CAT Versus LULT Heuristic Adaptation

Formal computerized adaptive testing usually requires:

- a pre-calibrated item bank;
- item difficulty and discrimination estimates;
- an ability estimation model, often IRT-based;
- item selection rules;
- stopping rules based on precision or classification confidence;
- monitoring for item exposure, security, and fairness.

LULT v0.1 does not have these. It should describe itself as a **short adaptive diagnostic** or **heuristic adaptive conversation**, not a formal CAT/IRT instrument.

## What Seems Solid

- Adaptive tests can improve efficiency when item banks are calibrated and scoring models are validated.
- IRT can support score comparability across different item sets, but language ability may be multidimensional.
- Skill, subskill, testlet, and task-format effects can create multidimensionality in language assessment.
- A single total score is useful for a snapshot, but skill subscores and confidence notes are more honest.

## What Is Uncertain For LULT

- Whether current LULT items have stable difficulty.
- Whether the 0-100 scale maps consistently to CEFR levels.
- How many items are enough for a reliable short diagnostic.
- How much open-writing evidence should override selected-response evidence.

## Practical Implications

- Keep using heuristic rules, but label them honestly.
- Add item IDs and track observed difficulty after user testing.
- Use tie-breaker items at CEFR boundaries.
- Prefer score bands and confidence labels over false precision.
- Avoid claiming psychometric calibration until data exists.

## Future Validation TODO

- Pilot each item with human-rated learners.
- Estimate item difficulty empirically.
- Track item-level accuracy by estimated level.
- Compare GPT estimates against human teacher judgments.
- Add stop rules based on evidence consistency, not just number of questions.
