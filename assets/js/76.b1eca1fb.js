(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{385:function(t,s,a){"use strict";a.r(s);var n=a(9),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("最近在做后端的开发，需要一些二进制数据保存在服务器云端。团队决定调查 AWS 的 S3 服务是否满足需求，所以就做了一些调查工作。不过也遇到很多坑的地方。所以记录下来，防止以后再遇到。")]),t._v(" "),a("h2",{attrs:{id:"基本需求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本需求"}},[t._v("#")]),t._v(" 基本需求")]),t._v(" "),a("p",[t._v("需要云服务有稳定性保证，并且可以批量上传文件。可以设置上传和下载链接的有效期。")]),t._v(" "),a("h2",{attrs:{id:"aws-试用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aws-试用"}},[t._v("#")]),t._v(" AWS 试用")]),t._v(" "),a("p",[t._v("AWS 提供免费试用，但是注册的时候需要填写信用卡信息。确实有点不安，万一不小心被收费了就不好了。")]),t._v(" "),a("h2",{attrs:{id:"生成上传凭证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成上传凭证"}},[t._v("#")]),t._v(" 生成上传凭证")]),t._v(" "),a("p",[t._v("我使用的是 AWS 的 "),a("a",{attrs:{href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript SDK"),a("OutboundLink")],1),t._v("。使用"),a("code",[t._v("createPresignedPost")]),t._v(" API 可以创建用于上传的凭证。这个凭证是根据用户的 AccessId，AccessKey 和 Policy 策略等计算生成的，并没有和 AWS 服务器直接进行交互。所以不用担心这个接口和 AWS 直接的流量费用问题。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" params "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Bucket"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bucket'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Conditions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'starts-with'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$key'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path/to/uploads/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ns3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createPresignedPost")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Presigning post data encountered an error'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Fields"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path/to/uploads/${filename}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'The post data is'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("p",[t._v("官方提供的例子中，可以使用"),a("code",[t._v("starts-with")]),t._v("的方式来指定上传文件的 key 必须是以什么开头的，这样就可以指定上传的文件夹。很多文件也可以使用这一个上传凭证来完成上传。")]),t._v(" "),a("h2",{attrs:{id:"上传-policy-构造"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传-policy-构造"}},[t._v("#")]),t._v(" 上传 Policy 构造")]),t._v(" "),a("p",[t._v("AWS 提供了一个详细文档说明如何构造合法的 Policy："),a("a",{attrs:{href:"https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-HTTPPOSTConstructPolicy.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Creating a POST Policy"),a("OutboundLink")],1),t._v("。例如常见的需求就是在上传的时候添加 meta 信息声明文件的格式或者 MD5 值。\nPolicy 的 Conditions 数组里面可以添加"),a("code",[t._v('["starts-with", "$x-amz-meta-md5checksum", ""]')]),t._v("。最后一个参数为空字符串代表可以上传任何数值。")]),t._v(" "),a("h2",{attrs:{id:"构造-post-表单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构造-post-表单"}},[t._v("#")]),t._v(" 构造 POST 表单")]),t._v(" "),a("p",[t._v("AWS 也有文档说明了如何构造一个"),a("a",{attrs:{href:"https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-post-example.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("上传的表单"),a("OutboundLink")],1),t._v("。这个表单中最重要的是一句注释："),a("code",[t._v("The elements after this will be ignored")]),t._v("。在 file 字段之后的所有信息都会被忽略掉，我测试的时候一直把"),a("code",[t._v("x-amz-meta-md5checksum")]),t._v("字段放在 file 字段之后导致上传一直报错。直到 Stack Overflow 上面有人解释了才恍然大悟。")]),t._v(" "),a("h2",{attrs:{id:"构造下载链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构造下载链接"}},[t._v("#")]),t._v(" 构造下载链接")]),t._v(" "),a("p",[t._v("我们使用"),a("code",[t._v("getSignedUrl")]),t._v(" API 来生成下载链接，下载链接也是根据自己的 AccessId 和 AccessKey 生成链接的凭证，也没有和 AWS 服务器直接进行交互。当请求文件的时候，AWS 再计算凭证是否有效。所以后端无需和 AWS 交互就可以返回客户端有效的 AWS 下载链接。针对需要返回实际文件的 API 接口，可以采用返回 302 的跳转链接来完成需求。示例代码如下：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" params "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Bucket"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bucket'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSignedUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'getObject'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'The URL is'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("可能有人会问，这个 API 也可以用来上传啊。但是这个 API 接口必须指定 key 值，这样我们就需要为每个文件来生成一个独立的上传 URL。这样太麻烦了。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("我们使用 pre-sign 的方式来生成 URL 主要是为了对客户端透明。虽然我们可以设置最小权限的 IAM User 给客户端，但是客户端很容易被逆向拿到敏感数据。这样难免会有风险，所以生成一个单纯的 URL 供客户端使用一定程度上保证了安全性也减少了客户端的复杂性。毕竟我也不想引入一个 AWS 的 SDK 进来。")])])}),[],!1,null,null,null);s.default=e.exports}}]);