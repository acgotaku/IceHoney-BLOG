(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{338:function(s,t,a){"use strict";a.r(t);var e=a(8),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("安卓 5.0 的卡刷包系统基本上都是在一个 dat 文件里面的。但是对于很多国内 ROM，要不就是植入了很多流氓软件，\n要不就是有很多无用软件。我们可以通过解压 DAT 文件并进行修改然后再封装回去就完美啦～")]),s._v(" "),a("h2",{attrs:{id:"首先把-dat-解压成-img-镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#首先把-dat-解压成-img-镜像"}},[s._v("#")]),s._v(" 首先把 DAT 解压成 IMG 镜像")]),s._v(" "),a("p",[s._v("我们要使用"),a("a",{attrs:{href:"https://github.com/xpirt/sdat2img",target:"_blank",rel:"noopener noreferrer"}},[s._v("sdat2img"),a("OutboundLink")],1),s._v("工具把 DAT 文件转换成 IMG 镜像")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./sdat2img "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("transfer_list"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("system_new_file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("system_ext"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("4")]),s._v(">")]),s._v("\n- "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("transfer_list"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" input, system.transfer.list from rom "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("zip")]),s._v("\n- "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("system_new_file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" input, system.new.dat from rom "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("zip")]),s._v("\n- "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("system_ext"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("4")]),s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" output ext4 raw image "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("一个很简单的例子:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./sdat2img system.transfer.list system.new.dat system.img\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("新生成的 IMG 镜像便是我们下一步需要的.")]),s._v(" "),a("h2",{attrs:{id:"挂载-img-镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#挂载-img-镜像"}},[s._v("#")]),s._v(" 挂载 IMG 镜像")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" -t ext4 -o loop system.img /mnt/android\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这时候你可以在系统的 /mnt/android 目录下看到文件的具体内容然后进行修改了.")]),s._v(" "),a("h2",{attrs:{id:"打包回-img-镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包回-img-镜像"}},[s._v("#")]),s._v(" 打包回 IMG 镜像")]),s._v(" "),a("p",[s._v("把修改好的内容打包回去需要使用"),a("a",{attrs:{href:"https://github.com/EpicAOSP/make_ext4",target:"_blank",rel:"noopener noreferrer"}},[s._v("make_ext4"),a("OutboundLink")],1),s._v("工具")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./make_ext4fs -T "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" -S file_contexts -l "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1073741824")]),s._v(" -a system system_new.img /mnt/android\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("file_contexts 文件是 ROM 本身提供的.后面的一串数字指的是打包的 IMG 文件的大小 1G")]),s._v(" "),a("h2",{attrs:{id:"封装成-dat-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#封装成-dat-文件"}},[s._v("#")]),s._v(" 封装成 DAT 文件")]),s._v(" "),a("p",[s._v("封装仍需要使用工具 使用 "),a("a",{attrs:{href:"https://mega.co.nz/#!IRAi0SKL!nof6p9JmFhGQNgnNmdEKWiEwZ9NOFUVv4q9BQZfM95w",target:"_blank",rel:"noopener noreferrer"}},[s._v("rimg2sdat"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./rimg2sdat "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("system_img"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这样就打包好了新的 DAT 文件,放入刷机 ROM.刷机即可~ 以上操作最好在 Linux 环境下,Win 下不保证成功.")]),s._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("p",[a("a",{attrs:{href:"http://forum.xda-developers.com/android/software-hacking/how-to-conver-lollipop-dat-files-to-t2978952",target:"_blank",rel:"noopener noreferrer"}},[s._v("XDA"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);