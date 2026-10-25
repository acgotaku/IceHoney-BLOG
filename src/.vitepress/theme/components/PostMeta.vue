<template>
  <div class="post-meta">
    <div v-if="date" class="post-meta-date">
      <Icon name="calendar" />
      <time pubdate itemprop="datePublished" :datetime="date">
        {{ date }}
      </time>
    </div>
    <div v-if="resolvedTags.length" class="post-meta-tags" itemprop="keywords">
      <Icon name="tag" />
      <PostTag v-for="tag in resolvedTags" :key="tag" :tag="tag" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Icon from './Icon.vue';
import PostTag from './PostTag.vue';

const props = defineProps<{ date?: string; tags?: string | string[] }>();

const resolvedTags = computed(() =>
  props.tags == null
    ? []
    : Array.isArray(props.tags)
      ? props.tags
      : [props.tags]
);
</script>

<style>
.post-meta {
  display: flex;
}
.post-meta-date {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.75rem;
  margin-right: 1rem;
}
.post-meta-tags {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.post-meta svg {
  font-size: 0;
  margin-right: 0.5rem;
  width: 0.75rem;
  height: 0.75rem;
}
</style>
