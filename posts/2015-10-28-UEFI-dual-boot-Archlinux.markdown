---
layout: post
title: "Archlinux和Win 10 在 UEFI下 双启动"
date: 2015-10-28 23:32
comments: true
tags: linux
---

实验室给配备了一台高性能的台式机,但是UEFI本身关不掉.而且有些操作还是离不开Windows,于是便折腾Win10和Archlinux的双启动.
安装双系统基本上都是先装Windows再装Linux的.切忌这一点,安装顺序反了会很麻烦.

#Win10配置

要安装Archlinux,首先得对Windows进行相应的配置才行.Windows的安装就不用我介绍了,大家基本都会的.

#UEFI Secure Boot

首先要进入BIOS把这个参数关掉,如果BIOS里面有快速启动之类的也关掉.

#Fast Start-Up

把Win10的这个加速系统开机的配置禁用掉,应该在电源管理界面可以禁用的.因为切换系统的话这个功能会导致你丢失数据.

#制作Arch的U盘安装盘

如果你简单的使用[dd](https://wiki.archlinux.org/index.php/USB_flash_installation_media#In_GNU.2FLinux)命令就可以成功安装那是最好不过的了,但是有时候事与愿违...

假设你用dd刻录好之后,然后用电脑U盘启动,出现启动菜单 选择 `Arch Linux archiso x86_64 UEFI CD` 之后遇到黑屏的问题.

你可以先试试[禁用KMS](https://wiki.archlinux.org/index.php/Unified_Extensible_Firmware_Interface#USB_media_gets_struck_with_black_screen)

如果这个不行的话,那说明你得采用第二个办法了,使用 GRUB 进行引导启动盘.

#手动制作启动盘

因为要使用GRUB进行引导,所以不能使用dd刻录,dd刻录的U盘有写保护,我们无法修改.我们得[手动制作安装盘](https://wiki.archlinux.org/index.php/USB_flash_installation_media#Using_manual_formatting)

		# mkdir -p /mnt/{iso,usb}
		# mount -o loop archlinux-2015.10.01-dual.iso /mnt/iso
		# mount /dev/sdXn /mnt/usb
		# cp -a /mnt/iso/* /mnt/usb
		# sync
		# umount /mnt/iso

光是拷贝还不行,我们还得有引导信息. 使用syslinux进行[引导](https://wiki.archlinux.org/index.php/Syslinux#Manual_install)

		# cp -r /usr/lib/syslinux/bios/*.c32 /mnt/usb/arch/boot/syslinux/       ## copy ALL the *.c32 files from /usr/lib/syslinux/bios/, DO NOT SYMLINK
		# extlinux --install /mnt/usb/arch/boot/syslinux/

如果你的U盘是MBR格式的,记得使用 fdisk把当前分区设置为活动分区. `fdisk /dev/sdX` 然后输入 `a` 命令,选择要设置的活动分区.

还有 U盘寻找启动分区是根据U盘的label标签来寻找的,确保你的卷标是 `ARCH_2015XX` 格式. 如果你不想用卷标的话,还可以用UUID. 
查找你U盘的UUID的命令是 `sudo blkid`.

#制作GRUB standalone
这才只是手动制作好了启动U盘.你还要切换成 GRUB引导.通过下面的命令制作出一个带有所有模块的GRUB引导文件.

		grub-mkstandalone -d /usr/lib/grub/x86_64-efi/ -O x86_64-efi --modules="part_gpt part_msdos" --fonts="unicode" --locales="en@quot" --themes="" -o "/tmp/grubx64_standalone.efi"

生成的grubx64_standalone.efi就是我们需要的文件.

然后回到我们的那个启动U盘.备份EFI/boot/loader.efi 成 EFI/boot/gummiboot.efi.

拷贝两份grubx64_standalone.efi. 分别命名为EFI/boot/loader.efi和EFI/boot/bootx64.efi.

然后新建一个 EFI/boot/grub.cfg 把 [wiki](https://wiki.archlinux.org/index.php/Unified_Extensible_Firmware_Interface#USB_media_gets_struck_with_black_screen)上的内容拷贝过去.记得替换掉ARCH_YYYYMM的值.

然后这样就应该用 grub启动了. 如果你这样还是启动失败了, 得到了类似 `invalid magic number`的错误.那只能说你跟我一样倒霉.

#用GRUB挂载ISO进行引导

既然我们的GRUB是好的,那我们就用GRUB直接引导一个完整的ISO文件. 参考我之前发布的文章[使用GRUB2引导ISO镜像](https://blog.icehoney.me/posts/2013-04-25-grub2-boot-from-iso).

在原有的grub.cfg上添加一个menuentry.并把完整的ISO镜像拷贝到U盘里面.记得替换 UUID和文件名.

		menuentry "Archlinux-x86_64.iso" --class iso {
		  set isofile="/archlinux-2013.04.01-dual.iso"
		  search -s -f -n /archlinux-2013.04.01-dual.iso
		  probe --set=DB7B-2C3D -u $root
		  loopback loop /archlinux-2013.04.01-dual.iso
		  linux (loop)/arch/boot/x86_64/vmlinuz archisolabel=ARCH_201304 img_dev=/dev/disk/by-uuid/DB7B-2C3D  img_loop=$isofile earlymodules=loop
		  initrd (loop)/arch/boot/x86_64/archiso.img
		}

这次总算可以引导出arch的安装环境了.接下来就是按照正常的步骤进行安装了.

#安装Archlinux之后配置双系统的GRUB

到最后我们要[安装GRUB到UEFI](https://wiki.archlinux.org/index.php/GRUB#UEFI_systems)上.如果你提前安装过Windows,那么你肯定有EFI分区的.

		# pacman -S dosfstools grub efibootmgr
		# mkdir /boot/efi
		# mount /dev/sda1 /boot/efi

把EFI分区挂载到系统上,然后安装GRUB.

		# grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=grub --recheck
		# grub-mkconfig -o /boot/grub/grub.cfg

生成的grub.cfg里面并没有Windows的启动菜单,我们需要手动写.

		menuentry "Microsoft Windows 10" {
		    insmod part_gpt
		    insmod fat
		    insmod search_fs_uuid
		    insmod chain
		    search --fs-uuid --set=root $hints_string $fs_uuid
		    chainloader /EFI/Microsoft/Boot/bootmgfw.efi
		}

$hints_string的值是命令`# grub-probe --target=hints_string /boot/efi/EFI/Microsoft/Boot/bootmgfw.efi`的输出.

$fs_uuid的值是命令`# grub-probe --target=fs_uuid /boot/efi/EFI/Microsoft/Boot/bootmgfw.efi`的输出.

替换这俩值,保存并退出即可.到此双系统配置完毕.最后别忘了进BIOS把第一启动项目设置为GRUB.

#参考

[Preinstalled Windows 8.1 and Arch Linux dual boot](https://gist.github.com/miguelfrde/5dde43aa08b076106b9e)

[Unified Extensible Firmware Interface](https://wiki.archlinux.org/index.php/Unified_Extensible_Firmware_Interface#USB_media_gets_struck_with_black_screen)

[USB flash installation media](https://wiki.archlinux.org/index.php/USB_flash_installation_media#Using_manual_formatting)

[Syslinux](https://wiki.archlinux.org/index.php/Syslinux#Manual_install)

[GRUB](https://wiki.archlinux.org/index.php/GRUB#UEFI_systems)