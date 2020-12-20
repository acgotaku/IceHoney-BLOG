---
title: vue实现datepicker组件
date: 2020-11-30 14:07
comments: true
archives: 2020
tags:
  - web
  - vue
---

前端组件化的今天，选择日期组件算是最复杂的一个了吧。我们需要考虑日期显示的多语言，弹框的显示位置，以及日期月份的计算。

## 日期相关计算

计算每个月的天数，这个是不变的。一三五七八十腊，三十一天永不差；四六九冬三十整，惟有二月二十八，闰年还要把一日加。

```ts
function getDayCountOfMonth(year: number, month: number) {
  if (month === 3 || month === 5 || month === 8 || month === 10) {
    return 30;
  }

  if (month === 1) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return 29;
    } else {
      return 28;
    }
  }

  return 31;
}
```

计算每个月的 1 号是周几：

```ts
function getFirstDayOfMonth(date: Date) {
  const temp = new Date(date.getTime());
  temp.setDate(1);
  return temp.getDay();
}
```

其他计算函数可以去看完整代码[date.ts](https://github.com/acgotaku/vue-datepicker/blob/master/src/utils/date.ts)

## 弹窗定位相关

点击日期输入框，需要弹出下拉菜单，下拉菜单位置的计算并不简单，需要考虑到浏览器的窗口，如果输入框在下方，需要在上方弹出，如果输入框在上方，需要在下方弹出。
并且用户滑动到可视范围以外的话，还要可以隐藏。所以我们这里引用了一个比较成熟的第三方库来解决这个问题。
[popperjs](https://github.com/popperjs/popper-core)
这个库可以帮我们解决上面的问题，节约开发的成本。

## 多语言支持

日期选择组件，是为数不多需要做多语言支持的组件。因为我们要显示月份和每周的名字。就不得不做多语言处理了。目前我做的 demo 里面包含了三种语言的支持。

## 总结

日期选择组件，常见的需求有单日期选择和日期范围选择。优秀的组件需要同时满足这两个需求。并且尽量保证代码的简洁性。为此，我在 Github 写了一个 demo 库，希望可以给大家参考。

[vue-datepicker](https://github.com/acgotaku/vue-datepicker)
