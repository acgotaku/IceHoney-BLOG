---
title: 伪随机的种子问题
date: 2018-08-01 22:07
comments: true
tags:
  - random
  - seed
---

最近前端的工作不是很多，所以就帮忙写写后端的 ruby on rails。在写测试用例的时候，虽然单元测试的数据每次都是随机生成的，但是我们需要根据单元测试来生成 API 文档。如果测试文档每次都是随机的数据会很难检查每次 API 更新了什么，所以我们需要在生产测试文档的时候，保证随机数据的稳定性。

## Random seed

seed 的意义就在于，初始化了随机数生成器。保证了每次随机的结果都一样。例如代码：

```rb
@rand = Random.new(1234)

puts @rand.rand

puts @rand.rand(0..1050)

puts @rand.rand(0..1050)

puts @rand.rand
```

这段代码每次执行都会输出：

```text
0.1915194503788923
674
699
0.2725926052826416
```

## rand range

但是当我们把中间的 rand 的范围稍微修改：

```rb
@rand = Random.new(1234)

puts @rand.rand

puts @rand.rand(10..150)

puts @rand.rand(10..150)

puts @rand.rand
```

会发现输出发生了变化：

```text
0.1915194503788923
48
63
0.4377277390071145
```

第一次的输出还是不变，当然 2,3 两次肯定是变化的，重点是最后一次。我们发现最后一次的随机数也发生了变化。

## 总结

通过调查 ruby 源码发现，对于有范围的 rand。ruby 会不断生成随机数，判断是否落在区间范围内，如果是在范围内就返回，否则继续尝试。默认在 0 到 1 之间是百分百命中，所以是随机一次。如果是其他范围，命中次数不一样会导致生成随机数的次数发生变化。所以影响到之后的随机数生成。

参考：

[ruby](https://github.com/ruby/ruby/blob/trunk/random.c#L863)

[Random](https://ruby-doc.org/core-2.2.0/Random.html)
