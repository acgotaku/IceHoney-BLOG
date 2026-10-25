<template>
  <a
    v-if="!isExternal"
    class="nav-link"
    :class="{ active }"
    :href="withBase(link)"
  >
    <slot />
  </a>
  <a
    v-else
    :href="link"
    class="nav-link external"
    :target="isMailtoOrTel ? undefined : '_blank'"
    :rel="isMailtoOrTel ? undefined : 'noopener noreferrer'"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, withBase } from 'vitepress';

const props = defineProps<{ link: string }>();
const route = useRoute();

const isExternal = computed(() => /^(https?:|mailto:|tel:)/.test(props.link));
const isMailtoOrTel = computed(() => /^(mailto:|tel:)/.test(props.link));
const active = computed(() => {
  const path = decodeURI(route.path);
  return props.link === '/'
    ? path === withBase('/')
    : path.startsWith(withBase(props.link));
});
</script>

<style>
.nav-link {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--secondary);
}
.nav-link:hover {
  color: var(--accent);
}
.nav-link.active {
  color: var(--accent);
}
</style>
