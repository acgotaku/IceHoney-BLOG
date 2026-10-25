import { defineLoader } from 'vitepress';
import { getHeaders, getPosts } from '../posts';

export interface PostSummary {
  file: string;
  title: string;
  url: string;
  date: string;
  time: number;
  tags: string[];
  archive: string;
  headers: { title: string; slug: string }[];
}

declare const data: PostSummary[];
export { data };

export default defineLoader({
  watch: ['../../posts/**/*.md'],
  load(): Promise<PostSummary[]> {
    return Promise.all(
      getPosts().map(async post => ({
        file: post.file,
        title: post.title,
        url: post.url,
        date: post.date,
        time: post.time,
        tags: post.tags,
        archive: post.archive,
        headers: await getHeaders(post)
      }))
    );
  }
});
