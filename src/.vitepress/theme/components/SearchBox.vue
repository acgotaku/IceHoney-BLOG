<template>
  <div class="search-box">
    <Icon name="search" class="search-icon" />
    <input
      ref="input"
      v-model="query"
      aria-label="Search"
      autocomplete="off"
      spellcheck="false"
      @focus="focused = true"
      @blur="focused = false"
      @keyup.enter="go(focusIndex)"
      @keyup.up="onUp"
      @keyup.down="onDown"
    />
    <ul
      v-if="showSuggestions"
      class="suggestions"
      @mouseleave="focusIndex = -1"
    >
      <li
        v-for="(s, i) in suggestions"
        :key="s.path"
        class="suggestion"
        :class="{ focused: i === focusIndex }"
        @mousedown="go(i)"
        @mouseenter="focusIndex = i"
      >
        <a :href="withBase(s.path)" @click.prevent>
          <span class="page-title">{{ s.title }}</span>
          <span v-if="s.header" class="header">&gt; {{ s.header }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter, withBase } from 'vitepress';
import { data as posts } from '../posts.data';
import Icon from './Icon.vue';

const MAX_SUGGESTIONS = 10;

const router = useRouter();
const input = ref<HTMLInputElement>();
const query = ref('');
const focused = ref(false);
const focusIndex = ref(-1);

// Every word must appear in the text, like @vuepress/plugin-search
function matches(words: string[], text: string) {
  const lower = text.toLowerCase();
  return words.every(word => lower.includes(word));
}

const suggestions = computed(() => {
  const words = query.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const result: { path: string; title: string; header?: string }[] = [];
  if (!words.length) return result;

  for (const post of posts) {
    if (result.length >= MAX_SUGGESTIONS) break;
    const domain = `${post.title} ${post.tags.join(' ')}`;
    if (matches(words, domain)) {
      result.push({ path: post.url, title: post.title });
      continue;
    }
    for (const header of post.headers) {
      if (result.length >= MAX_SUGGESTIONS) break;
      if (matches(words, `${domain} ${header.title}`)) {
        result.push({
          path: `${post.url}#${encodeURIComponent(header.slug)}`,
          title: post.title,
          header: header.title
        });
      }
    }
  }
  return result;
});

const showSuggestions = computed(
  () => focused.value && suggestions.value.length > 0
);

function onUp() {
  if (!showSuggestions.value) return;
  focusIndex.value =
    focusIndex.value > 0 ? focusIndex.value - 1 : suggestions.value.length - 1;
}

function onDown() {
  if (!showSuggestions.value) return;
  focusIndex.value =
    focusIndex.value < suggestions.value.length - 1 ? focusIndex.value + 1 : 0;
}

function go(i: number) {
  const suggestion = suggestions.value[i];
  if (!showSuggestions.value || !suggestion) return;
  router.go(withBase(suggestion.path));
  query.value = '';
  focusIndex.value = -1;
  input.value?.blur();
}
</script>

<style>
.search-box {
  position: relative;
  display: inline-block;
}
.search-box .search-icon {
  position: absolute;
  top: 0.5rem;
  left: 0.6rem;
  width: 1rem;
  height: 1rem;
  color: var(--tertiary);
  pointer-events: none;
}
.search-box input {
  width: 12rem;
  height: 2rem;
  padding: 0 0.5rem 0 2rem;
  font-size: 0.9rem;
  line-height: 2rem;
  color: var(--secondary);
  border: 1px solid var(--border);
  border-radius: 2rem;
  outline: none;
  background-color: var(--white);
  transition: border-color 0.2s ease;
}
.search-box input:focus {
  border-color: var(--accent);
}
.search-box .suggestions {
  position: absolute;
  top: 2.5rem;
  left: 0;
  width: 20rem;
  margin: 0;
  padding: 0.4rem;
  list-style: none;
  border: 1px solid var(--border);
  border-radius: 6px;
  background-color: var(--white);
}
.search-box .suggestion {
  padding: 0.4rem 0.6rem;
  line-height: 1.4;
  border-radius: 4px;
  cursor: pointer;
}
.search-box .suggestion a {
  display: block;
  white-space: normal;
  color: var(--secondary);
  text-decoration: none;
}
.search-box .suggestion .page-title {
  font-weight: 600;
}
.search-box .suggestion .header {
  margin-left: 0.25em;
  font-size: 0.9em;
}
.search-box .suggestion.focused {
  background-color: var(--bg);
}
.search-box .suggestion.focused a {
  color: var(--accent);
}
</style>
