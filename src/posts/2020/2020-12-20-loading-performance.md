---
title: 前端开发中的加载性能优化
date: 2020-12-20 10:48
comments: true
archives: 2020
tags:
  - web
  - performance
---

不同与需要安装的安卓 App 或者 iOS App，前端 App 所有的资源文件都要通过网络进行下载，所以加载速度越快对用户的体验来说就越好。因为我们也需要在加载的时候进行优化，减少不必要的资源请求。

## 文本内容的优化

### 压缩代码

HTML，JS，CSS 都有相应的工具可以进行代码压缩，可以使用 webpack 工具方便的进行代码压缩。JS 使用工具[terser](https://github.com/terser/terser)，CSS 使用[CSS Nano](https://github.com/cssnano/cssnano), HTML 使用[HTMLMinifier](https://github.com/kangax/html-minifier)进行代码压缩。

### 使用 GZIP 进行压缩

现代化浏览器都支持 GZIP 进行压缩，并且服务器端 NGINX 也可以很方便的配置使用 GZIP 压缩请求的资源文件。

### 减少第三方 JS 的引用

在 2010 年左右，人们都爱使用 jQuery 框架进行开发，因为 jQuery 抹平了浏览器之间的差异性，大大提高了开发效率。但随着浏览器吸收了 jQuery 的各种优点，例如可以使用`document.querySelector`很方便的像 jQuery 一样选择元素。现在的前端开发已经不那么需要 jQuery 了，你可以访问[You might not need jQuery](http://youmightnotneedjquery.com/)来查找替代的方法。

### webpack 相关的优化

可以使用 webpack 的[SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/)， 分割 JS 文件，只打包首次载入需要的 JS 文件来减少网络请求。
我们也可以使用[Tree Shaking](https://webpack.js.org/guides/tree-shaking/)来引入需要的 JS 库，避免不使用的代码被打包进来。

## 图像内容的优化

### 移除不使用的图像

由于网站项目的更新，很多时候有一些不被使用的图像资源被打包进输出目录。这样会导致无谓的资源加载，需要及时发现和删除。

### 选择合适的图像格式

众所周知，png 图像可以展示透明效果，但是 jpg 图像做不到。但是因为 png 比 jpg 多了一个 alpha 通道，所以占用的空间也大，如果不需要透明效果展示，相同的图像效果，jpg 会占用更小的空间。

### 移除图像的 Metadata

图像的 Metadata 对于 web 资源来说并没有什么意义，所以移除 Metadata 可以减少图像占用空间。

### 调整图像尺寸

如果显示的尺寸和实际尺寸差距过大，也会造成不必要的资源浪费。

### 调整图像质量

在很多情况下，对图像质量没有过高的要求，可以损失质量来换取更小的空间。

### 压缩图像

现在有很多算法可以有损或者无损的压缩图像，在发布之前，可以使用压缩工具减少图像的使用空间。

## HTTP 请求优化

可以使用 HTTP2 协议来提高网站的载入速度，HTTP2 允许多路复用，多个请求可以使用单一的 HTTP 连接来处理，大大提高了载入速度。
这里有一个[demo](https://http2.akamai.com/demo) 大家可以使用浏览器打开，感受一下。

## HTTP Cache

可以通过缓存技术来提高网站的载入速度，当用户再次访问网站的时候可以直接使用缓存而不必再次请求资源文件。我们甚至可以使用[Service Workers](https://developers.google.com/web/fundamentals/primers/service-workers)缓存整个网站，保证可以离线使用。

## 总结

载入优化需要从各个方面入手，查找分析前端 App 的资源文件，并从网络请求和缓存下手才能达到最优的效果。

## 参考

[Loading Performance](https://developers.google.com/web/fundamentals/performance/get-started)
