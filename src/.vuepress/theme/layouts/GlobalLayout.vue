<template>
  <div id="global-layout">
    <Header />
    <DefaultGlobalLayout/><br>
    <footer style="background-color: #DDD"><a href="https://github.com/ulivz/70-lines-of-vuepress-blog-theme">Github</a> · Powered by VuePress</p>
</footer>
  </div>
</template>

<script>
import GlobalLayout from "@app/components/GlobalLayout.vue";
import Header from '@theme/components/Header.vue'
export default {
  components: { DefaultGlobalLayout: GlobalLayout,  Header}
};
</script>
