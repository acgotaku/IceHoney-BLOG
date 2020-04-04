<template>
  <div class="post-meta">
    <div v-if="date" class="post-meta-date">
      <ClockIcon />
      <time pubdate itemprop="datePublished" :datetime="date">
        {{ date }}
      </time>
    </div>
    <ul v-if="tags" class="post-meta-tags" itemprop="keywords">
      <PostTag v-for="tag in resolvedTags" :key="tag" :tag="tag" />
    </ul>
  </div>
</template>
<script  lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
// @ts-ignore no types
import { CalendarIcon, TagIcon } from 'vue-feather-icons';
import PostTag from './PostTag.vue';

@Component
export default class PostMeta extends Vue {
  @Prop() readonly date!: string;
  @Prop() readonly tags!: Array<string>;

  get resolvedTags() {
    if (!this.tags || Array.isArray(this.tags)) return this.tags;
    return [this.tags];
  }
}
</script>


<style lang="stylus">
.post-meta {
  &-tags {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    overflow: hidden;
    padding: 0;
    margin: 20px 0;

    > li {
      margin-bottom: 10px;
    }
  }

  > div {
    display: inline-flex;
    line-height: 12px;
    font-size: 12px;
    margin-right: 20px;
  }

  svg {
    margin-right: 5px;
    width: 14px;
    height: 14px;
  }
}
</style>
