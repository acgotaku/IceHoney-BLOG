---
title: 无限滚动加载列表
date: 2023-06-03 12:55
comments: true
archives: 2023
tags:
  - web
---

滚动加载是分页显示列表常用的一个技术，具体的实现方式基本上后端都会在返回数据上给一个 `cursor` 字段，前端在请求下一页的时候会把这个字段带上，后端根据这个字段来返回下一页的数据。这种方式的好处是可以在前端缓存数据，减少请求次数，但是缺点也很明显，就是无法跳页，只能一页一页的往下翻。为此，我们要实现一个滚动加载组件，当这个组件在可视范围内的时候，会去加载下一页的数据。

## 核心技术点

如果检测组件进入可视范围，我们可以使用 IntersectionObserver API，来监听元素进入可视范围。我们使用 React 实现一个组件，当这个组件进入可视范围的时候，会触发一个回调函数，这个回调函数会去加载下一页的数据。

```tsx
const ScrollLoader: React.FC<IScrollLoaderProps> = ({
  inView,
  updateCompleted
}) => {
  const loaderRef = useRef(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const cursorRef = useRef('');
  const [completed, setCompleted] = useState(false);

  const fetchMore = useCallback(() => {
    inView?.(cursorRef.current).then(res => {
      if (res.nextCursor) {
        cursorRef.current = res.nextCursor;
        if (observerRef.current && loaderRef.current) {
          // trigger the observer again
          observerRef.current.unobserve(loaderRef.current);
          observerRef.current.observe(loaderRef.current);
        }
      } else {
        setCompleted(true);
        updateCompleted?.(true);
      }
    });
  }, [inView, updateCompleted]);

  const callbackFunction: IntersectionObserverCallback = useCallback(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !completed) {
          fetchMore();
        }
      });
    },
    [completed, fetchMore]
  );

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };
    observerRef.current = new IntersectionObserver(
      callbackFunction,
      observerOptions
    );
    if (loaderRef.current) {
      observerRef.current.observe(loaderRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [callbackFunction]);

  if (completed) {
    return null;
  } else {
    return (
      <div className={styles.loader} ref={loaderRef}>
        <Loading />
      </div>
    );
  }
};
```

通过 inView 属性来传入回调函数，当组件进入可视范围的时候，会调用这个函数，然后去加载下一页的数据。这里我们使用了一个 cursor 来标记当前的页码，当请求下一页的时候，会把这个 cursor 传给后端，后端会根据这个 cursor 来返回下一页的数据。当后端返回的数据中没有 cursor 的时候，说明已经到了最后一页，这时候我们不再渲染这个组件。

## 边界情况处理

当用户的屏幕非常长的时候，我们需要加载很多页的数据才能填满屏幕。但是 IntersectionObserver 在组件进入可视范围的时候只会触发一次回调，所以我们需要手动去重新触发。当组件加载完数据的时候，我们会先 unobserve，然后再重新 observe 这个组件，这样就可以触发回调函数了。

## 总结

滚动加载是一个很常见的需求，但是针对边界情况的处理很多人却忽略掉了。针对比较长的屏幕，需要我们做特殊处理才能满足需求。

## 参考

[Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
