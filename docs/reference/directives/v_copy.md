# v-copy

## 介绍
##### 通过使用该指令实现点击复制

## 用法
##### 1.点击复制元素内文字

<lii-button>点我复制</lii-button>

```vue
<template>
    <lii-button v-copy>点我复制</lii-button>
</template>
```

##### 2.通过设置特定文本进行复制

<lii-button>点我复制</lii-button>

```vue
<template>
    <lii-button v-copy="message">点我复制</lii-button>
</template>
<script setup>
    import {ref} from 'vue';
    const message="我是需要复制的特定文本"
</script>
```

##### 3.复制成功后的回调函数
<lii-button>点我复制</lii-button>

```vue
<template>
    <lii-button v-copy:[success]>点我复制</lii-button>
</template>
<script setup>
    const success=()=>{
        console.log('复制成功)
    }
</script>
```

## 代码

```js
app.directive('copy', {
    beforeMount(el, {
        value,
        arg
    }) {
        el.targetContent = value;
        const success = arg;
        el.addEventListener('click', () => {
            if (!el.targetContent && !el.textContent) return console.warn('没有需要复制的目标内容');
            const textarea = document.createElement('textarea');
            // 设置相关属性
            textarea.readOnly = 'readonly';
            textarea.style.position = 'fixed';
            textarea.style.top = '-99999px';
            textarea.value = el.targetContent || el.textContent;
            document.body.appendChild(textarea);
            textarea.select();
            const res = document.execCommand('Copy');
            res && console.log('复制成功，剪贴板内容：' + value || el.textContent);
            res && success ? success(el.targetContent || el.textContent) : console.log('复制成功，剪贴板内容：' + el.targetContent || el.textContent);
            document.body.removeChild(textarea);
        }, true)
    },
    updated(el, {
        value
    }) {
        el.targetContent = value;
    },
    unmounted(el) {
        el.removeEventListener('click', () => {})
    }
})

```