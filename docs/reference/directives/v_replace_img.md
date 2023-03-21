# v-replace-img

## 用法
##### 给图片元素使用，当图片原链接失效时进行替换




```vue
<template>
    <img src="xxx.jpg" v-replace-img="yyy.jpg" />
</template>
```


## 代码

```js
app.directive('replace-img', {
    async beforeMount(el, {
        value
    }) {
        const imgUrl = value;
        if (imgUrl) {
            const exist = await imgIsExist(imgUrl);
            exist && el.setAttribute('src', imgUrl);
        }

        function imgIsExist(url) {
            return new Promise(resolve => {
                let img = new Image();
                img.src = url;
                img.onload = () => {
                    if (img.complete) {
                        resolve(true);
                        img = null;
                    }
                }
                img.onerror = () => {
                    resolve(false);
                    img = null;
                }
            })
        }
    }
})

```







