---
title: 前端中debounce和throttle函数说明
date: 2020-10-17 20:52
comments: true
archives: 2020
tags:
  - web
---

前端开发中，debounce 和 throttle 函数经常会被使用，但是很多人分不清两者的区别，今天就来说明一下。

## debounce

我们首先来看 debounce (防抖动)的代码实现：

```ts
function debounce(fn: Function, time: number): Function {
  let timeout = 0;

  return (...args: any) => {
    window.clearTimeout(timeout);
    timeout = window.setTimeout(() => {
      fn(...args);
    }, time);
  };
}
```

从代码中可以看出，该函数在执行的时候会清除上次的定时器，然后设置一个新的定时器，等待一定时间之后执行。所以在短时间内调用多次的话，只会执行最后一次。

## throttle

throttle (节流)函数的代码实现：

```ts
function throttle(fn: Function, time: number): Function {
  let inThrottle: boolean;

  return (...args: any) => {
    if (!inThrottle) {
      inThrottle = true;
      fn(...args);
      setTimeout(() => (inThrottle = false), time);
    }
  };
}
```

从代码中可以看出，函数在设置的阈值时间之内只会执行一次。

## 总结

debounce: 将频繁触发的事件合并为一次执行，适用场景例如输入名称进行搜索，使用 debounce 可以减少对服务器的请求，在用户输入完毕之后再进行请求。

throttle： 设置一个阈值，在阈值内函数只会执行一次，例如 resize 事件或者 scoll 事件，防止浏览器频繁执行，降低网页响应速度。

## 参考

[The Difference Between Throttling and Debouncing](https://css-tricks.com/the-difference-between-throttling-and-debouncing/)
