<template>
  <div class="mobile-header">
    <div class="mobile-header-bar">
      <div class="mobile-header-title">
        <NavLink link="/" class="mobile-home-link">{{ site.title }} </NavLink>
        <button
          type="button"
          class="mobile-header-icon"
          :aria-label="isOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="isOpen"
          aria-controls="mobile-menu"
          @click="emit('toggle-sidebar')"
        >
          <Icon :name="isOpen ? 'x' : 'menu'" />
        </button>
      </div>
      <div
        id="mobile-menu"
        class="mobile-menu-wrapper"
        :class="{ open: isOpen }"
      >
        <ul v-if="theme.nav" class="mobile-nav">
          <li
            v-for="item in theme.nav"
            :key="item.text"
            class="mobile-nav-item"
          >
            <NavLink :link="item.link">{{ item.text }}</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';
import type { ThemeConfig } from '../types';
import Icon from './Icon.vue';
import NavLink from './NavLink.vue';

defineProps<{ isOpen: boolean }>();
const emit = defineEmits<{ 'toggle-sidebar': [] }>();
const { site, theme } = useData<ThemeConfig>();
</script>

<style>
.mobile-header {
  min-height: var(--header-height);
}
.mobile-header-bar {
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--header);
}
.mobile-header-icon {
  display: flex;
  padding: 0;
  color: inherit;
  border: none;
  background: none;
  cursor: pointer;
}
.mobile-header .mobile-header-title {
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  border-bottom: 1px solid var(--border);
}
.mobile-header .mobile-header-title .mobile-home-link {
  text-transform: uppercase;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--main);
}
.mobile-nav {
  list-style: none;
  margin: 0;
  padding: 0;
}
.mobile-nav-item {
  padding: 1rem 1.5rem;
}
.mobile-nav-item .nav-link {
  justify-content: flex-start;
}
.menu-divider {
  margin: 0;
}
.mobile-menu-wrapper {
  max-height: 0;
  overflow: hidden;
  /* Hidden once collapsed, so its links are not reachable with Tab */
  visibility: hidden;
  transition:
    max-height 0.3s ease,
    box-shadow 0.3s ease,
    visibility 0s 0.3s;
  background-color: var(--header);
}
.mobile-menu-wrapper.open {
  visibility: visible;
  transition-delay: 0s;
  max-height: 20rem;
  box-shadow:
    0 5px 20px rgba(0, 0, 0, 0.03),
    0 6px 6px rgba(0, 0, 0, 0.05);
}
@media (min-width: 880px) {
  .mobile-header {
    display: none;
  }
}
</style>
