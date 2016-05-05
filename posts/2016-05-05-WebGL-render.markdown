---
layout: post
title: "WebGL渲染的知识介绍"
date: 2016-05-05 10:43
comments: true
tags: WebGL
---

来到日本导师的研究方向是计算机图形学，由于我比较擅长Web开发，便选择了WebGL进行图形渲染的研究课题。学习了大半年，也该写点东西介绍下自己对WebGL的理解，如有错误，欢迎批评指正。


#WebGL介绍

WebGL是基于OpenGL ES 2.0文档进行开发的，所以想了解相关API的话，直接查阅官方的[OpenGL ES 2.0文档](https://www.khronos.org/registry/gles/specs/2.0/es_full_spec_2.0.25.pdf)即可.WebGL的一大优势是可以使用GPU资源来进行图形渲染和相关的计算，但是使用GPU资源的话必须使用对于GPU友好的语言来进行编写，WebGL使用[GLSL](https://en.wikipedia.org/wiki/OpenGL_Shading_Language)来编写用于GPU渲染的着色器。
JavaScript主要负责整个渲染流程的控制和GPU与CPU之间的数据交互，繁重的坐标变换计算全部交给GPU来处理。


#WebGL渲染管道

##获取WebGL
WebGL是基于canvas画布来进行渲染的，首先我们要使用`getContext`方法来获取gl对象。并判断浏览器是否支持WebGL.

		var gl = null;
		try{
		    gl = canvas.getContext('experimental-webgl');
		    if(gl == null){
		        gl = canvas.getContext('webgl');
		    }
		}
		catch(error){}

		if(gl != null){
		    // WebGL is supported 
		}
		else{
		    // WebGL is not supported
		}

##顶点着色器

WebGL只支持绘制基本图元，复杂的图形也是有基本图元组合而成的，基本图元包括点、线段或三角形。三角形是最经常用来使用的，因为3D空间中的任何3个点都是一个三角形的顶点。顶点着色器一般用写在HTML中，并标上HTML无法识别的type,这样浏览器就不会解释执行。
顶点的X,Y,Z轴的取值范围全部是-1到1之间，所以要注意变换坐标。


        <script id="vs" type="x-shader/x-vertex">  
            attribute vec3 position;  
            uniform   mat4 mvpMatrix;  
              
            void main(void){  
                gl_Position = mvpMatrix * vec4(position, 1.0);  
            }  
        </script>  

前面的mvpMatrix矩阵是坐标变换用的，因为我们在实际渲染可能要应用到很多的矩阵变换以渲染到屏幕上。这部分知识可以看看基本的图形学相关书籍，我看的是《DIRECTX.9.0.3D游戏开发编程基础》，里面介绍了相关的矩阵概念和数学知识。顶点着色器负责绘制图元的顶点信息，接下来就要使用片段着色器绘制相关的颜色信息。

##片段着色器
片段着色器接收到顶点着色器的顶点信息并在此位置绘制相应的颜色值。颜色的取值范围是0到1.

        <script id="fs" type="x-shader/x-fragment">  
            void main(void){  
                gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);  
            }  
        </script> 

使用片段着色器可以给相应的顶点设置颜色值，在顶点与顶点之间的位置使用插值法设置颜色值。

渲染管道可以参考这张比较形象的流程图：

![WebGl Pipeline](http://www.tutorialspoint.com/webgl/images/webgl_graphics_pipeline.jpg)

#texture
GPU运算里面有个非常常用的数据结构，那就是texture，既可以存储图片数据，也可以存储frame数据。对于离屏渲染非常重要，不过在GPU运算里面非常重要的一点是一个变量不能既作为输入有作为输出。
在CPU运算里面我们经常写： `a=a+1` 但是在GPU运算里面是不能这样操作的，需要有一个临时变量存储输出的值，然后再传入到最终变量中。类似于：`b=a+1;a=b`这样。所以对于动画渲染，我们需要使用两个framebuffer
相互交换进行渲染。

#离屏渲染

对于复杂的图形渲染，可能一次描绘无法完成最终效果，这时候我们可以把渲染的中间效果存储到framebuffer里面，再下一次渲染的时候继续使用，只需要简单的在渲染之前绑定framebuffer即可。

		gl.bindFramebuffer(gl.FRAMEBUFFER, Cube.FboHandle);  

#相关学习资料

[WebGL MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)

[WebGL 開発支援サイト](https://wgld.org/)

[WebGL入门](http://blog.csdn.net/column/details/webgl.html)