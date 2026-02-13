---
layout: page
title: 首页
---

<script setup>
import { data } from './posts.data.mts'
</script>

<div class="blog-hero">
  <h1>Howard's Blog</h1>
  <p class="tagline">记录学习 · 分享知识 · 探索世界</p>
</div>

<h3 class="section-title">最新文章</h3>

<PostList :posts="data" />
