---
layout: post
title: "解压和打包安卓DAT文件"
date: 2015-7-28 19:54
comments: true
tags: notes
---

安卓5.0的卡刷包系统基本上都是在一个 dat文件里面的。但是对于很多国内ROM，要不就是植入了很多流氓软件，
要不就是有很多无用软件。我们可以通过解压DAT文件并进行修改然后再封装回去就完美啦～

#首先把DAT解压成IMG镜像

我们要使用[sdat2img](https://github.com/xpirt/sdat2img)工具把 DAT文件转换成IMG镜像

		./sdat2img <transfer_list> <system_new_file> <system_ext4>
		- <transfer_list> = input, system.transfer.list from rom zip
		- <system_new_file> = input, system.new.dat from rom zip
		- <system_ext4> = output ext4 raw image file

一个很简单的例子:

		./sdat2img system.transfer.list system.new.dat system.img

新生成的IMG镜像便是我们下一步需要的.

#挂载IMG镜像

		sudo mount -t ext4 -o loop system.img /mnt/android

这时候你可以在系统的 /mnt/android目录下看到文件的具体内容然后进行修改了.

#打包回IMG镜像

把修改好的内容打包回去需要使用[make_ext4](https://github.com/EpicAOSP/make_ext4)工具

		./make_ext4fs -T 0 -S file_contexts -l 1073741824 -a system system_new.img /mnt/android

file_contexts文件是ROM本身提供的.后面的一串数字指的是打包的IMG文件的大小 1G

#封装成DAT文件
封装仍需要使用工具 使用 [rimg2sdat](https://mega.co.nz/#!IRAi0SKL!nof6p9JmFhGQNgnNmdEKWiEwZ9NOFUVv4q9BQZfM95w)

		./rimg2sdat <system_img>

这样就打包好了新的DAT文件,放入刷机ROM.刷机即可~ 以上操作最好在Linux环境下,Win下不保证成功.

参考 [XDA](http://forum.xda-developers.com/android/software-hacking/how-to-conver-lollipop-dat-files-to-t2978952)