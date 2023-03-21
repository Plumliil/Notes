<template><div><h1 id="button-按钮" tabindex="-1"><a class="header-anchor" href="#button-按钮" aria-hidden="true">#</a> Button 按钮</h1>
<h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h2>
<p>基础的按钮用法。</p>
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
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>主要按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>成功按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>信息按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>警告按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>危险按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">plain</span><span class="token punctuation">></span></span>朴素按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span><span class="token punctuation">></span></span>主要按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span><span class="token punctuation">></span></span>成功按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span><span class="token punctuation">></span></span>信息按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span><span class="token punctuation">></span></span>警告按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span><span class="token punctuation">></span></span>危险按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">round</span><span class="token punctuation">></span></span>圆角按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">round</span><span class="token punctuation">></span></span>主要按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">round</span><span class="token punctuation">></span></span>成功按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span> <span class="token attr-name">round</span><span class="token punctuation">></span></span>信息按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span> <span class="token attr-name">round</span><span class="token punctuation">></span></span>警告按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span> <span class="token attr-name">round</span><span class="token punctuation">></span></span>危险按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">circle</span><span class="token punctuation">></span></span>圆形<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">circle</span><span class="token punctuation">></span></span>主要<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">circle</span><span class="token punctuation">></span></span>成功<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span> <span class="token attr-name">circle</span><span class="token punctuation">></span></span>信息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span> <span class="token attr-name">circle</span><span class="token punctuation">></span></span>警告<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span> <span class="token attr-name">circle</span><span class="token punctuation">></span></span>危险<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="禁用状态" tabindex="-1"><a class="header-anchor" href="#禁用状态" aria-hidden="true">#</a> 禁用状态</h2>
<p>按钮不可用状态。</p>
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
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>主要按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>成功按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>信息按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>警告按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>危险按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">plain</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>朴素按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>主要按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>成功按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>信息按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>警告按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>危险按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="大小选择" tabindex="-1"><a class="header-anchor" href="#大小选择" aria-hidden="true">#</a> 大小选择</h2>
<p>设置按钮大小</p>
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
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>big<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>big<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>主要按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>big<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>成功按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span><span class="token punctuation">></span></span>默认按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>主要按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>成功按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>默认按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>主要按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>成功按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>默认按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>主要按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lii-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>成功按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lii-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
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
