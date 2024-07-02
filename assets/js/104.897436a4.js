(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{514:function(e,s,t){"use strict";t.r(s);var a=t(10),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("现在主流的项目部署都是采用 docker 部署了，一般项目使用 "),t("code",[e._v("STDOUT")]),e._v(" 输出的日志都被 docker 来收集和保存。我们需要使用著名的 "),t("a",{attrs:{href:"https://www.elastic.co/what-is/elk-stack",target:"_blank",rel:"noopener noreferrer"}},[e._v("ELK"),t("OutboundLink")],1),e._v(" 来分析日志，所以如何部署 ELK 并且把 docker 的日志转发给 ELK 呢？ 这就是本篇文章我们需要解决的问题。")]),e._v(" "),t("h2",{attrs:{id:"搭建-elk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#搭建-elk"}},[e._v("#")]),e._v(" 搭建 ELK")]),e._v(" "),t("p",[e._v("既然我们使用 docker 进行部署，那我们当然也要使用 docker 部署 ELK。"),t("a",{attrs:{href:"https://github.com/deviantony/docker-elk",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker-elk"),t("OutboundLink")],1),e._v(" 是一个配置好的项目，我们可以基于这个项目迅速搭建起一个 ELK 项目。说实话， ELK 项目非常消耗内存，所以至少保证机器有 4GB 内存，否则可能会宕机。搭建好 ELK 之后，记得按照教程重新设置密码。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ docker-compose exec -T elasticsearch bin/elasticsearch-setup-passwords auto --batch\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("初始化密码之后，并修改 "),t("code",[e._v("kibana")]),e._v(" 和 "),t("code",[e._v("logstash")]),e._v(" 的配置文件更新密码。最后再重启这两个服务：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ docker-compose restart kibana logstash\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"使用-gelf-收集日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-gelf-收集日志"}},[e._v("#")]),e._v(" 使用 GELF 收集日志")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://docs.graylog.org/en/4.0/pages/gelf.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("GELF"),t("OutboundLink")],1),e._v(" 是一个经典的日志格式并且 docker 原生支持这个格式，首先我们需要配置 "),t("code",[e._v("logstash")]),e._v(" 采取这个格式来收集日志。")]),e._v(" "),t("p",[e._v("修改 "),t("code",[e._v("logstash/pipeline/logstash.conf")]),e._v(" 文件的 input 部分：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("input {\n\tbeats {\n\t\tport => 5044\n\t}\n\n\tgelf {\n\t\tport => 5000\n\t}\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br")])]),t("p",[e._v("这样收集 "),t("code",[e._v("gelf")]),e._v(" 的端口就是 "),t("code",[e._v("5000")]),e._v(" 默认使用 UDP 格式。修改配置之后别忘了重启 "),t("code",[e._v("logstash")]),e._v("。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ docker-compose restart logstash\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("接下来实际项目要把日志转发到 "),t("code",[e._v("ELK")]),e._v(" 上，如果我们使用 "),t("code",[e._v("docker-compose.yml")]),e._v(" 需要在当前的 "),t("code",[e._v("service")]),e._v(" 上添加 "),t("code",[e._v("logging")]),e._v(" 相关的配置：")]),e._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("logging")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("driver")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" gelf\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("options")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("gelf-address")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'udp://0.0.0.0:5000'")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("如果你的 ELK 和 实际项目并不是在同一台主机上，记得修改 "),t("code",[e._v("0.0.0.0")]),e._v(" 成相应的主机名或 IP 地址。这样配置之后就可以在 "),t("code",[e._v("kibana")]),e._v(" 上查看收集到的日志了。\n不过要记得配置 "),t("code",[e._v("Index patterns")]),e._v(" 然后在 "),t("code",[e._v("Discover")]),e._v(" 界面上就能看到日志记录了。")]),e._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),t("p",[e._v("ELK 收集 docker 日志并不是很复杂，但是摸索的时候很难调试，例如 ELK 配置了 "),t("code",[e._v("gelf")]),e._v(" 方法收集日志，但却找不到好的方法来测试这个接口是否正常。\n我只是通过 "),t("code",[e._v("nmap")]),e._v(" 命令来检测 5000 端口是否开放，并不知道是否正常运行。")]),e._v(" "),t("p",[e._v("扫描当前主机的 UDP 端口：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("nmap -sU 0.0.0.0\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("启动项目的 docker 的时候还出现了警告信息 "),t("code",[e._v("warning: no logs are available with the 'gelf' log driver")]),e._v(" 为了这个问题我查了半天，但发现\n这个信息即使出现了也可以正常收集。浪费了不少时间。最终的解决方案总是很简单，但查找的过程中难免绕弯路。")]),e._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://ibm-cloud-architecture.github.io/b2m-nodejs/logging/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://ibm-cloud-architecture.github.io/b2m-nodejs/logging/"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.nginx.com/blog/using-free-ssltls-certificates-from-lets-encrypt-with-nginx/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Using Free Let’s Encrypt SSL/TLS Certificates with NGINX"),t("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);