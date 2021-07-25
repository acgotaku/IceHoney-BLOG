---
title: 如何检测用户启动广告屏蔽插件
date: 2021-07-25 14:32
comments: true
archives: 2021
tags:
  - ad
---

广告屏蔽插件让我们作为用户可以减少广告的打扰，但是作为开发者有时候因为用户开启了广告屏蔽导致网站收入减少或者影响了一部分功能的使用。我们不得不提示用户关闭广告插件，以正常使用网站。
但是针对不同的需求，广告的检测方式也不一样。我们接下来详细讲一讲。

## 网站本身投放广告

针对网站本身有投放广告的情况下，我们可以通过 JavaScript 来检查广告的 HTML 元素是否存在，以及 CSS 属性来判断。示例代码如下：

```ts
function isDisplayNone(node: Element | null): boolean {
  if (!node) {
    return false;
  }
  if (getComputedStyle(node).display === 'none') return true;
  return isDisplayNone(node.parentElement);
}

function isHidden(node: Element) {
  if (getComputedStyle(node).visibility === 'hidden') return true;
  if (isDisplayNone(node)) return true;

  return false;
}
```

通过检测广告元素是否被删除或者隐藏可以非常可靠的提示用户关闭广告插件或者其他操作。

## 网站由于广告屏蔽导致功能不全

例如由于用户开启广告屏蔽插件，导致支付服务 `stripe` 无法正常使用。我们本身并没有在网站上发布广告。这时候可以使用网络请求的方式来检测广告屏蔽插件。示例代码如下：

```ts
  checkAdBlocker() {
   fetch('https://pagead2.googlesyndication.com/pagead/show_ads.js', {
     mode: 'no-cors'
   }).catch(() => {
     console.log('Please disable ad blockers');
   })
  }
```

原理很简单，广告屏蔽插件一定会阻止加载谷歌的 JavaScript 代码来屏蔽广告的执行，只要我们使用 `fetch` 方法来请求这个 JavaScript 文件，如果出错那就一定是使用了广告屏蔽插件。
所以同样的道理，如果因为有些图片的路径带上了 `ad` 之类的关键字导致被屏蔽，我们也可以使用这个方法来进行检测。记住这里需要开启 `no-cors` 模式，因为 JavaScript 的网络请求是受到同源策略的严格控制的。

## 总结

广告屏蔽插件的原理基本有三种，第一是有列表黑名单，出现在列表黑名单的资源都会直接被中断网络请求，例如无法加载图片，JavaScript 文件等等。第二是关键字匹配，如果资源文件里面有 `ad` 之类的相关广告关键字，那这个资源也会被中断请求。第三个是 DOM 检测，针对已经渲染好的 HTML 文件，通过 `class` 属性来检测是否有相关的广告关键字。如果符合结果，就删除相应的元素。

## 参考

[FuckAdBlock](https://github.com/sitexw/FuckAdBlock)
