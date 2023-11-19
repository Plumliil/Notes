<template><div><h1 id="基础篇" tabindex="-1"><a class="header-anchor" href="#基础篇" aria-hidden="true">#</a> 基础篇</h1>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p>less 是一门 css 的预处理语言
简单来说，less 是 css 的增强版，通过 less 可以编写更少的代码来实现相同的效果</p>
<p>vscode 中安装 easyless 插件，来对 less 文件进行编译</p>
<h2 id="对比" tabindex="-1"><a class="header-anchor" href="#对比" aria-hidden="true">#</a> 对比</h2>
<h3 id="css-缺点" tabindex="-1"><a class="header-anchor" href="#css-缺点" aria-hidden="true">#</a> css 缺点</h3>
<p>css 虽然也支持使用变量但是兼容不好</p>
<ul>
<li>var( ) 定义变量</li>
<li>calc ( ) 运算</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">html</span> <span class="token punctuation">{</span>
  <span class="token comment">/* css原生也支持设置变量 */</span>
  <span class="token property">--color</span><span class="token punctuation">:</span> #bfa<span class="token punctuation">;</span>
  <span class="token property">--length</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box1</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100px * 2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--length<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="less-优点" tabindex="-1"><a class="header-anchor" href="#less-优点" aria-hidden="true">#</a> less 优点</h3>
<ul>
<li>在 less 中增加了许多新特性，如对变量的支持，对 mixin 的支持</li>
<li>less 语法大体上和 css 语法一致，但是 less 中增添了许多 css 的扩展</li>
<li>浏览器无法直接编译 less，需要间 less 转译成 css 才能在浏览器中编译</li>
</ul>
<h2 id="less-基本使用" tabindex="-1"><a class="header-anchor" href="#less-基本使用" aria-hidden="true">#</a> less 基本使用</h2>
<div class="language-less line-numbers-mode" data-ext="less"><pre v-pre class="language-less"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fba<span class="token punctuation">;</span>
  <span class="token selector">.box1</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #bfa<span class="token punctuation">;</span>
    <span class="token selector">.box2</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
      <span class="token selector">.box4</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 75px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 75px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.box3</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>// 单行注释</li>
<li>/**/ 多行注释</li>
</ul>
<h2 id="less-中的变量" tabindex="-1"><a class="header-anchor" href="#less-中的变量" aria-hidden="true">#</a> less 中的变量</h2>
<p>变量，在变量中可以储存一个值，并且可以在需要时任意修改这个值</p>
<ul>
<li>变量语法 @变量名</li>
<li>使用变量时，如果直接使用，使用变量名即可</li>
<li>作为类名或者一部分值使用时必须以 @{变量名} 的形式使用</li>
<li>变量重名时会使用较近的变量</li>
<li>可以在变量声明前就使用变量</li>
<li>可以通过$来引用相同数值 <code v-pre>width: 50px;height: $width;</code></li>
</ul>
<div class="language-less line-numbers-mode" data-ext="less"><pre v-pre class="language-less"><code><span class="token variable">@a<span class="token punctuation">:</span></span>100px<span class="token punctuation">;</span>
<span class="token variable">@b<span class="token punctuation">:</span></span>black<span class="token punctuation">;</span>
<span class="token variable">@c<span class="token punctuation">:</span></span>box6<span class="token punctuation">;</span>
<span class="token selector">.box</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@a</span><span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">@a</span><span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">@b</span><span class="token punctuation">;</span>
    <span class="token selector">.@{c}</span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> $width<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
        <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'@{c}/1.png'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="特殊符号" tabindex="-1"><a class="header-anchor" href="#特殊符号" aria-hidden="true">#</a> 特殊符号</h2>
<ul>
<li>&amp; 为父元素设置 hover 等 &amp; &amp;表示父层元素</li>
</ul>
<div class="language-less line-numbers-mode" data-ext="less"><pre v-pre class="language-less"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token selector">&amp;:hover</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> paleturquoise<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">div &amp;</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 编译后</span>
<span class="token selector">.box:hover</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> paleturquoise<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div .box</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时&amp;表示.box</p>
<h2 id="扩展混合" tabindex="-1"><a class="header-anchor" href="#扩展混合" aria-hidden="true">#</a> 扩展混合</h2>
<ul>
<li>:extend(xx) 扩展 对当前选择器扩展指定的选择器样式</li>
<li>mixin 混合 .xx{ .yy() } 将 yy 的样式直接复制一遍给 xx</li>
<li>使用类选择器时，可以在选择器后添加括号，此时实际上就创建了一个 mixin</li>
<li>混合函数 在混合函数中可直接设置变量</li>
</ul>
<div class="language-less line-numbers-mode" data-ext="less"><pre v-pre class="language-less"><code><span class="token comment">// :extend(xx) 扩展 对当前选择器扩展指定的选择器样式</span>
<span class="token selector">.p1</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.p2:extend(.p1)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 编译后</span>
<span class="token selector">.p1,
.p2</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.p2</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-less line-numbers-mode" data-ext="less"><pre v-pre class="language-less"><code><span class="token comment">// mixin 混合</span>
<span class="token comment">// .xx{ .yy() } 将yy的样式直接复制一遍给xx</span>
<span class="token selector">.p3</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.p1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token mixin-usage function">.p2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 编译后</span>
<span class="token selector">.p3</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-less line-numbers-mode" data-ext="less"><pre v-pre class="language-less"><code><span class="token comment">// 使用类选择器时，可以在选择器后添加括号，此时实际上就创建了一个mixin</span>
<span class="token selector">.p4()</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.p5</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token mixin-usage function">.p4</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 编译后</span>
<span class="token selector">.p5</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-less line-numbers-mode" data-ext="less"><pre v-pre class="language-less"><code><span class="token comment">// 混合函数 在混合函数中可直接设置变量</span>
<span class="token selector">.test(<span class="token variable">@w</span>:100px,<span class="token variable">@h</span>:200px,<span class="token variable">@bgc</span>:blue)</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@w</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">@h</span><span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid <span class="token variable">@bgc</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token comment">// 混合函数按顺序传递参数</span>
  <span class="token comment">// .test(100px,200px,red);</span>
  <span class="token comment">// 通过名称传值</span>
  .<span class="token function">test</span><span class="token punctuation">(</span><span class="token variable">@bgc<span class="token punctuation">:</span></span>red<span class="token punctuation">,</span><span class="token variable">@w<span class="token punctuation">:</span></span>200px<span class="token punctuation">,</span><span class="token variable">@h<span class="token punctuation">:</span></span>100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 编译后</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="颜色" tabindex="-1"><a class="header-anchor" href="#颜色" aria-hidden="true">#</a> 颜色</h2>
<ul>
<li>average() 颜色平均值</li>
<li>darken() 颜色加深</li>
</ul>
<div class="language-less line-numbers-mode" data-ext="less"><pre v-pre class="language-less"><code><span class="token comment">// 取颜色平均值</span>
<span class="token selector">span</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">average</span><span class="token punctuation">(</span>red<span class="token punctuation">,</span> yellow<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 编译后</span>
<span class="token selector">span</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ff8000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-less line-numbers-mode" data-ext="less"><pre v-pre class="language-less"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
  <span class="token selector">&amp;:hover</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">darken</span><span class="token punctuation">(</span>skyblue<span class="token punctuation">,</span> 10%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 编译后</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">body:hover</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #5bbce4<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数值运算" tabindex="-1"><a class="header-anchor" href="#数值运算" aria-hidden="true">#</a> 数值运算</h2>
<p>在 less 中可对数值直接进行运算</p>
<div class="language-less line-numbers-mode" data-ext="less"><pre v-pre class="language-less"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在less中直接进行运算</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token operator">-</span>50px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>100px<span class="token operator">+</span>100px<span class="token punctuation">)</span> <span class="token operator">*</span> 1.5<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #bfa<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 编译后</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #bfa<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模块化开发" tabindex="-1"><a class="header-anchor" href="#模块化开发" aria-hidden="true">#</a> 模块化开发</h2>
<p>可以在一个 less 文件中引入其他 less 文件进行模块化开发</p>
<ul>
<li>将多个 less 文件进行合并 模块化处理</li>
<li>定义变量</li>
<li>定义布局</li>
<li>定义动画</li>
<li>模块化，方便维护</li>
</ul>
<div class="language-less line-numbers-mode" data-ext="less"><pre v-pre class="language-less"><code><span class="token variable">@import</span> <span class="token string">"./syntax.less"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


