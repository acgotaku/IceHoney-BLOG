---
layout: post
title: "使用GRUB2引导ISO镜像"
date: 2013-04-25 21:17
comments: true
tags: linux boot grub2
---

首先来说下什么是GRUB,熟悉Linux的同学都应该知道的说.它是一个多重操作系统启动管理器。用来引导不同系统，如windows，linux。
GRUB2就是GRUB的下一个版本.首先说下GRUB的作用吧,当你按下电脑上的电源按钮的时候,这时候电脑会开始加载BIOS,BIOS首先检查计算机硬件
能否满足运行的基本条件,这叫做"硬件自检"（Power-On Self-Test）.自检完成之后,BIOS就会把系统控制权转交给下一阶段的启动程序,一般情况下
都会是硬盘,由硬盘启动时，BIOS通常是转向第一块硬盘的第一个扇区，即主引导记录(MBR).

装载GRUB和操作系统的过程，包括以下几个操作步骤：

		1、装载记录
		基本引导装载程序所做的唯一的事情就是装载第二引导装载程序。
		2、装载Grub
		这第二引导装载程序实际上是引出更高级的功能，以允许用户装载一个特定的操作系统。
		3、装载系统
		如linux内核。GRUB把机器的控制权移交给操作系统。
		不同的是，微软操作系统都是使用一种称为链式装载的引导方法来启动的，
		主引导记录仅仅是简单地指向操作系统所在分区的第一个扇区。

这时候就发挥GRUB2的作用了,根据不同的选项可以加载不同的操作系统,甚至可以加载ISO镜像.我此次折腾GRUB2就是为了免去每次安装系统的时候都去使用DD
刻录镜像的麻烦.然后写下来记录自己的一点成果.
下面就来讲解下如何使用GRUB2去引导ISO镜像
#安装GRUB2到U盘上
准备好一个U盘,在Linux的操作环境下进行安装,确保自己的系统上已经安装过GRUB2,如果没安装的话,请自行安装,Arch下安装 pacman -S grub-bios

1.在终端下输入lsblk查看你自己的U盘是哪个设备,例如我的是sdc1  
2.在/mnt下新建一个文件夹 并挂载上U盘 mkdir /mnt/USB && mount /dev/sdc1 /mnt/USB  
3.安装GRUB2到U盘上 grub-install --force --no-floppy --root-directory=/mnt/USB /dev/sdc  
4.这是GRUB2应该安装到U盘上了,如果U盘里没有boot文件夹可以直接copy系统的boot文件夹放进里面即可  

#配置GRUB2
GRUB2的配置文件就是boot/grub/grub.cfg文件
##从Archlinux-x86_64启动

	menuentry "Archlinux-x86_64.iso" --class iso {
	  set isofile="/archlinux-2013.04.01-dual.iso"
	  loopback loop (hd0,1)$isofile
	  linux (loop)/arch/boot/x86_64/vmlinuz archisolabel=ARCH_201304 img_dev=/dev/disk/by-uuid/DB7B-2C3D img_loop=$isofile earlymodules=loop
	  initrd (loop)/arch/boot/x86_64/archiso.img
	}

添加上面这段代码即可,首先要把Archlinux的安装镜像拷贝到U盘里面,第二行代码的意思就是设置isofile所在的位置,第二行是挂载iso镜像 hd(0,1)
的意思是IDE硬盘用hd表示,这里也可以表示U盘,0表示第一块磁盘,从0开始计数.1代表的是第一块分区,这里是从1开始计数.因为U盘引导的话第一块磁盘肯定是
U盘,所以前面的肯定是0,后面的1代表的是分区,如果你的分区是从其它数字开始的就做相应修改.第四行是加载内核,也就是ios里面的内核所在路径,archisolabel代表的
是虚拟挂载的时候的卷标,注意这个一定不能和你现有的硬盘或者U盘的卷标重复,否则会出现错误的.img_dev表示的是镜像所在的设备位置,这里使用uuid来表示,因为uuid是
U盘的固有属性,一般不会发生变化(除非你格式化U盘),所以保证一定能找到设备.  
查看uuid的命令是 ls /dev/disk/by-uuid/ -al 查看卷标的命令是 ls /dev/disk/by-label -al﻿ initrd 是使用户能够指定一个在引导时可用的初始RAM盘。当内核为了完全引导而需要某些模块时，这是必需的。
还有另外一种启动方法

	menuentry "Archlinux-x86_64.iso" --class iso {
	  set isofile="/archlinux-2013.04.01-dual.iso"
	  search -s -f -n /archlinux-2013.04.01-dual.iso
	  probe --set=DB7B-2C3D -u $root
	  loopback loop /archlinux-2013.04.01-dual.iso
	  linux (loop)/arch/boot/x86_64/vmlinuz archisolabel=ARCH_201304 img_dev=/dev/disk/by-uuid/DB7B-2C3D  img_loop=$isofile earlymodules=loop
	  initrd (loop)/arch/boot/x86_64/archiso.img
	}

##从Archlinux-i686启动
和上面同理可得  

	menuentry "Archlinux-i686.iso" --class iso {
	  set isofile="/archlinux-2013.04.01-dual.iso"
	  loopback loop (hd0,1)$isofile
	  linux (loop)/arch/boot/i686/vmlinuz archisolabel=ARCH_201304 img_dev=/dev/disk/by-uuid/DB7B-2C3D img_loop=$isofile earlymodules=loop
	  initrd (loop)/arch/boot/i686/archiso.img
	}

#用GRUB2启动其它ISO镜像
[其它ISO启动链接](http://askubuntu.com/questions/141940/how-to-boot-live-iso-images)  
有关启动Win系列的镜像可以参考这个链接[启动win镜像](http://superuser.com/questions/154133/grub-boot-from-iso/154204#154204)
上面链接说明了GRUB2使用ISO直接启动的原理,GRUB2只能读取ISO9660格式的镜像,只不过GRUB2是把ISO当作一个虚拟的CD罢了.
但是win7的安装镜像是ISO-13346 "UDF"格式的,也就是说GRUB2无法读取Win7镜像,所以使用ISO直接启动win7是不可能的事情了.