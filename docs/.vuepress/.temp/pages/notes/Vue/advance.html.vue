<template><div><!-- ---
prev: ../React
next: false
--- -->
<h1 id="进阶篇" tabindex="-1"><a class="header-anchor" href="#进阶篇" aria-hidden="true">#</a> 进阶篇</h1>
<h2 id="vue3" tabindex="-1"><a class="header-anchor" href="#vue3" aria-hidden="true">#</a> Vue3</h2>
<h2 id="全局api修改" tabindex="-1"><a class="header-anchor" href="#全局api修改" aria-hidden="true">#</a> 全局API修改</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">"./App.vue"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">.</span><span class="token function-variable function">isCustomElement</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token operator">=></span> tag<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">"app-"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span><span class="token function-variable function">isCustomElement</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">"#app"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>全局配置 Vue.config-&gt; app.config</li>
<li>全局注册 Vue.component -&gt; app.component</li>
<li>全局指令 Vue.directive -&gt; app.directive</li>
<li>全局混入 Vue.mixin -&gt; app.mixin</li>
<li>全局注册 Vue.use -&gt; app.use</li>
</ul>
<h2 id="新增特性" tabindex="-1"><a class="header-anchor" href="#新增特性" aria-hidden="true">#</a> 新增特性</h2>
<ul>
<li>Componsition API (组合式api)</li>
<li>setup
<ul>
<li>ref和reactive</li>
<li>computed和wwatch</li>
<li>新的生命周期函数</li>
<li>provide和inject</li>
<li>...</li>
</ul>
</li>
<li>新组件
<ul>
<li>Fargment-文档碎片</li>
<li>Teleport-瞬移组件的位置 :是一个内置组件，它可以将一个组件内部的一部分模板“传送”到该组件的 DOM 结构外层的位置去。而不是直接放在#app里,例如model</li>
<li>Suspense-异步加载组件的loading界面</li>
</ul>
</li>
</ul>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token comment">&lt;!-- 父组件 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Suspense</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>async-show</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>async-show</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#fallback</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>loading!...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Suspense</span><span class="token punctuation">></span></span>

  <span class="token comment">&lt;!-- 子组件 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>{{ result }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">result</span><span class="token operator">:</span> <span class="token number">42</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>less<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>其他API更新
<ul>
<li>全局api修改</li>
<li>将原来的全局Api抓安逸到应用对象</li>
</ul>
</li>
</ul>
<h2 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api" aria-hidden="true">#</a> Composition API</h2>
<h3 id="composition" tabindex="-1"><a class="header-anchor" href="#composition" aria-hidden="true">#</a> Composition</h3>
<h4 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> setup</h4>
<blockquote>
<p>可以向以前一样定义data和methods但是在vue3中更推荐使用setup函数</p>
</blockquote>
<ul>
<li>setup是一个函数,只在初始化的时候执行一次
<ul>
<li>以后大部分代码是在setup中写</li>
</ul>
</li>
<li>返回一个对象,对象的属性或者方法模板中可以直接使用</li>
<li>setup返回的数据和methods进行合并,setup优先级更高</li>
<li>setup中没有this
<ul>
<li>以后开发不使用this</li>
</ul>
</li>
<li>setup不要写成async函数
<ul>
<li>
<blockquote>
<p>因为setup函数必须返回一个json对象供模板使用,如果setup是一个async函数,返回的将是promise对象,如果setup是一个async哈桉树,那噶爱组件就成了一个异步组件,需要配合Suspennse组件才能使用.</p>
</blockquote>
</li>
</ul>
</li>
</ul>
<h3 id="ref" tabindex="-1"><a class="header-anchor" href="#ref" aria-hidden="true">#</a> ref</h3>
<ul>
<li>作用:定义响应式数据</li>
<li>语法:<code v-pre>const xxx=ref(xxx)</code>;
<ul>
<li>创建一个包含响应式数据的引用(reference)对象</li>
<li>js中修改数据:<code v-pre>xxx.value=otherValue</code></li>
<li>模板中显示数据:不需要<code v-pre>.value</code>直接使用<code v-pre>{{xxx}}</code></li>
</ul>
</li>
<li>一般定义原始类型响应式数据</li>
</ul>
<h3 id="reactive" tabindex="-1"><a class="header-anchor" href="#reactive" aria-hidden="true">#</a> reactive</h3>
<ul>
<li>作用:定义响应式数据
<ul>
<li>
<blockquote>
<p>如果ref定义对象数组,内部会自动将对象数组转化为reactive对象</p>
</blockquote>
</li>
</ul>
</li>
<li>语法:<code v-pre>const xxx=reactive(xxx)</code>:接受一个普通对象法案会该对象的响应式代理器对象</li>
<li>js中修改数据不需要使用<code v-pre>.value</code>操作</li>
</ul>
<h3 id="torefs" tabindex="-1"><a class="header-anchor" href="#torefs" aria-hidden="true">#</a> toRefs</h3>
<ul>
<li>将响应式对象中所有属性包装为ref对象,并返回1包含这些ref对像的普通对象</li>
<li>应用:对reactive定义的对象进行toRefs包装,包装后对象每个属性都是响应式的</li>
</ul>
<h3 id="vue2和vue3响应式差别" tabindex="-1"><a class="header-anchor" href="#vue2和vue3响应式差别" aria-hidden="true">#</a> vue2和vue3响应式差别</h3>
<h4 id="vue2响应式" tabindex="-1"><a class="header-anchor" href="#vue2响应式" aria-hidden="true">#</a> vue2响应式</h4>
<ul>
<li>核心:
<ul>
<li>对象:通过defineProperty对对象1已有属性值的读取和修改进行劫持(监视/拦截)</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/*
const vm=new Vue({
  el:'app',
  data:{
    name:'zs',
    age:18
  }
})
*/</span>
<span class="token comment">// 假设vm是vue实例</span>
<span class="token keyword">const</span> vm<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> data<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'zs'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span>
<span class="token punctuation">}</span>
<span class="token comment">// 遍历data,将data属性绑定到vm上,对属性的读取和修改进行拦截</span>
Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>prop<span class="token punctuation">,</span>value<span class="token punctuation">]</span></span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> initValue<span class="token operator">=</span>value<span class="token punctuation">;</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span>prop<span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'执行get'</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> initValue
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'执行set'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      initValue<span class="token operator">=</span>newValue
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 执行get zs</span>
vm<span class="token punctuation">.</span>name<span class="token operator">=</span><span class="token string">'ls'</span><span class="token punctuation">;</span> <span class="token comment">// 执行set</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 执行get ls</span>
vm<span class="token punctuation">.</span>sex<span class="token operator">=</span><span class="token string">'男'</span><span class="token punctuation">;</span> <span class="token comment">// 不会执行set方法</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>sex<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 不会执行get方法</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>数组:通过重写数组更新数组一系列更新元素的方法来试下按元素的修改劫持</li>
<li>
<blockquote>
<p>数组的push,pop,splice等法昂发之所以能正常使用,其实是被vue重写</p>
</blockquote>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 将方法放对象里面</span>
<span class="token keyword">const</span> obj<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">unshift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">splice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 遍历obj,使用defineProperty监听</span>
Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token operator">=></span><span class="token punctuation">{</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span>key<span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token function-variable function">value</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> arr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token comment">// arr.push(1); // obj.push(1)</span>
<span class="token comment">// arr.__prroto__= Array.prototype;</span>

arr<span class="token punctuation">.</span>__proto__<span class="token operator">=</span>obj<span class="token punctuation">;</span> <span class="token comment">// 将数组的隐式原型指向obj</span>
<span class="token comment">// 我们知道arr.__proto__等于它的构造函数的原型,也就是Array.prototype,所以arrr可以执行push,pop等方法,但是现在arr.__proto__又等于obj了,所以arr.push相当于obj.push用defineProperty进行监听,执行obj.push()就会执行value函数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="vue3响应式" tabindex="-1"><a class="header-anchor" href="#vue3响应式" aria-hidden="true">#</a> vue3响应式</h4>
<ul>
<li>核心:
<ul>
<li>通过Proxy(代理):拦截对对象本身的操作,包括属性值的读写,属性的添加,属性的删除等...</li>
<li>通过Reflect(反射):动态对被代理对象的相应属性进行特定操作</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> user<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'zs'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> proxyUser<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span><span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span>prop<span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'劫持get()'</span><span class="token punctuation">,</span>prop<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span>prop<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span>prop<span class="token punctuation">,</span>val<span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'劫持set()'</span><span class="token punctuation">,</span>prop<span class="token punctuation">,</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span>prop<span class="token punctuation">,</span>val<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">deleteProperty</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span>prop</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'劫持delete'</span><span class="token punctuation">,</span>prop<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">deleteProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span>prop<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 读取属性值</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxyUser<span class="token operator">===</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxyUser<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 劫持get() name zs</span>
<span class="token comment">// 设置属性值</span>
proxyUser<span class="token punctuation">.</span>name<span class="token operator">=</span><span class="token string">'ls'</span><span class="token punctuation">;</span> <span class="token comment">// 劫持set() name ls</span>
proxyUser<span class="token punctuation">.</span>age<span class="token operator">=</span><span class="token number">19</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 添加属性</span>
proxyUser<span class="token punctuation">.</span>sex<span class="token operator">=</span><span class="token string">'男'</span><span class="token punctuation">;</span> <span class="token comment">// 劫持set() sex 男</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 删除属性</span>
<span class="token keyword">delete</span> proxyUser<span class="token punctuation">.</span>sex<span class="token punctuation">;</span> <span class="token comment">// 劫持delete sex</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<blockquote>
<blockquote>
<blockquote>
<p>总结:正是由于vue3使用proxy代理的方式拦截对象本身,所以在vue3中添加/删除属性都是响应式的,通过下标修改数组也是响应式</p>
</blockquote>
</blockquote>
</blockquote>
<h3 id="setup参数" tabindex="-1"><a class="header-anchor" href="#setup参数" aria-hidden="true">#</a> setup参数</h3>
<ul>
<li>props-接受父组件传入的props并声明</li>
<li>context-是一个对象,结构出来包含
<ul>
<li>attrs:接收父组件传入的没有通过props声明过的属性,相当于this.$attrs</li>
<li>slots:接收父组件传入的插槽内容的对象,相当于this.$slots</li>
<li>emit:用来分发自定义时间的函数,相当于this.$emit</li>
</ul>
</li>
</ul>
<h3 id="计算属性" tabindex="-1"><a class="header-anchor" href="#计算属性" aria-hidden="true">#</a> 计算属性</h3>
<h4 id="vue2中" tabindex="-1"><a class="header-anchor" href="#vue2中" aria-hidden="true">#</a> vue2中</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token comment">// 只有getter</span>
  <span class="token function">fullName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstName<span class="token operator">+</span><span class="token string">""</span><span class="token operator">+</span><span class="token keyword">this</span><span class="token punctuation">.</span>lastName<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 有getter和setter</span>
  <span class="token function">fullName2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstName<span class="token operator">+</span><span class="token string">""</span><span class="token operator">+</span><span class="token keyword">this</span><span class="token punctuation">.</span>lastName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">set</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">const</span> names<span class="token operator">=</span>value<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>firstName<span class="token operator">=</span>names<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>lastName<span class="token operator">=</span>names<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vue3中" tabindex="-1"><a class="header-anchor" href="#vue3中" aria-hidden="true">#</a> vue3中</h4>
<ul>
<li>用法和vue2类似不过需要先引入computed</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">"zhang"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">"san"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> fullName <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> user<span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">""</span> <span class="token operator">+</span> user<span class="token punctuation">.</span>lastName<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// get set</span>
<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">"zhang"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">"san"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> fullName <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> user<span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">""</span> <span class="token operator">+</span> user<span class="token punctuation">.</span>lastName<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">set</span><span class="token punctuation">(</span>value<span class="token operator">:</span> String<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> names <span class="token operator">=</span> value<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    user<span class="token punctuation">.</span>firstName <span class="token operator">=</span> names<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    user<span class="token punctuation">.</span>lastName <span class="token operator">=</span> names<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">update</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  fullName<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">"li si"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="侦听属性" tabindex="-1"><a class="header-anchor" href="#侦听属性" aria-hidden="true">#</a> 侦听属性</h3>
<h4 id="vue2" tabindex="-1"><a class="header-anchor" href="#vue2" aria-hidden="true">#</a> vue2</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">watch</span><span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token function">obj</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span>oldValue</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newValue<span class="token punctuation">,</span>oldValue<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 立即监听,深度监听</span>
  <span class="token literal-property property">obj</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">handelr</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span>oldValue</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newValue<span class="token punctuation">,</span>oldValue<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">immediate</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 初始化立即执行一次</span>
    <span class="token literal-property property">deep</span><span class="token operator">:</span><span class="token boolean">true</span> <span class="token comment">// 深度监视</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 监听对象上属性</span>
  <span class="token string">'obj.a'</span><span class="token punctuation">(</span>newValue<span class="token punctuation">,</span>oldValue<span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newValue<span class="token punctuation">,</span>oldValue<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vue3-1" tabindex="-1"><a class="header-anchor" href="#vue3-1" aria-hidden="true">#</a> vue3</h4>
<ul>
<li>watch:指定监听数据
<ul>
<li>监视指定的一个或者多个响应式数据,一旦数据变化,就自动执行监视回调
<ul>
<li>如果是监听reactive对象中的属性,必须通过函数来指定</li>
<li>监听多个数据,使用数组来指定</li>
</ul>
</li>
<li>默认初始时不执行回调,但可以通过配置immediate为true,来指定初始立即执行第一次</li>
<li>通过配置deep为true,来制定深度监视</li>
</ul>
</li>
<li>watchEffect不指定监听数据
<ul>
<li>不用直接指定要监视的数据,回调函数中使用的哪些响应式数据就监视哪些响应式数据</li>
<li>默认初始会执行一次</li>
</ul>
</li>
</ul>
<blockquote>
<p>需要时需要先要引入watch和watchEffect</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">"zhang"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">"san"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'abc'</span><span class="token punctuation">)</span>
<span class="token function">watch</span><span class="token punctuation">(</span>
  <span class="token punctuation">[</span>str<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> user<span class="token punctuation">.</span>firstName<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newValue<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 更好用</span>
<span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  fullName<span class="token punctuation">.</span>value <span class="token operator">=</span> user<span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> user<span class="token punctuation">.</span>lastName<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h3>
<table>
<thead>
<tr>
<th style="text-align:right">vue2写法</th>
<th style="text-align:left">vue3写法</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">beforeCreate</td>
<td style="text-align:left">setup</td>
</tr>
<tr>
<td style="text-align:right">created</td>
<td style="text-align:left">setup</td>
</tr>
<tr>
<td style="text-align:right">beforeMount</td>
<td style="text-align:left">onBeforeMount</td>
</tr>
<tr>
<td style="text-align:right">mounted</td>
<td style="text-align:left">onMounted</td>
</tr>
<tr>
<td style="text-align:right">beforeUpdate</td>
<td style="text-align:left">onBeforeUpdate</td>
</tr>
<tr>
<td style="text-align:right">update</td>
<td style="text-align:left">onUpdated</td>
</tr>
<tr>
<td style="text-align:right">beforeDestroy</td>
<td style="text-align:left">onBeforeUnmount</td>
</tr>
<tr>
<td style="text-align:right">destroy</td>
<td style="text-align:left">onUnmounted</td>
</tr>
</tbody>
</table>
<blockquote>
<p>注意:beforeDestroy和destroy已经被废弃,如果想继续使用vue2写啊,对应的api是beforeUnmount和unMounted</p>
</blockquote>
<h3 id="ref获取dom元素" tabindex="-1"><a class="header-anchor" href="#ref获取dom元素" aria-hidden="true">#</a> ref获取dom元素</h3>
<p>nextTick</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> iptRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>HTMLElement <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        iptRef<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span> iptRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      iptRef<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义hook函数" tabindex="-1"><a class="header-anchor" href="#自定义hook函数" aria-hidden="true">#</a> 自定义hook函数</h3>
<blockquote>
<p>hook翻译成中文就是钩子函数(并不是生命周期钩子函数).其实之前学过的所有api,比如ref,reaactive,computed,waatch,onBeforeMount(等等都是钩子函数,只不过他们都是vue内部hook函数,夏安在为我们要学怎么自定义一个hook函数)</p>
</blockquote>
<ul>
<li>创建一个函数,函数名称必须use开头</li>
<li>函数必须return一些数据</li>
</ul>
<p>需求 1:收集用户鼠标移动时在页面上的坐标</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">useMousePosition</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 初始化坐标数据</span>
  <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 用于收集点击事件坐标函数</span>
  <span class="token keyword">const</span> <span class="token function-variable function">updatePosition</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> MouseEvent</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    x<span class="token punctuation">.</span>value <span class="token operator">=</span> e<span class="token punctuation">.</span>pageX<span class="token punctuation">;</span>
    y<span class="token punctuation">.</span>value <span class="token operator">=</span> e<span class="token punctuation">.</span>pageY<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 挂载后绑定点击监听</span>
  <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"mousemove"</span><span class="token punctuation">,</span> updatePosition<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 卸载前解绑事件监听</span>
  <span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">"mousemove"</span><span class="token punctuation">,</span> updatePosition<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="shallowreactive和shallowref" tabindex="-1"><a class="header-anchor" href="#shallowreactive和shallowref" aria-hidden="true">#</a> shallowReactive和shallowRef</h3>
<ul>
<li>它们都表示浅响应式
<ul>
<li>shallowReactive只能修改第一层</li>
<li>shallowRef只能修改整体数据时才生效</li>
</ul>
</li>
</ul>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>m1 : {{ m1 }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>m2 : {{ m2 }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>update<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>update<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span> <span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">{</span>
      defineComponent<span class="token punctuation">,</span>
      shallowReactive<span class="token punctuation">,</span>
      shallowRef<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> m1 <span class="token operator">=</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> m2 <span class="token operator">=</span> <span class="token function">shallowRef</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">update</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// m1.a += 1; // 有效</span>
      m1<span class="token punctuation">.</span>b<span class="token punctuation">.</span>c <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 无效</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      m1<span class="token punctuation">,</span>
      m2<span class="token punctuation">,</span>
      update<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="readonly与shallowreadonly" tabindex="-1"><a class="header-anchor" href="#readonly与shallowreadonly" aria-hidden="true">#</a> readOnly与shallowReadonly</h3>
<ul>
<li>他们都表示只读代理对象</li>
<li>readonly:
<ul>
<li>深度只读</li>
<li>设置readonly后,修改响应式数据会报错</li>
</ul>
</li>
<li>shallowReadonly
<ul>
<li>浅只读</li>
<li>设置shallowReadonly后,修改响应式数据的第一层属性会报错</li>
</ul>
</li>
<li>应用场景:
<ul>
<li>在某些特定情况下,我们不希望对数据进行更新操作,那就可以包装成一个只读代理对象来读取数据,而不能修改或删除</li>
</ul>
</li>
</ul>
<h3 id="toraw和markraw" tabindex="-1"><a class="header-anchor" href="#toraw和markraw" aria-hidden="true">#</a> toRaw和markRaw</h3>
<ul>
<li>toRaw:
<ul>
<li>返回reactive或者readonly对象的原始数据</li>
<li>这是一个还原方法,可以用于临时读取,得到的数据不具有响应式</li>
</ul>
</li>
<li>markRaw
<ul>
<li>标记一个对象,使其不具有响应式</li>
<li>应用场景:
<ul>
<li>有些指不应设置为响应式的,例如复杂的第三方类实例或者Vue组件对象</li>
<li>当渲染具有不可变数据源的大列表时,跳过代理转换可以提高性能</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>state : {{ state }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>testToRaw<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>toRaw测试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>testMarkRaw<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span> markRaw测试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span> <span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span> <span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">{</span>defineComponent<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> toRaw<span class="token punctuation">,</span> markRaw<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Home"</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> reactive<span class="token operator">&lt;</span>any<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"zs"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">testToRaw</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token function">toRaw</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
      user<span class="token punctuation">.</span>age <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">testMarkRaw</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> likes<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span><span class="token string">'b'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token comment">// state.likes=likes;</span>
      state<span class="token punctuation">.</span>likes<span class="token operator">=</span><span class="token function">markRaw</span><span class="token punctuation">(</span>likes<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        state<span class="token punctuation">.</span>likes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'c'</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">,</span>
        testToRaw<span class="token punctuation">,</span>
        testMarkRaw<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="toref" tabindex="-1"><a class="header-anchor" href="#toref" aria-hidden="true">#</a> toRef</h3>
<ul>
<li>为响应式对象上的某个属性创建一个ref引用,更新时引用对象会同步更新</li>
<li>区别:ref:拷贝了一份新的数据值单独操作,更新世相互不影响</li>
</ul>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>state : {{ state }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>foo : {{ foo }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>foo2 : {{ foo2 }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>update<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>update<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> toRef<span class="token punctuation">,</span> reactive<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">foo</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bar</span><span class="token operator">:</span><span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> foo<span class="token operator">=</span><span class="token function">toRef</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> foo2<span class="token operator">=</span><span class="token function">ref</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">update</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
      <span class="token comment">// state.foo++;</span>
      <span class="token comment">// foo.value++;</span>
      foo2<span class="token punctuation">.</span>value<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// foo和state中数据不会更新</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">,</span>
      foo<span class="token punctuation">,</span>
      foo2<span class="token punctuation">,</span>
      update
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="customref" tabindex="-1"><a class="header-anchor" href="#customref" aria-hidden="true">#</a> customRef</h3>
<ul>
<li>用于自定义有一个ref,可以显式的控制依赖追踪和触发反应</li>
<li>接受一个工厂函数,两个参数分别是用于追踪的track与用于触发相应的trigger,并返回一个带有get和set属性对象</li>
<li>需求:使用customRef实现防抖函数</li>
</ul>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>keyword<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">'</span>请输入关键字...<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  {{keyword}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  defineComponent<span class="token punctuation">,</span>
  customRef<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Home"</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> useDebounceRef<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token literal-property property">delay</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> <span class="token literal-property property">timeout</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token function">customRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">track</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">trigger</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 告诉vue追踪数据</span>
            <span class="token function">track</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> value<span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
            timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              value <span class="token operator">=</span> newValue<span class="token punctuation">;</span>
              <span class="token comment">// 告诉vue触发页面更新</span>
              <span class="token function">trigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> keyword <span class="token operator">=</span> <span class="token function">useDebounceRef</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">,</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      keyword<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="provide与inject" tabindex="-1"><a class="header-anchor" href="#provide与inject" aria-hidden="true">#</a> provide与inject</h3>
<ul>
<li>provide和inject提供依赖注入,功能类似2.x的provide/inject</li>
<li>实现跨层级组件间通信</li>
</ul>
<h3 id="响应式数据的判断" tabindex="-1"><a class="header-anchor" href="#响应式数据的判断" aria-hidden="true">#</a> 响应式数据的判断</h3>
<ul>
<li>isRef</li>
<li>isReactive</li>
<li>isReadonly</li>
<li>isProxy</li>
</ul>
<h2 id="手写api" tabindex="-1"><a class="header-anchor" href="#手写api" aria-hidden="true">#</a> 手写API</h2>
<h3 id="手写reactive和shallowreactive" tabindex="-1"><a class="header-anchor" href="#手写reactive和shallowreactive" aria-hidden="true">#</a> 手写reactive和shallowReactive</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"劫持get()"</span><span class="token punctuation">,</span> prop<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"劫持set()"</span><span class="token punctuation">,</span> prop<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">deleteProperty</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> prop</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"劫持delete"</span><span class="token punctuation">,</span> prop<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">deleteProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> obj <span class="token operator">===</span> <span class="token string">"object"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">"object"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> obj <span class="token operator">===</span> <span class="token string">"object"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="手写ref和shallowref" tabindex="-1"><a class="header-anchor" href="#手写ref和shallowref" aria-hidden="true">#</a> 手写ref和shallowRef</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"劫持get()"</span><span class="token punctuation">,</span> prop<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"劫持set()"</span><span class="token punctuation">,</span> prop<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">deleteProperty</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> prop</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"劫持delete"</span><span class="token punctuation">,</span> prop<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">deleteProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> obj <span class="token operator">===</span> <span class="token string">"object"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">"object"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> obj <span class="token operator">===</span> <span class="token string">"object"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> target <span class="token operator">===</span> <span class="token string">"object"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    target <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">_value</span><span class="token operator">:</span> target<span class="token punctuation">,</span>
    <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"获取ref"</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">set</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"设置ref"</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_value <span class="token operator">=</span> val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">shallowRef</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">_value</span><span class="token operator">:</span> target<span class="token punctuation">,</span>
    <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"获取ref"</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">set</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"设置ref"</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_value <span class="token operator">=</span> val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="isref-isreactive-isreadonly" tabindex="-1"><a class="header-anchor" href="#isref-isreactive-isreadonly" aria-hidden="true">#</a> isRef,isReactive,isReadonly</h3>
<ul>
<li>判断是否为对象和是否为__v_isRef</li>
</ul>
</div></template>
