<template>
  <div class="container">
    <div class="content">
      <h1 class="notfound-title">404</h1>
      <a :href="withBase('/')" class="notfound-button">Take me home</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withBase } from 'vitepress';
</script>

<style>
.notfound-title {
  text-align: center;
  font-size: 6rem;
  color: var(--secondary);
}
.notfound-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 2.5rem;
  font-size: 0.875rem;
  border: 1px solid var(--border);
  border-radius: 0.25rem;
  color: var(--main);
  background: var(--button);
  margin: 0 auto;
}
</style>
