---
layout: post
title: "使用WebAssembly编译C++到JS"
date: 2019-04-28 20:51
comments: true
tags: JS webassembly
---

实际项目开发中遇到了一些已经使用C++实现的功能，需要在新的Web客户端使用。由于主要是数学和算法的计算，没有平台依赖性。所以需要一个成本最低的移植方式，显然WebAssembly是一个非常好的方式。现在官方的编译工具是[emscripten](https://github.com/emscripten-core/emscripten)

# 移植方式

从C++编译到JS。官方提供了两种编译方式[embind](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/embind.html)和[WebIDL Binder](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/WebIDL-Binder.html)。这两种方式，一开始我也很困惑。不过现在也是有所了解了。向大家介绍一下如何选择。如果你的C++项目中有很多高级数据结构要使用，例如vector，map。那推荐使用embind，如果你的项目主要是简单数据类型，例如数字，字符串，bool，都可以简单的映射到JS，并且是用class封装的，那推荐使用WebIDL Binder。

# 封装处理

由于C++数据结构比JS复杂的多，很多时候没有直接暴露成JS函数。我们需要进行封装，例如C++中的引用调用，可以改变传入的参数的值。但是编译成JS的话，就不会生效。所以这时候我们需要写wrap函数，封装这些引用调用的C++函数，然后再单独写get函数，得到修改的值。

# webpack打包

官方的demo是使用src的方式来引入，并且暴露成Module的全局变量。但是现代化的Web项目都是使用webpack打包，并且自动化引入的。所以我们也不想为了WebAssembly搞特殊。接下来就讲述如何配置来引入。首先，使用emscripten输出 `mjs` 文件，这样才可以作为模块被导入。具体的编译参数可以参照[emcc](https://emscripten.org/docs/tools_reference/emcc.html)。
首先，wasm格式并不能被webpack正确识别，我们需要添加loader

    {
      test: /\.wasm$/,
      type: 'javascript/auto',
      loader: 'file-loader',
    }

然后在项目中，分别 import mjs文件和 wasm文件。

    import lib from './wasm.mjs';
    import libWasm from './wasm.wasm';

    const module = lib({
      locateFile(path) {
        if(path.endsWith('.wasm')) {
          return libWasm;
        }
        return path;
      }
    });

然后在调用的时候替换掉默认的`locateFile`函数，即可完美导入到我们的项目中。

# 总结

编译C++到JS，不仅需要JS的知识，还需要C++知识，我们需要先把所有需要的C++文件，先全部编译到LLVM bitcode（.o 文件）。这里编译C++可以使用GCC的全部编译参数，推荐使用O3参数来优化代码。最后编译到JS文件的时候，需要按照emscripten的规范来书写胶水文件。

参考：

[webpack-emscripten-wasm](https://gist.github.com/surma/b2705b6cca29357ebea1c9e6e15684cc)

