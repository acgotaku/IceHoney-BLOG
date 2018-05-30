---
layout: post
title: "如何封装第三方vue组件"
date: 2018-05-29 23:19
comments: true
tags: javascript vue
---

终于算是正式接触SPA的前端工作了，最近在解决很多Vue组件的问题，其中就有一个针对第三方组件的定制化需求，花了不少时间来折腾。

# 解决v-model绑定

这次封装的就是element的前端vue框架，因为框架本身对IOS兼容性不好，所以需要二次封装。封装的是一个select组件。所以需要数据的双向绑定，官方教程也已经解释了。
[v-model](https://vuejs.org/v2/guide/components-custom-events.html#Customizing-Component-v-model) 本质上就是绑定一个值和监听相应的事件。
这次本质是封装的一个input元素，所以我们需要手动绑定value和监听事件。

    <template>
      <el-select
        v-bind:value="value"
        v-on="$listeners">
      </el-select>
    </template>

官方文档也解释了这个内置变量的用法[vm-listeners](https://vuejs.org/v2/api/#vm-listeners)

# 继承父元素的属性

父元素的属性继承可以使用`v-bind="$attrs"`来完成。所以完成组建的透明封装只需要加上三个指令。

    <template>
      <el-select
        v-bind="$attrs"
        v-bind:value="value"
        v-on="$listeners">
      </el-select>
    </template>


虽然知道答案之后很简单，但是探索的过程中还是比较花时间的。希望能帮助大家解决这个问题，如果有什么疏漏之处，也请大家指正。
