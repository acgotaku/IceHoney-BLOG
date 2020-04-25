<template>
  <main class="container">
    <section
      itemscope="itemscope"
      itemtype="http://schema.org/Blog"
      class="content"
    >
      <slot></slot>
      <article class="article" v-for="page in $pagination.pages">
        <h1 class="article-title">
          <router-link :to="page.path">
            {{ page.title }}
          </router-link>
        </h1>
        <PostMeta :tags="page.frontmatter.tags" :date="page.frontmatter.date" />
        <Content :pageKey="page.key" />
      </article>
      <div class="pagination">
        <div class="pagination-left">
          <router-link
            v-if="$pagination.hasPrev"
            :to="$pagination.prevLink"
            class="pagination-prev"
          >
            Prev
          </router-link>
        </div>
        <div class="pagination-right">
          <router-link
            v-if="$pagination.hasNext"
            :to="$pagination.nextLink"
            class="pagination-next"
          >
            Next
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PostMeta from './PostMeta.vue';

@Component({
  components: {
    PostMeta
  }
})
export default class PostList extends Vue {}
</script>
<style lang="stylus">
@import '~@theme/styles/mixin';

.pagination {
  display: flex;
  margin: 1rem 0;

  &-left, &-right {
    width: 50%;
  }

  &-right {
    display: flex;
    justify-content: flex-end;
  }

  &-prev, &-next {
    mx-button();
  }
}
</style>
