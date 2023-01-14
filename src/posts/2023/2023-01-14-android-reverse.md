---
title: 安卓逆向的经验记录
date: 2023-01-14 13:05
comments: true
archives: 2023
tags:
  - android
---

2023 年，博客也开通 10 年了。我都不敢看 10 年前自己写的东西。感觉全是黑历史，不过也记录了自己一点点的成长和心境的变化。今年也将继续写，记录自己技术上的各种折腾。

## 安卓逆向初体验

首先自己知道了一个安卓电视盒子可以看全球的电视频道，我就想着干嘛要买人家的硬件，随便找个安卓手机不也可以使用么？于是找到了电视盒子上的软件，发现人家是有校验的。不是自家硬件初始化都无法通过。
于是我就好奇这个硬件校验是怎么做的，带着这个好奇心，开始了安卓逆向的征程。

## Java 代码脱壳

现在的安卓软件都会使用梆梆加固之类的软件防止别人进行逆向操作，所以第一步就是处理这个。先看到 JAVA 代码才能深入研究相关逻辑。经过同学指点，使用了一个 BlackDex 的工具。可以直接在安卓手机上进行脱壳操作。使用这个工具可以拿到 dex 文件。然后使用 jadx 输出 JAVA 代码。

```bash
jadx -d dist_fold ./cookie_xxx.dex
```

### 安卓手机抓包

拿到 JAVA 代码全部都读一遍也不现实，基于前端的逆向经验。我想先抓包看看请求内容。抓包软件使用的是 Charles 一款跨平台的抓包软件，不过是商业软件需要付费。
通过抓包分析到，请求全部是基于 HTTP 的，所以不需要再向安卓手机上安装抓包用的 CA 证书确实省事了不少。但是请求的数据和返回都是加密的。基于请求的字段并结合 JAVA 代码分析出加密使用的是 `aes-128-cbc` 算法。这个算法需要 key 和 iv 两个参数，那这两个参数是基于什么信息来生成的呢？通过请求带的特殊的 HTTP headers 进行猜测，应该是 `utctime` `mac` `model` 这三个参数。
为什么这么分析呢，因为服务器端需要进行解密，那必须要把需要的参数都告诉服务端才能把密文解密回明文。

## 加密算法逻辑分析

来到这里，最重要的是需要知道如何生成 key 和 iv 参数，因为 aes 是对称加密，我们知道这两个参数就能把密文再解析回明文。那就带着这个疑问来去读 JAVA 代码。

```java
public class EncryptRule {
    private static String getEncrypKey(String str) {
        String substring = MACUtils.getMac().substring(4, 10);
        return MD5Util.getStringMD5_32(substring + "k3k7a3mM" + str).substring(8, 24);
    }

    private static String getDecrypKey() {
        String substring = MACUtils.getMac().substring(4, 10);
        String str = Build.MODEL;
        return MD5Util.getStringMD5_32(substring + "k3k7a3mM" + str).substring(8, 24);
    }

    public static String getEncryptionParams(String str, String str2) {
        String encrypKey = getEncrypKey(str2);
        return new String(Base64.encodeBase64(AES.encrypt(str.getBytes(), encrypKey.getBytes(), encrypKey.getBytes())));
    }

    public static String getSoEncryptionParams(String str, String str2, String str3) {
        return android.util.Base64.encodeToString(MainActivity.getJniApi().encodeAES(str.getBytes(), str3.getBytes(), str2.getBytes()), 2);
    }

    public static String getSoDecrypt(String str, String str2) {
        try {
            return new String(MainActivity.getJniApi().decodeAES(str.getBytes(), android.util.Base64.decode(str2.getBytes(), 2)));
        } catch (Exception e) {
            e.printStackTrace();
            return "";
        }
    }

    public static String getDecrypt(String str) {
        return AES.decrypt(str, getDecrypKey(), getDecrypKey(), "utf8");
    }
}
```

通过上面这段 JAVA 代码，我们知道加密的 key 是基于 MAC 地址信息进行生成的，传入的 str 参数其实是 `utctime` 。而解密 key 是基于 MAC 地址和 MODEL 信息，返回值的解密并没有用到 `utctime` 。返回信息的时候考虑到网络延迟 `utctime` 不是一个靠谱的参数。这里的 JAVA 逻辑是非核心请求的算法，我们想知道核心的播放列表信息的时候，发现它使用的是 `getSoEncryptionParams` 这个方法调用，而这个方法经过分析是调用 C++ 生成的 so 文件。逆向难度又上了一个台阶。顺便说下，经过 JAVA 代码分析 key 和 iv 其实是相同的参数。

### so 文件分析

C++ 编译成 so 文件本质就是一个二进制文件。要想分析这个二进制文件需要很高的汇编功底和 C 语言知识，因为有些工具可以把二进制反编译成可读的 C 语言。经过同学点拨，使用了 `IDA Pro` 和 `Ghidra` 两个工具来对 so 文件进行逆向。so 文件的分析非常复杂，这里就只说结论了，so 里面分析出来的加解密算法和 JAVA 是一样的，但是中间拼接的字符串是不一样的。只要找到了核心的字符串就能完成请求的加解密。关于请求的解密，针对非英文字符，请使用 UTF-8 编码方式，由于我使用的工具默认采用 ASCII 编码，导致中文乱码，花了一段时间才找到原因。

## 总结

出于满足自己的好奇心，在各路同学的指点下，进行了安卓程序的逆向分析。非常有趣并且学到了很多知识，最后拿到了播放列表，但发现是基于一个私有的 `tvbus` 协议，没法移植到别的 APP 上使用，只能到此作罢。但是这次逆向分析的收获还是不少，在此记录一下。

## 参考

[BlackDex](https://github.com/CodingGay/BlackDex)

[jadx](https://github.com/skylot/)

[Charles](https://www.charlesproxy.com/)

[CyberChef](https://gchq.github.io/CyberChef/)

[Ghidra](https://github.com/NationalSecurityAgency/ghidra)

[IDA Pro](https://hex-rays.com/ida-pro/)

[EncryptRule](https://gist.github.com/acgotaku/091a7a5d181b3211392b0fbdaf37d347)
