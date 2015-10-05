---
layout: post
title: "Chromebook Pixel (2013) 安装Linux的方法"
date: 2015-4-20 19:54
comments: true
tags: chrome
---

同学最近淘了一台二手Chromebook Pixel (2013)，这款笔记本最大的诱惑就是 12.85寸但是配备了一块2560 x 1700 分辨率的触摸屏。上网的体验不要太爽啊，在体验了一小时的Chrome OS之后，便感叹就只有一个浏览器而已啊！于是开始折腾如何安装Linux，毕竟这款笔记本
本来就对Linux支持很好。下面开始介绍安装过程。

由于这款笔记本是x86架构还自带SeaBIOS，所以在安装Linux上省了不少功夫，很多非SeaBIOS的Chromebook都是需要刷固件才能引导Linux的。

#启用开发者模式

*   启动电脑
*   按住Esc和F3（刷新）按钮，这时候按电源键，即可进入Recovery 模式
*   按Ctrl+ D，会提示你是否要进入开发者模式，确认之后等一会系统就会转变成启用开发者模式

这时候每次开机屏幕都有警告提示，要么按Ctrl + D，或者等待30s系统响一声便进入系统。

#进入超级用户shell

*   按Ctrl+Alt+F2（→），之后你会看到一个登录提示
*   输入 `chronos` 作为用户名，没有密码
*   然后输入 `sudo bash`,以超级用户使用shell

#启用SeaBIOS

在终端里面输入下面的指令：

		# crossystem dev_boot_usb=1 dev_boot_legacy=1
之后重启电脑即可。之后每次进入SeaBIOS都要在开机的时候按Ctrl + L

#将SeaBIOS设置成默认启动

首先你需要破解硬件写保护，按照wiki上的说法需要拆机和跳线，具体的操作可以查看这个[wiki](https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/chromebook-pixel),拆机操作非常危险，请自己慎重考虑。

如果你已经成功破解硬件写保护，接下来就是解除软件写保护。同样是进入超级用户shell然后输入指令禁用软件写保护：

		# flashrom --wp-disable
检查软件写保护：

		# flashrom --wp-status
运行set_gbb_flags.sh ：

		# set_gbb_flags.sh

注意：新版本的Chrome OS已经把这个脚本移动到 ` /usr/share/vboot/bin/set_gbb_flags.sh`位置了，然而并不在$PATH环境变量中。

确认有下面的输出：

		GBB_FLAG_DEV_SCREEN_SHORT_DELAY 0x00000001
		GBB_FLAG_FORCE_DEV_SWITCH_ON 0x00000008
		GBB_FLAG_FORCE_DEV_BOOT_LEGACY 0x00000080
		GBB_FLAG_DEFAULT_DEV_BOOT_LEGACY 0x00000400

现在可以设置SeaBIOS为默认了：

		# set_gbb_flags.sh 0x489

最后再重新启用写保护：

		# flashrom --wp-enable
现在可以使用Linux安装U盘进行安装了。

#写在最后

插上U盘，开机然后按Ctrl+ L 发现启动光盘正常启动，然后选择安装之后突然提示。。。

		not enough memory to load specified image

这时候不要慌张，在安装选择菜单点击Tab键，可以编辑启动命令，在双横线前面输入 `mem=4G` 注意是双横线前面！

恢复Chrome OS，请参阅[Recover your Chromebook](https://support.google.com/chromebook/answer/1080595?hl=en)

参考：[Chrome OS devices](https://wiki.archlinux.org/index.php/Chrome_OS_devices) [Chromebook](https://wiki.archlinux.org/index.php/Chrome_OS_devices/Chromebook) [Installing Linux on the Chromebook Pixel](http://vger.kernel.org/~davem/chromebook_pixel_linux.txt)