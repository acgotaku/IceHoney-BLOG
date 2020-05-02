(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{383:function(t,s,n){"use strict";n.r(s);var a=n(8),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("最近写了两个 chrome 扩展.看了不少 chrome 扩展开发的文档.觉得还是写点东西比较好.")]),t._v(" "),n("h2",{attrs:{id:"background-pages"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#background-pages"}},[t._v("#")]),t._v(" Background Pages")]),t._v(" "),n("p",[t._v("一个扩展肯定需要长时间运行的脚本对扩展进行管理.这个脚本就属于 Background Pages 的一部分.\n不过由于 Background Pages 是一直运行的,对资源占用比较多.现在已经用 Event Pages 代替.Event Pages 是按需加载,不需要的时候不会激活运行.\nEvent Pages 的 JS 可以使用 chrome 的所有 API.")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://developer.chrome.com/extensions/event_pages",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"content-scripts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#content-scripts"}},[t._v("#")]),t._v(" Content Scripts")]),t._v(" "),n("p",[t._v("Content Scripts 是运行在网页上的.manifest 上进行网址匹配.当是目标网址的时候就加载这个 JS.\nContent Scripts 可以获取到匹配网址的 DOM,并进行修改.Content Scripts 也可以使用 chrome 的 API,但是只能使用比较有限的 API.")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://developer.chrome.com/extensions/content_scripts",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"message-passing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#message-passing"}},[t._v("#")]),t._v(" Message Passing")]),t._v(" "),n("p",[t._v("这个是 chrome 的通讯机制,是非常重要的一个知识点.开发扩展的 content scripts 几乎都是需要和 background pages 进行通讯的.因为 content scripts 可以直接操作 DOM,background pages 可以使用所有的 chromeAPI.所以这俩 JS 肯定要互通有无.接下来重点讲解 chrome 的通讯机制.")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://developer.chrome.com/extensions/messaging",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),n("OutboundLink")],1)]),t._v(" "),n("h3",{attrs:{id:"simple-one-time-requests"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#simple-one-time-requests"}},[t._v("#")]),t._v(" Simple one-time requests")]),t._v(" "),n("p",[t._v("官方文档有例子.但是我要说的是这个 Simple requests 真的太 Simple\ncontent js 使用 sendMessage,就立即回调获取 response.\n如果 background page 稍微进行处理下占用点时间就会导致 response 的函数根本无法执行的情况.\n推测可能是没接收到数据就直接 pass 了.所以稍微复杂点需要处理数据的通讯操作千万不能用这个.")]),t._v(" "),n("h3",{attrs:{id:"long-lived-connections"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#long-lived-connections"}},[t._v("#")]),t._v(" Long-lived connections")]),t._v(" "),n("p",[t._v("这个通讯方式也是我比较推荐的通讯方式,生命周期长.并且通讯效果好,可以多次通讯一次监听.\n官网给出的 content js 例子虽然是先 postMessage 之后再 addListener.但是强烈推荐先\n监听之后再发送数据.因为当你发送数据之后,background 可能会立马给你返回数据.这时候可能会造成\n没有监听到的情况... 之后的通讯方式我还没用到就不说了.")]),t._v(" "),n("h2",{attrs:{id:"网页-js-和-content-js-通讯"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#网页-js-和-content-js-通讯"}},[t._v("#")]),t._v(" 网页 JS 和 content js 通讯")]),t._v(" "),n("p",[t._v("网页 JS 也有自己的局限性,例如无法获取到 http only 的 cookies.这时候可以通过 content js 的帮助.\ncontent js 获取到数据之后怎么发给网页 JS 呢?\ncontent js 使用 window.postMessage 进行发送数据:")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("postMessage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("网页 JS 通过监听事件进行捕捉数据:")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" receiveMessage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("receiveMessage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("origin "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("origin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])]),n("p",[t._v("注意 content js 和网页 JS 不共享变量,所以不能通过全局变量的方式进行通讯.不过可以通过 DOM 进行通讯.")]),t._v(" "),n("h2",{attrs:{id:"content-js-使用网页-js-的变量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#content-js-使用网页-js-的变量"}},[t._v("#")]),t._v(" content js 使用网页 JS 的变量.")]),t._v(" "),n("p",[t._v("如果网页本身加载了很多组件例如 JQuery,自己想使用但是因为不共享变量导致无法使用.可以使用 append 的\n方式把自己 content js 里面写的函数直接注入到网页的 DOM 中,因为 DOM 是共享的.这样 content js 写的函数\n就变成网页的 JS 进行运行了~")]),t._v(" "),n("h2",{attrs:{id:"content-js-注入"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#content-js-注入"}},[t._v("#")]),t._v(" content js 注入")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" script "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nscript"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'baidu_script'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nscript"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createTextNode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'('")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" baidu "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("')();'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  script\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("p",[t._v("这里注入的是一个立即执行函数,append 到 DOM 上的时候就会立即执行,并且可以使用网页 JS 的变量.")]),t._v(" "),n("h2",{attrs:{id:"css-注入"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css-注入"}},[t._v("#")]),t._v(" css 注入")]),t._v(" "),n("p",[t._v("有时候修改 DOM 的话肯定需要更改样式啊,这时候用内联样式必然太没效率,不能重用.就需要添加 CSS.")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("css")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n\tinput{\n\tborder: 1px solid #C6C6C6;\n\tbox-shadow: 0 0 3px #C6C6C6;\n\t-webkit-box-shadow: 0 0 3px #C6C6C6;\n\t}\n\t*/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" style "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'style'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstyle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'type'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/css'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstyle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textContent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" css"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")])]),n("p",[t._v("首先定义一个匿名函数赋值给 css 变量,然后里面写了 css 内容,由于是注释掉的,其实并不会被 JS 执行,最后\n转换成字符串的时候是能读到 CSS 文本的,slice 是去掉前后的注释符.")])])}),[],!1,null,null,null);s.default=e.exports}}]);