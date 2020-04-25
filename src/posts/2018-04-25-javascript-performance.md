---
title: JavaScript开发中的性能优化
date: 2018-04-25 23:22
comments: true
tags:
  - js
  - performance
---

最近工作比较清闲，5 月又换了一个工作环境。总结下最近看的有关 JavaScript 性能的知识，并记下来供未来的自己参考。希望自己能不忘初心，继续成长！

## 使用 requestAnimationFrame 来更新动画

使用`requestAnimationFrame`把动画渲染交给浏览器，可以保证渲染保持在 60FPS。应该避免使用`setTimeout`或者`setInterval`来实现动画，因为计时器和事件队列会消耗更多的资源，还会导致无用的页面重新绘制。

## 使用 Web Workers 来进行复杂的运算

可以把单纯的计算放在 Web Workers 中，这样不影响主页面的渲染和流畅，例如加密和矩阵变换的运算就可以完全放在 Web Workers 中来减少主线程的执行时间，避免浏览器渲染堵塞。

## 避免微优化 JavaScript

举个最简单的例子，我曾经在一本书上看到过一个提升程序效率的例子。大致是这样的：

```js
var array = [1, 2, 3, ...100];

for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}
```

这里的`array.length`获取数组的长度，每次都要计算数组长度会消耗不少时间，优化之后的代码是这样的：

```js
var array = [1, 2, 3, ...100];
var len = array.length;
for (var i = 0; i < len; i++) {
  console.log(array[i]);
}
```

通过缓存数组的长度来保证只计算一次。这就是典型的微优化，说实话这段代码我一直在用，直到最近读了其他的书才发现，现在的 JS 解释器早就优化了对数组长度的计算。无论是读取一次还是一万次消耗的时间都没有太大差别。微优化应该是 JS 引擎需要做的事情，我们不应该在实际开发中在这方面耗费过多的时间。

## 滑动事件优化

当用户监听滑动事件并执行相关动画操作的时候，记得使用`window.requestAnimationFrame`来优化动画的执行。

```js
function onScroll(evt) {
  // Prevent multiple rAF callbacks.
  if (scheduledAnimationFrame) return;

  scheduledAnimationFrame = true;
  requestAnimationFrame(readAndUpdatePage);
}

function readAndUpdatePage() {
  // do something
  requestAnimationFrame(readAndUpdatePage);
}

window.addEventListener('scroll', onScroll);
```

参考：

[Debounce Your Input Handlers](https://developers.google.com/web/fundamentals/performance/rendering/debounce-your-input-handlers)

[Optimize JavaScript Execution](https://developers.google.com/web/fundamentals/performance/rendering/optimize-javascript-execution)
