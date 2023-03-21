<template><div><h1 id="v-lazy-img" tabindex="-1"><a class="header-anchor" href="#v-lazy-img" aria-hidden="true">#</a> v-lazy-img</h1>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<h5 id="通过使用该指令实现图片懒加载" tabindex="-1"><a class="header-anchor" href="#通过使用该指令实现图片懒加载" aria-hidden="true">#</a> 通过使用该指令实现图片懒加载</h5>
<h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2>
<h5 id="给图片元素使用-当图片出现在可视区域是实现图片显示" tabindex="-1"><a class="header-anchor" href="#给图片元素使用-当图片出现在可视区域是实现图片显示" aria-hidden="true">#</a> 给图片元素使用，当图片出现在可视区域是实现图片显示</h5>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">v-replace-img</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>xxx.jpg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">'lazy-img'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
       <span class="token function">beforeMount</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        value
    <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        el<span class="token punctuation">.</span>lii_data_src <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        value
    <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 浏览器支持判断，懒加载</span>
        <span class="token function">loadImg</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>
        window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'scroll'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token function">loadImg</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">updated</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        value
    <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        el<span class="token punctuation">.</span>lii_data_src <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">unmounted</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        el<span class="token punctuation">.</span>lii_io<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 其他浏览器</span>
<span class="token keyword">function</span> <span class="token function">ioEvent</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> io <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span><span class="token parameter">entries</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> realSrc <span class="token operator">=</span> el<span class="token punctuation">.</span>lii_data_src<span class="token punctuation">;</span>
        <span class="token comment">// 通过isIntersecting判断是否在可视区域内</span>
        entries<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>isIntersecting <span class="token operator">&amp;&amp;</span> realSrc <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>src <span class="token operator">=</span> realSrc<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 挂载实例, 提供给后续的unmounted钩子操作</span>
    el<span class="token punctuation">.</span>lii_io <span class="token operator">=</span> io<span class="token punctuation">;</span>
    <span class="token comment">// 监听目标对象</span>
    io<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// ie适配</span>
<span class="token keyword">function</span> <span class="token function">loadImg</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> clientHeight <span class="token operator">=</span> <span class="token function">getClientHight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>
        top<span class="token punctuation">,</span>
        bottom
    <span class="token punctuation">}</span> <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> realSrc <span class="token operator">=</span> el<span class="token punctuation">.</span>lii_data_src<span class="token punctuation">;</span>
    <span class="token punctuation">(</span>top <span class="token operator">&lt;</span> clientHeight <span class="token operator">&amp;&amp;</span> bottom <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> realSrc <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>el<span class="token punctuation">.</span>src <span class="token operator">=</span> realSrc<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 获取高度</span>
<span class="token keyword">function</span> <span class="token function">getClientHight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> dClientHeight <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight<span class="token punctuation">;</span>
    <span class="token keyword">const</span> bodyClientHeight <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientHeight<span class="token punctuation">;</span>
    <span class="token keyword">let</span> clientHeight <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>bodyClientHeight <span class="token operator">&amp;&amp;</span> dClientHeight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        clientHeight <span class="token operator">=</span> bodyClientHeight <span class="token operator">&lt;</span> dClientHeight <span class="token operator">?</span> bodyClientHeight <span class="token operator">:</span> dClientHeight<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        clientHeight <span class="token operator">=</span> bodyClientHeight <span class="token operator">></span> dClientHeight <span class="token operator">?</span> bodyClientHeight <span class="token operator">:</span> dClientHeight<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> clientHeight<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 节流 在一定时间范围内减少事件的触发频率</span>
<span class="token keyword">function</span> <span class="token function">throttler</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span>delay</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> last<span class="token punctuation">,</span>deferTimer<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">arge</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> _args<span class="token operator">=</span>arguments<span class="token punctuation">;</span>
        <span class="token keyword">let</span> now<span class="token operator">=</span> <span class="token operator">+</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>last<span class="token operator">&amp;&amp;</span>now<span class="token operator">&lt;</span>last<span class="token operator">+</span>delay<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">clearTimeout</span><span class="token punctuation">(</span>deferTimer<span class="token punctuation">)</span><span class="token punctuation">;</span>
            deferTimer<span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                last<span class="token operator">=</span>now<span class="token punctuation">;</span>
                <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span>_args<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            last<span class="token operator">=</span>now<span class="token punctuation">;</span>
            <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_args<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
