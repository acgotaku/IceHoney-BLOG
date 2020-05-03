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

![](https://lh3.googleusercontent.com/J7hkxUNbul8mcA7PqTDMR6_3_-Il8pGLgPYJSR0SeXo=w353-h245-no)

“首页”左边的那个白色和圆角平行的弧形就是我们要用 CSS 设计实现的。

## 先使用 box-shadow 制造一个长条：

```css
box-shadow: 10px 0 0 0 rgba(245, 245, 245, 0.7);
```

效果如下图：

![](https://lh3.googleusercontent.com/Mk8ZeRV-Z59BBgsEk3Ym3JYap4j01_Z0UuhuiXRUrSA=w358-h207-p-no)

## 再使用 border-radius 使这个长条变成弧形：

```css
border-radius: 0 0 100px 0;
```

效果如下图：

![](https://lh3.googleusercontent.com/-TZnghbYv5uo/VQfetlBJz-I/AAAAAAAAirw/8TK9DUgobFI/w307-h142-no/2015-03-17-155813_307x142_scrot.png)

## 最后再嵌套一个 DIV 截取我们所需要的部分

```css
overflow: hidden;
```

![](https://lh3.googleusercontent.com/1rnHBiAIGT17FaRokCRPZR_6DAMtu7CLhqep3Vp1GE4=w332-h207-p-no)

这样就达到我们一开始的图片效果了～

示例代码：[点我点我](https://jsfiddle.net/x21au4kc/1/)
