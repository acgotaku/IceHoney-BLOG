<template>
  <section class="content">
    <ul class="default-layout">
      <li v-for="page in $pagination.pages" class="content-item">
        <router-link class="page-link" :to="page.path">
          {{ page.title }}
        </router-link>
        <Content :pageKey="page.key" />
      </li>
    </ul>
    <div id="pagination">
      <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">
        Prev
      </router-link>
      <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">
        Next
      </router-link>
    </div>
  </section>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>
<style lang="stylus">
@import '~@app/style/config';

.content {
  padding-bottom: $footerHeight;

  &-item {
    border-radius: 0.5rem;
    background-color: #fff;
    margin: 2rem 0;
  }
}

.default-layout {
  max-width: 75rem;
  margin: 2rem auto;
}
</style>
