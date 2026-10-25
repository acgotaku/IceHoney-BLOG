import type { Theme } from 'vitepress';
import Layout from './Layout.vue';
import FriendLink from './components/FriendLink.vue';
import './styles/index.css';

export default {
  Layout,
  enhanceApp({ app }) {
    app.component('FriendLink', FriendLink);
  }
} satisfies Theme;
