---
title: Chrome扩展和Web Page 进行通讯
date: 2015-8-25 19:54
comments: true
archives: 2015
tags:
	- chrome
---

由于 WEB 页面本身受到浏览器的安全策略限制,而且 Content Scripts 和页面本身并不共享环境变量.我们很多时候都是
通过 DOM 去注入 JS 代码到当前页面上.因为同源策略的原因不得不把有些操作发回到 Background 进行处理,因为 Background
没有任何限制,可以拥有完整的 Chrome 的 API 权限.

## 通过 Content Scripts 中转

第一种通讯方式是通过 Web API [postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)
发送消息,然后在 Content Scripts 监听 message 事件捕捉消息发送回 Background
这种方式适合单向通讯,只从 web page 发送数据到 Background 或者 Background 发送给 web page 如果双向通讯的话就很不方便了
因为 Content Scripts 和 web page 共享 window 会造成事件重复绑定的.

## 使用 Chrome API

首先在 manifest.json 里声明权限

```json
"externally_connectable": {
	"matches": ["*://*.example.com/*"]
}
```

声明要通讯的网页的网址,然后和 Content Script 一样建立通讯

```js
var port = chrome.runtime.connect(chrome_id, { name: 'abc' });
port.postMessage({
  method: 'rpc_data',
  data: parameter
});
port.onMessage.addListener(function(response) {
  SetMessage(response[0], response[1]);
});
```

关键是 Background 监听消息的接收,必须使用 `chrome.runtime.onConnectExternal.addListener`
而不是 `chrome.runtime.onConnect.addListener`
后者是接收 Content Script 消息的,前者是 接收 Web Page 消息的.
这样便实现了 Web Page 和 Background 之间的双向通讯, Web Page 不能完成的事情交给 Background 来处理即可.

## 参考

[官方文档](https://developer.chrome.com/extensions/messaging#external-webpage)
