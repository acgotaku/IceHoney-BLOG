---
title: 网页调用摄像头读取QR code
date: 2022-12-17 17:29
comments: true
archives: 2022
tags:
  - web
---

2022 年也要结束了，博客不能停更。最近项目中有读取 QR 码的需求，于是便调研了下如何实现这个功能，顺便写篇博客记录下。

## 现成 React 框架

首先调研了别人封装好的现成框架，[React QR Reader](https://github.com/react-qr-reader/react-qr-reader)。这个框架看起来还挺流行的，可是最新版本的发布已经是 2019 年了。
而且有一个致命的 BUG 就是在开启摄像头之后无法关闭。必须重新刷新页面才行，这是不能接受的。

## 低层封装框架

发现大家基本都是调用[@zxing/browser](https://github.com/zxing-js/browser)来完成核心功能的。于是我也使用这个框架封装一个不就好了。
首先安装相关依赖：

```bash
pnpm add @zxing/browser @zxing/library
```

具体的封装代码如下：

```tsx
const QrReader: React.FC<IQrReaderProps> = ({
  videoId = 'video',
  scanDelay = 500,
  constraints = {
    facingMode: 'environment'
  },
  className = '',
  onResult
}) => {
  const stopRef = useRef(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      const codeReader = new BrowserQRCodeReader(undefined, {
        delayBetweenScanAttempts: scanDelay
      });
      stopRef.current = false;
      codeReader
        .decodeFromConstraints(
          {
            video: constraints
          },
          videoRef.current,
          (result, error, controls) => {
            onResult && onResult(result, error, controls);
            if (stopRef.current) {
              controls.stop();
            }
          }
        )
        .catch(error => {
          onResult && onResult(undefined, error);
        });
    }
    return () => {
      stopRef.current = true;
    };
  }, [videoId, scanDelay, constraints, onResult]);
  return (
    <section className={cls(styles.reader, className)}>
      <div className={styles.container}>
        <ViewFinder />
        <video
          muted
          ref={videoRef}
          className={styles.video}
          style={{
            transform:
              constraints?.facingMode === 'user' ? 'scaleX(-1)' : 'none'
          }}
        />
      </div>
    </section>
  );
};
```

这里使用了 `stopRef` 来标记组件的销毁并停止调用摄像头。本身封装也不复杂，没必要使用别人封装的轮子。完整的代码在[simple-qr-reader](https://github.com/acgotaku/simple-qr-reader)

## 总结

前端生态非常完善，使用现成的库就可以非常方便的实现调用摄像头读取二维码功能。

## 参考

[@zxing/browser と React の組み合わせで QR Code Reader 作る](https://zenn.dev/terrierscript/articles/2020-12-22-zxing-browser-react-qr-code-reader)
