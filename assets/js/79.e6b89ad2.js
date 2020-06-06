(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{382:function(t,s,a){"use strict";a.r(s);var n=a(9),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("实际项目开发中遇到了一些已经使用 C++实现的功能，需要在新的 Web 客户端使用。由于主要是数学和算法的计算，没有平台依赖性。所以需要一个成本最低的移植方式，显然 WebAssembly 是一个非常好的方式。现在官方的编译工具是"),a("a",{attrs:{href:"https://github.com/emscripten-core/emscripten",target:"_blank",rel:"noopener noreferrer"}},[t._v("emscripten"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"移植方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移植方式"}},[t._v("#")]),t._v(" 移植方式")]),t._v(" "),a("p",[t._v("从 C++编译到 JS。官方提供了两种编译方式"),a("a",{attrs:{href:"https://emscripten.org/docs/porting/connecting_cpp_and_javascript/embind.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("embind"),a("OutboundLink")],1),t._v("和"),a("a",{attrs:{href:"https://emscripten.org/docs/porting/connecting_cpp_and_javascript/WebIDL-Binder.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebIDL Binder"),a("OutboundLink")],1),t._v("。这两种方式，一开始我也很困惑。不过现在也是有所了解了。向大家介绍一下如何选择。如果你的 C++项目中有很多高级数据结构要使用，例如 vector，map。那推荐使用 embind，如果你的项目主要是简单数据类型，例如数字，字符串，bool，都可以简单的映射到 JS，并且是用 class 封装的，那推荐使用 WebIDL Binder。")]),t._v(" "),a("h2",{attrs:{id:"封装处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#封装处理"}},[t._v("#")]),t._v(" 封装处理")]),t._v(" "),a("p",[t._v("由于 C++数据结构比 JS 复杂的多，很多时候没有直接暴露成 JS 函数。我们需要进行封装，例如 C++中的引用调用，可以改变传入的参数的值。但是编译成 JS 的话，就不会生效。所以这时候我们需要写 wrap 函数，封装这些引用调用的 C++函数，然后再单独写 get 函数，得到修改的值。")]),t._v(" "),a("h2",{attrs:{id:"webpack-打包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-打包"}},[t._v("#")]),t._v(" webpack 打包")]),t._v(" "),a("p",[t._v("官方的 demo 是使用 src 的方式来引入，并且暴露成 Module 的全局变量。但是现代化的 Web 项目都是使用 webpack 打包，并且自动化引入的。所以我们也不想为了 WebAssembly 搞特殊。接下来就讲述如何配置来引入。首先，使用 emscripten 输出 "),a("code",[t._v("mjs")]),t._v(" 文件，这样才可以作为模块被导入。具体的编译参数可以参照"),a("a",{attrs:{href:"https://emscripten.org/docs/tools_reference/emcc.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("emcc"),a("OutboundLink")],1),t._v("。\n首先，wasm 格式并不能被 webpack 正确识别，我们需要添加 loader")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.wasm$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'javascript/auto'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("然后在项目中，分别 import mjs 文件和 wasm 文件。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" lib "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./wasm.mjs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" libWasm "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./wasm.wasm'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" module "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lib")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("locateFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("endsWith")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.wasm'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" libWasm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("然后在调用的时候替换掉默认的"),a("code",[t._v("locateFile")]),t._v("函数，即可完美导入到我们的项目中。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("编译 C++到 JS，不仅需要 JS 的知识，还需要 C++知识，我们需要先把所有需要的 C++文件，先全部编译到 LLVM bitcode（.o 文件）。这里编译 C++可以使用 GCC 的全部编译参数，推荐使用 O3 参数来优化代码。最后编译到 JS 文件的时候，需要按照 emscripten 的规范来书写胶水文件。")]),t._v(" "),a("p",[t._v("参考：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://gist.github.com/surma/b2705b6cca29357ebea1c9e6e15684cc",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-emscripten-wasm"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);