<template>
  <main class="container">
    <section class="content">
      <h1 class="archive-header">
        {{ $currentArchive.key }}
      </h1>
      <ul class="archive-list">
        <li v-for="page in $currentArchive.pages" class="archive-item">
          <router-link :to="page.path" class="archive-link">
            <span class="archive-title"> {{ page.title }}</span>
          </router-link>
          <PostMeta
            :tags="page.frontmatter.tags"
            :date="page.frontmatter.date"
          />
        </li>
      </ul>
    </section>
  </main>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PostMeta from '@theme/components/PostMeta.vue';

@Component({
  components: {
    PostMeta
  }
})
export default class Archive extends Vue {}
</script>

<style lang="stylus">
.archive {
  &-header {
    text-align: center;
  }

  &-list {
    list-style: none;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 0.5rem;
    background-color: var(--white);
  }

  &-item {
    padding: 0.5rem;
    margin: 0.5rem;
    border-bottom: 1px solid var(--border);
  }

  &-link {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
}
</style>
