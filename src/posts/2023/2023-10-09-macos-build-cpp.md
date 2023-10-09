---
title: MacOS下编译C++文件
date: 2023-10-09 12:10
comments: true
archives: 2023
tags:
  - C++
---

WebAssembly 是一种新的编译目标，可以将 C/C++ 等语言编译成 WebAssembly，然后在浏览器中运行。我最近在研究如何把[zbar](https://github.com/mchehab/zbar)编译成 WebAssembly，然后在浏览器中使用。第一步就是想把官方的例子编译成二进制测试下代码，但是在 MacOS 下编译的时候遇到了一些问题，这里记录下。

## 官方例子

[scan_image.cpp](https://github.com/mchehab/zbar/blob/master/examples/scan_image.cpp)

官方提供了一个例子，可以用来测试二维码识别功能，这个例子有两个依赖 Magick++.h 和 zbar.h，这两个库都可以通过 brew 安装。

```bash
brew install imagemagick
brew install zbar
```

因为从源码编译对我来说实在是太复杂了，所以我就选择了直接安装相关依赖。

## 编译

```bash
g++ -o scan_image scan_image.cpp
```

执行上面的命令，会报错：

```
scan_image.cpp:1:10: fatal error: 'Magick++.h' file not found
```

这是因为 Magick++.h 的头文件在 `/opt/homebrew/include/ImageMagick-7/Magick++.h`，但是 g++ 默认只会在 `/opt/homebrew/include` 目录下查找头文件，所以我们需要指定头文件的路径。

```bash
g++ -o scan_image scan_image.cpp -I/opt/homebrew/include/ImageMagick-7
```

执行上面的命令还是会有报错：

```
/opt/homebrew/include/ImageMagick-7/MagickCore/magick-config.h:63:3: warning: "you should set MAGICKCORE_QUANTUM_DEPTH to sensible default set it to configure time default" [-W#warnings]
# warning "you should set MAGICKCORE_QUANTUM_DEPTH to sensible default set it to configure time default"
  ^
/opt/homebrew/include/ImageMagick-7/MagickCore/magick-config.h:64:3: warning: "this is an obsolete behavior please fix your makefile" [-W#warnings]
# warning "this is an obsolete behavior please fix your makefile"
  ^
/opt/homebrew/include/ImageMagick-7/MagickCore/magick-config.h:86:3: error: "you should set MAGICKCORE_HDRI_ENABLE"
# error "you should set MAGICKCORE_HDRI_ENABLE"
  ^
/opt/homebrew/include/ImageMagick-7/MagickCore/magick-config.h:121:3: error: "you should set MAGICKCORE_HDRI_ENABLE"
# error "you should set MAGICKCORE_HDRI_ENABLE"
```

我们需要设置两个 ImageMagick 需要的编译变量：

```bash
g++ -o scan_image scan_image.cpp -I/opt/homebrew/include/ImageMagick-7 -DMAGICKCORE_QUANTUM_DEPTH=16 -DMAGICKCORE_HDRI_ENABLE=0
```

设置了这两个变量之后，还是会报错：

```
Undefined symbols for architecture arm64:
  "Magick::Blob::Blob()", referenced from:
      _main in scan_image-727bdc.o
  "_zbar_get_symbol_name", referenced from:
      zbar::Symbol::get_type_name() const in scan_image-727bdc.o
ld: symbol(s) not found for architecture arm64
clang: error: linker command failed with exit code 1 (use -v to see invocation)
```

这是因为我们只引用了头文件，却没有引用相关库的实现。我们需要指定 ImageMagick 的库文件路径，这里我使用的是 brew 安装的 ImageMagick，所以库文件在 `/opt/homebrew/lib/ImageMagick` 目录下。

```bash
g++ -o scan_image scan_image.cpp -I/opt/homebrew/include/ImageMagick-7 -L/opt/homebrew/lib/ImageMagick -DMAGICKCORE_QUANTUM_DEPTH=16 -DMAGICKCORE_HDRI_ENABLE=0 -lMagick++-7.Q16HDRI -lzbar
```

同时我们需要使用 -l 参数来指定需要链接的库，这里需要链接 Magick++-7.Q16HDRI 和 zbar。

## CMake

上面的编译命令比较长，而且如果我们需要编译多个文件的时候，就需要写很多次，所以我们可以使用 CMake 来简化编译过程。

```
cmake_minimum_required(VERSION 3.10)
project(ScanImage)


set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_FLAGS "-DMAGICKCORE_HDRI_ENABLE=1 -DMAGICKCORE_QUANTUM_DEPTH=16")

include_directories(/opt/homebrew/include/ImageMagick-7)
link_directories(/opt/homebrew/lib/ImageMagick)

add_executable(ScanImage scan_image.cpp)
target_link_libraries(ScanImage zbar Magick++-7.Q16HDRI)
```

## 总结

C++ 的编译报错总是让人摸不着头脑，这里我只是简单的记录了下我遇到的问题和解决方案，希望能帮助到大家。

## 参考

[how to #include third party libraries](https://stackoverflow.com/questions/17887265/how-to-include-third-party-libraries)

[zbar-wasm](https://github.com/undecaf/zbar-wasm)
