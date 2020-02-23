---
layout: post
title: "前端开发如何防止逆向以及对策"
date: 2020-02-22 18:03
comments: true
tags: frontend
---

前端开发分析代码的途径最简单不过了，第一个途径是查看网页源代码，第二个途径是打开开发者工具审查元素。

# 防止查看源代码

现在网站的基本对策是禁用用户右键选项菜单来避免查看源代码。首先，源代码肯定是能查看到的。采取的措施也只不过是掩耳盗铃而已。解决对策也有很多，我随便说几个。

第一，针对Chrome浏览器，我们可以直接在地址栏里输入 `view-source:https://www.google.com/` 这种方式来查看源代码。第二，我们可以使用其他工具，例如`curl`, `wget`来直接下载源代码。

这种是很初级的防范对策。

# 防止审查元素

现代化的前端开发，都是基于JS来渲染页面元素的，有时候我们查看源代码也只是看到了JS文件的引用。没有太大意义，所以需要浏览器渲染之后查看真正的DOM元素才有意义。这时候如何禁止审查元素就是另外一种对策了。
现在用来检测打开开发者工具主要是通过判断`console.log`的执行，因为不打开开发者工具的话`console.log`是不会执行的。所以有些网站就可以利用这个来阻止用户打开开发者工具审查元素和Debug代码。
下面给出一个例子来：

    <script>
    let el = new Image();
    Object.defineProperty(el,'id',{get: function(){window.location.href="http://www.bimibimi.tv"}});
    console.log(el);
    </script>

这是一个非常巧妙的例子，当执行`console.log`输出Image元素的时候，比如会访问id属性，从而触发后面的重定向URL代码。所以表现就是用户试图打开开发者面板就会被自动定位到首页。

要破解这个的话，只能在页面执行之前注入代码修改Image函数的使用：

    window.Image = function() {};
    Object.defineProperty(window, "Image", { writable: false} );

通过注入上面的代码，来规避自动跳转到首页。如何注入呢？ 就需要利用Chrome的扩展功能，详细代码请参照[bimibimi-hack](https://github.com/acgotaku/bimibimi-hack)。


# 总结

前端代码逆向和反逆向，永远没有银弹。只能说是提高逆向的门槛，但想完全防止是不可能的。如果自己编译一个浏览器，修改浏览器的默认行为的话，就没有不能调试的网站。

# 引用

[Find out whether Chrome console is open](https://stackoverflow.com/questions/7798748/find-out-whether-chrome-console-is-open)

[Source code of bimibimi.tv](view-source:http://www.bimibimi.tv/bangumi/640/play/1/1/)
