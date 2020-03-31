<template>
  <div id="global-layout">
    <Header />
    <DefaultGlobalLayout/>
    <Footer />
</footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import DefaultGlobalLayout from '@app/components/GlobalLayout.vue';
import Header from '@theme/components/Header.vue';
import Footer from '@theme/components/Footer.vue';

@Component({
  components: {
    DefaultGlobalLayout,
    Header,
    Footer
  }
})
export default class GlobalLayout extends Vue {}
</script>
