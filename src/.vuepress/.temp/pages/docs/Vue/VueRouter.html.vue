<template><div><h1 id="vue-router" tabindex="-1"><a class="header-anchor" href="#vue-router" aria-hidden="true">#</a> Vue-Router</h1>
<h2 id="什么是vue-router" tabindex="-1"><a class="header-anchor" href="#什么是vue-router" aria-hidden="true">#</a> 什么是vue-router</h2>
<p>vue-router是vue.js官方给出的路由解决方案，它只能结合vue项目进行使用，能够情感送的管理SPA项目
中的组件切换</p>
<h2 id="vue-router的常见用法" tabindex="-1"><a class="header-anchor" href="#vue-router的常见用法" aria-hidden="true">#</a> vue-router的常见用法</h2>
<h3 id="安装vue-router包" tabindex="-1"><a class="header-anchor" href="#安装vue-router包" aria-hidden="true">#</a> 安装vue-router包</h3>
<p>在vue2中：
<code v-pre>npm i vue-router@3.5.2 -S</code></p>
<h3 id="创建路由模块" tabindex="-1"><a class="header-anchor" href="#创建路由模块" aria-hidden="true">#</a> 创建路由模块</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">// router.js</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">Vue</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&#39;vue&#39;</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">VueRouter</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&#39;vue-router&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic">// 调用vue.use()函数，把vue-router安装为vue的插件</span></span>
<span class="line"><span style="color: #E5C07B">Vue</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">use</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75">VueRouter</span><span style="color: #ABB2BF">)</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">// 创建路由的实例对象</span></span>
<span class="line"><span style="color: #C678DD">const</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">router</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">VueRouter</span><span style="color: #ABB2BF">()</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">// 向外共享路由的实例对象</span></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">router</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="导入并挂载路由模块" tabindex="-1"><a class="header-anchor" href="#导入并挂载路由模块" aria-hidden="true">#</a> 导入并挂载路由模块</h3>
<p>在进行模块化导入的时候，如果给定的是文件夹，则默认导入这个文件夹下名字叫做index
.js的文件</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">// main.js</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">Vue</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&#39;vue&#39;</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">App</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&#39;./App.vue&#39;</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">router</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&#39;./router&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E5C07B">Vue</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">config</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">productionTip</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">false</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">Vue</span><span style="color: #ABB2BF">({</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">router</span><span style="color: #ABB2BF">, </span><span style="color: #7F848E; font-style: italic">// 路由的实例对象</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">render</span><span style="color: #ABB2BF">: </span><span style="color: #E06C75; font-style: italic">h</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">=&gt;</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">h</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75">App</span><span style="color: #ABB2BF">)</span></span>
<span class="line"><span style="color: #ABB2BF">}).</span><span style="color: #61AFEF">$mount</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&#39;#app&#39;</span><span style="color: #ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="声明路由链接和占位符" tabindex="-1"><a class="header-anchor" href="#声明路由链接和占位符" aria-hidden="true">#</a> 声明路由链接和占位符</h3>
<p>只要在项目中安装和配置了vue-router，都可以使用router-view这个组件
它的作用很单纯-占位符
<code v-pre>&lt;router-view&gt;&lt;/router-view&gt;</code></p>
<h2 id="路由的基本用法" tabindex="-1"><a class="header-anchor" href="#路由的基本用法" aria-hidden="true">#</a> 路由的基本用法</h2>
<p>在路由模块中声明路由的对应关系</p>
<h3 id="使用redirect重定向" tabindex="-1"><a class="header-anchor" href="#使用redirect重定向" aria-hidden="true">#</a> 使用redirect重定向</h3>
<p>路由重定向指的是：用户在访问地址A的时候，强制用户跳转到地址C，从而展示特定的组件页面。
通过路由规则的redirect属性，指定一个新的路由地址，可以很方便的设置路由的重定向</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">Vue</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&#39;vue&#39;</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">VueRouter</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&#39;vue-router&#39;</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">Home</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&#39;@/components/Home&#39;</span></span>
<span class="line"><span style="color: #E5C07B">Vue</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">use</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75">VueRouter</span><span style="color: #ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic">// routes 是一个数组，作用 定义hash地址与组件之间的关系</span></span>
<span class="line"><span style="color: #C678DD">const</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">routes</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> [</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #7F848E; font-style: italic">// 路由规则</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #7F848E; font-style: italic">// 当用户访问 / 的时候，通过redirect属性跳转到 /home 对应的路由规则</span></span>
<span class="line"><span style="color: #ABB2BF">  {</span><span style="color: #E06C75">path</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&#39;/&#39;</span><span style="color: #ABB2BF">, </span><span style="color: #E06C75">redirect</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&#39;/home&#39;</span><span style="color: #ABB2BF">},</span></span>
<span class="line"><span style="color: #ABB2BF">  {</span><span style="color: #E06C75">path</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&#39;/home&#39;</span><span style="color: #ABB2BF">, </span><span style="color: #E06C75">name</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&#39;Home&#39;</span><span style="color: #ABB2BF">, </span><span style="color: #E06C75">component</span><span style="color: #ABB2BF">: </span><span style="color: #E06C75">Home</span><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #ABB2BF">]</span></span>
<span class="line"><span style="color: #C678DD">const</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">router</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">VueRouter</span><span style="color: #ABB2BF">({</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #7F848E; font-style: italic">// routes 是一个数组，作用 定义hash地址与组件之间的关系</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">routes</span></span>
<span class="line"><span style="color: #ABB2BF">})</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">router</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="嵌套路由" tabindex="-1"><a class="header-anchor" href="#嵌套路由" aria-hidden="true">#</a> 嵌套路由</h3>
<p>通过路由实现组件的嵌套展示，叫做嵌套路由</p>
<!-- ![img_5.png](img_5.png) -->
<h3 id="通过children属性声明子路由规则" tabindex="-1"><a class="header-anchor" href="#通过children属性声明子路由规则" aria-hidden="true">#</a> 通过children属性声明子路由规则</h3>
<p>子路由规则不以斜线开头
在src/index.js路由模块中，导入需要的组件，并使用children属性声明子路由规则：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">    path: </span><span style="color: #98C379">&#39;/about&#39;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    name: </span><span style="color: #98C379">&#39;About&#39;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    component: </span><span style="color: #E06C75">About</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    children:[</span></span>
<span class="line"><span style="color: #ABB2BF">      {</span><span style="color: #E06C75">path</span><span style="color: #ABB2BF">:</span><span style="color: #98C379">&#39;tab1&#39;</span><span style="color: #ABB2BF">,</span><span style="color: #E06C75">name</span><span style="color: #ABB2BF">:</span><span style="color: #98C379">&#39;Tab1&#39;</span><span style="color: #ABB2BF">,</span><span style="color: #E06C75">component</span><span style="color: #ABB2BF">: </span><span style="color: #E06C75">Tab1</span><span style="color: #ABB2BF">},</span></span>
<span class="line"><span style="color: #ABB2BF">      {</span><span style="color: #E06C75">path</span><span style="color: #ABB2BF">:</span><span style="color: #98C379">&#39;tab2&#39;</span><span style="color: #ABB2BF">,</span><span style="color: #E06C75">name</span><span style="color: #ABB2BF">:</span><span style="color: #98C379">&#39;Tab2&#39;</span><span style="color: #ABB2BF">,</span><span style="color: #E06C75">component</span><span style="color: #ABB2BF">: </span><span style="color: #E06C75">Tab2</span><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #ABB2BF">    ]</span></span>
<span class="line"><span style="color: #ABB2BF">  }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="默认子路由" tabindex="-1"><a class="header-anchor" href="#默认子路由" aria-hidden="true">#</a> 默认子路由</h3>
<p>如果children数组中，某个路由规则的path值为空字符串，则这条路由规则叫做'默认子路由'
默认子路由和重定向功能相同</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">    path: </span><span style="color: #98C379">&#39;/about&#39;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    name: </span><span style="color: #98C379">&#39;About&#39;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    component: </span><span style="color: #E06C75">About</span><span style="color: #ABB2BF">, </span></span>
<span class="line"><span style="color: #ABB2BF">    children:[</span></span>
<span class="line"><span style="color: #ABB2BF">      {</span><span style="color: #E06C75">path</span><span style="color: #ABB2BF">:</span><span style="color: #98C379">&#39;&#39;</span><span style="color: #ABB2BF">,</span><span style="color: #E06C75">name</span><span style="color: #ABB2BF">:</span><span style="color: #98C379">&#39;Tab1&#39;</span><span style="color: #ABB2BF">,</span><span style="color: #E06C75">component</span><span style="color: #ABB2BF">: </span><span style="color: #E06C75">Tab1</span><span style="color: #ABB2BF">},</span></span>
<span class="line"><span style="color: #ABB2BF">      {</span><span style="color: #E06C75">path</span><span style="color: #ABB2BF">:</span><span style="color: #98C379">&#39;tab2&#39;</span><span style="color: #ABB2BF">,</span><span style="color: #E06C75">name</span><span style="color: #ABB2BF">:</span><span style="color: #98C379">&#39;Tab2&#39;</span><span style="color: #ABB2BF">,</span><span style="color: #E06C75">component</span><span style="color: #ABB2BF">: </span><span style="color: #E06C75">Tab2</span><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #ABB2BF">    ]</span></span>
<span class="line"><span style="color: #ABB2BF">  }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态路由匹配" tabindex="-1"><a class="header-anchor" href="#动态路由匹配" aria-hidden="true">#</a> 动态路由匹配</h2>
<p>思考：有如下三个路由链接：</p>
<!-- ![img_6.png](img_6.png) -->
<p>缺点：路由规则的复用性差</p>
<h3 id="动态路由的概念" tabindex="-1"><a class="header-anchor" href="#动态路由的概念" aria-hidden="true">#</a> 动态路由的概念</h3>
<p>动态路由是指：把Hash地址中的可变部分定义为参数向，从而提高路由规则的复用性
在vue-router中使用英文的：来定义路由的参数向。示例代码如下：</p>
<!-- ![img_7.png](img_7.png) -->
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">  </span><span style="color: #7F848E; font-style: italic">// 在movie组件中希望根据id的值展示对应电影的信息</span></span>
<span class="line"><span style="color: #ABB2BF">  {</span></span>
<span class="line"><span style="color: #ABB2BF">    path: </span><span style="color: #98C379">&#39;/movie/:id&#39;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    name: </span><span style="color: #98C379">&#39;Movie&#39;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    component: </span><span style="color: #E06C75">Movie</span><span style="color: #ABB2BF">, </span></span>
<span class="line"><span style="color: #ABB2BF">    props:</span><span style="color: #D19A66">true</span></span>
<span class="line"><span style="color: #ABB2BF">  }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>可以通过<code v-pre>this.$route.params.id</code>来获取id值以便渲染数据</li>
<li>可以通过开启props:true开启prop传参 子组件： <code v-pre>props:['id'],</code></li>
</ul>
<h3 id="拓展query和fullpath" tabindex="-1"><a class="header-anchor" href="#拓展query和fullpath" aria-hidden="true">#</a> 拓展query和fullpath</h3>
<ul>
<li>在hash地址中，/后面的参数项叫做路径参数
在路由参数对象中，需要使用this.$route.params来访问路径参数</li>
<li>在hash地址中，?后面的参数项叫做查询参数
在路由参数对象中，需要使用this.$route.query来访问查询参数</li>
<li>在this.$route中，path只是路径部分，fullPath是完整地址
例如：/movie/2?name=zs&amp;age=20 是fullPath的值 /movie/2是path的值</li>
</ul>
<h2 id="编程式导航跳转" tabindex="-1"><a class="header-anchor" href="#编程式导航跳转" aria-hidden="true">#</a> 编程式导航跳转</h2>
<h3 id="vue-router中编程式导航api-其中最常用的导航api分别是" tabindex="-1"><a class="header-anchor" href="#vue-router中编程式导航api-其中最常用的导航api分别是" aria-hidden="true">#</a> vue-router中编程式导航API，其中最常用的导航API分别是：</h3>
<ul>
<li>this.$router.push('hash地址')
<ul>
<li>跳转到指定的hash地址,并增加一条历史记录</li>
</ul>
</li>
<li>this.$router.replace('hash地址')
<ul>
<li>跳转到指定的hash地址，并替换掉当前的历史记录</li>
</ul>
</li>
<li>this.$router.go(n) n 表示数字 -1 表示后退一层，如果后退层数超过上限则原地不动，同理 1 表示前进一层</li>
</ul>
<h3 id="router-go的简化" tabindex="-1"><a class="header-anchor" href="#router-go的简化" aria-hidden="true">#</a> $router.go的简化</h3>
<ul>
<li>$router.back() 表示后退一层</li>
<li>$router.forward() 表示前进一层</li>
</ul>
<h2 id="路由导航守卫" tabindex="-1"><a class="header-anchor" href="#路由导航守卫" aria-hidden="true">#</a> 路由导航守卫</h2>
<h3 id="全局前置守卫" tabindex="-1"><a class="header-anchor" href="#全局前置守卫" aria-hidden="true">#</a> 全局前置守卫</h3>
<p>每次发生路由的导航跳转时，都会触发全局前置守卫。
因此，在全局前置守卫中，程序员可以对每个路由进行访问权限的控制
<code v-pre>router.beforeEach(fn)</code></p>
<h3 id="守卫方法的三个形参" tabindex="-1"><a class="header-anchor" href="#守卫方法的三个形参" aria-hidden="true">#</a> 守卫方法的三个形参</h3>
<ul>
<li>to 将要访问的路由信息对象</li>
<li>from 将要离开的路由信息对象</li>
<li>next 是一个函数，调用next()表示放行，允许这次路由导航</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #E5C07B">router</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">beforeEach</span><span style="color: #ABB2BF">((</span><span style="color: #E06C75; font-style: italic">to</span><span style="color: #ABB2BF">,</span><span style="color: #E06C75; font-style: italic">from</span><span style="color: #ABB2BF">,</span><span style="color: #E06C75; font-style: italic">next</span><span style="color: #ABB2BF">)</span><span style="color: #C678DD">=&gt;</span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #7F848E; font-style: italic">// to表示将要访问的路由信息</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E5C07B">console</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">log</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75">to</span><span style="color: #ABB2BF">)</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #7F848E; font-style: italic">// next函数表示放行</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #61AFEF">next</span><span style="color: #ABB2BF">()</span></span>
<span class="line"><span style="color: #ABB2BF">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="next函数的三种调用方式" tabindex="-1"><a class="header-anchor" href="#next函数的三种调用方式" aria-hidden="true">#</a> next函数的三种调用方式</h3>
<!-- ![img_8.png](img_8.png) -->
<p>当前用户拥有后台主页的访问权限，直接放行：next()
当前用户没有后台主页的访问权限，前置其跳转到登录页面：next('/login)
当前用户没有后台主页的访问权限，不允许跳转到后台主页：next(false)</p>
<h3 id="前置守卫" tabindex="-1"><a class="header-anchor" href="#前置守卫" aria-hidden="true">#</a> 前置守卫</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #E5C07B">router</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">beforeEach</span><span style="color: #ABB2BF">((</span><span style="color: #E06C75; font-style: italic">to</span><span style="color: #ABB2BF">,</span><span style="color: #E06C75; font-style: italic">from</span><span style="color: #ABB2BF">,</span><span style="color: #E06C75; font-style: italic">next</span><span style="color: #ABB2BF">)</span><span style="color: #C678DD">=&gt;</span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #7F848E; font-style: italic">// to表示将要访问的路由信息</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #7F848E; font-style: italic">// from表示将要离开的路由的信息对象</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #7F848E; font-style: italic">// next函数表示放行</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #7F848E; font-style: italic">// 分析</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #7F848E; font-style: italic">// 要拿到用户访问的hash地址</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #7F848E; font-style: italic">// 判断hash地址是否等于 /main</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #7F848E; font-style: italic">// 如果等于/main 证明需要登陆之后，才能访问成功</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #7F848E; font-style: italic">// 如果不等于/main，则不需要登录，直接放行 next()</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #7F848E; font-style: italic">// 如果访问的地址是 /main 则需要读取localstorage中的token值</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #7F848E; font-style: italic">// 如果有token就放行</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #7F848E; font-style: italic">// 如果没有token则强制跳转到登录页</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #C678DD">if</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">to</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">path</span><span style="color: #56B6C2">===</span><span style="color: #98C379">&#39;/main&#39;</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">const</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">token</span><span style="color: #56B6C2">=</span><span style="color: #E5C07B">localStorage</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">getItem</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&#39;token&#39;</span><span style="color: #ABB2BF">)</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">if</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75">token</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #61AFEF">next</span><span style="color: #ABB2BF">()</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span><span style="color: #C678DD">else</span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #61AFEF">next</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&#39;/login&#39;</span><span style="color: #ABB2BF">)</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">  }</span></span>
<span class="line"><span style="color: #ABB2BF">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


