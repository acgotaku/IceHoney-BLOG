<template>
  <main class="container">
    <section class="content">
      <h1 class="archives-header">Archives</h1>
      <ul class="archives-list">
        <li v-for="[year, count] in archives" :key="year" class="archives-item">
          <a class="archives-link" :href="withBase(`/archives/${year}/`)">
            <span class="archives-name"> {{ year }}</span>
            <span class="archives-count">{{ count }}</span>
          </a>
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup lang="ts">
import { withBase } from 'vitepress';
import { data as posts } from '../posts.data';

// Newest year first
const archives = new Map<string, number>();
for (const post of posts) {
  archives.set(post.archive, (archives.get(post.archive) ?? 0) + 1);
}
</script>

<style>
.archives-header {
  text-align: center;
}
.archives-list {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  padding: 1rem 0;
  list-style: none;
}
.archives-item {
  border-radius: 0.5rem;
  background-color: var(--white);
}
.archives-link {
  position: relative;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.archives-name {
  font-size: 3rem;
}
.archives-count {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  text-align: center;
  border-radius: 0.25rem;
  background-color: var(--accent-text);
  color: var(--white);
}
</style>
