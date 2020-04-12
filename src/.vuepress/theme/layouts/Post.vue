<template>
  <main class="container">
    <section class="content">
      <article
        class="article"
        itemscope
        itemtype="https://schema.org/BlogPosting"
      >
        <h1 class="article-title">
          {{ $frontmatter.title }}
        </h1>
        <PostMeta :tags="$frontmatter.tags" :date="$frontmatter.date" />
        <Content />
      </article>
    </section>
  </main>
</template>

<script  lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import PostMeta from '@theme/components/PostMeta.vue';

@Component({
  components: {
    PostMeta
  }
})
export default class Post extends Vue {}
</script>

