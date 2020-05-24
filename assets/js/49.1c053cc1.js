(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{434:function(t,r,e){"use strict";e.r(r);var n=e(9),a=Object(n.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("最近刚来日本忙着生活上的事情,对技术上的研究也有点松懈了.在日本的研究课题是计算机图形学.所以就选修了相关的课程,\n最基本的当然是图形处理,老师的第一个任务就是实现 Histogram equalization 算法.中文名字就是直方图均衡化.")]),t._v(" "),e("h2",{attrs:{id:"概念介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概念介绍"}},[t._v("#")]),t._v(" 概念介绍")]),t._v(" "),e("p",[t._v("这里首先讨论的是灰阶的图像,也就是平常大家所有的黑白照片.然后每个颜色都有具体的数值.纯黑色是 0,纯白色是 255. 当然这是对于 8 Bit 的图来说的.\n色差的范围只有 0-255.就拿这个作为例子来讲解吧~ 然后就要讲解如何从数值上来分析一张图片是拍的好呢还是不好呢,如果是一张好照片,那这张照片必然是\n对比度鲜明,该亮的地方亮,该暗的地方暗.也就是大家所说的曝光合适.然后我们从照片的二进制数据中去读取每个像素的数值,然后画出直方图.发现每个数值的\n像素分布比较均匀,就说明这是一张好照片.但是现实生活中,我们可能会拍到一些曝光不足导致整体照片很暗或者曝光过了导致照片过亮的情况.在不能重拍的情况\n下只能使用算法来进行优化了,本文就是来说明这个算法的实现的.")]),t._v(" "),e("h2",{attrs:{id:"算法大致概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#算法大致概念"}},[t._v("#")]),t._v(" 算法大致概念")]),t._v(" "),e("p",[t._v("算法的本质就是提取每个像素的数值,然后经过计算把每个像素进行替换.每个像素都有经过计算之后的新的数值.新的数值可以使照片整体上的数值分布更均匀.\n给人的整体感觉是照片对比度变得很好了.具体的算法解释看 wiki 我解释的比较烂.\n"),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Histogram_equalization",target:"_blank",rel:"noopener noreferrer"}},[t._v("Histogram_equalization"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"算法实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#算法实现"}},[t._v("#")]),t._v(" 算法实现")]),t._v(" "),e("p",[t._v("根据 wiki 的例子,我用 Py 实现了这个算法,效果还算不错吧.尽可能的少引用类库,不过 opencv 已经有现成实现好的 API 了.但是只支持 Py2,而我用的 Py3.\n库的引用只使用了"),e("a",{attrs:{href:"http://www.pythonware.com/products/pil/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PIL"),e("OutboundLink")],1),t._v(" 和 "),e("a",{attrs:{href:"http://www.numpy.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("numpy"),e("OutboundLink")],1),t._v(".前者用来读取图像的二进制数据,\n后来用来进行数值的累加计算.源码发布在 "),e("a",{attrs:{href:"https://gist.github.com/acgotaku/9c3b060d6e1de8751581",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("计算机图形学对我来说完全是未知的领域,希望有经验的同学可以不吝指正.")])])}),[],!1,null,null,null);r.default=a.exports}}]);