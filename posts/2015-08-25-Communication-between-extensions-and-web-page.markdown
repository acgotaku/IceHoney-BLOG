---
layout: post
title: "Chrome扩展和Web Page 进行通讯"
date: 2015-8-25 19:54
comments: true
tags: chrome
---

由于WEB页面本身受到浏览器的安全策略限制,而且 Content Scripts和页面本身并不共享环境变量.我们很多时候都是
通过DOM去注入JS代码到当前页面上.因为同源策略的原因不得不把有些操作发回到Background进行处理,因为Background
没有任何限制,可以拥有完整的Chrome的API权限.

#通过Content Scripts中转

第一种通讯方式是通过Web API [postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)
发送消息,然后在 Content Scripts 监听 message 事件捕捉消息发送回Background
这种方式适合单向通讯,只从 web page发送数据到Background 或者 Background 发送给 web page 如果双向通讯的话就很不方便了
因为 Content Scripts和 web page 共享window会造成事件重复绑定的.

#使用Chrome API

首先在manifest.json里声明权限

		"externally_connectable": {
		  "matches": ["*://*.example.com/*"]
		}
声明要通讯的网页的网址,然后和 Content Script 一样建立通讯

		var port = chrome.runtime.connect(chrome_id,{name: "abc"});
		port.postMessage({
		    method:"rpc_data",
		    data: parameter
		});
		port.onMessage.addListener(function(response) {
		    SetMessage(response[0],response[1]);
		});

关键是Background监听消息的接收,必须使用 `chrome.runtime.onConnectExternal.addListener`
而不是 `chrome.runtime.onConnect.addListener`
后者是接收 Content Script消息的,前者是 接收 Web Page消息的

[官方文档](https://developer.chrome.com/extensions/messaging#external-webpage)

这样便实现了Web Page 和 Background之间的双向通讯, Web Page不能完成的事情交给Background来处理即可.