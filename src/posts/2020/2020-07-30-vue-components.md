---
title: Vue中组件的设计
date: 2020-07-30 22:08
comments: true
archives: 2020
tags:
  - frontend
  - vue
---

Vue 中组件设计经常遇到复合组件的问题，例如下拉菜单，下拉菜单中我们不仅要实现`select`元素的功能，还要实现`option`元素的功能，这样才是一个完整的下拉菜单组件。

## 复合组件中的数据相互访问

复合组件中的数据访问是设计组件的一个重要议题，设计不好会严重影响组件的灵活性。我们拿 Element UI 的组件来举个例子：

```html
<el-select v-model="value" placeholder="请选择">
  <el-option
    v-for="item in options"
    :key="item.value"
    :label="item.label"
    :value="item.value"
  >
  </el-option>
</el-select>
```

这是一个经典的例子，但是实际使用过程中，我们可能会二次封装组件,例如我们需要给`el-option`加一些事件或者样式，那我们的代码会变成这样：

```html
<el-select v-model="value" placeholder="请选择">
  <styled-el-option
    v-for="item in options"
    :key="item.value"
    :label="item.label"
    :value="item.value"
  >
  </styled-el-option>
</el-select>
```

`styled-el-option` 是我们二次封装的组件，里面包含了`el-option`组件。如果我们使用`$parent`在`el-option`组件中访问`el-select`组件的话，二次封装的情况下就会出错。
因为`el-option`的父组件不再是`el-select`，而是`styled-el-option`。正确的数据访问方式是使用`provide` 和 `inject`。

## 子组件访问父组件

首先我们需要在父附件中这样定义：

```js
provide: function () {
  return {
    'select': this
  }
}
```

然后在子组件中使用`inject`:

```js
inject: ['select']
```

这样子组件就可以访问父组件了，使用`provide`的好处是不用担心复合组件中的再封装问题，Vue 会自动向上查找。

# 父组件访问子组件

Vue 中并没有提供非常方便的查找子组件的功能， 所以目前的方法是在父组件中存储子组件的实例。

父组件中定义数据：

```js
data: function () {
  return {
    options: []
  }
}
```

子组件通过`inject`可以访问父组件，所以：

```js
  created() {
    this.select.options.push(this);
  }
```

在创建组件的时候同时传入父组件的`data`字段中。

## 总结

灵活的设计组件才能在实际开发中更方便的使用，一些第三方组件开发的时候没有考虑到二次封装的可能性，直接通过`$parent`和`$children`进行数据的更新。导致可用性大大降低。

## 参考

[Dependency Injection](https://vuejs.org/v2/guide/components-edge-cases.html#Dependency-Injection)
