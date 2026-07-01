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
