Purpose: Detailed setup guide for creating the Custom GPT.
How the GPT should use this file: Use as human-facing setup documentation.
Priority: Medium
Last updated: 2026-05-26

# Setup Custom GPT

## 1. Create GPT

In ChatGPT, open GPT Builder and choose Create.

Name:

`LevelUp Language Test`

Description:

`Short adaptive English diagnostic with approximate CEFR estimate, 0-100 score, report, and study plan.`

## 2. Add Instructions

Open `gpt-config/main_instructions.md` and paste the full content into the Instructions field.

Do not paste all Knowledge files into Instructions. Keep Instructions focused on behavior.

## 3. Upload Knowledge

Upload these folders:

- `knowledge/`
- `question-bank/`
- `research/`
- `tests/`
- `docs/`

The GPT should use `knowledge/00_knowledge_index.md` as the routing map for Knowledge retrieval.

Do not upload unrelated drafts, long research PDFs, or copyrighted exam materials into the GPT Knowledge. Keep Knowledge short, searchable, and original.

## 4. Add Conversation Starters

Copy 4-8 starters from:

- `gpt-config/conversation_starters.md`

## 5. Capabilities

Suggested first version:

- Web browsing: off
- Data analysis: off
- Image generation: off

Turn on browsing only for future research workflows, not for ordinary diagnostic sessions.

## 6. Preview Tests

Run:

- a weak A2 user scenario;
- a B1/B2 boundary scenario;
- a strong C1 scenario;
- prompts from `tests/regression_prompts.md`.

## 7. Retrieval Smoke Test

Ask the GPT:

- “Which file contains the 0-100 scoring scale?”
- “Which file contains CEFR score mapping?”
- “Which file contains adaptive test rules?”
- “Which file contains the writing rubric?”
- “Which file contains final report templates?”
- “Where are diagnostic limitations described?”

Expected files:

- `knowledge/02_scoring_rubric_100.md`
- `knowledge/03_adaptive_test_rules.md`
- `knowledge/05_writing_assessment_rubric.md`
- `knowledge/07_report_templates.md`
- `knowledge/04_language_testing_good_practice.md`

## 8. Release Check

Before sharing, confirm the GPT:

- asks questions in blocks;
- adapts difficulty;
- scores with the 100-point rubric;
- gives limitations;
- does not claim official certification;
- does not imitate copyrighted exam items.
