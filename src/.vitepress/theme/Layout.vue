<template>
  <div class="global-layout">
    <Header />
    <MobileHeader
      :is-open="isMobileHeaderOpen"
      @toggle-sidebar="isMobileHeaderOpen = !isMobileHeaderOpen"
    />
    <div class="content-wrapper" @click="isMobileHeaderOpen = false">
      <NotFound v-if="page.isNotFound" />
      <PostList v-else-if="frontmatter.layout === 'post-list'">
        <h1 v-if="params?.tag" class="tags-header">{{ params.tag }}</h1>
      </PostList>
      <Tags v-else-if="frontmatter.layout === 'tags'" />
      <Archives v-else-if="frontmatter.layout === 'archives'" />
      <Archive v-else-if="frontmatter.layout === 'archive'" />
      <Post v-else />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useData, useRoute } from 'vitepress';
import Header from './components/Header.vue';
import MobileHeader from './components/MobileHeader.vue';
import Footer from './components/Footer.vue';
import NotFound from './components/NotFound.vue';
import PostList from './components/PostList.vue';
import Tags from './components/Tags.vue';
import Archives from './components/Archives.vue';
import Archive from './components/Archive.vue';
import Post from './components/Post.vue';

const { page, frontmatter, params } = useData();
const route = useRoute();
const isMobileHeaderOpen = ref(false);

watch(
  () => route.path,
  () => {
    isMobileHeaderOpen.value = false;
  }
);
</script>
