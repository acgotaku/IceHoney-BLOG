(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{444:function(s,n,a){"use strict";a.r(n);var e=a(10),r=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("四月也算过去了一大半了,经过了一个月的奔波与折腾,总算安顿好自己了.在学校本地找了一个还算不错的实习.\n阴差阳错的选择了 Web 开发工程师的职位,其实我最想做的是后端开发,前端也还是比较喜欢的.但是我有个很大的\n缺点就是不会设计... 不会设计的前端开发工程师很鸡肋的,每次网站开发都是同学出设计图我来做的.这样不行的,\n我必须能独当一面才算能在公司站得住脚.")]),s._v(" "),a("p",[s._v("近况就是这些,接下来就是记录下自己在 Archlinux 下折腾的东西.方便自己以后查询使用.")]),s._v(" "),a("h2",{attrs:{id:"linux-下视频截图制作动态-gif"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-下视频截图制作动态-gif"}},[s._v("#")]),s._v(" Linux 下视频截图制作动态 GIF")]),s._v(" "),a("p",[s._v("观看视频遇到经典的镜头当然得录下来做成 GIF~\n首先需要安装 "),a("code",[s._v("imagemagick")]),s._v(" 这个软件包才行")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mplayer -vo png -ss 00:08:28 -frames "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v(".mp4\nmogrify -resize 848x480 *.png\nconvert -delay "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("  *.png ry.gif\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("第一句话是利用 mplayer 输出 png 格式图片,从 8 分 28 秒开始,截图 200 帧,也可以换成")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mplayer -vo png:z"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" -ss 00:08:28 -endpos "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v(".mp4\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这样就是截取 8 秒,png 后面的 z=1 是压缩比例从 0 到 9 压缩程度递增,压缩速度也递增.\n第二行便是修改尺寸,毕竟 720p 的 GIF 实在是吃不消啊.然后第三行变把这些 png 生成 GIF 了.")]),s._v(" "),a("h2",{attrs:{id:"sudo-设置环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sudo-设置环境变量"}},[s._v("#")]),s._v(" sudo 设置环境变量")]),s._v(" "),a("p",[s._v("有时候程序需要使用 root 权限,但当我使用 sudo 的时候结果发现这时候程序又使用 root 用户的配置文件了."),a("br"),s._v("\n现在的需求就是程序使用 root 权限运行但是执行时候读取 HOME 变量还是当前用户."),a("br"),s._v(" "),a("a",{attrs:{href:"https://wiki.archlinux.org/index.php/Sudo#Run_X11_apps_using_sudo",target:"_blank",rel:"noopener noreferrer"}},[s._v("Run_X11_apps_using_sudo"),a("OutboundLink")],1),s._v("\nwiki 上有清楚的讲解这样的解决办法.")])])}),[],!1,null,null,null);n.default=r.exports}}]);