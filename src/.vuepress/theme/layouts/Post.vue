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
        <Comment v-if="$frontmatter.comments" class="article-comment" />
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
.article-comment {
  margin-top: 1rem;
  border-top: 1px solid var(--border);
}
</style>
