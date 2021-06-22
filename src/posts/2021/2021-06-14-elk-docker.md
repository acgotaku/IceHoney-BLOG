---
title: ELK收集Docker项目的日志
date: 2021-06-14 11:21
comments: true
archives: 2021
tags:
  - ELK docker
---

现在主流的项目部署都是采用 docker 部署了，一般项目使用 `STDOUT` 输出的日志都被 docker 来收集和保存。我们需要使用著名的 [ELK](https://www.elastic.co/what-is/elk-stack) 来分析日志，所以如何部署 ELK 并且把 docker 的日志转发给 ELK 呢？ 这就是本篇文章我们需要解决的问题。

## 搭建 ELK

既然我们使用 docker 进行部署，那我们当然也要使用 docker 部署 ELK。[docker-elk](https://github.com/deviantony/docker-elk) 是一个配置好的项目，我们可以基于这个项目迅速搭建起一个 ELK 项目。说实话， ELK 项目非常消耗内存，所以至少保证机器有 4GB 内存，否则可能会宕机。搭建好 ELK 之后，记得按照教程重新设置密码。

```
$ docker-compose exec -T elasticsearch bin/elasticsearch-setup-passwords auto --batch
```

初始化密码之后，并修改 `kibana` 和 `logstash` 的配置文件更新密码。最后再重启这两个服务：

```
$ docker-compose restart kibana logstash
```

## 使用 GELF 收集日志

[GELF](https://docs.graylog.org/en/4.0/pages/gelf.html) 是一个经典的日志格式并且 docker 原生支持这个格式，首先我们需要配置 `logstash` 采取这个格式来收集日志。

修改 `logstash/pipeline/logstash.conf` 文件的 input 部分：

```
input {
	beats {
		port => 5044
	}

	gelf {
		port => 5000
	}
}
```

这样收集 `gelf` 的端口就是 `5000` 默认使用 UDP 格式。修改配置之后别忘了重启 `logstash`。

```
$ docker-compose restart logstash
```

接下来实际项目要把日志转发到 `ELK` 上，如果我们使用 `docker-compose.yml` 需要在当前的 `service` 上添加 `logging` 相关的配置：

```yaml
logging:
  driver: gelf
  options:
    gelf-address: 'udp://0.0.0.0:5000'
```

如果你的 ELK 和 实际项目并不是在同一台主机上，记得修改 `0.0.0.0` 成相应的主机名或 IP 地址。这样配置之后就可以在 `kibana` 上查看收集到的日志了。
不过要记得配置 `Index patterns` 然后在 `Discover` 界面上就能看到日志记录了。

## 总结

ELK 收集 docker 日志并不是很复杂，但是摸索的时候很难调试，例如 ELK 配置了 `gelf` 方法收集日志，但却找不到好的方法来测试这个接口是否正常。
我只是通过 `nmap` 命令来检测 5000 端口是否开放，并不知道是否正常运行。

扫描当前主机的 UDP 端口：

```
nmap -sU 0.0.0.0
```

启动项目的 docker 的时候还出现了警告信息 `warning: no logs are available with the 'gelf' log driver` 为了这个问题我查了半天，但发现
这个信息即使出现了也可以正常收集。浪费了不少时间。最终的解决方案总是很简单，但查找的过程中难免绕弯路。

## 参考

[https://ibm-cloud-architecture.github.io/b2m-nodejs/logging/](https://ibm-cloud-architecture.github.io/b2m-nodejs/logging/)

[Using Free Let’s Encrypt SSL/TLS Certificates with NGINX](https://www.nginx.com/blog/using-free-ssltls-certificates-from-lets-encrypt-with-nginx/)
