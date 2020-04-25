<template>
  <div class="global-layout">
    <Header />
    <MobileHeader
      :is-open="isMobileHeaderOpen"
      @toggle-sidebar="isMobileHeaderOpen = !isMobileHeaderOpen"
    />
    <div class="content-wrapper" @click="isMobileHeaderOpen = false">
      <DefaultGlobalLayout />
    </div>
    <Footer />
  </div>
</template>

<script>
import DefaultGlobalLayout from '@app/components/GlobalLayout.vue';
import Header from '@theme/components/Header.vue';
import MobileHeader from '@theme/components/MobileHeader.vue';
import Footer from '@theme/components/Footer.vue';
export default {
  name: 'GlobalLayout',
  components: {
    DefaultGlobalLayout,
    Header,
    MobileHeader,
    Footer
  },
  data() {
    return {
      isMobileHeaderOpen: false
    };
  },
  mounted() {
    this.$router.afterEach(() => {
      this.isMobileHeaderOpen = false;
    });
  }
};
</script>
