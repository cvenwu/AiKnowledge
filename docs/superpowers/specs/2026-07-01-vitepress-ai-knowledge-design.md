# VitePress AI Knowledge Site Design

## Goal

Initialize this repository as an online AI learning documentation site using
VitePress. The site will publish AI interview questions, categorized learning
materials, and curated learning resources through GitHub Pages.

## Context

The repository is currently minimal. It contains only `README.md`, `LICENSE`,
and Git metadata. There is no existing package manager setup, frontend
framework, or documentation generator.

The target deployment platform is GitHub Pages for the repository
`cvenwu/AiKnowledge`, so the VitePress base path must be `/AiKnowledge/`.

## Recommended Approach

Use `docs/` as the VitePress source directory and keep the root `README.md` as
the GitHub repository introduction. Add a small VitePress site structure with
manual navigation and sidebars, then add a GitHub Actions workflow that builds
and publishes the site on pushes to `main`.

This approach keeps the initial setup small while leaving clear places for
future content growth.

## Site Structure

Initial content sections:

- `docs/index.md`: site homepage and main entry points.
- `docs/interview/`: AI interview questions.
- `docs/learning/`: categorized AI learning materials.
- `docs/resources/`: curated learning resources.
- `docs/guide/`: usage and maintenance notes.
- `docs/superpowers/`: internal agent design and implementation records,
  excluded from public VitePress publishing.

Repository guidance:

- `CLAUDE.md`: project-level implementation and writing conventions.
- `docs/CLAUDE.md`: documentation-directory conventions.

## VitePress Configuration

Create `docs/.vitepress/config.mts` with:

- Site title: `AI Knowledge`.
- Description: AI learning notes, interview questions, and resources.
- `base: '/AiKnowledge/'`.
- `srcExclude: ['CLAUDE.md', 'superpowers/**/*.md']` to keep internal guidance
  and planning records out of the generated site.
- Top navigation for homepage, interview questions, learning materials, and
  resources.
- Manual sidebars for the initial sections.
- Social link to the GitHub repository.

## Package Setup

Add `package.json` with VitePress as a development dependency and these scripts:

- `docs:dev`
- `docs:build`
- `docs:preview`

Use npm for the initial setup unless a different package manager is introduced
later.

## GitHub Pages Deployment

Add `.github/workflows/deploy.yml` that:

- Runs on pushes to `main`.
- Installs Node.js and npm dependencies.
- Builds the VitePress site.
- Uploads `docs/.vitepress/dist` as a Pages artifact.
- Deploys through GitHub Pages.

The GitHub repository must have Pages configured to use GitHub Actions as the
source.

## Content Style

Write pages in concise Chinese by default. Use direct technical wording, stable
section names, and consistent terms such as `AI`, `LLM`, `RAG`, `GitHub`, and
`VitePress`.

Avoid custom Vue components in the initial version. Markdown pages are enough
for the current content.

## Validation

After implementation:

- Run dependency installation.
- Run `npm run docs:build`.
- Start the local docs server with `npm run docs:dev -- --host 0.0.0.0` or an
  equivalent command and provide the local URL.
- Check that the generated site uses the `/AiKnowledge/` base path.
