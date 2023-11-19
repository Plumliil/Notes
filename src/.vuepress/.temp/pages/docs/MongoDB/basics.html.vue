<template><div><h1 id="基础篇" tabindex="-1"><a class="header-anchor" href="#基础篇" aria-hidden="true">#</a> 基础篇</h1>
<h2 id="环境搭建" tabindex="-1"><a class="header-anchor" href="#环境搭建" aria-hidden="true">#</a> 环境搭建</h2>
<p>在一个数据库软件中可以包含多个数据仓库，每个数据仓库可以包含多个数据集合，每个数据集合可以包含多条具体数据</p>
<table>
<thead>
<tr>
<th style="text-align:center">术语</th>
<th style="text-align:center">解释说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">database</td>
<td style="text-align:center">数据库，mongoDB数据库软件可以建立多个数据库</td>
</tr>
<tr>
<td style="text-align:center">collection</td>
<td style="text-align:center">集合，一组数据的集合，可以理解为javascript中的数组</td>
</tr>
<tr>
<td style="text-align:center">document</td>
<td style="text-align:center">文档，一条具体的数据，可以理解为javascript中的对象</td>
</tr>
<tr>
<td style="text-align:center">field</td>
<td style="text-align:center">字段，文档中的属性名称，可以理解为javascript中的对象属性</td>
</tr>
</tbody>
</table>
<h2 id="基本指令" tabindex="-1"><a class="header-anchor" href="#基本指令" aria-hidden="true">#</a> 基本指令</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>show dbs
show database
// 显示当前所有数据库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>use 数据库名 // 进入到指定的数据库中
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>db // 显示当前数据库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>show collections // 显示数据库中所有集合
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="数据库crud操作" tabindex="-1"><a class="header-anchor" href="#数据库crud操作" aria-hidden="true">#</a> 数据库CRUD操作</h2>
<p>-向数据库中插入文档</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>插入文档
db.collection<span class="token punctuation">..</span>insert<span class="token punctuation">(</span>doc<span class="token punctuation">)</span>
    -向集合中插入文档
    -例如，向test数据库中的stus集合中插入一个新的学生对象
        <span class="token punctuation">{</span>name:<span class="token string">"小明"</span>,age:18,gender:<span class="token string">"男"</span><span class="token punctuation">}</span>
        db.test.insert<span class="token punctuation">(</span><span class="token punctuation">{</span>name:<span class="token string">"小明"</span>,age:18,gender:<span class="token string">"男"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
        当插入文档时，如果没有指定id则数据库会为文档自动添加id，该属性用来作为文档唯一表示
        id值可以自己指定，数据库不会自动添加，但必须确保id的唯一性
db.collection.insertOne<span class="token punctuation">(</span><span class="token punctuation">)</span> // 插入一个
db.collection<span class="token punctuation">..</span>insertMany<span class="token punctuation">(</span><span class="token punctuation">)</span> // 插入多个
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>查询文档
db.collection<span class="token punctuation">..</span>find<span class="token punctuation">(</span><span class="token punctuation">)</span> // 返回数组
    find<span class="token punctuation">(</span><span class="token punctuation">)</span>查询集合中符合条件的文档
    find<span class="token punctuation">(</span><span class="token punctuation">)</span>可以接收一个对象作为条件参数
    find<span class="token punctuation">(</span><span class="token punctuation">)</span>.count<span class="token punctuation">(</span><span class="token punctuation">)</span>查询文档数量
        <span class="token punctuation">{</span><span class="token punctuation">}</span>查询集合中所有文档
        <span class="token punctuation">{</span>_id:<span class="token string">"hello"</span><span class="token punctuation">}</span>查询id为hello的文档
db.collection<span class="token punctuation">..</span>findOne // 返回对象 后可接属性
    findOne<span class="token punctuation">(</span><span class="token punctuation">)</span>查询集合中符合条件的第一个文档
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>修改文档
db.collection.update<span class="token punctuation">(</span>查询条件，新对象<span class="token punctuation">)</span>
    updata<span class="token punctuation">(</span><span class="token punctuation">)</span>默认使用新对象替换旧对象
    如果需要修改指定属性而不是替换，需要使用修改操作符来修改
    <span class="token variable">$set</span> 可以用来修改某一属性
    <span class="token variable">$unset</span> 删除某一属性
db.test.update<span class="token punctuation">(</span>
    <span class="token punctuation">{</span><span class="token string">"_id"</span>:ObjectId<span class="token punctuation">(</span><span class="token string">"611cb3b14424dff2c9c6e884"</span><span class="token punctuation">)</span><span class="token punctuation">}</span>,
    <span class="token punctuation">{</span><span class="token variable">$set</span>:<span class="token punctuation">{</span>
    name:<span class="token string">"qianba"</span>
        <span class="token punctuation">}</span>,
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
db.collection.updataOne<span class="token punctuation">(</span><span class="token punctuation">)</span>
db.collection.updataMany<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>删除
db.collection.remove<span class="token punctuation">(</span><span class="token punctuation">)</span> // 删除一个或多个，默认删除多个
db.collection.remove<span class="token punctuation">(</span><span class="token punctuation">{</span>xxx<span class="token punctuation">}</span>,true<span class="token punctuation">)</span> // 删除一个
db.collection.remove<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> // 清空集合，一个一个删
db.collection.removeOne<span class="token punctuation">(</span><span class="token punctuation">)</span> // 删除一个
db.collection.removeMany<span class="token punctuation">(</span><span class="token punctuation">)</span> // 删除多个

db.collection.drop<span class="token punctuation">(</span><span class="token punctuation">)</span> // 删除集合
db.dropDatabase<span class="token punctuation">(</span><span class="token punctuation">)</span> // 删除数据库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="增删改查" tabindex="-1"><a class="header-anchor" href="#增删改查" aria-hidden="true">#</a> 增删改查</h2>
<h3 id="创建集合" tabindex="-1"><a class="header-anchor" href="#创建集合" aria-hidden="true">#</a> 创建集合</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>创建集合分为两步，一是对集合设定规则，二是创建集合，创建mongoose.Schema构造函数的实例即可创建集合
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//设定集和规则</span>
<span class="token keyword">const</span> courseSchema<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">mongoose<span class="token punctuation">.</span>Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span>String<span class="token punctuation">,</span>
    <span class="token literal-property property">author</span><span class="token operator">:</span>String<span class="token punctuation">,</span>
    <span class="token literal-property property">isPublished</span><span class="token operator">:</span>Boolean
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//创建集合并应用规则</span>
<span class="token keyword">const</span> Course<span class="token operator">=</span>mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">'Course'</span><span class="token punctuation">,</span>courseSchema<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建文档" tabindex="-1"><a class="header-anchor" href="#创建文档" aria-hidden="true">#</a> 创建文档</h3>
<p>创建文档实际上就是相机和中插入数据</p>
<p>分为两步</p>
<ol>
<li>
<p>创建集合实例</p>
</li>
<li>
<p>调用实例对象下的save方法将数据保存到数据库中</p>
<p>创建集合实例</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//创建集合并应用规则</span>
<span class="token keyword">const</span> Course<span class="token operator">=</span>mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">'Course'</span><span class="token punctuation">,</span>courseSchema<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> course<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'node.js基础'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">author</span><span class="token operator">:</span><span class="token string">'黑马'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isPublished</span><span class="token operator">:</span><span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 向集合中插入文档</span>
course<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>create方法：返回promise对象（异步）支持异步函数语法</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//创建集合并应用规则</span>
<span class="token keyword">const</span> Course<span class="token operator">=</span>mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">'Course'</span><span class="token punctuation">,</span>courseSchema<span class="token punctuation">)</span><span class="token punctuation">;</span>

Course<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'English'</span><span class="token punctuation">,</span><span class="token literal-property property">author</span><span class="token operator">:</span><span class="token string">'hason'</span><span class="token punctuation">,</span><span class="token literal-property property">isPublished</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>result</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token comment">// 错误对象</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 当前插入的文档</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 异步 Promise</span>
Course<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'化学'</span><span class="token punctuation">,</span><span class="token literal-property property">author</span><span class="token operator">:</span><span class="token string">'赵六'</span><span class="token punctuation">,</span><span class="token literal-property property">isPublished</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mongodb数据库导入数据" tabindex="-1"><a class="header-anchor" href="#mongodb数据库导入数据" aria-hidden="true">#</a> mongoDB数据库导入数据</h2>
<p>mongoimport -d 数据库名称 -c 集合名称 -file 要导入的文件</p>
</li>
</ol>
<h2 id="数据库中查询文档" tabindex="-1"><a class="header-anchor" href="#数据库中查询文档" aria-hidden="true">#</a> 数据库中查询文档</h2>
<h3 id="find" tabindex="-1"><a class="header-anchor" href="#find" aria-hidden="true">#</a> find</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 查询文档</span>
<span class="token comment">//设定集和规则</span>
<span class="token keyword">const</span> courseSchema<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">mongoose<span class="token punctuation">.</span>Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span>String<span class="token punctuation">,</span>
    <span class="token literal-property property">author</span><span class="token operator">:</span>String<span class="token punctuation">,</span>
    <span class="token literal-property property">isPublished</span><span class="token operator">:</span>Boolean
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 应用规则</span>
<span class="token keyword">const</span> Course<span class="token operator">=</span>mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">'Course'</span><span class="token punctuation">,</span>CourseSchema<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//  查询用户集合中所有文档</span>
<span class="token comment">//  Course.find({_id:'60a46a43ea1a6c3838655fdf'}).then(result=>console.log(result);})</span>
<span class="token comment">//  通过下划线_id字段来查找文档</span>
 Course<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">_id</span><span class="token operator">:</span><span class="token string">'60a46a43ea1a6c3838655fdf'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token operator">=></span><span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token operator">=></span><span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="findone" tabindex="-1"><a class="header-anchor" href="#findone" aria-hidden="true">#</a> findOne</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 返回一条文档，默认返回集合中的第一条文档</span>
<span class="token comment">// Course.findOne({name:'李四'}).then(result=>{console.log(result);})</span>
Course<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'李四'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="匹配大于小于-gt-lt" tabindex="-1"><a class="header-anchor" href="#匹配大于小于-gt-lt" aria-hidden="true">#</a> 匹配大于小于 $gt  $lt</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 大于小于 $gt 大于 $lt小于</span>
<span class="token comment">// User.findOne({age:{$gt:17,$lt:20}}).then(result=>{console.log(result);})</span>
User<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">$gt</span><span class="token operator">:</span><span class="token number">17</span><span class="token punctuation">,</span><span class="token literal-property property">$lt</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="匹配包含-in-做网站搜索-做搜索关键字-在文档里查询" tabindex="-1"><a class="header-anchor" href="#匹配包含-in-做网站搜索-做搜索关键字-在文档里查询" aria-hidden="true">#</a> 匹配包含 $in  （做网站搜索，做搜索关键字，在文档里查询）</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//包含</span>
<span class="token comment">//User.find({hobbies:{$in:[敲代码]}}).then(result=>{console.log(result);})</span>
User<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">hobbies</span><span class="token operator">:</span><span class="token punctuation">{</span>$<span class="token keyword">in</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'踢球'</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token operator">=></span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选择要查询字段-后边表示不想查询的字段-查询字段" tabindex="-1"><a class="header-anchor" href="#选择要查询字段-后边表示不想查询的字段-查询字段" aria-hidden="true">#</a> 选择要查询字段 -后边表示不想查询的字段   （查询字段）</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>User<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string">'name age -_id'</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token operator">=></span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="将数据按照年龄排序-降序用-将数据排序" tabindex="-1"><a class="header-anchor" href="#将数据按照年龄排序-降序用-将数据排序" aria-hidden="true">#</a> 将数据按照年龄排序 降序用-  （将数据排序）</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>User<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token string">'age'</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token operator">=></span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>跳过数据，限制查询数量   （网站分页）</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>User<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">skip</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token operator">=></span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除文档" tabindex="-1"><a class="header-anchor" href="#删除文档" aria-hidden="true">#</a> 删除文档</h2>
<h3 id="删除单个" tabindex="-1"><a class="header-anchor" href="#删除单个" aria-hidden="true">#</a> 删除单个</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 查找到一条文档并删除</span>
<span class="token comment">// 返回删除的文档</span>
<span class="token comment">// 如果查询匹配到多个文档 那么将会删除第一个文档</span>
User<span class="token punctuation">.</span><span class="token function">findOneAndDelete</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">_id</span><span class="token operator">:</span><span class="token string">'60a4cc4fce929341005a2a9c'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token operator">=></span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除多个文档" tabindex="-1"><a class="header-anchor" href="#删除多个文档" aria-hidden="true">#</a> 删除多个文档</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 删除多个文档</span>
<span class="token comment">// 返回值{ n: 6, ok: 1, deletedCount: 6 } n：代表删除了几条数据 ok：代表删除成功</span>
User<span class="token punctuation">.</span><span class="token function">deleteMany</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token operator">=></span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新文档" tabindex="-1"><a class="header-anchor" href="#更新文档" aria-hidden="true">#</a> 更新文档</h2>
<h3 id="更新单个" tabindex="-1"><a class="header-anchor" href="#更新单个" aria-hidden="true">#</a> 更新单个</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// User.updateOne({查询条件},{要更改的值}).then(result=>{console.log(result);})</span>
<span class="token comment">// 返回值 { n: 1, nModified: 1, ok: 1 } n：代表更新几条数据 ok：代表更新成功</span>
User<span class="token punctuation">.</span><span class="token function">updateOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'王二'</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'张三'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token operator">=></span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新多个" tabindex="-1"><a class="header-anchor" href="#更新多个" aria-hidden="true">#</a> 更新多个</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 更新集合中多个文档</span>
User<span class="token punctuation">.</span><span class="token function">updateMany</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">27</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mongoose验证" tabindex="-1"><a class="header-anchor" href="#mongoose验证" aria-hidden="true">#</a> mongoose验证</h2>
<p>在创建集合规则时，可以设置当前字段的验证规则，验证失败则输入验证失败</p>
<p>自定义错误信息</p>
<ul>
<li>require：true 必传字段</li>
<li>minlength：3字符串最小长度</li>
<li>maxlength：3字符串最大长度</li>
<li>min：2数值最小为2</li>
<li>max：100数值最大为100</li>
<li>enum：['html','css','javascript','node.js']</li>
<li>trim：true 自动去除字符串两边的空格</li>
<li>validate：自定义验证器</li>
<li>default：默认值</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> mongoose <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'mongoose'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

mongoose<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string">'mongodb://localhost/playground'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">useNewUrlParser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">useUnifiedTopology</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'连接数据库成功'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token string">'连接数据库失败'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> postSchema <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mongoose<span class="token punctuation">.</span>Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
        <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">'请传入文章标题'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">minlength</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'文章长度不能小于2'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">maxlength</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token string">'文章长度不能大于5'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
        <span class="token literal-property property">minlength</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
        <span class="token literal-property property">maxlength</span><span class="token operator">:</span> <span class="token number">100</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">publishData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> Date<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> Date<span class="token punctuation">.</span>now
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
        <span class="token keyword">enum</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">values</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'html'</span><span class="token punctuation">,</span> <span class="token string">'css'</span><span class="token punctuation">,</span> <span class="token string">'javascript'</span><span class="token punctuation">,</span> <span class="token string">'node.js'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">message</span><span class="token operator">:</span><span class="token string">'分类要在一定的范围内'</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">author</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
        <span class="token literal-property property">validate</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token comment">// 返回布尔值</span>
                <span class="token comment">// true 成功</span>
                <span class="token comment">// false 失败</span>
                <span class="token comment">// v 要验证的值</span>
                <span class="token keyword">return</span> v <span class="token operator">&amp;&amp;</span> v<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">4</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// 自定义错误信息</span>
            <span class="token literal-property property">message</span><span class="token operator">:</span><span class="token string">'传入的值不符合规则'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Post <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">'Post'</span><span class="token punctuation">,</span> postSchema<span class="token punctuation">)</span><span class="token punctuation">;</span>

Post<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'aaaaa'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">'C#'</span><span class="token punctuation">,</span><span class="token literal-property property">author</span><span class="token operator">:</span><span class="token string">'a'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token comment">// 获取错误信息对象</span>
    <span class="token keyword">const</span> err<span class="token operator">=</span>error<span class="token punctuation">.</span>errors<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> attr <span class="token keyword">in</span> err<span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">[</span>attr<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">'message'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="集合关联" tabindex="-1"><a class="header-anchor" href="#集合关联" aria-hidden="true">#</a> 集合关联</h2>
<p>通常不同集合的数据之间是有关系的，例如文章信息和用户信息储存在不同的集合中，但文章是某个用户发表的，要查询的文章的所有信息包括发表用户，就需要用到集合关联</p>
<ul>
<li>
<p>使用id对集合进行关联</p>
</li>
<li>
<p>使用方法进行关联集合查询</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 需求：将文章与作者关联</span>

<span class="token keyword">const</span> mongoose <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'mongoose'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

mongoose<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string">'mongodb://localhost/playground'</span><span class="token punctuation">,</span><span class="token punctuation">{</span> <span class="token literal-property property">useNewUrlParser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token literal-property property">useUnifiedTopology</span><span class="token operator">:</span><span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'数据库连接成功'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span><span class="token string">'数据库连接失败'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 用户集合规则</span>
<span class="token keyword">const</span> userSchema <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mongoose<span class="token punctuation">.</span>Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
        <span class="token literal-property property">require</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 文章集合规则</span>
<span class="token keyword">const</span> postSchema <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mongoose<span class="token punctuation">.</span>Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> String
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">author</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token comment">// 存储下划线id地址</span>
        <span class="token comment">// id具有特殊的类型</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span>mongoose<span class="token punctuation">.</span>Schema<span class="token punctuation">.</span>Types<span class="token punctuation">.</span>ObjectId<span class="token punctuation">,</span>
        <span class="token literal-property property">ref</span><span class="token operator">:</span><span class="token string">'User'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> User <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">'User'</span><span class="token punctuation">,</span> userSchema<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Post <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">'Post'</span><span class="token punctuation">,</span> postSchema<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//创建用户</span>
 User<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'一个用户'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
     <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token operator">=></span><span class="token punctuation">{</span>
         console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 创建文章</span>
 Post<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">'123'</span><span class="token punctuation">,</span><span class="token literal-property property">author</span><span class="token operator">:</span><span class="token string">'60a52939d0dc740f009c0e0f'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
     <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token operator">=></span><span class="token punctuation">{</span>
         console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 查询</span>
Post<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">populate</span><span class="token punctuation">(</span><span class="token string">'author'</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例-用户信息增删改查" tabindex="-1"><a class="header-anchor" href="#案例-用户信息增删改查" aria-hidden="true">#</a> 案例：用户信息增删改查</h2>
<p>1.搭建网站服务器，实现客户端与服务器端的通信
2.连接数据库， 创建用户集合，向集合中插入文档
3.当用户访问/list时,将所有用户信息查询出来
4.将用户信息和表格HTML进行拼接并将拼接结果响应回客户端
5.当用户访问/add时， 呈现表郸面，并实现添加用户信息功能
6.当用户访问/modify时， 呈现修改页面，并实现修改用户信息功能
7.当用户访问/delete时, 实现用户删除功能</p>
</li>
</ul>
<h2 id="第三方模块-router" tabindex="-1"><a class="header-anchor" href="#第三方模块-router" aria-hidden="true">#</a> 第三方模块 router</h2>
<p>功能：实现路由</p>
<p>使用步骤：</p>
<ol>
<li>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>获取路由对象
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>调用路由对象提供的方法创建路由
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>启用路由，使路由生效
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> getRouter<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'router'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> router<span class="token operator">=</span><span class="token function">getRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/add'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
	res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">'hello world'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
sever<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'request'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token function">router</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第三方模块server-static" tabindex="-1"><a class="header-anchor" href="#第三方模块server-static" aria-hidden="true">#</a> 第三方模块server-static</h2>
<p>功能：实现静态资源访问服务</p>
<p>步骤：</p>
<ol>
<li>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>引入server-static模块获取创建静态资源服务功能的方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>调用方法创建静态资源并指定静态资源服务目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>启用静态资源服务功能
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> serverStatic<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'server-static'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> serve<span class="token operator">=</span><span class="token function">serveStatic</span><span class="token punctuation">(</span><span class="token string">'public'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sever<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'request'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token function">server</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
sever<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


