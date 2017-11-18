---
layout: post
title: "前端开发的技术栈"
date: 2017-11-18 17:18
comments: true
tags: frontend development
---

我发现自己博客没次开头都是在说近况和废话。这次也不例外。哈哈哈，工作也算顺畅，顺便总结下最近的前端开发的技术栈来回顾下这半年学到的知识。

# HTML开发

对于大型项目，直接书写HTML代码是一个非常繁琐和头疼的事情，因为HTML需要闭合，每次找匹配的HTML标签都要非常花功夫。所以现在的开发都是使用预处理器来书写代码，例如主流的[Pug](https://github.com/pugjs/pug)，通过缩进来控制元素的嵌套，还支持多种语法。非常适合大型项目的开发，再也不用担心修改代码的时候出现HTML元素标签没有闭合的情况发生了。而且还规避了一些语法错误，例如在`p`标签里嵌入`block`元素是非法的。如果强行嵌入的话，你会发现生成的HTML代码是错误的。

# CSS开发

CSS开发更多的需要是良好的模块化功能和合理的作用域。这时候也需要通过预处理器来进行操作，推荐使用[SCSS](http://sass-lang.com/guide)。这里很多人对`sass`和`scss`之间的区别有疑问。简单的来说，`SCSS`的格式更接近CSS，所以比较容易上手。但是`SASS`是通过缩进来书写的，对新手不太友好。所以建议大家使用`SCSS`来书写模块化代码。

# JavaScript开发

现在主流的浏览器支持的JavaScript版本是es5。但是众所周知，JavaScript(es5)有很多陷阱和缺点，例如`this`指针问题和异步处理等等。基于原型连的继承对于面向对象开发者来说也很不友好。所以推荐使用[es6](http://es6-features.org/#Constants)来书写代码。可以使用基于`class`的继承，和解决`this`指针问题。而且还能使用`import`进行模块化开发。虽然只是语法糖，但也提升了开发效率。

# 自动化构建工具

我们使用了预处理器来书写代码，并使用新版本的`es6`语法。但是目前浏览器并不支持直接解析这些内容。所以我们需要构建化工具来处理从Pug生成HTML，从SCSS生成CSS，把es6语法的JavaScript转换成es5语法。对于SPA网站推荐使用`webpack`，而对于普通网站的构建推荐使用`Gulp`。这里区别开的原因是，`webpack`必须指定入口文件，但是`Gulp`只需要指定需要处理的文件或文件夹就可以了，支持通配符匹配。对于多页面的传统网站来说非常便利。

# 浏览器兼容处理

这是每个前端工程师最头疼的地方了，因为每个浏览器支持程度都不一样。在使用比较新的API记得去[Can I use](https://caniuse.com/)查看下各个浏览器的支持情况，如果实在是需要这个功能的话，那就只能去寻找`polyfill`了。


参考：

[Why p tag can't contain div tag](https://stackoverflow.com/questions/8397852/why-p-tag-cant-contain-div-tag-inside-it)
