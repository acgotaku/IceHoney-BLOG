---
title: CSS使用box-shadow和border-radius的妙用
date: 2015-3-17 15:08
comments: true
archives: 2015
tags:
  - CSS
---

使用 CSS 画出一个圆角矩形很简单，但是要画出一个和圆角接近平行的月牙就是需要一点技巧了。
例如下面这个图片：

![css](~@assets/css_1.png)

“首页”左边的那个白色和圆角平行的弧形就是我们要用 CSS 设计实现的。

## 先使用 box-shadow 制造一个长条：

```css
box-shadow: 10px 0 0 0 rgba(245, 245, 245, 0.7);
```

效果如下图：

![css](~@assets/css_2.png)

## 再使用 border-radius 使这个长条变成弧形：

```css
border-radius: 0 0 100px 0;
```

效果如下图：

![css](~@assets/css_3.png)

## 最后再嵌套一个 DIV 截取我们所需要的部分

```css
overflow: hidden;
```

![css](~@assets/css_4.png)

这样就达到我们一开始的图片效果了～

示例代码：[点我点我](https://jsfiddle.net/x21au4kc/1/)
