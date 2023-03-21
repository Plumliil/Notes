# v-lazy-img

## 介绍
##### 通过使用该指令实现图片懒加载

## 用法
##### 给图片元素使用，当图片出现在可视区域是实现图片显示




```vue
<template>
    <img v-replace-img="xxx.jpg" />
</template>
```

## 代码

```js
app.directive('lazy-img', {
       beforeMount(el, {
        value
    }) {
        el.lii_data_src = value;
    },
    mounted(el, {
        value
    }) {
        // 浏览器支持判断，懒加载
        loadImg(el);
        window.addEventListener('scroll', () => {
            loadImg(el);
          })
    },
    updated(el, {
        value
    }) {
        el.lii_data_src = value;
    },
    unmounted(el) {
        el.lii_io.disconnect();
    }
})
// 其他浏览器
function ioEvent(el) {
    const io = new IntersectionObserver(entries => {
        const realSrc = el.lii_data_src;
        // 通过isIntersecting判断是否在可视区域内
        entries[0].isIntersecting && realSrc && (el.src = realSrc);
    })
    // 挂载实例, 提供给后续的unmounted钩子操作
    el.lii_io = io;
    // 监听目标对象
    io.observe(el);
}
// ie适配
function loadImg(el) {
    const clientHeight = getClientHight();
    const {
        top,
        bottom
    } = el.getBoundingClientRect();
    const realSrc = el.lii_data_src;
    (top < clientHeight && bottom > 0) && realSrc && (el.src = realSrc);
}
// 获取高度
function getClientHight() {
    const dClientHeight = document.documentElement.clientHeight;
    const bodyClientHeight = document.body.clientHeight;
    let clientHeight = 0;
    if (bodyClientHeight && dClientHeight) {
        clientHeight = bodyClientHeight < dClientHeight ? bodyClientHeight : dClientHeight;
    } else {
        clientHeight = bodyClientHeight > dClientHeight ? bodyClientHeight : dClientHeight;
    }
    return clientHeight;
}
// 节流 在一定时间范围内减少事件的触发频率
function throttler(fn,delay){
    let last,deferTimer;
    return function(arge){
        let _args=arguments;
        let now= +new Date();
        if(last&&now<last+delay){
            clearTimeout(deferTimer);
            deferTimer= setTimeout(() => {
                last=now;
                fn.apply(this,_args);
            }, delay);
        }else{
            last=now;
            fn.apply(this._args)
        }
    }
}
```