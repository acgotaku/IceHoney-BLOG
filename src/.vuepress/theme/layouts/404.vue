<template>
  <div class="container">
    <div class="content">
      <h1 class="notfound-title">404</h1>
      <router-link to="/" class="notfound-button">
        Take me home
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NotFound extends Vue {}
</script>
<style lang="stylus">
@import '~@theme/styles/mixin';

.notfound {
  &-title {
    text-align: center;
    font-size: 6rem;
    color: var(--secondary);
  }

  &-button {
    mx-button();
    margin: 0 auto;
  }
}
</style>
