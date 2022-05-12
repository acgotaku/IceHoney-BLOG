---
title: 如何实现虚拟滚动条
date: 2022-05-12 19:25
comments: true
archives: 2022
tags:
  - web
---

最近在做UI组件，发现下拉组件经常会有很多选项导致渲染的DOM过多，在低性能的设备上交互变的很卡。例如最常见的需求就是下拉选择所在国家或者地区，全世界有两百多个国家或者地区。
如果把所有国家或者地区都渲染出来必然会导致DOM过多，在低性能设备上滚动起来都会很卡。这时候就需要使用虚拟滚动条来提高渲染性能。

## 虚拟滚动条原理

虚拟滚动的原理是显示的容器高度固定，我们只渲染用户看到的选项。但是选项容器的高度还是设置成所有选项的高度，这样滚动条效果保持一样，不过实际渲染的DOM数量却大大减少。

## 虚拟滚动条的数学计算

目前虚拟滚动的主要限制是需要知道显示容器的高度，渲染的每个选项的高度以及渲染的选项的数量。我们可以通过用户的滚动距离来计算需要显示的内容以及需要偏移的距离。

细节请参考下面的代码：

```tsx
const VirtualScroll: React.FC<IVirtualScrollProps> = ({
  itemCount, // 选项的数量
  height, // 显示容器的高度
  childHeight, // 选项的高度
  itemData // 选项元素
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  // 得高容器滚动了多少距离
  const scrollTop = useScrollAware(wrapperRef);
  // 计算渲染的选项的总高度
  const totalHeight = useMemo(
    () => childHeight * itemCount,
    [childHeight, itemCount]
  );
  // 根据滚动距离，计算要渲染的选项的起始位置
  const startIndex = useMemo(
    () => Math.floor(scrollTop / childHeight),
    [scrollTop, childHeight]
  );
  // 根据容器的高度计算要渲染的选项的数量
  const visibleItemCount = useMemo(
    () => Math.ceil(height / childHeight),
    [height, childHeight]
  );
  // 根据渲染的选项的起始位置，计算选项的偏移量
  const offsetY = useMemo(
    () => startIndex * childHeight,
    [childHeight, startIndex]
  );
  // 计算实际显示的选项元素
  const visibleItemData = useMemo(() => {
    return itemData.slice(startIndex, startIndex + visibleItemCount);
  }, [itemData, startIndex, visibleItemCount]);

  return (
    <div
      style={{
        height,
        overflow: 'auto'
      }}
      ref={wrapperRef}
    >
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          willChange: 'transform',
          height: totalHeight
        }}
      >
        <div
          style={{
            willChange: 'transform',
            transform: `translate3d(0, ${offsetY}px, 0)`
          }}
        >
          {visibleItemData}
        </div>
      </div>
    </div>
  );
};

export default memo(VirtualScroll);
```

完整的实现请参考 [Simple UI - Select](https://github.com/acgotaku/simple-ui/blob/master/src/components/Select/VirtualRow.tsx)


## 总结

在知道虚拟滚动条的原理之后，发现并不难实现，重点要理解几个数值的计算，才能明白为什么这样能达到预期的效果。

## 参考

[Build your Own Virtual Scroll](https://dev.to/adamklein/build-your-own-virtual-scroll-part-i-11ib)
