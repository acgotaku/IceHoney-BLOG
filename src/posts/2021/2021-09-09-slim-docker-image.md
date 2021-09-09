---
title: 如何瘦身docker镜像
date: 2021-09-09 21:44
comments: true
archives: 2021
tags:
  - docker
---

容器化部署已经成为现在的主流，打包 docker 镜像已经是现代前端开发的必修课了。最近正好在做新项目的时候处理过相关事情，所以记录一下。

## docker 部署的需求

首先我们需要使用 docker 完成网站源代码的编译，并且还要自己使用 [expressjs](https://expressjs.com/) 搭建服务器。让网站可以运行，docker 跑起来之后只用负责端口转发即可。

大家都知道前端网站编译需要安装很多依赖，但这些依赖在网站运行的时候并不需要。那如何才能做到，编译之后丢弃这些不用的依赖呢？ 我一开始尝试主动删除，但发现并没有减少 docker 的大小。

答案是[Use multi-stage builds](https://docs.docker.com/develop/develop-images/multistage-build/)

## 编译网站

首先我们需要安装依赖并编译网站，dockerfile 内容如下：

```dockerfile
FROM node:14.17.5-buster-slim as build
ARG GITHUB_PACKAGES_TOKEN
RUN apt-get update && apt-get install -y --no-install-recommends autoconf automake g++ libpng-dev make

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
COPY package.json yarn.lock /tmp/
RUN echo $GITHUB_PACKAGES_TOKEN
RUN cd /tmp && yarn install --forzen-lockfile --production=false
RUN mkdir -p /app && mv /tmp/node_modules /app
# From here we load our application's code in, therefore the previous docker
# "layer" thats been cached will be used if possible
WORKDIR /app
COPY . /app
ENV NODE_ENV production
RUN yarn build && yarn express:build
```

上面的命令编译了网站和 express 服务端代码，这里选择的 node 官方镜像并不是精简版，因为编译的时候需要很多依赖，精简版的话反而安装系统依赖更花时间。

## 安装依赖

网站运行并不需要 node_modules 但是 express 服务器是需要的，所以我们需要安装后端的依赖。

```dockerfile
FROM node:14.17.5-alpine3.14 as deps

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
COPY server/package.json server/yarn.lock /tmp/
RUN cd /tmp && yarn install --forzen-lockfile --production=false
```

服务端的 `package.json` 文件我放在了 server 文件夹下，服务端依赖的东西很少，所以不太占用空间。

## 打包实际生成的文件

```dockerfile
FROM node:14.17.5-alpine3.14
WORKDIR /app
COPY . /app
COPY --from=deps /tmp/node_modules ./node_modules/
COPY --from=build /app/dist ./dist/
COPY --from=build /app/server ./server/
```

接下来的步骤很简单了， 选择占用空间最小的 `Alpine Linux` 然后把编译好的文件复制进来就可以了。前两个步骤的所有东西都会被丢弃掉。所以实际生成的 docker 镜像会非常小。

## 总结

采用多阶段编译，可以有效的减少编译的依赖对空间的占用，做到最小化 docker 镜像。

## 参考

[3 simple tricks for smaller Docker images](https://learnk8s.io/blog/smaller-docker-images)
