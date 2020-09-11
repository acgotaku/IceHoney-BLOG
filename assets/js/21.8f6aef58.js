(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{419:function(s,t,r){"use strict";r.r(t);var e=r(9),a=Object(e.a)({},(function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("p",[s._v("Linux 下软件安装基本都是在终端下进行的...."),r("br"),s._v("\n虽说安装软件基本上选对源就没有无法安装的,但是 Archlinux 下的 yaourt 安装就是社区打包的软件了."),r("br"),s._v("\n软件来源各种各样,有的是 Google code 上的,有的是 GitHub 上的,有的就是 sourceforge 上的了."),r("br"),s._v("\n但是在中国的大环境下不能保证上面网站的正常访问 QAQ Google 的话有 hosts 的情况下基本上是\n把 http 修改成 https 就可以下载了,其余两个就只能代理进行下载软件并安装了.")]),s._v(" "),r("h2",{attrs:{id:"代理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#代理"}},[s._v("#")]),s._v(" 代理")]),s._v(" "),r("p",[s._v("首先科学上网的话就需要代理,SSH 这样进行端口监听的比较不错.VPN 是全局代理就不用讲述了.\n不过 VPN 也可以走路由表进行部分代理(不在本文讨论范围之内)SSH 的话在 Linux 下就是简单的一句 "),r("code",[s._v("ssh -NfD 127.0.0.1:7070 user@server")]),r("br"),s._v("\n因为 SSH 不是 HTTP 代理,所以需要转发,如果是纯 HTTP 代理的话直接配置环境变量即可.\n前面写的是本机代理的端口,后面是服务器的用户名和服务器 IP 地址.")]),s._v(" "),r("h2",{attrs:{id:"转发"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#转发"}},[s._v("#")]),s._v(" 转发")]),s._v(" "),r("p",[s._v("SSH 是 SOCKET5 代理,但是下载的话基本上就是 HTTP 代理怎么转发呢? 这里就需要一个软件叫做"),r("a",{attrs:{href:"https://wiki.archlinux.org/index.php/Privoxy",target:"_blank",rel:"noopener noreferrer"}},[s._v("Privoxy"),r("OutboundLink")],1),s._v("\nPrivoxy 可以把 SOCKET5 转 HTTP 代理,\n首先安装它 "),r("code",[s._v("sudo pacman -S privoxy")]),s._v(" 然后进行配置 "),r("code",[s._v("sudo vim /etc/privoxy/config")]),s._v("在配置文件里面添加 "),r("code",[s._v("forward-socks5 / 127.0.0.1:7070 .")]),s._v("\n注意后面有个点,容易忽略. 这个是转入的 SOCKET5 代理,指的是 SSH 的代理监听的端口号.\n配置文件里面有句话是 "),r("code",[s._v("listen-address 127.0.0.1:8118")]),s._v(" 这个是转发出去的 HTTP 代理的端口号.\n这样写好之后, 启动服务 "),r("code",[s._v("sudo systemctl start privoxy.service")])]),s._v(" "),r("h2",{attrs:{id:"配置环境变量"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置环境变量"}},[s._v("#")]),s._v(" 配置环境变量")]),s._v(" "),r("p",[s._v("转发实现之后就可以应用在终端里面了,\n在终端里面输入")]),s._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("https_proxy")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:8118\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("http_proxy")]),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:8118\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br")])]),r("p",[s._v("这样就完成代理的设置了.")])])}),[],!1,null,null,null);t.default=a.exports}}]);