(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{360:function(t,s,a){"use strict";a.r(s);var n=a(8),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("前端开发分析代码的途径最简单不过了，第一个途径是查看网页源代码，第二个途径是打开开发者工具审查元素。")]),t._v(" "),a("h2",{attrs:{id:"防止查看源代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防止查看源代码"}},[t._v("#")]),t._v(" 防止查看源代码")]),t._v(" "),a("p",[t._v("现在网站的基本对策是禁用用户右键选项菜单来避免查看源代码。首先，源代码肯定是能查看到的。采取的措施也只不过是掩耳盗铃而已。解决对策也有很多，我随便说几个。")]),t._v(" "),a("p",[t._v("第一，针对 Chrome 浏览器，我们可以直接在地址栏里输入 "),a("code",[t._v("view-source:https://www.google.com/")]),t._v(" 这种方式来查看源代码。第二，我们可以使用其他工具，例如"),a("code",[t._v("curl")]),t._v(", "),a("code",[t._v("wget")]),t._v("来直接下载源代码。")]),t._v(" "),a("p",[t._v("这种是很初级的防范对策。")]),t._v(" "),a("h2",{attrs:{id:"防止审查元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防止审查元素"}},[t._v("#")]),t._v(" 防止审查元素")]),t._v(" "),a("p",[t._v("现代化的前端开发，都是基于 JS 来渲染页面元素的，有时候我们查看源代码也只是看到了 JS 文件的引用。没有太大意义，所以需要浏览器渲染之后查看真正的 DOM 元素才有意义。这时候如何禁止审查元素就是另外一种对策了。\n现在用来检测打开开发者工具主要是通过判断"),a("code",[t._v("console.log")]),t._v("的执行，因为不打开开发者工具的话"),a("code",[t._v("console.log")]),t._v("是不会执行的。所以有些网站就可以利用这个来阻止用户打开开发者工具审查元素和 Debug 代码。\n下面给出一个例子来：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" el "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://www.bimibimi.tv"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("这是一个非常巧妙的例子，当执行"),a("code",[t._v("console.log")]),t._v("输出 Image 元素的时候，比如会访问 id 属性，从而触发后面的重定向 URL 代码。所以表现就是用户试图打开开发者面板就会被自动定位到首页。")]),t._v(" "),a("p",[t._v("要破解这个的话，只能在页面执行之前注入代码修改 Image 函数的使用：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Image")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Image'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" writable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("通过注入上面的代码，来规避自动跳转到首页。如何注入呢？ 就需要利用 Chrome 的扩展功能，详细代码请参照"),a("a",{attrs:{href:"https://github.com/acgotaku/bimibimi-hack",target:"_blank",rel:"noopener noreferrer"}},[t._v("bimibimi-hack"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("前端代码逆向和反逆向，永远没有银弹。只能说是提高逆向的门槛，但想完全防止是不可能的。如果自己编译一个浏览器，修改浏览器的默认行为的话，就没有不能调试的网站。")]),t._v(" "),a("h2",{attrs:{id:"引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引用"}},[t._v("#")]),t._v(" 引用")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://stackoverflow.com/questions/7798748/find-out-whether-chrome-console-is-open",target:"_blank",rel:"noopener noreferrer"}},[t._v("Find out whether Chrome console is open"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"view-source:http//www.bimibimi.tv/bangumi/640/play/1/1/"}},[t._v("Source code of bimibimi.tv")])],1)])}),[],!1,null,null,null);s.default=e.exports}}]);