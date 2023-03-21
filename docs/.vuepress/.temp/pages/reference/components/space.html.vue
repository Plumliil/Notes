<template><div><h1 id="space-间距" tabindex="-1"><a class="header-anchor" href="#space-间距" aria-hidden="true">#</a> space 间距</h1>
<h2 id="基本" tabindex="-1"><a class="header-anchor" href="#基本" aria-hidden="true">#</a> 基本</h2>
<p>基本用法</p>
<lii-space >
    <lii-button>测试</lii-button>
    <lii-button>测试</lii-button>
    <lii-button>测试</lii-button>
</lii-space>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-space</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span><span class="token punctuation">></span></span>测试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span><span class="token punctuation">></span></span>测试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span><span class="token punctuation">></span></span>测试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-space</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="排列" tabindex="-1"><a class="header-anchor" href="#排列" aria-hidden="true">#</a> 排列</h2>
<p>竖向排列</p>
<lii-space :inline="false">
    <lii-button>测试</lii-button>
    <lii-button>测试</lii-button>
    <lii-button>测试</lii-button>
</lii-space>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-space</span> <span class="token attr-name">:inline</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span><span class="token punctuation">></span></span>测试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span><span class="token punctuation">></span></span>测试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span><span class="token punctuation">></span></span>测试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-space</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="调整间距" tabindex="-1"><a class="header-anchor" href="#调整间距" aria-hidden="true">#</a> 调整间距</h2>
<p>间距分别为30,20,10</p>
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
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-space</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[30,30]<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span><span class="token punctuation">></span></span>测试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span><span class="token punctuation">></span></span>测试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span><span class="token punctuation">></span></span>测试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-space</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-space</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[20,20]<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span><span class="token punctuation">></span></span>测试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span><span class="token punctuation">></span></span>测试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span><span class="token punctuation">></span></span>测试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-space</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-space</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[10,10]<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span><span class="token punctuation">></span></span>测试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span><span class="token punctuation">></span></span>测试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span><span class="token punctuation">></span></span>测试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-space</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
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
</div></template>
