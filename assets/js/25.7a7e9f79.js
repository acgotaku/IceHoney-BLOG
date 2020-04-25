(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{335:function(r,t,e){"use strict";e.r(t);var a=e(8),n=Object(a.a)({},(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("p",[r._v("贝塞尔曲线是工业上经常用的一种曲线，经常用用来汽车的外观设计。贝塞尔曲线根据控制点的不同可以分为：")]),r._v(" "),e("ol",[e("li",[r._v("一阶贝塞尔曲线（2 个控制点）")]),r._v(" "),e("li",[r._v("二阶贝塞尔曲线（3 个控制点）")]),r._v(" "),e("li",[r._v("三阶贝塞尔曲线（4 个控制点）")]),r._v(" "),e("li",[r._v("n 阶贝塞尔曲线（n+1 个控制点）")])]),r._v(" "),e("h2",{attrs:{id:"二阶贝塞尔曲线"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二阶贝塞尔曲线"}},[r._v("#")]),r._v(" 二阶贝塞尔曲线")]),r._v(" "),e("p",[r._v("这次讲述的是二阶贝塞尔曲线的长度计算。首先计算曲线的长度之前，我们需要知道曲线的数学方程表达式，由于目前博客还未支持数学表达式的显示，所以我只能帖出"),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/B%C3%A9zier_curve",target:"_blank",rel:"noopener noreferrer"}},[r._v("wiki 链接"),e("OutboundLink")],1),r._v("。求曲线的长度，本质上是很难计算出精确值的，但只要近似值的误差绝对小，在实际使用中也是足够的。求曲线的长度本质上是进行定积分的计算。")]),r._v(" "),e("h2",{attrs:{id:"高斯求积"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#高斯求积"}},[r._v("#")]),r._v(" 高斯求积")]),r._v(" "),e("p",[r._v("在定积分的数值计算中，"),e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E9%AB%98%E6%96%AF%E6%B1%82%E7%A7%AF",target:"_blank",rel:"noopener noreferrer"}},[r._v("高斯求积"),e("OutboundLink")],1),r._v("可以说是一个精度非常高的公式。")]),r._v(" "),e("p",[r._v("我们只需要把二阶贝塞尔曲线代入高斯求积公式中便可以计算出结果，求积公式的节点个数 n 越大，精度就越高。")]),r._v(" "),e("p",[r._v("不过高斯求积公式中节点个数对应的位置和权重表的计算，我还是没弄明白。")]),r._v(" "),e("h2",{attrs:{id:"代码实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[r._v("#")]),r._v(" 代码实现")]),r._v(" "),e("p",[r._v("已经有人给出了代码实现，所以大家可以直接去 Github 上查看"),e("a",{attrs:{href:"https://github.com/Pomax/bezierjs/blob/master/lib/utils.js#L252",target:"_blank",rel:"noopener noreferrer"}},[r._v("bezier.js"),e("OutboundLink")],1),r._v("。")]),r._v(" "),e("p",[r._v("并且有详细的解释："),e("a",{attrs:{href:"https://pomax.github.io/bezierinfo/#arclengthapprox",target:"_blank",rel:"noopener noreferrer"}},[r._v("Arc length"),e("OutboundLink")],1)]),r._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[r._v("#")]),r._v(" 总结")]),r._v(" "),e("p",[r._v("曲线的计算都可以归纳成对定积分的计算，只要知道曲线的数学方程式，就可以使用定积分的数值计算来计算出结果。")]),r._v(" "),e("h2",{attrs:{id:"引用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#引用"}},[r._v("#")]),r._v(" 引用")]),r._v(" "),e("p",[e("a",{attrs:{href:"https://pomax.github.io/bezierinfo/",target:"_blank",rel:"noopener noreferrer"}},[r._v("A Primer on Bézier Curves"),e("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);