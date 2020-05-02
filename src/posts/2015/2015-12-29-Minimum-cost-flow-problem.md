---
title: 使用最小费用最大流模型解决酒店管理收益最大化问题
date: 2015-12-29 11:15
comments: true
tags:
	- algorithm
---

最近老师布置个作业,很没有头绪,于是各种咨询,大家的解决方案是使用最小费用最大流模型来求解,于是我便花了 3 天时间来理解这个算法.

## 问题描述

问题很简单,你有一个只有 5 个房间的酒店,然后本周会有 18 个订单到来,怎样接受订单可以使本周的收益达到最大值.也就是把这 18 个订单填写到一个 5\*7 的表格里
怎么填收益最大,订单要么接受要么拒绝,也可以说是典型的 01 背包问题吧,但用动态规划不好抽象出来状态转移方程,所以我还是选择用最大流来做.每个订单包含 3 个信息:每晚付的房费,从周几开始入住,入住几天.

## 抽象数据模型

因为题目要求是球最大收益,而流模型是最小费用,所以我们把收益取相反数即可.关键是建立容量和权值,因为房间的数量是 5,所以限制源点和汇点的容量是 5,权值是 0.然后中间设置 8 个点,产生 7 条边,每条边代表每天的流,权值为 0,容量为无穷大.这里我们不能简单的连接点来设置订单的边,因为有相同的起始日期和结束日期的订单.这样会造成冲突,如何解决冲突呢? 我们可以在订单的边上再加一个顶点来进行区分.模型图如下所示:
![model](https://raw.githubusercontent.com/acgotaku/USTC-Coding/master/hotel/model.png)
顶点 11 和顶点 16 是重复边的订单,对应的是第一个订单和第 6 个订单.源码和输入数据可以在文章末尾看到.

## 查找增广路径

这里我们使用[Ford–Fulkerson](https://en.wikipedia.org/wiki/Ford%E2%80%93Fulkerson_algorithm)算法来计算每次的增广路径.

## 路径的查找

每次增广路径的查找都需要得到最小权值的路径.查找路径使用的是[SPFA](https://en.wikipedia.org/wiki/Shortest_Path_Faster_Algorithm)算法.

## 第一次查找增广路径

![model](https://raw.githubusercontent.com/acgotaku/USTC-Coding/master/hotel/hotel1.1.png)

## 第一次查找增广路径

![model](https://raw.githubusercontent.com/acgotaku/USTC-Coding/master/hotel/hotel1.2.png)

以此类推求出最后的结果~

## 参考:

[Source code](https://github.com/acgotaku/USTC-Coding/tree/master/hotel)

[Ford–Fulkerson](http://www.cnblogs.com/gaochundong/p/ford_fulkerson_maximum_flow_algorithm.html)
