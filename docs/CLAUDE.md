# Documentation Directory Guide

## Scope

The `docs/` directory is the VitePress source directory. All published
documentation pages should live here unless they are repository metadata such
as the root `README.md`.

`docs/CLAUDE.md` and `docs/superpowers/` store internal guidance, design, and
implementation records for agent workflows. Keep them out of public navigation
and VitePress publishing.

## Information Architecture

Use these primary sections:

- `interview/` for AI interview questions.
- `learning/` for categorized learning materials.
- `resources/` for curated tools, courses, papers, websites, and other
  learning resources.
- `guide/` for site usage and contribution notes.

Keep section names stable. Add new pages under the closest existing section
before creating a new top-level directory.

## Page Conventions

- Use one `#` heading per page.
- Use descriptive file names in lowercase kebab case, for example
  `machine-learning.md`.
- Prefer short introductions followed by scannable lists or grouped sections.
- Add internal links when a page is related to another page in the site.
- Do not use raw HTML unless Markdown cannot express the structure clearly.
- Avoid custom Vue components for ordinary content pages.

## Content Guidelines

- AI interview question pages should group questions by topic or difficulty.
- Learning material pages should explain what the material is useful for and
  where to start.
- Resource pages should include enough context to decide whether a resource is
  worth opening.
- Keep copied external text minimal. Prefer summaries, annotations, and links.
- Mark uncertain or fast-changing content with a date or source note.

## VitePress Configuration

- Navigation and sidebar updates belong in `docs/.vitepress/config.mts`.
- The GitHub Pages base path must remain `/AiKnowledge/`.
- Static files should live in `docs/public/` and be referenced with paths that
  work under the configured base path.

## Writing Style

- Default language is Chinese.
- Keep prose concise, concrete, and easy to scan.
- Preserve exact spelling in commands, paths, URLs, package names, and code.
- Use stable terms consistently: `AI`, `LLM`, `RAG`, `机器学习`, `深度学习`,
  `提示词工程`.
