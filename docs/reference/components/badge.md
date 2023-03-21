# Badge 标记

## 基本用法
展示信息条数

<div>
  <lii-badge value="1">
    <lii-button size="mids">标记</lii-button>
  </lii-badge>
  <lii-badge value="12">
    <lii-button size="mids">标记</lii-button>
  </lii-badge>
  <lii-badge value="12">
    <lii-button size="small">标记</lii-button>
  </lii-badge>
  <lii-badge value="12">
    <lii-button size="mini">标记</lii-button>
  </lii-badge>
  <lii-badge value="122">
    <lii-button size="mini">标记</lii-button>
  </lii-badge>
</div>

```vue
<template>
  <lii-badge value="1">
    <lii-button size="mids">标记</lii-button>
  </lii-badge>
  <lii-badge value="12">
    <lii-button size="mids">标记</lii-button>
  </lii-badge>
  <lii-badge value="12">
    <lii-button size="small">标记</lii-button>
  </lii-badge>
  <lii-badge value="12">
    <lii-button size="mini">标记</lii-button>
  </lii-badge>
  <lii-badge value="122">
    <lii-button size="mini">标记</lii-button>
  </lii-badge>
</template>
```

## 其他用法
其他标记值

<div>
    <lii-badge value="new">
        <lii-button size="mini">标记</lii-button>
    </lii-badge>
    <lii-badge value="hots">
      <lii-button size="mini">标记</lii-button>
    </lii-badge>
    <lii-badge value="热门">
      <lii-button size="mini">标记</lii-button>
    </lii-badge>
</div>

```vue
<template>
  <div>
    <lii-badge value="new">
      <lii-button size="mini">标记</lii-button>
    </lii-badge>
    <lii-badge value="hots">
      <lii-button size="mini">标记</lii-button>
    </lii-badge>
    <lii-badge value="热门">
      <lii-button size="mini">标记</lii-button>
    </lii-badge>
  </div>
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
        <td>value</td>
        <td>标记值</td>
        <td>String|Number</td>
        <td>——</td>
        <td>——</td>
    </tr>
</table>