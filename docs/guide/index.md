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
