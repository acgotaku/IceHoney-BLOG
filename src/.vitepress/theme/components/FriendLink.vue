<template>
  <a :href="link" target="_blank" rel="noopener noreferrer" class="friend-link">
    {{ name }}
  </a>
</template>

<script setup lang="ts">
defineProps<{ link: string; name: string }>();
</script>

<style>
.friend-link {
  display: block;
  margin: 0.5rem 0;
}
</style>
