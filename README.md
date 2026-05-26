Purpose: Entry point for the LevelUp Language Test repository.
How the GPT should use this file: Use for project orientation only; do not use as the main testing rubric.
Priority: Medium
Last updated: 2026-05-26

# LevelUp Language Test (LULT)

LevelUp Language Test is a compact knowledge base for a Custom GPT that runs a short adaptive English diagnostic, estimates an approximate CEFR level, and returns a short or detailed learning report.

The project is designed for GPT Knowledge: small Markdown files, clear headings, searchable labels, and a strict separation between GPT behavior instructions and reference material.

All diagnostic tasks in the first question bank are original LULT items. They are not copied from IELTS, TOEFL, Cambridge English, Duolingo English Test, EF SET, or other branded exams.

## What To Put In Custom GPT Instructions

Paste these files manually into the GPT Builder **Instructions** field:

- `gpt-config/main_instructions.md`

Use these while configuring the GPT:

- `gpt-config/conversation_starters.md`
- `gpt-config/gpt_builder_checklist.md`

## What To Upload To Custom GPT Knowledge

Upload these folders to **Knowledge**:

- `knowledge/`
- `question-bank/`
- `research/`
- `tests/`
- `docs/`

Do not paste the full question bank into Instructions. The GPT should retrieve only the relevant items during a session.

Most runtime retrieval should start with:

- `knowledge/00_knowledge_index.md`

Fast lookup files:

- scoring and CEFR mapping: `knowledge/02_scoring_rubric_100.md`
- adaptation rules: `knowledge/03_adaptive_test_rules.md`
- writing rubric: `knowledge/05_writing_assessment_rubric.md`
- final reports: `knowledge/07_report_templates.md`
- diagnostic limitations: `knowledge/04_language_testing_good_practice.md`

## Quick Start

1. Open ChatGPT GPT Builder.
2. Create a GPT named `LevelUp Language Test`.
3. Paste `gpt-config/main_instructions.md` into Instructions.
4. Upload all files from `knowledge/`, `question-bank/`, `research/`, `tests/`, and `docs/` to Knowledge.
5. Add conversation starters from `gpt-config/conversation_starters.md`.
6. Test with prompts from `tests/regression_prompts.md`.

## Important Limitation

LULT is a diagnostic coaching tool. It is not an official CEFR exam, certificate, placement test, IELTS/TOEFL/Cambridge/Duolingo/EF SET clone, or substitute for a trained human examiner.

## Human Editing Priorities

Edit in this order:

1. `gpt-config/main_instructions.md` for behavior.
2. `knowledge/02_scoring_rubric_100.md` for scoring and mapping.
3. `knowledge/03_adaptive_test_rules.md` for test flow.
4. `knowledge/05_writing_assessment_rubric.md` and `knowledge/10_calibration_examples.md` for assessment quality.
5. `question-bank/english/` for item coverage.
