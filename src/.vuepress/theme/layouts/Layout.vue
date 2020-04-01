<template>
  <Home />
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Home from '@theme/components/Home.vue';

@Component({
  components: {
    Home
  }
})
export default class Layout extends Vue {}
</script>
