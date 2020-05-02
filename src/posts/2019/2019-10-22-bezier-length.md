---
title: 计算贝塞尔曲线的长度
date: 2019-10-22 22:28
comments: true
tags:
  - bezier
---

贝塞尔曲线是工业上经常用的一种曲线，经常用用来汽车的外观设计。贝塞尔曲线根据控制点的不同可以分为：

1. 一阶贝塞尔曲线（2 个控制点）
2. 二阶贝塞尔曲线（3 个控制点）
3. 三阶贝塞尔曲线（4 个控制点）
4. n 阶贝塞尔曲线（n+1 个控制点）

## 二阶贝塞尔曲线

这次讲述的是二阶贝塞尔曲线的长度计算。首先计算曲线的长度之前，我们需要知道曲线的数学方程表达式，由于目前博客还未支持数学表达式的显示，所以我只能帖出[wiki 链接](https://en.wikipedia.org/wiki/B%C3%A9zier_curve)。求曲线的长度，本质上是很难计算出精确值的，但只要近似值的误差绝对小，在实际使用中也是足够的。求曲线的长度本质上是进行定积分的计算。

## 高斯求积

在定积分的数值计算中，[高斯求积](https://zh.wikipedia.org/wiki/%E9%AB%98%E6%96%AF%E6%B1%82%E7%A7%AF)可以说是一个精度非常高的公式。

我们只需要把二阶贝塞尔曲线代入高斯求积公式中便可以计算出结果，求积公式的节点个数 n 越大，精度就越高。

不过高斯求积公式中节点个数对应的位置和权重表的计算，我还是没弄明白。

## 代码实现

已经有人给出了代码实现，所以大家可以直接去 Github 上查看[bezier.js](https://github.com/Pomax/bezierjs/blob/master/lib/utils.js#L252)。

并且有详细的解释：[Arc length](https://pomax.github.io/bezierinfo/#arclengthapprox)

## 总结

曲线的计算都可以归纳成对定积分的计算，只要知道曲线的数学方程式，就可以使用定积分的数值计算来计算出结果。

## 引用

[A Primer on Bézier Curves](https://pomax.github.io/bezierinfo/)
