---
title: QR code 生成的相关参数
date: 2023-03-03 20:42
comments: true
archives: 2023
tags:
  - qrcode
---

QR code 本身就是把文字生成一个二维码的过程，顶多指定一下纠错等级。但是有些硬件设备只支持特定参数的二维码，所以我就查了一下二维码的相关规范了解一下生成过程中需要哪些参数。

## version

二维码有一个 version 参数，范围是从 1 到 40。 每个版本都具备固有的码元结构(码元数)，码元是指构成 QR 码的方形黑白点。“码元结构”是指二维码中的码元数。从版本 1(21 码元 ×21 码元)开始，在纵向和横向各自以 4 码元为单位递增，一直到版本 40(177 码元 ×177 码元)。规律是 4n +17 (n 代表版本号)。版本越大能容纳的信息就越多，一般是选择能容纳所需信息的最小版本即可。

## error correction level

QR 码具有纠错功能，保证二维码在丢失一定数据的情况下还是可以读取。纠错有四个级别分别是：

1. L (Low) 纠错 7%
2. M (Medium) 纠错 15%
3. Q (Quartile) 纠错 25%
4. H (High) 纠错 30%

纠错能力越高需要存储的信息就越多，对应需要的 version 就要越高。

## mask

mask 是为了防止二维码有大量空白或者填充，让扫描器尽可能容易的进行扫描。mask 方案目前有 8 种。

![Mask Pattern](https://upload.wikimedia.org/wikipedia/commons/c/c8/QR_Code_Mask_Patterns.svg)

选择 mask 的方案有相关的标准可以自行查询，本质目标是让生成的图片尽量黑白相间，避免同一颜色的色块大量出现，方便扫描器读取数据。

## 总结

普通业务使用的二维码相关库应该只提供文本接口和纠错标准的设定，会根据文本长度和纠错标准来自动其他两个参数。但是针对特殊需求的情况下就需要把 version 和 mask 参数暴露出来。
同时因为手动指定 version 也会因为 version 版本太低导致无法生成合法的二维码的情况。使用的时候需要注意。我本身有修改一个版本可以传入底层参数，可以看一下参考链接。

## 参考

[Information capacity and versions of QR Code](https://www.qrcode.com/en/about/version.html)

[What is a QR code?](https://www.keyence.com/ss/products/auto_id/codereader/basic_2d/qr.jsp)

[QR Code generator](https://github.com/nayuki/QR-Code-generator)

[Reed–Solomon codes for coders](https://en.wikiversity.org/wiki/Reed%E2%80%93Solomon_codes_for_coders)

[qrcodegen](https://github.com/acgotaku/simple-qr-reader/blob/master/src/vendors/qrcode/qrcodegen.ts)
