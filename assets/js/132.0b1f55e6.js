(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{429:function(s,a,t){"use strict";t.r(a);var n=t(10),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("工作上需要前端实现扫描二维码的功能，这部分属于图像识别的工作，图像识别相关的库基本都是 C 语言库，所以需要将这些库编译到 WebAssembly，然后在前端调用。")]),s._v(" "),t("h2",{attrs:{id:"胶水函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#胶水函数"}},[s._v("#")]),s._v(" 胶水函数")]),s._v(" "),t("p",[s._v("我们需要将 C 语言的函数暴露出来，这样前端才能调用这些函数，这部分代码称为胶水函数。下面列举了一个简单的例子。")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("<emscripten.h>")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("<zbar.h>")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("<stdio.h>")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("<stdlib.h>")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token macro-name"}},[s._v("EXPORT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[s._v("EMSCRIPTEN_KEEPALIVE")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("int32_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("uint32_t")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nEXPORT "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("zbar_image_scanner_t")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ImageScanner_create")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("zbar_image_scanner_create")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h3",{attrs:{id:"编写-makefile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编写-makefile"}},[s._v("#")]),s._v(" 编写 Makefile")]),s._v(" "),t("div",{staticClass:"language-makefile line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-makefile"}},[t("code",[s._v("ZBAR_VERSION "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 0.23.90\nZBAR_SRC "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" zbar-"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ZBAR_VERSION"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nSRC "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" src\nBUILD "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" build\nDIST "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" dist\n\nEM_VERSION "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 3.1.44\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# See https://emscripten.org/docs/tools_reference/emcc.html")]),s._v("\nEMCC "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" emcc\nEMMAKE "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" emmake\nEMCONFIG "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" emconfigure\n\nZBAR_DEPS "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ZBAR_SRC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/make.done\nZBAR_OBJS "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ZBAR_SRC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/zbar/*.o "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ZBAR_SRC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/zbar/*/*.o\nZBAR_INC "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" -I "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ZBAR_SRC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("include")]),s._v("/ -I "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ZBAR_SRC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# See https://github.com/emscripten-core/emscripten/blob/main/src/settings.js")]),s._v("\nEMCC_FLAGS "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" -Oz -Wall -Werror -s ALLOW_MEMORY_GROWTH"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1 \\\n\t-s EXPORTED_FUNCTIONS"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"['_malloc','_free']\"")]),s._v(" \\\n\t-s MODULARIZE"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1 -s EXPORT_NAME"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("zbarWasm\n\n"),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v(".PHONY")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" all build clean-build clean\n\n"),t("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("all")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" build\n\n"),t("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("build")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("BUILD"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/zbar.js "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("BUILD"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/zbar.wasm\n\n"),t("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("clean-build")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\t-rm -rf "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("DIST"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("BUILD"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("clean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" clean-build\n\t-rm "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ZBAR_SRC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".tar.gz\n\t-rm -rf "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ZBAR_SRC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token symbol"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),s._v("(BUILD)/zbar.wasm "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),s._v("(BUILD)/zbar.js")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ZBAR_DEPS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("SRC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(".c\n\tmkdir -p "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("BUILD"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/\n\t"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("EMCC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("EMCC_FLAGS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" -o "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("BUILD"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/zbar.js -sEXPORT_ES6 "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("SRC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(".c "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ZBAR_INC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ZBAR_OBJS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token symbol"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),s._v("(ZBAR_DEPS)")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ZBAR_SRC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/Makefile\n\tcd "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ZBAR_SRC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" && "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("EMMAKE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" make CFLAGS"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("-Os CXXFLAGS"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("-Os \\\n\t\tDEFS"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-DZNO_MESSAGES -DHAVE_CONFIG_H"')]),s._v("\n\ttouch -m "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ZBAR_DEPS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token symbol"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),s._v("(ZBAR_SRC)/Makefile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ZBAR_SRC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/configure\n\tcd "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ZBAR_SRC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" && "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("EMCONFIG"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ./configure --without-x --without-xshm \\\n\t\t--without-xv --without-jpeg --without-libiconv-prefix \\\n\t\t--without-imagemagick --without-npapi --without-gtk \\\n\t\t--without-python --without-qt --without-xshm --disable-video \\\n\t\t--disable-pthread --disable-assert --host"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("x86_64-linux-gnu\n\n"),t("span",{pre:!0,attrs:{class:"token symbol"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),s._v("(ZBAR_SRC)/configure")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ZBAR_SRC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".tar.gz\n\ttar zxvf "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ZBAR_SRC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".tar.gz\n\ttouch -m "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ZBAR_SRC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/configure\n\n"),t("span",{pre:!0,attrs:{class:"token symbol"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),s._v("(ZBAR_SRC).tar.gz")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token symbol"}},[s._v("\tcurl -L -o "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),s._v("(ZBAR_SRC).tar.gz https")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//linuxtv.org/downloads/zbar/zbar-"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ZBAR_VERSION"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".tar.gz\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br")])]),t("p",[s._v("Makefile 中定义了编译 zbar 的流程，我们首先使用 curl 下载 zbar 的源码，然后解压，然后配置编译参数，最后编译生成 zbar 的调用 JS 和 WASM 文件。注意在配置参数中我们禁用了一些功能，因为这些功能在 WebAssembly 中不需要，并且在指定 host 的时候需要根据运行环境设置正确的参数，如果是运行在 Github Actions 中，需要设置为 "),t("code",[s._v("x86_64-linux-gnu")]),s._v("。如果是 M1 芯片的 Mac，需要设置为 "),t("code",[s._v("arm")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"函数封装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数封装"}},[s._v("#")]),s._v(" 函数封装")]),s._v(" "),t("p",[s._v("虽然我们从 zbar 暴露出来关键的图像处理相关的函数，但是用起来还不是那么方便，所以我们需要写一点 Typescript 的代码来封装这些函数。然后使用 rollup 打包成 JS 文件，并生成对应的 TS 类型文件。这部分实现细节就不赘述了。")]),s._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[s._v("编译 zbar 到 WebAssembly 的过程并不复杂，但是需要注意一些细节，比如编译参数的设置，胶水函数的编写等。这部分工作需要一定的 C 语言基础，如果没有的话，可以参考一些现成的例子，然后根据自己的需求进行修改。我也是参考网上的例子，然后根据自己的需求进行修改的。")]),s._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/undecaf/zbar-wasm",target:"_blank",rel:"noopener noreferrer"}},[s._v("undecaf/zbar-wasm"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/acgotaku/zbar-wasm",target:"_blank",rel:"noopener noreferrer"}},[s._v("acgotaku/zbar-wasm"),t("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);