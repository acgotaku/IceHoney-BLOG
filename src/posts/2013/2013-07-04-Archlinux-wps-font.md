---
title: Archlinux下安装过wps之后字体发虚的问题
date: 2013-07-04 12:39
comments: true
archives: 2013
tags:
  - linux
  - wps
---

Office 是 Linux 永远的痛...微软的 Office 市场霸主地位是根本无法撼动的... 但是微软那家伙很讨厌 Linux 和开源... Office 产品目前也只有 Windows 和 Mac 据说微软要出 Linux 版本的 Office...但是不知道猴年马月啊 (望天

之所以字体发虚是因为安装 WPS 之后的方正字体使得 Sans 和 Sans-Serif 字体的中文部分默认指向了方正宋体.所以导致个这个问题的发生...
左边是微米黑,右边是装过 WPS 之后映射的宋体字.... 明显右边太难看了有木有!!! 解决方案是自己编写 fonts.conf 设置字体的优先级...  
文泉驿提供了一个在线配置生成[工具](http://wenq.org/cloud/fcdesigner_local.html)
这个网页有部分 JS 资源被墙了,所以需要科学上网才能正常使用,需要注意.
配置完成之后点上面的“生成[create]”按钮,将结果复制保存到~/.fonts.conf 就能覆盖系统的字体选择顺序.
注意上面的方法在 Archlinux 下会出现警告错误提示是过时的使用方法.
正确的解决办法是把配置文件写在 `/etc/fonts/conf.avail/50-user.conf`
这样就可以完美解决字体发虚的问题了.

下面贴一下我的配置方案:

```xml
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
<!-- created by WenQuanYi FcDesigner v0.5 -->
<match>
  <test name="family"><string>Arial</string></test>
  <edit name="family" mode="prepend" binding="strong">
    <string>文泉驿微米黑</string>
      <!-- Please install 文泉驿微米黑 first -->
    <string>文泉驿等宽微米黑</string>
    <string>DejaVu Sans</string>
    <string>DejaVu Sans</string>
    <string>WenQuanYi Micro Hei</string>
      <!-- Please install WenQuanYi Micro Hei first -->
    <string>WenQuanYi Zen Hei</string>
    <string>Liberation Sans</string>
    <string>Droid Sans</string>
    <string>WenQuanYi Bitmap Song</string>
      <!-- Please install WenQuanYi Bitmap Song first -->
    <string>Cantarell</string>
      <!-- Please install Cantarell first -->
    <string>DejaVu Sans Condensed</string>
    <string>DejaVu Sans Light</string>
    <string>DejaVu Sans Mono</string>
    <string>DejaVu Serif</string>
    <string>DejaVu Serif Condensed</string>
    <string>方正书宋_GBK</string>
    <string>方正仿宋_GBK</string>
    <string>方正姚体_GBK</string>
    <string>方正宋体S-超大字符集</string>
    <string>方正宋体S-超大字符集(SIP)</string>
      <!-- Please install 方正宋体S-超大字符集(SIP) first -->
    <string>方正小标宋_GBK</string>
    <string>方正楷体_GBK</string>
    <string>方正细黑一_GBK</string>
    <string>方正行楷_GBK</string>
    <string>方正超粗黑_GBK</string>
    <string>方正隶书_GBK</string>
    <string>方正魏碑_GBK</string>
    <string>方正黑体_GBK</string>
  </edit>
</match>
<match>
  <test name="family"><string>sans-serif</string></test>
  <edit name="family" mode="prepend" binding="strong">
    <string>文泉驿微米黑</string>
      <!-- Please install 文泉驿微米黑 first -->
    <string>文泉驿等宽微米黑</string>
    <string>DejaVu Sans</string>
    <string>DejaVu Sans</string>
    <string>WenQuanYi Micro Hei</string>
      <!-- Please install WenQuanYi Micro Hei first -->
    <string>WenQuanYi Zen Hei</string>
    <string>Liberation Sans</string>
    <string>Droid Sans</string>
    <string>WenQuanYi Bitmap Song</string>
      <!-- Please install WenQuanYi Bitmap Song first -->
    <string>Cantarell</string>
      <!-- Please install Cantarell first -->
    <string>DejaVu Sans Condensed</string>
    <string>DejaVu Sans Light</string>
    <string>DejaVu Sans Mono</string>
    <string>DejaVu Serif</string>
    <string>DejaVu Serif Condensed</string>
    <string>方正书宋_GBK</string>
    <string>方正仿宋_GBK</string>
    <string>方正姚体_GBK</string>
    <string>方正宋体S-超大字符集</string>
    <string>方正宋体S-超大字符集(SIP)</string>
      <!-- Please install 方正宋体S-超大字符集(SIP) first -->
    <string>方正小标宋_GBK</string>
    <string>方正楷体_GBK</string>
    <string>方正细黑一_GBK</string>
    <string>方正行楷_GBK</string>
    <string>方正超粗黑_GBK</string>
    <string>方正隶书_GBK</string>
    <string>方正魏碑_GBK</string>
    <string>方正黑体_GBK</string>
  </edit>
</match>
<match>
  <test name="family"><string>serif</string></test>
  <edit name="family" mode="prepend" binding="strong">
    <string>文泉驿微米黑</string>
      <!-- Please install 文泉驿微米黑 first -->
    <string>文泉驿等宽微米黑</string>
    <string>DejaVu Sans</string>
    <string>DejaVu Serif</string>
    <string>WenQuanYi Bitmap Song</string>
      <!-- Please install WenQuanYi Bitmap Song first -->
    <string>AR PL UMing CN</string>
      <!-- Please install AR PL UMing CN first -->
    <string>AR PL SungtiL GB</string>
      <!-- Please install AR PL SungtiL GB first -->
    <string>WenQuanYi Zen Hei Sharp</string>
      <!-- Please install WenQuanYi Zen Hei Sharp first -->
    <string>AR PL UMing TW</string>
      <!-- Please install AR PL UMing TW first -->
    <string>Liberation Serif</string>
      <!-- Please install Liberation Serif first -->
    <string>Bitstream Charter</string>
      <!-- Please install Bitstream Charter first -->
    <string>Droid Serif</string>
      <!-- Please install Droid Serif first -->
    <string>Cantarell</string>
      <!-- Please install Cantarell first -->
    <string>DejaVu Sans Condensed</string>
    <string>DejaVu Sans Light</string>
    <string>DejaVu Sans Mono</string>
    <string>DejaVu Serif</string>
    <string>DejaVu Serif Condensed</string>
    <string>方正书宋_GBK</string>
    <string>方正仿宋_GBK</string>
    <string>方正姚体_GBK</string>
    <string>方正宋体S-超大字符集</string>
    <string>方正宋体S-超大字符集(SIP)</string>
      <!-- Please install 方正宋体S-超大字符集(SIP) first -->
    <string>方正小标宋_GBK</string>
    <string>方正楷体_GBK</string>
    <string>方正细黑一_GBK</string>
    <string>方正行楷_GBK</string>
    <string>方正超粗黑_GBK</string>
    <string>方正隶书_GBK</string>
    <string>方正魏碑_GBK</string>
    <string>方正黑体_GBK</string>
  </edit>
</match>
<match>
  <test name="family"><string>monospace</string></test>
  <edit name="family" mode="prepend" binding="strong">
    <string>文泉驿微米黑</string>
      <!-- Please install 文泉驿微米黑 first -->
    <string>文泉驿等宽微米黑</string>
    <string>DejaVu Sans</string>
    <string>WenQuanYi Zen Hei Mono</string>
      <!-- Please install WenQuanYi Zen Hei Mono first -->
    <string>WenQuanYi Micro Hei Mono</string>
    <string>DejaVu Sans Mono</string>
    <string>Droid Sans Mono</string>
      <!-- Please install Droid Sans Mono first -->
    <string>WenQuanYi Zen Hei Sharp</string>
      <!-- Please install WenQuanYi Zen Hei Sharp first -->
    <string>Liberation Sans Mono</string>
      <!-- Please install Liberation Sans Mono first -->
    <string>AR PL UMing TW</string>
      <!-- Please install AR PL UMing TW first -->
    <string>Cantarell</string>
      <!-- Please install Cantarell first -->
    <string>DejaVu Sans Condensed</string>
    <string>DejaVu Sans Light</string>
    <string>DejaVu Sans Mono</string>
    <string>DejaVu Serif</string>
    <string>DejaVu Serif Condensed</string>
    <string>方正书宋_GBK</string>
    <string>方正仿宋_GBK</string>
    <string>方正姚体_GBK</string>
    <string>方正宋体S-超大字符集</string>
    <string>方正宋体S-超大字符集(SIP)</string>
      <!-- Please install 方正宋体S-超大字符集(SIP) first -->
    <string>方正小标宋_GBK</string>
    <string>方正楷体_GBK</string>
    <string>方正细黑一_GBK</string>
    <string>方正行楷_GBK</string>
    <string>方正超粗黑_GBK</string>
    <string>方正隶书_GBK</string>
    <string>方正魏碑_GBK</string>
    <string>方正黑体_GBK</string>
  </edit>
</match>
</fontconfig>
```
