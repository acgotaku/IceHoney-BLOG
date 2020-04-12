<template>
  <PostList>
    <h1 class="tags-header">
      {{ $currentTag.key }}
    </h1>
  </PostList>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PostList from '@theme/components/PostList.vue';

@Component({
  components: {
    PostList
  }
})
export default class Tag extends Vue {}
</script>

