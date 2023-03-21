# input 输入框



## 基础用法
基础样式
<lii-input></lii-input>

```vue
<template>
 <lii-input></lii-input>
</template>
```

## 禁止状态
不可用
<lii-input placeholder="请输入内容..." disabled />

```vue
<template>
<lii-input placeholder="请输入内容..." disabled />
</template>
```

## 尺寸
三种尺寸
<hr style="opacity: 0;">
<lii-input placeholder="请输入内容..." size="big" />
<hr style="opacity: 0;">
<lii-input placeholder="请输入内容..." size="mid" />
<hr style="opacity: 0;">
<lii-input placeholder="请输入内容..." size="small" />

```vue
<template>
    <lii-input placeholder="请输入内容..." size="big" />
    <lii-input placeholder="请输入内容..." size="mid" />
    <lii-input placeholder="请输入内容..." size="small" />
</template>
```


## 属性
<table style="text-align:center">
    <tr>
        <td>参数</td>
        <td>说明 </td>
        <td>类型</td>
        <td>可选值</td>
        <td>默认值</td>
    </tr>
    <tr>
        <td>size</td>
        <td>输入框大小	</td>
        <td>String</td>
        <td>big/mid/small	</td>
        <td>mid</td>
    </tr>
    <tr>
        <td>disabled</td>
        <td>单选框按行排列</td>
        <td>输入框是否禁用</td>
        <td>true/false</td>
        <td>false</td>
    </tr>
    <tr>
        <td>placeholder</td>
        <td>输入框内默认内容</td>
        <td>String</td>
        <td>-1~options.length</td>
        <td>请输入…</td>
    </tr>
</table>

## 事件
<table style="text-align:center">
    <tr>
        <td>事件名称</td>
        <td>说明</td>
        <td>回调参数</td>
        <td>示例</td>
    </tr>
    <tr>
        <td>input</td>
        <td>输入框内输入内容时触发</td>
        <td>(event: Value)</td>
        <td>focus=(e)=>{console.log(e)}</td>
    </tr>
</table>