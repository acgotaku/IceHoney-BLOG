(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{391:function(a,s,t){"use strict";t.r(s);var e=t(8),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("最近又有瞎折腾装 Arch....发现显卡驱动的安装和设置都不是问题...\n声卡却老是出现奇怪的问题,便把最近折腾的经验写下来吧~")]),a._v(" "),t("h2",{attrs:{id:"切换默认声卡"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#切换默认声卡"}},[a._v("#")]),a._v(" 切换默认声卡")]),a._v(" "),t("p",[a._v("发现最近的新本子基本上声卡设备都不止一个,个人猜测应该是 HDMI 音频输出和\n本机主板上的音频输出吧.可以使用 "),t("code",[a._v("aplay -l")]),a._v(" 命令显示所有声卡设备.\n我机器的输出是:")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("acgotaku@Archlinux ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("$ aplay -l\n**** List of PLAYBACK Hardware Devices ****\ncard "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(": HDMI "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("HDA Intel HDMI"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(", device "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(": HDMI "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("HDMI "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  Subdevices: "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("/1\n  Subdevice "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#0: subdevice #0")]),a._v("\ncard "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(": PCH "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("HDA Intel PCH"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(", device "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(": ALC3220 Analog "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("ALC3220 Analog"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  Subdevices: "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("/1\n  Subdevice "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#0: subdevice #0")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br")])]),t("p",[a._v("第一个一般为默认的声卡输出设备,显然 HDMI 输出是不对的,导致声音无法正常播放,我们应该把默认声卡切换为\n第二个.最简单易用的方法是在用户根目录下新建一个 .asoundrc 文件.输入以下内容:")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("defaults.pcm.card 1\ndefaults.pcm.device 0\ndefaults.ctl.card 1\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("上面的数据可以从声卡设备输出中找到,这样就切换到 card 1 的 device 0 设备了.不过切换之后可能发现还是没有\n声音,因为 alsa 默认是静音的需要手动解除才行. 这就需要去官方源安装 "),t("code",[a._v("alsamixer")]),a._v(" 工具. "),t("a",{attrs:{href:"https://www.archlinux.org/packages/?name=alsa-utils",target:"_blank",rel:"noopener noreferrer"}},[a._v("alsa-utils"),t("OutboundLink")],1),a._v("\n我自己安装的 alsamixer 使用界面是:"),t("br"),a._v(" "),t("img",{attrs:{src:"https://lh5.googleusercontent.com/USgp7oXGwtvkM4al9fsXQWEqcOJuidxhQlQedsUJiSo=w811-h496-no",alt:""}})]),a._v(" "),t("p",[a._v("默认 Master 竖条下方显示的不是 00 而是 MM,表示是静音的,按下 m 键解除静音.")]),a._v(" "),t("h2",{attrs:{id:"耳机有持续的杂音的解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#耳机有持续的杂音的解决方案"}},[a._v("#")]),a._v(" 耳机有持续的杂音的解决方案")]),a._v(" "),t("p",[a._v("有些情况下即使安装好 alsa 解除静音了,但仍然发现戴耳机的时候没有任何软件发声的时候会有持续的杂音,但是音乐播放器一旦放音乐的时候杂音又消失了.\n这个问题的原因是 alsa 默认设置 Mic 声道是静音的,我们只需要解除 Mic 声道的静音并调节至合适的值即可.")]),a._v(" "),t("h2",{attrs:{id:"恢复默认的-alsa-设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#恢复默认的-alsa-设置"}},[a._v("#")]),a._v(" 恢复默认的 alsa 设置")]),a._v(" "),t("p",[a._v("有些时候自己胡乱设置导致 alsa 无法正常工作的时候可以通过使用 "),t("code",[a._v("alsactl restore")]),a._v(" 命令使 alsa 恢复到默认的配置一般都能正常工作了.")])])}),[],!1,null,null,null);s.default=n.exports}}]);