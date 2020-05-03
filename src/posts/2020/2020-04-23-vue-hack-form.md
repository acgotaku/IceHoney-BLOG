---
title: Vue表单组件如何自动化输入
date: 2020-04-23 22:43
comments: true
archives: 2020
tags:
  - frontend
  - vue
---

使用 Vue 的数据双向绑定功能可以很方便的完成表单的数据收集和提交，再也不用自己手动监听事件和收集数据了。但同时自动化输入也变得复杂起来。

## 传统表单自动化输入

对于传统的表单我们可以很简单的自动化输入过程，例如`checkbox`和`input`元素，我们可以自动选中和输入内容：

```js
document.querySelector('.checkbox').checked = true;
document.querySelector('.input').value = true;
```

当用户提交的时候，程序会读取相应元素的值，然后填充到请求里。

## Vue 组件自动化输入

这里我们以现在流行的[Element](https://element.eleme.io/#/en-US)为例子演示如何自动化输入。用过 Vue 的人都知道， `v-model`是用来进行双向绑定的。它的原理是：

```js
Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `
});
```

到这里，我们就知道了通过`$emit('input', value)`的方式，可以绑定想要输入的值，直接使用传统方式修改`input`元素的值，有时候不会触发`input`事件，所以不是一个可行的办法。

接下来，我们讲下如何选中元素并调用`$emit`，例子是 Vue 官网的[搜索框](https://element.eleme.io/#/en-US/component/input)

```js
const input = document.querySelector('.el-input');
input.__vue__.$emit('input', 'Hello world');
```

在`console`里输入这两行代码，你会发现搜索框里被填入了`Hello World`。Vue 实例被隐藏到了 DOM 中，只要知道如何访问 Vue 然好调用`$emit`，问题就迎刃而解。

## 总结

现在的前端框架用起来方便，但也隐藏了大量细节。导致做自动化的时候不知道如何下手，尝试修改元素的值，但发现提交的时候还是没有带上正确的数值。这时候就需要思考框架绑定数据的本质是什么，
弄清了本质，其实做起来发现更简单！
