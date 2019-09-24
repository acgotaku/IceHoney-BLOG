---
layout: post
title: "使用Docker运行node项目"
date: 2019-09-11 22:43
comments: true
tags: GIS
---

使用Docker容器化开发和部署，是当今的主流。因为程序跑在了容器之内，我们再也不用担心安装各种依赖和版本管理。接下来就来介绍如何使用Docker开发自己的node项目。


# 使用docker-compose管理多个Docker

很多情况下，一个Docker是满足不了需求的，有时候还要使用MySQL数据库，有时候还要使用redis。这时候就需要使用docker-compose来管理多个Docker。docker-compose的使用也很简单，只要在项目根目录下建立一个`docker-compose.yml`文件即可。关于YAML的学习，可以参考[Learn YAML in five minutes!](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes)。

# docker-compose 内容定义

首先我们需要声明版本号`version`，不同的Docker版本对docker-compose的版本支持也不一样，可以参考官方的文档进行[对照](https://docs.docker.com/compose/compose-file/)。
然后声明`services`，service下的每一个声明都是一个Docker的实例。下面介绍一个实际例子：

```
version: "3.7"
services:
  pg:
    image: postgres:9.5
    ports:
      - "${DB_EXPORT_PORT-54320}:5432"
    environment:
      POSTGRES_USER: "${DB_USER-postgres}"
      POSTGRES_PASSWORD: "${DB_PASS-123456}"
      POSTGRES_DB: "${DB_NAME-dmhy_indexer}"

  main:
    build: .
    cap_add:
      - SYS_ADMIN  # ref https://github.com/GoogleChrome/puppeteer/blob/v1.12.1/docs/troubleshooting.md#running-puppeteer-in-docker 
    image: "indexer"
    command: yarn start
    ports:
      - "9229:9229"
    environment:
      INDEXER_MODE: "${INDEXER_MODE-dmhy}"
      DB_HOST: "${DB_HOST-pg}"
      DB_PORT: "${DB_PORT-5432}"
      DB_USER: "${DB_USER-postgres}"
      DB_NAME: "${DB_NAME-dmhy_indexer}"
      DB_PASS: "${DB_PASS-123456}"
    volumes:
      - ".:/irohalab/indexer"
      - "/irohalab/indexer/node_modules"
      - "/irohalab/indexer/dist"
    depends_on:
      - pg

```

这个配置来源于[indexer](https://github.com/irohalab/indexer)。我们定义了两个Service。第一个是数据库Postgres，第二个便是我们的主项目。首先，我们来看数据库配置，声明了使用官方的`postgres:9.5`镜像，并映射数据库5432端口到主机。这里`${DB_EXPORT_PORT-54320}`的意思是读取环境变量`DB_EXPORT_PORT`，如果没有的话就使用默认值`54320`，这也是YAML语法的一部分。接下来又定义了数据库启动需要的环境变量参数。

重点是配置的main项目，由于main项目使用了自定义的Dockerfile，所以我们需要结合Dockerfile的配置来讲述。

```
FROM node:10.16.3-stretch
RUN apt-get update -qq && apt-get install -y gconf-service libasound2 libatk1.0-0 libatk-bridge2.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
WORKDIR /irohalab/indexer
RUN chown -R node:node /irohalab/indexer
RUN usermod -a -G audio,video node
USER node
COPY package.json yarn.lock ./
RUN yarn install
RUN mkdir dist
COPY . .
```

Dockerfile的第一句话一定是 FROM，代表着是基于哪个官方镜像来自定义。我们基于node的10.16.3版本来定制镜像，第一步是安装项目额外需要的依赖，第二步是设定工作目录。由于当前项目需要非root权限的用户来运行，所以我们需要之后改变权限，ndoe镜像官方提供了非root用户`node`，所以我们就把工作目录的权限改成了`ndoe`。接下来是添加到需要的组，之后就是切换用户到`node`。
切换之前默认Docker是使用root权限运行的，切换之后就是`node`用户了，我们copy需要的文件之后，执行`yarn install`来安装，由于存在主机是Mac，但是Docker是Linux的情况，所以主机的`node_modules`并不能直接用，所以我们需要在Docker中安装依赖。接下来又创建了一个dist目录，然后复制了整个项目。为什么创建`dist`目录接下来要讲。

# 使用非root权限运行

这部分是Docker配置最折腾的地方。因为Docker默认是用root权限运行的，所以切换到非root权限执行程序就会经常遇到permission denied的问题。接下来就要讲述main部分的配置参数，`build: .`在当前目录下build，就是寻找当前目录下的Dockerfile并进行build，`cap_add`参数是添加`Linux capabilities`。这部分可以参考[Runtime privilege and Linux capabilities](https://docs.docker.com/engine/reference/run/)。之所以添加是因为[puppeteer](https://github.com/GoogleChrome/puppeteer/blob/v1.12.1/docs/troubleshooting.md#running-puppeteer-in-docker )需要，apt-get安装的依赖也是。重点是`volumes`配置，第一行代表当前目录映射到`/irohalab/indexer`也就是我们设定的工作目录位置。第二行和第三行是为了移除对`node_modules`文件夹和`dist`文件夹的映射。但如果Docker里没有这两个文件夹就会由root来创建，所以我才特地`mkdir dist`。否则普通用户又会没有权限了。`depends_on`代表当前镜像的依赖，同时声明依赖之后，Docker内部之间可以通讯，主机名就是`services`里定义的名字。

# 使用dockerignore

dockerignore和gitignore的用法非常类似，当指定了某些文件或文件夹的时候，在执行COPY等命令的时候就会忽略这些文件或文件夹。

# 清理Docker

由于开发过程中各种调试和重新build，导致产生的无用的镜像数据特别多，所以需要经常清理。官方文档有详细的[清理说明](https://docs.docker.com/config/pruning/)。
```
$ docker image prune -a
$ docker system prune --volumes
```

第一个命令会清除所有的镜像，不管有没有使用。第二个命令会清除所有不相关或不使用的Docker数据。

# 总结

Docker很强大，但是用起来也没有那么容易。需要不断的尝试，去摸索各种选项的配置和使用。

# 引用

[Containerizing a Node.js Application for Development With Docker Compose](https://www.digitalocean.com/community/tutorials/containerizing-a-node-js-application-for-development-with-docker-compose)

[Add a volume to Docker, but exclude a sub-folder](https://stackoverflow.com/questions/29181032/add-a-volume-to-docker-but-exclude-a-sub-folder)

[.dockerignore file](https://docs.docker.com/engine/reference/builder/#dockerignore-file)
