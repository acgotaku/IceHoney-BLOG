---
title: 使用GRUB2引导ISO镜像
date: 2013-04-25 21:17
comments: true
archives: 2013
tags:
  - linux
  - grub2
---

首先来说下什么是 GRUB,熟悉 Linux 的同学都应该知道的说.它是一个多重操作系统启动管理器。用来引导不同系统，如 windows，linux。
GRUB2 就是 GRUB 的下一个版本.首先说下 GRUB 的作用吧,当你按下电脑上的电源按钮的时候,这时候电脑会开始加载 BIOS,BIOS 首先检查计算机硬件
能否满足运行的基本条件,这叫做"硬件自检"（Power-On Self-Test）.自检完成之后,BIOS 就会把系统控制权转交给下一阶段的启动程序,一般情况下
都会是硬盘,由硬盘启动时，BIOS 通常是转向第一块硬盘的第一个扇区，即主引导记录(MBR).

装载 GRUB 和操作系统的过程，包括以下几个操作步骤：

1. 装载记录 基本引导装载程序所做的唯一的事情就是装载第二引导装载程序。
2. 装载 Grub 这第二引导装载程序实际上是引出更高级的功能，以允许用户装载一个特定的操作系统。
3. 装载系统 如 linux 内核。GRUB 把机器的控制权移交给操作系统。不同的是，微软操作系统都是使用一种称为链式装载的引导方法来启动的，主引导记录仅仅是简单地指向操作系统所在分区的第一个扇区。

这时候就发挥 GRUB2 的作用了,根据不同的选项可以加载不同的操作系统,甚至可以加载 ISO 镜像.我此次折腾 GRUB2 就是为了免去每次安装系统的时候都去使用 DD
刻录镜像的麻烦.然后写下来记录自己的一点成果.
下面就来讲解下如何使用 GRUB2 去引导 ISO 镜像

## 安装 GRUB2 到 U 盘上

准备好一个 U 盘,在 Linux 的操作环境下进行安装,确保自己的系统上已经安装过 GRUB2,如果没安装的话,请自行安装,Arch 下安装 `pacman -S grub-bios`

1. 在终端下输入 lsblk 查看你自己的 U 盘是哪个设备,例如我的是 sdc1
2. 在/mnt 下新建一个文件夹 并挂载上 U 盘 mkdir /mnt/USB && mount /dev/sdc1 /mnt/USB
3. 安装 GRUB2 到 U 盘上 grub-install --force --no-floppy --root-directory=/mnt/USB /dev/sdc
4. 这是 GRUB2 应该安装到 U 盘上了,如果 U 盘里没有 boot 文件夹可以直接 copy 系统的 boot 文件夹放进里面即可

## 配置 GRUB2

GRUB2 的配置文件就是 boot/grub/grub.cfg 文件 ##从 Archlinux-x86_64 启动

```
menuentry "Archlinux-x86_64.iso" --class iso {
	set isofile="/archlinux-2013.04.01-dual.iso"
	loopback loop (hd0,1)$isofile
	linux (loop)/arch/boot/x86_64/vmlinuz archisolabel=ARCH_201304 img_dev=/dev/disk/by-uuid/DB7B-2C3D img_loop=$isofile earlymodules=loop
	initrd (loop)/arch/boot/x86_64/archiso.img
}
```

添加上面这段代码即可,首先要把 Archlinux 的安装镜像拷贝到 U 盘里面,第二行代码的意思就是设置 isofile 所在的位置,第二行是挂载 iso 镜像 hd(0,1)
的意思是 IDE 硬盘用 hd 表示,这里也可以表示 U 盘,0 表示第一块磁盘,从 0 开始计数.1 代表的是第一块分区,这里是从 1 开始计数.因为 U 盘引导的话第一块磁盘肯定是
U 盘,所以前面的肯定是 0,后面的 1 代表的是分区,如果你的分区是从其它数字开始的就做相应修改.第四行是加载内核,也就是 ios 里面的内核所在路径,archisolabel 代表的
是虚拟挂载的时候的卷标,注意这个一定不能和你现有的硬盘或者 U 盘的卷标重复,否则会出现错误的.img_dev 表示的是镜像所在的设备位置,这里使用 uuid 来表示,因为 uuid 是
U 盘的固有属性,一般不会发生变化(除非你格式化 U 盘),所以保证一定能找到设备.

查看 uuid 的命令是 ls /dev/disk/by-uuid/ -al 查看卷标的命令是 ls /dev/disk/by-label -al﻿ initrd 是使用户能够指定一个在引导时可用的初始 RAM 盘。当内核为了完全引导而需要某些模块时，这是必需的。
还有另外一种启动方法

```
menuentry "Archlinux-x86_64.iso" --class iso {
	set isofile="/archlinux-2013.04.01-dual.iso"
	search -s -f -n /archlinux-2013.04.01-dual.iso
	probe --set=DB7B-2C3D -u $root
	loopback loop /archlinux-2013.04.01-dual.iso
	linux (loop)/arch/boot/x86_64/vmlinuz archisolabel=ARCH_201304 img_dev=/dev/disk/by-uuid/DB7B-2C3D  img_loop=$isofile earlymodules=loop
	initrd (loop)/arch/boot/x86_64/archiso.img
}
```

## 从 Archlinux-i686 启动

和上面同理可得

```
menuentry "Archlinux-i686.iso" --class iso {
	set isofile="/archlinux-2013.04.01-dual.iso"
	loopback loop (hd0,1)$isofile
	linux (loop)/arch/boot/i686/vmlinuz archisolabel=ARCH_201304 img_dev=/dev/disk/by-uuid/DB7B-2C3D img_loop=$isofile earlymodules=loop
	initrd (loop)/arch/boot/i686/archiso.img
}
```

## 用 GRUB2 启动其它 ISO 镜像

[其它 ISO 启动链接](http://askubuntu.com/questions/141940/how-to-boot-live-iso-images)

有关启动 Win 系列的镜像可以参考这个链接[启动 win 镜像](http://superuser.com/questions/154133/grub-boot-from-iso/154204#154204)
上面链接说明了 GRUB2 使用 ISO 直接启动的原理,GRUB2 只能读取 ISO9660 格式的镜像,只不过 GRUB2 是把 ISO 当作一个虚拟的 CD 罢了.
但是 win7 的安装镜像是 ISO-13346 "UDF"格式的,也就是说 GRUB2 无法读取 Win7 镜像,所以使用 ISO 直接启动 win7 是不可能的事情了.
