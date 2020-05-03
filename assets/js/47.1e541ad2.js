(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{356:function(e,s,a){"use strict";a.r(s);var r=a(8),t=Object(r.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("同学最近淘了一台二手 Chromebook Pixel (2013)，这款笔记本最大的诱惑就是 12.85 寸但是配备了一块 2560 x 1700 分辨率的触摸屏。上网的体验不要太爽啊，在体验了一小时的 Chrome OS 之后，便感叹就只有一个浏览器而已啊！于是开始折腾如何安装 Linux，毕竟这款笔记本\n本来就对 Linux 支持很好。下面开始介绍安装过程。")]),e._v(" "),a("p",[e._v("由于这款笔记本是 x86 架构还自带 SeaBIOS，所以在安装 Linux 上省了不少功夫，很多非 SeaBIOS 的 Chromebook 都是需要刷固件才能引导 Linux 的。")]),e._v(" "),a("h2",{attrs:{id:"启用开发者模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启用开发者模式"}},[e._v("#")]),e._v(" 启用开发者模式")]),e._v(" "),a("ul",[a("li",[e._v("启动电脑")]),e._v(" "),a("li",[e._v("按住 Esc 和 F3（刷新）按钮，这时候按电源键，即可进入 Recovery 模式")]),e._v(" "),a("li",[e._v("按 Ctrl+ D，会提示你是否要进入开发者模式，确认之后等一会系统就会转变成启用开发者模式")])]),e._v(" "),a("p",[e._v("这时候每次开机屏幕都有警告提示，要么按 Ctrl + D，或者等待 30s 系统响一声便进入系统。")]),e._v(" "),a("h2",{attrs:{id:"进入超级用户-shell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进入超级用户-shell"}},[e._v("#")]),e._v(" 进入超级用户 shell")]),e._v(" "),a("ul",[a("li",[e._v("按 Ctrl+Alt+F2（→），之后你会看到一个登录提示")]),e._v(" "),a("li",[e._v("输入 "),a("code",[e._v("chronos")]),e._v(" 作为用户名，没有密码")]),e._v(" "),a("li",[e._v("然后输入 "),a("code",[e._v("sudo bash")]),e._v(",以超级用户使用 shell")])]),e._v(" "),a("h2",{attrs:{id:"启用-seabios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启用-seabios"}},[e._v("#")]),e._v(" 启用 SeaBIOS")]),e._v(" "),a("p",[e._v("在终端里面输入下面的指令：")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# crossystem dev_boot_usb=1 dev_boot_legacy=1")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("之后重启电脑即可。之后每次进入 SeaBIOS 都要在开机的时候按 Ctrl + L")]),e._v(" "),a("h2",{attrs:{id:"将-seabios-设置成默认启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将-seabios-设置成默认启动"}},[e._v("#")]),e._v(" 将 SeaBIOS 设置成默认启动")]),e._v(" "),a("p",[e._v("首先你需要破解硬件写保护，按照 wiki 上的说法需要拆机和跳线，具体的操作可以查看这个"),a("a",{attrs:{href:"https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/chromebook-pixel",target:"_blank",rel:"noopener noreferrer"}},[e._v("wiki"),a("OutboundLink")],1),e._v(",拆机操作非常危险，请自己慎重考虑。")]),e._v(" "),a("p",[e._v("如果你已经成功破解硬件写保护，接下来就是解除软件写保护。同样是进入超级用户 shell 然后输入指令禁用软件写保护：")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# flashrom --wp-disable")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("检查软件写保护：")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# flashrom --wp-status")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("运行 set_gbb_flags.sh ：")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# set_gbb_flags.sh")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("注意：新版本的 Chrome OS 已经把这个脚本移动到 "),a("code",[e._v("/usr/share/vboot/bin/set_gbb_flags.sh")]),e._v("位置了，然而并不在$PATH 环境变量中。")]),e._v(" "),a("p",[e._v("确认有下面的输出：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("GBB_FLAG_DEV_SCREEN_SHORT_DELAY 0x00000001\nGBB_FLAG_FORCE_DEV_SWITCH_ON 0x00000008\nGBB_FLAG_FORCE_DEV_BOOT_LEGACY 0x00000080\nGBB_FLAG_DEFAULT_DEV_BOOT_LEGACY 0x00000400\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("现在可以设置 SeaBIOS 为默认了：")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# set_gbb_flags.sh 0x489")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("最后再重新启用写保护：")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# flashrom --wp-enable")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("现在可以使用 Linux 安装 U 盘进行安装了。")]),e._v(" "),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[e._v("#")]),e._v(" 写在最后")]),e._v(" "),a("p",[e._v("插上 U 盘，开机然后按 Ctrl+ L 发现启动光盘正常启动，然后选择安装之后突然提示。。。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("not enough memory to load specified image\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("这时候不要慌张，在安装选择菜单点击 Tab 键，可以编辑启动命令，在双横线前面输入 "),a("code",[e._v("mem=4G")]),e._v(" 注意是双横线前面！")]),e._v(" "),a("p",[e._v("恢复 Chrome OS，请参阅"),a("a",{attrs:{href:"https://support.google.com/chromebook/answer/1080595?hl=en",target:"_blank",rel:"noopener noreferrer"}},[e._v("Recover your Chromebook"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://wiki.archlinux.org/index.php/Chrome_OS_devices",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chrome OS devices"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://wiki.archlinux.org/index.php/Chrome_OS_devices/Chromebook",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chromebook"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"http://vger.kernel.org/~davem/chromebook_pixel_linux.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("Installing Linux on the Chromebook Pixel"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=t.exports}}]);