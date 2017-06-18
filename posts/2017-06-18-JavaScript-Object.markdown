---
layout: post
title: "JavaScript对象的常见操作"
date: 2017-06-18 22:13
comments: true
tags: javascript object
---

工作也算是稳定了，不过理想和现实的差距还是很大。程序员的职责是把枯燥的工作自动化，而不是去进行重复劳动。最近在写JavaScript程序的时候，遇到了很多对象相关的操作。所以写点东西来总结下这半个月的成长。

#JavaScript对象复制

JavaScript对象默认全部是拷贝引用，也就是所谓的浅拷贝。所以我们在对象操作的时候，要记住是否需要进行拷贝。一般我们使用对象的时候，都是需要对其某个属性进行修改。所以正确的写法是：

		const bar = { a: 1, b: 2， c: {d: 4}}
		const foo = {...bar, b: 3}
		foo.c.d =10
		console.log(bar.c.d)
		// { a: 1, b: 2， c: {d: 10}}

这样就同时进行拷贝和修改。注意这里使用的是JavaScript的es6语法。如果要在浏览器运行，你需要 [Babel](https://babeljs.io/repl/) 来进行转换。注意，如果对象里面还有对象的话，这种方式也仅仅是浅拷贝。深拷贝必须遍历所有属性进行复制，在效率上有很大问题，所以我们尽量不要去用深度拷贝来解决问题。
这里对象的复制是使用的[Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) 针对对象的简单类型可以进行复制，但是对象还是引用。如果实际的应用场景确实需要进行深度拷贝，可以使用[Lodash](https://lodash.com/)。提供了很多常用的类库。

#JavaScript数组

针对数组，现在已经不推荐用for循环来进行处理了，请使用数组的[map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)，[reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)来处理数组的操作。相信这三个方法足以满足需求。


#JavaScript开发规范

现在JavaScript已经是es6的时代，所以我们也需要顺应时代学习新知识。这里我建议大家读读airbnb的[JavaScript Style Guide](https://github.com/airbnb/javascript)。这里不仅教会你正确的编码格式，更多的是优秀的写法。如何合理的拷贝对象，遍历数组等等。


目前就写到这里，工作之后并没有多少成长。写博客都发呆了很久该写什么。。。