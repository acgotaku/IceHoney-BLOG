---
layout: post
title: "跨域请求中的cookies处理"
date: 2018-09-08 23:07
comments: true
tags: cors cookie
---

现在的前后端开发已经完全分离，后端服务器和前端服务器分别部署在不同的服务器。同时也对应不同的域名，所以跨域请求领域方面的知识也需要补充。

# 跨域请求添加header

我们都知道，出于安全考虑，JS是有同源策略限制。所以，我们在对其他域名发起请求的时候需要添加 http header。

        Access-Control-Allow-Origin: *

这个参数的值只能为星号或者具体的网址，星号代表所有网站。

# 跨域请求添加cookie

JS跨域请求有两个API可以使用，`XMLHttpRequest`和`fetch`。`XMLHttpRequest`会默认带上cookies，但是`fetch`默认不会带上。如果需要带上cookies，需要把`withCredentials`设置为`true`。


# 跨域请求服务器设置cookie

我们都知道服务器设置cookie是通过`set-cookie`的 http header来完成。浏览器会读取这个信息设置cookie。但是对于跨与请求，默认是无效的。我们需要再添加一个 http header。

        Access-Control-Allow-Credentials: true

当设置了这个 http header，`Access-Control-Allow-Origin`就不能设置为星号了，必须指定具体的网址。我们必须指定`withCredentials`为`true`并且`Access-Control-Allow-Credentials`为`true`的时候，服务器返回的`set-cookie`才会生效。


参考：

[Access-Control-Allow-Credentials](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials)

[CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

