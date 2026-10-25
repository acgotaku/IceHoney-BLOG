<template>
  <div id="disqus_thread" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useData } from 'vitepress';
import type { ThemeConfig } from '../types';

declare global {
  interface Window {
    DISQUS?: { reset(options: { reload: boolean; config: () => void }): void };
    disqus_config?: () => void;
  }
}

const { page, theme } = useData<ThemeConfig>();

onMounted(() => {
  // Same identifier as vue-disqus used in VuePress, so old threads still match
  const identifier = '/' + page.value.relativePath.replace(/index\.md$/, '');
  const url = location.origin + identifier;
  const config = function (this: { page: Record<string, string> }) {
    this.page.identifier = identifier;
    this.page.url = url;
  };

  if (window.DISQUS) {
    window.DISQUS.reset({ reload: true, config });
    return;
  }
  window.disqus_config = config;
  const script = document.createElement('script');
  script.src = `https://${theme.value.disqus}.disqus.com/embed.js`;
  script.setAttribute('data-timestamp', String(Date.now()));
  document.body.appendChild(script);
});
</script>
