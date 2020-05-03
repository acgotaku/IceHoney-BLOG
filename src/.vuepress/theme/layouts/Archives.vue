<template>
  <main class="container">
    <section class="content">
      <h1 class="archives-header">Archives</h1>
      <ul class="archives-list">
        <li v-for="archive in $archive.list.reverse()" class="archives-item">
          <router-link class="archives-link" :to="archive.path">
            <span class="archives-name"> {{ archive.name }}</span>
            <span class="archives-count">{{ archive.pages.length }}</span>
          </router-link>
        </li>
      </ul>
    </section>
  </main>
</template>

<script  lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Archives extends Vue {}
</script>
<style lang="stylus">
@import '~@theme/styles/mixin';

.archives {
  &-header {
    text-align: center;
  }

  &-list {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
    padding: 1rem 0;
    list-style: none;
  }

  &-item {
    border-radius: 0.5rem;
    background-color: var(--white);
  }

  &-link {
    position: relative;
    padding: 1rem;
    mx-flex-center();
    width: 100%;
    height: 100%;
  }

  &-name {
    font-size: 3rem;
  }

  &-count {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    text-align: center;
    border-radius: 0.25rem;
    background-color: var(--accent);
    color: var(--white);
  }
}
</style>
