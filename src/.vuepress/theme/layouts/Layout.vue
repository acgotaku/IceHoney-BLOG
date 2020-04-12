<template>
  <PostList />
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PostList from '@theme/components/PostList.vue';

@Component({
  components: {
    PostList
  }
})
export default class Layout extends Vue {}
</script>
