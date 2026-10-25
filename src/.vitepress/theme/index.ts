import type { Theme } from 'vitepress';
import Layout from './Layout.vue';
import FriendLink from './components/FriendLink.vue';
import './styles/index.css';

export default {
  Layout,
  enhanceApp({ app, router }) {
    app.component('FriendLink', FriendLink);
    // Dev only: a post was added, edited or deleted (see config.mts), so the
    // open list page is out of date
    import.meta.hot?.on('icehoney:posts-changed', () => {
      if (router.route.data.frontmatter.layout === 'post-list') {
        location.reload();
      }
    });
  }
} satisfies Theme;
