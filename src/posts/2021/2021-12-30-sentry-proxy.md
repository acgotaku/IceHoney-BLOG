---
title: 代理Sentry的请求
date: 2021-12-30 22:21
comments: true
archives: 2021
tags:
  - web
---

[Sentry](https://sentry.io/)是一款非常不错的网页监控工具，可以帮忙收集网页端的报错方便分析用户使用过程中遇到的问题。但是因为有收集用户隐私的风险，有些广告屏蔽软件会屏蔽 Sentry 的请求，所以我们需要使用反向代理的方式，让 Sentry 把请求发到我们自己的后端，我们再转发到 Sentry 服务器上。

## Sentry 端配置

添加 `tunnel` 选项，Sentry 就会把请求发到这个路径下，然后我们后台再处理转发。

```js
Sentry.init({
  dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0',
  tunnel: '/sentry'
});
```

## 后台转发请求

```js
app.set('trust proxy', true);

app.use(compression());
app.use(express.text());
app.use(express.json());
// 注意这三行代码一定要放在前面才能正常处理请求

app.post(/^\/sentry/, (req, res) => {
  const envelope = req.body;
  const piece = envelope.split('\n')[0];
  const header = JSON.parse(piece);
  if (header.dsn) {
    const dsn = new URL(header.dsn);
    const projectId = dsn.pathname.substr(1);
    const options = {
      hostname: dsn.hostname,
      port: 443,
      path: `/api/${projectId}/envelope/`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-sentry-envelope',
        'X-Forwarded-For': req.ip
      }
    };
    const request = https.request(options);
    request.write(envelope);
    request.end();
  }
  res.json({});
});
```

后台 Web 服务器是使用经典的 express，转发的时候记得开启`trust proxy`，因为我们的服务器基本会放在 Load balancing 后面，为了获取到真实的客户 IP 地址，我们需要层层转发保证收集到的信息是真实 IP 地址，而不是我们后端 IP 地址。

## 总结

Sentry 的反向代理本身并不是很复杂，但是网络上并没有相关的 JS 代码实现和处理 IP 转发问题，所以希望我的代码例子能帮助大家快速的解决这个问题。

## 参考

[Dealing with Ad-Blockers](https://docs.sentry.io/platforms/javascript/troubleshooting/#dealing-with-ad-blockers)
