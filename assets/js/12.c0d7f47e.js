(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{340:function(t,a,e){"use strict";e.r(a);var r=e(8),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("2016 年已经过了 3 个月了,还没来得及更新博客...实在是惭愧惭愧...最近确实也很忙,一边要打工,一边要写论文,一边还要找工作...")]),t._v(" "),e("p",[t._v("最近百度的导出插件出了点小问题,导致很多人无法正常和 Aria2c 通讯.经过仔细的分析,发现问题出在跨域请求上,接下来就要详细说说 JavaScript 的跨域请求.")]),t._v(" "),e("h2",{attrs:{id:"javascript-跨域请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#javascript-跨域请求"}},[t._v("#")]),t._v(" JavaScript 跨域请求")]),t._v(" "),e("p",[t._v("跨域请求指得是发起请求的资源所在域不同于该请求所指向资源所在的域的 HTTP 请求.最常见的就是跨域载入图片,我们可以看到很多网站主站和网站所使用的图片\n是不同的域名的.这样做的好处是请求图片的时候不会发送主站的 Cookies,因为不同域名嘛.而且还可以减少主站的服务器压力.但载入图片使用的是 GET 方法,比较简单.")]),t._v(" "),e("h2",{attrs:{id:"跨域-post-请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#跨域-post-请求"}},[t._v("#")]),t._v(" 跨域 POST 请求")]),t._v(" "),e("p",[t._v("我们经常使用 POST 请求发送各种指令数据,因为 POST 发送的数据没有长度限制.我们还可以在发送数据之前修改请求头,发送各种自定义的 HTTP Request Headers.但是\n在跨域请求的时候 POST 的请求头被严格限制,被允许设置的请求头只有:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("- Accept\n- Accept-Language\n- Content-Language\n- Content-Type\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[t._v("并且允许的 Content-Type 只有一下三种:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("- application/x-www-form-urlencoded\n- multipart/form-data\n- text/plain\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("h2",{attrs:{id:"preflighted-requests"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preflighted-requests"}},[t._v("#")]),t._v(" Preflighted requests")]),t._v(" "),e("p",[t._v("当我们发送的请求不满足上面的条件时,就必须发送预请求给目的站点,来查明这个跨站请求对于目的站点是不是安全可接受的。以下条件会触发预请求的发送:")]),t._v(" "),e("ul",[e("li",[t._v("请求以 GET, HEAD 或者 POST 以外的方法发起请求。或者使用 POST，但请求数据为 application/x-www-form-urlencoded, multipart/form-data 或者 text/plain 以外的数据类型。比如说，用 POST 发送数据类型为 application/xml 或者 text/xml 的 XML 数据的请求。")]),t._v(" "),e("li",[t._v("使用自定义请求头（例如 Aria2c 的验证使用的 Authorization）")])]),t._v(" "),e("h2",{attrs:{id:"结论"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[t._v("#")]),t._v(" 结论")]),t._v(" "),e("p",[t._v("本次 BUG 的出现,是由于代码验证不规范,对于不需要用户名和密码验证的 RPC 地址.仍然发送自定义的 Authorization 验证头.导致触发 OPTIONS 请求,但是本身不支持验证的 Aria2c 客户端无法识别 OPTIONS 请求,只能返回 500 错误.导致通讯失败,至此 BUG 分析完毕.")]),t._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考:")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP access control (CORS)"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP/1.1: Method Definitions"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=s.exports}}]);