---
title: 正则表达式匹配信用卡
date: 2023-07-09 13:41
comments: true
archives: 2023
tags:
  - regex
---

最近在做支付相关的服务，需要检测用户输入的信用卡号是否合法，并且根据信用卡号规则显示对应的信用卡类型。这里记录一下如何使用正则表达式来匹配信用卡号。顺便说一下只有 AE 卡号的 CVV 是 4 位的，其他的都是 3 位。

## 银联卡

银联卡以 62 开头，借记卡是 19 位，信用卡是 14 位。一般支付的时候都是使用信用卡，所以我们只需要匹配 14 位的卡号。

```js
const regex = new RegExp('^62\\d{14}');
```

## Visa

Visa 信用卡以 4 开头，新卡长度为 16 位，旧卡长度为 13 位。

```js
const regex = new RegExp('^4[0-9]{12}(?:[0-9]{3})?');
```

## MasterCard

MasterCard 信用卡以 51 到 55 开头或者是以 2221–2720 开头，长度为 16 位。

```js
const regex = new RegExp('^(5[1-5]\\d{0,2}|22[2-9]\\d{1}|2[3-7]\\d{2})\\d{12}');
```

## Amex

Amex 信用卡以 34 或者 37 开头，长度为 15 位。

```js
const regex = new RegExp('^3[47]\\d{13}');
```

## Jcb

Jcb 信用卡以 35 开头，长度为 16 位。以 2131 或者 1800 开头，长度为 15 位。

```js
const regex = new RegExp('^(?:2131|1800|35\\d{3})\\d{11}');
```

## Diners

Diners 信用卡以 36、38 或者 30[0-5] 开头，长度为 14 位。

```js
const regex = new RegExp('^3(?:0([0-5]|9)|[68]\\d)\\d{11}');
```

## 总结

信用卡号的判断并不复杂，但是很多卡号有些特殊情况，需要注意。

## 参考

[Payment card number](https://en.wikipedia.org/wiki/Payment_card_number)

[Finding or Verifying Credit Card Numbers](https://www.regular-expressions.info/creditcard.html)
