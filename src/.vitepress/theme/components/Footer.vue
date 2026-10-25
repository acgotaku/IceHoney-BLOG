<template>
  <footer class="footer">
    <div class="footer-left">
      <ul v-if="contact.length" class="contact">
        <li v-for="item in contact" :key="item.type" class="contact-item">
          <NavLink :link="item.link">
            <Icon :name="item.type" />
          </NavLink>
        </li>
      </ul>
    </div>

    <div class="footer-right">
      <ul v-if="copyright.length" class="copyright">
        <li v-for="item in copyright" :key="item.text" class="copyright-item">
          <NavLink :link="item.link">{{ item.text }}</NavLink>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useData } from 'vitepress';
import type { ThemeConfig } from '../types';
import Icon from './Icon.vue';
import NavLink from './NavLink.vue';

const { theme } = useData<ThemeConfig>();

const contact = computed(() => theme.value.footer?.contact ?? []);
const copyright = computed(() => theme.value.footer?.copyright ?? []);
</script>

<style>
.footer {
  margin-top: auto;
  background-color: var(--accent);
  width: 100%;
  display: flex;
  flex: none;
  height: var(--footer-height);
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
}
.footer .contact {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}
.footer .contact-item {
  margin: 0 0.5rem;
}
.footer .nav-link {
  color: var(--tertiary);
}
.footer .nav-link:hover {
  color: var(--main);
}
.footer .copyright {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
