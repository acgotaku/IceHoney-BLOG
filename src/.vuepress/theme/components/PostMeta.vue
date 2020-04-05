<template>
  <div class="post-meta">
    <div v-if="date" class="post-meta-date">
      <CalendarIcon />
      <time pubdate itemprop="datePublished" :datetime="date">
        {{ date }}
      </time>
    </div>
    <div v-if="tags" class="post-meta-tags" itemprop="keywords">
      <TagIcon />
      <PostTag v-for="tag in resolvedTags" :key="tag" :tag="tag" />
    </div>
  </div>
</template>
<script  lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
// @ts-ignore no types
import { CalendarIcon, TagIcon } from 'vue-feather-icons';
import PostTag from './PostTag.vue';

@Component({
  components: {
    PostTag,
    CalendarIcon,
    TagIcon
  }
})
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
@import '~@theme/styles/mixin';

.post-meta {
  display: flex;

  &-date {
    mx-flex-left();
    font-size: 0.75rem;
    margin-right: 1rem;
  }

  &-tags {
    mx-flex-left();
  }

  svg {
    font-size: 0;
    margin-right: 0.5rem;
    width: 0.75rem;
    height: 0.75rem;
  }
}
</style>
