---
title: Vue实现双Slider
date: 2020-06-14 21:31
comments: true
archives: 2020
tags:
  - frontend
  - vue
---

前端由于历史原因，基本上没有组件的概念，原生的 HTML 元素提供的功能非常简陋，所以都需要开发者自己实现或者定制组件。这次讲讲双 Slider 的实现。

## 技术选型

目前比较流行的 Vue 的组件库是[Element](https://element.eleme.io/) 和 [View UI](https://www.iviewui.com/)。这两个组件库都使用了最常用的方法，使用`div`或者`span`，元素模拟滑动条，监听事件，并处理滑动。但是 HTML 元素本身提供了[Range](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range)标签，我们可以修改下样式来使用，这样就避免自己直接处理事件监听，也可以减少浏览器兼容性问题。

## 样式定制化

目前针对 Range 元素的样式定制化还没有纳入 Web 标准，所以在处理起来稍微花点功夫。首先，我们需要修改默认的滑块样式。使用的 CSS 选择器是[-webkit-slider-thumb](https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-slider-thumb)。由于未纳入标准，需要使用浏览器前缀才行。这里我们可以借助 [postcss-input-range](https://github.com/jonathantneal/postcss-input-range) 插件来完成这项工作。

## 双 Slider 实现

HTML 本身只提供了单滑块，要想实现双 Slider，只能两个叠加在一起了，并且需要自己实现 Slider 的选中范围，因为目前的 css selector 并不能达到这种效果。如何动态的控制 Slider 的显示长度呢？当然可以计算出目前的选中百分比，通过 css variables 来达到更新样式的效果。

## Slider 滑动规则

当然，我们左边的滑块不能滑过右边的滑块，这是基本常识。这里就需要监听`input` 事件，当超出范围的时候，强制把值重置回合法值就可以了。

## 实现效果

<p class="codepen" data-height="349" data-theme-id="dark" data-default-tab="js,result" data-user="acgotaku" data-slug-hash="LYGZQva" style="height: 349px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Slider">
  <span>See the Pen <a href="https://codepen.io/acgotaku/pen/LYGZQva">
  Slider</a> by 雪月秋水 (<a href="https://codepen.io/acgotaku">@acgotaku</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## 总结

能用原生 HTML 标签来解决的问题，尽量还是不要自己实现事件监听了。这样性能也会更好，兼容性上也不会太差。
