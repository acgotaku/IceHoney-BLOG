<template>
  <router-link
    v-if="!isExternal(normalizedlink)"
    class="nav-link"
    :to="normalizedlink"
    :exact="exact"
  >
    <slot />
  </router-link>
  <a
    v-else
    :href="normalizedlink"
    class="nav-link external"
    :target="
      isMailto(normalizedlink) || isTel(normalizedlink) ? null : '_blank'
    "
    :rel="
      isMailto(normalizedlink) || isTel(normalizedlink)
        ? null
        : 'noopener noreferrer'
    "
  >
    <slot />
  </a>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { isExternal, isMailto, isTel, ensureExt } from '../util';

@Component
export default class NavLink extends Vue {
  @Prop(String) readonly link!: string;

  get normalizedlink() {
    return ensureExt(this.link);
  }

  get exact() {
    if (this.$site.locales) {
      return Object.keys(this.$site.locales).some(
        rootLink => rootLink === this.normalizedlink
      );
    }
    return this.normalizedlink === '/';
  }
  isExternal(path: string) {
    return isExternal(path);
  }
  isMailto(path: string) {
    return isMailto(path);
  }
  isTel(path: string) {
    return isTel(path);
  }
}
</script>

<style lang="stylus">
.nav-link {
  color: var(--secondary);
}

.nav-link {
  &.router-link-active {
    color: var(--accent);
  }
}
</style>
