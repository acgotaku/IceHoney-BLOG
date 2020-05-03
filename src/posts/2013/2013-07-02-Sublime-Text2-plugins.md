---
title: Sublime使用笔记以及插件推荐
date: 2013-07-02 22:06
comments: true
archives: 2013
tags:
  - sublime
---

自从换了 Linux 就摆脱了笨重的 VS 这个强大的开发工具,自动提示,自动纠错....
VS 为我提供了太多功能,已经把我宠坏了...以至于普通的编辑器我都无法习惯...
这样可不是什么好习惯,不过 Sublime Text 2 是个很好的编辑器,特别是它的插件特别
丰富提供了很多实用的功能.于是在 Linux 下前端开发基本就是实用它了.
虽说是收费软件,但是个人用户可以无限期的免费试用,只不过经常提示购买罢了...

## 基础配置

个人喜欢亮色系的输入环境于是换成 Dawn 主题,并且修改了字体和大小

```json
{
  "color_scheme": "Packages/Color Scheme - Default/Dawn.tmTheme",
  "font_face": "Deja Vu Sans Mono",
  "font_size": 11.5,
  "ignored_packages": ["Vintage"]
}
```

## 输入法问题解决

如果大家和我一样使用的输入法是 fcitx 的话可以使用 fcitx 官方提供的解决办法[Hall_of_Shame_for_Linux_IME_Support](https://fcitx-im.org/wiki/Hall_of_Shame_for_Linux_IME_Support)
按照那个[帖子](http://www.sublimetext.com/forum/viewtopic.php?f=3&t=7006&sid=50cfea9b8fb28114867fc217f47daf8a&start=10#p41343)三个步骤便可以成功调出输入法.

## 常用插件推荐

### Package Control

Package Control 是用来管理 Sublime Text 2 的插件的插件. 也是装完后第一个要安装的插件.
首先打开 console, 并在打开的 Sublime console 中输入:

```py
import urllib2,os; pf='Package Control.sublime-package'; ipp=sublime.installed_packages_path(); os.makedirs(ipp) if not os.path.exists(ipp) else None; urllib2.install_opener(urllib2.build_opener(urllib2.ProxyHandler())); open(os.path.join(ipp,pf),'wb').write(urllib2.urlopen('http://sublime.wbond.net/'+pf.replace(' ','%20')).read()); print 'Please restart Sublime Text to finish installation'
```

### ZenCoding

Zen Coding 是为了高速 HTML 编程和编辑开发的插件。这个插件的核心是一个超级强大的缩略词引擎，允许你扩展表达式到 HTML 代码中，类似于 CSS 的选择器。
通过 `Ctrl+,` 进行代码展开

**Zen Coding 现在已经被 Emmet 替代(Zen Coding 已经从 Sublime Text 2 的插件源中移除)，直接在编辑器内输入表达式，按下 Tab 即可扩展。**

### jQuery Package for Sublime Text

这个毫无疑问，没有 jQuery 我们还能干什么？绝对不错的 jQuery 开发插件，个人来说非常喜欢.

### JS Format

JS format 是 Sublime Text 2 的一个 javascript 的格式化插件，使用来自 JS beautifier 的命令行/python 模块的 javascript 格式来格式化选择的文本，或者整个文件.
不过貌似格式化部分文本会出现问题

### Sublime CodeIntel

是一个想法来自于 Komodo 编辑器的智能插件. 帮助你实时展示存在模块的自动补齐信息，同时也展示目前方法的信息到状态栏中.
自动补全超赞的!

### Tag

当你需要处理标签时，Tag 是一个伟大的插件.

## 解决中文编码问题

[ConvertToUTF8](https://github.com/seanliang/ConvertToUTF8)
[Codecs26](https://github.com/seanliang/Codecs26)
同时装这两个插件就可以正常打开 GBK 文件并且保存.

## 一些编码规范

有时候会设置保存文件时删除多余的空白字符并且在文件结尾添加空白行

打开 Preferences->Settings-Default 设置

```
"trim_trailing_white_space_on_save": true,
"ensure_newline_at_eof_on_save": true,
```
