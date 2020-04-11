<template>
  <main class="container">
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
<style lang="stylus">
@import '~@theme/styles/mixin';

.article {
  max-width: 75rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  background-color: var(--article);
  margin: 2rem auto;

  &-title {
    color: var(--main);
    text-align: center;
  }
}
</style>
