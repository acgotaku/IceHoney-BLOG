---
title: TypeScript中应该禁止使用enum
date: 2022-07-04 20:37
comments: true
archives: 2022
tags:
  - js
---

TypeScript 添加了一个 `enum` 的数据类型结构，但是这个数据类型在 JavaScript 中并不存在，在编译过程中会被转换成 Object。并且 enum 类型可以完全被 union 类型替代。
所以我们推荐使用 union 来代替 enum。接下来我们使用一个例子来解释下 enum 如何被替换成 union。

## enum 定义数据类型

我们来封装一个常见的 fetch 函数，使用 enum 定义的代码如下。

```ts
enum HTTPRequestMethod {
  GET = 'GET',
  POST = 'POST'
}

function fetchJSON(url: string, method: HTTPRequestMethod) {
  return fetch(url, { method }).then(response => response.json());
}
```

编译成 JS 代码如下：

```js
'use strict';
var HTTPRequestMethod;
(function(HTTPRequestMethod) {
  HTTPRequestMethod['GET'] = 'GET';
  HTTPRequestMethod['POST'] = 'POST';
})(HTTPRequestMethod || (HTTPRequestMethod = {}));
function fetchJSON(url, method) {
  return fetch(url, { method }).then(response => response.json());
}
```

这样编译的 JS 代码，定义了 HTTPRequestMethod 对象，但并不是 const 常量，有被更改的可能性，非常不优雅。

## union 定义数据类型

```ts
const HTTPRequestMethod = {
  GET: 'GET',
  POST: 'POST'
} as const;

type ValuesOf<T> = T[keyof T];
type HTTPRequestMethodType = ValuesOf<typeof HTTPRequestMethod>;

function fetchJSON(url: string, method: HTTPRequestMethodType) {
  return fetch(url, { method }).then(response => response.json());
}
```

编译成 js 代码之后是：

```js
'use strict';
const HTTPRequestMethod = {
  GET: 'GET',
  POST: 'POST'
};
function fetchJSON(url, method) {
  return fetch(url, { method }).then(response => response.json());
}
```

## 总结

对比 enum 和 union 定义生成的代码，我们能明显感受到 union 类型生成的代码更优雅。而且 enum 还有其他缺点，大家可以查看下参考链接。

## 参考

[さようなら、TypeScript enum](https://www.kabuku.co.jp/developers/good-bye-typescript-enum)

[Why it is not good to use enums?](https://stackoverflow.com/a/60041791)

[Const Assertions in Literal Expressions in TypeScript](https://mariusschulz.com/blog/const-assertions-in-literal-expressions-in-typescript)
