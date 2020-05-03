---
title: Linux下恢复误删除的文件
date: 2014-07-21 17:39
comments: true
archives: 2014
tags:
	- linux
---

经常有时候喜欢删除文件...但是之后又后悔删除... Linux 下 rm 之后是没有回收站的.  
于是我便寻找恢复文件的相关资料.

## TestDisk

TestDisk 是用来帮助恢复丢失的分区和使无法启动的启动盘再次启动.  
使用 TestDisk 之前别忘了备份分区表.

### 备份分区表

```bash
# sfdisk -d /dev/sda > /tmp/sda.bak
```

### 恢复分区表

```bash
# sfdisk /dev/sda < /tmp/sda.bak
```

官方教程:[TestDisk Step By Step](http://www.cgsecurity.org/wiki/TestDisk_Step_By_Step)

## PhotoRec

PhotoRec 是用来恢复丢失的文件和照片.即使重新格式化或严重损坏的文件系统都可以恢复.
但是 PhotoRec 只有全盘扫描和空闲分区扫描.耗时很长.对于自己无意中删除的小文件来说就是
杀鸡焉用牛刀.没有这个必要.

## Extundelete

Extundelete 设计的就是用来从 ext3 或 ext4 的分区恢复最近被删除的文件.它可以从一个相对路径恢复
被删除的文件,非常实用.但是只有当分区被卸载才可以使用.

### 恢复被删除的文件

```bash
# extundelete --restore-file tux/cv.tex /dev/sda4
```

### 恢复被删除的文件目录

```bash
# extundelete --restore-directory tux/Documents/tex/ /dev/sda4
```

Arch wiki:[File recovery](https://wiki.archlinux.org/index.php/File_recovery)
