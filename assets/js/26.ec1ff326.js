(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{396:function(t,s,a){"use strict";a.r(s);var n=a(8),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("最近在看计算机组成原理等 4 本考研书籍...发现其实回过头来看这些当年没认真学的书的话还是有不少收获的.\n当年小白的我只知道编程看语言类的书籍,无法理解数据结构,计算机组成原理一类书对编程的影响.\n刚开始学这本书的时候就感觉我一个搞软件编程的看硬件干嘛.又是指令又是寄存器啥的,还有那可怕的电路图...\n看的真头大啊,不过其实想想,这门课要是真没用学校也不会开考研也不会考啊!当年真是图样图森破啊...")]),t._v(" "),a("p",[t._v("大一的时候一直以为搞软件的就要多学点编程语言...我现在倒是学了不少.到头来没一个拿的出手的,还真是可悲\n广度是有了但是没深度,同样的语言人家编程风格和效率就是比你高.这个是在什么 C#本质论 C++ primer 里面学不到的\n东西,说深了就是加编程素养.是不断积累的,不是看一本书就能迅速提升的东西.只上过培训班的程序员永远也不可能明白\n学习计算机组成原理会对编程有更深入的了解.最终写的代码也只是知其然而不知其所以然.")]),t._v(" "),a("p",[t._v("编程素养是通过各方面计算机知识的综合培养才能得到提高的.接下来我就举个例子来谈谈学过组成原理对编程的理解和\n提高.例子很简单,就是关于数组的遍历.一个二维数组,假定是 10*10 的吧.那么遍历输出的话,大家肯定都会的,很简单.")]),t._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("这个是很简单的两层 for 循环,我写的是伪代码,变量定义输出什么的就不要吐槽了.学过数据结构的同学应该都明白虽然二维\n数组都用矩阵来表示,但是实际储存的时候一般都是按照行优先的方式储存的.我的这个版本是先行遍历再列遍历的.")]),t._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("那么先列遍历再行遍历呢?大家一般都会觉得这个其实没什么差别吧.用数据结构的思想来说,空间复杂度和时间复\n杂度都是一样的,运行起来没啥区别的.当然对于现在的高速 CPU 和这个元素比较少的数组来说其实也没多大差别,但是不能\n因为这个就去忽略程序的效率问题.")]),t._v(" "),a("p",[t._v("为了讲述这个问题,首先的了解计算机的基本运行原理.首先程序是放在内存中的,但是执行程序需要用 CPU 来计算.因为 CPU 运行\n速度极快,但是内存速度却没有显著的提高.所以引入了高速缓存也就是 Cache,首先把内存中的程序调入高速缓存中.然后 CPU 再从\nCache 中取出数据进行运算.但是因为 Cache 的容量极小,但是内存很大,根据程序访问的局部性原理.指令通常是顺序存放,\n顺序执行的,数据一般也是聚集的存储在一起的.所以调入 Cache 中的数据基本上会是一段时间内 CPU 欲调用的数据.")]),t._v(" "),a("p",[t._v("当 CPU 发出度数据的请求时,如果访问的地址在 Cache 中即命中,那么直接从 Cache 中读取数据,和主存无关；如果 Cache 不命中,\n则仍需访问主存,并把此地址所在的块一次性都调入 Cache 内.")]),t._v(" "),a("p",[t._v("显然,如果命中率高的话,那么程序直接的速度就更快.对比行遍历和列遍历.发现行遍历每次都是按顺序取数据的,因为是按照行优先方式\n进行存储的嘛,所以命中率必然高.而列遍历的话每次取的都不是相邻的数据,会导致命中率大大降低,运行效率低.所以一会写程序的话\n遇到数组遍历的话肯定要使用行遍历更好.")]),t._v(" "),a("p",[t._v("类似的问题还有 GOTO 语句,大一的时候老师明令禁止不准在程序中使用 GOTO 语句,但是就是不说为什么...学过计算机组成原理也就\n明白了,因为 GOTO 语句违反了程序顺序执行的原则,使程序运行效率不高,而且程序读起来也很麻烦.")]),t._v(" "),a("p",[t._v("到此,对编程效率的见解就结束了,如果有什么纰漏的地方,还请大家指正,感谢您能读到最后~")])])}),[],!1,null,null,null);s.default=p.exports}}]);