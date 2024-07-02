---
title: 如何比较版本号
date: 2024-07-02 21:52
comments: true
archives: 2024
tags:
  - web
---

前端代码需要运行在客户的浏览器中，但是有些版本的浏览器不支持某些特性，所以我们需要比较浏览器的版本号，然后根据版本号来决定是否使用某些特性。这里就涉及到版本号的比较问题。

## 版本号定义

版本号一般是由三个数字组成，分别是主版本号、次版本号和修订版本号。比如 `1.2.3`，其中 `1` 是主版本号，`2` 是次版本号，`3` 是修订版本号。版本号的比较是从左到右依次比较，如果左边的数字相等，再比较右边的数字。但是版本号有些只有两个数字，比如 `1.2`，这时候我们可以认为修订版本号是 0，所以 `1.2` 等价于 `1.2.0`。

## 两个版本号比较

这里我们需要把版本号转换成数组，然后比较两个数组的大小。如果两个数组的长度不一样，我们可以认为长度短的数组后面都是 0。

```ts
const compareVersions = (v1: number[], v2: number[]): number => {
  for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
    const num1 = v1[i] || 0;
    const num2 = v2[i] || 0;
    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
  }
  return 0;
};
```

如果我们需要判断版本号是否在某个范围内，我们可以这样写：

```ts
const isVersionInRange = (
  version: number[],
  min: number[],
  max: number[]
): boolean => {
  return (
    compareVersions(version, min) >= 0 && compareVersions(version, max) <= 0
  );
};
```

## 总结

版本号比较虽然看起来简单，但是在实现过程中还是需要考虑各种情况，例如版本号的长度不一样，版本号的范围判断等。
