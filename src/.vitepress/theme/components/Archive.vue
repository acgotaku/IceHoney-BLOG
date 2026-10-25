<template>
  <main class="container">
    <section class="content">
      <h1 class="archive-header">
        {{ params?.year }}
      </h1>
      <ul class="archive-list">
        <li v-for="post in archivePosts" :key="post.url" class="archive-item">
          <a :href="withBase(post.url)" class="archive-link">
            <span class="archive-title"> {{ post.title }}</span>
          </a>
          <PostMeta :tags="post.tags" :date="post.date" />
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useData, withBase } from 'vitepress';
import { data as posts } from '../posts.data';
import PostMeta from './PostMeta.vue';

const { params } = useData();

// Ordered by file name, oldest post first
const archivePosts = computed(() =>
  posts
    .filter(post => post.archive === params.value?.year)
    .sort((a, b) => a.file.localeCompare(b.file))
);
</script>

<style>
.archive-header {
  text-align: center;
}
.archive-list {
  list-style: none;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0.5rem;
  background-color: var(--white);
}
.archive-item {
  padding: 0.5rem;
  margin: 0.5rem;
  border-bottom: 1px solid var(--border);
}
.archive-link {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}
</style>
