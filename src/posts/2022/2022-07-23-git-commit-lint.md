---
title: Git 提交规范
date: 2022-07-23 20:37
comments: true
archives: 2022
tags:
  - github
---

良好的代码风格很重要，但是良好的 commit 记录同样重要。我们提交代码的时候都要提交 commit message，否则就不允许提交。

```bash
$ git commit -m "hello world"
```

## commit message 格式

目前最流行的提交规范是[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)，格式如下：

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Header

Header 有三个字段，type(必须)，scope(可选) 和 description(必须)。

type 用于说明 commit 的类别，有以下几个选项：build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test

```
build: 对构建系统或者外部依赖项进行了修改
chore: 构建过程或辅助工具的变动
ci: 对CI配置文件或脚本进行了修改
docs: 对文档进行了修改
feat: 增加新功能
fix: 修复BUG
perf: 优化相关，比如提升性能，体验
refactor: 重构代码
revert: 回滚到上一个版本
style: 修改代码格式
test: 添加测试代码
```

scope 用于说明 commit 影响的范围，比如某个组件的修改。

description 是 commit 目的的简短描述，不超过 50 个字符。最好以动词开头，首字母小写，末尾不加句号(.)

### Body

Body 是可选的，用来对本次提交进行详细描述， 可以写成多行，例如：

```
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.
```

### Footer

Footer 也是可选的，主要有两个使用情况。一种是不兼容性更新：

```
chore!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6.
```

一种是引用提交的问题，例如本次提交是修正某个 Issue 的问题。

```
feat(lang): add Polish language

Closes #234
```

## 总结

良好的 commit 提交规范和代码规范同样重要。

## 参考

[Commit message 和 Change log 编写指南](https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)
