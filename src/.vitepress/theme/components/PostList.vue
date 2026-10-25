<template>
  <main class="container">
    <section itemscope itemtype="http://schema.org/Blog" class="content">
      <slot></slot>
      <article v-for="post in params?.posts" :key="post.url" class="article">
        <h1 class="article-title">
          <a :href="withBase(post.url)">
            {{ post.title }}
          </a>
        </h1>
        <PostMeta :tags="post.tags" :date="post.date" />
        <div class="post-content" v-html="post.html" />
      </article>
      <div class="pagination">
        <div class="pagination-left">
          <a
            v-if="params?.prev"
            :href="withBase(params.prev)"
            class="pagination-prev"
          >
            Prev
          </a>
        </div>
        <div class="pagination-right">
          <a
            v-if="params?.next"
            :href="withBase(params.next)"
            class="pagination-next"
          >
            Next
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useData, withBase } from 'vitepress';
import PostMeta from './PostMeta.vue';

const { params } = useData();
</script>

<style>
.pagination {
  display: flex;
  margin: 1rem 0;
}
.pagination-left,
.pagination-right {
  width: 50%;
}
.pagination-right {
  display: flex;
  justify-content: flex-end;
}
.pagination-prev,
.pagination-next {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 2.5rem;
  font-size: 0.875rem;
  border: 1px solid var(--border);
  border-radius: 0.25rem;
  color: var(--main);
  background: var(--button);
}
.tags-header {
  text-align: center;
}
</style>
