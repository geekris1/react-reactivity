最近看了下`@vue/reactivity`的实现
所以想到搬到`react`中试试(自己实现的`reactivity`方法)

### Use

```javascript
function App() {
  let proxy = useReactive({ count: 0 });
  return <div onClick={() => (proxy.count += 1)}>{proxy.count}</div>;
}
```
