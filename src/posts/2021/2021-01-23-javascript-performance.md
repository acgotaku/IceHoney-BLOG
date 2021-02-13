---
title: JavaScript的加载优化
date: 2021-01-23 16:11
comments: true
archives: 2021
tags:
  - performance
---

前端开发中，JavaScript 变得越来越重要，页面载入中，JavaScript 占的比重也更高。不同与别的静态资源，例如图片和 SVG 图标。浏览器在解析 JavaScript 时花的时间要多得多。所以优化 JavaScript 也就变得非常重要。

## 减少 JavaScript 的网络传输开销

### Only sending the code a user needs.

一方面，只加载当前页面需要的 JavaScript 文件，可以使用 webpack 的[code-splitting](https://webpack.js.org/guides/code-splitting/)来解决。另一方面，懒加载一些不是必须的 JavaScript 文件。

### Minification

使用[terser](https://github.com/terser/terser)来压缩 JavaScript 代码。

### Compression

服务器开启 GZIP 来减少传输的文件大小。

### Removing unused code.

针对一些第三方 JavaScript 库，可以使用[Tree Shaking](https://webpack.js.org/guides/tree-shaking/)来移除不需要的代码。

### Caching code to minimize network trips.

使用 [ETag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag), [Last-Modified](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Last-Modified), [Cache-Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control) 三个配合有效的缓存 JavaScript 文件。

## 优化 JavaScript 下载和执行

我们可以通过使用 `async` 或者 `defer` 来优化 JavaScript 的下载和执行，两个关键字的具体作用看下图：

![js async defer](~@assets/js_async_defer.png)

## 总结

JavaScript 的优化并没有银弹，要根据具体项目的实际情况来处理。

## 参考

[HTTP caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching)

[JavaScript Start-up Optimization](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/javascript-startup-optimization?hl=en)

[Loading Third-Party JavaScript](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript?hl=en)
