import { getPosts } from '../.vitepress/posts';

export default {
  paths() {
    const years = new Set(getPosts().map(post => post.archive));
    return [...years].map(year => ({
      params: { year, title: `${year} Archive` }
    }));
  }
};
