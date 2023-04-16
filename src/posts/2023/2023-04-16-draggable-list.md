---
title: 拖拽排序列表
date: 2023-04-16 12:31
comments: true
archives: 2023
tags:
  - web
---

拖拽排序是一个很常见的功能，在浏览器不支持原生拖拽功能的时代，人们只能使用鼠标的点击事件来模拟拖拽效果，手动控制拖拽元素的位置来进行移动操作。随着原生拖拽 API 的支持，在实现这个功能的时候就可以更简单一点了。

## 相关事件

首先，你要想拖拽某个元素的话必须设置属性 `draggable="true"` 才可以进行拖拽操作。然后进行拖拽操作主要有以下事件需要处理。

1. onDragStart 当拖拽开始的时候触发
2. onDragOver 当拖拽到某个元素内部的时候触发
3. onDragEnter 当拖拽进入某个元素的时候触发
4. onDragEnd 当鼠标松开，拖拽结束的时候触发
5. onDrop 当拖拽到某个元素并松开鼠标的时候触发

由于我们使用拖拽进行排序，而不是拖拽元素放到别的元素里面，所以我们并不需要进行 drop 处理，当 dragOver 某个元素的时候也不需要额外的处理。所以这两个事件的代码最简单，我们只需要移除默认的事件响应。

```tsx
const dragOverHandler = useCallback((event: React.DragEvent<HTMLElement>) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
  return false;
}, []);
const dropHandler = useCallback((event: React.DragEvent<HTMLElement>) => {
  event.stopPropagation();
  event.preventDefault();
  return false;
}, []);
```

dropEffect 有四种，默认的是 `copy` 我们需要改成 `move` 才符合需求。接下来再来看看其他三个事件：

```tsx
const dragStartHandler = useCallback(
  (event: React.DragEvent<HTMLElement>, index: number) => {
    event.dataTransfer.effectAllowed = 'move';
    // set dataTransfer enable mobile drag
    event.dataTransfer.setData('text/plain', index.toString());
    dragItem.current = index;
    copyData.current = deepClone(sortedData);
    recordRect();
    onDragStart?.();
  },
  [sortedData, recordRect, onDragStart]
);
const dragEnterHandler = useCallback(
  (index: number) => {
    if (dragItem.current !== index && dragOverItem.current !== index) {
      dragOverItem.current = index;
      const newData = deepClone(copyData.current);
      const dragData = newData[dragItem.current];
      newData.splice(dragItem.current, 1);
      newData.splice(dragOverItem.current, 0, dragData);
      setSortedData(newData);
      onDragEnter?.();
    }
  },
  [onDragEnter]
);
const dragEndHandler = useCallback(() => {
  updateData?.(sortedData);
  onDragEnd?.();
}, [sortedData, updateData, onDragEnd]);
```

1. dragStart 的时候记录下当前的 index，并复制一份数组数据。
2. dragEnter 的时候记录下拖拽进入的元素 index，然后重新排序数组会渲染一个新的列表
3. dragEnd 的时候同步数据到上层，展示排序后的结果

完整的代码请看文章最后的链接。

## FLIP 动画

当进行拖拽排序的时候，我们想要加上元素移动的动画，可以更明显的感受到顺序的变化。 我们使用 FLIP 技术来完成这个效果。

1. First: 记录当前元素的位置
2. Last: 记录更新后元素的位置
3. Invert: 计算元素在 X 方向和 Y 方向的偏移，然后使用 transform 进行移动
4. Play: 播放 transform 动画

```tsx
useEffect(() => {
  if (draggable && containerRef?.current) {
    Array.from(containerRef.current.querySelectorAll('[data-id]')).forEach(
      async node => {
        const dom = node as HTMLElement;
        const key = dom.dataset.id as string;
        const prevRect = prevRects.current[key];
        if (key) {
          const rect = dom.getBoundingClientRect();
          if (prevRect) {
            const dy = prevRect.y - rect.y;
            const dx = prevRect.x - rect.x;
            dom.style.pointerEvents = 'none';
            dom.animate(
              [
                {
                  transform: `translate(${dx}px, ${dy}px)`
                },
                { transform: 'translate(0, 0)' }
              ],
              {
                duration: TIMEOUT,
                easing: 'linear'
              }
            );
            await Promise.allSettled(
              node.getAnimations().map(animation => animation.finished)
            );
            dom.style.pointerEvents = '';
          }
          prevRects.current[key] = rect;
        }
      }
    );
  }
}, [draggable, sortedData, containerRef]);
```

上面是示例代码，注意这里的 FLIP 动画加了一些特殊处理，我们使用 `pointerEvents` 禁用动画过程中的事件响应，因为动画过程中触发任何 drag 事件会导致 index 顺序被改动，然后无限进行排序操作。
这不是我们期望的结果，然后在动画结束的时候再取消这个 CSS 属性。

## 总结

使用原生的拖拽 API 来实现排序功能更简单和易用，但目前手机浏览器还不支持这个功能。排序中的过渡动画是一个难点，特别是动画过程中移除事件的响应。如果可以使用 JS 的方式来临时禁用所有事件的响应，应该可以处理的更优雅。

## 参考

[HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)

[simple-drag-drop-sort-list](https://github.com/acgotaku/simple-drag-drop-sort-list)

[FLIP Your Animations](https://aerotwist.com/blog/flip-your-animations/)

[Using the HTML5 Drag and Drop API](https://web.dev/drag-and-drop/)
