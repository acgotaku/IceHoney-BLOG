---
title: 在浏览器上显示TIF图像
date: 2020-09-10 20:57
comments: true
archives: 2020
tags:
  - tif
---

在实际的业务中，我们需要在浏览器中对 TIF 文件的某个区域进行选择，所以需要展示 TIF 文件在浏览器中。不过浏览器并不能直接支持 TIF 格式，所以我们需要做相应的处理。

## 寻找合适的解析库

图像处理是一个很复杂的事情，如果别人有实现就别自己造轮子了。这里我推荐[UTIF.js](https://github.com/photopea/UTIF.js/)，这位作者实现了网页版图片编辑器。所以质量上还是很高的。

## 导入图片二进制数据

我们需要把图片导入成二进制数据，我们使用`fetch`来获取图片二进制数据，fetch 本身就可以返回二进制数据，大致代码如下：

```js
  fetchImage() {
    fetch("bali.tif")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.arrayBuffer();
      })
      .then(data => {
        const ifds = UTIF.decode(data);
        UTIF.decodeImage(data, ifds[0]);
        const rgba = UTIF.toRGBA8(ifds[0]);
        const widh = ifds[0].width;
        const height = ifds[0].height;
        const canvas = document.createElement("canvas");
        canvas.width = widh;
        canvas.height = height;
        this.width = widh;
        this.height = height;
        const ctx = canvas.getContext("2d");
        const imgData = new ImageData(
          new Uint8ClampedArray(rgba.buffer),
          widh,
          height
        );
        ctx?.putImageData(imgData, 0, 0);
        canvas.toBlob(blob => {
          this.imgData = URL.createObjectURL(blob);
        });
      });
  }
```

导入的二进制数据，使用`UTIF`去解码二进制数据。拿到图片的基本信息之后，创建相应的 canvas 画布，把图片数据加载进 canvas 之后可以创建`ObjectURL`就可以使用`img` tag 来显示。

## 总结

处理 TIF 文件本身并不是很复杂，在于找到合适的方法。完整的演示代码在[vue-tif](https://github.com/acgotaku/vue-tif)。

## 参考

[UTIF.js](https://github.com/photopea/UTIF.js/)

[vue-tif](https://github.com/acgotaku/vue-tif)
