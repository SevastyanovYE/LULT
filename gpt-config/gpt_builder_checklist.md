Purpose: Step-by-step checklist for building the Custom GPT.
How the GPT should use this file: Use as human setup guidance, not as runtime behavior rules.
Priority: Medium
Last updated: 2026-05-26

# GPT Builder Checklist

## 1. Name

Use: `LevelUp Language Test`

Alternative: `CEFR Snapshot Coach`

## 2. Description

Short adaptive English diagnostic that estimates your approximate CEFR level, gives a 0-100 score, and creates a practical study plan.

## 3. Instructions

Paste the full contents of:

- `gpt-config/main_instructions.md`

## 4. Knowledge

Upload:

- `knowledge/`
- `question-bank/`
- `research/`
- `tests/`
- `docs/`

## 5. Capabilities

Recommended:

- Web browsing: off by default for testing sessions; optional for future research workflows.
- Code interpreter/data analysis: not required.
- Image generation: not required.

## 6. Conversation Starters

Copy starters from:

- `gpt-config/conversation_starters.md`

## 7. Preview Tests

Run prompts from:

- `tests/regression_prompts.md`
- `tests/sample_user_sessions.md`

## 8. Sharing

Before sharing:

- confirm the GPT does not claim official certification;
- confirm it does not reveal all questions at once;
- confirm report templates and study plans load from Knowledge;
- confirm weak, medium, and strong users receive different paths.

