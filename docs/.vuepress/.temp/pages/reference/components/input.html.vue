<template><div><h1 id="input-输入框" tabindex="-1"><a class="header-anchor" href="#input-输入框" aria-hidden="true">#</a> input 输入框</h1>
<h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h2>
<p>基础样式</p>
<lii-input></lii-input>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-input</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-input</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="禁止状态" tabindex="-1"><a class="header-anchor" href="#禁止状态" aria-hidden="true">#</a> 禁止状态</h2>
<p>不可用</p>
<lii-input placeholder="请输入内容..." disabled />
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-input</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入内容...<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="尺寸" tabindex="-1"><a class="header-anchor" href="#尺寸" aria-hidden="true">#</a> 尺寸</h2>
<p>三种尺寸</p>
<hr style="opacity: 0;">
<lii-input placeholder="请输入内容..." size="big" />
<hr style="opacity: 0;">
<lii-input placeholder="请输入内容..." size="mid" />
<hr style="opacity: 0;">
<lii-input placeholder="请输入内容..." size="small" />
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-input</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入内容...<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>big<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-input</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入内容...<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mid<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-input</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入内容...<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
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
        <td>输入框内输入内容时触发</td>
        <td>(event: Value)</td>
        <td>focus=(e)=>{console.log(e)}</td>
    </tr>
</table></div></template>
