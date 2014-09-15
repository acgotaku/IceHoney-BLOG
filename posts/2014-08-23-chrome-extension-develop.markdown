---
layout: post
title: "chrome扩展开发经验记录"
date: 2014-08-23 16:01
comments: true
tags: chrome
---

最近写了两个chrome扩展.看了不少chrome扩展开发的文档.觉得还是写点东西比较好.

#Background Pages
一个扩展肯定需要长时间运行的脚本对扩展进行管理.这个脚本就属于Background Pages的一部分.
不过由于Background Pages是一直运行的,对资源占用比较多.  
现在已经用Event Pages代替.Event Pages是按需加载,不需要的时候不会激活运行.  
Event Pages的JS可以使用chrome的所有API.  
[官方文档](https://developer.chrome.com/extensions/event_pages)

#Content Scripts
Content Scripts是运行在网页上的.manifest上进行网址匹配.当是目标网址的时候就加载这个JS.
Content Scripts可以获取到匹配网址的DOM,并进行修改.Content Scripts也可以使用chrome的
API,但是只能使用比较有限的API.  
[官方文档](https://developer.chrome.com/extensions/content_scripts)

#Message Passing
这个是chrome的通讯机制,是非常重要的一个知识点.开发扩展的content scripts几乎都是需要和
background pages进行通讯的.因为content scripts可以直接操作DOM,background pages可以
使用所有的chromeAPI.所以这俩JS肯定要互通有无.接下来重点讲解chrome的通讯机制.  
[官方文档](https://developer.chrome.com/extensions/messaging)

##Simple one-time requests
官方文档有例子.但是我要说的是这个Simple requests真的太Simple
content js使用sendMessage,就立即回调获取response.
如果background page稍微进行处理下占用点时间就会导致response的函数根本无法执行的情况.
推测可能是没接收到数据就直接pass了.所以稍微复杂点需要处理数据的通讯操作千万不能用这个.

##Long-lived connections
这个通讯方式也是我比较推荐的通讯方式,生命周期长.并且通讯效果好,可以多次通讯一次监听.
官网给出的content js例子虽然是先postMessage之后再addListener.但是强烈推荐先
监听之后再发送数据.因为当你发送数据之后,background可能会立马给你返回数据.这时候可能会造成
没有监听到的情况... 之后的通讯方式我还没用到就不说了.

#网页JS和 content js通讯
网页JS也有自己的局限性,例如无法获取到 http only的cookies.这时候可以通过content js的帮助.
content js获取到数据之后怎么发给网页JS呢?
content js使用window.postMessage进行发送数据:

		window.postMessage(msg, "*");

网页JS通过监听事件进行捕捉数据:

	    window.addEventListener("message", receiveMessage, false);

			function receiveMessage(event)
			{
				if (event.origin == window.location.origin){
					console.log(event.data);
				}
			}

注意content js和网页JS不共享变量,所以不能通过全局变量的方式进行通讯.不过可以通过DOM进行通讯.

#content js使用网页JS的变量.
如果网页本身加载了很多组件例如JQuery,自己想使用但是因为不共享变量导致无法使用.可以使用append的
方式把自己content js里面写的函数直接注入到网页的DOM中,因为DOM是共享的.这样content js写的函数
就变成网页的JS进行运行了~

#content js注入

		var script = document.createElement('script');
		script.id = "baidu_script";
		script.appendChild(document.createTextNode('(' + baidu + ')();'));
		(document.body || document.head || document.documentElement).appendChild(script);

这里注入的是一个立即执行函数,append到DOM上的时候就会立即执行,并且可以使用网页JS的变量.

#css 注入
有时候修改DOM的话肯定需要更改样式啊,这时候用内联样式必然太没效率,不能重用.就需要添加CSS.

		var css = function() {/*
		 input{
		 border: 1px solid #C6C6C6;
		 box-shadow: 0 0 3px #C6C6C6;
		 -webkit-box-shadow: 0 0 3px #C6C6C6;
		 }
		 */
		}.toString().slice(15, -4);
		var style = document.createElement('style');
		style.setAttribute('type', 'text/css');
		style.textContent = css;
		document.head.appendChild(style);

首先定义一个匿名函数赋值给css变量,然后里面写了css内容,由于是注释掉的,其实并不会被JS执行,最后
转换成字符串的时候是能读到CSS文本的,slice是去掉前后的注释符.