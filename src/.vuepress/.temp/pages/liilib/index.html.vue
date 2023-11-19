<template><div><p>[TOC]</p>
<div
    align=center
     style="text-align-center"
    >
    <!-- <img src="https://gitee.com/Plumliil/images/raw/master/MdPicture/20220104173804.png"  > -->
    <!--<img src="https://raw.githubusercontent.com/Plumliil/images/main/img/logo.png" style="border-radius:50%"/>-->
    <img src="https://s2.loli.net/2023/04/16/BtCLxqW85ujKkGP.png" style="border-radius:50%;width:300px" />
</div>
<div align=center>
    <a href="https://github.com/Plumliil/liilib" style="font-size:30px;font-weight:700;text-decoration: none;" title="Plumliil">liilib</a>
</div>
<h1 id="常用函数库" tabindex="-1"><a class="header-anchor" href="#常用函数库" aria-hidden="true">#</a> 常用函数库</h1>
<h2 id="安装引用" tabindex="-1"><a class="header-anchor" href="#安装引用" aria-hidden="true">#</a> 安装引用</h2>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> liilib
<span class="token comment"># 或</span>
<span class="token function">npm</span> i liilib
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="引用" tabindex="-1"><a class="header-anchor" href="#引用" aria-hidden="true">#</a> 引用</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createRdm <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"liilib"</span><span class="token punctuation">;</span> <span class="token comment">// 建议</span>
<span class="token comment">// 或者</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> lii <span class="token keyword">from</span> <span class="token string">"liilib"</span><span class="token punctuation">;</span> <span class="token comment">// 不建议</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token function">createRdm</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 或者</span>
lii<span class="token punctuation">.</span><span class="token function">createRdm</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="工具" tabindex="-1"><a class="header-anchor" href="#工具" aria-hidden="true">#</a> 工具</h2>
<h3 id="获取当前时间" tabindex="-1"><a class="header-anchor" href="#获取当前时间" aria-hidden="true">#</a> 获取当前时间</h3>
<h4 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h4>
<p>通过调用方法来获取当前时间</p>
<h4 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h4>
<table>
<thead>
<tr>
<th style="text-align:center">#</th>
<th style="text-align:center">解释</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">语法</td>
<td style="text-align:center"><code v-pre>curTimeFormat(type)</code></td>
</tr>
<tr>
<td style="text-align:center">参数</td>
<td style="text-align:center">type:获取时间的格式 目前支持 20 种不同形式的时间</td>
</tr>
<tr>
<td style="text-align:center">返回值</td>
<td style="text-align:center">返回当前的时间</td>
</tr>
</tbody>
</table>
<h4 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">curTimeFormat</span><span class="token punctuation">(</span><span class="token string">"yyyy-mm-dd h:m:s"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2021-11-4 14:30:33</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">curTimeFormat</span><span class="token punctuation">(</span><span class="token string">"yyyy/mm/dd h:m"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2021/11/4 14:30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="随机数生成" tabindex="-1"><a class="header-anchor" href="#随机数生成" aria-hidden="true">#</a> 随机数生成</h3>
<h4 id="描述-1" tabindex="-1"><a class="header-anchor" href="#描述-1" aria-hidden="true">#</a> 描述</h4>
<p>通过调用方法来获取随机数</p>
<h4 id="用法-1" tabindex="-1"><a class="header-anchor" href="#用法-1" aria-hidden="true">#</a> 用法</h4>
<table>
<thead>
<tr>
<th style="text-align:center">#</th>
<th style="text-align:center">解释</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">语法</td>
<td style="text-align:center"><code v-pre>createRdm(min,max,Integer)</code></td>
</tr>
<tr>
<td style="text-align:center">参数</td>
<td style="text-align:center">min:最小值,max:最大值,Integer:是否为整数 boolean 默认为 true 整数</td>
</tr>
<tr>
<td style="text-align:center">返回值</td>
<td style="text-align:center">返回当前的时间</td>
</tr>
</tbody>
</table>
<h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">createRdm</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 80</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">createRdm</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 69.94</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="随机颜色生成" tabindex="-1"><a class="header-anchor" href="#随机颜色生成" aria-hidden="true">#</a> 随机颜色生成</h3>
<h4 id="描述-2" tabindex="-1"><a class="header-anchor" href="#描述-2" aria-hidden="true">#</a> 描述</h4>
<p>通过调用方法来随机获取颜色，目前支持 rgb 和 hex 两种格式</p>
<h4 id="用法-2" tabindex="-1"><a class="header-anchor" href="#用法-2" aria-hidden="true">#</a> 用法</h4>
<table>
<thead>
<tr>
<th style="text-align:center">#</th>
<th style="text-align:center">解释</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">语法</td>
<td style="text-align:center"><code v-pre>colorRdm(type)</code></td>
</tr>
<tr>
<td style="text-align:center">参数</td>
<td style="text-align:center">type:获取颜色的格式有 rgb 和 hex 两种，默认为 rgb</td>
</tr>
<tr>
<td style="text-align:center">返回值</td>
<td style="text-align:center">返回颜色的值</td>
</tr>
</tbody>
</table>
<h4 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">colorRdm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// (153,17,88)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">colorRdm</span><span class="token punctuation">(</span><span class="token string">"hex"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// #DF80CB</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="颜色格式转换" tabindex="-1"><a class="header-anchor" href="#颜色格式转换" aria-hidden="true">#</a> 颜色格式转换</h3>
<h4 id="描述-3" tabindex="-1"><a class="header-anchor" href="#描述-3" aria-hidden="true">#</a> 描述</h4>
<p>通过调用该方法来进行颜色的转换目前仅支持 rgb,hex 相互转换</p>
<h4 id="用法-3" tabindex="-1"><a class="header-anchor" href="#用法-3" aria-hidden="true">#</a> 用法</h4>
<table>
<thead>
<tr>
<th style="text-align:center">#</th>
<th style="text-align:center">解释</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">语法</td>
<td style="text-align:center"><code v-pre>Rgb_Hex(data,type)</code></td>
</tr>
<tr>
<td style="text-align:center">参数</td>
<td style="text-align:center">data:转换前的颜色数据 type:获取颜色的格式有 rgb 和 hex 两种，默认为 rgb</td>
</tr>
<tr>
<td style="text-align:center">返回值</td>
<td style="text-align:center">返回转换后的颜色值</td>
</tr>
<tr>
<td style="text-align:center">支持格式</td>
<td style="text-align:center">rgb:(255,255,255) hex:#FFFFFF</td>
</tr>
</tbody>
</table>
<h4 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3" aria-hidden="true">#</a> 示例</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Rgb_Hex</span><span class="token punctuation">(</span><span class="token string">"(255,255,255)"</span><span class="token punctuation">,</span> <span class="token string">"hex"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// #FFFFFF</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Rgb_Hex</span><span class="token punctuation">(</span><span class="token string">"#FFFFFF"</span><span class="token punctuation">,</span> <span class="token string">"rgb"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// (255,255,255)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串回文" tabindex="-1"><a class="header-anchor" href="#字符串回文" aria-hidden="true">#</a> 字符串回文</h3>
<h4 id="描述-4" tabindex="-1"><a class="header-anchor" href="#描述-4" aria-hidden="true">#</a> 描述</h4>
<p>判断某一字符串是否是回文字符串</p>
<h4 id="用法-4" tabindex="-1"><a class="header-anchor" href="#用法-4" aria-hidden="true">#</a> 用法</h4>
<table>
<thead>
<tr>
<th style="text-align:center">#</th>
<th style="text-align:center">解释</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">语法</td>
<td style="text-align:center"><code v-pre>palindrome(str)</code></td>
</tr>
<tr>
<td style="text-align:center">参数</td>
<td style="text-align:center">str:需要判断的字符串</td>
</tr>
<tr>
<td style="text-align:center">返回值</td>
<td style="text-align:center">如果是回文字符串则返回 true，反之返回 false</td>
</tr>
</tbody>
</table>
<h4 id="示例-4" tabindex="-1"><a class="header-anchor" href="#示例-4" aria-hidden="true">#</a> 示例</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">"12321"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> str2 <span class="token operator">=</span> <span class="token string">"12345"</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">palindrome</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">palindrome</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串倒序" tabindex="-1"><a class="header-anchor" href="#字符串倒序" aria-hidden="true">#</a> 字符串倒序</h3>
<h4 id="描述-5" tabindex="-1"><a class="header-anchor" href="#描述-5" aria-hidden="true">#</a> 描述</h4>
<p>生成给定字符串的倒序字符串</p>
<h4 id="用法-5" tabindex="-1"><a class="header-anchor" href="#用法-5" aria-hidden="true">#</a> 用法</h4>
<table>
<thead>
<tr>
<th style="text-align:center">#</th>
<th style="text-align:center">解释</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">语法</td>
<td style="text-align:center"><code v-pre>reverseStr(str)</code></td>
</tr>
<tr>
<td style="text-align:center">参数</td>
<td style="text-align:center">str:需要进行倒序的字符串</td>
</tr>
<tr>
<td style="text-align:center">返回值</td>
<td style="text-align:center">返回传入字符串的倒序字符串</td>
</tr>
</tbody>
</table>
<h4 id="示例-5" tabindex="-1"><a class="header-anchor" href="#示例-5" aria-hidden="true">#</a> 示例</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">"倒叙字符串"</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">reverseStr</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 串符字序倒</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串截取" tabindex="-1"><a class="header-anchor" href="#字符串截取" aria-hidden="true">#</a> 字符串截取</h3>
<h4 id="描述-6" tabindex="-1"><a class="header-anchor" href="#描述-6" aria-hidden="true">#</a> 描述</h4>
<p>生成给定字符串进行截取，其他部分用 ... 代替</p>
<h4 id="用法-6" tabindex="-1"><a class="header-anchor" href="#用法-6" aria-hidden="true">#</a> 用法</h4>
<table>
<thead>
<tr>
<th style="text-align:center">#</th>
<th style="text-align:center">解释</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">语法</td>
<td style="text-align:center"><code v-pre>truncate(str,num)</code></td>
</tr>
<tr>
<td style="text-align:center">参数</td>
<td style="text-align:center">str:需要进行截取的字符串 num:截取的字数</td>
</tr>
<tr>
<td style="text-align:center">返回值</td>
<td style="text-align:center">返回截取后的字符串</td>
</tr>
</tbody>
</table>
<h4 id="示例-6" tabindex="-1"><a class="header-anchor" href="#示例-6" aria-hidden="true">#</a> 示例</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">"字符串截取字符串截取字符串截取字符串截取"</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">truncate</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 字符串截取字符串截...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件分类" tabindex="-1"><a class="header-anchor" href="#文件分类" aria-hidden="true">#</a> 文件分类</h3>
<h4 id="描述-7" tabindex="-1"><a class="header-anchor" href="#描述-7" aria-hidden="true">#</a> 描述</h4>
<p>后端传来的连接格式可能不分通过调用该方法来可以对链接进行分类</p>
<h4 id="用法-7" tabindex="-1"><a class="header-anchor" href="#用法-7" aria-hidden="true">#</a> 用法</h4>
<table>
<thead>
<tr>
<th style="text-align:center">#</th>
<th style="text-align:center">解释</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">语法</td>
<td style="text-align:center"><code v-pre>filType(file)</code></td>
</tr>
<tr>
<td style="text-align:center">参数</td>
<td style="text-align:center">file:包含文件链接的数组</td>
</tr>
<tr>
<td style="text-align:center">返回值</td>
<td style="text-align:center">返回分类后的链接</td>
</tr>
</tbody>
</table>
<h4 id="示例-7" tabindex="-1"><a class="header-anchor" href="#示例-7" aria-hidden="true">#</a> 示例</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> file <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">"120201197411173093.mp3"</span><span class="token punctuation">,</span>
  <span class="token string">"120201197411173093.txt"</span><span class="token punctuation">,</span>
  <span class="token string">"130201198409273008.mp4"</span><span class="token punctuation">,</span>
  <span class="token string">"210201200101149246.jpg"</span><span class="token punctuation">,</span>
  <span class="token string">"210201200101149246.m4v"</span><span class="token punctuation">,</span>
  <span class="token string">"210201200101149246.pdf"</span><span class="token punctuation">,</span>
  <span class="token string">"21020120010asda../\114as46.png"</span><span class="token punctuation">,</span>
  <span class="token string">"21020120010114as46.docx"</span><span class="token punctuation">,</span>
  <span class="token string">"2102012001011)_49246.zip"</span><span class="token punctuation">,</span>
  <span class="token string">"460101198309075187.gif"</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">filType</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// {</span>
<span class="token comment">//   video: [ '130201198409273008.mp4', '210201200101149246.m4v' ],</span>
<span class="token comment">//   audio: [ '120201197411173093.mp3' ],</span>
<span class="token comment">//   word: [</span>
<span class="token comment">//     '120201197411173093.txt',</span>
<span class="token comment">//     '210201200101149246.pdf',</span>
<span class="token comment">//     '21020120010114as46.docx'</span>
<span class="token comment">//   ],</span>
<span class="token comment">//   photo: [</span>
<span class="token comment">//     '210201200101149246.jpg',</span>
<span class="token comment">//     '21020120010asda../Las46.png',</span>
<span class="token comment">//     '460101198309075187.gif'</span>
<span class="token comment">//   ],</span>
<span class="token comment">//   compressed: [ '2102012001011)_49246.zip' ],</span>
<span class="token comment">//   other: []</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文字转拼音" tabindex="-1"><a class="header-anchor" href="#文字转拼音" aria-hidden="true">#</a> 文字转拼音</h3>
<h4 id="描述-8" tabindex="-1"><a class="header-anchor" href="#描述-8" aria-hidden="true">#</a> 描述</h4>
<p>通过调用方法来获取返回的拼音</p>
<h4 id="用法-8" tabindex="-1"><a class="header-anchor" href="#用法-8" aria-hidden="true">#</a> 用法</h4>
<table>
<thead>
<tr>
<th style="text-align:center">#</th>
<th style="text-align:center">解释</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">语法</td>
<td style="text-align:center"><code v-pre>toPinYin(value,type)</code></td>
</tr>
<tr>
<td style="text-align:center">参数</td>
<td style="text-align:center">value:需要转化的文字 type:是否需要首字母大写 默认为 false</td>
</tr>
<tr>
<td style="text-align:center">返回值</td>
<td style="text-align:center">返回生成的拼音</td>
</tr>
</tbody>
</table>
<h4 id="示例-8" tabindex="-1"><a class="header-anchor" href="#示例-8" aria-hidden="true">#</a> 示例</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">toPinYin</span><span class="token punctuation">(</span><span class="token string">"你好啊!"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// nihaoa</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">toPinYin</span><span class="token punctuation">(</span><span class="token string">"你好啊!"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// NiHaoA</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


