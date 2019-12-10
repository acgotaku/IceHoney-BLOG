---
layout: post
title: "iOS12下Safari浏览器的BUG"
date: 2019-12-10 22:39
comments: true
tags: safari
---

新时代的前端开发遇上新时代的IE6, 没错我说的就是苹果的Safari浏览器，当年谷歌抛弃WebKit内核自立门户真是正确的选择。Chrome有很好的bug反馈机制，而Safari要想反馈bug首先得成为苹果的付费开发者。

# 事件穿透

当我们遇到一个特殊需求，有两个绝对定位的DIV(position:absolute)。如果指定了`z-index`必然会有上下的层级关系，值大的在上面，值小的在下面。但是我们需要上面的DIV不接受任何的事件，由下层的DIV捕获事件并处理。这时候可以使用一个神奇的CSS`pointer-events: none;`来解决。只要给上层DIV指定了这个CSS属性，上层DIV就不会接收任何事件，相对的下层就可以收到所有事件的响应。

# 测试用Demo

为此，我专门在[codepen](https://codepen.io/acgotaku/pen/LYEpdWZ)写了一个demo。当然，这个CSS属性主流浏览器都已经支持了。但是当上层DIV里包含了一个iframe的时候，iOS12下的Safari表现就变得奇怪了，demo中，我在Back DIV里监听了`touchstart`和`click`事件，正常情况下两个事件都会触发，但是在有iframe的时候，safari只会触发`touchstart`事件。

# 解决方案

既然少触发了一个事件，那我们的解决方案就是模拟点击事件，不过代码中必须通过User-Agent限制执行的范围，否则造成其他浏览器双击就不好了。模拟事件很简单，自己新建一个事件，然后在指定的DOM上`dispatchEvent`就好了。但是针对input输入框，即使模拟了`click`事件也不能出发iOS打开键盘激活输入，解决办法就是如果在`input`元素触发的`touchstart`事件，就执行`input.focus()`。
这样就可以激活输入的键盘了，不过要注意的是只有`touchstart`可以触发，测试发现`touchend`并不能触发。

# 总结

iOS下的Safari浏览器有很多BUG，经常找BUG的我也算是有点经验。最重要的方法就是排除法，删除多余的DOM。缩小影响因子，最后确定原因。

# 引用

[The stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)

[Creating and triggering events](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events)
