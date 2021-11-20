---
title: CSS如何处理固定Header哈希标记跳转的问题
date: 2021-11-20 21:21
comments: true
archives: 2021
tags:
  - css
---

有些前端网站一直都有固定的 Header 显示导航，如果我们文档内部有使用 ID 和#符号来帮助跳转到文档某个位置的话，就会被 Header 遮挡住，那我们怎么处理才能让跳转内容正好显示在 Header 下方呢？答案很简单就是让带有 ID 的这个元素占据的空间包含 Header 的高度。

## padding 和 marging 搭配使用

为了保证多占据的空间和 Header 的高度保持一致，我们可以使用 CSS 变量来存储 Header 的高度，这样就能保证一致性。

```css
h1[id] {
  padding-top: var(--header-height);
  margin-top: calc(var(--header-height) * -1);
}
```

margin 可以设定成负数来吃掉撑起来的高度，所以会使元素占据的高度等于显示的高度加上 Header 的高度，这样跳转的时候就能保证内容显示到 Header 下方了。

## 伪元素来撑起空间

```css
h1[id]:before {
  content: '';
  display: block;
  width: 0;
  height: var(--header-height);
  margin-top: calc(var(--header-height) * -1);
}
```

有些时候我们不方便编辑 id 元素本身的 CSS 属性，所以我们可以借助伪元素来实现这个效果。

## 总结

在 CSS 的世界中，margin 的负值有很多妙用，例如显示列表中如果卡片之间有左右间距，但是最外层却需要和容器保持左右一直，我们也可以使用 margin 的负值来解决这个问题。

## 参考

[offsetting an html anchor to adjust for fixed header](https://stackoverflow.com/questions/10732690/offsetting-an-html-anchor-to-adjust-for-fixed-header)
