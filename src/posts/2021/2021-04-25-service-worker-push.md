---
title: 使用Service Worker的 Web Push 功能
date: 2021-04-25 12:27
comments: true
archives: 2021
tags:
  - web
---

现代的 Android 应用和 iOS 应用都有相应的推送系统，可以给用户推送消息。即使用户没有打开这个应用，也同样可以收到消息。当然，网页既然要向手机应用靠拢的话，那推送功能也是必不可少。
今天我们就来介绍一下，网页如何实现类似的推送功能。

## 基于 Service Worker 的推送功能

Service Worker 提供了两种推送服务，一种是基于 Firebase Cloud Messaging 的推送功能，一种是基于 VAPID 的推送功能。第一种已经过时了，所以本文只介绍第二种。

### Create a public/private key pair

首先，我们需要创建公钥和私钥，类似与 HTTPS 的 RSA 加密。客户端使用公钥订阅推送，服务端使用私钥来发送通知。创建既可以在浏览器进行，也可以使用 Node 创建。当然，推荐在后端生成更安全。

前端生成代码参考链接：[util.ts](https://github.com/acgotaku/sw-push/blob/master/src/utils/util.ts)

后端使用[web-push](https://github.com/web-push-libs/web-push)可以更方便的生成公钥和私钥。代码如下：

```js
function generateVAPIDKeys() {
  const vapidKeys = webpush.generateVAPIDKeys();

  return {
    publicKey: vapidKeys.publicKey,
    privateKey: vapidKeys.privateKey
  };
}
```

### Subscribing with the public key

接下来我们需要订阅推送：

```js
navigator.serviceWorker.ready
  .then(registration => {
    return registration.pushManager.getSubscription().then(subscription => {
      if (subscription === null) {
        return registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: this.vapidPublicKey
        });
      } else {
        return subscription;
      }
    });
  })
  .then(subscription => {
    this.subJSON = subscription.toJSON();
  });
```

我们使用公钥进行订阅，并且把订阅之后的内容打印出来，方便服务器使用。实际工程中需要发送给服务器进行保存。使用 Chrome 浏览器订阅的信息是这样的：

```json
{
  "endpoint": "https://fcm.googleapis.com/fcm/send/d3cMmjx0Eg8:APA91bF1i7wgLJRw-VgOh3Evn6RG1xqdOR6Y0CeTUm1xiD36BCHXaDoceVfilDYiifWdI_rWdU8IdJjqSxaCVscRp5zl9lon8u4mf9mha0fmSVKJzUOx5r5Jba2yiNmCFRxxKcTJm51S",
  "expirationTime": null,
  "keys": {
    "p256dh": "BDtGmJB0Bkyum0WJw8NiiCn4U9ckX8UjhzXPUad2HM0yID0ced8zUHKr-Yhf6p2Z7IS0G07dGG7Tnl5jlwQVog4",
    "auth": "25JGSYqTKvj_nAeodHBHSQ"
  }
}
```

我们可以看到推送的网址是 Chrome 提供的服务，Firefox 浏览器下订阅的信息是这样的：

```json
{
  "endpoint": "https://updates.push.services.mozilla.com/wpush/v2/gAAAAABghCrItYXGJw0eCyp0Ae1lTxMXkb6Fxhg8tRck2cMoY4bZjvkV2j5t95FfrPftdieUgeaNthjmb0_XyoIVqWIy7cpy9lMjczHb5TYpC7sKnOw4IekwrtQbmBo6Vn54TZaUSrBIb40PEy2KXF5QlyOj2QxlTz6d6NPB6mMvJxuYNSg-5xs",
  "keys": {
    "auth": "MCeQnXlaz4A-CBuALNPbcQ",
    "p256dh": "BL4am0lzx005spT_UBbMagfWb93Cfgh8XtkCtP7y697dODFnO0wCVVI783BsiHePRTl-mrpoHolJ0gKTYR1T4SQ"
  }
}
```

从 `endpoint` 我们可以看出推送服务本身是浏览器提供的，如果无法访问这个网址，自然就无法使用推送服务。

### Server push

接下来，我们让服务端发送一个消息试试：

```js
const webpush = require('web-push');

const vapidPublicKey = 'public key';

const vapidPrivateKey = 'private key';

// PushSubscriptionJSON Info
const pushSubscription = {
  endpoint: '',
  expirationTime: null,
  keys: {
    p256dh: '',
    auth: ''
  }
};

const payload = 'hello world!';

const options = {
  vapidDetails: {
    subject: 'mailto:example@web-push-node.org',
    publicKey: vapidPublicKey,
    privateKey: vapidPrivateKey
  },
  TTL: 60
};
webpush
  .sendNotification(pushSubscription, payload, options)
  .then(function(result) {
    console.log('success!');
    console.log(result);
  })
  .catch(function(err) {
    console.log('fail!');
    console.error(err);
  });
```

在上述代码中填入相应的认证信息，就可以使用了。浏览器的推送功能并不需要把相应的网站打开，只要浏览器是打开的就可以收到推送。

## 总结

浏览器的推送功能非常方便，但是首先需要用户授权通知权限才能使用，其次是浏览器提供的推送服务，可能在中国无法正常使用。所以现在这个功能还没有大规模的应用。

## 参考

[Introduction to Push Notifications](https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications)

[Adding Push Notifications to a Web App](https://developers.google.com/web/fundamentals/codelabs/push-notifications)

[Service Worker Push Notifications Demo](https://github.com/acgotaku/sw-push)
