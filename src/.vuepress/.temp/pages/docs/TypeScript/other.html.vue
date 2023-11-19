<template><div><h1 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h1>
<h3 id="any类型污染问题" tabindex="-1"><a class="header-anchor" href="#any类型污染问题" aria-hidden="true">#</a> any类型污染问题</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> s<span class="token operator">:</span><span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">'string'</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> n<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
n <span class="token operator">=</span> s<span class="token punctuation">;</span> <span class="token comment">// 不报错</span>
n <span class="token operator">*</span> <span class="token number">123</span> <span class="token comment">// 不报错</span>
n<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 不报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上方代码中,<code v-pre>any</code>类型的<code v-pre>s</code>污染<code v-pre>number</code>类型的<code v-pre>n</code></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> s1<span class="token operator">:</span><span class="token builtin">unknown</span> <span class="token operator">=</span> <span class="token string">'string'</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> n1<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
n1 <span class="token operator">=</span> s1<span class="token punctuation">;</span> <span class="token comment">// 不能将类型“unknown”分配给类型“number”</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以将<code v-pre>unknow</code>视为为严格版<code v-pre>any</code>,它不会类型污染</p>
</div></template>


