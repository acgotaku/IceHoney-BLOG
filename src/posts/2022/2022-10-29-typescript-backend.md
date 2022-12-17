---
title: 如何使用TypeScript进行后端开发
date: 2022-10-29 11:47
comments: true
archives: 2022
tags:
  - TypeScript
---

我们经常使用 TypeScript 进行开发，webpack 会自动帮我们编译成浏览器可以执行的 JS 文件。相关的开发工具也很完善，但是进行后端开发的资料就比较少了，我们来讲解下如何使用 TypeScript 进行后端开发。

## 开发环境自动重新加载

前端有 [HMR](https://webpack.js.org/concepts/hot-module-replacement/) 技术可以实在自动热加载。后端实现这个功能其实也很简单。 首先需要按照 `nodemon` 和 `ts-node`。
我们使用 pnpm 进行包管理。

```bash
pnpm add nodemon ts-node -D
```

然后在 `package.json` 添加命令。

```bash
nodemon src/index.ts
```

`nodemon` 可以完成对文件的监控并且自动 reload，`ts-node` 完成对 TypeScript 的支持。并且不需要配置，`nodemon` 会自动调用 `ts-node`。

## 支持绝对路径引用

前端开发中也经常使用绝对路径，所以希望后端也能使用绝对路径。TypeScript 默认不支持绝对路径的使用，我们需要引用第三方来完成这个操作。

```bash
pnpm add ttypescript typescript-transform-paths -D
```

ttypescript 支持在 build 过程中添加插件来完成很多功能，绝对路径转换成相对路径就是其中一个功能， typescript-transform-paths 这个插件就是用来完成绝对路径映射的。我们需要在 `tsconfig.json` 中进行相关的配置。

```json
{
  "ts-node": {
    "transpileOnly": true,
    "require": ["typescript-transform-paths/register"]
  },
  "compilerOptions": {
    "target": "ESNext",
    "module": "commonjs",
    "moduleResolution": "Node",
    "outDir": "dist",
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },
    "plugins": [{ "transform": "typescript-transform-paths" }]
  },
  "include": ["src"]
}
```

首先在 `paths` 字段下，映射文件夹路径，这样就可以使用 `@/posts/index.ts` 这种格式来引用模块。当然路径映射在开发环境下需要 `ts-node` 的支持，我们在 `ts-node` 的 `require` 字段上引用我们安装的插件。最后是编译成 JS 文件的过程中添加绝对路径的支持。

```bash
ttsc -p tsconfig.json
```

使用增强版 `ttsc` 来完成路径的转换，可以看到生成的 JS 文件中已经是正常的相对路径引用了，前端的时候大多数都是 webpack 完成打包的，后端的话可以直接使用 `ttsc` 来完成编译过程。

## 总结

TypeScript 在类型定义上的支持可以让我们很方便开发大型项目，后端支持了 reload 和绝对路径之后开发效率也可以大大提高。

## 参考

[ts-node で path alias が効かないにハマる](https://chaika.hatenablog.com/entry/2021/12/20/083000)

[mapdoge-bot](https://github.com/acgotaku/mapdoge-bot)
