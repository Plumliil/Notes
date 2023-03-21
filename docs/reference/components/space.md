# space 间距

## 基本
基本用法
<lii-space >
    <lii-button>测试</lii-button>
    <lii-button>测试</lii-button>
    <lii-button>测试</lii-button>
</lii-space>

```vue
<template>
    <lii-space>
        <lii-button>测试</lii-button>
        <lii-button>测试</lii-button>
        <lii-button>测试</lii-button>
    </lii-space>
</template>
```


## 排列
竖向排列
<lii-space :inline="false">
    <lii-button>测试</lii-button>
    <lii-button>测试</lii-button>
    <lii-button>测试</lii-button>
</lii-space>



```vue
<template>
  <lii-space :inline="false">
    <lii-button>测试</lii-button>
    <lii-button>测试</lii-button>
    <lii-button>测试</lii-button>
  </lii-space>
</template>
```
## 调整间距
间距分别为30,20,10
<lii-space :size="[30,30]" >
        <lii-button>测试</lii-button>
        <lii-button>测试</lii-button>
        <lii-button>测试</lii-button>
    </lii-space>
    <lii-space :size="[20,20]" >
        <lii-button>测试</lii-button>
        <lii-button>测试</lii-button>
        <lii-button>测试</lii-button>
    </lii-space>
    <lii-space :size="[10,10]" >
        <lii-button>测试</lii-button>
        <lii-button>测试</lii-button>
        <lii-button>测试</lii-button>
    </lii-space>

```vue
<template>
    <lii-space :size="[30,30]" >
        <lii-button>测试</lii-button>
        <lii-button>测试</lii-button>
        <lii-button>测试</lii-button>
    </lii-space>
    <lii-space :size="[20,20]" >
        <lii-button>测试</lii-button>
        <lii-button>测试</lii-button>
        <lii-button>测试</lii-button>
    </lii-space>
    <lii-space :size="[10,10]" >
        <lii-button>测试</lii-button>
        <lii-button>测试</lii-button>
        <lii-button>测试</lii-button>
    </lii-space>
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
        <td>inline</td>
        <td>是否按行排列	</td>
        <td>Boolean</td>
        <td>true/false</td>
        <td>true</td>
    </tr>
    <tr>
        <td>size</td>
        <td>组件内元素间隔</td>
        <td>Array[Number,Number]</td>
        <td>——</td>
        <td>[10,10]</td>
    </tr>
</table>
