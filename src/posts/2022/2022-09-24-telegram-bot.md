---
title: 如何编写Telegram Bot
date: 2022-09-24 11:07
comments: true
archives: 2022
tags:
  - bot
---

最近在处理如何把经纬度转换成日本的 MAPCODE 的问题。在外出行的时候，经常使用的设备都是手机，如何在手机上方便的计算旅游景点的 MAPCODE 然后使用车载导航呢？
我的想法是做一个 Telegram Bot，输入景点的 [Plus Code](https://maps.google.com/pluscodes/), 然后返回 MAPCODE。

## 申请 Bot

首先，你要去找 [BotFather](https://t.me/botfather)申请 Bot。 通过简单的对话就可以创建 Bot。使用 `/start` 命令可以查看所有支持的指令。

输入， `/newbot` 就可以创建 Bot 了，通过对话模式可以设定 Bot 的名字。然后你可以得到一个属于这个 Bot 的 token，格式类似于 `577XXXXX:AAEMUXqXrgRE9R2jPcOXXXXX`。
拿到这个 token 就可以构建 Bot 了。

## 构建 Bot API

Bot API 本质是 HTTPS API，通过构建请求来实现功能。不过构造 HTTPS 请求本身很枯燥，已经有很多现成的框架可供我们使用。本人擅长使用 JavaScript，所以选择了 [telegraf.js](https://github.com/telegraf/telegraf) 这个框架。

## Bot 代码示例

```ts
import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(ctx => {
  const message = `I can help you to query MAPCODE with Telegram.\nYou can copy plus code from Google Maps and paste it to tell me.`;
  ctx.reply(message);
});

bot.help(ctx => {
  ctx.replyWithMarkdownV2(
    'Send me a [plus code](https://maps.google.com/pluscodes/)'
  );
  ctx.reply(`MapDoge Version ${process.env.npm_package_version}`);
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
```

Telegram Bot 默认都支持 `/start` 和 `/help` 命令。所以我就贴出了这两个命令的简单写法。使用成熟的框架可以大大简化编写 Bot 的复杂度。

## 总结

Telegram Bot 有完善的文档和生态，编写一个 Bot 并没有想象的那么难。大家都可以尝试下，非常方便实现在手机端的一些自定义功能。

## 参考

[Bot Code Examples](https://core.telegram.org/bots/samples)

[mapdoge-bot](https://github.com/acgotaku/mapdoge-bot)
