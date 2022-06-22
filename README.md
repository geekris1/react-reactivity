最近看了下`@vue/reactivity`的实现
所以想到搬到`react`中试试(自己实现的`reactivity`方法)

### Use

```javascript
function App() {
  let proxy = useReactive({ count: 0 });
  return <div onClick={() => (proxy.count += 1)}>{proxy.count}</div>;
}
```

你也可以放心的这样使用，这并不好导致你的页面多次渲染(当然内部的 `effect` 函数还是会多次执行，但影响不大)

```javascript
function App() {
  let proxy = useReactive({ count: 0 });
  return (
    <div
      onClick={() => {
        // 值会每次点击都+3
        proxy.count += 1;
        proxy.count += 1;
        proxy.count += 1;
      }}
    >
      {proxy.count}
    </div>
  );
}
```
