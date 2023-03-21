# Radio 单选框

## 基础用法
由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。

<lii-radio :options="options" ></lii-radio>


~~~vue
<template>
    <lii-radio :options="options" ></lii-radio>
</template>
<script setup>
import { reactive } from "vue";
const state = reactive({
  options: [
    {
      label: "选项一",
      value: 1,
    },
    {
      label: "选项二",
      value: 2,
      disabled: true,
    },
    {
      label: "选项三",
      value: 3,
    },
  ],
});
const { options} = state;
</script>

~~~


## 排列样式
设置单选框的排列方式，下面展示为竖向排列
<lii-radio :options="options" :checked="0" :inline="false"></lii-radio>

```vue
<template>
  <lii-radio 
    :options="options"
    :checked="0"
    :inline="false">
  </lii-radio>
</template>
<script setup>
import { reactive } from "vue";
const state = reactive({
  options: [
    {
      label: "选项一",
      value: 0,
    },
    {
      label: "选项二",
      value: 1,
    },
    {
      label: "选项三",
      value: 2,
    },
  ],
});
const { options } = state;
</script>
```



## 禁用状态
单选框不可用的状态，属性中设置disabled为true即可
<lii-radio :options="options1" ></lii-radio>

~~~vue
<template>
  <lii-radio :options="options" ></lii-radio>
</template>

<script>
export default {};
</script>

<script setup>
import { reactive } from "vue";
const state = reactive({
  options: [
    {
      label: "选项一",
      value: 0,
    },
    {
      label: "选项二",
      value: 1,
      disabled: true,
    },
    {
      label: "选项三",
      value: 2,
    },
  ],
});
const { options } = state;
</script>
~~~





## 选框大小
根据需要选择单选框大小。
<lii-radio 
    :options="options" 
    :checked="0" 
    size="big">
</lii-radio>
<lii-radio
    :options="options" 
    :checked="0" 
    size="mid">
</lii-radio>
<lii-radio 
    :options="options" 
    :checked="0" 
    size="small">
</lii-radio>

```vue
<template>
  <lii-radio :options="options" :checked="0" size="big"></lii-radio>
  <lii-radio :options="options" :checked="0" size="mid"></lii-radio>
  <lii-radio :options="options" :checked="0" size="small"></lii-radio>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  options: [
    {
      label: "选项一",
      value: 0,
    },
    {
      label: "选项二",
      value: 1,
    },
    {
      label: "选项三",
      value: 2,
    },
  ],
});
const { options } = state;
</script>
```

## 颜色调节

设置选框颜色

<lii-radio
:options="options"
:checked="0"
customColor="red"
:fontColor="true"></lii-radio>

```vue
<template>
  <lii-radio
    :options="options"
    :checked="0"
    customColor="red"
    :fontColor="true">
  </lii-radio>
</template>
<script setup>
import { reactive } from "vue";
const state = reactive({
    options: [
    {
      label: "选项一",
      value: 0,
    },
    {
      label: "选项二",
      value: 1,
    },
    {
      label: "选项三",
      value: 2,
    },
  ],
});
const { options } = state;
</script>
```




<script setup>
import { reactive } from "vue";
const state = reactive({
  options: [
    {
      label: "选项一",
      value: 1,
    },
    {
      label: "选项二",
      value: 2,
    },
    {
      label: "选项三",
      value: 3,
    },
  ],
  options1:[
    {
      label: "选项一",
      value: 0,
    },
    {
      label: "选项二",
      value: 1,
      disabled: true,
    },
    {
      label: "选项三",
      value: 2,
    },
  ],
  options:[
    {
      label: "选项一",
      value: 0,
    },
    {
      label: "选项二",
      value: 1,
    },
    {
      label: "选项三",
      value: 2,
    },
  ],
});
const { options,options1,options2 } = state;
</script>

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
        <td>options</td>
        <td>渲染单选框数据</td>
        <td>Array</td>
        <td>——</td>
        <td>——</td>
    </tr>
    <tr>
        <td>inline	</td>
        <td>单选框按行排列</td>
        <td>Boolean</td>
        <td>true/false</td>
        <td>true</td>
    </tr>
    <tr>
        <td>size</td>
        <td>单选框大小</td>
        <td>String</td>
        <td>big/nomal/small</td>
        <td>nomal</td>
    </tr>
    <tr>
        <td>filedLabel</td>
        <td>自定义单选框标签名</td>
        <td>String</td>
        <td>——</td>
        <td>label</td>
    </tr>
    <tr>
        <td>filedValue</td>
        <td>自定义单选框值	</td>
        <td>String</td>
        <td>——</td>
        <td>value</td>
    </tr>
    <tr>
        <td>customColor</td>
        <td>自定义单选框颜色	</td>
        <td>String</td>
        <td>颜色值(rgb/rgba/hex/hsl)</td>
        <td>#409eff</td>
    </tr>
    <tr>
        <td>fontColor</td>
        <td>是否显示标签名颜色	</td>
        <td>Boolean</td>
        <td>true/false</td>
        <td>false</td>
    </tr>
    <tr>
        <td>checked</td>
        <td>选中第几个单选框</td>
        <td>Number</td>
        <td>-1~options.length</td>
        <td>-1(不选中)</td>
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
        <td>change</td>
        <td>选项发生变化时触发</td>
        <td>(event: Value)</td>
        <td>change=(value)=>{console.log(value)}</td>
    </tr>
</table>