import { getPosts, listPages, type Post } from '../.vitepress/posts';

export default {
  async paths() {
    const tags = new Map<string, Post[]>();
    for (const post of getPosts()) {
      for (const tag of post.tags) {
        tags.set(tag, [...(tags.get(tag) ?? []), post]);
      }
    }
    // Pages whose paths differ only in case break the build (Rollup dedupes
    // chunk names case-insensitively), so such tags have to be unified
    const seen = new Map<string, string>();
    for (const tag of tags.keys()) {
      const other = seen.get(tag.toLowerCase());
      if (other) {
        throw new Error(`Tags "${other}" and "${tag}" differ only in case`);
      }
      seen.set(tag.toLowerCase(), tag);
    }
    const pages = await Promise.all(
      [...tags].map(async ([tag, posts]) =>
        (
          await listPages(
            posts,
            page => `/tags/${tag}/` + (page === 1 ? '' : `page/${page}/`),
            page => (page === 1 ? `${tag} Tag` : `Page ${page} - ${tag} | Tag`)
          )
        ).map(({ page, ...params }) => ({
          params: {
            slug: page === 1 ? tag : `${tag}/page/${page}`,
            tag,
            ...params
          }
        }))
      )
    );
    return pages.flat();
  }
};
