(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{387:function(t,r,e){"use strict";e.r(r);var a=e(9),s=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("我司的产品终于发布了新版本，所以忙碌的开发暂时告一段落。最近在做下一期的规划，然后就是要做前端网站来满足用户的需求。由于我们的产品是和地图强相关的，所以也对地图做了很多调研。")]),t._v(" "),e("h2",{attrs:{id:"基本需求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本需求"}},[t._v("#")]),t._v(" 基本需求")]),t._v(" "),e("p",[t._v("产品需要在国内和国外使用，费用合理，可以换地图的贴图并且能在地图上绘制各种信息。例如多边形或圆形还有贝塞尔曲线。")]),t._v(" "),e("h2",{attrs:{id:"mapkit-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mapkit-js"}},[t._v("#")]),t._v(" MapKit JS")]),t._v(" "),e("p",[t._v("苹果居然也出了网页版本的地图产品"),e("a",{attrs:{href:"https://developer.apple.com/maps/mapkitjs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MapKit JS"),e("OutboundLink")],1),t._v("，可谓是良心。但是目前还处于 Beta 版本。如果以后要考虑产品的全平台化，显然不是一个很好的选择。不过苹果的产品可以在国内国外使用不用太担心地图偏移问题，而且可以贴图和绘制图形，但是目前网页版还不能绘制贝塞尔曲线，iOS 客户端倒是可以。")]),t._v(" "),e("h2",{attrs:{id:"mapbox"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mapbox"}},[t._v("#")]),t._v(" MapBox")]),t._v(" "),e("p",[t._v("MapBox 是一个地图服务提供商，经过调研 MapBox 使用最新的 WebGL 技术来渲染，摆脱了传统的下 tile 来贴图的方式，渲染速度得到了大大的提升。也能解决国内和国外的地图显示问题，但是画图功能就只有画线和多边形。不过提供了底层的画图层的接口，需要自己写 WebGL 的 shader。这就增加了开发成本。。。")]),t._v(" "),e("h2",{attrs:{id:"googlemap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#googlemap"}},[t._v("#")]),t._v(" GoogleMap")]),t._v(" "),e("p",[t._v("谷歌地图当然好，但是我最后才说。因为谷歌无法在国内使用，这种情况下我就不得不写两套接口来对应，例如国内高德地图，国外谷歌地图，会大大增加开发成本。而且谷歌地图最近刚升级付费条款，费用是按照请求次数来收，所以用户大量增长之后的开销也会非常大。不过谷歌也不能画贝塞尔曲线。。。")]),t._v(" "),e("h2",{attrs:{id:"地理坐标系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#地理坐标系"}},[t._v("#")]),t._v(" 地理坐标系")]),t._v(" "),e("p",[t._v("由于是需要在地图上绘制新的 tiles，所以自然就涉及到坐标的转换和计算。如何计算一个经纬度落在哪一张 tiles 上，以及在不同缩放级别下 tiles 的正常显示和重绘。这些都是需要自己来实现的。\n这里有一个还算有名的官方介绍，并给出了 Python 的源码。可以参考"),e("a",{attrs:{href:"http://www.maptiler.org/google-maps-coordinates-tile-bounds-projection/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这个"),e("OutboundLink")],1),t._v("来进行实现。")]),t._v(" "),e("h2",{attrs:{id:"坐标系转换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#坐标系转换"}},[t._v("#")]),t._v(" 坐标系转换")]),t._v(" "),e("p",[t._v("每个国家都有自己的坐标系系统，虽然 GPS 使用的"),e("a",{attrs:{href:"https://epsg.io/4326",target:"_blank",rel:"noopener noreferrer"}},[t._v("WGS 84"),e("OutboundLink")],1),t._v("标准非常流行，但是这个是美国制定的。每个国家当然都需要根据自己国家需要来定制自己的标准。例如中国就有北京 54 坐标系，西安 80 坐标系。北京 54 和西安 80 是参心坐标系，大地原点分别在苏联和西安。难以表达高度信息，目前国家正在推广"),e("a",{attrs:{href:"https://epsg.io/4479",target:"_blank",rel:"noopener noreferrer"}},[t._v("2000 国家大地坐标系"),e("OutboundLink")],1),t._v(",这个和 WGS84 一样是地心坐标系，即以地球质量中心为原点。日本也有自己的平面直角坐标系，我们当然需要各种坐标转换，还好有现成的开源项目"),e("a",{attrs:{href:"https://github.com/proj4js/proj4js",target:"_blank",rel:"noopener noreferrer"}},[t._v("proj4js"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",[t._v("各个地图服务商都各有优劣，但却没有一款完美的。主要是用途也比较特殊，可能在地图服务上进行二次开发的可能性比较高吧。不过提供地图服务的也没几家可以选择的。。。")])])}),[],!1,null,null,null);r.default=s.exports}}]);