---
title: GIthub 存储大文件
date: 2022-02-10 23:16
comments: true
archives: 2022
tags:
  - github
---

最近在做项目的时候，需要上传一个超过 200MB 的数据库文件到 Github 上保存，结果 Github 提示文件过大。这才知道 Github 对单文件有 100 MB 的容量限制。

## 问题介绍

正常情况下，我们执行 add, commit 操作的时候都没啥问题。

```bash
$ git add .
$ git commit -m "add large file"
```

但是执行 push 操作的时候会返回错误。

```bash
$ git push
Enumerating objects: 21, done.
Counting objects: 100% (21/21), done.
Delta compression using up to 10 threads
Compressing objects: 100% (17/17), done.
Writing objects: 100% (17/17), 153.95 MiB | 13.82 MiB/s, done.
Total 17 (delta 4), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (4/4), completed with 3 local objects.
remote: error: Trace: ###
remote: error: See http://git.io/iEPt8g for more information.
remote: error: File xxx.db is 259.50 MB; this exceeds GitHub's file size limit of 100.00 MB
remote: error: GH001: Large files detected. You may want to try Git Large File Storage - https://git-lfs.github.com.
To https://github.com/acgotaku/switch.git
 ! [remote rejected] master -> master (pre-receive hook declined)
error: failed to push some refs to 'https://github.com/{user}/{repo}.git'
```

这里提示我们可以使用 Git Large File Storage 来解决。

## 安装 LFS

根据官网的教程进行安装：

```bash
$ brew install git-lfs
```

然后 cd 到对应的 repo：

```bash
$ cd {repo}
$ git lfs install
Updated git hooks.
Git LFS initialized.
```

## 重新提交

这时候我们需要保留文件的同时，取消 commit：

```bash
$ cd {REPO}
$ git reset --soft HEAD^
```

然后单独提交大文件：

```bash
$ git lfs track {LARGE_FILE}
Tracking {LARGE_FILE}
$ git add .gitattributes
```

执行第一行命令之后会生成一个 `.gitattributes` 文件，记得这个也需要一并提交。

接下来执行普通的 add commit, push 三个步骤就可以了。

```bash
$ git add .
$ git commit -m "add large file"
$ git push
```

## 总结

Github 针对大文件存储有一个月 1GB 流量的限制，所以如果到达限制了需要付费才能继续使用。

## 参考

[GitHub に 100MB 超のファイルを置く](https://qiita.com/kanaya/items/ad52f25da32cb5aa19e6)
