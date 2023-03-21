<template><div><h1 id="基础篇" tabindex="-1"><a class="header-anchor" href="#基础篇" aria-hidden="true">#</a> 基础篇</h1>
<h2 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象" aria-hidden="true">#</a> 面向对象</h2>
<p>Object qriented programming</p>
<p>在面向对象的程序开发思想中，每一个对象都是功能中心，具有明确分工</p>
<p>面向对象变成具有灵活，代码可复用，容易维护和开发的特点，更适合多人合作的大型软件项目</p>
<h3 id="面向对象的作用" tabindex="-1"><a class="header-anchor" href="#面向对象的作用" aria-hidden="true">#</a> 面向对象的作用</h3>
<p>封装 继承 多态</p>
<p>面向对象是把事物分解为一个个对象，然后有对象之间分工合作</p>
<p>举个例子，把大象放进冰箱面向对象做法</p>
<p>先找出对象，并写出这些对象的功能</p>
<p>1.大象为对象</p>
<p>进去</p>
<p>2.冰箱对象</p>
<p>打开</p>
<p>关闭</p>
<p>3.使用大象和冰箱的功能</p>
<p>面向对象是以对象功能来划分问题，而不是步骤</p>
<h3 id="面向对象和面向过程的优缺点" tabindex="-1"><a class="header-anchor" href="#面向对象和面向过程的优缺点" aria-hidden="true">#</a> 面向对象和面向过程的优缺点</h3>
<p>面向过程</p>
<p>优点：性能比面向对象高，适合跟硬件联系很紧密的东西，例如单片机就采用面向过程</p>
<p>缺点：不如面向对象易维护，易复用，易扩展</p>
<p>面向对象优缺点相反，耦合高，更灵活，易维护</p>
<p>面向过程程序就像蛋炒饭</p>
<p>面向对象程序就像盖浇饭</p>
<h2 id="语言基础" tabindex="-1"><a class="header-anchor" href="#语言基础" aria-hidden="true">#</a> 语言基础</h2>
<h3 id="标识符" tabindex="-1"><a class="header-anchor" href="#标识符" aria-hidden="true">#</a> 标识符</h3>
<p>所谓标识符就是变量函数属性或者函数参数的名称</p>
<p>规则：</p>
<ul>
<li>​ 第一个标识符必须是一个字符，下划线或者美元符号</li>
<li>​ 剩下的字符可以是字母下划线美元符号或者是数字</li>
<li>​ 关键字，保留字，true，false 和 null 不能作为标识符</li>
</ul>
<h3 id="保留字与关键字" tabindex="-1"><a class="header-anchor" href="#保留字与关键字" aria-hidden="true">#</a> 保留字与关键字</h3>
<p>ECMA-262 描述了一组保留字，这些关键字有特殊用处，按照规定，保留的关键字不能作为标识符或者属性名</p>
<h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h3>
<p>EMCAScript 的变量是松散类型，意思是可以用于保存任何类型的值</p>
<p>声明风格及最佳实践：不使用或少用 var const 优先，let 次之</p>
<h4 id="var" tabindex="-1"><a class="header-anchor" href="#var" aria-hidden="true">#</a> var</h4>
<ul>
<li>
<p>作用域在函数内部，离开函数，var 声明的变量无效</p>
</li>
<li>
<p>在函数内定义变量省略 var 操作符，可以定义一个全局变量</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> message <span class="token operator">=</span> <span class="token string">"hello world"</span><span class="token punctuation">;</span> <span class="token comment">// 局部变量</span>
<span class="token punctuation">}</span>
<span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//出错 ！</span>

<span class="token keyword">function</span> <span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  message <span class="token operator">=</span> <span class="token string">"hello world"</span><span class="token punctuation">;</span> <span class="token comment">// 全局变量</span>
<span class="token punctuation">}</span>
<span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 'hello world</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>存在变量提升</li>
</ul>
<p>使用关键字声明的变量自动提升到函数作用域顶部</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//undefined 输出undefind并不报错 代码等价于</span>

<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> age<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
  age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="let-const" tabindex="-1"><a class="header-anchor" href="#let-const" aria-hidden="true">#</a> let &amp; const：</h4>
<ul>
<li>
<h6 id="let-和-const-的作用域为块级作用域-块级作用域〔函数作用域" tabindex="-1"><a class="header-anchor" href="#let-和-const-的作用域为块级作用域-块级作用域〔函数作用域" aria-hidden="true">#</a> let 和 const 的作用域为块级作用域(块级作用域﹝函数作用域)</h6>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">var</span> message<span class="token operator">=</span><span class="token string">'hello world'</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//'hello world'</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 'hello world'</span>

<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">(</span>
	<span class="token keyword">let</span> message<span class="token operator">=</span><span class="token string">'hello world'</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//'hello world'</span>
<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//ReferenceError:message没有定义</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<h6 id="let-和-const-声明的变量不存在变量提升" tabindex="-1"><a class="header-anchor" href="#let-和-const-声明的变量不存在变量提升" aria-hidden="true">#</a> let 和 const 声明的变量不存在变量提升</h6>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span> <span class="token comment">//ReferenceError:message没有定义</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<h6 id="其中-const-声明的变量不可修改-不允许重复声明" tabindex="-1"><a class="header-anchor" href="#其中-const-声明的变量不可修改-不允许重复声明" aria-hidden="true">#</a> 其中 const 声明的变量不可修改（不允许重复声明）</h6>
</li>
</ul>
<h4 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h4>
<h5 id="ecmascript-有六种简单的数据类型-也称原始类型-还有一种复杂的数据类型-object" tabindex="-1"><a class="header-anchor" href="#ecmascript-有六种简单的数据类型-也称原始类型-还有一种复杂的数据类型-object" aria-hidden="true">#</a> ECMAScript 有六种简单的数据类型（也称原始类型）还有一种复杂的数据类型 object</h5>
<table>
<thead>
<tr>
<th>简单数据类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>undefined</td>
<td>表示值未定义</td>
</tr>
<tr>
<td>boolean</td>
<td>表示值为布尔值(其他数据类型的值都有相应布尔值的等价形式)</td>
</tr>
<tr>
<td>string</td>
<td>表示值为字符串</td>
</tr>
<tr>
<td>number</td>
<td>表示值为数值</td>
</tr>
<tr>
<td>null</td>
<td>表示值为空值（逻辑上讲 null 值表示一个空对象指针，给 typeof 传入 null 时会返回 object）</td>
</tr>
<tr>
<td>symbol</td>
<td>表示值为符号</td>
</tr>
<tr>
<td>bigInt</td>
<td>表示大于 2^53 的整数。而在Javascript中，Number 基本类型可以精确表示的最大整数是 2^53。BigInt 可以表示任意大的整数。</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>复杂数据类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>object</td>
<td>表示值为对象（而不是函数）</td>
</tr>
</tbody>
</table>
<p>其中 typeof 操作符可以确定变量的任意数据类型如</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> message <span class="token operator">=</span> <span class="token string">"hello world"</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//'string'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//'number'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="操作符" tabindex="-1"><a class="header-anchor" href="#操作符" aria-hidden="true">#</a> 操作符</h3>
<p>一元操作符，位操作符，布尔操作符，乘性操作符，指数操作符，加性操作符，关系操作符，相等操作符，条件操作符，赋值操作符，逗号操作符</p>
<table>
<thead>
<tr>
<th>操作符</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>i++,i--,++i,--i</td>
<td></td>
</tr>
<tr>
<td>~，&amp;，|，^，&lt;&lt;,&gt;&gt;,&gt;&gt;&gt;</td>
<td></td>
</tr>
<tr>
<td>!,&amp;&amp;,||</td>
<td></td>
</tr>
<tr>
<td>*,/</td>
<td></td>
</tr>
<tr>
<td>**</td>
<td></td>
</tr>
<tr>
<td>+,-</td>
<td></td>
</tr>
<tr>
<td>&gt;,&lt;,&gt;=,&lt;=</td>
<td></td>
</tr>
<tr>
<td>==,!=,===,!==</td>
<td></td>
</tr>
<tr>
<td>variable = boolean_expression?true_value:false_value</td>
<td></td>
</tr>
<tr>
<td>=</td>
<td></td>
</tr>
<tr>
<td>，</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="变量的声明-弱类型" tabindex="-1"><a class="header-anchor" href="#变量的声明-弱类型" aria-hidden="true">#</a> 变量的声明（弱类型）</h3>
<h4 id="_1-typeof-验证变量类型" tabindex="-1"><a class="header-anchor" href="#_1-typeof-验证变量类型" aria-hidden="true">#</a> 1.typeof 验证变量类型</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token string">"lyh"</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// string</span>
a <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// number</span>
a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// objecct</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 声明是开辟空间，赋值是放入内容</p>
<h4 id="_2-体验解析过程与变量提升" tabindex="-1"><a class="header-anchor" href="#_2-体验解析过程与变量提升" aria-hidden="true">#</a> 2.体验解析过程与变量提升</h4>
<p>​ 解析是把所有代码解析，也存在变量提升（不好）</p>
<p>​</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> web <span class="token operator">=</span> <span class="token string">"lyh.com"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>web<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//undefind</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ var 声明的变量存在变量提升</p>
<p>​ let const 声明的变量不存在</p>
<h4 id="_3-let-const-暂时性死区" tabindex="-1"><a class="header-anchor" href="#_3-let-const-暂时性死区" aria-hidden="true">#</a> 3.let const 暂时性死区</h4>
<p>​ let const 声明的变量不存在变量提升</p>
<p>​ <strong>声明语句必须放到使用之前</strong></p>
<h4 id="_4-var-let-const-共同点" tabindex="-1"><a class="header-anchor" href="#_4-var-let-const-共同点" aria-hidden="true">#</a> 4.var let const 共同点</h4>
<p>​ 函数中可以访问到外部全局变量</p>
<p>​ 内部声明后为私有</p>
<p>​ 使用时先找局部变量，如果没有使用全局变量</p>
<p>​ 作用域链 就近原则</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> web <span class="token operator">=</span> <span class="token string">"lyh.com"</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> web <span class="token operator">=</span> <span class="token string">"lyh"</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>web<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// lyh</span>
  <span class="token keyword">function</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> web <span class="token operator">=</span> <span class="token string">"run---web"</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>web<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// run---web</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>web<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// lyh</span>
<span class="token punctuation">}</span>
<span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// lyh</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>web<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// lyh.com</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_6-全局污染" tabindex="-1"><a class="header-anchor" href="#_6-全局污染" aria-hidden="true">#</a> 6.全局污染</h5>
<p>​ 可以使用严格模式来避免全局污染</p>
<p>​ use strict</p>
<h5 id="_7-块作用域的先进特性" tabindex="-1"><a class="header-anchor" href="#_7-块作用域的先进特性" aria-hidden="true">#</a> 7.块作用域的先进特性</h5>
<p>​ 声明变量是优先使用 let</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-const-声明" tabindex="-1"><a class="header-anchor" href="#_8-const-声明" aria-hidden="true">#</a> 8.const 声明</h4>
<p>​ 定义固定常量，不能更改（同一个作用域）</p>
<p>​ 引用类型的对象数组可以改变</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> web <span class="token operator">=</span> <span class="token string">"lyh.com"</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> web <span class="token operator">=</span> <span class="token string">"web.com"</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>web<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_9-window-全局对象污染与重复声明" tabindex="-1"><a class="header-anchor" href="#_9-window-全局对象污染与重复声明" aria-hidden="true">#</a> 9.window 全局对象污染与重复声明</h4>
<p>​ var 可能导致全局污染</p>
<p>​ let 不会导致（不会改变 window 对象）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> screenLeft <span class="token operator">=</span> <span class="token number">88</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>screenLeft<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 88</span>
<span class="token keyword">let</span> screenLeft <span class="token operator">=</span> <span class="token number">88</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>screenLeft<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//xxxx</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>screenLeft<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//88</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ let const 不可以重复声明（统一作用域）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> web <span class="token operator">=</span> <span class="token string">"ls"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> web <span class="token operator">=</span> <span class="token string">"zs"</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>web<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Identifier 'web' has already been declared</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_10-object-freeze-冻结变量" tabindex="-1"><a class="header-anchor" href="#_10-object-freeze-冻结变量" aria-hidden="true">#</a> 10.object.freeze 冻结变量</h4>
<p>​</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// object.freeze冻结变量</span>
<span class="token string">"use strict"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">HOST</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"https://lyh.com"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">post</span><span class="token operator">:</span> <span class="token number">8080</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span><span class="token constant">HOST</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token constant">HOST</span><span class="token punctuation">.</span>post <span class="token operator">=</span> <span class="token number">3000</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">HOST</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>11.标量与引用特性的传值与传址</p>
<p>​ <img src="C:\Users\22584\AppData\Roaming\Typora\typora-user-images\image-20210619100945637.png" alt="image-20210619100945637"></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 地址也改变，创建新的内存地址，针对小数据(两个内存空间)</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
b <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 地址没有改变，不创建新的内存地址，针对大数据（一个内存空间）</span>
<span class="token keyword">let</span> e <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"zs"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> f <span class="token operator">=</span> e<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> f<span class="token punctuation">)</span><span class="token punctuation">;</span>
f<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"ls"</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> f<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_12-null-undefined" tabindex="-1"><a class="header-anchor" href="#_12-null-undefined" aria-hidden="true">#</a> 12.null undefined</h4>
<p>​ 没有值为 undefined</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// null undefined</span>
<span class="token keyword">let</span> config <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 引用类型 {}</span>
<span class="token keyword">let</span> web <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// 基本类型 ''</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>web<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_13-严格模式" tabindex="-1"><a class="header-anchor" href="#_13-严格模式" aria-hidden="true">#</a> 13.严格模式</h4>
<p>​ 避免未声明变量使用</p>
<p>​ 避免保留字的使用</p>
<p>​ 严格模式作用域为从当前作用域向下查找</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">"use strict"</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> pub <span class="token operator">=</span> <span class="token string">"ww"</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>pub<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Uncaught SyntaxError: Unexpected strict mode reserved word</span>

<span class="token keyword">var</span> web <span class="token operator">=</span> <span class="token string">"ls"</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  web <span class="token operator">=</span> <span class="token string">"zs"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>web<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Uncaught ReferenceError: web is not defined</span>

<span class="token keyword">function</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token string">"use strict"</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    webadd <span class="token operator">=</span> <span class="token string">"zs.com"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">na</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  site <span class="token operator">=</span> <span class="token string">"啦啦啦"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Uncaught ReferenceError: webadd is not defined</span>

<span class="token keyword">let</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> url <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"zs"</span><span class="token punctuation">,</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"zs.com"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> url<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运算符和流程控制" tabindex="-1"><a class="header-anchor" href="#运算符和流程控制" aria-hidden="true">#</a> 运算符和流程控制</h3>
<p>1.赋值与算术运算符</p>
<p>​ 取余%</p>
<p>2.一元运算符的前置与后置</p>
<p>​ ++i：先自增，i++：先运算 --同理</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> f <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> d <span class="token operator">=</span> f <span class="token operator">+</span> n<span class="token operator">++</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.比较运算符注意事项</p>
<p>​ 不同类型之间比较会转换类型</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token boolean">true</span> <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> d <span class="token operator">=</span> <span class="token string">'1'</span><span class="token punctuation">;</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">&lt;</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//true</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">></span> b<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//false</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">==</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//false</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">==</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//true</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">==</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//true</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b <span class="token operator">>=</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>age<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>msg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">let</span> inp<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'[name="age"]'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> span<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#msg'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    inp<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'keyup'</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        span<span class="token punctuation">.</span>innerHTML<span class="token operator">=</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token operator">>=</span><span class="token number">90</span><span class="token operator">?</span><span class="token string">'年龄不能超过90'</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>；
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.逻辑运算符</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
  b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> b <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 全为真</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"ab全为1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">||</span> b <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 一个满足条件就成立</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"有一个为1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>config_password<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>msg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">function</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">[name='</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">'</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> inputs <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span>
      <span class="token string">'[name="password"],[name="config_password"]'</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>inputs<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span><span class="token operator">...</span>inputs<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      item<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"keyup"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        msg <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>
          <span class="token function">query</span><span class="token punctuation">(</span><span class="token string">"password"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value <span class="token operator">!=</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token string">"config_password"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value <span class="token operator">||</span>
          <span class="token function">query</span><span class="token punctuation">(</span><span class="token string">"password"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">5</span>
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
          msg <span class="token operator">=</span> <span class="token string">"两次密码不一致或密码长度小于5位"</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">query</span><span class="token punctuation">(</span><span class="token string">"msg"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> msg<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.短路与运算的妙用</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
  b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">||</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">,</span>
  d <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> f <span class="token operator">=</span> c <span class="token operator">||</span> d<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> sex <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">"输入"</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">"保密"</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sex<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">star</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">"*"</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span>num <span class="token operator">||</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">star</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.网站协议接收验证</p>
<p>trim()</p>
<p>trim() 方法用于删除字符串的头尾空白符，空白符包括：空格、制表符 tab、换行符等其他空白符等。</p>
<p>trim() 方法不会改变原始字符串。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span>form action<span class="token operator">=</span><span class="token string">""</span> id<span class="token operator">=</span><span class="token string">"form"</span><span class="token operator">></span>
        <span class="token literal-property property">用户名</span><span class="token operator">:</span><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> name<span class="token operator">=</span><span class="token string">"user"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>hr<span class="token operator">></span>
        <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"checkbox"</span> name<span class="token operator">=</span><span class="token string">"copyright"</span> id<span class="token operator">=</span><span class="token string">""</span><span class="token operator">></span> 接收协议
        <span class="token operator">&lt;</span>hr<span class="token operator">></span>
        <span class="token operator">&lt;</span>button<span class="token operator">></span>提交<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
    <span class="token operator">&lt;</span>script<span class="token operator">></span>
        <span class="token keyword">function</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">query</span><span class="token punctuation">(</span><span class="token string">'#form'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'submit'</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">let</span> user<span class="token operator">=</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">'[name="user"]'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> copyright<span class="token operator">=</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">'[name="copyright"]'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>checked<span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>user<span class="token operator">||</span>copyright<span class="token operator">===</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'请提交协议并添加用户名'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7.if else 判断密码长度</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>msg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">function</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">query</span><span class="token punctuation">(</span><span class="token string">'[name="password"]'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"keyup"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> length <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
      <span class="token keyword">let</span> msg <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">></span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        msg <span class="token operator">=</span> <span class="token string">"密码无敌安全"</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">></span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        msg <span class="token operator">=</span> <span class="token string">"密码强度适中"</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        msg <span class="token operator">=</span> <span class="token string">"密码强度较弱"</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token function">query</span><span class="token punctuation">(</span><span class="token string">"#msg"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> msg<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8.三元表达式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 可以作为用户自定义创建对象来使用</span>
<span class="token keyword">function</span> <span class="token function">div</span><span class="token punctuation">(</span><span class="token parameter">options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  div<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> options<span class="token punctuation">.</span>width <span class="token operator">?</span> options<span class="token punctuation">.</span>width <span class="token operator">:</span> <span class="token string">"100px"</span><span class="token punctuation">;</span>
  div<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> options<span class="token punctuation">.</span>height <span class="token operator">?</span> options<span class="token punctuation">.</span>height <span class="token operator">:</span> <span class="token string">"100px"</span><span class="token punctuation">;</span>
  div<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> options<span class="token punctuation">.</span>bgcolor <span class="token operator">?</span> options<span class="token punctuation">.</span>bgcolor <span class="token operator">:</span> <span class="token string">"pink"</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>div<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">div</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">"300px"</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">"400px"</span><span class="token punctuation">,</span> <span class="token literal-property property">bgcolor</span><span class="token operator">:</span> <span class="token string">"blue"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2>
<h3 id="shift" tabindex="-1"><a class="header-anchor" href="#shift" aria-hidden="true">#</a> shift</h3>
<p>shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。</p>
<p><strong>注意：</strong> 此方法改变数组的长度！</p>
<p><strong>提示:</strong> 移除数组末尾的元素可以使用 <a href="https://www.runoob.com/jsref/jsref-pop.html" target="_blank" rel="noopener noreferrer">pop()<ExternalLinkIcon/></a> 方法。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"l"</span><span class="token punctuation">,</span> <span class="token string">"y"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"h"</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr1<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>arr2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// console.table(arr1);</span>
<span class="token keyword">function</span> <span class="token function">range</span><span class="token punctuation">(</span><span class="token parameter">begin<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> begin<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> end<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// console.table(range(1,50))</span>

<span class="token keyword">const</span> arr3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"hdcms"</span><span class="token punctuation">,</span> <span class="token string">"houdunren"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> arr4 <span class="token operator">=</span> arr3<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr4<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// const arr4 = arr3.unshift('后盾人');</span>
console<span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span>arr3<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fill" tabindex="-1"><a class="header-anchor" href="#fill" aria-hidden="true">#</a> fill</h3>
<p>fill() 方法用于将一个固定值替换数组的元素。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">"lyh"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">"l"</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="splice-和-slice" tabindex="-1"><a class="header-anchor" href="#splice-和-slice" aria-hidden="true">#</a> splice 和 slice</h3>
<p><img src="C:\Users\22584\AppData\Roaming\Typora\typora-user-images\image-20210714113458879.png" alt="image-20210714113458879"></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> arr1 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
arr1<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>arr1<span class="token punctuation">.</span>length<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"li"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组移动函数" tabindex="-1"><a class="header-anchor" href="#数组移动函数" aria-hidden="true">#</a> 数组移动函数</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> from<span class="token punctuation">,</span> to</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>from <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> to <span class="token operator">>=</span> array<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"参数错误"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> newArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>array<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> item <span class="token operator">=</span> newArray<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>from<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
  newArray<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>to<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> item<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span>newArray<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> newArray<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">move</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="清空数组" tabindex="-1"><a class="header-anchor" href="#清空数组" aria-hidden="true">#</a> 清空数组</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> arr1 <span class="token operator">=</span> arr<span class="token punctuation">;</span>
arr<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组的拆分与合并" tabindex="-1"><a class="header-anchor" href="#数组的拆分与合并" aria-hidden="true">#</a> 数组的拆分与合并</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"hdcms"</span><span class="token punctuation">,</span> <span class="token string">"houdunren"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> hd <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> cms <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"shop"</span><span class="token punctuation">,</span> <span class="token string">"cms"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">"hdcms,houdunren"</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">","</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// arr=arr.concat(hd,cms);</span>
arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arr<span class="token punctuation">,</span> <span class="token operator">...</span>hd<span class="token punctuation">,</span> <span class="token operator">...</span>cms<span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Array.copyWithin(复制到的位置，复制起始位置，复制终止位置(不包括))</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>hd<span class="token punctuation">.</span><span class="token function">copyWithin</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组的查找" tabindex="-1"><a class="header-anchor" href="#数组的查找" aria-hidden="true">#</a> 数组的查找</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// indexOf:从左开始查找</span>
<span class="token comment">// lastIndexOf:从右开始查找</span>
<span class="token comment">// includes：数组总含有这个字符串，已经查找到</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="includes-方法" tabindex="-1"><a class="header-anchor" href="#includes-方法" aria-hidden="true">#</a> includes 方法</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">includes</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> find</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> value <span class="token keyword">of</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">===</span> find<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">includes</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="find-和-findindex" tabindex="-1"><a class="header-anchor" href="#find-和-findindex" aria-hidden="true">#</a> find 和 findindex</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// let arr = [1, 2, 3, 4, 5, 6, 78];</span>
<span class="token comment">// let res=arr.find(function(item){</span>
<span class="token comment">//     // return item=200;</span>
<span class="token comment">//     // console.log(item);</span>
<span class="token comment">//     // return item=200;</span>
<span class="token comment">//     return item==200;</span>
<span class="token comment">// })</span>
<span class="token comment">// console.log(res);</span>

<span class="token comment">// find查找对象，返回查询到的数据</span>
<span class="token comment">// findIndex返回对象所在的位置</span>
<span class="token keyword">let</span> lessons <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"js"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"css"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"html"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> status <span class="token operator">=</span> lessons<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"css"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="find-原型方法的实现" tabindex="-1"><a class="header-anchor" href="#find-原型方法的实现" aria-hidden="true">#</a> find 原型方法的实现</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> value <span class="token keyword">of</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">callback</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
  <span class="token function">find</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> item <span class="token operator">==</span> <span class="token number">300</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组排序" tabindex="-1"><a class="header-anchor" href="#数组排序" aria-hidden="true">#</a> 数组排序</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// sort()里边值为1正序，-1倒序</span>
arr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// a-b</span>
  <span class="token comment">// -1从小到大</span>
  <span class="token comment">// 1从大到小</span>
  <span class="token keyword">return</span> a <span class="token operator">-</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> cart <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"iphone"</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">12000</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"imac"</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">18000</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"ipad"</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">3200</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
cart <span class="token operator">=</span> cart<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a<span class="token punctuation">.</span>price <span class="token operator">-</span> b<span class="token punctuation">.</span>price<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span>cart<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组循环操作" tabindex="-1"><a class="header-anchor" href="#数组循环操作" aria-hidden="true">#</a> 数组循环操作</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> lessons <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"flex"</span><span class="token punctuation">,</span> <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">"css"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"grid"</span><span class="token punctuation">,</span> <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">"css"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"盒子"</span><span class="token punctuation">,</span> <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">"css"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// for (let i = 0; i &lt; lessons.length; i++) {</span>
<span class="token comment">//     lessons[i].title = `LYH${lessons[i].title}`</span>
<span class="token comment">// }</span>
<span class="token comment">// 引用类型改变原来数组</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> value <span class="token keyword">of</span> lessons<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  value<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">LYH</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>value<span class="token punctuation">.</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span>lessons<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// 值类型不会改变乱来数组</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> value <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  value <span class="token operator">==</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="foreach-循环" tabindex="-1"><a class="header-anchor" href="#foreach-循环" aria-hidden="true">#</a> foreach 循环</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
      <span class="token selector">.disable</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #ddd<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">let</span> lis <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">"li"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      lis<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        item<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token string">"disable"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> lessons <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"flex"</span><span class="token punctuation">,</span> <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">"css"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"grid"</span><span class="token punctuation">,</span> <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">"css"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"盒子"</span><span class="token punctuation">,</span> <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">"css"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">;</span>
      lessons<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index<span class="token punctuation">,</span> lessons</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// substr 截断字符串</span>
        item<span class="token punctuation">.</span>title <span class="token operator">=</span> item<span class="token punctuation">.</span>title<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span>lessons<span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="iterator-迭代器方法玩转数组" tabindex="-1"><a class="header-anchor" href="#iterator-迭代器方法玩转数组" aria-hidden="true">#</a> iterator 迭代器方法玩转数组</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"hdcms"</span><span class="token punctuation">,</span> <span class="token string">"houdunren"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> value <span class="token keyword">of</span> arr<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> keys <span class="token keyword">of</span> arr<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>keys<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// entries() 方法返回一个数组的迭代对象，该对象包含数组的键值对(key / value) 。</span>
<span class="token comment">// 迭代对象中数组的索引值作为 key， 数组元素作为 value。</span>
<span class="token keyword">let</span> entries <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span> done<span class="token punctuation">,</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> entries<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>done<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// keys() 方法用于从数组创建一个包含数组键的可迭代对象。</span>
<span class="token comment">// 如果对象是数组返回 true，否则返回 false。</span>
<span class="token comment">// 获取索引</span>
<span class="token comment">// let keys = arr.keys();</span>
<span class="token comment">// let { value, done } = keys.next();</span>
<span class="token comment">// 获取值</span>
<span class="token comment">// let values = arr.values();</span>
<span class="token comment">// let { value, done } = values.next();</span>
<span class="token comment">// while(({value,done}=values.next())&amp;&amp;done===false){</span>
<span class="token comment">//     console.log(value);</span>
<span class="token comment">// }</span>
<span class="token comment">// console.log(value, done);</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="every-some" tabindex="-1"><a class="header-anchor" href="#every-some" aria-hidden="true">#</a> every，some</h3>
<h5 id="every-方法用于检测数组所有元素是否都符合指定条件-通过函数提供-。" tabindex="-1"><a class="header-anchor" href="#every-方法用于检测数组所有元素是否都符合指定条件-通过函数提供-。" aria-hidden="true">#</a> every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。</h5>
<h5 id="every-方法使用指定函数检测数组中的所有元素" tabindex="-1"><a class="header-anchor" href="#every-方法使用指定函数检测数组中的所有元素" aria-hidden="true">#</a> every() 方法使用指定函数检测数组中的所有元素：</h5>
<h5 id="如果数组中检测到有一个元素不满足-则整个表达式返回-false-且剩余的元素不会再进行检测。" tabindex="-1"><a class="header-anchor" href="#如果数组中检测到有一个元素不满足-则整个表达式返回-false-且剩余的元素不会再进行检测。" aria-hidden="true">#</a> 如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。</h5>
<h5 id="some-方法用于检测数组中的元素是否满足指定条件-函数提供-。" tabindex="-1"><a class="header-anchor" href="#some-方法用于检测数组中的元素是否满足指定条件-函数提供-。" aria-hidden="true">#</a> some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。</h5>
<h5 id="some-方法会依次执行数组的每个元素" tabindex="-1"><a class="header-anchor" href="#some-方法会依次执行数组的每个元素" aria-hidden="true">#</a> some() 方法会依次执行数组的每个元素：</h5>
<h5 id="如果有一个元素满足条件-则表达式返回-true-剩余的元素不会再执行检测。" tabindex="-1"><a class="header-anchor" href="#如果有一个元素满足条件-则表达式返回-true-剩余的元素不会再执行检测。" aria-hidden="true">#</a> 如果有一个元素满足条件，则表达式返回 true, 剩余的元素不会再执行检测。</h5>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">let</span> keywords <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"php"</span><span class="token punctuation">,</span> <span class="token string">"js"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> title <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'[name="title'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    title<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"keyup"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> res2 <span class="token operator">=</span> keywords<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">keyword</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>keyword<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>res2 <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"span"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span>
          <span class="token string">"必须包含"</span> <span class="token operator">+</span> keywords<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">","</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"关键词"</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"span"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"lisi"</span><span class="token punctuation">,</span> <span class="token literal-property property">js</span><span class="token operator">:</span> <span class="token number">89</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"zhangsan"</span><span class="token punctuation">,</span> <span class="token literal-property property">js</span><span class="token operator">:</span> <span class="token number">99</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"wangwu"</span><span class="token punctuation">,</span> <span class="token literal-property property">js</span><span class="token operator">:</span> <span class="token number">80</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。</span>
    <span class="token comment">// every() 方法使用指定函数检测数组中的所有元素：</span>
    <span class="token comment">// 如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。</span>
    <span class="token comment">// 如果所有元素都满足条件，则返回 true</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> user<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> item<span class="token punctuation">.</span>js <span class="token operator">>=</span> <span class="token number">60</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res <span class="token operator">?</span> <span class="token string">"学生全部及格"</span> <span class="token operator">:</span> <span class="token string">"有学生未及格"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// let arr = ['hdcms', 'houdunren'];</span>
    <span class="token comment">// let arr.every((item, index, arr) => {</span>
    <span class="token comment">//     console.log(arr);</span>
    <span class="token comment">//     return true;</span>
    <span class="token comment">// })</span>

    <span class="token comment">// some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。</span>
    <span class="token comment">// some() 方法会依次执行数组的每个元素：</span>
    <span class="token comment">// 如果有一个元素满足条件，则表达式返回true, 剩余的元素不会再执行检测。</span>
    <span class="token comment">// 如果没有满足条件的元素，则返回false。</span>
    <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"hdcms"</span><span class="token punctuation">,</span> <span class="token string">"houdunren"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> res1 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> filter</h3>
<p>filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。</p>
<ul>
<li>filter() 不会对空数组进行检测。</li>
<li>filter() 不会改变原始数组。</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// let arr = ['php', 'js'];</span>
<span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"lisi"</span><span class="token punctuation">,</span> <span class="token literal-property property">js</span><span class="token operator">:</span> <span class="token number">89</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"zhangsan"</span><span class="token punctuation">,</span> <span class="token literal-property property">js</span><span class="token operator">:</span> <span class="token number">99</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"wangwu"</span><span class="token punctuation">,</span> <span class="token literal-property property">js</span><span class="token operator">:</span> <span class="token number">80</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"zhaoliu"</span><span class="token punctuation">,</span> <span class="token literal-property property">js</span><span class="token operator">:</span> <span class="token number">92</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"tianqi"</span><span class="token punctuation">,</span> <span class="token literal-property property">js</span><span class="token operator">:</span> <span class="token number">95</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> newuser <span class="token operator">=</span> user<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> value<span class="token punctuation">.</span>js <span class="token operator">>=</span> <span class="token number">90</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span>newuser<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>过滤函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> newarr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> value <span class="token keyword">of</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">callback</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      newarr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newarr<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> newarr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">filter</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> value <span class="token operator">></span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="map-映射数组与引用类型处理技巧" tabindex="-1"><a class="header-anchor" href="#map-映射数组与引用类型处理技巧" aria-hidden="true">#</a> map 映射数组与引用类型处理技巧</h3>
<h5 id="map-方法返回一个新数组-数组中的元素为原始数组元素调用函数处理后的值。" tabindex="-1"><a class="header-anchor" href="#map-方法返回一个新数组-数组中的元素为原始数组元素调用函数处理后的值。" aria-hidden="true">#</a> map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。</h5>
<h5 id="map-方法按照原始数组元素顺序依次处理元素。" tabindex="-1"><a class="header-anchor" href="#map-方法按照原始数组元素顺序依次处理元素。" aria-hidden="true">#</a> map() 方法按照原始数组元素顺序依次处理元素。</h5>
<h5 id="注意-map-不会对空数组进行检测。" tabindex="-1"><a class="header-anchor" href="#注意-map-不会对空数组进行检测。" aria-hidden="true">#</a> <strong>注意：</strong> map() 不会对空数组进行检测。</h5>
<h5 id="注意-map-不会改变原始数组。" tabindex="-1"><a class="header-anchor" href="#注意-map-不会改变原始数组。" aria-hidden="true">#</a> <strong>注意：</strong> map() 不会改变原始数组。</h5>
<h5 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>array<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">currentValue<span class="token punctuation">,</span>index<span class="token punctuation">,</span>arr</span><span class="token punctuation">)</span><span class="token punctuation">,</span> thisValue<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明" aria-hidden="true">#</a> 参数说明</h5>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><em>function(currentValue, index,arr)</em></td>
<td style="text-align:left">必须。函数，数组中的每个元素都会执行这个函数 函数参数: 参数描述<em>currentValue</em>必须。当前元素的值<em>index</em>可选。当前元素的索引值<em>arr</em>可选。当前元素属于的数组对象</td>
</tr>
<tr>
<td style="text-align:left"><em>thisValue</em></td>
<td style="text-align:left">可选。对象作为该执行回调时使用，传递给函数，用作 &quot;this&quot; 的值。 如果省略了 thisValue，或者传入 null、undefined，那么回调函数的 this 为全局对象。</td>
</tr>
</tbody>
</table>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// map</span>
<span class="token comment">// map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。</span>
<span class="token comment">// map() 方法按照原始数组元素顺序依次处理元素。</span>
<span class="token comment">// 注意： map() 不会对空数组进行检测。</span>
<span class="token comment">// 注意： map() 不会改变原始数组。</span>

<span class="token keyword">let</span> lessons <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"flex"</span><span class="token punctuation">,</span> <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">"css"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"grid"</span><span class="token punctuation">,</span> <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">"css"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"盒子"</span><span class="token punctuation">,</span> <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">"css"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> lessons_click <span class="token operator">=</span> lessons<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> value<span class="token punctuation">.</span>title<span class="token punctuation">,</span>
    <span class="token literal-property property">category</span><span class="token operator">:</span> value<span class="token punctuation">.</span>category<span class="token punctuation">,</span>
    <span class="token literal-property property">click</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>lessons<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>lessons_click<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"hdms"</span><span class="token punctuation">,</span> <span class="token string">"houdunren"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> hd <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  value <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">后盾人-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"-----------------------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>hd<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="reduce" tabindex="-1"><a class="header-anchor" href="#reduce" aria-hidden="true">#</a> reduce</h3>
<ul>
<li>
<p>reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。</p>
</li>
<li>
<p>reduce() 可以作为一个高阶函数，用于函数的 compose。</p>
</li>
<li>
<p><strong>注意:</strong> reduce() 对于空数组是不会执行回调函数的。</p>
</li>
</ul>
<h5 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1" aria-hidden="true">#</a> 语法</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>array<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">total<span class="token punctuation">,</span> currentValue<span class="token punctuation">,</span> currentIndex<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span><span class="token punctuation">,</span> initialValue<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h4>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><em>function(total,currentValue, index,arr)</em></td>
<td style="text-align:left">必需。用于执行每个数组元素的函数。 函数参数:参数描述<em>total</em>必需。<em>初始值</em>, 或者计算结束后的返回值。<em>currentValue</em>必需。当前元素<em>currentIndex</em>可选。当前元素的索引<em>arr</em>可选。当前元素所属的数组对象。</td>
</tr>
<tr>
<td style="text-align:left"><em>initialValue</em></td>
<td style="text-align:left">可选。传递给函数的初始值</td>
</tr>
</tbody>
</table>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// let arr=[1,2,3,4,5,6];</span>
<span class="token comment">// arr.reduce((pre,value,index,arr)=>{</span>
<span class="token comment">//     console.log(pre,value);</span>
<span class="token comment">//     return 99;</span>
<span class="token comment">// });</span>
<span class="token comment">// // console.log('-------------------');</span>
<span class="token comment">// arr.reduce((pre,value,index,arr)=>{</span>
<span class="token comment">//     console.warn(pre,value);</span>
<span class="token comment">//     return 99;</span>
<span class="token comment">// },0)</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">arrayCount</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> array<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">total<span class="token punctuation">,</span> cur</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    total <span class="token operator">+=</span> item <span class="token operator">==</span> cur <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    total <span class="token operator">=</span> total <span class="token operator">+</span> <span class="token punctuation">(</span>item <span class="token operator">==</span> cur <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> total<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">arrayCount</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">arrayMax</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> array<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">pre<span class="token punctuation">,</span> cur</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> pre <span class="token operator">></span> cur <span class="token operator">?</span> pre <span class="token operator">:</span> cur<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">arrayMax</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="样例-字体效果" tabindex="-1"><a class="header-anchor" href="#样例-字体效果" aria-hidden="true">#</a> 样例:字体效果</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
      <span class="token selector">*</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #34495e<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">div</span> <span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 4em<span class="token punctuation">;</span>
        <span class="token property">text-transform</span><span class="token punctuation">:</span> uppercase<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> #9b59b6<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">div > span</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
        <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.color</span> <span class="token punctuation">{</span>
        <span class="token property">animation-name</span><span class="token punctuation">:</span> color<span class="token punctuation">;</span>
        <span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
        <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
        <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
        <span class="token property">animation-direction</span><span class="token punctuation">:</span> alternate<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token atrule"><span class="token rule">@keyframes</span> color</span> <span class="token punctuation">{</span>
        <span class="token selector">50%</span> <span class="token punctuation">{</span>
          <span class="token property">color</span><span class="token punctuation">:</span> #f1c40f<span class="token punctuation">;</span>
          <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">100%</span> <span class="token punctuation">{</span>
          <span class="token property">color</span><span class="token punctuation">:</span> #e74c3c<span class="token punctuation">;</span>
          <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>lyh.wslyh<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">const</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">...</span>div<span class="token punctuation">.</span>textContent<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">[</span><span class="token operator">...</span>div<span class="token punctuation">.</span>textContent<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">pre<span class="token punctuation">,</span> cur<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>pre<span class="token punctuation">,</span> cur<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        pre <span class="token operator">==</span> index <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>div<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> span <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"span"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        span<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> cur<span class="token punctuation">;</span>
        div<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>span<span class="token punctuation">)</span><span class="token punctuation">;</span>
        span<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"mouseover"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"color"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        span<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"animationend"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">"color"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
