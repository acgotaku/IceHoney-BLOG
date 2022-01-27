---
title: React 实现 Tabs 组件
date: 2022-01-27 20:16
comments: true
archives: 2022
tags:
  - react
---

基于 Vue 框架来实现各种 UI 组件之前有讲过，并且讲述了复合组件如何传递数据。一种方式是使用 `Provide / inject`， 另外一种是传统的 `props` 和 `$emit()`。
但是 React 下复合组件如何实现，和 Vue 相比差距还是挺大的。接下来就讲述经典的 Tabs 组件如何来实现。

## Tabs 组件介绍

Tabs 是复合组件。`Tabs` 组件封装逻辑和显示上部的导航栏。 `TabPane` 用来传递属性和展示要显示的内容。具体使用请看下面的代码：

```tsx
<Tabs>
  <TabPane label="文档" name="doc">
    文档
  </TabPane>
  <TabPane label="快速起步" name="start">
    快速起步
  </TabPane>
  <TabPane label="帮助" name="help">
    帮助
  </TabPane>
</Tabs>
```

这里 TabPane 的两个属性，一个是用来展示 Tabs 的文本，一个用来标注组件的 `key`，所以 `name` 属性必须是独一无二的。

## Tabs 组件的实现

React 框架可以通过 `children` 属性访问子组件，我们就利用这个特性来获取 TabPane 组件的相关属性。

```tsx
export interface TabsProps {
  children: React.ReactNode;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({ children, className = '' }) => {
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    const firstChild = React.Children.toArray(children)[0];
    if (firstChild && React.isValidElement(firstChild)) {
      setActiveTab(firstChild.props.name);
    }
  }, [children]);

  return (
    <div className={cls(styles.tabs, className)}>
      <div className={styles.tabsNav}>
        {React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            const { name, label, disabled } = child.props;
            return (
              <button
                key={name}
                className={cls(styles.tabsNavButton, {
                  [styles.active]: name === activeTab
                })}
                disabled={disabled}
                onClick={() => setActiveTab(name)}
              >
                {label}
              </button>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className={styles.tabsContent}>
        {React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            const { name, children } = child.props;
            if (name === activeTab) {
              return children;
            } else {
              return null;
            }
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};
```

Tabs 组件负责维护 activeTab 状态，并且根据用户操作显示正确的 TabPane。相比之下 TabPane 组件的实现就非常简单：

```tsx
export interface TabPaneProps {
  label: string;
  name: string;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

const TabPane: React.FC<TabPaneProps> = ({ children, className = '' }) => {
  return <div className={cls(styles.tab, className)}>{children}</div>;
};
```

只是单纯的封装了一下要展示的内容而已。

## 总结

React 框架在实现复合组件的时候和 Vue 的方式有很大差异，不过 React 的逻辑看起来更加简单和易用。自己动手实现 UI 组件对于每个前端工程师来说都是成长道路上必不可少的一项技能，软件开发中没有银弹，我们不能总是依赖第三方 UI 库来实现界面。花费在适配第三方软件库的时间绝对不亚于自己手写一个组件的时间。

## 参考

[Tabs 标签栏 - Semi Design](https://semi.design/zh-CN/navigation/tabs)
