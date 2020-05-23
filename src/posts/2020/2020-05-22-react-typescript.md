---
title: React的TypeScript写法
date: 2020-05-22 22:43
comments: true
archives: 2020
tags:
  - frontend
  - react
---

最近在用 React 写前端，不得不说 React 对 TypeScript 的支持比 Vue 好，Vue 的话，在组件传 Prop 的时候会丢失静态检查。

## React 组件写法

目前 React 有两种写法，一种是 Class Components，另外一种是 Function Components。这两种写法都可以，不过如何选择呢？ 个人倾向于复杂的组件需要管理生命周期或者事件响应的话使用 Class Components，简单的组件例如只是展示一个按钮或者链接。使用 Function Components。 因为 Function Components 写起来代码更短。

## Class Components

```tsx
import React, { ReactNode } from 'react';

interface ButtonProps {
  disabled?: boolean;
  children: ReactNode;
}

interface ButtonStates {
  count: number;
}

class Button extends React.Component<ButtonProps, ButtonStates> {
  static defaultProps = {
    disabled: false
  };

  constructor(props: ButtonProps) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    const { disabled, children } = this.props;

    return <button disabled={disabled}>{children}</button>;
  }
}

export default Button;
```

上面的例子演示了如何定义属性和状态，并且设置默认属性值和初始化状态。

## Function Components

```tsx
import React, { ReactNode } from 'react';

interface ButtonProps {
  disabled?: boolean;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ disabled = false, children }) => {
  return <button disabled={disabled}>{children}</button>;
};

export default Button;
```

Function Components 不能直接传入 state 参数，需要使用 `useState` 函数来处理。

## 总结

React 写起来非常方便，但是条件渲染还是没有 Vue 方便。由于没有官方的 TypsScript 例子。只能自己总结一下方便以后使用了。
