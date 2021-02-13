---
title: 提高网页的易读性
date: 2021-02-06 11:04
comments: true
archives: 2021
tags:
  - accessibility
---

正常人可以通过鼠标和键盘来操作浏览器，使用滚轮来滚动网页，使用鼠标左键和右键来执行操作，使用键盘输入内容。但是对于残疾人来说可能就不是这样的了，如果一个人身体行动不便只能通过键盘敲击来操作电脑，无法使用鼠标的情况下，如果网页不支持键盘 `Tab` 键来切换各种点击按钮，那就会给残疾人的使用带来困难。如果视力不好的人只能借助屏幕阅读器来查看网页，如果按钮或者图片没有合适的标签信息，那就无法通过屏幕阅读器来听到这个按钮或者图片的含义。我们不仅要考虑正常人如何查看网页，也需要顾及到特殊人群的需求，这样才能让每个人都享受到互联网带来的便利。

## focus

focus 状态对于网页易读性非常重要，foucs 决定了键盘事件的去向。但是我们在项目开发的时候经常会给 `button` 添加鼠标的 `hover` 状态，却忘记了添加 `focus` 状态。添加 `hover` 状态的 CSS 时，记得同时添加 `focus` 状态的 CSS。同时，浏览器会有默认的 `focus` 样式， Chrome 下是使用 `outline` 属性添加高亮的蓝色边框，记得不要轻易覆盖这个属性为 `none`。
但是并不是所有的 HTML 元素都是可以 `focus` 的，下面是可以 `focus`的元素列表。

```js
const focusableElementsString =
  'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
```

## DOM Order

当你使用键盘的 `Tab` 来选择下一个按钮的时候，是如何决定顺序的呢？ 答案是根据 DOM 的顺序而不是界面上 UI 的顺序，你可以使用 CSS 来调整 UI 顺序，但是 `Tab` 顺序不会改变。
针对隐藏的元素， `Tab` 键也不会触发这个元素的 `focus`，隐藏的元素 CSS 属性可能含有 `display: none` 或者 `visibility: hidden`。

## tabindex

对于 `button` 和 `a` 元素，当然是可以 `focus` 的，但是针对类似 `div` 这样的元素，如何让它可以 `focus` 呢？ 答案是添加 `tabindex` 属性。

```html
<custom-button tabindex="0">Press Tab to Focus Me!</custom-button>
```

通过添加 `tabindex="0"` 可以使这个元素被 `focus`。那么如何使一个元素不被 `focus`呢？

```html
<button id="foo" tabindex="-1">I'm not keyboard focusable</button>
<button onclick="foo.focus();">Focus my sibling</button>
```

使用 `tabindex="-1"` 可以确保这个元素不会使用键盘 `focus`，但是鼠标没有影响。
`tabindex` 当然可以设置大于 0 的值，但我们不推荐这么做，因为默认元素的 `tabindex` 都是 0，所以大于 0 的元素最后才会触发 `focus`。
现在的网页开发，我们都会自己手动实现 `select` 或者 `dropdown` 元素，但由于这些不是默认的 HTML 元素，所以需要自己实现键盘的 `Tab` 键或者方向键的触发。

## Modals and keyboard traps

网页开发中经常会出现弹窗，在有弹窗的情况下我们是不能选中背景中的元素的，所以我们需要手动处理 `Tab` 键保证只有 `Modal` 里的元素可以被 `focus`。并且在关闭 `Modal` 的时候 `focus` 回原来的元素。

## Semantics and ARIA

我们经常使用 HTML 元素来模拟一些功能，例如使用 `button` 按钮来模拟菜单功能。这时候我们需要为 `button` 添加 `aria-label` 属性方便屏幕阅读器理解这个按钮代表的含义。

```html
<button aria-label="menu"></button>
```

当然啦，这种类似的属性还有很多，例如 `role` 属性来描述这个元素的定位。

## Accessibility Review

如何检查自己网页的易读性呢，现在也有现成的网页工具和可以集成的 CI 工具。我们可以使用 Chrome 浏览器自带的 `Lighthouse` 来检查自己网页的易读性。如果想集成 CI 的话，可以试试[axe-core](https://github.com/dequelabs/axe-core)

## 总结

提高网页的易读性，不仅可以使用键盘提高操作网页的便利性，也可以照顾特殊人群的使用，何乐而不为呢。

## 参考

[Modals and keyboard traps sample code](https://github.com/udacity/ud891/tree/gh-pages/lesson2-focus/07-modals-and-keyboard-traps/solution)

[Accessibility](https://developers.google.com/web/fundamentals/accessibility)
