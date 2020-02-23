---
layout: post
title: "前端部署之CDN的那些事情"
date: 2020-01-14 22:59
comments: true
tags: frontend
---

现在的前端开发主流是PWA，简而言之就是像App一样使用。基于PWA技术可以离线访问，并且可以添加程序到菜单里。离线技术使用的是比较成熟的Service Workers。但是配合CDN就有很多不得不注意的事情。

# CDN部署静态资源

现代化前端开发主要是把CSS，JS，图片等静态资源放在CDN上有效提高载入速度。把静态HTML文件放在服务器上，有利于更新网站最新状态，例如进入维护状态，直接把静态HTML文件替换为维护页面即可。

# 同源策略问题

正常情况下，资源文件和主网站不在同一个域名下，例如主网站是`icehoney.me`，资源网站是`static.icehoney.me`。当然了，资源文件使用GET方法浏览器自动载入，没有任何问题。但是注册Service Worker的JS文件是不能放在CDN上的，因为这是官方的规定。个人理解是出于安全因素的考虑。所以我们在主服务器上不仅要放静态的HTML文件，还要放一个serive-worker.js文件。

# SVG symbol的使用问题

现在前端的开发针对很多小图标，都是采用SVG的方式来引用。其中SVG symbol特别好用，可以在页面里嵌入一个inline的SVG，然后在其他对方使用`<use>`标签来引用。但是对于放在CDN上的SVG文件，不能直接使用下面的形式：

    <use xlink:href="https://static.icehoney.me/icon.svg#china" />

如果引用CDN的SVG浏览器会报错，解决方案是使用`svg-inline-loader`，手动在文档里面注入SVG文件。`document.body.insertAdjacentHTML` 方法可以注入inline的SVG。


# Workbox配置

首先，PWA项目的路由都是由前端来处理，所以我们需要使用`navigateFallback`保证不管导航到哪个路由都能映射到缓存的HTML文件。然后是使用`runtimeCaching`配置缓存服务器请求。


# 总结

由于Service Workers的导入使得CDN部署变得有些麻烦，不过这些问题好在都能找到解决方案。还有一点是Chrome的Network面板里的offline模式不能测试Service Workers的离线。需要自己手动拔网线才能测试。

# 引用

[Is it possible to serve service workers from CDN/remote origin?](https://github.com/w3c/ServiceWorker/issues/940)

[Workbox webpack Plugins](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin)
