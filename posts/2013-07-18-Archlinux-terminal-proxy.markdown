---
layout: post
title: "Archlinux下终端进行代理的解决方案"
date: 2013-07-18 22:05
comments: true
tags: linux proxy
---

Linux下软件安装基本都是在终端下进行的....  
虽说安装软件基本上选对源就没有无法安装的,但是Archlinux下的yaourt安装就是社区打包的软件了.  
软件来源各种各样,有的是Google code上的,有的是GitHub上的,有的就是sourceforge上的了.  
但是在中国的大环境下不能保证上面网站的正常访问 QAQ Google的话有hosts的情况下基本上是
把http修改成https就可以下载了,其余两个就只能代理进行下载软件并安装了.

#代理
首先科学上网的话就需要代理,SSH这样进行端口监听的比较不错.VPN是全局代理就不用讲述了.
不过VPN也可以走路由表进行部分代理(不在本文讨论范围之内)  
SSH的话在Linux下就是简单的一句  `ssh -NfD 127.0.0.1:7070 user@server`  
因为SSH不是HTTP代理,所以需要转发,如果是纯HTTP代理的话直接配置环境变量即可.   
前面写的是本机代理的端口,后面是服务器的用户名和服务器IP地址. 

#转发
SSH是SOCKET5代理,但是下载的话基本上就是HTTP代理
怎么转发呢? 这里就需要一个软件叫做[Privoxy](https://wiki.archlinux.org/index.php/Privoxy)
Privoxy可以把SOCKET5转HTTP代理,  
首先安装它 `sudo pacman -S privoxy`  
然后进行配置 `sudo vim /etc/privoxy/config`   
在配置文件里面添加 `forward-socks5 / 127.0.0.1:7070 .` 注意后面有个点,容易忽略.  
这个是转入的SOCKET5代理,指的是SSH的代理监听的端口号.  
配置文件里面有句话是 `listen-address 127.0.0.1:8118` 这个是转发出去的HTTP代理的端口号  
这样写好之后, 启动服务 `sudo systemctl start privoxy.service`

#配置环境变量
转发实现之后就可以应用在终端里面了,
在终端里面输入

	export https_proxy=127.0.0.1:8118
	export http_proxy=127.0.0.1:8118

这样就完成代理的设置了.

