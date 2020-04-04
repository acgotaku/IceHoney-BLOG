<template>
  <li class="post-tag">
    <router-link :to="'/tags/' + tag"> {{ tag }} </router-link>
  </li>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class PostTag extends Vue {
  @Prop(String) readonly tag!: string;
}
</script>

<style lang="stylus"></style>
