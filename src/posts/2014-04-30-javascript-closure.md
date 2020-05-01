---
title: JavaScript函数中的闭包
date: 2014-04-30 16:18
comments: true
tags:
  - js
  - closure
---

JavaScript 中的闭包通常被视作 JavaScript 的高级特性.但是我看了好几次文档也没有明白过来.也没有实际应用过.最近重新学习 JavaScript
打算好好学习下.

## 什么是闭包

闭包用通俗的说法来理解就是子函数可以使用父函数中的局部变量,这种行为叫做闭包.这个变量不是在这个代码块内或者全局上下文中定义的,而是
在定义代码块的环境中定义的(局部变量).一个经典的例子就是:

```js
function a() {
  var i = 0;
  function b() {
    alert(++i);
  }
  return b;
}
var c = a();
c();
```

函数 b 嵌套在函数 a 内部,函数 a 返回函数 b.这样在执行了 var c = a() 之后,变量 c 变指向了函数 a.再指向 c()就会弹窗显示 i 的值.这段代码就创建了一个
闭包.因为函数 a 外的变量 c 引用了函数 a 内的函数 b.就是说,当函数 a 的内部函数 b 被函数 a 外的一个变量引用的时候,就创建了一个闭包.

## 闭包的用途

- 可以读取函数内部的变量
- 这些变量的值始终保持在内存中
- 模拟私有变量

上面的例子中,i 的值只有 b 函数可以读取.当你不断执行 c()的时候,发现 i 值不断增大,说明 i 没有被内存回收.

## 使用闭包构造模块

模块是一个提供接口却隐藏状态与实现的函数或对象.通过使用函数产生模块,我们几乎可以完全摈弃全局变量的使用.
举例来说,假定我们想要给 String 增加一个 deentityify 方法.它的任务是寻找字符串中的 HTML 字符实体并把它们替换为对应的字符.
这就需要在一个对象中保存字符实体的名字和它们对应的字符.但我们该在哪里保存这个对象呢?我们可以把它放到一个全局变量中,
但全局变量是魔鬼.我们可以把它定义在该函数的内部,但是那会带来运行时的损耗,因为每次执行该函数的时候该字面量都会被求值一次.
理想的方式就是使用闭包实现.

```js
Function.prototype.method = function(name, func) {
  this.prototype[name] = func;
  return this;
};
String.method(
  'deentityify',
  (function() {
    //字符实体表,它映射字符实体打名字到对应的字符.
    var entity = {
      quot: '"',
      lt: '<',
      gt: '>'
    };
    return function() {
      //查找以'&'开头和';'结束打子字符串.如果找到就替换.
      return this.replace(/&([^&;]+);/g, function(a, b) {
        var r = entity[b];
        return typeof r === 'string' ? r : a;
      });
    };
  })()
);
cosole.log('&lt;&quot;&gt;'.deentityify());
```

通过给 Function.prototype 增加一个 method 方法,我们下次给对象增加方法的时候就不必键入 prototype 这几个字符,省掉了麻烦.
请注意最后一行,我们用()运算法立刻调用我们刚刚构造出来的函数.这个调用所创建并返回的函数才是 deentityify 方法.  
关于这个的用法请参见 wiki:[IIFE](http://en.wikipedia.org/wiki/Immediately-invoked_function_expression)

## 闭包的缺点

闭包会使局部变量始终存在,内存消耗很大.在 IE 浏览器中它会很容易导致泄露内存.
还有就是不要在循环中引用闭包.

## 参考资料

- JavaScript 语言精粹
- [MDN](https://developer.mozilla.org/zh-CN/docs/JavaScript/Guide/Closures)
- [baike](http://baike.baidu.com/view/648413.htm)
