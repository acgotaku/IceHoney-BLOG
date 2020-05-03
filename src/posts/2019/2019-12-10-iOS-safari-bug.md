---
title: iOS12下Safari浏览器的BUG
date: 2019-12-10 22:39
comments: true
archives: 2019
tags:
  - safari
---

新时代的前端开发遇上新时代的 IE6, 没错我说的就是苹果的 Safari 浏览器，当年谷歌抛弃 WebKit 内核自立门户真是正确的选择。Chrome 有很好的 bug 反馈机制，而 Safari 要想反馈 bug 首先得成为苹果的付费开发者。

## 事件穿透

当我们遇到一个特殊需求，有两个绝对定位的 DIV(position:absolute)。如果指定了`z-index`必然会有上下的层级关系，值大的在上面，值小的在下面。但是我们需要上面的 DIV 不接受任何的事件，由下层的 DIV 捕获事件并处理。这时候可以使用一个神奇的 CSS`pointer-events: none;`来解决。只要给上层 DIV 指定了这个 CSS 属性，上层 DIV 就不会接收任何事件，相对的下层就可以收到所有事件的响应。

## 测试用 Demo

为此，我专门在[codepen](https://codepen.io/acgotaku/pen/LYEpdWZ)写了一个 demo。当然，这个 CSS 属性主流浏览器都已经支持了。但是当上层 DIV 里包含了一个 iframe 的时候，iOS12 下的 Safari 表现就变得奇怪了，demo 中，我在 Back DIV 里监听了`touchstart`和`click`事件，正常情况下两个事件都会触发，但是在有 iframe 的时候，safari 只会触发`touchstart`事件。

## 解决方案

既然少触发了一个事件，那我们的解决方案就是模拟点击事件，不过代码中必须通过 User-Agent 限制执行的范围，否则造成其他浏览器双击就不好了。模拟事件很简单，自己新建一个事件，然后在指定的 DOM 上`dispatchEvent`就好了。但是针对 input 输入框，即使模拟了`click`事件也不能出发 iOS 打开键盘激活输入，解决办法就是如果在`input`元素触发的`touchstart`事件，就执行`input.focus()`。
这样就可以激活输入的键盘了，不过要注意的是只有`touchstart`可以触发，测试发现`touchend`并不能触发。

## 总结

iOS 下的 Safari 浏览器有很多 BUG，经常找 BUG 的我也算是有点经验。最重要的方法就是排除法，删除多余的 DOM。缩小影响因子，最后确定原因。

## 引用

[The stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)

[Creating and triggering events](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events)
