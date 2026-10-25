<template>
  <main class="container">
    <section class="content">
      <h1 class="tags-header">Tags</h1>
      <ul class="tags-list">
        <li v-for="[tag, count] in tags" :key="tag" class="tags-item">
          <a class="tags-link" :href="withBase(encodeURI(`/tags/${tag}/`))">
            <span class="tags-name"> {{ tag }}</span>
            <span class="tags-count">{{ count }}</span>
          </a>
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup lang="ts">
import { withBase } from 'vitepress';
import { data as posts } from '../posts.data';

// In order of first use, going through the posts by file name
const tags = new Map<string, number>();
const byFile = [...posts].sort((a, b) => a.file.localeCompare(b.file));
for (const post of byFile) {
  for (const tag of post.tags) {
    tags.set(tag, (tags.get(tag) ?? 0) + 1);
  }
}
</script>

<style>
.tags-header {
  text-align: center;
}
.tags-list {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  padding: 1rem 0;
  list-style: none;
}
.tags-item {
  border-radius: 0.5rem;
  background-color: var(--white);
}
.tags-link {
  padding: 1rem;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
}
.tags-count {
  width: 1.5rem;
  height: 1.5rem;
  text-align: center;
  border-radius: 0.25rem;
  background-color: var(--accent-text);
  color: var(--white);
}
</style>
