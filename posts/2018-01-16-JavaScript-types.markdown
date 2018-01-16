---
layout: post
title: "JavaScript中的数据类型"
date: 2018-01-16 22:44
comments: true
tags: frontend javascript
---

隔了一个月，我又来发博客了。最近的工作老是在写CSS和HTML。但是我更想学习JS啊！我一直都觉得HTML和CSS是属于设计范畴的，而JS才是真正属于工程师的逻辑范畴。
况且最近Github上有一个神奇的项目[Screenshot-to-code-in-Keras](https://github.com/emilwallner/Screenshot-to-code-in-Keras)可以把截图直接生成HTML代码，我觉得只是单纯的从PSD翻译成页面的工作迟早要被淘汰。

最近在读You Don't Know JS这本书。书上讲解了很多关于JS的细节知识，对于深入了解JS有很大帮助。所以想在读的过程中把一些觉得有意思的东西记下来，便于以后复习。

# 类型

JavaScript中有七种内置类型：

1. 空值(null)
2. 未定义(undefined)
3. 布尔值(boolean)
4. 数字(number)
5. 字符串(string)
6. 对象(object)
7. 符号(symbol, ES6新增)

除了对象之外，通称基本类型。

# JavaScript中的设计BUG

    typeof null === "object"; // true

正确的返回结果应该是null。但这个BUG由来已久，修复反而会出问题。所以我们需要使用复合条件来判断：

    (!a && typeof a === "object")

接下来是`NaN`的问题：

    var a = 2 / "foo";
    var b = "foo";
    a; // NaN
    b; "foo"
    window.isNaN( a ); // true
    window.isNaN( b ); // true
    NaN === NaN // false

很显然"foo"不是NaN，但显然它也不是数字。这个BUG也存在很久了，在ES6时代，我们可以使用Number.isNaN来解决。
ES6之前的polyfill是：

    if (!Number.isNaN) {
      Number.isNaN = function(n) {
        return (
          typeof n === "number" &&
          window.isNaN(n)
        );
      };
    }

并且NaN是JS中唯一一个不等于自身的值。

# 值和类型

JavaScript中的变量是没有类型的，只有值才有。变量可以随时持有任何类型的值。

undefined 和 undeclared. 变量在未持有的时候为undefined, 此时typeof 返回 undefined. 大多数开发者倾向于将 undefined 等同于 undeclared(未声明),但在 JavaScript 中它们完全是两回事。已在作用域中声明但还没有赋值的变量,是 undefined 的。相反,还没有在作用域中声明过的变量,是 undeclared 的。

    var a;
    a; // undefined
    b; // ReferenceError: b is not defined
    typeof a; // "undefined"
    typeof b; // "undefined"

虽然b 是一个 undeclared 变量,但 typeof b 并没有报错。这是因为 typeof 有一个特殊的安全防范机制。防止因为未定义导致程序终止运行。

# 值和引用

在许多编程语言中，赋值和参数传递可以通过值复制(value-copy)或者引用复制(reference-copy)来完成，这取决与我们使用什么语法。但是JavaScript 对值和引用的赋值 / 传递在语法上没有区别,完全根据值的类型来决定。

简单值(即标量基本类型值,scalar primitive)总是通过值复制的方式来赋值/传递,包括null 、 undefined 、字符串、数字、布尔和 ES6 中的 symbol 。

复合值(compound value)——对象(包括数组和封装对象)和函数,则总是通过引用复制的方式来赋值/传递。由于引用指向的是值本身而非变量,所以一个引用无法更改另一个引用的指向。

    var a
    var b
    a; //
    b; //
    = [1,2,3];
    = a;
    [1,2,3]
    [1,2,3]
    // 然后
    b = [4,5,6];
    a; // [1,2,3]
    b; // [4,5,6]

b=[4,5,6] 并不影响 a 指向值 [1,2,3] ,除非 b 不是指向数组的引用,而是指向 a 的指针,但在 JavaScript 中不存在这种情况!

参考：

[You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
