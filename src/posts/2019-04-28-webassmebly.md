---
title: 使用WebAssembly编译C++到JS
date: 2019-04-28 20:51
comments: true
tags:
  - WebAssembly
---

实际项目开发中遇到了一些已经使用 C++实现的功能，需要在新的 Web 客户端使用。由于主要是数学和算法的计算，没有平台依赖性。所以需要一个成本最低的移植方式，显然 WebAssembly 是一个非常好的方式。现在官方的编译工具是[emscripten](https://github.com/emscripten-core/emscripten)

## 移植方式

从 C++编译到 JS。官方提供了两种编译方式[embind](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/embind.html)和[WebIDL Binder](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/WebIDL-Binder.html)。这两种方式，一开始我也很困惑。不过现在也是有所了解了。向大家介绍一下如何选择。如果你的 C++项目中有很多高级数据结构要使用，例如 vector，map。那推荐使用 embind，如果你的项目主要是简单数据类型，例如数字，字符串，bool，都可以简单的映射到 JS，并且是用 class 封装的，那推荐使用 WebIDL Binder。

## 封装处理

由于 C++数据结构比 JS 复杂的多，很多时候没有直接暴露成 JS 函数。我们需要进行封装，例如 C++中的引用调用，可以改变传入的参数的值。但是编译成 JS 的话，就不会生效。所以这时候我们需要写 wrap 函数，封装这些引用调用的 C++函数，然后再单独写 get 函数，得到修改的值。

## webpack 打包

官方的 demo 是使用 src 的方式来引入，并且暴露成 Module 的全局变量。但是现代化的 Web 项目都是使用 webpack 打包，并且自动化引入的。所以我们也不想为了 WebAssembly 搞特殊。接下来就讲述如何配置来引入。首先，使用 emscripten 输出 `mjs` 文件，这样才可以作为模块被导入。具体的编译参数可以参照[emcc](https://emscripten.org/docs/tools_reference/emcc.html)。
首先，wasm 格式并不能被 webpack 正确识别，我们需要添加 loader

```js
{
  test: /\.wasm$/,
  type: 'javascript/auto',
  loader: 'file-loader',
}
```

然后在项目中，分别 import mjs 文件和 wasm 文件。

```js
import lib from './wasm.mjs';
import libWasm from './wasm.wasm';

const module = lib({
  locateFile(path) {
    if (path.endsWith('.wasm')) {
      return libWasm;
    }
    return path;
  }
});
```

然后在调用的时候替换掉默认的`locateFile`函数，即可完美导入到我们的项目中。

## 总结

编译 C++到 JS，不仅需要 JS 的知识，还需要 C++知识，我们需要先把所有需要的 C++文件，先全部编译到 LLVM bitcode（.o 文件）。这里编译 C++可以使用 GCC 的全部编译参数，推荐使用 O3 参数来优化代码。最后编译到 JS 文件的时候，需要按照 emscripten 的规范来书写胶水文件。

参考：

[webpack-emscripten-wasm](https://gist.github.com/surma/b2705b6cca29357ebea1c9e6e15684cc)
