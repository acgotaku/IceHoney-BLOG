---
title: Vue中如何设计面包屑
date: 2019-07-28 23:21
comments: true
tags:
  - vue
---

最近做的项目层级结构比较深，需要使用面包屑来定位用户所在的位置，方便用户跳转层级。所以就遇到 web app 如何设计面包屑问题。

## 根据路由匹配设置面包屑

当路由是下面这种情况的时候：

```js
let routes = [
  {
    path: '/users',
    name: 'users-index',
    meta: {
      text: 'Users'
    },
    children: [
      {
        path: 'settings',
        name: 'user-setting'
      },
      // ...
    ]
  }
```

我们可以使用`$route.matched`属性来生成面包屑。示例代码如下：

```html
<ul>
  <li v-for="route in $route.matched">
    <router-link :to="{name: route.name}">
      {{ route.meta.text }}
    </router-link>
  </li>
</ul>
```

这种方法只适用于解决静态面包屑，当我们需要处理例如路径是`users/1/settings`这种情况，显然路由匹配就不是最佳选择了。并且路由层级的加深也并不意味着页面嵌套的加深。
当资源层级很深的时候，我们需要做很多空的父节点来处理。

## 每个页面设置面包屑

```js
let routes = [
  {
    path: '/users/userId(\\d+)',
    component: userLayout
    children: [
      {
        path: 'settings',
        name: 'user-setting'，
        component: userSettings
      },
      {
        path: '',
        name: 'user-dashboard'
      }
      // ...
    ]
  }
]
```

当 URL 路径是`users/1/settings`的时候，我们期望的面包屑应该是`Users > Lee > Settings`。但是我们要怎么达到这个效果呢，特别是姓名信息我们还需要异步从服务器获取。

解决办法是使用`Vuex`来存储面包屑的信息。有使用数组来存储面包屑的方案，但是需要注意面包屑加入的顺序问题。为了更灵活的控制面包屑，我选择了使用链表的方式来存储面包屑。

### 定义数据结构

下面来看看面包屑的结构。

```js
interface BreadCrumb {
  key: symbol;
  text?: string;
  to?: Route;
}

interface BreadCrumbItem {
  prev: BreadCrumbList;
  breadCrumb: BreadCrumb;
  next: BreadCrumbList;
}
type BreadCrumbList = BreadCrumbItem | null;
```

使用双向链表可以更方便的查询节点，每个节点主要存储三个信息，key 主要用来标识这个节点的唯一性，所以是`Symbol`类型，text 是当前节点展示的文本，to 是配合 vue-router 跳转到其他页面。
prev 和 next 当然就是指向上一个节点或者下一个节点啦。

### 定义 state 和 mutation

```js
const state = {
  breadCrumbList: null,
  breadCrumbTail: null
};
```

state 里存储的分别是面包屑的头指针和尾指针。这样方便使用。

```js
const mutations = {
  set(state, breadCrumbItem) {
    state.breadCrumbList = breadCrumbItem;
    state.breadCrumbTail = state.breadCrumbList;
  },
  add(state, breadCrumbItem) {
    if (state.breadCrumbTail) {
      state.breadCrumbTail.next = breadCrumbItem;
      breadCrumbItem.prev = state.breadCrumbTail;
      state.breadCrumbTail = breadCrumbItem;
    }
  },
  replace(state, breadCrumbItem) {
    let point = state.breadCrumbList;
    while (point) {
      if (point.breadCrumb.key === breadCrumbItem.breadCrumb.key) {
        point.breadCrumb.text = breadCrumbItem.breadCrumb.text;
        point.breadCrumb.to = breadCrumbItem.breadCrumb.to;
        return;
      } else {
        point = point.next;
      }
    }
  },
  remove(state, breadCrumbItem) {
    let point = state.breadCrumbTail;
    while (point) {
      if (point.breadCrumb === breadCrumbItem.breadCrumb) {
        let before = point.prev;
        let after = point.next;
        if (before) {
          before.next = after;
        } else {
          state.breadCrumbList = after;
        }
        if (after) {
          after.prev = before;
        } else {
          point.next = null;
        }
        return;
      } else {
        point = point.prev;
      }
    }
  },
  empty(state, breadCrumbItem) {
    state.breadCrumbList = null;
    state.breadCrumbTail = null;
  }
};
```

面包屑提供的方法有，set, add, replace, remove, empty。 功能都顾名思义。

### 每个组件设置面包屑

根据上面的路由设计，我们需要在`userLayout`组件里面完成`Users > Lee`前两级面包屑的填充。然后在`userSettings`组件里完成最后一级面包屑的填充。
由于第二级面包屑需要异步请求数据去填充，所以我们需要先事先添加一个空面包屑，之后再 replace。

```js
// userLayout

mounted() {
  const breadCrumbIndex = {
    prev: null,
    breadCrumb: {
      key: Symbol('users'),
      text: 'Users',
      to: {
        name: 'user-index'
      }
    },
    next: null
  }
  const breadCrumbItem = {
    prev: null,
    breadCrumb: {
      key: Symbol('users')
    },
    next: null
  };
  store.commit('set', breadCrumbIndex)
  store.commit('add', breadCrumbItem);
  axios.get(`/api/user/${userId}`).then(res => {
    store.commit('replace', {
      ...breadCrumbItem,
      breadCrumb: {
        ...breadCrumbItem.breadCrumb,
        text: res.data.name,
        to: {
          name: 'user-dashboard'
        }
      }
    })
  })
  this.$once('hook:beforeDestroy', () => {
    store.commit('remove', breadCrumbIndex);
    store.commit('remove', breadCrumbItem);
  })
}

// userSettings

mounted() {
  const breadCrumbItem = {
    prev: null,
    breadCrumb: {
      key: Symbol('users'),
      name: 'Settings',
      to: this.$router.currentRoute
    },
    next: null
  };
  store.commit('add', breadCrumbItem);
  this.$once('hook:beforeDestroy', () => {
    store.commit('remove', breadCrumbItem);
  })
}
```

### 组件切换生命周期的执行顺序

当我们加载 `userDashboard` 并切换到 `userSettings` 页面的时候，组件执行生命周期执行顺序是。

```
beforeCreate userDashboard
created userDashboard
beforMount userDashboard
mounted userDashboard  // userDashboard show
beforeCreate userSettings // route to userSettings
created userSettings
beforMount userSettings
beforeDestory userDashboard
destroyed userDashboard
mounted userSettings
```

我们发现组件在`beforeDestory`后面之前的是`mounted`。所以如果把添加面包屑的代码放在`beforeMount`里的时候，其实是先添加面包屑再删除之前的面包屑的。不过好在我们用的是链表，所以顺序不影响面包屑的生成。

### 生成面包屑

```js
breadCrumb() {
  const breadcrumb = [];
  let point = store.state.breadCrumbList;
  while (point && point.breadCrumb.name) {
    breadcrumb.push(point.breadCrumb);
    point = point.next;
  }

  return breadcrumb;
}
```

把面包屑的链表转换成数组，然后使用 vue 的`v-for`来渲染就可以了。

## 总结

面包屑的这两种实现方式我都有尝试过，个人感觉针对动态面包屑第二种方式比较优雅。如果你有更好的实现方式，欢迎讨论。

参考：

[Handling breadcrumbs with VueX in a VueJS Single Page Application](https://mauricius.dev/handling-breadcrumbs-with-vuex-in-a-vuejs-single-page-application/)
