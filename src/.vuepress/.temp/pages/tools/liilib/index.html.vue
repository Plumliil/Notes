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
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">yarn </span><span style="color: #98C379">add</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">liilib</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 或</span></span>
<span class="line"><span style="color: #ABB2BF">npm </span><span style="color: #98C379">i</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">liilib</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="引用" tabindex="-1"><a class="header-anchor" href="#引用" aria-hidden="true">#</a> 引用</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> { </span><span style="color: #E06C75">createRdm</span><span style="color: #ABB2BF"> } </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;liilib&quot;</span><span style="color: #ABB2BF">; </span><span style="color: #7F848E; font-style: italic">// 建议</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">// 或者</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">*</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">as</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">lii</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;liilib&quot;</span><span style="color: #ABB2BF">; </span><span style="color: #7F848E; font-style: italic">// 不建议</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #61AFEF">createRdm</span><span style="color: #ABB2BF">(</span><span style="color: #D19A66">1</span><span style="color: #ABB2BF">, </span><span style="color: #D19A66">10</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">// 或者</span></span>
<span class="line"><span style="color: #E5C07B">lii</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">createRdm</span><span style="color: #ABB2BF">(</span><span style="color: #D19A66">1</span><span style="color: #ABB2BF">, </span><span style="color: #D19A66">10</span><span style="color: #ABB2BF">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="工具" tabindex="-1"><a class="header-anchor" href="#工具" aria-hidden="true">#</a> 工具</h2>
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
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #E5C07B">console</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">log</span><span style="color: #ABB2BF">(</span><span style="color: #61AFEF">curTimeFormat</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;yyyy-mm-dd h:m:s&quot;</span><span style="color: #ABB2BF">)); </span><span style="color: #7F848E; font-style: italic">// 2021-11-4 14:30:33</span></span>
<span class="line"><span style="color: #E5C07B">console</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">log</span><span style="color: #ABB2BF">(</span><span style="color: #61AFEF">curTimeFormat</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;yyyy/mm/dd h:m&quot;</span><span style="color: #ABB2BF">)); </span><span style="color: #7F848E; font-style: italic">// 2021/11/4 14:30</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="随机数生成" tabindex="-1"><a class="header-anchor" href="#随机数生成" aria-hidden="true">#</a> 随机数生成</h3>
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
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #E5C07B">console</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">log</span><span style="color: #ABB2BF">(</span><span style="color: #61AFEF">createRdm</span><span style="color: #ABB2BF">(</span><span style="color: #D19A66">1</span><span style="color: #ABB2BF">, </span><span style="color: #D19A66">100</span><span style="color: #ABB2BF">)); </span><span style="color: #7F848E; font-style: italic">// 80</span></span>
<span class="line"><span style="color: #E5C07B">console</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">log</span><span style="color: #ABB2BF">(</span><span style="color: #61AFEF">createRdm</span><span style="color: #ABB2BF">(</span><span style="color: #D19A66">1</span><span style="color: #ABB2BF">, </span><span style="color: #D19A66">100</span><span style="color: #ABB2BF">, </span><span style="color: #D19A66">false</span><span style="color: #ABB2BF">)); </span><span style="color: #7F848E; font-style: italic">// 69.94</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="随机颜色生成" tabindex="-1"><a class="header-anchor" href="#随机颜色生成" aria-hidden="true">#</a> 随机颜色生成</h3>
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
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #E5C07B">console</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">log</span><span style="color: #ABB2BF">(</span><span style="color: #61AFEF">colorRdm</span><span style="color: #ABB2BF">()); </span><span style="color: #7F848E; font-style: italic">// (153,17,88)</span></span>
<span class="line"><span style="color: #E5C07B">console</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">log</span><span style="color: #ABB2BF">(</span><span style="color: #61AFEF">colorRdm</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;hex&quot;</span><span style="color: #ABB2BF">)); </span><span style="color: #7F848E; font-style: italic">// #DF80CB</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="颜色格式转换" tabindex="-1"><a class="header-anchor" href="#颜色格式转换" aria-hidden="true">#</a> 颜色格式转换</h3>
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
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #E5C07B">console</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">log</span><span style="color: #ABB2BF">(</span><span style="color: #61AFEF">Rgb_Hex</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;(255,255,255)&quot;</span><span style="color: #ABB2BF">, </span><span style="color: #98C379">&quot;hex&quot;</span><span style="color: #ABB2BF">)); </span><span style="color: #7F848E; font-style: italic">// #FFFFFF</span></span>
<span class="line"><span style="color: #E5C07B">console</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">log</span><span style="color: #ABB2BF">(</span><span style="color: #61AFEF">Rgb_Hex</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;#FFFFFF&quot;</span><span style="color: #ABB2BF">, </span><span style="color: #98C379">&quot;rgb&quot;</span><span style="color: #ABB2BF">)); </span><span style="color: #7F848E; font-style: italic">// (255,255,255)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串回文" tabindex="-1"><a class="header-anchor" href="#字符串回文" aria-hidden="true">#</a> 字符串回文</h3>
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
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">str</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;12321&quot;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">str2</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;12345&quot;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E5C07B">console</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">log</span><span style="color: #ABB2BF">(</span><span style="color: #61AFEF">palindrome</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75">str</span><span style="color: #ABB2BF">)); </span><span style="color: #7F848E; font-style: italic">// true</span></span>
<span class="line"><span style="color: #E5C07B">console</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">log</span><span style="color: #ABB2BF">(</span><span style="color: #61AFEF">palindrome</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75">str2</span><span style="color: #ABB2BF">)); </span><span style="color: #7F848E; font-style: italic">// false</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串倒序" tabindex="-1"><a class="header-anchor" href="#字符串倒序" aria-hidden="true">#</a> 字符串倒序</h3>
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
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">str</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;倒叙字符串&quot;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E5C07B">console</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">log</span><span style="color: #ABB2BF">(</span><span style="color: #61AFEF">reverseStr</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75">str</span><span style="color: #ABB2BF">)); </span><span style="color: #7F848E; font-style: italic">// 串符字序倒</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串截取" tabindex="-1"><a class="header-anchor" href="#字符串截取" aria-hidden="true">#</a> 字符串截取</h3>
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
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">str</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;字符串截取字符串截取字符串截取字符串截取&quot;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E5C07B">console</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">log</span><span style="color: #ABB2BF">(</span><span style="color: #61AFEF">truncate</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75">str</span><span style="color: #ABB2BF">, </span><span style="color: #D19A66">9</span><span style="color: #ABB2BF">)); </span><span style="color: #7F848E; font-style: italic">// 字符串截取字符串截...</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件分类" tabindex="-1"><a class="header-anchor" href="#文件分类" aria-hidden="true">#</a> 文件分类</h3>
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
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">file</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> [</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #98C379">&quot;120201197411173093.mp3&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #98C379">&quot;120201197411173093.txt&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #98C379">&quot;130201198409273008.mp4&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #98C379">&quot;210201200101149246.jpg&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #98C379">&quot;210201200101149246.m4v&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #98C379">&quot;210201200101149246.pdf&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #98C379">&quot;21020120010asda../</span><span style="color: #56B6C2">\114</span><span style="color: #98C379">as46.png&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #98C379">&quot;21020120010114as46.docx&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #98C379">&quot;2102012001011)_49246.zip&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #98C379">&quot;460101198309075187.gif&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">];</span></span>
<span class="line"><span style="color: #E5C07B">console</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">log</span><span style="color: #ABB2BF">(</span><span style="color: #61AFEF">filType</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75">file</span><span style="color: #ABB2BF">));</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">// {</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">//   video: [ &#39;130201198409273008.mp4&#39;, &#39;210201200101149246.m4v&#39; ],</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">//   audio: [ &#39;120201197411173093.mp3&#39; ],</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">//   word: [</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">//     &#39;120201197411173093.txt&#39;,</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">//     &#39;210201200101149246.pdf&#39;,</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">//     &#39;21020120010114as46.docx&#39;</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">//   ],</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">//   photo: [</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">//     &#39;210201200101149246.jpg&#39;,</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">//     &#39;21020120010asda../Las46.png&#39;,</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">//     &#39;460101198309075187.gif&#39;</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">//   ],</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">//   compressed: [ &#39;2102012001011)_49246.zip&#39; ],</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">//   other: []</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">// }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文字转拼音" tabindex="-1"><a class="header-anchor" href="#文字转拼音" aria-hidden="true">#</a> 文字转拼音</h3>
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
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #E5C07B">console</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">log</span><span style="color: #ABB2BF">(</span><span style="color: #61AFEF">toPinYin</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;你好啊!&quot;</span><span style="color: #ABB2BF">)); </span><span style="color: #7F848E; font-style: italic">// nihaoa</span></span>
<span class="line"><span style="color: #E5C07B">console</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">log</span><span style="color: #ABB2BF">(</span><span style="color: #61AFEF">toPinYin</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;你好啊!&quot;</span><span style="color: #ABB2BF">, </span><span style="color: #D19A66">true</span><span style="color: #ABB2BF">)); </span><span style="color: #7F848E; font-style: italic">// NiHaoA</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


