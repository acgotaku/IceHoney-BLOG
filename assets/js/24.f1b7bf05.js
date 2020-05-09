(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{405:function(s,a,t){"use strict";t.r(a);var n=t(8),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("Linux 下的 wicd 本身自带一个创建 Ad-Hoc network 功能的,但是这个功能太不实用了, 首先,Ad-Hoc 只能把笔记本的无线通过有线进行共享,而且 Ad-Hoc 网络无法被安卓原生系统识别,CM 倒是可以用.hostapd 也是一样.只能把有线网络通过无线进行共享.\n但是我经常是电脑连接 WIFI,并且想把 WIFI 共享给手机进行使用,于是我又开始折腾了 >_>")]),s._v(" "),t("h2",{attrs:{id:"首先安装所需要的软件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#首先安装所需要的软件"}},[s._v("#")]),s._v(" 首先安装所需要的软件")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("net-tools\niptables\naircrack-ng\ndhcpd\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"然后启动虚拟-ap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#然后启动虚拟-ap"}},[s._v("#")]),s._v(" 然后启动虚拟 AP")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("airmon-ng start wlp5s0 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动无线网卡的monitor模式 wlp5s0是我网卡的设备名 这时候会看到输出 monitor mode enabled on mon0 mon0便是虚拟出来的一个网卡设备")]),s._v("\nairbase-ng -e FreeWifi  -v mon0 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" 在mon0设备上创建Fake AP -e选项是设置SSID名字 -v是启动DEBUG模式 最后是设备名字,想进行后台运行请按Ctrl+D\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"激活-tap-insterface-并添加路由表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#激活-tap-insterface-并添加路由表"}},[s._v("#")]),s._v(" 激活 tap insterface 并添加路由表")]),s._v(" "),t("p",[s._v("执行上面的名字之后会输出 Created tap interface at0\n然后执行下面的命令")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v(" at0 up\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v(" at0 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".0.254 netmask "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0\nroute "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -net "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".0.0 netmask "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0 gw "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".0.254\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"设置-iptables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置-iptables"}},[s._v("#")]),s._v(" 设置 iptables")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("iptables --flush\niptables --table nat --flush\niptables --delete-chain\niptables --table nat --delete-chain\niptables -P FORWARD ACCEPT\niptables -t nat -A POSTROUTING -o wlp5s0 -j MASQUERADE\n//这里wlp5s0是我额外要连接到互联网的网卡设备名\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"配置-dns-服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-dns-服务器"}},[s._v("#")]),s._v(" 配置 DNS 服务器")]),s._v(" "),t("p",[s._v("没有 DNS 服务器即使能搜到 AP 也无法连接,因为获取不到 IP 地址.\n首先列出 "),t("code",[s._v("dhcpd.conf")]),s._v(" 的内容")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ddns-update-style none"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ndefault-lease-time "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmax-lease-time "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7200")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nauthoritative"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nsubnet "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".0.0 netmask "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\noption subnet-mask "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\noption broadcast-address "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".0.255"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\noption routers "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".0.254"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\noption domain-name-servers "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("114.114")]),s._v(".114.114"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nrange "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".0.1 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".0.140"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("然后执行下面的命令")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/var/lib/dhcp/dhcpd.leases'")]),s._v("\ndhcpd -d -f -cf dhcpd.conf at0 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"最后启用-ip-forwarding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最后启用-ip-forwarding"}},[s._v("#")]),s._v(" 最后启用 IP forwarding")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /proc/sys/net/ipv4/ip_forward\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"写在最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),t("p",[s._v("虽然能创建虚拟 AP,但是安卓原生系统连接获取到 IP 一段时间后又会自动掉线,原因不明,希望知道的菊苣能告诉咱一声~")])])}),[],!1,null,null,null);a.default=e.exports}}]);