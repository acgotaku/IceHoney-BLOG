---
title: WebGL渲染的知识介绍
date: 2016-05-05 10:43
comments: true
archives: 2016
tags:
  - WebGL
---

来到日本导师的研究方向是计算机图形学，由于我比较擅长 Web 开发，便选择了 WebGL 进行图形渲染的研究课题。学习了大半年，也该写点东西介绍下自己对 WebGL 的理解，如有错误，欢迎批评指正。

## WebGL 介绍

WebGL 是基于 OpenGL ES 2.0 文档进行开发的，所以想了解相关 API 的话，直接查阅官方的[OpenGL ES 2.0 文档](https://www.khronos.org/registry/gles/specs/2.0/es_full_spec_2.0.25.pdf)即可.WebGL 的一大优势是可以使用 GPU 资源来进行图形渲染和相关的计算，但是使用 GPU 资源的话必须使用对于 GPU 友好的语言来进行编写，WebGL 使用[GLSL](https://en.wikipedia.org/wiki/OpenGL_Shading_Language)来编写用于 GPU 渲染的着色器。
JavaScript 主要负责整个渲染流程的控制和 GPU 与 CPU 之间的数据交互，繁重的坐标变换计算全部交给 GPU 来处理。

## WebGL 渲染管道

### 获取 WebGL

WebGL 是基于 canvas 画布来进行渲染的，首先我们要使用`getContext`方法来获取 gl 对象。并判断浏览器是否支持 WebGL.

```js
var gl = null;
try {
  gl = canvas.getContext('experimental-webgl');
  if (gl == null) {
    gl = canvas.getContext('webgl');
  }
} catch (error) {}

if (gl != null) {
  // WebGL is supported
} else {
  // WebGL is not supported
}
```

### 顶点着色器

WebGL 只支持绘制基本图元，复杂的图形也是有基本图元组合而成的，基本图元包括点、线段或三角形。三角形是最经常用来使用的，因为 3D 空间中的任何 3 个点都是一个三角形的顶点。顶点着色器一般用写在 HTML 中，并标上 HTML 无法识别的 type,这样浏览器就不会解释执行。
顶点的 X,Y,Z 轴的取值范围全部是-1 到 1 之间，所以要注意变换坐标。

```js
<script id="vs" type="x-shader/x-vertex">
  attribute vec3 position;
  uniform   mat4 mvpMatrix;

  void main(void){
      gl_Position = mvpMatrix * vec4(position, 1.0);
  }
</script>
```

前面的 mvpMatrix 矩阵是坐标变换用的，因为我们在实际渲染可能要应用到很多的矩阵变换以渲染到屏幕上。这部分知识可以看看基本的图形学相关书籍，我看的是《DIRECTX.9.0.3D 游戏开发编程基础》，里面介绍了相关的矩阵概念和数学知识。顶点着色器负责绘制图元的顶点信息，接下来就要使用片段着色器绘制相关的颜色信息。

### 片段着色器

片段着色器接收到顶点着色器的顶点信息并在此位置绘制相应的颜色值。颜色的取值范围是 0 到 1.

```js
<script id="fs" type="x-shader/x-fragment">
    void main(void){
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }
</script>
```

使用片段着色器可以给相应的顶点设置颜色值，在顶点与顶点之间的位置使用插值法设置颜色值。

渲染管道可以参考这张比较形象的流程图：

![WebGl Pipeline](http://www.tutorialspoint.com/webgl/images/webgl_graphics_pipeline.jpg)

## texture

GPU 运算里面有个非常常用的数据结构，那就是 texture，既可以存储图片数据，也可以存储 frame 数据。对于离屏渲染非常重要，不过在 GPU 运算里面非常重要的一点是一个变量不能既作为输入有作为输出。
在 CPU 运算里面我们经常写： `a=a+1` 但是在 GPU 运算里面是不能这样操作的，需要有一个临时变量存储输出的值，然后再传入到最终变量中。类似于：`b=a+1;a=b`这样。所以对于动画渲染，我们需要使用两个 framebuffer
相互交换进行渲染。

## 离屏渲染

对于复杂的图形渲染，可能一次描绘无法完成最终效果，这时候我们可以把渲染的中间效果存储到 framebuffer 里面，再下一次渲染的时候继续使用，只需要简单的在渲染之前绑定 framebuffer 即可。

```js
gl.bindFramebuffer(gl.FRAMEBUFFER, Cube.FboHandle);
```

## 相关学习资料

[WebGL MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)

[WebGL 開発支援サイト](https://wgld.org/)

[WebGL 入门](http://blog.csdn.net/column/details/webgl.html)
