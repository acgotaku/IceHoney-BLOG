<template>
  <div class="global-layout">
    <Header />
    <DefaultGlobalLayout />
    <Footer />
  </div>
</template>

<script>
import DefaultGlobalLayout from '@app/components/GlobalLayout.vue';
import Header from '@theme/components/Header.vue';
import Footer from '@theme/components/Footer.vue';
export default {
  name: 'GlobalLayout',
  components: {
    DefaultGlobalLayout,
    Header,
    Footer
  }
};
</script>
<style lang="stylus">
@import '~@app/style/config';

.global-layout {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
