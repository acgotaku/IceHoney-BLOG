<template>
  <header class="header">
    <div class="header-inner">
      <div class="title">
        <NavLink link="/" class="home-link">
          <img
            v-if="theme.profile"
            class="profile"
            :src="withBase(theme.profile)"
            :alt="site.title"
          />
          <span>{{ site.title }} </span>
        </NavLink>
      </div>
      <div class="header-right-wrap">
        <SearchBox />
        <ul v-if="theme.nav" class="nav">
          <li v-for="item in theme.nav" :key="item.text" class="nav-item">
            <NavLink :link="item.link">{{ item.text }}</NavLink>
          </li>
          <li class="nav-item">
            <a
              :href="withBase('/rss.xml')"
              class="nav-link"
              target="_blank"
              aria-label="RSS"
            >
              <Icon name="rss" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useData, withBase } from 'vitepress';
import type { ThemeConfig } from '../types';
import Icon from './Icon.vue';
import NavLink from './NavLink.vue';
import SearchBox from './SearchBox.vue';

const { site, theme } = useData<ThemeConfig>();
</script>

<style>
.header {
  min-height: var(--header-height);
}
.header-inner {
  height: var(--header-height);
  background-color: var(--header);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  gap: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}
.header-inner .title {
  font-size: 2rem;
  text-transform: uppercase;
}
.header-inner .title .home-link {
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--main);
}
.header-inner .title .profile {
  width: 3rem;
  margin-right: 1rem;
}
.header-right-wrap {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.header-right-wrap .nav {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}
.header-right-wrap .nav .nav-item {
  margin-left: 2rem;
}
.header-right-wrap .nav .nav-item a {
  font-size: 1.25rem;
  border-bottom: 2px solid var(--header);
}
.header-right-wrap .nav .nav-item a:hover,
.header-right-wrap .nav .nav-item a:active {
  border-bottom: 2px solid var(--accent);
}
@media (max-width: 1080px) {
  .header-right-wrap .nav .nav-item {
    margin-left: 1.25rem;
  }
  .header-right-wrap .search-box input {
    width: 9rem;
  }
}
@media (max-width: 880px) {
  .header {
    display: none;
  }
}
</style>
