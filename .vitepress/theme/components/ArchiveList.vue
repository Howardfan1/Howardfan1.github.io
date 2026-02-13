<script setup>
import { computed } from 'vue'

const props = defineProps({
  posts: Array,
})

function formatDate(dateStr) {
  const date = new Date(dateStr)
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${month}-${day}`
}

function getYear(dateStr) {
  return new Date(dateStr).getFullYear()
}

const groupedPosts = computed(() => {
  const groups = {}
  props.posts?.forEach((post) => {
    const year = getYear(post.frontmatter.date)
    if (!groups[year]) groups[year] = []
    groups[year].push(post)
  })
  return Object.keys(groups)
    .sort((a, b) => Number(b) - Number(a))
    .map((year) => ({ year: Number(year), posts: groups[year] }))
})
</script>

<template>
  <div class="archive-list">
    <div v-for="group in groupedPosts" :key="group.year">
      <h2 class="archive-year">{{ group.year }}</h2>
      <div
        v-for="post in group.posts"
        :key="post.url"
        class="archive-item"
      >
        <time>{{ formatDate(post.frontmatter.date) }}</time>
        <a :href="post.url">{{ post.frontmatter.title }}</a>
        <span v-if="post.frontmatter.tags" class="post-tags">
          <span
            v-for="tag in post.frontmatter.tags"
            :key="tag"
            class="tag"
            >{{ tag }}</span
          >
        </span>
      </div>
    </div>
    <div v-if="!posts?.length" class="empty-state">
      <p>暂无文章</p>
    </div>
  </div>
</template>
