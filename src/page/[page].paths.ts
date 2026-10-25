import { getPosts, listPages } from '../.vitepress/posts';

export default {
  async paths() {
    const pages = await listPages(
      getPosts(),
      page => (page === 1 ? '/' : `/page/${page}/`),
      page => (page === 1 ? 'Home' : `Page ${page} | Home`)
    );
    return pages.map(({ page, ...params }) => ({
      params: { page: String(page), ...params }
    }));
  }
};
