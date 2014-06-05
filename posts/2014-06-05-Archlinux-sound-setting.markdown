---
layout: post
title: "Archlinux下声卡的设置与折腾"
date: 2014-06-05 09:22
comments: true
tags: linux
---

最近又有瞎折腾装Arch....发现显卡驱动的安装和设置都不是问题...
声卡却老是出现奇怪的问题,便把最近折腾的经验写下来吧~

#切换默认声卡
发现最近的新本子基本上声卡设备都不止一个,个人猜测应该是HDMI音频输出和
本机主板上的音频输出吧.可以使用 `aplay -l` 命令显示所有声卡设备.
我机器的输出是:

		[acgotaku@Archlinux ~]$ aplay -l
		**** List of PLAYBACK Hardware Devices ****
		card 0: HDMI [HDA Intel HDMI], device 3: HDMI 0 [HDMI 0]
		  Subdevices: 1/1
		  Subdevice #0: subdevice #0
		card 1: PCH [HDA Intel PCH], device 0: ALC3220 Analog [ALC3220 Analog]
		  Subdevices: 1/1
		  Subdevice #0: subdevice #0

第一个一般为默认的声卡输出设备,显然HDMI输出是不对的,导致声音无法正常播放,我们应该把默认声卡切换为
第二个.最简单易用的方法是在用户根目录下新建一个 .asoundrc 文件.输入以下内容:

		defaults.pcm.card 1
		defaults.pcm.device 0
		defaults.ctl.card 1

上面的数据可以从声卡设备输出中找到,这样就切换到 card 1的 device 0 设备了.不过切换之后可能发现还是没有
声音,因为alsa默认是静音的需要手动解除才行. 这就需要去官方源安装 `alsamixer` 工具. [alsa-utils](https://www.archlinux.org/packages/?name=alsa-utils)
我自己安装的alsamixer使用界面是:  
![](https://lh5.googleusercontent.com/USgp7oXGwtvkM4al9fsXQWEqcOJuidxhQlQedsUJiSo=w811-h496-no)

默认Master竖条下方显示的不是00而是MM,表示是静音的,按下 m 键解除静音.

#耳机有持续的杂音的解决方案

有些情况下即使安装好alsa解除静音了,但仍然发现戴耳机的时候没有任何软件发声的时候会有持续的杂音,但是音乐播放器一旦放音乐的时候杂音又消失了.
这个问题的原因是alsa 默认设置Mic声道是静音的,我们只需要解除Mic声道的静音并调节至合适的值即可.

#恢复默认的alsa设置

有些时候自己胡乱设置导致alsa无法正常工作的时候可以通过使用 `alsactl restore` 命令使alsa恢复到默认的配置一般都能正常工作了.

