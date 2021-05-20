---
title: Django使用CKEditor的相关经验
date: 2021-05-19 22:06
comments: true
archives: 2021
tags:
  - django
---

最近在使用 Django 进行后台管理系统的开发，其中有需求要使用所见即所得的富文本编辑器来让用户上传图片和文字并排版。这里我们选择了[CKEditor](https://github.com/django-ckeditor/django-ckeditor)，原因很简单，因为这个第三方库提供了很好的 AWS S3 的支持，而我们目前也确实把静态资源例如图片放在 S3 上。

## 配置 AWS S3

我们一般使用[django-storages](https://github.com/jschneier/django-storages)这个库来集成 AWS S3,
首先需要在设置里面配置 AWS 的 `AWS_ACCESS_KEY_ID`， `AWS_SECRET_ACCESS_KEY` 和 `AWS_S3_REGION_NAME`。

然后自定义一个 Storage class 方便配置，代码如下：

```python
class MaterialStorage(S3Boto3Storage):
    bucket_name = 'material-bucket'
    default_acl = 'private'
```

默认都是私有桶，避免用户拿到图片的 URL 就可以分享给别人。S3 默认开启 `AWS_QUERYSTRING_AUTH`， 访问资源的格式类似下面这种带有查询参数：

```
https://s3.amazonaws.com/photos/puppy.jpg?AWSAccessKeyId=AKIAIOSFODNN7EXAMPLE&Signature=NpgCjnDzrM%2BWFzoENXmpNDUsSn8%3D&Expires=1175139620
```

默认的查询参数认证有效期是一个小时，也就意味着这个链接最多一个小时有效，而且认证参数最大只能设置一周有效。可以有效避免链接泄漏导致的资源泄漏风险。

## 配置项目导入 CKEditor

按照官方指导可以很顺利的导入 CKEditor：

```python
from django.db import models
from ckeditor.fields import RichTextUploadingField

class Post(models.Model):
    content = RichTextUploadingField()
```

## CKEditor 配置 S3

官方教程上说明必须关掉[AWS_QUERYSTRING_AUTH](https://github.com/django-ckeditor/django-ckeditor#using-s3)才能正常使用。但是关掉之后就意味着任何人只要获得资源的链接就可以访问，这是很危险的。所以我们如何保证开启认证参数的同时又能正常使用编辑器呢？这个才是本文的重点。

在开启认证参数的时候，编辑器保存的是当时上传照片时候的认证参数，也就意味着一个小时之后再访问的时候，就没法正常显示图片。如何保证页面载入编辑器的时候，保证图片正常显示呢？

我的思路是在页面载入的时候读取编辑器里面的内容，采用正则表达式匹配存储在 AWS 上的图片，然后更新图片相关的认证信息。

## 数据库读入时自动更新认证信息

查看 Django 文档的时候发现，我们可以自定义一个 field，然后使用一个 hook 函数 [from_db_value](https://docs.djangoproject.com/en/3.2/ref/models/fields/#django.db.models.Field.from_db_value)。在数据读入的时候进行相关操作，例如把存入的 JSON 字符串转换成 JSON 对象。通过这个方法，我们可以对数据进行加工，更新图片的认证信息。

```python
class CKEditorField(RichTextUploadingField):
    def from_db_value(self, value, expression, connection):
        if value:
            return update_image(value)
        else:
            return value
```

我们自定义了一个 `CKEditorField` 字段，从数据库读出的时候进行图片认证信息的更新。`update_image` 函数的实现如下：

```python
def update_image(content):
    storage = MaterialStorage()
    s3_regex = re.compile(r'"(https:\/\/amazonaws.com\S+)"', re.MULTILINE)
    links = s3_regex.findall(content)
    for link in links:
        match = re.search(r'\/upload\S+.(png|jpe?g)', link)
        if match:
            path = match.group()
            if storage.exists(path):
                content = content.replace(link, storage.url(path))
    return content
```

简单的解释一下代码功能，首先匹配 AWS 链接，然后匹配链接中的图片路径，知道图片路径之后。再使用 `storage` 对象查找是否存在，如果存在的话，获取这个资源的 URL。这时候新的 URL 就带有新的认证信息。通过这种方式，我们就能保证每次页面显示编辑器的时候，里面的图片都可以正常显示出来。

## 总结

知道答案之后，当然觉得这么做很简单。但是探索出这个答案却非常花时间，首先要明确解决问题的思路，然后顺着这个思路去想出可能的解决方案。最后，问题迎刃而解。

## 参考

[Authenticating Requests: Using Query Parameters](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html)

[File storage API](https://docs.djangoproject.com/en/3.2/ref/files/storage/)
