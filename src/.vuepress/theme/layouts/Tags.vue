<template>
  <main class="container">
    <section class="content">
      <h1 class="tags-header">Tags</h1>
      <ul class="tags-list">
        <li v-for="tag in $tag.list" class="tags-item">
          <router-link class="tags-link" :to="tag.path">
            <span class="tags-name"> {{ tag.name }}</span>
            <span class="tags-count">{{ tag.pages.length }}</span>
          </router-link>
        </li>
      </ul>
    </section>
  </main>
</template>

<script  lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Tags extends Vue {
  mounted() {
    // @ts-ignore
    console.log(this.$tag);
  }
}
</script>
<style lang="stylus">
@import '~@theme/styles/mixin';

.tags {
  &-header {
    text-align: center;
  }

  &-list {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    padding: 0 1rem;
  }

  &-item {
    border-radius: 0.5rem;
    background-color: var(--white);
  }

  &-link {
    padding: 1rem;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
  }

  &-count {
    width: 1.5rem;
    height: 1.5rem;
    text-align: center;
    border-radius: 0.25rem;
    background-color: var(--accent);
    color: var(--white);
  }
}
</style>
