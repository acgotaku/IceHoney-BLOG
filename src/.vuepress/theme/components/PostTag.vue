<template>
  <router-link :to="'/tags/' + tag" class="post-tag"> {{ tag }} </router-link>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class PostTag extends Vue {
  @Prop(String) readonly tag!: string;
}
</script>

<style lang="stylus">
.post-tag {
  margin-right: 0.5rem;
}
</style>
