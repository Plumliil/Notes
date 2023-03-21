<template><div><h1 id="textarea-文本域" tabindex="-1"><a class="header-anchor" href="#textarea-文本域" aria-hidden="true">#</a> Textarea 文本域</h1>
<h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h2>
<p><lii-textarea
    placeholder="请输入..."></lii-textarea></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-textarea</span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入...<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-textarea</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="大小调节" tabindex="-1"><a class="header-anchor" href="#大小调节" aria-hidden="true">#</a> 大小调节</h2>
<p>通过传入resize值来选择是否调节文本域大小</p>
<p><lii-textarea
    :resize="false"
    placeholder="请输入...">
</lii-textarea></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-textarea</span>
    <span class="token attr-name">:resize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-textarea</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字数限制" tabindex="-1"><a class="header-anchor" href="#字数限制" aria-hidden="true">#</a> 字数限制</h2>
<p>通过传入maxlength值来选择是否调节文本域大小</p>
<p><lii-textarea
    :resize="false"
    :maxlength="10"
    placeholder="请输入...">
</lii-textarea></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-textarea</span>
    <span class="token attr-name">:resize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>
    <span class="token attr-name">:maxlength</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-textarea</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
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
<h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2>
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
</div></template>
