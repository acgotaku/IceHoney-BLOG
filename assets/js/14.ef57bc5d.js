(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{422:function(t,v,e){"use strict";e.r(v);var _=e(10),o=Object(_.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("今天在做一个地图的 web 应用,这是个大坑...首先开始设计首页,于是开始山寨谷歌地图了 =.=\n设计出来基本的 div 框架之后,想做到地图界面宽度和高度自动适应浏览器.之前做网站的需求都是固定宽度和高度的.于是我变开始折腾了.")]),t._v(" "),e("h2",{attrs:{id:"自适应宽度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自适应宽度"}},[t._v("#")]),t._v(" 自适应宽度")]),t._v(" "),e("p",[t._v("自适应宽度的难处在于网页里有超过两个并列的 div,如果两列都是变宽的话就直接按比例设置就好了,关键在于 1 列需要固定宽度另外一列需要自适应.我遇到的就是后者,具体情况是第一列需\n要固定宽度 "),e("code",[t._v("350px")]),t._v(",第二列的宽度是 "),e("code",[t._v("100%-350px")]),t._v(",最简单的方法是设置第二列的宽度是 "),e("code",[t._v("width: -webkit-calc(100% - 350px);")]),t._v(".\n但是这个方法的适用性不太好,由于我用的 Archlinux,也不好测试 IE 是否支持,估计是不可能支持的吧.\n另外一个方法是设置第一个 div 的属性为 float:left;这样第一列的 div 就脱离整个文档流,第二个 div 直接设置 "),e("code",[t._v("margin-left: 350px;")]),t._v(" 即可.")]),t._v(" "),e("h2",{attrs:{id:"自适应高度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自适应高度"}},[t._v("#")]),t._v(" 自适应高度")]),t._v(" "),e("p",[t._v("自适应高度遇到的问题也是上面有一个固定高度为 "),e("code",[t._v("142px")]),t._v(" 的 div,下面的 div 的高度为 "),e("code",[t._v("100%-142px")]),t._v(".\n同样可以设置高度为 "),e("code",[t._v("height: -webkit-calc(100% - 142px);")]),t._v(". 另外一种方法是把 div 设置成 "),e("code",[t._v("position: absolute;")]),t._v("\n脱离文档流,然后设置 "),e("code",[t._v("top:142px; bottom:0px;")]),t._v(" 即可.")])])}),[],!1,null,null,null);v.default=o.exports}}]);