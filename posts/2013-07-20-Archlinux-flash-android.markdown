---
layout: post
title: "Archlinux下Galaxy Nexus刷机并root"
date: 2013-07-20 14:12
comments: true
tags: linux android
---

安卓本来就是Linux衍生的,所以必然可以用Linux系统进行刷机,而且效果比  
Win还要好.不需要安装驱动,只需要安装adb和fastboot即可.  

#安装相关依赖

首先通过AUR源安装[android-sdk](https://aur.archlinux.org/packages/android-sdk/)和
[android-sdk-platform-tools](https://aur.archlinux.org/packages/android-sdk-platform-tools/)  
相关的wiki在 [这里](https://wiki.archlinux.org/index.php/Android)  
通过yaourt -Ql android-sdk-platform-tools 可以发现adb和fastboot都安装在  
`/opt/android-sdk/platform-tools` 目录下,  
但是PATH环境变量没有这个值,所以无法在终端里直接调用  
必须先设置PATH变量  `export PATH="${PATH}:/opt/android-sdk/platform-tools"`  
在 .xinitrc里面添加这句就可以使X下的终端PATH环境变量被添加.  
也可以直接执行,当终端关闭时PATH变量的设置也失效.  

#配置ADB
前面提供的wiki已经很详细的讲述如何进行[ADB的配置了](https://wiki.archlinux.org/index.php/Android#Connecting_to_a_real_device_-_Android_Debug_Bridge_.28ADB.29)

#测试FASTBOOT

fastboot模式（上下音量键和开机键一起按）,可以看到一个大大的Start画面,这就是进入了fastboot.  
此时把手机用USB连入电脑. 在终端里面输入fastboot devices 如果提示 no permission即是普通用户没有权限  
这时候就需要切换到root用户进行执行.如果输入一串数字.则说明系统识别到了你的手机.

#刷机开始

首先要下载[固件](https://developers.google.com/android/nexus/images)
下载下来的tgz文件解压即可看到有个flash-all.sh的脚本  
首先 `chmod +x flash-all.sh` 赋予脚本执行权限  
然后执行这个脚本即可,如果有大量输出则说明刷机正常进行中.  

#后续ROOT

ROOT的话首先需要刷recovery,我们先下载[recovery](http://www.clockworkmod.com/rommanager)  
找到自己型号的recovery进行下载,我的是recovery-clockwork-touch-6.0.3.3-maguro.img  
touch代表的是是否支持触摸.否则只能用音量键和开机键进行选择和确定.  
然后下载superSU的ZIP压缩包,目前版本是[1.41](http://download.chainfire.eu/339/SuperSU/UPDATE-SuperSU-v1.41.zip?retrieve_file=1)  ,ZIP格式不要解压.放入SD卡中.  
`adb push UPDATE-SuperSU-v1.41.zip /sdcard/`  
将手机关机进入fastboot模式,应该先解锁, `fastboot oem unlock`   
然后刷入recovery `fastboot flash recovery recovery-clockwork-touch-6.0.3.3-maguro.img`  
按下音量键调至recovery，按开机键进入，手机会自动重启进入recovery  
choose zip from SDcard，然后依次进入，最终选择UPDATE-SuperSU-v1.41.zip，确认安装.  
注：如果提示是否清除recovery flash，请选No，否则下次推送时无法进行OTA更新.   
安装完成后依次返回.  
这个步骤不会影响OTA更新,并且OTA更新之后会自动解决ROOT的问题,无需再次ROOT.  

#ADB小技巧
刷机之后需要一大堆APK软件安装怎么办 adb 本身只有单个APK安装的功能  
通过  `ls -1 *.apk | xargs -l adb install` 这个命令可以批量的把一个文件夹下的所以APK安装上去,而且还是静默安装. 不过首先要打开ADB调试才行.  

#手机MTP连接Linux电脑
MTP是微软发明的东西....当然不好用
目前有两种解决方案一种是GMTP,速度较慢,因为第一次和之后所有操作之后都会全部索引一遍文件列表.  
第二种是gvfs-mtp结合thunar使用,可以自动挂载,如果无法挂载可以使用 `lsusb` 命令.  

	Bus 001 Device 117: ID 04e8:6860 Samsung Electronics Co., Ltd GT-I9100 Phone [Galaxy S II], GT-I9300 Phone [Galaxy S III], GT-P7500 [Galaxy Tab 10.1]

可以看到我的设备号,然后在地址栏里面输入 `mtp://[usb:001,117]/`   
第一个数字是Bus 号,第二个数字是设备号.



