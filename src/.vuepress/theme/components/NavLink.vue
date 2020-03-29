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
  isExternal() {
    return isExternal;
  }
  isMailto() {
    return isMailto;
  }
  isTel() {
    return isTel;
  }
}
</script>

<style lang="stylus">
.nav-link {
  color: $darkTextColor;
}

.nav-link {
  &:hover, &.router-link-active {
    color: $accentColor;
  }
}
</style>
