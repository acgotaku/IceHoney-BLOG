---
layout: post
title: "Github团队协作"
date: 2017-09-16 22:30
comments: true
tags: github
---

社畜也快半年了，说实话工作确实没有学生生活有趣。每天基本都是坐在电脑前写代码，可能我是那种更喜欢新鲜生活的人吧。对于重复的生活很容易就厌倦了，但生活由不得自己，上班的理由很简单，仅仅是因为穷。学生时代写代码基本都是一个人单干，但进入公司就开始正式的团队协作，也算是学到很多团队合作的知识了吧。特别是利用Github进行高效的合作开发。

#Github协作开发

首先是切换到需要开发的分支，这里我们假设要在`dev`分支上进行开发。

`git checkout dev`

然后，在dev分支上建立属于自己的分支。命名可以以功能命名也可以用解决的issue命名。例如：`dev-add-page dev-issue20`，之后再切换到自己建立的分支。

		git branch dev-issue20
		git checkout dev-issue20

这样，就可以在自己分支上开发了，开发之后push到服务器上，在请求`pull request`进行合并操作，在`pull request`的时候，可以让同事来进行代码review保证开发质量。

协作要用到的Github命令很简单，之后再说说经常用的其他命令。例如，当我们写了半天发现自己在错误的分支上进行了开发，该怎么处理呢？我们可以使用`git stash`命令来把临时修改隐藏起来。

		git stash
		git checkout dev-issue20
		git stash pop

如果我们不小心在dev分支上直接进行了开发，可以使用上面的命令迅速把自己的修改切换到自己的分支上。

还有一种情况是，我们在自己的分支上进行开发的过程中，`dev`分支上合并了其他同时的代码，我们需要和`dev`分支保持一致。这时可以使用`git pull origin dev`分支来同步其他同事的代码，避免自己的代码和主分支产生冲突。

自己的分支在上传到服务器并合并之后通常服务器会删掉这个分支，但本地还是会保留。我们需要定期删掉自己本地已经合并的分支，这里推荐使用下面的命令。

`git branch --merged | egrep -v "(^\*|master|dev)" | xargs git branch -d`

正则表达式里面是不需要删除的分支。

有时候发现某个分支做的功能被砍掉了，然后需要删掉这个分支。可以使用下面的命令：

		git push -d origin <branch_name>
		git branch -d <branch_name>

分别删掉远程服务器和本地的分支。

有时候发现自己写的思路是错的，需要舍弃现在所有的修改，可以使用`reset`命令来重置。

		git reset --hard

当然这个操作比较危险，你应该慎用。

当你需要移除所有新加的文件，但这些文件还没加入库当中。你可以使用`clean`命令来清除所有新加文件。

		git clean -f

目前经常使用的就是这么多，如果大家有更好的学习`Git`命令的推荐资料，欢迎留言。谢谢！

参考：

[Stack Overflow](https://stackoverflow.com/questions/6127328/how-can-i-delete-all-git-branches-which-have-been-merged)

[高质量的Git中文教程](https://github.com/geeeeeeeeek/git-recipes)

[Pro Git](https://git-scm.com/book/en/v2)
