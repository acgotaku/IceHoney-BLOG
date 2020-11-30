(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{453:function(e,t,s){"use strict";s.r(t);var a=s(10),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("经常有时候喜欢删除文件...但是之后又后悔删除... Linux 下 rm 之后是没有回收站的."),s("br"),e._v("\n于是我便寻找恢复文件的相关资料.")]),e._v(" "),s("h2",{attrs:{id:"testdisk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#testdisk"}},[e._v("#")]),e._v(" TestDisk")]),e._v(" "),s("p",[e._v("TestDisk 是用来帮助恢复丢失的分区和使无法启动的启动盘再次启动."),s("br"),e._v("\n使用 TestDisk 之前别忘了备份分区表.")]),e._v(" "),s("h3",{attrs:{id:"备份分区表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#备份分区表"}},[e._v("#")]),e._v(" 备份分区表")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# sfdisk -d /dev/sda > /tmp/sda.bak")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"恢复分区表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#恢复分区表"}},[e._v("#")]),e._v(" 恢复分区表")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# sfdisk /dev/sda < /tmp/sda.bak")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("官方教程:"),s("a",{attrs:{href:"http://www.cgsecurity.org/wiki/TestDisk_Step_By_Step",target:"_blank",rel:"noopener noreferrer"}},[e._v("TestDisk Step By Step"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"photorec"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#photorec"}},[e._v("#")]),e._v(" PhotoRec")]),e._v(" "),s("p",[e._v("PhotoRec 是用来恢复丢失的文件和照片.即使重新格式化或严重损坏的文件系统都可以恢复.\n但是 PhotoRec 只有全盘扫描和空闲分区扫描.耗时很长.对于自己无意中删除的小文件来说就是\n杀鸡焉用牛刀.没有这个必要.")]),e._v(" "),s("h2",{attrs:{id:"extundelete"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extundelete"}},[e._v("#")]),e._v(" Extundelete")]),e._v(" "),s("p",[e._v("Extundelete 设计的就是用来从 ext3 或 ext4 的分区恢复最近被删除的文件.它可以从一个相对路径恢复\n被删除的文件,非常实用.但是只有当分区被卸载才可以使用.")]),e._v(" "),s("h3",{attrs:{id:"恢复被删除的文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#恢复被删除的文件"}},[e._v("#")]),e._v(" 恢复被删除的文件")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# extundelete --restore-file tux/cv.tex /dev/sda4")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"恢复被删除的文件目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#恢复被删除的文件目录"}},[e._v("#")]),e._v(" 恢复被删除的文件目录")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# extundelete --restore-directory tux/Documents/tex/ /dev/sda4")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Arch wiki:"),s("a",{attrs:{href:"https://wiki.archlinux.org/index.php/File_recovery",target:"_blank",rel:"noopener noreferrer"}},[e._v("File recovery"),s("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);