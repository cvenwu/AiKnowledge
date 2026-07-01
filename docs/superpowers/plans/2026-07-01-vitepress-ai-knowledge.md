# VitePress AI Knowledge Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Initialize this repository as a VitePress-powered AI learning documentation site deployed by GitHub Actions to GitHub Pages.

**Architecture:** Use `docs/` as the VitePress source directory, with manual navigation and sidebar configuration in `docs/.vitepress/config.mts`. Keep content as Markdown pages organized by interview questions, learning materials, resources, and guide pages.

**Tech Stack:** VitePress, TypeScript config, npm, GitHub Actions, GitHub Pages.

---

## File Structure

- Create `package.json`: npm metadata, scripts, and VitePress development dependency.
- Create `.gitignore`: Node.js and VitePress generated-output ignores.
- Modify `README.md`: repository-level introduction and local usage commands.
- Create `docs/.vitepress/config.mts`: VitePress site metadata, base path, navigation, sidebars, search, and GitHub link.
- Create `docs/index.md`: public homepage with section entry points.
- Create `docs/interview/index.md`: AI interview section landing page.
- Create `docs/interview/machine-learning.md`: initial machine learning interview questions.
- Create `docs/interview/llm.md`: initial LLM interview questions.
- Create `docs/learning/index.md`: learning materials section landing page.
- Create `docs/learning/foundations.md`: initial foundation-learning outline.
- Create `docs/learning/llm-applications.md`: initial LLM application-learning outline.
- Create `docs/resources/index.md`: resources section landing page.
- Create `docs/resources/tools.md`: initial AI tools resource page.
- Create `docs/resources/papers.md`: initial papers and reading resource page.
- Create `docs/guide/index.md`: site usage and maintenance notes.
- Create `.github/workflows/deploy.yml`: GitHub Pages deployment workflow.

### Task 1: Package Setup

**Files:**
- Create: `package.json`
- Create: `.gitignore`

- [ ] **Step 1: Create npm metadata and scripts**

Create `package.json`:

```json
{
  "name": "ai-knowledge",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
  "devDependencies": {
    "vitepress": "^1.6.3"
  }
}
```

- [ ] **Step 2: Ignore generated files**

Create `.gitignore`:

```gitignore
node_modules/
docs/.vitepress/cache/
docs/.vitepress/dist/
.DS_Store
*.log
```

- [ ] **Step 3: Verify package metadata parses**

Run: `node -e "const p=require('./package.json'); console.log(p.scripts['docs:build'])"`

Expected output:

```text
vitepress build docs
```

### Task 2: VitePress Configuration

**Files:**
- Create: `docs/.vitepress/config.mts`

- [ ] **Step 1: Create the VitePress config**

Create `docs/.vitepress/config.mts`:

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI Knowledge',
  description: 'AI 面试题、学习资料与资源导航',
  base: '/AiKnowledge/',
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ['CLAUDE.md', 'superpowers/**/*.md'],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'AI 面试题', link: '/interview/' },
      { text: '学习资料', link: '/learning/' },
      { text: '学习资源', link: '/resources/' },
      { text: '维护指南', link: '/guide/' }
    ],
    sidebar: {
      '/interview/': [
        {
          text: 'AI 面试题',
          items: [
            { text: '概览', link: '/interview/' },
            { text: '机器学习', link: '/interview/machine-learning' },
            { text: 'LLM', link: '/interview/llm' }
          ]
        }
      ],
      '/learning/': [
        {
          text: '学习资料',
          items: [
            { text: '概览', link: '/learning/' },
            { text: '基础知识', link: '/learning/foundations' },
            { text: 'LLM 应用', link: '/learning/llm-applications' }
          ]
        }
      ],
      '/resources/': [
        {
          text: '学习资源',
          items: [
            { text: '概览', link: '/resources/' },
            { text: '工具清单', link: '/resources/tools' },
            { text: '论文与阅读', link: '/resources/papers' }
          ]
        }
      ],
      '/guide/': [
        {
          text: '维护指南',
          items: [{ text: '站点维护', link: '/guide/' }]
        }
      ]
    },
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/cvenwu/AiKnowledge' }
    ],
    footer: {
      message: 'Built with VitePress.',
      copyright: 'Copyright © 2026-present AiKnowledge'
    }
  }
})
```

- [ ] **Step 2: Confirm the GitHub Pages base path is present**

Run: `rg -n "base: '/AiKnowledge/'" docs/.vitepress/config.mts`

Expected output includes:

```text
base: '/AiKnowledge/'
```

### Task 3: Initial Documentation Pages

**Files:**
- Create: `docs/index.md`
- Create: `docs/interview/index.md`
- Create: `docs/interview/machine-learning.md`
- Create: `docs/interview/llm.md`
- Create: `docs/learning/index.md`
- Create: `docs/learning/foundations.md`
- Create: `docs/learning/llm-applications.md`
- Create: `docs/resources/index.md`
- Create: `docs/resources/tools.md`
- Create: `docs/resources/papers.md`
- Create: `docs/guide/index.md`

- [ ] **Step 1: Create the homepage**

Create `docs/index.md`:

```markdown
---
layout: home

hero:
  name: AI Knowledge
  text: AI 学习知识库
  tagline: 整理 AI 面试题、分类学习资料和实用学习资源。
  actions:
    - theme: brand
      text: 查看 AI 面试题
      link: /interview/
    - theme: alt
      text: 浏览学习资料
      link: /learning/

features:
  - title: AI 面试题
    details: 按主题整理机器学习、深度学习和 LLM 相关问题，适合面试前查漏补缺。
    link: /interview/
  - title: 学习资料
    details: 按基础知识、模型原理和应用实践组织内容，方便持续补全学习笔记。
    link: /learning/
  - title: 学习资源
    details: 收集工具、课程、论文、网站和实践项目，并补充简短使用说明。
    link: /resources/
---
```

- [ ] **Step 2: Create interview pages**

Create `docs/interview/index.md`:

```markdown
# AI 面试题

本栏目整理 AI 相关面试题，覆盖机器学习、深度学习、LLM 和应用实践。

## 分类

- [机器学习](./machine-learning.md)：基础概念、模型评估、特征工程和经典算法。
- [LLM](./llm.md)：Transformer、提示词工程、RAG、微调和应用架构。

## 使用方式

- 面试前按主题快速复习。
- 学习过程中把易混淆概念整理成问答。
- 为每个问题补充简短答案、关键点和延伸阅读。
```

Create `docs/interview/machine-learning.md`:

```markdown
# 机器学习面试题

## 基础概念

### 监督学习和无监督学习有什么区别？

监督学习使用带标签数据训练模型，目标是学习输入到标签的映射。无监督学习使用无标签数据，目标是发现数据中的结构，例如聚类、降维或异常模式。

### 过拟合和欠拟合分别是什么？

过拟合表示模型在训练集上表现很好，但在新数据上泛化能力差。欠拟合表示模型无法充分学习数据规律，在训练集和测试集上表现都不好。

## 模型评估

### 准确率、精确率和召回率有什么区别？

准确率衡量整体预测正确比例。精确率关注预测为正的样本中有多少是真的正样本。召回率关注真实正样本中有多少被模型找回。

### 为什么只看准确率可能不够？

当类别分布不均衡时，模型即使总是预测多数类，也可能得到较高准确率。此时需要结合精确率、召回率、F1、AUC 等指标判断模型效果。

## 特征与训练

### 特征归一化有什么作用？

特征归一化可以减少不同特征量纲差异对训练的影响，常用于梯度下降、距离度量和正则化敏感的模型。
```

Create `docs/interview/llm.md`:

```markdown
# LLM 面试题

## 模型原理

### Transformer 的核心结构是什么？

Transformer 主要由自注意力机制、前馈网络、残差连接和归一化层组成。自注意力用于建模序列中不同位置之间的依赖关系。

### Attention 解决了什么问题？

Attention 让模型在处理当前位置时，可以根据相关性动态关注输入序列的不同部分，从而更好地建模长距离依赖。

## 应用实践

### RAG 的基本流程是什么？

RAG 通常包含查询改写、向量检索、候选召回、上下文拼接、模型生成和结果评估。它通过外部知识降低模型只依赖参数记忆的风险。

### Prompt 和 fine-tuning 如何选择？

Prompt 适合快速验证、任务变化频繁或样本较少的场景。fine-tuning 适合任务稳定、数据充足且需要模型长期适配特定输出风格或领域知识的场景。

## 工程问题

### LLM 应用为什么需要评估集？

评估集用于稳定衡量提示词、检索策略、模型版本和参数变化的影响。没有评估集时，优化很容易依赖少量主观样例。
```

- [ ] **Step 3: Create learning pages**

Create `docs/learning/index.md`:

```markdown
# 学习资料

本栏目按主题整理 AI 学习资料，适合长期补充学习笔记、课程链接和实践总结。

## 推荐学习顺序

1. [基础知识](./foundations.md)
2. [LLM 应用](./llm-applications.md)

## 内容原则

- 每篇资料说明适用阶段和学习目标。
- 对关键概念保留简短解释。
- 对外部资料补充来源、阅读建议和更新时间。
```

Create `docs/learning/foundations.md`:

```markdown
# 基础知识

## 数学基础

- 线性代数：向量、矩阵、特征值、矩阵分解。
- 概率统计：条件概率、贝叶斯公式、常见分布、期望和方差。
- 优化方法：梯度下降、学习率、正则化、凸优化基础。

## 机器学习基础

- 监督学习：分类、回归、损失函数和模型评估。
- 无监督学习：聚类、降维和异常检测。
- 特征工程：特征选择、特征变换、归一化和缺失值处理。

## 深度学习基础

- 神经网络：前向传播、反向传播、激活函数。
- 训练技巧：BatchNorm、Dropout、权重初始化、优化器。
- 常见结构：CNN、RNN、Transformer。
```

Create `docs/learning/llm-applications.md`:

```markdown
# LLM 应用

## Prompt Engineering

- 明确任务目标、输入格式和输出格式。
- 使用示例约束模型输出。
- 对复杂任务拆分步骤，并通过评估集验证效果。

## RAG

- 文档切分：按语义边界切分，避免片段过短或过长。
- 向量检索：关注召回率、排序质量和上下文冗余。
- 生成阶段：控制上下文长度，并要求模型基于材料回答。

## Agent

- 工具调用：明确工具输入、输出和错误处理方式。
- 状态管理：记录任务进度、上下文和外部系统返回结果。
- 评估方式：用可复现任务集检查稳定性，而不是只看单次演示。
```

- [ ] **Step 4: Create resource and guide pages**

Create `docs/resources/index.md`:

```markdown
# 学习资源

本栏目收集 AI 学习相关的工具、论文、课程、网站和项目资源。

## 分类

- [工具清单](./tools.md)：开发、检索、评估和实验工具。
- [论文与阅读](./papers.md)：经典论文、综述和推荐阅读材料。

## 收录标准

- 资源和 AI 学习或实践直接相关。
- 提供简短说明，说明适合什么阶段使用。
- 优先收录长期有效、来源清晰的内容。
```

Create `docs/resources/tools.md`:

```markdown
# 工具清单

## 开发工具

- Python：AI 开发和实验中最常用的编程语言。
- Jupyter Notebook：适合实验记录、数据分析和模型验证。
- VS Code：适合日常代码开发和 Markdown 文档维护。

## LLM 应用工具

- LangChain：用于构建 LLM 应用流程和工具调用。
- LlamaIndex：用于文档索引、检索和 RAG 应用。
- Ollama：用于本地运行和测试开源模型。

## 评估工具

- RAGAS：用于评估 RAG 系统的回答质量和检索质量。
- DeepEval：用于构建 LLM 应用评估用例。
```

Create `docs/resources/papers.md`:

```markdown
# 论文与阅读

## 经典论文

- Attention Is All You Need：Transformer 架构的代表性论文。
- BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding：理解预训练语言模型的重要论文。
- Language Models are Few-Shot Learners：GPT-3 论文，展示大模型的 few-shot 能力。

## 阅读建议

- 先读摘要、引言和结论，明确论文解决的问题。
- 结合图表理解模型结构和实验结论。
- 对关键论文保留自己的问题清单和复述笔记。
```

Create `docs/guide/index.md`:

```markdown
# 站点维护

## 本地开发

安装依赖后运行：

```bash
npm run docs:dev
```

## 构建检查

提交前运行：

```bash
npm run docs:build
```

## 新增页面

1. 在对应栏目目录下新增 Markdown 文件。
2. 使用一个清晰的 `#` 一级标题。
3. 在 `docs/.vitepress/config.mts` 中补充侧边栏入口。
4. 必要时从相关页面增加内部链接。

## 部署

推送到 `main` 后，GitHub Actions 会构建站点并发布到 GitHub Pages。仓库的 Pages 来源需要设置为 GitHub Actions。
```

- [ ] **Step 5: Confirm every configured sidebar target exists**

Run:

```bash
test -f docs/interview/index.md &&
test -f docs/interview/machine-learning.md &&
test -f docs/interview/llm.md &&
test -f docs/learning/index.md &&
test -f docs/learning/foundations.md &&
test -f docs/learning/llm-applications.md &&
test -f docs/resources/index.md &&
test -f docs/resources/tools.md &&
test -f docs/resources/papers.md &&
test -f docs/guide/index.md
```

Expected: command exits with code `0`.

### Task 4: Repository README and Deployment Workflow

**Files:**
- Modify: `README.md`
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: Update README**

Replace `README.md` with:

```markdown
# AiKnowledge

AI 学习知识库，使用 VitePress 构建，内容包括 AI 面试题、分类学习资料和学习资源导航。

## 本地开发

安装依赖：

```bash
npm install
```

启动文档站：

```bash
npm run docs:dev
```

构建检查：

```bash
npm run docs:build
```

预览构建结果：

```bash
npm run docs:preview
```

## 目录

- `docs/`：VitePress 文档源码。
- `docs/.vitepress/config.mts`：站点配置。
- `.github/workflows/deploy.yml`：GitHub Pages 自动部署。

## 部署

推送到 `main` 后，GitHub Actions 会构建并发布站点。GitHub Pages 的来源需要设置为 GitHub Actions。
```

- [ ] **Step 2: Add GitHub Pages workflow**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy VitePress site to Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run docs:build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 3: Confirm workflow references the build script**

Run: `rg -n "npm run docs:build|deploy-pages|upload-pages-artifact" .github/workflows/deploy.yml`

Expected output includes:

```text
npm run docs:build
actions/upload-pages-artifact@v3
actions/deploy-pages@v4
```

### Task 5: Install, Build, and Preview

**Files:**
- Create: `package-lock.json`

- [ ] **Step 1: Install dependencies**

Run: `npm install`

Expected:

```text
added ... packages
```

The exact package count may vary by npm version. The command must exit with code `0` and create `package-lock.json`.

- [ ] **Step 2: Build the documentation site**

Run: `npm run docs:build`

Expected output includes:

```text
vitepress v
✓ built in
```

- [ ] **Step 3: Confirm build output is not tracked**

Run: `git status --short --ignored docs/.vitepress/dist | sed -n '1,20p'`

Expected output includes ignored build output lines beginning with:

```text
!!
```

- [ ] **Step 4: Start the local dev server**

Run: `npm run docs:dev -- --host 0.0.0.0`

Expected output includes a local URL similar to:

```text
Local:   http://localhost:5173/AiKnowledge/
```

Keep the server running and share the URL with the user.

### Task 6: Final Review

**Files:**
- Review: all changed files

- [ ] **Step 1: Review the diff**

Run: `git diff -- . ':!package-lock.json'`

Expected: diff only contains the VitePress setup, docs content, CLAUDE guidance, design spec, implementation plan, README update, `.gitignore`, and GitHub Actions workflow.

- [ ] **Step 2: Check final status**

Run: `git status --short`

Expected: new and modified files are visible, with no accidental generated output except `package-lock.json`.

- [ ] **Step 3: Commit if requested**

Only commit if the user asks for it. If requested, run:

```bash
git add .
git commit -m "feat: initialize vitepress docs site"
```
