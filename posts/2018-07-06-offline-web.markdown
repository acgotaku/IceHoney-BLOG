---
layout: post
title: "Web离线的解决方案"
date: 2018-07-06 23:25
comments: true
tags: web offline
---

最近的工作是做嵌入在IOS程序内部的页面，其中有一个需求就是需要满足在离线的情况下显示页面。当然，现在主流的离线方式是使用Service Worker来完成离线需求。
但是IOS内置的WKWebView并不支持最新的Service Worker（取决于IOS版本）最新版本已经支持，所以不得不想办法来解决。

# Application Cache

AppCache是一个过时的技术，但是在IOS下勉强还能用。不过Chrome对这种过时的技术支持不是很好，单个缓存文件最大只支持5MB。而且还有请求的BUG:[Accept header on GET request for appcache manifest](https://bugs.chromium.org/p/chromium/issues/detail?id=140445)。触发AppCache是在html标签中添加manifest属性。

    <html manifest="manifest.appcache">
      ...
    </html>

通过`manifest.appcache`文件来定义需要缓存的文件，不过载入`manifest.appcache`的页面会被作为`Master entries`缓存起来。因为AppCache出现的时候还是以静态网站为主，所以并不能缓存请求的Ajax数据。我们需要自己再手动实现缓存所有请求在`localStorage`，但是`localStorage`同样也有最大5MB的限制。所以也需要考虑相应的解决方案。不过，我最终采取的方式是通过嵌入`iframe`来实现触发AppCache，这样做的好处是因为SPA应用是自己来控制路由的，所以导致每个路径都会保存一份`Master entries`。但是通过iframe的话，我们的`Master entries`永远只有一份。并且当前页面的所有资源也被顺利缓存，因为SPA无论访问哪个路径返回的都是相同的`index.html`。由JS来控制路由并加载相应的组件。

这里要补充的一点是，针对https的Application Cache是无法完成跨域请求的，所以请慎重。

# WorkBox

Service Worker是现在主流的缓存技术，会帮你缓存所有的静态文件和数据请求。但是对于SPA项目，我们不可能自己手动书写缓存清单。所以还是借助现有的开源解决方案，这里最出名的解决方案是谷歌的Workbox。通过使用Webpack插件和简单的配置，我们便可以做到缓存所有的静态资源和数据。Service Worker有很多种缓存策略可以选择，例如Cache First和NetWork First。但是AppCache每次都会优先使用缓存，然后再去更新最新的文件。所以我们不得不在发生更新的时候去重新加载页面。

# 总结

最终的解决方案是优先使用Service Worker，当不支持Service Worker的时候再回退到AppCache。但是想要从AppCache升级到Service Worker的时候，必须清除所有AppCache的所有数据。浏览器并没有提供相应的接口，我们目前采用的方式是手动删除AppCache储存的数据库来完成这一需求。

参考：

[Using the application cache](https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache)

[HTML5 Offline Application Cache](https://developer.apple.com/library/archive/documentation/iPhone/Conceptual/SafariJSDatabaseGuide/OfflineApplicationCache/OfflineApplicationCache.html)

[Application Cache plugin for Webpack](https://github.com/lettertwo/appcache-webpack-plugin)

[Workbox webpack Plugins](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin)

[Appcache Facts](https://appcachefacts.info/)
