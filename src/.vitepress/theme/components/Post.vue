<template>
  <main class="container">
    <section class="content">
      <article
        class="article"
        itemscope
        itemtype="https://schema.org/BlogPosting"
      >
        <h1 class="article-title">
          {{ frontmatter.title }}
        </h1>
        <PostMeta :tags="frontmatter.tags" :date="frontmatter.date" />
        <Content class="post-content" />
        <Comment
          v-if="frontmatter.comments"
          :key="page.relativePath"
          class="article-comment"
        />
      </article>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';
import Comment from './Comment.vue';
import PostMeta from './PostMeta.vue';

const { page, frontmatter } = useData();
</script>

<style>
.article-comment {
  margin-top: 1rem;
  border-top: 1px solid var(--border);
}
</style>
