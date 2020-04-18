<template>
  <a :href="link" target="_blank" rel="noopener noreferrer" class="friend-link">
    {{ name }}
  </a>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class FriendLink extends Vue {
  @Prop(String) readonly link!: string;
  @Prop(String) readonly name!: string;
}
</script>

<style lang="stylus">
.friend-link {
  display: block;
  margin: 0.5rem 0;
}
</style>
