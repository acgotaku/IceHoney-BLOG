<template>
  <main class="container">
    <section
      itemscope="itemscope"
      itemtype="http://schema.org/Blog"
      class="content"
    >
      <article class="content-article" v-for="page in $pagination.pages">
        <router-link class="page-link" :to="page.path">
          {{ page.title }}
        </router-link>
        <Content :pageKey="page.key" />
      </article>
      <div class="pagination">
        <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">
          Prev
        </router-link>
        <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">
          Next
        </router-link>
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
</style>
