---
title: Github如何省略每次输入验证信息
date: 2019-06-23 20:21
comments: true
tags:
  - Github
---

项目开发中经常会遇到 CI 自动拉取 Github 库的情况，我们个人使用的时候会手动输入账户密码信息，但是针对 CI 来说，我们一般会把敏感的认证信息放在环境变量里。所以针对认证信息的自动输入，需要做一些处理。

## 环境变量自动替换

针对 Travis CI，我们一般把认证信息放在环境变量里，所以在执行 clone 其他 repo 的时候，可以先设置认证信息。

```bash
git config --global url."https://${CI_USER_NAME}:${CI_USER_TOKEN}@github.com/".insteadOf "https://github.com/"'
```

这样设置的话，会自动替换 git clone 的网址。

## URL 里面写入认证信息

有时候需要以另外一个身份进行 clone repo 的时候，会直接在 repo 的 URL 前面加上认证信息。

```bash
git clone https://${USER_NAME}:${USER_TOKEN}@github.com/{username}/{repo}
```

这样可以很方便的 clone 信息，但是认证信息会存在当前库的 git config 文件里，有泄漏的风险。

## netrc 设置

netr 文件用于存储网站的认证信息，一般位置在`~/.netrc`。格式是：

```
machine github.com
login username
password xxxxxxx
```

## 总结

总共有这么三种省略认证信息的方式，根据实际情况选择自己方便的一种认证方式即可。

参考：

[GitHub でユーザ名・パスワード省略](https://qiita.com/azusanakano/items/8dc1d7e384b00239d4d9)
