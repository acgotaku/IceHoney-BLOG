---
title: JavaScript函数调用的四种方式
date: 2014-04-24 15:28
comments: true
archives: 2014
tags:
  - js
  - function
---

JavaScript 函数调用除了声明时定义的形式参数,每个函数还接收两个附加的参数:this 和 arguments.参数 this 在面向的对象
编程非常重要,它的值取决于调用的模式.典型的两种函数定义方式有:

```js
var add = function(a, b) {
  return a + b;
};
function add(a, b) {
  return a + b;
}
```

这两种函数声明的区别是什么,是我上次百度面试的一个问题.当时没回答出来,很是尴尬.现在问了前端菊苣之后得出的答案是:
一个是声明了一个变量 add，并给它赋初始值（一个匿名函数）另一个是声明了一个名为 add 的具名函数区别有：

1. add.name 不同，trace 的时候显示也不同(第一个 add.name 是"",第二个是"add")
2. 由于声明会被提升，但赋值语句不会，所以在语句之前访问 add 的时候结果不同（这点老 IE 还有点区别）

在 JavaScript 中四种调用模式分别是:方法调用模式,函数调用模式,构造器调用模式和 apply 调用模式.这些模式在如何初始化关键
参数 this 上存在差异.

## 方法调用模式

当一个函数被保存为对象的一个属性时,我们称它为一个方法.当一个方法被调用时,this 被绑定到该对象.如果调用表达式包含一个提取属性
的动作(即包含一个 . 点表达式或[subscript]下标表达式),那么它就是被当做一个方法来调用.

```js
var myObject = {
  value: 0,
  increment: function(inc) {
    this.value += typeof inc === 'number' ? inc : 1;
    console.log(inc);
  }
};
myObject.increment(); // 1
myObject.increment(2); // 3
```

方法可以使用 this 访问自己所属的对象,所以它能从对象中取值或对对象进行修改.this 到对象的绑定发生在调用的时候.这个"超级"延迟绑定(very late binding)
使得函数可以对 this 高度复用.通过 this 可取得他们所属对象的上下文的方法成为公共方法(public method).

## 函数调用模式

当一个函数并非一个对象的属性时,那么它就是被当做一个函数来调用的:

```js
var sum = add(3, 4);
```

以此模式调用函数时,this 被绑定到全局对象(浏览器中就是 window 对象).这是语言设计上的一个错误.倘若语言设计正确,那么当内部函数被调用时,this 应该仍然绑定到
外部函数的 this 变量.这个设计错误的后果就是方法不能利用内部函数来帮助它工作,因为内部函数的 this 被绑定了错误的值,所以不能共享该方法对对象的访问权.幸运的是,
有一个很容易的解决方案:如果该方法定义一个变量并给它赋值为 this,那么内部函数就可以通过那个变量访问到 this.按照约定,我们把那个变量命名为 that:

```js
myObject.double = function() {
  //给myObject增加一个 double 方法
  var that = this;
  var helper = function() {
    that.value = add(that.value, that.value);
    console.log(this);
  };
  helper(); //以函数的形式调用helper
};
myObject.double(); //以方法的形式调用double
```

## 构造器调用模式

如果在一个函数前面带上 new 来调用,那么背地里将会创建一个连接到该函数的 prototype 成员的新对象,同时 this 会被绑定到那个新对象上.

```js
//创建一个名为Quo的构造器函数,它构造一个带有status属性的对象.
var Quo = function(string) {
  this.status = string;
};
//给 Quo的所以实例提供一个名为 get_status 的公共方法.
Quo.prototype.get_status = function() {
  return this.status;
};
//构造一个 Quo 实例
var myQuo = new Quo('confused');
```

一个函数,如果创建的目的就是希望结合 new 前缀来调用,那它就被称为构造器函数.这种构造器函数不推荐使用,详细内容请看《JavaScript 语言精粹》后续内容.

## Apply 调用模式

因为 JavaScript 是一门函数式的面向对象编程语言,所以函数可以拥有方法.

apply 方法让我们构建一个参数数组传递给调用函数.它允许我们选择 this 的值.apply 方法接收两个参数,第一个是要绑定给 this 的值,第二个就是一个参数数组.

```js
var array = [3, 4];
var sum = add.apply(null, array);

var statusObject = {
  status: 'A-OK'
};
//statusObject并没有继承自 Quo.prototype,但我们可以在 statusObject 上调用
//get_status 方法,尽管 statusObject 并没有一个名为 get_status 的方法.
var status = Quo.prototype.get_status.apply(statusObject);
```

以上内容摘录于《JavaScript 语言精粹》.
