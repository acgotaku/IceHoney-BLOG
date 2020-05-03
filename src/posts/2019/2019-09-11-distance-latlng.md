---
title: 求经纬度两点距离
date: 2019-09-11 22:43
comments: true
archives: 2019
tags:
  - GIS
---

最近一直在做和地图相关的开发，所以一直在研究坐标系，投影相关的知识。整理下，供自己查阅。接下来就讲述描述地球的几种坐标系。

## 世界大地测量系统

世界大地测量系统（World Geodetic System）就是我们常说的经纬度，维度指得是当前地点和赤道的夹角。所以赤道的纬度（Latitude）是 0，北极是正 90,南极是负 90.
经度是本初子午线(Prime meridian)为分界，东边是东经（正值），西边是西经（负值）。当经度为 180 度的时候，我们称之为对向子午线（antimeridian）。当跨过对向子午线的时候，很多相关计算都需要特殊处理，需要注意。这里计算两个坐标的距离的话，由于是球面，其实计算的是两个坐标沿着球面的弧线。本质思想是求出两个坐标的夹角，然后乘以地球半径得出结果。详细细节可以参考[Calculate distance, bearing and more between Latitude/Longitude points](http://www.movable-type.co.uk/scripts/latlong.html)

## 麦卡托投影

世界大地测量系统是三维描述地球的位置信息，对于导航或者显示来说很不方便。所以在平面上使用麦卡托投影（Mercator projection），可以把三维平铺到二维。但是注意，麦卡托投影会使面积发生变形。所以投影出来的坐标是不能直接用来计算距离的。维度越高，变形就越大。所以需要计算[比例因子](https://en.wikipedia.org/wiki/Mercator_projection#Scale_factor)来纠正。但对于两个坐标纬度相差比较大的情况下，计算就更[复杂了](https://gis.stackexchange.com/a/93335)。所以不推荐使用麦卡托投影来计算距离。

## 笛卡尔坐标系

笛卡尔坐标系（Cartesian coordinate system）也称直角坐标系，是我们高中时学过的坐标系。我们可以通过经纬度和地球半径来计算出直接坐标系的 X,Y,Z。然后通过直角坐标系中求两点距离公式，计算出两点距离，不过这个距离是直线距离。如果两点距离很远的情况下，可以看作是我们穿过地球的直线距离。可以借助 Cesium 的[Cartesian3](https://cesiumjs.org/Cesium/Build/Documentation/Cartesian3.html)库方便的完成笛卡尔坐标系的转换和距离计算。

## MapKit 投影

苹果的 MapKit，基于麦卡托投影把经纬度转换成二维坐标。而且做了相关的数学运算，保证投影之后的数值可以像在平面坐标系一样计算距离。不过苹果的实现未知，我也无法在 Web 端使用。

## 总结

坐标系计算中有时候需要考虑坐标的高度信息计算距离，有时候需要计算已知坐标，角度和距离，求另一个坐标， 求两个坐标的插值。 目前还没有找到合适的计算库来解决这些问题。如果大家有相关的建议或者意见，欢迎评论。

参考：

[geodesy](https://github.com/chrisveness/geodesy)

[Displaying Maps](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/MapKit/MapKit.html)

[WGS84 To Mercator](http://epsg.io/transform#s_srs=4326&t_srs=3857)
