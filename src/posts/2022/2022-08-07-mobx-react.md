---
title: 使用MobX管理React的状态
date: 2022-08-07 14:43
comments: true
archives: 2022
tags:
  - react
---

使用 PWA 框架进行应用开发，不论是 Vue 还是 React，最关注的设计应该就是状态的管理了。React 生态下状态管理的框架可谓是五花八门，本人目前用过两个，分别是
[@reduxjs/toolkit](https://redux-toolkit.js.org/) 和 [mobx-react](https://mobx.js.org/react-integration.html)。
个人感觉 Mobx 用起来更简洁，所以本文着重介绍 Mobx。

## 安装 MobX

MobX 本来就可以独立 PWA 框架来使用，所以安装的时候需要安装本体和 React 集成库。

```bash
pnpm install mobx-react-lite mobx
```

## 设计 Store

为了测试 MobX 的使用，我写了一个简单的 Todo 例子，接下来讲解如何设计 Store 方便使用。

```ts
export class TodoList {
  @observable.shallow list: TodoItem[] = [];

  constructor() {
    makeObservable(this);
  }

  @action
  private fromJS = () => {
    this.list = this.list.map(
      todo => new TodoItem(todo.title, todo.id, todo.completed)
    );
  };

  @action
  addTodo = (text: string) => {
    this.list.push(new TodoItem(text));
  };

  @action
  removeTodo = (todo: TodoItem) => {
    this.list.splice(this.list.indexOf(todo), 1);
  };

  @action
  removeCompleted = () => {
    this.list = this.activeTodos;
  };

  @action
  toggleAll = (value: boolean) => {
    this.list.forEach(todo => {
      todo.updateCompleted(value);
    });
  };

  @computed
  get showTodo(): boolean {
    return this.list.length > 0;
  }

  @computed
  get allTodos(): TodoItem[] {
    return this.list;
  }

  @computed
  get completedTodos(): TodoItem[] {
    return this.list.filter(todo => todo.completed);
  }

  @computed
  get activeTodos(): TodoItem[] {
    return this.list.filter(todo => !todo.completed);
  }
}
```

不同于 React Hooks 函数式声明，Mobx 我们推荐使用 Class 方式来声明，通过修饰符来绑定属性和方法对应 MobX 的相关概念。MobX 推荐使用 action 进行数据的更改，使用 computed 完成对数据的筛选和处理。不建议直接更改声明的数据。

## 设计全局 Store

```ts
export type RootStore = {
  todoList: TodoList;
};

export const store: RootStore = {
  todoList
};

const StoreContext = React.createContext<RootStore>(store);

export const StoreProvider = StoreContext.Provider;

export const useStore = () => React.useContext(StoreContext);
```

通过声明全局 Store，模块化设计各个子 Store，这里虽然只有一个 todoList， 但可以根据应用规模添加子模块，方便扩展。

## Root 导入 Store

```tsx
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider value={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
```

在 React 根节点声明 Store， 保证整个应用都可以同步到 store 的数据。

## 封装 View

我们需要在使用 store 的地方，调用 observer 保证状态的更新能及时反应到视图上。

```tsx
const TodoView = () => {
  const { todoList } = useStore();

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
      </header>
    </section>
  );
};

export default observer(TodoView);
```

## 总结

MobX 的状态更新原理是基于 [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)。 通过代理声明的数据对象，在读取和写入的时候执行相关回调进行更新。

## 参考

[mobx-react-todo](https://github.com/acgotaku/mobx-react-todo)
