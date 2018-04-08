---
layout: post
title: "使用letsencrypt为自己的网站加密"
date: 2018-04-08 20:51
comments: true
tags: site ssl
---

好吧，这次博客的更新稍微有点迟到了。因为自己各种忙着考驾照什么的，不过新的一年又要有新的开始了。最近买了VPS也就开始折腾起来了，讲讲如何用letsencrypt来给自己的网站颁发不要钱的证书，而且最近还支持通配符的二级域名了，想怎么开子网站都行！！！

# dehydrated

浏览器的证书签名的步骤实在是很麻烦，所以有位热心的学生做了一个自动化脚本，可以自动生成脚本并且可以和其他脚本一起使用。达到一键签名证书。

# letsencrypt-cloudflare-hook

我把自己的DNS服务托管到cloudflare上，还可以使用cloudflare提供免费的CDN服务。最重要的一点是cloudflare有API接口。利用这个接口就可以自动完成DNS-01 challenge。简单的来说，就是通过添加一条DNS记录来证明自己对这个域名的所有权，才能给这个域名颁发证书。


# 安装过程

知道了这两个工具之后，我们就可以开始配置证书了。具体的流程都写在项目的[文档](https://github.com/kappataumu/letsencrypt-cloudflare-hook/blob/master/README.md)里面了。我这里主要是讲述下遇到的坑，首先我自己的服务器环境是CentOS7，使用的是默认的python2的环境。需要安装`cryptography`的库才能顺利完成编译。

    sudo yum install gcc libffi-devel python-devel openssl-devel

其次，配置环境最好保存在`dehydrated/config`里，这样就没必要每次都设置环境变量。

    echo "export CF_EMAIL=user@example.com" >> config
    echo "export CF_KEY=K9uX2HyUjeWg5AhAb" >> config
    echo "export CF_DEBUG=true" >> config

CF_KEY就是cloudflare里面的Global API Key，替换一下就好了。因为我们要配置的域名包含所有的二级域名，所以需要新建一个`dehydrated/domains.txt`文件，并写入：

    icehoney.me *.icehoney.me

这样就会对主域名和所有二级域名生效。

之后再执行命令，`./dehydrated -c -t dns-01 -k 'hooks/cloudflare/hook.py'`。如果没有问题就可以看到成功生成的日志。


参考：

[dehydrated](https://github.com/lukas2511/dehydrated)

[letsencrypt-cloudflare-hook](https://github.com/kappataumu/letsencrypt-cloudflare-hook)

[Failed to install Python Cryptography package with PIP and setup.py
Ask Question](https://stackoverflow.com/questions/22073516/failed-to-install-python-cryptography-package-with-pip-and-setup-py)
