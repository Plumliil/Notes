# Button 按钮

## 基本用法
基础的按钮用法。
<div>
    <div>
      <lii-button></lii-button>
      <lii-button type="primary">主要按钮</lii-button>
      <lii-button type="success">成功按钮</lii-button>
      <lii-button type="info">信息按钮</lii-button>
      <lii-button type="warning">警告按钮</lii-button>
      <lii-button type="danger">危险按钮</lii-button>
    </div>
    <div>
      <lii-button plain>朴素按钮</lii-button>
      <lii-button type="primary" plain>主要按钮</lii-button>
      <lii-button type="success" plain>成功按钮</lii-button>
      <lii-button type="info" plain>信息按钮</lii-button>
      <lii-button type="warning" plain>警告按钮</lii-button>
      <lii-button type="danger" plain>危险按钮</lii-button>
    </div>
    <div>
      <lii-button round>圆角按钮</lii-button>
      <lii-button type="primary" round>主要按钮</lii-button>
      <lii-button type="success" round>成功按钮</lii-button>
      <lii-button type="info" round>信息按钮</lii-button>
      <lii-button type="warning" round>警告按钮</lii-button>
      <lii-button type="danger" round>危险按钮</lii-button>
    </div>
    <div>
      <lii-button circle>圆形</lii-button>
      <lii-button type="primary" circle>主要</lii-button>
      <lii-button type="success" circle>成功</lii-button>
      <lii-button type="info" circle>信息</lii-button>
      <lii-button type="warning" circle>警告</lii-button>
      <lii-button type="danger" circle>危险</lii-button>
    </div>
</div>

```vue
<template>
   <div>
      <lii-button></lii-button>
      <lii-button type="primary">主要按钮</lii-button>
      <lii-button type="success">成功按钮</lii-button>
      <lii-button type="info">信息按钮</lii-button>
      <lii-button type="warning">警告按钮</lii-button>
      <lii-button type="danger">危险按钮</lii-button>
    </div>
    <div>
      <lii-button plain>朴素按钮</lii-button>
      <lii-button type="primary" plain>主要按钮</lii-button>
      <lii-button type="success" plain>成功按钮</lii-button>
      <lii-button type="info" plain>信息按钮</lii-button>
      <lii-button type="warning" plain>警告按钮</lii-button>
      <lii-button type="danger" plain>危险按钮</lii-button>
    </div>
    <div>
      <lii-button round>圆角按钮</lii-button>
      <lii-button type="primary" round>主要按钮</lii-button>
      <lii-button type="success" round>成功按钮</lii-button>
      <lii-button type="info" round>信息按钮</lii-button>
      <lii-button type="warning" round>警告按钮</lii-button>
      <lii-button type="danger" round>危险按钮</lii-button>
    </div>
    <div>
      <lii-button circle>圆形</lii-button>
      <lii-button type="primary" circle>主要</lii-button>
      <lii-button type="success" circle>成功</lii-button>
      <lii-button type="info" circle>信息</lii-button>
      <lii-button type="warning" circle>警告</lii-button>
      <lii-button type="danger" circle>危险</lii-button>
    </div>
</template>
```

## 禁用状态
按钮不可用状态。


<div>
    <div>
      <lii-button disabled></lii-button>
      <lii-button type="primary" disabled>主要按钮</lii-button>
      <lii-button type="success" disabled>成功按钮</lii-button>
      <lii-button type="info" disabled>信息按钮</lii-button>
      <lii-button type="warning" disabled>警告按钮</lii-button>
      <lii-button type="danger" disabled>危险按钮</lii-button>
    </div>
    <div>
      <lii-button plain disabled>朴素按钮</lii-button>
      <lii-button type="primary" plain disabled>主要按钮</lii-button>
      <lii-button type="success" plain disabled>成功按钮</lii-button>
      <lii-button type="info" plain disabled>信息按钮</lii-button>
      <lii-button type="warning" plain disabled>警告按钮</lii-button>
      <lii-button type="danger" plain disabled>危险按钮</lii-button>
    </div>
</div>

```vue
<template>
    <div>
      <lii-button disabled></lii-button>
      <lii-button type="primary" disabled>主要按钮</lii-button>
      <lii-button type="success" disabled>成功按钮</lii-button>
      <lii-button type="info" disabled>信息按钮</lii-button>
      <lii-button type="warning" disabled>警告按钮</lii-button>
      <lii-button type="danger" disabled>危险按钮</lii-button>
    </div>
    <div>
      <lii-button plain disabled>朴素按钮</lii-button>
      <lii-button type="primary" plain disabled>主要按钮</lii-button>
      <lii-button type="success" plain disabled>成功按钮</lii-button>
      <lii-button type="info" plain disabled>信息按钮</lii-button>
      <lii-button type="warning" plain disabled>警告按钮</lii-button>
      <lii-button type="danger" plain disabled>危险按钮</lii-button>
    </div>
</template>
```

## 大小选择
设置按钮大小

<div>
    <div>
      <lii-button size="big"></lii-button>
      <lii-button type="primary" size="big">主要按钮</lii-button>
      <lii-button type="success" size="big">成功按钮</lii-button>
    </div>
    <div>
      <lii-button>默认按钮</lii-button>
      <lii-button type="primary">主要按钮</lii-button>
      <lii-button type="success">成功按钮</lii-button>
    </div>
    <div>
      <lii-button size="small">默认按钮</lii-button>
      <lii-button type="primary" size="small">主要按钮</lii-button>
      <lii-button type="success" size="small">成功按钮</lii-button>
    </div>
    <div>
      <lii-button size="mini">默认按钮</lii-button>
      <lii-button type="primary" size="mini">主要按钮</lii-button>
      <lii-button type="success" size="mini">成功按钮</lii-button>
    </div>
</div>

```vue
<template>
    <div>
      <lii-button size="big"></lii-button>
      <lii-button type="primary" size="big">主要按钮</lii-button>
      <lii-button type="success" size="big">成功按钮</lii-button>
    </div>
    <div>
      <lii-button>默认按钮</lii-button>
      <lii-button type="primary">主要按钮</lii-button>
      <lii-button type="success">成功按钮</lii-button>
    </div>
    <div>
      <lii-button size="small">默认按钮</lii-button>
      <lii-button type="primary" size="small">主要按钮</lii-button>
      <lii-button type="success" size="small">成功按钮</lii-button>
    </div>
    <div>
      <lii-button size="mini">默认按钮</lii-button>
      <lii-button type="primary" size="mini">主要按钮</lii-button>
      <lii-button type="success" size="mini">成功按钮</lii-button>
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
        <td>type</td>
        <td>按钮类型</td>
        <td>String</td>
        <td>primary,success,warning,danger,info	</td>
        <td>——</td>
    </tr>
    <tr>
        <td>size</td>
        <td>按钮大小</td>
        <td>String</td>
        <td>big/mid/small/mini</td>
        <td>mid</td>
    </tr>
    <tr>
        <td>plain</td>
        <td>是否朴素按钮</td>
        <td>Boolean</td>
        <td>true/false</td>
        <td>false</td>
    </tr>
    <tr>
        <td>round</td>
        <td>是否圆角按钮</td>
        <td>Boolean</td>
        <td>true/false</td>
        <td>false</td>
    </tr>
    <tr>
        <td>circle</td>
        <td>是否圆形按钮</td>
        <td>Boolean</td>
        <td>true/false</td>
        <td>false</td>
    </tr>
    <tr>
        <td>disabled</td>
        <td>是否按钮禁用</td>
        <td>Boolean</td>
        <td>true/false</td>
        <td>false</td>
    </tr>
    <tr>
        <td>customColor</td>
        <td>自定义按钮颜色</td>
        <td>String</td>
        <td>true/false</td>
        <td>#ffffff</td>
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