<template>
  <a :href="link" target="_blank" rel="noopener noreferrer" class="friend-link">
    {{ name }}
  </a>
</template>

<script setup lang="ts">
defineProps<{ link: string; name: string }>();
</script>

<style>
/* Must beat `.post-content a { display: inline }` in base.css */
.post-content .friend-link {
  display: block;
  width: fit-content;
  margin: 0.5rem 0;
}
</style>
