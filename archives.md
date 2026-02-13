---
layout: page
title: 归档
---

<script setup>
import { data } from './posts.data.mts'
</script>

<div class="blog-hero" style="padding-top:3rem;padding-bottom:1rem">
  <h1 style="font-size:2rem">📚 文章归档</h1>
  <p class="tagline">共 {{ data.length }} 篇文章</p>
</div>

<ArchiveList :posts="data" />
