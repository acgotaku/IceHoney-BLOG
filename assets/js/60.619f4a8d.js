(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{398:function(a,n,e){"use strict";e.r(n);var r=e(10),t=Object(r.a)({},(function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("Golang 语言是谷歌开发的编程语言，虽然运行效率比不上 C 语言那么高效，但是也算比 C 语言更容易开发，因为内置了很多数据结构和借鉴了其它语言的优点，容易学习和开发。在实习的阶段也使用 Go 语言开发了一个简单的项目。所以想把学习的一些经验记录下来。")]),a._v(" "),e("h2",{attrs:{id:"golang-的安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#golang-的安装"}},[a._v("#")]),a._v(" Golang 的安装")]),a._v(" "),e("p",[a._v("我推荐使用 Linux 系统来学习和使用 Golang 语言，各种发行版的包管理器应该默认都会有 Golang 的安装包。不过还是要说下如何手动安装，去官网下载 Golang 的安装包，至少要 1.7 版本以上。\n然后解压缩和配置环境变量，过程很简单。")]),a._v(" "),e("h2",{attrs:{id:"golang-入门"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#golang-入门"}},[a._v("#")]),a._v(" Golang 入门")]),a._v(" "),e("p",[a._v("首先，请大家阅读官方的这篇文档"),e("a",{attrs:{href:"https://golang.org/doc/code.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("How to Write Go Code"),e("OutboundLink")],1),a._v("。这篇文章介绍了如何写一个基本的 Golang 程序和类，这里要说的是"),e("code",[a._v("GOPATH")]),a._v("，使用 Golang 语言必须要设置"),e("code",[a._v("GOPATH")]),a._v("环境变量，可以通过使用"),e("code",[a._v("go env")]),a._v("来查询 Golang 相关的环境变量。"),e("code",[a._v("GOPATH")]),a._v("下一般有三个文件夹 bin,src,pkg。src 下存放我们写的 Golang 项目，bin 下是编译好的二进制文件，pkg 文件夹下是生成的库文件。我们安装的第三方库也会存放在 src 文件夹下，记住 Golang 引用的包名的根文件夹是"),e("code",[a._v("GOPATH")]),a._v("的 src 文件夹，所以我们一般都要使用绝对路径来引用包避免出现错误。")]),a._v(" "),e("p",[a._v("还有要注意的一点是，需要编译的 Golang 项目必须放在"),e("code",[a._v("GOPATH")]),a._v("下的 src 文件夹下，否则编译的时候无法正确的找到相关的依赖包。Golang 还有一个好处就是可以直接以二进制文件的方式运行，只依赖系统的 glibc。所以部署的时候特别方便，不像其他语言一样必须安装相应的解释器。")]),a._v(" "),e("h2",{attrs:{id:"golang-依赖问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#golang-依赖问题"}},[a._v("#")]),a._v(" Golang 依赖问题")]),a._v(" "),e("p",[a._v("开发程序肯定会使用各种第三方依赖，目前 Golang 语言的各种库都是存放在 github 上，国内下载很不方便，所以要让每个开发者都去下载一份依赖确实很不友好。还好 Golang 在 1.7 版本以上直接 vendor。如果项目里有 vendor 文件夹，Golang 会首先读取这个文件夹作为依赖来使用。使用 Golang vendor 的方法很简单：")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("go get -u -v github.com/kardianos/govendor\ngovendor init\ngovendor "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" +external\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("p",[a._v("这三个步骤分别是安装，初始化，和添加依赖。这样就在项目本身里面添加了依赖，协同开发的时候大家也没必要再去更新一份，非常方便。")]),a._v(" "),e("h2",{attrs:{id:"golang-性能分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#golang-性能分析"}},[a._v("#")]),a._v(" Golang 性能分析")]),a._v(" "),e("p",[a._v("在开发高性能多并发程序的时候，对系统的实时响应要求很苛刻，这就需要使用专业的分析工具来进行代码分析，确定出耗时代码进行相应的优化。好在 Golang 本身提供了这个工具"),e("code",[a._v("pprof")]),a._v("，这个工具可以列出具体每个函数的耗时，还能进一步跟踪函数里面的具体细节，定位耗时代码。")]),a._v(" "),e("h2",{attrs:{id:"golang-序列化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#golang-序列化"}},[a._v("#")]),a._v(" Golang 序列化")]),a._v(" "),e("p",[a._v("在开发程序的过程中，为了操作方便，我们会定义各种各样的结构体来表示数据。很多情况下，结构体需要进行网络通讯，这时候我们就不得不序列化结构体进行网络发送。就像前端开发中把 JSON 对象转换成字符串发送出去一样。但是序列化却是一个很耗时的过程，处理不当就会成为系统的瓶颈所在。所以我列举出了几种序列化方案，推荐大家使用。我最后选择的是"),e("code",[a._v("gencode")]),a._v("。")]),a._v(" "),e("h2",{attrs:{id:"好用的-golang-项目推荐"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#好用的-golang-项目推荐"}},[a._v("#")]),a._v(" 好用的 Golang 项目推荐")]),a._v(" "),e("p",[a._v("Github 有很多不错的 Golang 项目可以学习借鉴，例如"),e("a",{attrs:{href:"https://gogs.io/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Go Git Service"),e("OutboundLink")],1),a._v("，就是一个非常好用的代码托管项目。")]),a._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://golang.org/pkg/net/http/pprof/",target:"_blank",rel:"noopener noreferrer"}},[a._v("pprof"),e("OutboundLink")],1)]),a._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/smallnest/gosercomp",target:"_blank",rel:"noopener noreferrer"}},[a._v("Golang Serializer Benchmark Comparison"),e("OutboundLink")],1)]),a._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/avelino/awesome-go",target:"_blank",rel:"noopener noreferrer"}},[a._v("awesome-go"),e("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=t.exports}}]);