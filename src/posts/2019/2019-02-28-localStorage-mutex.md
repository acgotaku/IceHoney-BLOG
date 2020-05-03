---
title: localStorage互斥锁的使用
date: 2019-02-28 20:20
comments: true
archives: 2019
tags:
  - mutex
---

JavaScript 是单线程语言，所以我们在写代码的时候根本不会遇到互斥锁的问题。但是当用户打开多个 Tab 页面的时候，这些页面却是共享同一个 localStorage 的。当我们试图修改 localStorage 的时候就会遇到竞争问题，如果两个页面同时修改了 localStorage，程序的可靠性就无法保证。

## 多 Tab 互斥

这个问题查了不少时间，目前有的解决方案：[Shared Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers#Shared_workers)和 [fast mutex](https://github.com/chieffancypants/fast-mutex)。由于想尽可能的支持更多浏览器，所以我们选择了后者。

## 实现 localStorage 互斥

fast mutex 的源码也不是很多，所以读起来也没有很复杂。当执行 lock 函数的时候，会为一个 key 存储 `_MUTEX_LOCK_X_KEY` 和 `_MUTEX_LOCK_Y_KEY`。以下简称 X 和 Y。
首先存 X，然后读 Y。如果 Y 存在说明别人已经拿到互斥锁了，所以重新执行函数。直到获取到互斥锁。如果 Y 不存在，说明没有人竞争锁。所以往下继续执行存储 Y。
但是我们不能保证这段时间没有别的 tab 来存储 X 或者 Y。所以继续读取 X，如果 X 没有发生变化，说明没有人来竞争锁。我们就可以 resolve 传入的回调函数了。
如果 X 发生了变化，说明有人来竞争互斥锁，这时候的函数设置了一个 50ms 的延迟执行，就是保证检测的足够晚。竞争的 tab 能够执行完自己的 lock 函数。50ms 之后再去读取 Y，如果发现 Y 没有发生变化，则自己还拥有这个互斥锁，可以顺利执行 resolve。否则自己丢失了互斥锁，重新执行 lock 函数。

## 总结

fast mutex 的实现确实很巧妙，通过添加两个 localStorage 值和 setTimeout 完成互斥锁的实现。看到这个项目之前，一直以为想做到 localStorage 的互斥是不现实的事情。
