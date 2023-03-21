# Select 下拉框

## 基本使用
<lii-select :options="options"></lii-select>


```vue
<template>
  <lii-select :options="options"></lii-select>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  options: [
    {
      label: "选项一",
      value: "0",
    },
    {
      label: "选项二",
      value: "1",
    },
    {
      label: "选项三",
      value: "2",
    }
  ],
});
const { options } = state;
</script>

```

## 禁用状态

<lii-select
    :options="options1"
    filedLabel="name"
    filedValue="id"
    @change="getSelect"></lii-select>

```vue
<template>
  <lii-select
    :options="options"
    filedLabel="name"
    filedValue="id"
  ></lii-select>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  options: [
    {
      name: "选项一",
      id: "0",
    },
    {
      name: "选项二",
      id: "1",
    },
    {
      name: "选项三",
      id: "2",
    }
  ],
});
const { options } = state;
</script>
```


## 默认选中

<lii-select
    :options="options"
    v-model="selVal">
    </lii-select>

```vue
<template>
  <lii-select
    :options="options"
    filedLabel="name"
    filedValue="id"
    @change="getSelect"
  ></lii-select>
</template>

<script setup>
import { reactive, ref } from "vue";
const selVal=ref('0');
const state = reactive({
  options: [
    {
      name: "选项一",
      id: "0",
    },
    {
      name: "选项二",
      id: "1",
    },
    {
      name: "选项三",
      id: "2",
    }
  ],
});
const { options } = state;
const getSelect = (v) => {
  console.log(v);
};
</script>
```







## 属性
<table style="text-align:center">
    <tr>
        <td>参数</td>
        <td>说明</td>
        <td>类型</td>
        <td>可选值</td>
        <td>默认值</td>
    </tr>
    <tr>
        <td>options</td>
        <td>渲染选项数据</td>
        <td>Boolean</td>
        <td>——</td>
        <td>true</td>
    </tr>
    <tr>
        <td>disabled</td>
        <td>选框是否可用</td>
        <td>Boolean</td>
        <td>——</td>
        <td>true</td>
    </tr>
    <tr>
        <td>filedLabel</td>
        <td>选择选项名</td>
        <td>String</td>
        <td>——</td>
        <td>label</td>
    </tr>
    <tr>
        <td>filedValue</td>
        <td>选择选项值</td>
        <td>String</td>
        <td>——</td>
        <td>value</td>
    </tr>
    <tr>
        <td>placeholder</td>
        <td>选框默认值</td>
        <td>String</td>
        <td>——</td>
        <td>请选择</td>
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









<script setup>
import { reactive, ref } from "vue";
const selVal=ref('0');
const state = reactive({
  options: [
    {
      label: "选项一",
      value: "0",
    },
    {
      label: "选项二",
      value: "1",
    },
    {
      label: "选项三",
      value: "2",
    }
  ],
  options1: [
    {
      name: "选项一",
      id: "0",
    },
    {
      name: "选项二",
      id: "1",
      disabled: true,
    },
    {
      name: "选项三",
      id: "2",
    }
  ],
});
const { options,options1 } = state;
const getSelect = (v) => {
  console.log(v);
};
</script>
