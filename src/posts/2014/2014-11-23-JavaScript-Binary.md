---
layout: post
title: JavaScript处理二进制数据
date: 2014-11-23 14:30
comments: true
archives: 2014
tags:
  - js
---

最近在开发扩展的时候遇到需要获取 MP3 数据并且直接交给其它接口处理的问题,但是使用 JQuery 的 AJAX 进行
获取数据的时候已经把数据进行了编码,毕竟默认都是处理文本数据.  
但是我需要的是二进制数据并且进行 Base64 编码方便进行传输,因为 Base64 编码的值全是可打印字符.
Base64 常用于在通常处理文本数据的场合,表示、传输、存储一些二进制数据.

## 二进制数据转换成 Base64 编码

于是便找到了一个非常有用的 MDN 的文档[Sending and Receiving Binary Data](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data)  
不过稍作修改:

```js
var oReq = new XMLHttpRequest();
oReq.open('GET', request.data, true);
oReq.responseType = 'blob';
oReq.onload = function(oEvent) {
  var blob = oReq.response;
  var reader = new FileReader();
  reader.onload = function(readerEvt) {
    var binaryString = readerEvt.target.result;
    // console.log(binaryString);
    var testdata = btoa(binaryString);
    var data = {
      method: 'getAudio',
      data: 'data:audio/mp3;base64,' + btoa(binaryString)
    };
    port.postMessage(data);
  };
  reader.readAsBinaryString(blob);
};

oReq.send(null);
```

设置 responseType 为[Blob](https://developer.mozilla.org/en/docs/Web/API/Blob)
然后使用 FileReader 作为二进制数据读取,再使用 btoa 转码成 Base64 进行传输.

还有一种是读取需要上传的文件进行处理的方式和通过 AJAX 获取的方式差不多,代码在[这里](http://jsfiddle.net/eliseosoto/JHQnk/).使用 Base64 编码的好处是在需要二进制数据的地方,例如图片和音频,我们可以使用 Base64 编码进行替换获取这些资源的 URL
可以减少 HTTP 请求,也可以做转发,我之所以有这个处理二进制数据的需求就是因为开发的一个插件无法在 HTTPS 页面上获取 HTTP 资源,
便通过 background js 进行获取数据然后 Base64 编码传输给 content js 进行使用.

## Base64 数据转换为 ArrayBuffer

有时候需要把传入的二进制数据转换成 ArrayBuffer 进行处理就需要转换了

```js
var data = atob(base64String);
var dataView = new Uint8Array(data.length);
for (var i = 0; i < data.length; ++i) {
  dataView[i] = data.charCodeAt(i);
}
var arrayBuffer = dataView.buffer;
```

今天暂时就写这么多吧,期末考试看书好累,头脑都不太清醒了. QAQ
