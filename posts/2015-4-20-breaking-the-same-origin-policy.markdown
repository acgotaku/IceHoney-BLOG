---
layout: post
title: "突破同源策略限制的方法"
date: 2015-4-20 19:54
comments: true
tags: javascript
---

# 同源策略基本介绍

同源策略（Same Origin Policy）是一种约定，它是浏览器最核心也是最基本的安全功能，如果缺少了同源策略，则浏览器的正常功能可能会受到影响。可以说Web是构建在同源策略的基础之上的，浏览器只是针对同源策略的一种实现。

**浏览器的同源策略，限制了来自不同源的“document”或脚本，对当前“document”读取或设置某些属性。**

但是随着互联网的发展跨域的需求也越来越迫切，有些时候我们需要突破同源策略。下面开始介绍突破同源策略的几种方法：

#使用HTTP头

因为JavaScript无法控制返回的HTTP头，所以可以在服务器端这个HTTP Header即可：

		self.set_header("Access-Control-Allow-Origin", "*")

#使用JSONP

Jsonp(JSON with Padding)是 json 的一种“使用模式”，可以让网页从别的网域获取资料。jsonp是采用的js的回调机制来实现的。
本质上是因为GET方法不受同源策略限制，然后获取到的数据不是json，而是一段JavaScript并解释执行。

#使用iframe

上面两种都是比较常见和常用的突破浏览器的方法，这种不常见的才是重点。虽然使用iframe算不上优雅，但也算开了眼界。在开发115网盘的时候，发现115
的主站网页和获取数据的网址是不同源的，也顺便研究了一下工作原理。  
主站是：http://115.com/?mode=wangpan，  
但是获取数据的API是：http://web.api.115.com/files/download?pickcode=？  
这就造成了非同源，但是115巧妙的使用了一个桥接网页完成了跨域操作！  
桥接网址：http://web.api.115.com/bridge_2.0.html?namespace=DownBridge&api=jQuery  
关键代码：

		if(parent){
		    var execObj = parent.window;
		    if(params["namespace"]){
		        var tmp = params["namespace"].split("."),f;
		        while(f = tmp.shift()){
		            execObj = execObj[f];
		        }
		    }
		    var method = params["api"]? params["api"] : "DataAPI";
		    execObj[method] = $;
		}

可以看到，桥接是首先判断父Window是否存在，获取namespace的值设置为 execObj 最后再获取api的值然后设置为 execObj的一个方法，不过这个方法对应的值肯定是 $,也就是整个JQuery，这样我们就可以使用页面 web.api.115.com 的JQuery发起数据请求从而绕过跨越的限制。

下面是115.com 上面注入的JS实现方法：

		set_down_url:function(){
		    var self=this;
		    DownBridge={};
		      $('<iframe>').attr('src', 'http://web.api.115.com/bridge_2.0.html?namespace=DownBridge&api=jQuery').css({
		        width: 0,
		        height: 0,
		        border: 0,
		        padding: 0,
		        margin: 0,
		        position: 'absolute',
		        top: '-99999px'
		      }).one('load',function(){
		        window.DownBridge.getFileUrl=function(pickcode,callback){
		        this.jQuery.get('http://web.api.115.com/files/download?pickcode=' + pickcode, function (data) {
		                 callback(data);
		                }, 'json');                        
		        };
		        window.DownBridge.getFileList=function(cate_id,callback){
		        this.jQuery.get('http://web.api.115.com/files?aid=1&limit=1000&show_dir=1&cid=' + cate_id, function (data) {
		                 callback(data);
		                }, 'json');                        
		        };
		      }).appendTo('html');
		}

115网站的这种实现方法很另类，不知道是否是有什么特殊需求导致的，但是很有意思～
不过我还是不建议在网页里嵌入这么多的iframe，严重影响用户体验，非常不推荐！