---
title: 解决Dota2在Archlinux下的各种疑难杂症
date: 2015-12-01 21:58
comments: true
archives: 2015
tags:
	- linux
---

V 社的 steam 平台在 Linux 下出了这么多年还是没解决输入法的问题.本身官方也就只支持 Ubuntu,所以在其它发行版也就难免会有各种各样的问题.容我慢慢道来

## Alt 键无法发信号

Dota2 只能通过 Alt 和鼠标左键的配合发信号.无法像 Dota 一样可以单纯使用鼠标发信号.但是有些用户可能发现自己无法发信号.
原因在于你使用的窗口管理器已经为 Alt 和鼠标左键绑定了事件,所以你得取消窗口管理器的事件绑定,例如 openbox 需要修改配置文件 rc.xml 找到鼠标事件并注释掉事件绑定的内容.

## 双显卡启动游戏

对于很多双显卡的机器,平时运行使用集显但是在玩游戏的时候肯定要使用独显才能充分享受游戏的乐趣.所以启动游戏的时候就必须设置启动参数才行.
启动参数设置为`vblank_mode=0 primusrun %command%` 前提是你要装上 primusrun.

## Dota2 没声音

如果你只使用的 ALSA 没使用 PulseAudio 可能会遇到这个问题,原因是因为 Steam 自己的库文件和系统的冲突.只要把 Steam 的相关 ALSA 库删掉即可.
删掉下面的文件夹 和 `libasound.so.*`即可搞定.

```bash
~/.steam/steam/ubuntu12_32/steam-runtime/i386/usr/lib/i386-linux-gnu/
~/.steam/steam/ubuntu12_32/steam-runtime/amd64/usr/lib/x86_64-linux-gnu/
```

## 参考:

[Steam](https://wiki.archlinux.org/index.php/Steam#Launching_games_with_custom_commands.2C_such_as_Bumblebee.2FPrimus)

[Dota 2](https://wiki.archlinux.org/index.php/Steam/Game-specific_troubleshooting#Dota_2)
