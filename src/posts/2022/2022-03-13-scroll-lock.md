---
title: 禁用页面滚动
date: 2022-03-13 15:11
comments: true
archives: 2022
tags:
  - web
---

在设计组件的时候，例如 Modal 弹窗组件，在显示组件的时候我们不希望页面可以滚动。这时候就需要临时禁用页面的滚动功能。接下来就讲解下禁用页面滚动的方法。

## 禁用滚动

```js
document.body.style.setProperty('overflow', 'hidden');
```

禁用滚动的方法很简单，只需要在页面的 body 元素上设置 overflow 属性为 hidden，就可以禁用页面的滚动了。但是我们需要考虑到，如果我们的页面有滚动条，滚动条的消失会影响页面的显示效果。
所以完美的禁用滚动方式需要考虑到当前页面滚动条的宽度。

```js
function getScrollbarWidth() {
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;
  return scrollbarWidth;
}

function lockBody() {
  const scrollbarWidth = getScrollbarWidth();
  if (scrollbarWidth) {
    document.body.style.setProperty('padding-right', `${scrollbarWidth}px`);
  }
  document.body.style.setProperty('overflow', 'hidden');
}
```

为了保证不影响页面的显示效果，我们需要计算出当前页面滚动条的宽度，然后设置 body 的 padding-right 属性，这样就可以保证页面的显示效果。

## 恢复滚动

```js
function unlockBody() {
  document.body.style.removeProperty('overflow');
  document.body.style.removeProperty('padding-right');
}
```

恢复滚动只需要把添加到 CSS 属性删除即可。

## 总结

如果一直使用 Mac 的触摸板来编程的话，有时候很难意识到滚动条的存在，但是对于大多数的 Windows 用户来说，滚动条会一直存在的。

## 参考

[use-scroll-lock.ts](https://github.com/mantinedev/mantine/blob/master/src/mantine-hooks/src/use-scroll-lock/use-scroll-lock.ts)
