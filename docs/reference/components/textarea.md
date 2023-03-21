# Textarea 文本域

## 基础用法
  <lii-textarea
    placeholder="请输入..."></lii-textarea>

```vue
<template>
  <lii-textarea
    placeholder="请输入..."
  ></lii-textarea>
</template>
```

## 大小调节
通过传入resize值来选择是否调节文本域大小

  <lii-textarea
    :resize="false"
    placeholder="请输入...">
    </lii-textarea>

```vue
<template>
  <lii-textarea
    :resize="false"
    placeholder="请输入...">
  </lii-textarea>
</template>
```

## 字数限制
通过传入maxlength值来选择是否调节文本域大小

  <lii-textarea
    :resize="false"
    :maxlength="10"
    placeholder="请输入...">
    </lii-textarea>

```vue
<template>
  <lii-textarea
    :resize="false"
    :maxlength="10"
    placeholder="请输入...">
  </lii-textarea>
</template>
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
        <td>rows</td>
        <td>行</td>
        <td>Number</td>
        <td>——</td>
        <td>4</td>
    </tr>
    <tr>
        <td>cols</td>
        <td>列</td>
        <td>Number</td>
        <td>——</td>
        <td>30</td>
    </tr>
    <tr>
        <td>resize</td>
        <td>调节选框</td>
        <td>Boolean</td>
        <td>true/false</td>
        <td>false</td>
    </tr>
    <tr>
        <td>disabled</td>
        <td>禁用选项</td>
        <td>Boolean</td>
        <td>true/false</td>
        <td>false</td>
    </tr>
    <tr>
        <td>readonly</td>
        <td>只读选项</td>
        <td>Boolean</td>
        <td>true/false</td>
        <td>false</td>
    </tr>
    <tr>
        <td>maxlength</td>
        <td>可输入文本字数</td>
        <td>Number</td>
        <td>——</td>
        <td>infinity</td>
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
        <td>文本域内输入内容时触发</td>
        <td>(event: Value)</td>
        <td>focus=(e)=>{console.log(e)}</td>
    </tr>
    <tr>
        <td>focus</td>
        <td>文本域获得焦点后触发</td>
        <td>(event: Value)</td>
        <td>focus=(e)=>{console.log(e)}</td>
    </tr>
    <tr>
        <td>blur</td>
        <td>文本域失去焦点后触发</td>
        <td>(event: Value)</td>
        <td>focus=(e)=>{console.log(e)}</td>
    </tr>
</table>
