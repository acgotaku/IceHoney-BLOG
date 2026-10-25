<template>
  <a :href="withBase(link)" class="post-tag" :class="{ active }">
    {{ tag }}
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, withBase } from 'vitepress';

const props = defineProps<{ tag: string }>();
const route = useRoute();

const link = computed(() => encodeURI(`/tags/${props.tag}/`));
const active = computed(() =>
  decodeURI(route.path).startsWith(withBase(`/tags/${props.tag}/`))
);
</script>

<style>
.post-tag {
  margin-right: 0.5rem;
}
.post-tag.active {
  color: var(--accent-text);
}
</style>
