# v-focus

## 用法
##### 输入框聚焦

```vue
<template>
    <input v-focus />
</template>
```

## 代码
```js
app.directive('focus', {
    beforeMount: (el) => {
        // 在元素上做些操作
        nextTick(() => {
          el.focus() //获取焦点
        })
      }
})
```
> nextTick 是将回调推迟到下一个 DOM 更新周期之后执行。在更改了一些数据以等待 DOM 更新后立即使用它