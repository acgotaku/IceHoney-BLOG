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
        <Content class="article-content" />
        <Comment />
      </article>
    </section>
  </main>
</template>

<script  lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Comment from '@vuepress/plugin-blog/lib/client/components/Comment.vue';
import PostMeta from '@theme/components/PostMeta.vue';

@Component({
  components: {
    PostMeta,
    Comment
  }
})
export default class Post extends Vue {}
</script>

<style lang="stylus">
.article-content {
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border);
}
</style>
