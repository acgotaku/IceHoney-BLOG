---
title: 使用Postfix,Dovecot和Mysql配置邮件服务器
date: 2014-12-25 15:41
comments: true
archives: 2014
tags:
  - notes
---

由于学习的需要,我要配置个本地邮件服务器.虽然找到了一篇很详细的资料,但是在配置过程中还是遇到了这样那样的问题.
写篇文章记下来自己的学习过程,毕竟好记性不如烂笔头嘛.

## 详细教程

Google 一下便找到了一个十分详细的教程,分享给大家:[How To Configure a Mail Server Using Postfix, Dovecot, MySQL, and SpamAssasin](https://www.digitalocean.com/community/tutorials/how-to-configure-a-mail-server-using-postfix-dovecot-mysql-and-spamassasin)
教程虽然很详细,但难免有不理解和差错的地方.下面就讲下我遇到的问题:

## Dovecot 证书问题

教程上设置的证书位置是:

```
ssl_cert = </etc/ssl/certs/dovecot.pem
ssl_key = </etc/ssl/private/dovecot.pem
```

但实际上是空的 需要手动 copy 过去,默认存储的位置是:

```
ssl_cert = /etc/dovecot/dovecot.pem
ssl_key = /etc/dovecot/private/dovecot.pem
```

## 查看日志发现读取配置出错

出错信息如下:

```
dovecot: lmtp(11504): Fatal: Error reading configuration: Invalid settings: postmaster_address setting not given
```

查到相关资料[Invalid settings: postmaster_address setting not given](https://github.com/mail-in-a-box/mailinabox/issues/31)
简单来说就是在`/etc/dovecot/dovecot.conf`文件内添加一行 `postmaster_address=postmaster at DOMAIN` 即可

## 重启 Dovecot

当我们执行 `service dovecot restart` 时,发现根本没有这个 service.  
其实 dovecot 已经在运行了,我们只需执行 `dovecot reload` 即可

## 邮件无法发送

日志输出如下:

```
B0E4F26077E: to=<root@example.jp>, orig_to=<root>, relay=none, delay=6780, delays=6780/0/0.09/0, dsn=5.4.4, status=bounced (Host or domain name not found. Name service error for name=example.jp type=AAAA: Host not found)
```

这个问题是因为 Postfix 默认启用了 IPv6 并且优先级比 IPv4 要高,所以需要在配置文件 `/etc/postfix/main.cf`里面设置
`inet_protocols = ipv4` 这样就关闭 IPv6 了.即可解决问题.

大概就是遇到这么多问题了,最后祝愿大家圣诞节快乐~
