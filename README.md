# Howard's Blog

> 个人博客 — 使用 VitePress 构建，部署到 GitHub Pages

## 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

浏览器打开 `http://localhost:5173` 即可预览。

### 构建

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

## 写文章

在 `posts/` 目录下创建 `.md` 文件，添加如下 frontmatter：

```md
---
title: 文章标题
date: 2026-02-13
description: 文章简短描述
tags:
  - 标签1
  - 标签2
---

正文内容...

<!-- more -->

正文后续内容...
```

> `<!-- more -->` 之前的内容会作为文章摘要显示在首页。

## 部署

推送到 `main` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages。

### 首次部署步骤

1. 在 GitHub 创建仓库
2. 进入仓库 **Settings → Pages → Source**，选择 **GitHub Actions**
3. 推送代码到 `main` 分支
4. 等待 Actions 完成，即可访问博客

## 目录结构

```
├── .github/workflows/   # GitHub Actions 部署配置
├── .vitepress/
│   ├── config.mts        # VitePress 配置
│   └── theme/             # 自定义主题
│       ├── index.ts
│       ├── style.css
│       └── components/    # Vue 组件
├── posts/                 # 📝 博客文章（在这里写文章）
├── index.md               # 首页
├── archives.md            # 归档页
├── about.md               # 关于页
├── posts.data.mts         # 文章数据加载器
└── package.json
```

## 自定义

- **修改博客名称/描述**：编辑 `.vitepress/config.mts`
- **修改样式/配色**：编辑 `.vitepress/theme/style.css`
- **修改导航栏**：编辑 `.vitepress/config.mts` 中的 `nav` 配置
- **添加社交链接**：编辑 `.vitepress/config.mts` 中的 `socialLinks`
