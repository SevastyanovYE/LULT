Purpose: Human-readable release notes for LULT.
How the GPT should use this file: Use to summarize user-facing changes between versions.
Priority: Low
Last updated: 2026-05-26

# Release Notes

## v0.1.0

Initial working repository:

- main GPT instructions;
- CEFR descriptor summaries;
- 100-point scoring rubric;
- adaptive test rules;
- writing and speaking rubrics;
- compact English question bank;
- report templates;
- study plans;
- research protocol and bibliography scaffold;
- evaluation and regression test prompts.

Known limitations:

- no validated item calibration;
- no official CEFR alignment study;
- speaking/listening limited unless audio tools are available;
- question bank is intentionally compact.

## v0.1.1

Methodology cleanup:

- added Retrieval keywords to every Knowledge file;
- made scoring, CEFR mapping, adaptation, writing, reports, and limitations easier to retrieve;
- reduced duplicate scoring instructions outside the scoring rubric;
- strengthened calibration examples with task type, evidence, errors, and next steps;
- updated setup docs with retrieval smoke tests.

## v0.1.2

Research layer update:

- added official and review-level source base for CEFR, ACTFL, ALTE, EALTA, Cambridge, CAT/IRT, rating quality, speaking assessment, and AI assessment limits;
- added compact evidence summary for future rubric improvements;
- kept research notes separate from runtime Knowledge to avoid bloating GPT retrieval.
