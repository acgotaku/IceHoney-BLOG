(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{354:function(s,t,e){"use strict";e.r(t);var a=e(8),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("使用 Docker 容器化开发和部署，是当今的主流。因为程序跑在了容器之内，我们再也不用担心安装各种依赖和版本管理。接下来就来介绍如何使用 Docker 开发自己的 node 项目。")]),s._v(" "),e("h2",{attrs:{id:"使用-docker-compose-管理多个-docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-docker-compose-管理多个-docker"}},[s._v("#")]),s._v(" 使用 docker-compose 管理多个 Docker")]),s._v(" "),e("p",[s._v("很多情况下，一个 Docker 是满足不了需求的，有时候还要使用 MySQL 数据库，有时候还要使用 redis。这时候就需要使用 docker-compose 来管理多个 Docker。docker-compose 的使用也很简单，只要在项目根目录下建立一个"),e("code",[s._v("docker-compose.yml")]),s._v("文件即可。关于 YAML 的学习，可以参考"),e("a",{attrs:{href:"https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes",target:"_blank",rel:"noopener noreferrer"}},[s._v("Learn YAML in five minutes!"),e("OutboundLink")],1),s._v("。")]),s._v(" "),e("h2",{attrs:{id:"docker-compose-内容定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-内容定义"}},[s._v("#")]),s._v(" docker-compose 内容定义")]),s._v(" "),e("p",[s._v("首先我们需要声明版本号"),e("code",[s._v("version")]),s._v("，不同的 Docker 版本对 docker-compose 的版本支持也不一样，可以参考官方的文档进行"),e("a",{attrs:{href:"https://docs.docker.com/compose/compose-file/",target:"_blank",rel:"noopener noreferrer"}},[s._v("对照"),e("OutboundLink")],1),s._v("。\n然后声明"),e("code",[s._v("services")]),s._v("，service 下的每一个声明都是一个 Docker 的实例。下面介绍一个实际例子：")]),s._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.7'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("pg")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" postgres"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9.5")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${DB_EXPORT_PORT-54320}:5432'")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("POSTGRES_USER")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${DB_USER-postgres}'")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("POSTGRES_PASSWORD")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${DB_PASS-123456}'")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("POSTGRES_DB")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${DB_NAME-dmhy_indexer}'")]),s._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("main")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" .\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cap_add")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" SYS_ADMIN "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ref https://github.com/GoogleChrome/puppeteer/blob/v1.12.1/docs/troubleshooting.md#running-puppeteer-in-docker")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'indexer'")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" yarn start\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'9229:9229'")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("INDEXER_MODE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${INDEXER_MODE-dmhy}'")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("DB_HOST")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${DB_HOST-pg}'")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("DB_PORT")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${DB_PORT-5432}'")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("DB_USER")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${DB_USER-postgres}'")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("DB_NAME")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${DB_NAME-dmhy_indexer}'")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("DB_PASS")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${DB_PASS-123456}'")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.:/irohalab/indexer'")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/irohalab/indexer/node_modules'")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/irohalab/indexer/dist'")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("depends_on")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" pg\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br")])]),e("p",[s._v("这个配置来源于"),e("a",{attrs:{href:"https://github.com/irohalab/indexer",target:"_blank",rel:"noopener noreferrer"}},[s._v("indexer"),e("OutboundLink")],1),s._v("。我们定义了两个 Service。第一个是数据库 Postgres，第二个便是我们的主项目。首先，我们来看数据库配置，声明了使用官方的"),e("code",[s._v("postgres:9.5")]),s._v("镜像，并映射数据库 5432 端口到主机。这里"),e("code",[s._v("${DB_EXPORT_PORT-54320}")]),s._v("的意思是读取环境变量"),e("code",[s._v("DB_EXPORT_PORT")]),s._v("，如果没有的话就使用默认值"),e("code",[s._v("54320")]),s._v("，这也是 YAML 语法的一部分。接下来又定义了数据库启动需要的环境变量参数。")]),s._v(" "),e("p",[s._v("重点是配置的 main 项目，由于 main 项目使用了自定义的 Dockerfile，所以我们需要结合 Dockerfile 的配置来讲述。")]),s._v(" "),e("div",{staticClass:"language-dockerfile line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" node"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("10.16.3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("stretch\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("get update "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("qq && apt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("get install "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("y gconf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("service libasound2 libatk1.0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("0 libatk"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("bridge2.0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("0 libc6 libcairo2 libcups2 libdbus"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("3 libexpat1 libfontconfig1 libgcc1 libgconf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("4 libgdk"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pixbuf2.0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("0 libglib2.0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("0 libgtk"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("0 libnspr4 libpango"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("1.0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("0 libpangocairo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("1.0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("0 libstdc++6 libx11"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("6 libx11"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("certificates fonts"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("liberation libappindicator1 libnss3 lsb"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("release xdg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("utils wget\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /irohalab/indexer\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" chown "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("R node"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("node /irohalab/indexer\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" usermod "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("a "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("G audio"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("video node\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" node\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" package.json yarn.lock ./\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" yarn install\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" mkdir dist\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" . .\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("Dockerfile 的第一句话一定是 FROM，代表着是基于哪个官方镜像来自定义。我们基于 node 的 10.16.3 版本来定制镜像，第一步是安装项目额外需要的依赖，第二步是设定工作目录。由于当前项目需要非 root 权限的用户来运行，所以我们需要之后改变权限，ndoe 镜像官方提供了非 root 用户"),e("code",[s._v("node")]),s._v("，所以我们就把工作目录的权限改成了"),e("code",[s._v("ndoe")]),s._v("。接下来是添加到需要的组，之后就是切换用户到"),e("code",[s._v("node")]),s._v("。\n切换之前默认 Docker 是使用 root 权限运行的，切换之后就是"),e("code",[s._v("node")]),s._v("用户了，我们 copy 需要的文件之后，执行"),e("code",[s._v("yarn install")]),s._v("来安装，由于存在主机是 Mac，但是 Docker 是 Linux 的情况，所以主机的"),e("code",[s._v("node_modules")]),s._v("并不能直接用，所以我们需要在 Docker 中安装依赖。接下来又创建了一个 dist 目录，然后复制了整个项目。为什么创建"),e("code",[s._v("dist")]),s._v("目录接下来要讲。")]),s._v(" "),e("h2",{attrs:{id:"使用非-root-权限运行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用非-root-权限运行"}},[s._v("#")]),s._v(" 使用非 root 权限运行")]),s._v(" "),e("p",[s._v("这部分是 Docker 配置最折腾的地方。因为 Docker 默认是用 root 权限运行的，所以切换到非 root 权限执行程序就会经常遇到 permission denied 的问题。接下来就要讲述 main 部分的配置参数，"),e("code",[s._v("build: .")]),s._v("在当前目录下 build，就是寻找当前目录下的 Dockerfile 并进行 build，"),e("code",[s._v("cap_add")]),s._v("参数是添加"),e("code",[s._v("Linux capabilities")]),s._v("。这部分可以参考"),e("a",{attrs:{href:"https://docs.docker.com/engine/reference/run/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Runtime privilege and Linux capabilities"),e("OutboundLink")],1),s._v("。之所以添加是因为"),e("a",{attrs:{href:"https://github.com/GoogleChrome/puppeteer/blob/v1.12.1/docs/troubleshooting.md#running-puppeteer-in-docker",target:"_blank",rel:"noopener noreferrer"}},[s._v("puppeteer"),e("OutboundLink")],1),s._v("需要，apt-get 安装的依赖也是。重点是"),e("code",[s._v("volumes")]),s._v("配置，第一行代表当前目录映射到"),e("code",[s._v("/irohalab/indexer")]),s._v("也就是我们设定的工作目录位置。第二行和第三行是为了移除对"),e("code",[s._v("node_modules")]),s._v("文件夹和"),e("code",[s._v("dist")]),s._v("文件夹的映射。但如果 Docker 里没有这两个文件夹就会由 root 来创建，所以我才特地"),e("code",[s._v("mkdir dist")]),s._v("。否则普通用户又会没有权限了。"),e("code",[s._v("depends_on")]),s._v("代表当前镜像的依赖，同时声明依赖之后，Docker 内部之间可以通讯，主机名就是"),e("code",[s._v("services")]),s._v("里定义的名字。")]),s._v(" "),e("h2",{attrs:{id:"使用-dockerignore"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-dockerignore"}},[s._v("#")]),s._v(" 使用 dockerignore")]),s._v(" "),e("p",[s._v("dockerignore 和 gitignore 的用法非常类似，当指定了某些文件或文件夹的时候，在执行 COPY 等命令的时候就会忽略这些文件或文件夹。")]),s._v(" "),e("h2",{attrs:{id:"清理-docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#清理-docker"}},[s._v("#")]),s._v(" 清理 Docker")]),s._v(" "),e("p",[s._v("由于开发过程中各种调试和重新 build，导致产生的无用的镜像数据特别多，所以需要经常清理。官方文档有详细的"),e("a",{attrs:{href:"https://docs.docker.com/config/pruning/",target:"_blank",rel:"noopener noreferrer"}},[s._v("清理说明"),e("OutboundLink")],1),s._v("。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ docker image prune -a\n$ docker system prune --volumes\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("第一个命令会清除所有的镜像，不管有没有使用。第二个命令会清除所有不相关或不使用的 Docker 数据。")]),s._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),e("p",[s._v("Docker 很强大，但是用起来也没有那么容易。需要不断的尝试，去摸索各种选项的配置和使用。")]),s._v(" "),e("h2",{attrs:{id:"引用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#引用"}},[s._v("#")]),s._v(" 引用")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/containerizing-a-node-js-application-for-development-with-docker-compose",target:"_blank",rel:"noopener noreferrer"}},[s._v("Containerizing a Node.js Application for Development With Docker Compose"),e("OutboundLink")],1)]),s._v(" "),e("p",[e("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/how-to-build-a-node-js-application-with-docker",target:"_blank",rel:"noopener noreferrer"}},[s._v("How To Build a Node.js Application with Docker"),e("OutboundLink")],1)]),s._v(" "),e("p",[e("a",{attrs:{href:"https://stackoverflow.com/questions/29181032/add-a-volume-to-docker-but-exclude-a-sub-folder",target:"_blank",rel:"noopener noreferrer"}},[s._v("Add a volume to Docker, but exclude a sub-folder"),e("OutboundLink")],1)]),s._v(" "),e("p",[e("a",{attrs:{href:"https://docs.docker.com/engine/reference/builder/#dockerignore-file",target:"_blank",rel:"noopener noreferrer"}},[s._v(".dockerignore file"),e("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);