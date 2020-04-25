<template>
  <PostList v-if="$pagination" />
  <Post v-else />
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PostList from '@theme/components/PostList.vue';
import Post from '@theme/layouts/Post.vue';

@Component({
  components: {
    PostList,
    Post
  }
})
export default class Layout extends Vue {}
</script>
