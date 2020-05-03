---
title: 使用Aria2下载百度网盘和115的资源
date: 2015-1-31 09:41
comments: true
archives: 2015
tags:
	- notes
---

虽然我已经开发了两款专门为 Aria2 用的下载插件,但是我发现还是有同学不会用 Aria2c 这么好的东西呢~
于是还是写一篇文章来好好的介绍下吧~

## 安装 Aria2

[Aria2 官网](http://aria2.sourceforge.net/),通过官网应该能找到各个系统的下载包啦~
Linux 用户可以直接通过包管理器进行下载安装,OSX 我就没有经验了...Win 用户直接下载对应的 ZIP 包就可以了

## 配置 Aria2

Aria2 有两种下载模式,一种是命令行下载模式,一种是 RPC Server 模式.前者不建议使用,后者的使用方式很方便.
RPC 模式就是启动之后什么也不做,等着通过 RPC 接口接受下载请求.下载完也不会退出,一直等待.
使用命令行加参数的方式配置 Aria2 非常不推荐,建议使用配置文件的方式,下面贴出我的配置文件.

```
#用户名
#rpc-user=user
#密码
#rpc-passwd=passwd
#上面的认证方式不建议使用,建议使用下面的token方式
#设置加密的密钥
#rpc-secret=token
#允许rpc
enable-rpc=true
#允许所有来源, web界面跨域权限需要
rpc-allow-origin-all=true
#允许外部访问，false的话只监听本地端口
rpc-listen-all=true
#RPC端口, 仅当默认端口被占用时修改
#rpc-listen-port=6800
#最大同时下载数(任务数), 路由建议值: 3
max-concurrent-downloads=5
#断点续传
continue=true
#同服务器连接数
max-connection-per-server=5
#最小文件分片大小, 下载线程数上限取决于能分出多少片, 对于小文件重要
min-split-size=10M
#单文件最大线程数, 路由建议值: 5
split=10
#下载速度限制
max-overall-download-limit=0
#单文件速度限制
max-download-limit=0
#上传速度限制
max-overall-upload-limit=0
#单文件速度限制
max-upload-limit=0
#断开速度过慢的连接
#lowest-speed-limit=0
#验证用，需要1.16.1之后的release版本
#referer=*
#文件保存路径, 默认为当前启动位置
dir=/home/acgotaku/Downloads
#文件缓存, 使用内置的文件缓存, 如果你不相信Linux内核文件缓存和磁盘内置缓存时使用, 需要1.16及以上版本
#disk-cache=0
#另一种Linux文件缓存方式, 使用前确保您使用的内核支持此选项, 需要1.15及以上版本(?)
#enable-mmap=true
#文件预分配, 能有效降低文件碎片, 提高磁盘性能. 缺点是预分配时间较长
#所需时间 none < falloc ? trunc << prealloc, falloc和trunc需要文件系统和内核支持
file-allocation=prealloc
```

小白用户可以直接 copy 我的配置文件保存成 aria2.conf 进行使用.  
然后在终端里面输入 `aria2c --conf-path=<PATH>`
注意 PATH 必须是绝对路径.  
例如: `D:\aria2\aria2.conf` 可以使用 `-D` 参数使 Aria2 在后台运行,即使关闭终端也不会停止运行.
Win 下可以把这个命令行保存成 bat 文件进行运行.注意路径不需要使用引号括起来.

接下来是如何管理 Aria2 的下载任务了,推荐使用 binux 菊苣的[YAAW](http://binux.github.io/yaaw/),超级好用,下载打开即用.  
懒得下载的话可以使用[在线版](http://binux.github.io/yaaw/demo/),只需在设置里面修改下 RPC PATH 为 `http://localhost:6800/jsonrpc`

## 百度网盘插件

我开发的百度网盘插件已经发布到[Web Store](http://goo.gl/bPpaAS)了,无法翻墙的同学可以去[Github](https://github.com/acgotaku/BaiduExporter/releases)下载安装包进行安装.安装之后打开[百度网盘](http://pan.baidu.com/disk/home)会发现在我的设备按钮的
右侧多了一个导出下载按钮,如果你使用的是默认配置的话那么选中要下载的文件之后点击`ARIA2 RPC`即可导出到 Aria2 进行下载,前提是你已经开启了 Aria2 的 RPC 模式.

## 115 网盘插件

[115 网盘插件](https://chrome.google.com/webstore/detail/115exporter/ojafklbojgenkohhdgdjeaepnbjffdjf)刚刚发布功能还不完善,可能还有未知的 BUG,我后续会进行优化和开发的.安装之后打开[115 网盘](http://115.com/?mode=wangpan),
会发现多了一个 `设置导出按钮` 的按钮.点击这个按钮之后会提示设置成功的,然后把鼠标移动到要下载的文件上会出现 `导出下载` 的按钮,
点击即可导出到 Aria2 下载.

参考: [Aria2 下载示例](http://blog.binux.me/2012/12/aria2-examples/)

如果有不懂的可以在[Github](https://github.com/acgotaku)和[Google+](https://plus.google.com/u/0/+%E9%9B%AA%E6%9C%88%E7%A7%8B%E6%B0%B4%E9%85%B1/posts)上联系我~
