# AiKnowledge Project Guide

## Project Purpose

This repository hosts an AI learning documentation site built with VitePress.
The site is intended for AI interview questions, categorized learning notes,
and curated learning resources.

## Technical Direction

- Use VitePress as the documentation framework.
- Keep the VitePress source under `docs/`.
- Keep the repository-level `README.md` as the GitHub project introduction.
- Deploy through GitHub Pages from the `main` branch with GitHub Actions.
- Configure VitePress with `base: '/AiKnowledge/'` for the GitHub Pages
  repository path.

## Expected Commands

After the VitePress project is initialized, use these npm scripts:

- `npm run docs:dev` for local development.
- `npm run docs:build` for production builds.
- `npm run docs:preview` for previewing the built site.

## Repository Conventions

- Put documentation content in `docs/`.
- Put VitePress configuration in `docs/.vitepress/config.mts`.
- Put static assets in `docs/public/`.
- Keep `docs/CLAUDE.md` and internal planning records under `docs/superpowers/`
  excluded from VitePress publishing and public navigation.
- Put GitHub Pages deployment workflow files in `.github/workflows/`.
- Do not commit `node_modules/`, `docs/.vitepress/cache/`, or
  `docs/.vitepress/dist/`.
- Prefer a small dependency surface. Add dependencies only when they directly
  improve the documentation site.
- When adding a new top-level documentation section, update VitePress navigation
  and sidebar configuration in the same change.

## Writing Style

- Write documentation in concise Chinese by default.
- Use direct, technical wording. Avoid marketing language and empty slogans.
- Use Chinese corner quotes `「」` in visible Chinese prose.
- Keep spaces between Chinese text and readable English terms or numbers, for
  example `AI 面试题`, `LLM 应用`, and `版本 1.0`.
- Normalize visible technical terms: `AI`, `LLM`, `RAG`, `API`, `JSON`,
  `GitHub`, `VitePress`, `Node.js`.
- Do not alter code literals, file paths, URLs, JSON keys, or command names for
  spacing or capitalization.

## Implementation Notes

- Keep the initial site lightweight: homepage, AI interview questions, learning
  materials, learning resources, and a small guide section.
- Prefer clear Markdown pages over custom Vue components unless a page needs
  real interactivity.
- Keep navigation stable. New content should fit existing sections before
  introducing another top-level section.
