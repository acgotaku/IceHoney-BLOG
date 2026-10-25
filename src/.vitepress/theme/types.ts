export interface ThemeConfig {
  profile: string;
  disqus: string;
  nav: { text: string; link: string }[];
  footer: {
    contact: { type: 'github' | 'twitter'; link: string }[];
    copyright: { text: string; link: string }[];
  };
}
