(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{376:function(t,e,n){"use strict";n.r(e);var r=n(9),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("安师大的校园视频网是个资源不错但软件坑爹的东西.\n"),n("img",{attrs:{src:"https://lh3.googleusercontent.com/-8m9hCWpOjEk/UULOiWI1sfI/AAAAAAAARRM/6TX2hxCIyoc/s880/2013-03-15-153121_958x562_scrot.png",alt:""}}),t._v("\n当然这个服务不是安师大自己研发的,是由沈阳光音网视科技有限公司开发的,应该是学校出钱购买的吧.不过那个坑爹的客户端只给在线观看不给下载,\n网页也是完美的兼容 IE6,Javascript 里面也调用了好多微软自己的 ActiveX 控件,所以只能用学校提供的自带的那个客户端浏览和观看视频.")]),t._v(" "),n("p",[t._v("对于这种反人类的做法我当然是很不爽了,客户端的网址栏虽然是不变的,不过是通过重定向的方式访问学校的服务器了吧,通过修改 hosts 我也可以直接在\nIE 浏览器中查看,然后查看源代码进行了分析工作.原理其实很简单,就是通过解析服务器上的 XML 文件进行网页的渲染,XML 文件里面记录了服务器上所有的\n视频资源和视频的 ID,然后通过一步步的研究直接找到了资源的下载地址.详细的原理请看我 github 上公开的"),n("a",{attrs:{href:"https://github.com/acgotaku/VideoSearch",target:"_blank",rel:"noopener noreferrer"}},[t._v("VideoSeach"),n("OutboundLink")],1),t._v("\n里面的 Function.cs 记录了具体解析过程.")]),t._v(" "),n("p",[t._v("通过研究知道了原理便和同学商量这开发个下载器方便大家使用,Win 版本是由同学基于.Net Framework 2.0 开发的,由于我的特殊需求变移植了\nweb 版本,1.0 版本是在上学期开发并发布的.现在软件使用的用户大概有一万人左右,因为很多学校也用的这个视频服务提供商,我们变提供了配置按钮可以满足\n各个学校的需求.不过寒假回来发现下载器不能再下载视频了,我便抽出一晚上时间研究了原因,发现是学校的服务器屏蔽了下载器的功能.手法也很简单使用\nUser-Agent: Novasoft NetPlayer/4.0 进行屏蔽非官方客户端,知道原因事情就很简单了,伪造 UA 嘛,之前下载器是调用迅雷下载的,现在在里面内置了下载功能.")]),t._v(" "),n("p",[t._v("软件官网: "),n("a",{attrs:{href:"http://www.icehoney.me",target:"_blank",rel:"noopener noreferrer"}},[t._v("www.icehoney.me"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("百度云盘下载:"),n("a",{attrs:{href:"http://pan.baidu.com/share/link?shareid=457833&uk=3021310168",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("软件截图:\n"),n("img",{attrs:{src:"https://lh6.googleusercontent.com/-QVAKv93NcMw/UUGvJAWkPVI/AAAAAAAAROo/y7ewKu1pdFE/s679/1.png",alt:"安师大校园视频下载器"}})])])}),[],!1,null,null,null);e.default=o.exports}}]);