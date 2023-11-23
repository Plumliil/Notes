<template><div><h1 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> Vuex</h1>
<h2 id="什么是状态管理" tabindex="-1"><a class="header-anchor" href="#什么是状态管理" aria-hidden="true">#</a> 什么是状态管理</h2>
<ul>
<li>在开发中,我们会的应用程序需要处理各种各样的数据,这些数据需要保存在我们应用程序中的某一位置,对于这些数据的管理我们称之为是状态管理
在前面是如何管理自己的状态</li>
<li>在前面如何管理自己状态
<ul>
<li>在Vue开发中,我们使用组件化开发模式</li>
<li>而在组件中我们定义data或者setup中返回使用的数据,这些数据我们称之为state</li>
<li>在模块template中我们可以使用这些数据,模块最终会被渲染成DOM,我们称之为view</li>
<li>在模块中我们会产生1一些行为时间,处理这些行为事件时,有可能会修改state,这些行为事件我们称之为actions</li>
<li></li>
</ul>
</li>
</ul>
<h2 id="vuex是什么" tabindex="-1"><a class="header-anchor" href="#vuex是什么" aria-hidden="true">#</a> vuex是什么</h2>
<p>vuex是一个专为vuejs应用程序开发的状态管理模式,它采用集中式管理应用的所有组件状态,并以相应的规则保证状态以一种可预测方式发生变化.vuex也集成到vue官方调试工具devtools extension,提供了诸如零配置time-travel调试,状态快照导入导出等高级调试功能
调试工具:devtools</p>
<blockquote>
<p>vuex就像是眼睛:您自会知道什么时候使用它</p>
</blockquote>
<h2 id="vuex的状态管理" tabindex="-1"><a class="header-anchor" href="#vuex的状态管理" aria-hidden="true">#</a> vuex的状态管理</h2>
<ul>
<li>管理不断变化的state本身是非常困难的:
<ul>
<li>状态之间相互会存在依赖, -个状态的变化会引起另一个状态的变化, View页面也有可能会引起状态的变化;</li>
<li>当应用程序复杂时, state在什么时候,因为什么原因而发生了变化,发生了怎么样的变化,会变得非常难以控制和追踪;</li>
</ul>
</li>
<li>因此,我们是否可以考虑将组件的内部状态抽离出来,以一一个全局单例的方式来管理呢?
<ul>
<li>在这种模式下,我们的组件树构成了一个巨大的“视图View” ;</li>
<li>不管在树的哪个位置,任何组件都能获取状态或者触发行为;</li>
<li>通过定义和隔离状态管理中的各个概念,并通过强制性的规则来维护试图和状态间的独立性,我们的代码边会变得更加结构化和易于维护、跟踪;</li>
</ul>
</li>
</ul>
<h2 id="单一状态树" tabindex="-1"><a class="header-anchor" href="#单一状态树" aria-hidden="true">#</a> 单一状态树</h2>
<ul>
<li>vuex使用单一状态树:</li>
</ul>
<ul>
<li>用一个对象就包含了全部的应用层级别状态</li>
<li>这也意味着,每个应用将仅仅包含一个store实例</li>
<li>单一状态树和模块化并不冲突</li>
</ul>
<ul>
<li>单一状态树优势
<ul>
<li>如果你的状态是保存到多个Store对象中,那么之后的管理和维护等等都会变得特别困难</li>
<li>所以vuex也使用单一状态树来管理应用层级全部状态</li>
<li>单一状态树能够让我们最直接的方式找到某个状态的片段,而且在之后的维护调试中,也可以非常方便的管理和维护</li>
</ul>
</li>
</ul>
<h2 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> state</h2>
<p>在store中定义数据,在组件中直接使用
目录:store/index.js</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">// store/index.js</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">Vue</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&#39;vue&#39;</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">Vuex</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&#39;vuex&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E5C07B">Vue</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">use</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75">Vuex</span><span style="color: #ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Vuex</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">Store</span><span style="color: #ABB2BF">({</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">state</span><span style="color: #ABB2BF">: {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">num</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">0</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">mutations</span><span style="color: #ABB2BF">: {},</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">actions</span><span style="color: #ABB2BF">: {},</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">modules</span><span style="color: #ABB2BF">: {}</span></span>
<span class="line"><span style="color: #ABB2BF">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目录:Home.vue</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">class</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;home&quot;</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">h2</span><span style="color: #ABB2BF">&gt;Home页面的数字:{{$store.state.num}}&lt;/</span><span style="color: #E06C75">h2</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;/</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者写为</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">class</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;about&quot;</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">h2</span><span style="color: #ABB2BF">&gt;About页面的数字:{{num}}&lt;/</span><span style="color: #E06C75">h2</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;/</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">computed</span><span style="color: #ABB2BF">:{</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">num</span><span style="color: #ABB2BF">(){</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">$store</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">state</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">num</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">  }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相当于组件中的数据data,专门用来存放全局数据
更改state中数据唯一办法是提交mutations</p>
<h2 id="getters" tabindex="-1"><a class="header-anchor" href="#getters" aria-hidden="true">#</a> getters</h2>
<ul>
<li>某些属性我们可能需要经过变化后来使用,这个时候可以使用getters</li>
<li>getter第一个参数是state状态,第二个是getters,都可以帮助getters拿到想要的数据
getters相当于组件中的computed.区别是getters是全局的,computed是组件内部使用的在外部使用需要<code v-pre>$store.getters.getNums</code>
将组件中统一使用的computed,放到getters中使用
目录:store/index.js</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Vuex</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">Store</span><span style="color: #ABB2BF">({</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">state</span><span style="color: #ABB2BF">: {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">num</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">0</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">getters</span><span style="color: #ABB2BF">:{</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">getNum</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75; font-style: italic">state</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">state</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">num</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">mutations</span><span style="color: #ABB2BF">: {},</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">actions</span><span style="color: #ABB2BF">: {},</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">modules</span><span style="color: #ABB2BF">: {}</span></span>
<span class="line"><span style="color: #ABB2BF">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目录:Home.vue</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">class</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;home&quot;</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">h2</span><span style="color: #ABB2BF">&gt;Home页面的数字:{{ $store.getters.getNum }}&lt;/</span><span style="color: #E06C75">h2</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;/</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> {}</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mutations" tabindex="-1"><a class="header-anchor" href="#mutations" aria-hidden="true">#</a> mutations</h2>
<p>更改store中state数据状态的唯一方法是提交mutation
mutations相当于组件中的methods,但是不能使用异步方法(定时器,axios...)</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Vuex</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">Store</span><span style="color: #ABB2BF">({</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">state</span><span style="color: #ABB2BF">: {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">num</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">0</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">getters</span><span style="color: #ABB2BF">:{</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">getNum</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75; font-style: italic">state</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">state</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">num</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">mutations</span><span style="color: #ABB2BF">: {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #7F848E; font-style: italic">// state store中的state payload是一个形参,如果组件在commit时有传参,</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #7F848E; font-style: italic">// 就存在,如果没有传参就为undefined</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">increase</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75; font-style: italic">state</span><span style="color: #ABB2BF">,</span><span style="color: #E06C75; font-style: italic">payload</span><span style="color: #56B6C2">=</span><span style="color: #D19A66">1</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E5C07B">state</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">num</span><span style="color: #56B6C2">+=</span><span style="color: #E06C75">payload</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">actions</span><span style="color: #ABB2BF">: {},</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">modules</span><span style="color: #ABB2BF">: {}</span></span>
<span class="line"><span style="color: #ABB2BF">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目录:Btn.vue</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">button</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">@click</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;add&quot;</span><span style="color: #ABB2BF">&gt;点击+1&lt;/</span><span style="color: #E06C75">button</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;/</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">methods</span><span style="color: #ABB2BF">: {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #61AFEF">add</span><span style="color: #ABB2BF">(){</span></span>
<span class="line"><span style="color: #ABB2BF">          </span><span style="color: #7F848E; font-style: italic">// 提交mutation</span></span>
<span class="line"><span style="color: #ABB2BF">          </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">$store</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">commit</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&#39;increase&#39;</span><span style="color: #ABB2BF">,</span><span style="color: #D19A66">3</span><span style="color: #ABB2BF">)</span></span>
<span class="line"><span style="color: #ABB2BF">      }</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">};</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="actions" tabindex="-1"><a class="header-anchor" href="#actions" aria-hidden="true">#</a> actions</h2>
<p>actions是store中专门处理异步的,实际修改状态值的还是mutations
actions类似于mutation,不同在于:</p>
<ul>
<li>actions提交的是mutation而不是直接改变状态</li>
<li>actions可以包含任意异步操作
这里有一个非常重要的参数context:</li>
<li>context是一个和store实例均有相同方法和属性的context对象</li>
<li>我们可以从其中获取commit方法来提交一个mutation,或者通过context.state和context.getters来获取state和getters</li>
<li>但是它为什么不是store对象,Modules</li>
<li>可以对context进行解构
actions分发</li>
<li>使用store中的dispatch进行分发
目录:store/index.js</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Vuex</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">Store</span><span style="color: #ABB2BF">({</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">state</span><span style="color: #ABB2BF">: {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">num</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">0</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">getters</span><span style="color: #ABB2BF">:{</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">getNum</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75; font-style: italic">state</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">state</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">num</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">mutations</span><span style="color: #ABB2BF">: {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #7F848E; font-style: italic">// state store中的state payload是一个形参,如果组件在commit时有传参,</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #7F848E; font-style: italic">// 就存在,如果没有传参就为undefined</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">increase</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75; font-style: italic">state</span><span style="color: #ABB2BF">,</span><span style="color: #E06C75; font-style: italic">payload</span><span style="color: #56B6C2">=</span><span style="color: #D19A66">1</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E5C07B">state</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">num</span><span style="color: #56B6C2">+=</span><span style="color: #E06C75">payload</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">    },</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">decrease</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75; font-style: italic">state</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E5C07B">state</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">num</span><span style="color: #56B6C2">--</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #7F848E; font-style: italic">// 专门处理异步,支持修改状态值的依然是mutations</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">actions</span><span style="color: #ABB2BF">: {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #7F848E; font-style: italic">// 点击 -1 按钮 1s 后执行</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">decreaseAsync</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75; font-style: italic">context</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E5C07B">context</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">commit</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&#39;decrease&#39;</span><span style="color: #ABB2BF">)</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">modules</span><span style="color: #ABB2BF">: {}</span></span>
<span class="line"><span style="color: #ABB2BF">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目录:Btn.vue</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">button</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">@click</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;$store.commit(&#39;increase&#39;, 3)&quot;</span><span style="color: #ABB2BF">&gt;点击+1&lt;/</span><span style="color: #E06C75">button</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">button</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">@click</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;decrease&quot;</span><span style="color: #ABB2BF">&gt;点击-1&lt;/</span><span style="color: #E06C75">button</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;/</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">methods</span><span style="color: #ABB2BF">: {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">decrease</span><span style="color: #ABB2BF">() {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #61AFEF">setTimeout</span><span style="color: #ABB2BF">(() </span><span style="color: #C678DD">=&gt;</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">$store</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">dispatch</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;decreaseAsync&quot;</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">      }, </span><span style="color: #D19A66">1000</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">    },</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">};</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="map-辅助函数" tabindex="-1"><a class="header-anchor" href="#map-辅助函数" aria-hidden="true">#</a> map* 辅助函数</h2>
<p>mapState和mapGetters在组件中都是写在computed里</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">h2</span><span style="color: #ABB2BF">&gt;Home页面的数字:{{ num }}&lt;/</span><span style="color: #E06C75">h2</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">h2</span><span style="color: #ABB2BF">&gt;About页面的数字:{{getNum}}&lt;/</span><span style="color: #E06C75">h2</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> { </span><span style="color: #E06C75">mapState</span><span style="color: #ABB2BF">,</span><span style="color: #E06C75">mapGetters</span><span style="color: #ABB2BF"> } </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;vuex&quot;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">computed</span><span style="color: #ABB2BF">:{</span></span>
<span class="line"><span style="color: #ABB2BF">    ...</span><span style="color: #61AFEF">mapState</span><span style="color: #ABB2BF">([</span><span style="color: #98C379">&#39;num&#39;</span><span style="color: #ABB2BF">]),</span></span>
<span class="line"><span style="color: #ABB2BF">    ...</span><span style="color: #61AFEF">mapGetters</span><span style="color: #ABB2BF">([</span><span style="color: #98C379">&#39;getNum&#39;</span><span style="color: #ABB2BF">])</span></span>
<span class="line"><span style="color: #ABB2BF">  }</span></span>
<span class="line"><span style="color: #ABB2BF">};</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mapMutations和mapActions在组件中都是写在methods里</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">button</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">@click</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;increase(3)&quot;</span><span style="color: #ABB2BF">&gt;点击+1&lt;/</span><span style="color: #E06C75">button</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">button</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">@click</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;decrease&quot;</span><span style="color: #ABB2BF">&gt;点击-1&lt;/</span><span style="color: #E06C75">button</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;/</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> { </span><span style="color: #E06C75">mapMutations</span><span style="color: #ABB2BF">,</span><span style="color: #E06C75">mapActions</span><span style="color: #ABB2BF"> } </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;vuex&quot;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">methods</span><span style="color: #ABB2BF">: {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">decrease</span><span style="color: #ABB2BF">() {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #61AFEF">setTimeout</span><span style="color: #ABB2BF">(() </span><span style="color: #C678DD">=&gt;</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">decreaseAsync</span><span style="color: #ABB2BF">()</span></span>
<span class="line"><span style="color: #ABB2BF">      }, </span><span style="color: #D19A66">1000</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">    },</span></span>
<span class="line"><span style="color: #ABB2BF">    ...</span><span style="color: #61AFEF">mapMutations</span><span style="color: #ABB2BF">([</span><span style="color: #98C379">&#39;increase&#39;</span><span style="color: #ABB2BF">]),</span></span>
<span class="line"><span style="color: #ABB2BF">    ...</span><span style="color: #61AFEF">mapActions</span><span style="color: #ABB2BF">([</span><span style="color: #98C379">&#39;decreaseAsync&#39;</span><span style="color: #ABB2BF">]),</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">};</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="拆分写法" tabindex="-1"><a class="header-anchor" href="#拆分写法" aria-hidden="true">#</a> 拆分写法</h2>
<p>store中的每个属性都可以差分成单独的文件
<img src="https://s2.loli.net/2022/05/05/cdWlF12SPTmQx6G.png" alt="" loading="lazy"></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">Vue</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&#39;vue&#39;</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">Vuex</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&#39;vuex&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">state</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&#39;./state&#39;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">getters</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&#39;./getters&#39;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">mutations</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&#39;./mutations&#39;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">actions</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&#39;./actions&#39;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">modules</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&#39;./modules&#39;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E5C07B">Vue</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">use</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75">Vuex</span><span style="color: #ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Vuex</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">Store</span><span style="color: #ABB2BF">({</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">state</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">getters</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">mutations</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">actions</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">modules</span></span>
<span class="line"><span style="color: #ABB2BF">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="modules" tabindex="-1"><a class="header-anchor" href="#modules" aria-hidden="true">#</a> modules</h2>
<figure><img src="https://s2.loli.net/2022/05/05/spNQBKeX3F695zR.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>什么是Module ?
<ul>
<li>由于使用单一状态树,应用的所有状态会集中到一个比较大的对象,当应用变得非常复杂时, store对象就有可
能变得相当臃肿;</li>
<li>为了解决以上问题, Vuex允许我们将store分割成模块( module) ;</li>
<li>每个模块拥有自己的state、mutation. action. getter、 甚至是嵌套子模块;
我们的store可以认为是一个主模块,它下边可以分解为很多子模块,子模块都可以单独分离出来写,写完再导入到主模块中.下面以<code v-pre>users</code>子模块:
users模块也可以分为state,getters,mutations和actions,所有的方法和属性该怎么写就怎么写.
但是users的index.js文件夹中,需要写入<code v-pre>namespace:true</code>命名空间.然后再store的index.js中引入到modules中.
在组件中获取值的方法:</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #E5C07B">$store</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">state</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">users</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">nickName</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在组件中触发mutations的方法:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">methods:{</span></span>
<span class="line"><span style="color: #ABB2BF">    ...</span><span style="color: #61AFEF">mapMutations</span><span style="color: #ABB2BF">({</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #98C379">&#39;changeNickName&#39;</span><span style="color: #ABB2BF">:</span><span style="color: #98C379">&#39;users/changeNickName&#39;</span></span>
<span class="line"><span style="color: #ABB2BF">    })</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mutations-type" tabindex="-1"><a class="header-anchor" href="#mutations-type" aria-hidden="true">#</a> MUTATIONS_TYPE</h2>
<p>用来将mutations所有的方法归纳起来.
目录:mutations_type.js</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">const</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">MUTATIONS_TYPE</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">INCREASE</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&#39;increase&#39;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">DECREASE</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&#39;decrease&#39;</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">    [</span><span style="color: #E5C07B">MUTATIONS_TYPE</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">INCREASE</span><span style="color: #ABB2BF">](</span><span style="color: #E06C75; font-style: italic">state</span><span style="color: #ABB2BF">, </span><span style="color: #E06C75; font-style: italic">payload</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">1</span><span style="color: #ABB2BF">) {</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">state</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">num</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">+=</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">payload</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">    },</span></span>
<span class="line"><span style="color: #ABB2BF">    [</span><span style="color: #E5C07B">MUTATIONS_TYPE</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">DECREASE</span><span style="color: #ABB2BF">](</span><span style="color: #E06C75; font-style: italic">state</span><span style="color: #ABB2BF">) {</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">state</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">num</span><span style="color: #56B6C2">--</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目录:store/index.js</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">...</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">mutations</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&#39;./mutations_type&#39;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Vuex</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">Store</span><span style="color: #ABB2BF">({</span></span>
<span class="line"><span style="color: #ABB2BF">    ...</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">mutations</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    ...</span></span>
<span class="line"><span style="color: #ABB2BF">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件中</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">class</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;about&quot;</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">h2</span><span style="color: #ABB2BF">&gt;About页面的数字:{{$store.getters.getNum}}&lt;/</span><span style="color: #E06C75">h2</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">button</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">@click</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;increase()&quot;</span><span style="color: #ABB2BF">&gt;About按钮.点击+1&lt;/</span><span style="color: #E06C75">button</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;/</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> { </span><span style="color: #E06C75">mapGetters</span><span style="color: #ABB2BF">} </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;vuex&quot;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">// import { mapGetters,mapMutations } from &quot;vuex&quot;;</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> {</span><span style="color: #E06C75">MUTATIONS_TYPE</span><span style="color: #ABB2BF">} </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&#39;../store/mutations_type&#39;</span></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">computed</span><span style="color: #ABB2BF">:{</span></span>
<span class="line"><span style="color: #ABB2BF">    ...</span><span style="color: #61AFEF">mapGetters</span><span style="color: #ABB2BF">([</span><span style="color: #98C379">&#39;getNum&#39;</span><span style="color: #ABB2BF">])</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">methods</span><span style="color: #ABB2BF">: {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #7F848E; font-style: italic">// 方法一:</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #7F848E; font-style: italic">// ...mapMutations([MUTATIONS_TYPE.INCREASE]),</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #7F848E; font-style: italic">// 方法二:</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">increase</span><span style="color: #ABB2BF">(){</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">$store</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">commit</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">MUTATIONS_TYPE</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">INCREASE</span><span style="color: #ABB2BF">)</span></span>
<span class="line"><span style="color: #ABB2BF">    },</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在vue3中使用简单使用vuex" tabindex="-1"><a class="header-anchor" href="#在vue3中使用简单使用vuex" aria-hidden="true">#</a> 在vue3中使用简单使用vuex</h2>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">h1</span><span style="color: #ABB2BF">&gt;{{ store.state.num }}&lt;/</span><span style="color: #E06C75">h1</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">button</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">@click</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;add&quot;</span><span style="color: #ABB2BF">&gt;+1&lt;/</span><span style="color: #E06C75">button</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">button</span><span style="color: #ABB2BF">&gt;-1&lt;/</span><span style="color: #E06C75">button</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  &lt;/</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">template</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">setup</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> { </span><span style="color: #E06C75">useStore</span><span style="color: #ABB2BF">} </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;vuex&quot;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #C678DD">const</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">store</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">useStore</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #C678DD">const</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">add</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> () </span><span style="color: #C678DD">=&gt;</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E5C07B">store</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">commit</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;add&quot;</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E5C07B">console</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">log</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">store</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">state</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">num</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">};</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


