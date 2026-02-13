<script setup>
defineProps({
  posts: Array,
})

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <div class="post-list">
    <article v-for="post in posts" :key="post.url" class="post-card">
      <div class="post-meta">
        <time :datetime="post.frontmatter.date">{{
          formatDate(post.frontmatter.date)
        }}</time>
        <span v-if="post.frontmatter.tags" class="post-tags">
          <span v-for="tag in post.frontmatter.tags" :key="tag" class="tag">{{
            tag
          }}</span>
        </span>
      </div>
      <h2 class="post-title">
        <a :href="post.url">{{ post.frontmatter.title }}</a>
      </h2>
      <p v-if="post.frontmatter.description" class="post-excerpt">
        {{ post.frontmatter.description }}
      </p>
      <a :href="post.url" class="read-more">阅读全文 →</a>
    </article>
    <div v-if="!posts?.length" class="empty-state">
      <p>暂无文章，敬请期待 ✍️</p>
    </div>
  </div>
</template>
