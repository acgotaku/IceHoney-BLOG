(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{341:function(s,a,n){"use strict";n.r(a);var t=n(8),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("最近前端的工作不是很多，所以就帮忙写写后端的 ruby on rails。在写测试用例的时候，虽然单元测试的数据每次都是随机生成的，但是我们需要根据单元测试来生成 API 文档。如果测试文档每次都是随机的数据会很难检查每次 API 更新了什么，所以我们需要在生产测试文档的时候，保证随机数据的稳定性。")]),s._v(" "),n("h2",{attrs:{id:"random-seed"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#random-seed"}},[s._v("#")]),s._v(" Random seed")]),s._v(" "),n("p",[s._v("seed 的意义就在于，初始化了随机数生成器。保证了每次随机的结果都一样。例如代码：")]),s._v(" "),n("div",{staticClass:"language-rb line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-rb"}},[n("code",[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@rand")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Random")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1234")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nputs "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@rand")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rand\n\nputs "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@rand")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rand"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1050")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nputs "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@rand")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rand"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1050")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nputs "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@rand")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rand\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("这段代码每次执行都会输出：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("0.1915194503788923\n674\n699\n0.2725926052826416\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"rand-range"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rand-range"}},[s._v("#")]),s._v(" rand range")]),s._v(" "),n("p",[s._v("但是当我们把中间的 rand 的范围稍微修改：")]),s._v(" "),n("div",{staticClass:"language-rb line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-rb"}},[n("code",[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@rand")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Random")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1234")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nputs "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@rand")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rand\n\nputs "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@rand")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rand"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".150")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nputs "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@rand")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rand"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".150")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nputs "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@rand")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rand\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("会发现输出发生了变化：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("0.1915194503788923\n48\n63\n0.4377277390071145\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("第一次的输出还是不变，当然 2,3 两次肯定是变化的，重点是最后一次。我们发现最后一次的随机数也发生了变化。")]),s._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),n("p",[s._v("通过调查 ruby 源码发现，对于有范围的 rand。ruby 会不断生成随机数，判断是否落在区间范围内，如果是在范围内就返回，否则继续尝试。默认在 0 到 1 之间是百分百命中，所以是随机一次。如果是其他范围，命中次数不一样会导致生成随机数的次数发生变化。所以影响到之后的随机数生成。")]),s._v(" "),n("p",[s._v("参考：")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/ruby/ruby/blob/trunk/random.c#L863",target:"_blank",rel:"noopener noreferrer"}},[s._v("ruby"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("a",{attrs:{href:"https://ruby-doc.org/core-2.2.0/Random.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Random"),n("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);