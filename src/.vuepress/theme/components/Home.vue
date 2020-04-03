<template>
  <main class="container">
    <section
      itemscope="itemscope"
      itemtype="http://schema.org/Blog"
      class="content"
    >
      <article class="content-article" v-for="page in $pagination.pages">
        <h1 class="article-title">
          <router-link :to="page.path">
            {{ page.title }}
          </router-link>
        </h1>
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

@Component
export default class Home extends Vue {}
</script>
<style lang="stylus">
@import '~@app/style/config';

.content {
  max-width: 75rem;
  margin: 2rem auto;

  &-article {
    border-radius: 0.5rem;
    background-color: #fff;
    margin: 2rem 0;
  }
}

.article {
  &-title {
    color: $textColor;
  }
}

.pagination {
  display: flex;

  &-left, &-right {
    width: 50%;
  }

  &-right {
    display: flex;
    justify-content: flex-end;
  }

  &-prev, &-next {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8rem;
    height: 2.5rem;
    text-decoration: none;
    font-size: 0.875rem;
    border: 1px solid $borderColor;
    border-radius: 0.25rem;
    color: $textColor;
    background: $buttonBgColor;
  }
}
</style>
