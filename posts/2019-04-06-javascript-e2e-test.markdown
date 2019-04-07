---
layout: post
title: "前端中的e2e测试"
date: 2019-04-06 12:12
comments: true
tags: e2e test
---

对于单页面应用，我们需要由前端来控制每个页面的路由。但是在开发过程中，我们经常要对路由进行调整。每次调整都要手动检查所有页面是否正常显示。这个过程实在是太浪费生命了，
所以我们需要选择一个测试框架来自动完成这个过程，结合CI系统，在每次PR的时候都自动测试一遍，只有通过测试才会进行下一步的review。

# Nightwatch

Nightwatch是基于[W3C WebDriver API](https://www.w3.org/TR/webdriver/)。WebDrive主要是为了满足浏览器的自动化测试需求，把最终的接口统一成HTTP协议。
所以可以统一不同浏览器的自动化测试接口。我们只要安装每个浏览器的WebDriver实现，就可以同一套代码在不同的浏览器中进行测试。老版本的NightWatch需要使用Selenium来管理各个浏览器，但是从1.0版本开始便不需要也不推荐。所以我现在的项目中并没有安装Selenium。

# 依赖

由于不需要安装Selenium，所以并不需要安装Java依赖。我使用Chrome浏览器来进行自动化测试，所以需要测试环境安装Chrome，注意安装的必须是Chrome，Chromium不可以。
在Travis CI中可以很方便的添加[Chrome](https://docs.travis-ci.com/user/chrome)。还需要安装ChromeDriver依赖来驱动Chrome完成自动化测试。

# 配置

在Linux测试环境下，基本上都是没有图形化界面的，所以我们在配置Chrome的启动参数中需要加入`--headless`选项，这样就可以不启动UI。当我们以root权限启动的时候还需要添加`--no-sandbox`选项，这两个选项基本上是必须的。在我的实际情况下，需要测试不同UA下的展示效果，所以还需要添加`--user-agent=Mozilla/5.0 (Macintosh; Test`自定义的UA。
下面给出一个配置的例子供大家参考：

    // http://nightwatchjs.org/gettingstarted#settings-file

    module.exports = {
      output_folder: "tests/e2e/reports",
      custom_assertions_path: ["tests/e2e/custom-assertions"],
      globals_path: "globalsModule.js",
      src_folders: ["tests/e2e/specs/web"]

      webdriver: {
        start_process: true,
        server_path: require("chromedriver").path,
        cli_args: ["--verbose"],
        port: 9515
      },

      test_settings: {
        default: {
          desiredCapabilities: {
            browserName: "chrome",
            javascriptEnabled: true,
            chromeOptions: {
              args: ["--headless", "--no-sandbox"]
            },
            acceptSslCerts: true
          }
        }
      }
    };


每个参数的详细含义可以参考官方的说明文档。



# 总结

在集成Nightwatch的时候，我是卡在了安装浏览器上。在Mac系统上可以正常执行，在CentOS的docker里面却不行。找了半天发现是自己用了Chromium，之前对Chromium能代替Chrome深信不疑。。。 在遇到问题的时候，还是多怀疑，多找找可能性比较好。
