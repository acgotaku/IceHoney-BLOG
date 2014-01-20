---
layout: post
title: "关于微云下载的那点事"
date: 2013-04-28 21:31
comments: true
tags: cookies how-to
---

貌似腾讯公司出品了一个叫[微云](http://www.weiyun.com/index.html)的东东,说实话,要不是基家上某人告诉我我还真不知道==
然后就说说这个东西的事情了,貌似下载的时候只能给出下载页面的链接...故意把真实的下载地址隐藏了,而且分析到下载地址还不行
还得带cookies才行....咳咳,我就不说啥腾讯的坏话了,大家都懂的.然后就是下载页面上还有个举报按钮!我勒个去...分享河蟹的东西
的时候就经常被爆菊了...

于是需求就来了,分析下载页面得出真正的下载地址和cookies,让用户点击下载链接即可下载,既方便用户又免得被爆菊...
然后看了下页面的JS... qqdisk_web_outlink.js qqdisk_web_wy.js qqviplib_2.0.0.js 三个主要的JS都压缩了
看着就想吐... 于是换了一个思路,F12开启chromium的调试工具,在Network面板下查看网页到底和服务器发生了哪些交互
chromium的开发工具非常明确的红色的标注了发生POST请求的链接.一眼就看到了.[测试用下载链接](http://www.weiyun.com/web/outlink.html?Q69+qVhF33RXX+jAvhRil4kmLW5GIZRW8Zd13MWsUyvzpcDLunyFPxcqaLdUNtq5FfLp9Oj65Xr2XxTn298qsOWHWHqVdGuP7q1xMT4Do/y34dP00q4H7gpr94udJr/d2H23l0QGIKteptOEY1bTYLwkc+BRRdYEFvNb36XnUMBrS8pMf8RqoLJiAPrbXgYeBFvAwJu13QPHiQOe2lxS2i+V7/UDRpJr2qz8FqnOTHSQhaNXD+8s7uZIyaWH8INMc1Ls9Ay1XOc=)
在这个页面载入的时候可以很清楚的看到
![POST请求](https://lh4.googleusercontent.com/-ucFWlUgjt48/UX3Na09k-EI/AAAAAAAATTs/0EQyyTSdvlU/s2560/2013-04-29-093107_1365x566_scrot.png)
网页对http://web.cgi.weiyun.com/wy_web.fcg这个网址进行POST请求,提交的表单是个json对象

		{
			"req_header": {
				"proto_ver": 10006,
				"main_v": 12,
				"sub_v": 1,
				"encrypt": 0,
				"msg_seq": 1,
				"source": 30006,
				"token": "4d3754f563ad04a56fece81bbcc83302",
				"client_ip": "127.0.0.1",
				"cmd": "decode_url"
			},
			"req_body": {
				"url": "Q69+qVhF33RXX+jAvhRil4kmLW5GIZRW8Zd13MWsUyvzpcDLunyFPxcqaLdUNtq5FfLp9Oj65Xr2XxTn298qsOWHWHqVdGuP7q1xMT4Do/y34dP00q4H7gpr94udJr/d2H23l0QGIKteptOEY1bTYLwkc+BRRdYEFvNb36XnUMBrS8pMf8RqoLJiAPrbXgYeBFvAwJu13QPHiQOe2lxS2i+V7/UDRpJr2qz8FqnOTHSQhaNXD+8s7uZIyaWH8INMc1Ls9Ay1XOc="
			}
		}

上面的JSON对象里面只有token和url是可变的,其它都是固定值,仔细分析页面上的那三个压缩过的JS便可以得到答案.
url明显就是网址上问号后面的参数,我就不赘述了.关于token,仔细分析发现 ``var _token=QQVIP.security.getAntiCSRFToken();``
了这段代码,也就是说腾讯还专门防止CSRF(跨站点请求伪造),可是... 这个token值我随便填写也能成功返回结果 ==  看来腾讯的程序员偷工减料了(又是临时工的错!)
只能说这里预留了一个接口,但是没做,仔细查了一下腾讯的那个函数并自己修改了一下

		var CONST_SALT = 5381;
		var CONST_MD5_KEY = 'tencentQQVIP123443safde&!%^%1282';
		function getAntiCSRFToken(objConfig) {
			objConfig = objConfig || {};
			var salt = objConfig.salt || CONST_SALT;
			var skey = objConfig.skey || "";
			//QZFL.cookie.get("skey")
			var md5key = objConfig.md5key || CONST_MD5_KEY;
			var hash = [],
				ASCIICode;
			hash.push((salt << 5));
			for (var i = 0, len = skey.length; i < len; ++i) {
				ASCIICode = skey.charAt(i).charCodeAt();
				hash.push((salt << 5) + ASCIICode);
				salt = ASCIICode;
			}
			var md5str = $.md5(hash.join('') + md5key);
			return md5str;
		}

看来做的还是不错的,用cookies生成token,但是你的"skey"的cookies是空的要闹哪样 == 基本上token就是个定值 `"4d3754f563ad04a56fece81bbcc83302"`
接下来看返回回来的json对象
![POST返回的JSON对象](https://lh3.googleusercontent.com/-k4YDmt1pE5U/UX3Qm4FtssI/AAAAAAAATUY/yYOPPMky_CU/s2560/2013-04-29-094459_1363x571_scrot.png)

	{
		"rsp_body": {
			"dk": "3540da0c9b7db5fb4f26f2baea50ef60",
			"dl_cookie_name": "FTN5K",
			"dl_cookie_value": "8eb5b2ee",
			"dl_encrypt_url": "da42a15644a68baa30e174d7ed580165176d66c912d9eb235bb4d01363a32e739fc68cab7402869010e99ab64d899c2dd537b2ffc39e3464732acc7ac1413ec4",
			"dl_remain": 99997,
			"dl_svr_host": "hz.yun.ftn.qq.com",
			"dl_svr_port": 80,
			"eptm": "1398678922",
			"fd": "6385d50b-1be5-436a-8430-43f53b583922",
			"nickname": "─╄OvЁ１颗心只为ㄚòu",
			"nm": "CC女王.ssf",
			"realnm": "CC女王.ssf",
			"sha": "f9800d2bd0fa71c2506c5c305c2b50988eb5b2ee",
			"shorturl": "http://url.cn/A8Clnw",
			"sz": "145195",
			"uin": 215629877
		},
		"rsp_header": {
			"cmd": "decode_url",
			"msg_seq": 1,
			"ret": 0,
			"uin": 215629877
		}
	}

这里我只关心下载有关的参数,其它参数大家可以自行猜测,dl_cookie_name和dl_cookie_value 是所需要的cookies的键值对.  
"http://"+json.rsp_body.dl_svr_host+":"+json.rsp_body.dl_svr_port+
"/ftn_handler/"+json.rsp_body.dl_encrypt_url+"/"+json.rsp_body.realnm;  
这就是根据JSON拼接出来的下载链接
接下来的问题就是cookies跨越问题了,点击页面上的下载按钮可以发现,页面与服务器又发生了交互
![](https://lh4.googleusercontent.com/-0p2qXxU_V2U/UX3SepoENOI/AAAAAAAATU0/6fgUOyaR6FI/s2560/2013-04-29-095256_1363x569_scrot.png)

页面向http://web.weiyun.qq.com/php/downloadCheck.php提交了downloadn=FTN5K&downloadv=8eb5b2ee这个正是cookies的键值对,后面的callback是JQUery回调的参数
,无视就可以了,关键是服务器返回的  
Respose Headers  
`Set-Cookie:FTN5K=8eb5b2ee; expires=Mon, 29-Apr-2013 11:51:48 GMT; path=/; domain=qq.com`  
这样就写入了cookies,因为是GET方法提交的请求,这样就可以使用跨域请求.完成cookies的跨越注入.具体使用方法是

		var downloadcookie = "http://web.weiyun.qq.com/php/downloadCheck.php?downloadn=" + json.rsp_body.dl_cookie_name + "&downloadv=" + json.rsp_body.dl_cookie_value;
		var d = document;
		var s = d.createElement('script');
		s.src = downloadcookie;
		d.body.appendChild(s)

通过src可以向http://web.weiyun.qq.com发送GET请求,就完成了跨越的cookies注入.注意跨越请求只能支持GET方法,POST是绝对不可能实现跨越请求的.
但是调试的时候需要POST跨越请求怎么办,最简单的办法是在启动浏览器的时候添加启动方法 `chromium --disable-web-security`  这样浏览器就不会阻止
跨越的POST请求,否则就会console出现下面的红色错误提示.

	XMLHttpRequest cannot load http://web.cgi.weiyun.com/wy_web.fcg. Origin null is not allowed by Access-Control-Allow-Origin. 
这样就下载页面分析下载链接就完成了,然后基友说微云的下载链接有两种还有一中是[这个](http://www.weiyun.com/share.html?sharekey=a86487d6aa48e33429e0be477a87dc21)
不是outlink而是sharekey了,其实就是格式变了而已....腾讯也不想在写一套解析办法吧 == 提交的JSON对象变成

		{
			"req_header": {
				"net_type": 3,
				"build_v": 123,
				"proto_ver": 10006,
				"main_v": 12,
				"sub_v": 1,
				"encrypt": 0,
				"msg_seq": 1,
				"source": 30006,
				"token": "4d3754f563ad04a56fece81bbcc83302",
				"client_ip": "127.0.0.1",
				"cmd": "get_share_info",
				"uin": 0
			},
			"req_body": {
				"share_key": "a86487d6aa48e33429e0be477a87dc21"
			}
		}

然后提交的网址变成http://web.cgi.weiyun.com/wy_share.fcg  
返回的JSON对象是:

	{
		"rsp_body": {
			"createtime": "2013-04-25 13:50:09",
			"data": "xfjJXsNsySkhhwT5SvFC7j85IjXqTxmV9RBC+mcIk1MOmMi0G68fkDTQulEHnBwSPO3Zs/6oAR/k5WLMkpiezA2NFpoCI1LRe2vrko9mMVrP1PcrGnJY26n7Iogto20Wq6aIBm7VjNI9+D2TmXWw4LodHzIf4VhMMGRDacvH04yd4+W/fwG6BbpQKOma42CbA4d8OGken8hNFnnxjE5QIO5GKCPjgsKpxQtPsM0nNbgvKfnLdcPrvcnT+Dm5ZQbZnkdj022QE2ZzXGNfX0c1IA==",
			"dir_list": [],
			"dl_cookie_name": "FTN5K",
			"dl_cookie_value": "2bc024b4",
			"dl_encrypt_url": "a85801ad13f6c92de0de07f0b0c1002d11b438dcfe7a63de37dce08e9a0db51b0789677db4a256a57085b66b52ebe680ab796e9f5c844e620884a443b397339e",
			"dl_svr_host": "tj.yun.ftn.qq.com",
			"dl_svr_port": 80,
			"downcnt": 19,
			"file_list": [{
				"file_id": "2bf60c0a-8694-4d08-bcb3-90e267b32691",
				"file_name": "逆転電池.rar",
				"file_size": "7163756"
			}],
			"flag": 1,
			"pdir_key": "9c9bbd18f0a739ae12b58dcd423dce4a",
			"ppdir_key": "9c9bbd18f338fdcb41c5dfa52b9ed888",
			"res_type": 0,
			"sharename": "逆転電池.rar",
			"storecnt": 0,
			"uin": 415079324,
			"url": "http://url.cn/BKueJM",
			"viewcnt": 83
		},
		"rsp_header": {
			"cmd": "get_share_info",
			"ret": 0
		}
	}

这样就是真的完工了~
