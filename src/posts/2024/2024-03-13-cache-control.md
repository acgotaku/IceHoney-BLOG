---
title: 前端的缓存策略
date: 2024-03-13 21:58
comments: true
archives: 2024
tags:
  - web
---

前端资源也需要配置缓存策略，以提高网站的访问速度。由于网站的流量增大，我们需要合适的缓存策略才能让 CDN 发挥最大效果保证网站的访问速度。

## Cache-Control

Cache-Control 用来设置资源的缓存策略，常见的的值有：no-store 、no-cache、public、private、max-age、immutable。

### no-store

不缓存资源，每次都需要重新请求。

### no-cache

需要先验证资源是否过期，如果没有过期，可以使用缓存。

### public

资源可以被所有的用户缓存，包括 CDN。

### private

资源只能被用户缓存，不能被 CDN 缓存。

### max-age

设置资源的最大缓存时间，单位是秒。

### immutable

资源不会改变，可以永久缓存。

## 前端网站的缓存策略

现在的前端网站一般都是 SPA 或者 PWA，index.html 是一个入口文件，其他的资源都是通过 index.html 加载的。所以我们可以设置 index.html 的缓存策略为 no-store，保证每次都是最新的资源。

其他的都是静态资源，并且文件名包含 hash，所以我们可以设置这些资源的缓存策略为 immutable，保证这些资源不会改变，可以永久缓存。

```bash

Cache-Control: no-store

Cache-Control: public, max-age=604800, immutable

```

## 总结

index.html 文件是网站入口，这个文件不能缓存，每次都需要重新请求，否则不能及时更新网站。不过这个文件一般也不大，所以不会影响网站的访问速度。其他的静态资源文件名包含 hash，所以这些资源不会改变，可以永久缓存，这样可以提高网站的访问速度。

## 参考

[MDN Cache-Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)

[Prevent unnecessary network requests with the HTTP Cache](https://web.dev/articles/http-cache)
