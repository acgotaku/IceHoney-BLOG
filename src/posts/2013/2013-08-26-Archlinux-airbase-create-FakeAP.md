---
title: Archlinux下使用airbase和dhcpd建立虚拟AP
date: 2013-08-26 21:29
comments: true
tags:
  - linux
  - airbase
---

Linux 下的 wicd 本身自带一个创建 Ad-Hoc network 功能的,但是这个功能太不实用了, 首先,Ad-Hoc 只能把笔记本的无线通过有线进行共享,而且 Ad-Hoc 网络无法被安卓原生系统识别,CM 倒是可以用.hostapd 也是一样.只能把有线网络通过无线进行共享.
但是我经常是电脑连接 WIFI,并且想把 WIFI 共享给手机进行使用,于是我又开始折腾了 >\_>

## 首先安装所需要的软件

```
net-tools
iptables
aircrack-ng
dhcpd
```

## 然后启动虚拟 AP

```bash
airmon-ng start wlp5s0 #启动无线网卡的monitor模式 wlp5s0是我网卡的设备名 这时候会看到输出 monitor mode enabled on mon0 mon0便是虚拟出来的一个网卡设备
airbase-ng -e FreeWifi  -v mon0 & 在mon0设备上创建Fake AP -e选项是设置SSID名字 -v是启动DEBUG模式 最后是设备名字,想进行后台运行请按Ctrl+D
```

## 激活 tap insterface 并添加路由表

执行上面的名字之后会输出 Created tap interface at0
然后执行下面的命令

```bash
ifconfig at0 up
ifconfig at0 10.0.0.254 netmask 255.255.255.0
route add -net 10.0.0.0 netmask 255.255.255.0 gw 10.0.0.254
```

## 设置 iptables

```bash
iptables --flush
iptables --table nat --flush
iptables --delete-chain
iptables --table nat --delete-chain
iptables -P FORWARD ACCEPT
iptables -t nat -A POSTROUTING -o wlp5s0 -j MASQUERADE
//这里wlp5s0是我额外要连接到互联网的网卡设备名
```

## 配置 DNS 服务器

没有 DNS 服务器即使能搜到 AP 也无法连接,因为获取不到 IP 地址.
首先列出 `dhcpd.conf` 的内容

```bash
ddns-update-style none;
default-lease-time 600;
max-lease-time 7200;
authoritative;
subnet 10.0.0.0 netmask 255.255.255.0 {
option subnet-mask 255.255.255.0;
option broadcast-address 10.0.0.255;
option routers 10.0.0.254;
option domain-name-servers 114.114.114.114;
range 10.0.0.1 10.0.0.140;
}
```

然后执行下面的命令

```bash
echo > '/var/lib/dhcp/dhcpd.leases'
dhcpd -d -f -cf dhcpd.conf at0 &
```

## 最后启用 IP forwarding

```bash
echo "1" > /proc/sys/net/ipv4/ip_forward
```

## 写在最后

虽然能创建虚拟 AP,但是安卓原生系统连接获取到 IP 一段时间后又会自动掉线,原因不明,希望知道的菊苣能告诉咱一声~
