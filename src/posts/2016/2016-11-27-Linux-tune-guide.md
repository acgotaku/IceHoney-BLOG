---
title: Linux高并发系统参数优化
date: 2016-11-27 18:16
comments: true
archives: 2016
tags:
	- linux
---

终于毕业证书到手，学生生涯也算是划上完美的句号了。不过工作强度还真的有点大，还经常加班。感觉自己懒散了许多，人果然是生于忧患，死于安乐。。。最近的项目里对业务处理的高并发要求比较高，因此也学习了相关的如何调整 Linux 内核参数让服务器可以处理非常高并发的业务。所以在博客上记录下相关的经验，以供参考。 修改的参数主要是 Linux 系统参数和网络协议栈参数。注意，以下命令都需要在 root 环境下运行。

## Linux 操作系统参数

系统全局允许分配的最大文件句柄数:

```bash
# sysctl -w fs.file-max=2097152
# sysctl -w fs.nr_open=2097152
```

允许当前会话/进程打开文件句柄数:

```bash
# ulimit -n 1048576
```

但是以上命令只是临时修改，重启系统便会失效，所以我们需要持久化这些参数。

持久化`fs.file-max`设置到/etc/sysctl.conf 文件:

```bash
fs.file-max = 1048576
```

/etc/security/limits.conf 持久化设置允许用户/进程打开文件句柄数:

```
*      soft   nofile      1048576
*      hard   nofile      1048576
```

## TCP 协议栈网络参数

并发连接 backlog（定义了网络连接的队列的最大长度）设置:

```bash
# sysctl -w net.core.somaxconn=32768
# sysctl -w net.ipv4.tcp_max_syn_backlog=16384
# sysctl -w net.core.netdev_max_backlog=16384
```

可用知名端口范围:

```bash
# sysctl -w net.ipv4.ip_local_port_range='1000 65535'
```

TCP Socket 读写 Buffer 设置:

```bash
# sysctl -w net.core.rmem_default=262144
# sysctl -w net.core.wmem_default=262144
# sysctl -w net.core.rmem_max=16777216
# sysctl -w net.core.wmem_max=16777216
# sysctl -w net.core.optmem_max=16777216

# sysctl -w net.ipv4.tcp_rmem='1024 4096 16777216'
# sysctl -w net.ipv4.tcp_wmem='1024 4096 16777216'
```

TCP 连接追踪设置:

```bash
# sysctl -w net.nf_conntrack_max=1000000
# sysctl -w net.netfilter.nf_conntrack_max=1000000
# sysctl -w net.netfilter.nf_conntrack_tcp_timeout_time_wait=30
```

TIME-WAIT Socket 最大数量、回收与重用设置:

```bash
# net.ipv4.tcp_max_tw_buckets=1048576
```

FIN-WAIT-2 Socket 超时设置:

```bash
# net.ipv4.tcp_fin_timeout = 15
```

## 参考

[测试调优](http://emqtt.com/docs/v2/tune.html)
