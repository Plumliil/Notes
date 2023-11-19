<template><div><!-- ---
prev: ../React
next: false
--- -->
<h1 id="基础篇" tabindex="-1"><a class="header-anchor" href="#基础篇" aria-hidden="true">#</a> 基础篇</h1>
<h2 id="什么是-vue" tabindex="-1"><a class="header-anchor" href="#什么是-vue" aria-hidden="true">#</a> 什么是 vue</h2>
<p>一套用于构建用户界面的前端框架</p>
<ul>
<li>构建用户界面：用 vue 往 html 中填充数据</li>
<li>框架：一套现成的解决方案，程序员只能遵守框架的规范，学习 vue 就是学习框架用法（指令，组件，路由，vuex）</li>
<li>只有把以上内容掌握，才有开发 vue 项目能力</li>
</ul>
<h2 id="vue-特性" tabindex="-1"><a class="header-anchor" href="#vue-特性" aria-hidden="true">#</a> vue 特性</h2>
<p>在 vue 页面中，vue 会监听数据变化，从而自动重新渲染页面结构</p>
<p><img src="https://s2.loli.net/2023/03/29/mS67KG9XuJYvdCw.png" alt=""></p>
<p>好处：数据变化时，页面重新渲染</p>
<p>坏处：数据驱动视图时双向绑定</p>
<h3 id="_1-提高开发效率-不再操作-dom-解放用户的双手" tabindex="-1"><a class="header-anchor" href="#_1-提高开发效率-不再操作-dom-解放用户的双手" aria-hidden="true">#</a> 1.提高开发效率，不再操作 dom，解放用户的双手</h3>
<h3 id="_2-框架和库的区别" tabindex="-1"><a class="header-anchor" href="#_2-框架和库的区别" aria-hidden="true">#</a> 2.框架和库的区别</h3>
<p>框架是一套完整的解决方案，对项目的侵入性比较大，更换框架=重写项目
库是提供某一个小功能，对项目的侵入性比较小，如果某个库无法完成某些需求，可以切换其他库</p>
<h3 id="_3-mvc-和-mvvm-之间的区别" tabindex="-1"><a class="header-anchor" href="#_3-mvc-和-mvvm-之间的区别" aria-hidden="true">#</a> 3.MVC 和 MVVM 之间的区别</h3>
<p>MVC 是后端开发概念，M 为 Model 层，V 是 View 层看作前端页面，C 相当于业务逻辑层</p>
<p>MVVM 是前端视图层的概念，主要把每个页面分成了 M，V 和 VM。其中 VM 是 MVVM 思想的核心，因为 VM 是 M 和 VM 之间的调度者，M 保存的是每个页面中单独的数据，V 就是每个页面中的 HTML 结构,每当 V 层想要获取和保存数据的时候，都要由 VM 做中间件处理
好处：前端页面使用 MVVM 的思想主要是为了方便开发，应为 MVVM 提供了数据的双向绑定（由 VM 提供）</p>
<h2 id="vue-指令" tabindex="-1"><a class="header-anchor" href="#vue-指令" aria-hidden="true">#</a> vue 指令</h2>
<h3 id="内置指令" tabindex="-1"><a class="header-anchor" href="#内置指令" aria-hidden="true">#</a> 内置指令</h3>
<h4 id="v-clock" tabindex="-1"><a class="header-anchor" href="#v-clock" aria-hidden="true">#</a> v-clock</h4>
<p>先通过样式隐藏内容,然后在内存中进行值得替换并显示最终结果
使用 v-clock 让用户看不到插值表达式闪烁，当 vue.js 在后边引用时</p>
<h4 id="v-text" tabindex="-1"><a class="header-anchor" href="#v-text" aria-hidden="true">#</a> v-text</h4>
<p>默认 v-text 没有闪烁问题，v-text 会覆盖元素中原始内容，但是插值表达式只会替换自己的占位符，不会把整个元素覆盖</p>
<h4 id="v-html" tabindex="-1"><a class="header-anchor" href="#v-html" aria-hidden="true">#</a> v-html</h4>
<p>可以直接渲染 html 标签</p>
<h4 id="v-pre" tabindex="-1"><a class="header-anchor" href="#v-pre" aria-hidden="true">#</a> v-pre</h4>
<p>填充原始信息,显示原始信息,跳过编译过程</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- &lt;script src="./lib/vue.min.js">&lt;/script> --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
      <span class="token selector">[v-clock]</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-clock</span><span class="token punctuation">></span></span>{{msg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span> <span class="token attr-name">v-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>msg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-html</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>msg2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">var</span> vue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">"#app"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">"hello Vue!"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">msg2</span><span class="token operator">:</span> <span class="token string">"&lt;h3>v-html&lt;/h3>"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="v-bind" tabindex="-1"><a class="header-anchor" href="#v-bind" aria-hidden="true">#</a> v-bind</h4>
<p>提供绑定属性的一个指令</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">v-bind:</span>title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mytitle<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>v-bind 属性可以简洁为一个：要绑定的属性，且 v-bind 中可以写合法的表达式</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mytitle +'123'' <span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>mytitle:'自定义 title'
允许 v-bind 绑定属性值期间，如果绑定内容需要进行动态拼接，则字符串的外面应该包裹单引号如</p>
<p><code v-pre>&lt;P :title=&quot;'box'+index&quot;&gt;BOX&lt;/P&gt;</code></p>
<h4 id="v-on" tabindex="-1"><a class="header-anchor" href="#v-on" aria-hidden="true">#</a> v-on</h4>
<p>提供绑定事件的一个指令 v-on:=@</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mytitle<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Button<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">v-on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>show<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">var</span> vue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">"#app"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">mytitle</span><span class="token operator">:</span> <span class="token string">"自定义title"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 在methods属性中定义了当前Vue实例所有可用的方法</span>
        <span class="token function-variable function">show</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"show"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="条件渲染指令" tabindex="-1"><a class="header-anchor" href="#条件渲染指令" aria-hidden="true">#</a> 条件渲染指令</h3>
<p>v-if：每次动态创建和移除元素创建删除节点,来实现（进入页面，某些元素默认不显示，后期可能也不显示才使用 v-if）
v-show:动态为元素添加 display:none 样式来实现元素显示隐藏（频繁切换性能更好）
在实际开发中绝大多数勤快，不用考虑性能，直接 v-if
v-else-if：必须配合 v-if 使用，实现多项判断
v-else：v-if 的相反情况</p>
<h3 id="列表渲染指令" tabindex="-1"><a class="header-anchor" href="#列表渲染指令" aria-hidden="true">#</a> 列表渲染指令</h3>
<p>vue 提供了 v-for 列表渲染指令，用来辅助开发者继续一个数组来循环渲染列表结构。v-for 指令需要用 item in items 形式语法中
key 属性绑定,官方建议只要用到 v-for 一定要绑定一个 key，key 值最好为 item.id（提升性能，防止列表状态紊乱）
官方对 key 值的类型是有要求的，字符串或数字类型
key 的值是千万不能重复的，否则终端会报错：Duplicate keys detected</p>
<ul>
<li>items 是待循环的数组</li>
<li>item 是被循环的每一项</li>
</ul>
<h2 id="事件修饰符" tabindex="-1"><a class="header-anchor" href="#事件修饰符" aria-hidden="true">#</a> 事件修饰符</h2>
<p>放在事件后</p>
<ul>
<li>.stop:阻止事件向上冒泡</li>
<li>.prevent:阻止默认行为</li>
<li>.capture:事件捕获机制</li>
<li>.self:只有点击当前元素才会触发事件</li>
<li>.once:事件只执行一次</li>
</ul>
<h2 id="指令修饰符" tabindex="-1"><a class="header-anchor" href="#指令修饰符" aria-hidden="true">#</a> 指令修饰符</h2>
<h4 id="双向数据绑定" tabindex="-1"><a class="header-anchor" href="#双向数据绑定" aria-hidden="true">#</a> 双向数据绑定</h4>
<p>双向数据绑定用到了 v-model 这一指令</p>
<p>v-model 只能和特殊的元素搭配使用
input,textarea,select</p>
<p><code v-pre>&lt;input type=&quot;text&quot; value=&quot;&quot; v-model=&quot;msg&quot; @keyup.enter=&quot;enter&quot; /&gt;</code></p>
<p>为了方便对用户内容做处理，vue 为 vue-model 指令提供了 3 个修饰符，分别是：</p>
<table>
<thead>
<tr>
<th>修饰符</th>
<th>作用</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>.number</td>
<td>自动将用户的输入值转为数值类型</td>
<td><code v-pre>&lt;input v-model.number=&quot;age&quot; /&gt;</code></td>
</tr>
<tr>
<td>.trim</td>
<td>自动过滤用户输入的守卫空白字符</td>
<td><code v-pre>&lt;input v-model.trim=&quot;msg&quot; /&gt;</code></td>
</tr>
<tr>
<td>.lazy</td>
<td>在&quot;change&quot;时而非&quot;input&quot;时更新</td>
<td><code v-pre>&lt;input v-model.lazy=&quot;msg&quot; /&gt;</code></td>
</tr>
</tbody>
</table>
<h2 id="按键修饰符" tabindex="-1"><a class="header-anchor" href="#按键修饰符" aria-hidden="true">#</a> 按键修饰符</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> @keyup<span class="token punctuation">.</span>esc<span class="token operator">=</span><span class="token string">"clearInput"</span> @keyup<span class="token punctuation">.</span>enter<span class="token operator">=</span><span class="token string">"commitAjax"</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">msg</span><span class="token operator">:</span><span class="token string">'xxxxx'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token function">clearInput</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'clearInput'</span><span class="token punctuation">)</span>
                e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token operator">=</span><span class="token keyword">null</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">commitAjax</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'commitAjax'</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="过滤器" tabindex="-1"><a class="header-anchor" href="#过滤器" aria-hidden="true">#</a> 过滤器</h2>
<p>过滤器是 vue 开发者提供的功能，常用于文本的格式化，过滤器可以和 v-bind 绑定
过滤器应该被添加在 javascript 表达式的尾部，由管道符进行调用，示例代码如下</p>
<h3 id="私有过滤器和全局过滤器" tabindex="-1"><a class="header-anchor" href="#私有过滤器和全局过滤器" aria-hidden="true">#</a> 私有过滤器和全局过滤器</h3>
<p>在 filters 节点下定义的过滤器，称为“私有过滤器”，因为它只能在当前 vm 示例所
控制的 el 区域内使用，如果希望在多个 vue 实例之间共享过滤器，则可可以按照如下格式定义全局过滤器</p>
<p><code v-pre>&lt;p&gt;message的值是：{{msg | capi}}&lt;/p&gt;</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> <span class="token literal-property property">filters</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token comment">// 过滤器形参中的val永远是管道符|前的值</span>
            <span class="token function">capi</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// 字符串由charAt方法 这个方法接收一个索引值，表示从字符串中把索引对应的值</span>
                <span class="token keyword">const</span> first<span class="token operator">=</span>val<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token keyword">const</span> other<span class="token operator">=</span>val<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
                <span class="token comment">//过滤器钟一定要有一个返回值</span>
                <span class="token keyword">return</span> first <span class="token operator">+</span> other
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// Vue.filter 方法接收两个参数</span>
<span class="token comment">// 第一个参数是全局过滤器的名字</span>
<span class="token comment">// 第二个参数是全局过滤器的处理函数</span>
Vue<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token string">"capi"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"--"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="过滤器的注意点" tabindex="-1"><a class="header-anchor" href="#过滤器的注意点" aria-hidden="true">#</a> 过滤器的注意点</h3>
<ul>
<li>要定义到 filters 节点下，本质是一个函数</li>
<li>在过滤器函数中，一定要有 return 值</li>
<li>在过滤器的形参中，就可以获取到管道符前面待处理的那个值</li>
<li>如果全局过滤器和私有过滤器名字一致，此时就按照就近原则，调用私有过滤器</li>
</ul>
<h3 id="过滤器格式化时间" tabindex="-1"><a class="header-anchor" href="#过滤器格式化时间" aria-hidden="true">#</a> 过滤器格式化时间</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token string">"dateFormat"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">time</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> dt <span class="token operator">=</span> <span class="token function">dayjs</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"YYYY-MM-DD HH-mm-ss"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> dt<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="串联的使用过滤器" tabindex="-1"><a class="header-anchor" href="#串联的使用过滤器" aria-hidden="true">#</a> 串联的使用过滤器</h3>
<p>过滤器可以串联调用
<code v-pre>&lt;P&gt;{message | filter1 | filter2 | filter3 }&lt;/p&gt;</code></p>
<h3 id="调用过滤器还可以传参" tabindex="-1"><a class="header-anchor" href="#调用过滤器还可以传参" aria-hidden="true">#</a> 调用过滤器还可以传参</h3>
<p>过滤器的本质是 javascript 函数，因此可以接受参数
<code v-pre>&lt;P&gt;{message | filter(arg1 , arg2) }&lt;/p&gt;</code>
// 过滤器处理函数的形参列表中
// 第一个参数永远是管道符前待处理的参数
// 从第二个参数开始，才是调用过滤器时对传递过来的 arg1，arg2 参数</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token string">"filter"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">msg<span class="token punctuation">,</span> arg1<span class="token punctuation">,</span> arg2</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 过滤器代码逻辑</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="过滤器的兼容性" tabindex="-1"><a class="header-anchor" href="#过滤器的兼容性" aria-hidden="true">#</a> 过滤器的兼容性</h3>
<p>vue3 不支持过滤器</p>
<h2 id="监听器" tabindex="-1"><a class="header-anchor" href="#监听器" aria-hidden="true">#</a> 监听器</h2>
<h4 id="什么是监听器" tabindex="-1"><a class="header-anchor" href="#什么是监听器" aria-hidden="true">#</a> 什么是监听器</h4>
<p>监听器允许开发者监视数据的变化，从而针对数据变化做特定动作
语法格式如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">watch</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token comment">// 监听器本质上是一个函数，要监视哪个数据的变化，就把数据名做方法名即可</span>
            <span class="token comment">// newVal 变化后的新值 oldVal 变化后的旧值</span>
            <span class="token comment">// 新值在前 旧值在后</span>
            <span class="token function">msg</span><span class="token punctuation">(</span><span class="token parameter">newVal<span class="token punctuation">,</span>oldVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>oldVal <span class="token operator">+</span> <span class="token string">'-----已更改为-----'</span> <span class="token operator">+</span> newVal<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>应用场景：查询用户名是否重复，当旧值更改时就通过接口查询</p>
<h3 id="对象格式的监听器" tabindex="-1"><a class="header-anchor" href="#对象格式的监听器" aria-hidden="true">#</a> 对象格式的监听器</h3>
<p>// immediate 选项的默认值是 false
// immediate 的作用是控制侦听器是否自动触发一次
immediate:true</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">watch</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token comment">// 对象格式的监听器</span>
            <span class="token literal-property property">msg</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token comment">// 侦听器的处理函数</span>
                <span class="token function">handle</span> <span class="token punctuation">(</span><span class="token parameter">newVal<span class="token punctuation">,</span>oldVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newVal<span class="token punctuation">,</span>oldVal<span class="token punctuation">)</span>
                <span class="token punctuation">}</span> <span class="token punctuation">,</span>
                <span class="token comment">// immediate 选项的默认值是 false</span>
                <span class="token comment">// immediate 的作用是控制侦听器是否自动触发一次</span>
                <span class="token literal-property property">immediate</span><span class="token operator">:</span><span class="token boolean">true</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="深度侦听" tabindex="-1"><a class="header-anchor" href="#深度侦听" aria-hidden="true">#</a> 深度侦听</h3>
<p>如果是对象属性发生变化无法触发监听器
可以通过 deep 选项深度监听属性变化</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">watch</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token comment">// 对象格式的监听器</span>
            <span class="token literal-property property">info</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token function">handle</span><span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token comment">// 开启深度监听，只要对象中任何一个属性变化，都会触发对象监听器</span>
                <span class="token literal-property property">deep</span><span class="token operator">:</span><span class="token boolean">true</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">watch</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token comment">// 对象格式的监听器</span>
            <span class="token string">'info.msg'</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span><span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="计算属性" tabindex="-1"><a class="header-anchor" href="#计算属性" aria-hidden="true">#</a> 计算属性</h2>
<p>指是通过一系列运算之后，最终得到的一个属性值
这个动态计算出来的属性值可以被模板结构或 methods 方法使用，示例代码如下：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/1999/html<span class="token punctuation">"</span></span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/1999/html<span class="token punctuation">"</span></span>
<span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/1999/html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../vue.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.bootcdn.net/ajax/libs/dayjs/1.4.1/dayjs.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.box</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        r:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>r<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>br</span><span class="token punctuation">></span></span>
        g:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>g<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>br</span><span class="token punctuation">></span></span>
        b:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>b<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>br</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{backgroundColor:rgb}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        {{rgb}}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>show<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">

    <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">r</span><span class="token operator">:</span><span class="token number">255</span><span class="token punctuation">,</span>
    <span class="token literal-property property">g</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">0</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>rgb<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 监听属性</span>
    <span class="token literal-property property">watch</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 计算属性</span>
    <span class="token comment">// 所有的计算属性都要定义到computed节点下</span>
    <span class="token comment">// 计算属性在定义的时候，要定义成方法格式</span>
    <span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token comment">// rgb作为一个计算属性被定义为方法格式</span>
    <span class="token comment">// 最终，在这个方法中，要返回一个生成好的rgb(x,x,x)</span>
    <span class="token function">rgb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">rgb(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>r<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>g<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>b<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h3>
<ul>
<li>定义的时候要被定义为方法</li>
<li>在使用计算属性的时候，当普通的属性使用即可</li>
</ul>
<h3 id="好处" tabindex="-1"><a class="header-anchor" href="#好处" aria-hidden="true">#</a> 好处</h3>
<ul>
<li>实现了代码复用</li>
<li>只要计算属性中依赖的数据源变化了，则计算属性会自动重新求值</li>
</ul>
<h2 id="axios" tabindex="-1"><a class="header-anchor" href="#axios" aria-hidden="true">#</a> axios</h2>
<h4 id="基础语法" tabindex="-1"><a class="header-anchor" href="#基础语法" aria-hidden="true">#</a> 基础语法</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">"请求类型"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"请求地址"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// .then用来指定请求成功后的回调函数</span>
  <span class="token comment">// 形参中的 result 是请求成功后的结果</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用 axios 得到的返回值是一个 promise 对象
axios 在请求到数据后，在真正的数据外套了一层壳</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">config</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string">'真实数据'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">request</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">status</span><span class="token operator">:</span>xxx<span class="token punctuation">,</span>
    <span class="token literal-property property">statusText</span><span class="token operator">:</span><span class="token string">''</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h3>
<ul>
<li>发起 get 请求</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">"GET"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"请求地址"</span><span class="token punctuation">,</span>
  <span class="token comment">// url中查询参数 (get)</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// .then用来指定请求成功后的回调函数</span>
  <span class="token comment">// 形参中的 result 是请求成功后的结果</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>发起 post 请求</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">"POST"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"请求地址"</span><span class="token punctuation">,</span>
  <span class="token comment">// url中查询参数 (get)</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"zhangsan"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// .then用来指定请求成功后的回调函数</span>
  <span class="token comment">// 形参中的 result 是请求成功后的结果</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="await-async" tabindex="-1"><a class="header-anchor" href="#await-async" aria-hidden="true">#</a> await async</h3>
<p>通过 await 可以获取到返回值，而不是 promise
对象，但必须用在 async 修饰的方法中</p>
<h4 id="解构赋值" tabindex="-1"><a class="header-anchor" href="#解构赋值" aria-hidden="true">#</a> 解构赋值</h4>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>async getData(){ const {data:res}=await axios({ method:'POST', url:'xxxxxxx', //
请求体参数 (post) data:{} }) console.log(res) }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="简化" tabindex="-1"><a class="header-anchor" href="#简化" aria-hidden="true">#</a> 简化</h3>
<p>访问方法</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>async getData(){ const {data:resPost}=await
axios.post('http://xxx.xxx.xxx',{name:'xxx'}) const {data:resGet}=await
axios.get('http://xxx.xxx.xxx',{params:{name:'xxx'}}) console.log(resPost)
console.log(resGet) }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue-cli" tabindex="-1"><a class="header-anchor" href="#vue-cli" aria-hidden="true">#</a> vue-cli</h2>
<p>单页面程序（Single Page Application），简称 SPA,顾名思义，指的是一个 Web 网站只有唯一一个 HTML 界面，
所有的功能与交互都在这唯一的一个页面内完成。</p>
<h3 id="什么是-vue-cli" tabindex="-1"><a class="header-anchor" href="#什么是-vue-cli" aria-hidden="true">#</a> 什么是 vue-cli</h3>
<p>vue-cli 是 Vue.js 开发的标准工具。它简化了程序员基于 Webpack 创建工程化 Vue 项目的过程。
引用 vue-cli 官网上一句话，承轩 u 你可以专注于撰写应用，而不必花好几天纠结 webpack 配置</p>
<h3 id="安装和使用" tabindex="-1"><a class="header-anchor" href="#安装和使用" aria-hidden="true">#</a> 安装和使用</h3>
<p>vue-cli 是 npm 上一个全局包，使用 npm install 命令，即可方便的把它安装到电脑上
<code v-pre>npm install -g @vue/cli</code> 1.基于 vue-cli 快速生成工程化 Vue 项目
<code v-pre>vue create 项目名称</code>
2.vue 项目中 src 目录的构成</p>
<ul>
<li>assets 文件夹：存放项目中的静态资源文件</li>
<li>components 文件夹：程序员封装的可复用组件都要放到 components 目录下</li>
<li>main.js 入口文件：整个项目的执行都要先执行该入口文件</li>
<li>App.vue 项目的根组件：</li>
</ul>
<p>Vue 实例的$mount()方法，作用和 el 属性完全一样</p>
<h2 id="vue-组件" tabindex="-1"><a class="header-anchor" href="#vue-组件" aria-hidden="true">#</a> vue 组件</h2>
<p>组件化开发指的是：根据封装的思想，把页面上可重用的 UI 结构封装为组件，从而方便项目开发和维护</p>
<h3 id="vue-组件的三个部分" tabindex="-1"><a class="header-anchor" href="#vue-组件的三个部分" aria-hidden="true">#</a> vue 组件的三个部分</h3>
<ul>
<li>template 组件模板结构</li>
<li>script 组件的 javascript 行为</li>
<li>style 组件的 css 样式(默认 css 语法)加上 lang 可以改成其他语法</li>
<li><code v-pre>&lt;style lang=&quot;less&quot;&gt;&lt;/style&gt;</code></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span>msg<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"changeMsg"</span><span class="token operator">></span>按钮<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">&lt;</span>script<span class="token operator">></span>
  <span class="token comment">// 默认导出，固定语法</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token comment">// data 数据源</span>
    <span class="token comment">// 注意：vue组件中的data不能像之前一样，不能指向对象</span>
    <span class="token comment">// 注意：组件中的data必须是一个函数</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">{</span>
          <span class="token literal-property property">msg</span><span class="token operator">:</span><span class="token number">0</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token function">changeMsg</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>msg<span class="token operator">+=</span><span class="token number">1</span>
        <span class="token comment">// 在组件中 this就表示当前组建的实例对象</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">watch</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filters</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token operator">&lt;</span>style<span class="token operator">></span>
  #app<span class="token punctuation">{</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> pink<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件之间的父子关系" tabindex="-1"><a class="header-anchor" href="#组件之间的父子关系" aria-hidden="true">#</a> 组件之间的父子关系</h3>
<p>组件在封装好之后是相互独立的，不存在父子关系
使用组建的三个步骤</p>
<ul>
<li>使用 import 语法导入需要的组件</li>
<li>使用 components 节点组测组件</li>
<li>以标签的形式使用刚才注册的组件</li>
</ul>
<h3 id="通过-components-注册的是私有组件" tabindex="-1"><a class="header-anchor" href="#通过-components-注册的是私有组件" aria-hidden="true">#</a> 通过 components 注册的是私有组件</h3>
<p>例如：在组件 A 的 components 节点下，注册了组件 F
则组件 F 只能用个在组件 A 中，不能用被用在组件 C 中
缺点：多次复用时很麻烦
实例代码如下:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// main.js</span>
<span class="token comment">// 导入需要被全局注册的组件</span>
<span class="token keyword">import</span> Count <span class="token keyword">from</span> <span class="token string">"@/components/Count"</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">"MyCount"</span><span class="token punctuation">,</span> Count<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注册全局组件" tabindex="-1"><a class="header-anchor" href="#注册全局组件" aria-hidden="true">#</a> 注册全局组件</h3>
<p>在 vue 项目的 main.js 文件中,通过 Vue.component()方法，可以注册全局组件，示例代码如下</p>
<h3 id="结合-v-bind-使用自定义属性" tabindex="-1"><a class="header-anchor" href="#结合-v-bind-使用自定义属性" aria-hidden="true">#</a> 结合 v-bind 使用自定义属性</h3>
<p>v-bind 内的值是 javascript 数字不加的话为普通字符串</p>
<h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h3>
<p>props 是组件的自定义属性，在封装组件的时候，合理的使用 props 可以极大的提高组件的复用性
自定义属性名字是封装这自定义的（'合法即可'）
格式语法如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// props是自定义属性，允许使用者通过自定义属性，为当前组件指定初始值</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"init"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="props-里的数据是只读的" tabindex="-1"><a class="header-anchor" href="#props-里的数据是只读的" aria-hidden="true">#</a> props 里的数据是只读的</h4>
<p>程序员不能直接修改 props 里的值，负责终端会报错
可以把 props 里的值转存到 data 中</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// props是自定义属性，允许使用者通过自定义属性，为当前组件指定初始值</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"init"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Count"</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>init<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="props-默认值" tabindex="-1"><a class="header-anchor" href="#props-默认值" aria-hidden="true">#</a> props 默认值</h4>
<p>定义对象里的 props
实例代码如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// props是自定义属性，允许使用者通过自定义属性，为当前组件指定初始值</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">init</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Count"</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>init<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="props-里的-type-值类型" tabindex="-1"><a class="header-anchor" href="#props-里的-type-值类型" aria-hidden="true">#</a> props 里的 type 值类型</h4>
<p>type:</p>
<ul>
<li>String</li>
<li>Number</li>
<li>Boolean</li>
<li>Array</li>
<li>Object
示例代码：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// props是自定义属性，允许使用者通过自定义属性，为当前组件指定初始值</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">init</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Count"</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>init<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="props-里的必填-required" tabindex="-1"><a class="header-anchor" href="#props-里的必填-required" aria-hidden="true">#</a> props 里的必填 required</h4>
<p>当 required 为 true，如果不传值就会报错，有默认值也没用</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>export default { //
props是自定义属性，允许使用者通过自定义属性，为当前组件指定初始值 props: { init:
{ default: 0, type:Number, required:true } }, name: "Count", data() { return {
count: this.init } } }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="组件之间的样式冲突问题" tabindex="-1"><a class="header-anchor" href="#组件之间的样式冲突问题" aria-hidden="true">#</a> 组件之间的样式冲突问题</h4>
<p>默认情况下，写在.vue 组件中的样式会全局生效，因此会造成多个组件之间的样式冲突问题。
导致组件之间样式冲突的根本原因是：
①：单页面应用程序中，所有组件的 DOM 结构，都是基于唯一的 index.html 页面呈现的
②：每个组件中的样式，都会影响整个 index.html 页面中的 Dom 元素
如何解决：</p>
<ul>
<li>给当前组件内的标签中加入自定义属性
<code v-pre>data-v-xxx</code>
<code v-pre>h1[data-v-xxx]{xxx}</code></li>
<li>在 style 标签内加入 scoped 属性，防止组件间样式冲突</li>
<li>在父组件中更改子组件的样式
当使用第三方库时需要用到/deep/，更改子组件的子元素
<code v-pre>h1[data-v-xxx]{}</code>/deep/前
<code v-pre>[data-v-xxx]h1{}</code>/deep/后
<code v-pre>/deep/ h1{}</code></li>
</ul>
<h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2>
<h3 id="组件间的生命周期" tabindex="-1"><a class="header-anchor" href="#组件间的生命周期" aria-hidden="true">#</a> 组件间的生命周期</h3>
<p>生命周期是指一个组件从创建-&gt;运行-&gt;销毁的整个阶段，强调的是一个时间段
生命周期函数：是由 vue 框架提供的内置函数，会伴随着组件的生命周期，自动按次序执行</p>
<!-- ![img.png](img.png) -->
<p>注意：生命周期强调的是时间段，生命周期函数强调的是时间点</p>
<h4 id="创建阶段生命周期函数" tabindex="-1"><a class="header-anchor" href="#创建阶段生命周期函数" aria-hidden="true">#</a> 创建阶段生命周期函数</h4>
<ul>
<li>beforeCreate(){} 组件的 props/data/methods 尚未被创建，都处于不可用状态</li>
<li>created(){} 组件的 props/data/methods 已创建好，处于可用状态，但是组建的模板结构尚未生成</li>
<li>beforeMount(){} 将要把内存中编译好的 HTML 结构渲染到浏览器中，此时浏览器中还没有当前组件的 DOM 结构</li>
<li>mounted(){} 已经把内存中的 HTML 结构，成功的渲染到浏览器中，此时浏览器中已然包含了当前组建的 DOM 结构</li>
</ul>
<h3 id="运行阶段生命周期函数" tabindex="-1"><a class="header-anchor" href="#运行阶段生命周期函数" aria-hidden="true">#</a> 运行阶段生命周期函数</h3>
<ul>
<li>beforeUpdate(){} 将要根据变化后，最新的数据，重新渲染组件的模板结构。（此时还未渲染）</li>
<li>updated(){} 已经根据最新的数据，完成了组件 DOM 结构的重新渲染，数据变化之后为了操作最新的数据，必须放在 updated 生命周期函数里</li>
</ul>
<h3 id="销毁阶段生命周期函数" tabindex="-1"><a class="header-anchor" href="#销毁阶段生命周期函数" aria-hidden="true">#</a> 销毁阶段生命周期函数</h3>
<ul>
<li>beforeDestroy(){} 将要销毁此组件，此时尚未销毁，组件还处于正常工作的状态</li>
<li>destroy(){} 组件已经被销毁，此组件在浏览器中对应的 DOM 结构已经被完全移除</li>
</ul>
<h2 id="数据共享" tabindex="-1"><a class="header-anchor" href="#数据共享" aria-hidden="true">#</a> 数据共享</h2>
<h3 id="父组件向子组件传递数据" tabindex="-1"><a class="header-anchor" href="#父组件向子组件传递数据" aria-hidden="true">#</a> 父组件向子组件传递数据</h3>
<p>父组件向子组件共享数据需要使用自定义属性
不能修改 props 里的值，只能转存</p>
<ul>
<li>父</li>
</ul>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Son</span> <span class="token attr-name">:msg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>message<span class="token punctuation">"</span></span> <span class="token attr-name">:user</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userInfo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Son</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>子</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"son"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>h1<span class="token operator">></span>Son 组件<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span>父组件传递过来的 msg 值为：<span class="token punctuation">{</span><span class="token punctuation">{</span>msg<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span>父组件传递过来的 user 值为：<span class="token punctuation">{</span><span class="token punctuation">{</span>user<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'msg'</span><span class="token punctuation">,</span><span class="token string">'user'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Son"</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="子组件向父组件传值" tabindex="-1"><a class="header-anchor" href="#子组件向父组件传值" aria-hidden="true">#</a> 子组件向父组件传值</h3>
<ul>
<li>子
<code v-pre>this.$emit('numChange',this.num)</code></li>
<li>父
<code v-pre>&lt;right @numChange=&quot;getNewNum&quot;&gt;&lt;/right&gt;</code></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">getNewNum</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>numFromSon<span class="token operator">=</span>val
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="兄弟组件之间的传值" tabindex="-1"><a class="header-anchor" href="#兄弟组件之间的传值" aria-hidden="true">#</a> 兄弟组件之间的传值</h3>
<p>在 vue2.x 中，兄弟组件之间数据共享的方案是 EventBus
EventBus 的使用步骤</p>
<ul>
<li>创建 eventBus.js 模块，并向外共享一个 Vue 的实例对象</li>
<li>在数据发送方，调用 bus.$emit('时间名称',要发送的数据)方法触发自定义事件</li>
<li>在数据接收方，调用 bus.$on('事件名称',事件处理函数)方法注册一个自定义事件<!-- ![img_1.png](img_1.png) -->
</li>
</ul>
<h2 id="ref-引用" tabindex="-1"><a class="header-anchor" href="#ref-引用" aria-hidden="true">#</a> ref 引用</h2>
<h3 id="什么是-ref-引用" tabindex="-1"><a class="header-anchor" href="#什么是-ref-引用" aria-hidden="true">#</a> 什么是 ref 引用</h3>
<p>ref 用来辅助开发者在不依赖 jQuery 的情况下，获取 DOM 元素或组件的引用</p>
<h3 id="使用-ref-引用组件" tabindex="-1"><a class="header-anchor" href="#使用-ref-引用组件" aria-hidden="true">#</a> 使用 ref 引用组件</h3>
<p><code v-pre>&lt;Left ref=&quot;left&quot;&gt;&lt;/Left&gt;</code>
<code v-pre>console.log(this.$refs.left)</code></p>
<h3 id="this-nexttick-cb-方法" tabindex="-1"><a class="header-anchor" href="#this-nexttick-cb-方法" aria-hidden="true">#</a> this.$nextTick(cb)方法</h3>
<p>组件的$nextTick(cb)方法，会把 cb 回调推迟到下一个 DOM 更新周期之后执行。通俗的理解是：
等组件 DOM 更新完成之后，在执行 cb 回调函数，从而能保证 cb 回调函数可以操作到最新的 DOM 元素</p>
</div></template>


