<template><div><h1 id="基础篇" tabindex="-1"><a class="header-anchor" href="#基础篇" aria-hidden="true">#</a> 基础篇</h1>
<h2 id="库-表-数据三者关系" tabindex="-1"><a class="header-anchor" href="#库-表-数据三者关系" aria-hidden="true">#</a> 库,表,数据三者关系</h2>
<h3 id="什么是库" tabindex="-1"><a class="header-anchor" href="#什么是库" aria-hidden="true">#</a> 什么是库</h3>
<p>库是用来存放 n 张表</p>
<h3 id="什么是表" tabindex="-1"><a class="header-anchor" href="#什么是表" aria-hidden="true">#</a> 什么是表</h3>
<p>表可以存放数据,由字段,数据类型(字符串 varchar,整数 int bigint,小数 float,日期 Date 等)组成</p>
<h3 id="什么是数据" tabindex="-1"><a class="header-anchor" href="#什么是数据" aria-hidden="true">#</a> 什么是数据</h3>
<p>表中的信息:文本,视频,图片,音频等</p>
<h2 id="数据类型-库-表操作" tabindex="-1"><a class="header-anchor" href="#数据类型-库-表操作" aria-hidden="true">#</a> 数据类型,库,表操作</h2>
<h3 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h3>
<ul>
<li>常见数据类型: varchar(n),float,int(n),bigint(n),date,datetime,text</li>
<li>默认值: Default <code v-pre>默认值</code></li>
<li>非空: NOT NULL</li>
<li>自动增长: AUTO_INCREMENT,尽量作用在 int 类型字段上</li>
<li>主键: PRIMARY KEY 不能够重复,一张表只有一个字段可以作为主键,供操作数据使用</li>
<li>唯一键:UNIQUE</li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> students <span class="token punctuation">(</span>
	id <span class="token keyword">BIGINT</span> <span class="token punctuation">(</span> <span class="token number">20</span> <span class="token punctuation">)</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">COMMENT</span> <span class="token string">'ID'</span><span class="token punctuation">,</span>
	stu_name <span class="token keyword">VARCHAR</span> <span class="token punctuation">(</span> <span class="token number">40</span> <span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'学生姓名'</span><span class="token punctuation">,</span>
  gender <span class="token keyword">VARCHAR</span> <span class="token punctuation">(</span> <span class="token number">2</span> <span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token string">'男'</span> <span class="token keyword">COMMENT</span> <span class="token string">'性别'</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建库" tabindex="-1"><a class="header-anchor" href="#创建库" aria-hidden="true">#</a> 创建库</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">--  普通创建库</span>
<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> 库名<span class="token punctuation">;</span>
<span class="token comment">-- 指定编码创建库</span>
<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> 库名 <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> 编码名<span class="token punctuation">(</span>utf8等<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除库" tabindex="-1"><a class="header-anchor" href="#删除库" aria-hidden="true">#</a> 删除库</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">DATABASE</span> 库名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建表" tabindex="-1"><a class="header-anchor" href="#创建表" aria-hidden="true">#</a> 创建表</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- CREATE TABLE 表名 (</span>
<span class="token comment">-- 字段 1 数据类型,</span>
<span class="token comment">-- 字段 2 数据类型,</span>
<span class="token comment">-- 字段 3 数据类型,</span>
<span class="token comment">-- 字段 4 数据类型,</span>
<span class="token comment">-- ...</span>
<span class="token comment">-- )</span>
<span class="token keyword">USE</span> 库名<span class="token punctuation">;</span> <span class="token comment">-- 在哪个数据库下</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> grade<span class="token punctuation">(</span>
	name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	class <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  score <span class="token keyword">FLOAT</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除表" tabindex="-1"><a class="header-anchor" href="#删除表" aria-hidden="true">#</a> 删除表</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> 表名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="数据的增删改查" tabindex="-1"><a class="header-anchor" href="#数据的增删改查" aria-hidden="true">#</a> 数据的增删改查</h2>
<h3 id="增" tabindex="-1"><a class="header-anchor" href="#增" aria-hidden="true">#</a> 增</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- INSERT INTO 表名(字段1,字段2...) VALUES(值1,值2...)</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>grade<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>name<span class="token punctuation">,</span>class<span class="token punctuation">,</span>score<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token string">'张三'</span><span class="token punctuation">,</span><span class="token string">'三年一班'</span><span class="token punctuation">,</span><span class="token number">89</span><span class="token punctuation">)</span> <span class="token comment">-- 插入一条</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>grade<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>name<span class="token punctuation">,</span>class<span class="token punctuation">,</span>score<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token string">'张三'</span><span class="token punctuation">,</span><span class="token string">'三年一班'</span><span class="token punctuation">,</span><span class="token number">89</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">'李四'</span><span class="token punctuation">,</span><span class="token string">'三年一班'</span><span class="token punctuation">,</span><span class="token number">78</span><span class="token punctuation">)</span> <span class="token comment">-- 插入多条</span>
<span class="token comment">-- INSERT INTO 表名 SET 字段名1=字段值1,字段名2=字段值2...</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>grade<span class="token punctuation">`</span></span> <span class="token keyword">SET</span> name<span class="token operator">=</span><span class="token string">'李四'</span><span class="token punctuation">,</span>class<span class="token operator">=</span><span class="token string">'三年一班'</span><span class="token punctuation">,</span>score<span class="token operator">=</span><span class="token number">87</span>
<span class="token comment">-- INSERT INTO 表名 VALUES(值1,值2,值3) 省略字段前提是插入全部值</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>grade<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token string">'王五'</span><span class="token punctuation">,</span><span class="token string">'三年一班'</span><span class="token punctuation">,</span><span class="token number">76</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是字段名和字段值需一一对应</p>
<h3 id="删" tabindex="-1"><a class="header-anchor" href="#删" aria-hidden="true">#</a> 删</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- DELETE FROM 表名 WHERE 条件</span>
<span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">`</span>grade<span class="token punctuation">`</span></span> <span class="token keyword">WHERE</span> name<span class="token operator">=</span><span class="token string">'李四'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="改" tabindex="-1"><a class="header-anchor" href="#改" aria-hidden="true">#</a> 改</h3>
<p>算术运算符</p>
<ul>
<li>+</li>
<li>-</li>
<li>*</li>
<li>/</li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- UPDATE 表名 SET 字段名1=字段值1,字段名2=字段值2... WHERE 条件</span>
<span class="token keyword">UPDATE</span> <span class="token identifier"><span class="token punctuation">`</span>grade<span class="token punctuation">`</span></span> <span class="token keyword">SET</span> class<span class="token operator">=</span><span class="token string">'三年二班'</span> <span class="token keyword">WHERE</span> name<span class="token operator">=</span><span class="token string">'张三'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="表的重命名" tabindex="-1"><a class="header-anchor" href="#表的重命名" aria-hidden="true">#</a> 表的重命名</h4>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- RENAME TABLE 旧表名 TO 新表名;</span>
<span class="token keyword">RENAME</span> <span class="token keyword">TABLE</span> grade <span class="token keyword">TO</span> student_info<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="更新表字段" tabindex="-1"><a class="header-anchor" href="#更新表字段" aria-hidden="true">#</a> 更新表字段</h4>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 新增表字段</span>
<span class="token comment">-- ALTER TABLE 表名 ADD 字段名 数据类型</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> student_info <span class="token keyword">ADD</span> gender <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment">-- 删除表字段</span>
<span class="token comment">-- ALTER TABLE 表名 DROP 字段名</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> student_info <span class="token keyword">DROP</span> gender
<span class="token comment">-- 字段重命名</span>
<span class="token comment">-- ALTER TABLE 表名 CHANGE 旧字段名 新字段名 新字段名数据类型</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> student_info CHANGE name sname <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span>
<span class="token comment">-- 修改字段类型 改长短</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> student_info CHANGE name name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span>
<span class="token comment">-- 添加日期字段 date 只有年月日 datetime 有年月日时分秒</span>
<span class="token comment">-- ALTER TABLE 表名 ADD 日期字段名 DATE;</span>
<span class="token keyword">UPDATE</span> student_info <span class="token keyword">SET</span> birthday<span class="token operator">=</span><span class="token string">'2001-01-01'</span> <span class="token keyword">WHERE</span> sname<span class="token operator">=</span><span class="token string">'李四'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查" tabindex="-1"><a class="header-anchor" href="#查" aria-hidden="true">#</a> 查</h3>
<h4 id="关系运算符" tabindex="-1"><a class="header-anchor" href="#关系运算符" aria-hidden="true">#</a> 关系运算符</h4>
<ul>
<li>=</li>
<li>&gt;</li>
<li>&gt;=</li>
<li>&lt;</li>
<li>&lt;=</li>
<li>!=
关系运算符需放在<code v-pre>WHERE</code>关键字后</li>
</ul>
<h4 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符" aria-hidden="true">#</a> 逻辑运算符</h4>
<ul>
<li>AND 与</li>
<li>OR 或</li>
<li>NOT 非</li>
</ul>
<h4 id="查询数据" tabindex="-1"><a class="header-anchor" href="#查询数据" aria-hidden="true">#</a> 查询数据</h4>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- SELECT 字段1,字段2... from 表名 [where 条件]</span>
<span class="token comment">-- 查询某张表内全部数据记录</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">`</span>grade<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token comment">-- 查询某一个字段</span>
<span class="token keyword">SELECT</span> name <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">`</span>grade<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token comment">-- 通过AS为查询到的数据起别名</span>
<span class="token keyword">SELECT</span> name <span class="token keyword">AS</span> uname <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">`</span>grade<span class="token punctuation">`</span></span> <span class="token keyword">WHERE</span> score<span class="token operator">>=</span><span class="token number">90</span>
<span class="token comment">-- 多条件查询</span>
<span class="token keyword">SELECT</span> name <span class="token keyword">AS</span> uname <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">`</span>grade<span class="token punctuation">`</span></span> <span class="token keyword">WHERE</span> score<span class="token operator">></span><span class="token number">90</span> <span class="token operator">AND</span> class<span class="token operator">=</span><span class="token string">'三年一班'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="排序" tabindex="-1"><a class="header-anchor" href="#排序" aria-hidden="true">#</a> 排序</h5>
<p>排序时字段可以是数值类型,也可以是 varchar 类型</p>
<p>如果字段是中文不能排序,如果是英文按照 a-z 排序</p>
<ul>
<li>升序 ASC</li>
<li>降序 DESC</li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 升序查成绩</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> students <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> grade <span class="token keyword">ASC</span>
<span class="token comment">-- 降序查成绩</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> students <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> grade <span class="token keyword">DESC</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="sql-语句分类" tabindex="-1"><a class="header-anchor" href="#sql-语句分类" aria-hidden="true">#</a> SQL 语句分类</h4>
<ul>
<li>查询语言 DQL database query language
<ul>
<li>对表的查询 SELECT</li>
</ul>
</li>
<li>定义语言 DDL database defined language
<ul>
<li>创建库 CREATE DATABSE</li>
<li>创建表 CREATE TABLE</li>
<li>删除表 DROP TABLE</li>
</ul>
</li>
<li>操作语言 DML database management language
<ul>
<li>插入 INSERT</li>
<li>更新 UPDATE</li>
<li>删除 DELETE</li>
</ul>
</li>
</ul>
<h4 id="查询库" tabindex="-1"><a class="header-anchor" href="#查询库" aria-hidden="true">#</a> 查询库</h4>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- SHOW CREATE DATABASE 库名; 查询指定库信息</span>
<span class="token keyword">SHOW</span> <span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> db0712<span class="token punctuation">;</span>
<span class="token comment">-- 查询当前mmysql下所有库信息</span>
<span class="token keyword">SHOW</span> <span class="token keyword">DATABASES</span><span class="token punctuation">;</span>
<span class="token comment">-- 查询当前用户连接的数据库</span>
<span class="token keyword">SELECT</span> <span class="token keyword">DATABASE</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查询表" tabindex="-1"><a class="header-anchor" href="#查询表" aria-hidden="true">#</a> 查询表</h4>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 查询当前库下表信息</span>
<span class="token comment">-- SHOW CREATE TABLE 表名;</span>
<span class="token keyword">SHOW</span> <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> grade<span class="token punctuation">;</span>
<span class="token comment">-- 查询表结构</span>
<span class="token comment">-- DESC TABLES;</span>
<span class="token keyword">DESC</span> grade<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<ul>
<li>创建库,创建表 : CREATE</li>
<li>删除库,删除表 : DROP</li>
<li>修改库,修改表表 : ALTER</li>
<li>查询库,查询表 : SHOW , SELECT</li>
<li>添加数据 : INSERT</li>
<li>修改数据 : UPDATE</li>
<li>查询数据 : SELECT</li>
<li>删除数据 : DELETE</li>
</ul>
<h2 id="数据库备份与还原" tabindex="-1"><a class="header-anchor" href="#数据库备份与还原" aria-hidden="true">#</a> 数据库备份与还原</h2>
<h4 id="通过命名备份-还原" tabindex="-1"><a class="header-anchor" href="#通过命名备份-还原" aria-hidden="true">#</a> 通过命名备份 还原</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 备份</span>
<span class="token comment"># mysqldump -uroot -p密码 需要备份的数据库>备份后sql脚本名</span>
mysqldump <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span> db071<span class="token operator"><span class="token file-descriptor important">2</span>></span>c:<span class="token punctuation">\</span>db0712_student_info.sql
<span class="token comment"># 还原</span>
<span class="token comment"># 进入环境 -> 创建一个库 -> 还原数据</span>
create database db0712
use database db0712
<span class="token builtin class-name">source</span> c:<span class="token punctuation">\</span>db0712_student_info.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="通过工具" tabindex="-1"><a class="header-anchor" href="#通过工具" aria-hidden="true">#</a> 通过工具</h4>
<p>以 navicate 为例</p>
<ul>
<li>右键库</li>
<li>选择转储 SQL 文件</li>
<li>根据需要选择结构和数据</li>
<li>运行 SQL 文件</li>
</ul>
<h2 id="高级-sql-查询" tabindex="-1"><a class="header-anchor" href="#高级-sql-查询" aria-hidden="true">#</a> 高级 SQL 查询</h2>
<h3 id="查询多条数据" tabindex="-1"><a class="header-anchor" href="#查询多条数据" aria-hidden="true">#</a> 查询多条数据</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 查询id为1,3的数据</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token identifier"><span class="token punctuation">`</span>book_info<span class="token punctuation">`</span></span> <span class="token keyword">where</span> B_ID <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token comment">-- 查询id不为1,3的数据</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token identifier"><span class="token punctuation">`</span>book_info<span class="token punctuation">`</span></span> <span class="token keyword">where</span> B_ID <span class="token operator">not</span> <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分组查询-group-by-分类字段" tabindex="-1"><a class="header-anchor" href="#分组查询-group-by-分类字段" aria-hidden="true">#</a> 分组查询(group by 分类字段)</h3>
<p>分组查询中如果字段后加条件使用<code v-pre>having</code>关键字,而不是<code v-pre>where</code>关键字</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 查询goods表中商品种类</span>
<span class="token keyword">select</span> goodCategory <span class="token keyword">from</span> goods <span class="token keyword">group</span> <span class="token keyword">by</span> goodCategory
<span class="token comment">-- 查询goods表中商品是否有种类sports</span>
<span class="token keyword">select</span> goodCategory <span class="token keyword">from</span> goods <span class="token keyword">group</span> <span class="token keyword">by</span> goodCategory <span class="token keyword">having</span> goodCategory<span class="token operator">=</span><span class="token string">'sports'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分页查询" tabindex="-1"><a class="header-anchor" href="#分页查询" aria-hidden="true">#</a> 分页查询</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> goods <span class="token keyword">limit</span> <span class="token punctuation">(</span>pageNo<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">*</span>pageSize<span class="token punctuation">,</span>pageSize
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="多表查询" tabindex="-1"><a class="header-anchor" href="#多表查询" aria-hidden="true">#</a> 多表查询</h3>
<ul>
<li>方式一:<code v-pre>select * from 表1,表2,...,表n where 条件</code></li>
<li>方式二:通过链接关键字
<ul>
<li>内连接: <code v-pre>select * from 表1 inner join 表2 on 条件(多表间有关联的条件)</code></li>
<li>外连接
<ul>
<li>左外连接: <code v-pre>select * from 表1 left join 表2 on 条件(多表间有关联的条件)</code>
<ul>
<li>当条件不满足时以左边表为主</li>
</ul>
</li>
<li>右外连接: <code v-pre>select * from 表1 right join 表2 on 条件(多表间有关联的条件)</code>
<ul>
<li>当条件不满足时以右边表为主</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>加入现在有两张表,部门表和员工表</p>
<p>部门表</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- amydb.dept definition</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>dept<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token keyword">COMMENT</span> <span class="token string">'编号'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>deptName<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'部门名称'</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token operator">=</span><span class="token number">5</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8mb4 <span class="token keyword">COLLATE</span><span class="token operator">=</span>utf8mb4_0900_ai_ci<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>员工表</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- amydb.emp definition</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>emp<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token keyword">COMMENT</span> <span class="token string">'员工编号'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>empName<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'员工名'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>salary<span class="token punctuation">`</span></span> <span class="token keyword">int</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'薪资'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>deptID<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token operator">=</span><span class="token number">5</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8mb4 <span class="token keyword">COLLATE</span><span class="token operator">=</span>utf8mb4_0900_ai_ci<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方式一" tabindex="-1"><a class="header-anchor" href="#方式一" aria-hidden="true">#</a> 方式一</h4>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- select * from 表1,表2,...,表n where 条件</span>
<span class="token comment">-- 查询g表内的goodName和temp表内的maxQuantity 且 g.count=temp.maxQuantity</span>
<span class="token keyword">select</span> g<span class="token punctuation">.</span>goodName<span class="token punctuation">,</span><span class="token keyword">temp</span><span class="token punctuation">.</span>maxQuantity
<span class="token keyword">from</span> goods g<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token function">min</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span> <span class="token keyword">as</span> maxQuantity <span class="token keyword">from</span> goods<span class="token punctuation">)</span> <span class="token keyword">temp</span> <span class="token comment">--</span>
<span class="token keyword">where</span> g<span class="token punctuation">.</span>count<span class="token operator">=</span><span class="token keyword">temp</span><span class="token punctuation">.</span>maxQuantity
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.查询部门编号为 1 的部门下所有的员工</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> emp <span class="token keyword">where</span> deptId <span class="token operator">=</span> <span class="token number">1</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2.查询所有部门中的所有员工</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> dept d<span class="token punctuation">,</span>emp e <span class="token keyword">where</span> e<span class="token punctuation">.</span>deptID <span class="token operator">=</span> d<span class="token punctuation">.</span>id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.找出开发部中所有员工名以及薪资和部门名</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> d<span class="token punctuation">.</span>deptName <span class="token punctuation">,</span>e<span class="token punctuation">.</span>empName<span class="token punctuation">,</span>e<span class="token punctuation">.</span>salary  <span class="token keyword">from</span> dept d <span class="token punctuation">,</span>emp e <span class="token keyword">where</span> d<span class="token punctuation">.</span>id <span class="token operator">=</span>e<span class="token punctuation">.</span>deptID <span class="token operator">and</span> d<span class="token punctuation">.</span>deptName <span class="token operator">=</span><span class="token string">'测试部'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4.找出开发部,测试部中所有员工名以及薪资和部门名</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 方式一</span>
<span class="token keyword">select</span> d<span class="token punctuation">.</span>deptName <span class="token punctuation">,</span>e<span class="token punctuation">.</span>empName<span class="token punctuation">,</span>e<span class="token punctuation">.</span>salary
<span class="token keyword">from</span> dept d <span class="token punctuation">,</span>emp e
<span class="token keyword">where</span> d<span class="token punctuation">.</span>id <span class="token operator">=</span>e<span class="token punctuation">.</span>deptID <span class="token operator">and</span> d<span class="token punctuation">.</span>deptName <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">'开发部'</span><span class="token punctuation">,</span><span class="token string">'测试部'</span><span class="token punctuation">)</span>
<span class="token comment">-- 方式二</span>
<span class="token keyword">select</span> d<span class="token punctuation">.</span>deptName <span class="token punctuation">,</span>e<span class="token punctuation">.</span>empName<span class="token punctuation">,</span>e<span class="token punctuation">.</span>salary
<span class="token keyword">from</span> dept d <span class="token punctuation">,</span>emp e
<span class="token keyword">where</span> d<span class="token punctuation">.</span>id <span class="token operator">=</span>e<span class="token punctuation">.</span>deptID <span class="token operator">and</span> <span class="token punctuation">(</span>d<span class="token punctuation">.</span>deptName<span class="token operator">=</span><span class="token string">'开发部'</span> <span class="token operator">or</span> d<span class="token punctuation">.</span>deptName<span class="token operator">=</span> <span class="token string">'测试部'</span><span class="token punctuation">)</span>
<span class="token comment">-- 方式三 使用union进行合并 合并前提上下两个sql语句查询结果表结构相同</span>
<span class="token comment">-- union 自动去重</span>
<span class="token comment">-- union all 不会自动去重</span>
<span class="token keyword">select</span> d<span class="token punctuation">.</span>deptName <span class="token punctuation">,</span>e<span class="token punctuation">.</span>empName<span class="token punctuation">,</span>e<span class="token punctuation">.</span>salary
<span class="token keyword">from</span> dept d <span class="token punctuation">,</span>emp e
<span class="token keyword">where</span> d<span class="token punctuation">.</span>id <span class="token operator">=</span>e<span class="token punctuation">.</span>deptID <span class="token operator">and</span> d<span class="token punctuation">.</span>deptName<span class="token operator">=</span><span class="token string">'开发部'</span>
<span class="token keyword">union</span>
<span class="token keyword">select</span> d<span class="token punctuation">.</span>deptName <span class="token punctuation">,</span>e<span class="token punctuation">.</span>empName<span class="token punctuation">,</span>e<span class="token punctuation">.</span>salary
<span class="token keyword">from</span> dept d <span class="token punctuation">,</span>emp e
<span class="token keyword">where</span> d<span class="token punctuation">.</span>id <span class="token operator">=</span>e<span class="token punctuation">.</span>deptID <span class="token operator">and</span> d<span class="token punctuation">.</span>deptName<span class="token operator">=</span> <span class="token string">'测试部'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方式二" tabindex="-1"><a class="header-anchor" href="#方式二" aria-hidden="true">#</a> 方式二</h4>
<h5 id="内连接" tabindex="-1"><a class="header-anchor" href="#内连接" aria-hidden="true">#</a> 内连接</h5>
<p>1.查询所有部门中所有员工的名字,部门名,薪资</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> d<span class="token punctuation">.</span>deptName <span class="token punctuation">,</span>e<span class="token punctuation">.</span>empName <span class="token punctuation">,</span>e<span class="token punctuation">.</span>salary
<span class="token keyword">from</span> dept d
<span class="token keyword">inner</span> <span class="token keyword">join</span> emp e
<span class="token keyword">on</span> d<span class="token punctuation">.</span>id <span class="token operator">=</span>e<span class="token punctuation">.</span>deptID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.找出开发部中所有员工名以及薪资和部门名</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> d<span class="token punctuation">.</span>deptName <span class="token punctuation">,</span>e<span class="token punctuation">.</span>empName <span class="token punctuation">,</span>e<span class="token punctuation">.</span>salary
<span class="token keyword">from</span> dept d
<span class="token keyword">inner</span> <span class="token keyword">join</span> emp e
<span class="token keyword">on</span> d<span class="token punctuation">.</span>id <span class="token operator">=</span>e<span class="token punctuation">.</span>deptID <span class="token keyword">where</span> d<span class="token punctuation">.</span>deptName <span class="token operator">=</span><span class="token string">'开发部'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="左外连接" tabindex="-1"><a class="header-anchor" href="#左外连接" aria-hidden="true">#</a> 左外连接</h5>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 若此时没有员工属于销售部 则查到的empName 和 salary为null</span>
<span class="token comment">-- 但是此时左边表中存在d.deptName='销售部' 所以此时查询到的数据只有部门名称有值 其他字段为bull</span>
<span class="token keyword">select</span> d<span class="token punctuation">.</span>deptName <span class="token punctuation">,</span>e<span class="token punctuation">.</span>empName <span class="token punctuation">,</span>e<span class="token punctuation">.</span>salary
<span class="token keyword">from</span> dept d
<span class="token keyword">left</span> <span class="token keyword">join</span> emp e
<span class="token keyword">on</span> d<span class="token punctuation">.</span>id <span class="token operator">=</span>e<span class="token punctuation">.</span>deptID <span class="token keyword">where</span> d<span class="token punctuation">.</span>deptName <span class="token operator">=</span><span class="token string">'销售部'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="右外连接" tabindex="-1"><a class="header-anchor" href="#右外连接" aria-hidden="true">#</a> 右外连接</h5>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> d<span class="token punctuation">.</span>deptName <span class="token punctuation">,</span>e<span class="token punctuation">.</span>empName <span class="token punctuation">,</span>e<span class="token punctuation">.</span>salary
<span class="token keyword">from</span> emp e
<span class="token keyword">right</span> <span class="token keyword">join</span> dept d
<span class="token keyword">on</span> d<span class="token punctuation">.</span>id <span class="token operator">=</span>e<span class="token punctuation">.</span>deptID <span class="token keyword">where</span> d<span class="token punctuation">.</span>deptName <span class="token operator">=</span><span class="token string">'销售部'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="表设计以及三表查询" tabindex="-1"><a class="header-anchor" href="#表设计以及三表查询" aria-hidden="true">#</a> 表设计以及三表查询</h3>
<h4 id="示例一" tabindex="-1"><a class="header-anchor" href="#示例一" aria-hidden="true">#</a> 示例一</h4>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 问题不确定</span>
<span class="token comment">-- 老师人数不确定</span>
<span class="token comment">-- 打分学生人数不确定</span>

<span class="token keyword">create</span> <span class="token keyword">table</span> question<span class="token punctuation">(</span>
	questionId <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">auto_increment</span> <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token keyword">comment</span> <span class="token string">'问题主键'</span><span class="token punctuation">,</span>
	content <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">'问题内容'</span>
<span class="token punctuation">)</span>

<span class="token keyword">create</span> <span class="token keyword">table</span> teacher<span class="token punctuation">(</span>
	teacherId <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">auto_increment</span> <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token keyword">comment</span> <span class="token string">'老师主键'</span><span class="token punctuation">,</span>
	name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">'老师名称'</span>
<span class="token punctuation">)</span>

<span class="token comment">-- 中间表</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> teacher_question<span class="token punctuation">(</span>
	id <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">auto_increment</span> <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token keyword">comment</span> <span class="token string">'主键'</span><span class="token punctuation">,</span>
	teacherId <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">'老师主键'</span><span class="token punctuation">,</span>
	questionId <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">'问题主键'</span><span class="token punctuation">,</span>
	score <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">comment</span> <span class="token string">'分数'</span>
<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>求出 teacherId=4 的老师的平均分</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 得到总分数</span>
<span class="token comment">-- select sum(score) from teacher_question tq where tq .teacherId =4</span>
<span class="token comment">-- 得到问题数 通过查询提交teacherId=1的questionId=1的人数</span>
<span class="token comment">-- select count(*) as num  from teacher_question tq2 where tq2.questionId =1 and tq2 .teacherId =1</span>

<span class="token keyword">select</span> floor<span class="token punctuation">(</span>temp1<span class="token punctuation">.</span>total<span class="token operator">/</span>temp2<span class="token punctuation">.</span>num<span class="token punctuation">)</span> <span class="token keyword">as</span> 平均分 <span class="token keyword">from</span>
<span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token function">sum</span><span class="token punctuation">(</span>score<span class="token punctuation">)</span> <span class="token keyword">as</span> total <span class="token keyword">from</span> teacher_question tq <span class="token keyword">where</span> tq <span class="token punctuation">.</span>teacherId <span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">)</span> temp1<span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">as</span> num  <span class="token keyword">from</span> teacher_question tq2 <span class="token keyword">where</span> tq2<span class="token punctuation">.</span>questionId <span class="token operator">=</span><span class="token number">1</span> <span class="token operator">and</span> tq2 <span class="token punctuation">.</span>teacherId <span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span> temp2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="实例二" tabindex="-1"><a class="header-anchor" href="#实例二" aria-hidden="true">#</a> 实例二</h4>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- 购物车</span>
<span class="token comment">--</span>
<span class="token comment">-- 物品表:goods</span>
<span class="token comment">-- id,goodsName,price</span>
<span class="token comment">-- 1 xxx衣服 100</span>
<span class="token comment">-- 2 xxx鞋子 300</span>
<span class="token comment">-- 客户表:customer</span>
<span class="token comment">-- id,customerName,phone,address</span>
<span class="token comment">-- 1,zs,13811112222,zz</span>
<span class="token comment">-- 中间表</span>
<span class="token comment">-- id,goodsId,customerId,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询张三具体买了哪些商品(商品名,价格,客户名,客户手机号)</p>
<h2 id="存储过程与函数" tabindex="-1"><a class="header-anchor" href="#存储过程与函数" aria-hidden="true">#</a> 存储过程与函数</h2>
<h3 id="聚合函数与常见函数" tabindex="-1"><a class="header-anchor" href="#聚合函数与常见函数" aria-hidden="true">#</a> 聚合函数与常见函数</h3>
<h4 id="聚合函数" tabindex="-1"><a class="header-anchor" href="#聚合函数" aria-hidden="true">#</a> 聚合函数</h4>
<p>在函数中,函数使用 SELECT 关键字调用 SELECT 函数名(字段) [FROM 表名]</p>
<ul>
<li>
<p>找出最大值:MAX(字段名)</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">MAX</span><span class="token punctuation">(</span>grade<span class="token punctuation">)</span> <span class="token keyword">AS</span> 最高分 <span class="token keyword">FROM</span> students
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>找出最小值:MIN(字段名)</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>grade<span class="token punctuation">)</span> <span class="token keyword">AS</span> 最低分 <span class="token keyword">FROM</span> students
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>求平均数:AVG(字段名)</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>grade<span class="token punctuation">)</span> <span class="token keyword">AS</span> 平均分 <span class="token keyword">FROM</span> students
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>求和:SUM()</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">SUM</span><span class="token punctuation">(</span>grade<span class="token punctuation">)</span> <span class="token keyword">AS</span> 平均分 <span class="token keyword">FROM</span> students
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>统计数据总数:COUNT()
当某个字段为空时不计入统计数,所以统计时一般使用*来统计所有数据</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> 平均分 <span class="token keyword">FROM</span> studentsS
<span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span>grade<span class="token punctuation">)</span> <span class="token keyword">AS</span> 平均分 <span class="token keyword">FROM</span> studentsS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="常用函数" tabindex="-1"><a class="header-anchor" href="#常用函数" aria-hidden="true">#</a> 常用函数</h4>
<h4 id="修改时间函数" tabindex="-1"><a class="header-anchor" href="#修改时间函数" aria-hidden="true">#</a> 修改时间函数</h4>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- DATA_FORMAT(data,format)</span>
<span class="token keyword">select</span> date_format<span class="token punctuation">(</span>birthday<span class="token punctuation">,</span><span class="token string">'%Y年%m月%d日'</span><span class="token punctuation">)</span> <span class="token keyword">from</span> students
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="时间函数" tabindex="-1"><a class="header-anchor" href="#时间函数" aria-hidden="true">#</a> 时间函数</h5>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>  <span class="token keyword">SELECT</span> 时间函数<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>获取当前时间:NOW()</li>
<li>获取当前年月日:CURDATE()</li>
<li>获取当前时分秒:CURTIME()</li>
<li>返回日期 date 的年份: YEAR()</li>
<li>返回日期 date 为一年中的第几周: WEEK()</li>
<li>返回时间 time 的小时值: HOURE()</li>
<li>返回时间 time 的分钟值: MINUTE()</li>
<li>返回 date1 和 date2 之间相隔天数: DATEDIFF(date1,date2)</li>
<li>计算日期参数 date 加上 n 天后的日期: ADDDATE(date,n))</li>
</ul>
<h5 id="数学函数" tabindex="-1"><a class="header-anchor" href="#数学函数" aria-hidden="true">#</a> 数学函数</h5>
<ul>
<li>向上取整 CEIL(数值)</li>
<li>向下取整 FLOOR(数值)</li>
<li>随机数 RAND() 不接受参数,返回 0-1 小数
<ul>
<li>随机整数</li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> CEIL<span class="token punctuation">(</span>RAND<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">100</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h2 id="视图" tabindex="-1"><a class="header-anchor" href="#视图" aria-hidden="true">#</a> 视图</h2>
<p>视图是在真实表上面构建的一张虚表,这个虚表由真是表的某些字段构成,操作视图方法和操作表方法相同,但是增删改视图后原表也会发生改变</p>
<h3 id="创建视图" tabindex="-1"><a class="header-anchor" href="#创建视图" aria-hidden="true">#</a> 创建视图</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- create view 视图名 as 查询语句</span>
<span class="token keyword">create</span> <span class="token keyword">view</span> view_all
<span class="token keyword">as</span> <span class="token keyword">select</span> e<span class="token punctuation">.</span>id <span class="token keyword">as</span> empId<span class="token punctuation">,</span> e<span class="token punctuation">.</span>empName <span class="token punctuation">,</span>e<span class="token punctuation">.</span>salary <span class="token punctuation">,</span>e<span class="token punctuation">.</span>phone <span class="token punctuation">,</span>d<span class="token punctuation">.</span>deptName
<span class="token keyword">from</span> emp e <span class="token keyword">inner</span> <span class="token keyword">join</span> dept d <span class="token keyword">on</span> e<span class="token punctuation">.</span>deptID <span class="token operator">=</span>d<span class="token punctuation">.</span>id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查询某一视图中数据" tabindex="-1"><a class="header-anchor" href="#查询某一视图中数据" aria-hidden="true">#</a> 查询某一视图中数据</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> view_all va <span class="token keyword">where</span> empId <span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除视图中某一条数据" tabindex="-1"><a class="header-anchor" href="#删除视图中某一条数据" aria-hidden="true">#</a> 删除视图中某一条数据</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">delete</span> <span class="token operator">*</span> <span class="token keyword">from</span> view_emp  <span class="token keyword">where</span> id <span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除视图" tabindex="-1"><a class="header-anchor" href="#删除视图" aria-hidden="true">#</a> 删除视图</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">delete</span> <span class="token keyword">from</span> view_emp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="向视图中插入一条数据" tabindex="-1"><a class="header-anchor" href="#向视图中插入一条数据" aria-hidden="true">#</a> 向视图中插入一条数据</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">insert</span> <span class="token keyword">into</span> view_emp  <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token string">'tom'</span><span class="token punctuation">,</span><span class="token number">8500</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">136656</span><span class="token punctuation">,</span><span class="token number">2663515313</span><span class="token punctuation">)</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> view_emp <span class="token keyword">set</span> empName<span class="token operator">=</span><span class="token string">'田七'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改视图数据" tabindex="-1"><a class="header-anchor" href="#修改视图数据" aria-hidden="true">#</a> 修改视图数据</h3>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">update</span> view_emp <span class="token keyword">set</span> empName<span class="token operator">=</span><span class="token string">'李四四'</span> <span class="token keyword">where</span> id<span class="token operator">=</span><span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h3>
<ul>
<li>金融行业</li>
<li>保险行业</li>
<li>财务行业</li>
</ul>
<h2 id="数据库建模-powerdesigner" tabindex="-1"><a class="header-anchor" href="#数据库建模-powerdesigner" aria-hidden="true">#</a> 数据库建模(powerDesigner)</h2>
<h2 id="事务" tabindex="-1"><a class="header-anchor" href="#事务" aria-hidden="true">#</a> 事务</h2>
<h3 id="什么是事务" tabindex="-1"><a class="header-anchor" href="#什么是事务" aria-hidden="true">#</a> 什么是事务</h3>
<p>多组操作要么全部成功,要么全部失败</p>
<h3 id="事务四大特性" tabindex="-1"><a class="header-anchor" href="#事务四大特性" aria-hidden="true">#</a> 事务四大特性</h3>
<ul>
<li>
<p>原子性 Automic: 同一个事务中多组操作不能分割,必须为一个整体</p>
</li>
<li>
<p>一致性 Consistent: 事务操作前与实务操作后总量保持一致</p>
</li>
<li>
<p>隔离性 Isolation: 多个事务之间互不干扰,转账为例</p>
<ul>
<li>
<p>脏读: 一个事务可以读取另一个事物未提交的数据,如张三开启事务进行汇款给李四,李四发货后张三进行事务回滚再提交,张三白嫖货物</p>
</li>
<li>
<p>虚读(幻读): 指一个线程中的事务读取到了另外一个线程中提交的 insert 的数据。</p>
</li>
<li>
<p>不可重复读: 在同一个事务中,不同时间进行查询多次读取到的结果不一致(开启事务后进行查询,不管查询多少次需以开启事务前为基础)</p>
</li>
<li>
<p>在 mysql 中事务有四种隔离级别: read uncommitted, read committed(读取提交), repeatable read, Serializable</p>
<ul>
<li>查看 mysql 的隔离级别
<ul>
<li>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>  <span class="token comment">-- 5.0+</span>
  <span class="token comment">-- 查看当前会话隔离级别</span>
  <span class="token keyword">select</span> @<span class="token variable">@tx_isolation</span><span class="token punctuation">;</span>
  <span class="token comment">-- 查看当前系统隔离级别</span>
  <span class="token keyword">select</span> @<span class="token variable">@global</span> tx_isolation<span class="token punctuation">;</span>
  <span class="token comment">-- 8.0+</span>
  <span class="token comment">-- 查看当前会话隔离级别</span>
  <span class="token keyword">select</span> @<span class="token variable">@transaction_isolation</span><span class="token punctuation">;</span>
  <span class="token comment">-- 查看当前系统隔离级别</span>
  <span class="token keyword">select</span> @<span class="token variable">@global.transaction_isolation</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>改变隔离级别
<ul>
<li>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code>  <span class="token keyword">set</span> <span class="token keyword">global</span> <span class="token keyword">transaction</span> <span class="token keyword">isolation</span> <span class="token keyword">level</span> 隔离级别<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>不同的隔离级别会引发不同的问题
<ul>
<li>当 mysql 事务的隔离级别为 read uncommitted 时会引起脏读,解决脏读,改变隔离级别为<code v-pre>read committed</code>.脏读:一个事务可以读取另一个事物未提交的数据,</li>
<li>当 mysql 事务的隔离级别为<code v-pre>read committed</code> 时会引起不可重复读:另一个事务进行数据修改并且提交后,该事务读取到的数据是最新数据,和更改前同一事务读取到的结果不一致,解决不可重复读:将隔离级别改为<code v-pre>repeatable read</code></li>
<li>当 mysql 事务的隔离级别为<code v-pre>repeatable read</code>时会引起虚读(幻读),解决(幻读),改变隔离级别为<code v-pre>Serializable</code></li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>持久性 Durable: 数据一旦进入到库中,表中,就永久存在</p>
</li>
</ul>
<h3 id="事务过程" tabindex="-1"><a class="header-anchor" href="#事务过程" aria-hidden="true">#</a> 事务过程</h3>
<ul>
<li>开启事务: <code v-pre>start transaction</code></li>
<li>提交事务: <code v-pre>commit</code></li>
<li>回滚: <code v-pre>rollback</code> 回滚只能在开启和提交事务之间进行回滚,不能在提交事务之后进行
回滚</li>
</ul>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">start</span> <span class="token keyword">transaction</span>
<span class="token keyword">update</span> accounts <span class="token keyword">set</span> money<span class="token operator">=</span>money <span class="token operator">-</span><span class="token number">200</span> <span class="token keyword">where</span> bankNo <span class="token operator">=</span><span class="token number">111</span>
<span class="token keyword">update</span> accounts <span class="token keyword">set</span> money<span class="token operator">=</span>money <span class="token operator">+</span><span class="token number">200</span> <span class="token keyword">where</span> bankNo <span class="token operator">=</span><span class="token number">122</span>
<span class="token keyword">commit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="存储过程" tabindex="-1"><a class="header-anchor" href="#存储过程" aria-hidden="true">#</a> 存储过程</h2>
<p>MySQL 存储过程是一组预先编写好的 SQL 语句集合，它们被命名并存储在数据库中，可以在需要的时候调用执行。存储过程通常用于封装一系列常用的 SQL 操作，提高数据库的性能和安全性。</p>
<h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3>
<h4 id="创建存储过程" tabindex="-1"><a class="header-anchor" href="#创建存储过程" aria-hidden="true">#</a> 创建存储过程：</h4>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token comment">-- create procedure 存储过程名 (参数名1 参数类型1,参数名2 参数类型2)</span>
<span class="token comment">-- begin</span>
<span class="token comment">-- 	代码块;</span>
<span class="token comment">-- end</span>
<span class="token keyword">DELIMITER</span> <span class="token comment">//</span>
<span class="token keyword">create</span> <span class="token keyword">procedure</span> addSalary <span class="token punctuation">(</span>money <span class="token keyword">FLOAT</span><span class="token punctuation">,</span>idd <span class="token keyword">BIGINT</span><span class="token punctuation">)</span>
<span class="token keyword">begin</span>
  <span class="token keyword">update</span> emp <span class="token keyword">set</span> salary<span class="token operator">=</span>salary<span class="token operator">+</span>money <span class="token keyword">where</span> id<span class="token operator">=</span>idd
<span class="token keyword">end</span> <span class="token comment">//</span>
<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="执行存储过程" tabindex="-1"><a class="header-anchor" href="#执行存储过程" aria-hidden="true">#</a> 执行存储过程</h4>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">call</span> addSalary<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1000</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>MySQL 存储过程的优点包括减少网络流量、提高性能和安全性、封装复杂的业务逻辑等。存储过程还支持参数传递、条件判断、循环和异常处理等高级功能，可以根据具体的需求进行编写和使用。类似于函数的调用</p>
<h4 id="带返回值的储存过程" tabindex="-1"><a class="header-anchor" href="#带返回值的储存过程" aria-hidden="true">#</a> 带返回值的储存过程</h4>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DELIMITER</span> <span class="token comment">//</span>
<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> test1<span class="token punctuation">(</span><span class="token operator">IN</span> i <span class="token keyword">FLOAT</span><span class="token punctuation">,</span> <span class="token operator">IN</span> j <span class="token keyword">FLOAT</span><span class="token punctuation">,</span> <span class="token keyword">OUT</span> num <span class="token keyword">FLOAT</span><span class="token punctuation">)</span>
<span class="token keyword">BEGIN</span>
    <span class="token keyword">SET</span> num <span class="token operator">=</span> i <span class="token operator">+</span> j<span class="token punctuation">;</span>
<span class="token keyword">END</span> <span class="token comment">//</span>
<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
<span class="token comment">-- call `test1`(10,20,@result)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除存储过程" tabindex="-1"><a class="header-anchor" href="#删除存储过程" aria-hidden="true">#</a> 删除存储过程</h4>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">drop</span> <span class="token keyword">procedure</span> <span class="token punctuation">[</span><span class="token keyword">if</span> existe<span class="token punctuation">]</span> 存储过程名<span class="token punctuation">;</span>
<span class="token keyword">drop</span> <span class="token keyword">procedure</span> <span class="token keyword">if</span> existe test1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="带-if-语句的存储过程" tabindex="-1"><a class="header-anchor" href="#带-if-语句的存储过程" aria-hidden="true">#</a> 带 if 语句的存储过程</h4>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DELIMITER</span> <span class="token comment">//</span>
<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> myProcedure<span class="token punctuation">(</span><span class="token operator">IN</span> num <span class="token keyword">INT</span><span class="token punctuation">,</span> <span class="token keyword">OUT</span> result <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">BEGIN</span>
    <span class="token comment">-- 定义变量</span>
    <span class="token keyword">DECLARE</span> message <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">-- 使用IF语句进行条件判断</span>
    <span class="token keyword">IF</span> num <span class="token operator">></span> <span class="token number">0</span> <span class="token keyword">THEN</span>
        <span class="token keyword">SET</span> message <span class="token operator">=</span> <span class="token string">'Number greater than 0'</span><span class="token punctuation">;</span>
    <span class="token keyword">ELSEIF</span> num <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token keyword">THEN</span>
        <span class="token keyword">SET</span> message <span class="token operator">=</span> <span class="token string">'Number less than 0'</span><span class="token punctuation">;</span>
    <span class="token keyword">ELSE</span>
        <span class="token keyword">SET</span> message <span class="token operator">=</span> <span class="token string">'Number equals 0'</span><span class="token punctuation">;</span>
    <span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>

    <span class="token comment">-- 将结果赋值给OUT参数</span>
    <span class="token keyword">SET</span> result <span class="token operator">=</span> message<span class="token punctuation">;</span>
<span class="token keyword">END</span><span class="token comment">//</span>
<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DECLARE</span> <span class="token variable">@returnValue</span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">CALL</span> myProcedure<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token variable">@returnValue</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token variable">@returnValue</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="存储过程之-case" tabindex="-1"><a class="header-anchor" href="#存储过程之-case" aria-hidden="true">#</a> 存储过程之 Case</h3>
<p>MySQL 存储过程中可以使用 CASE 语句控制流程和逻辑。CASE 语句用于在满足一定条件时执行相应的操作。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DELIMITER</span> <span class="token comment">//</span>

<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> my_procedure<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">BEGIN</span>
    <span class="token keyword">DECLARE</span> var1 <span class="token keyword">INT</span><span class="token punctuation">;</span>
    <span class="token keyword">DECLARE</span> var2 <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">-- 设置var1的值</span>
    <span class="token keyword">SET</span> var1 <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

    <span class="token comment">-- 使用CASE语句根据var1的值进行不同的操作</span>
    <span class="token keyword">CASE</span> var1
        <span class="token keyword">WHEN</span> <span class="token number">1</span> <span class="token keyword">THEN</span>
            <span class="token keyword">SET</span> var2 <span class="token operator">=</span> <span class="token string">'One'</span><span class="token punctuation">;</span>
        <span class="token keyword">WHEN</span> <span class="token number">2</span> <span class="token keyword">THEN</span>
            <span class="token keyword">SET</span> var2 <span class="token operator">=</span> <span class="token string">'Two'</span><span class="token punctuation">;</span>
        <span class="token keyword">WHEN</span> <span class="token number">3</span> <span class="token keyword">THEN</span>
            <span class="token keyword">SET</span> var2 <span class="token operator">=</span> <span class="token string">'Three'</span><span class="token punctuation">;</span>
        <span class="token keyword">ELSE</span>
            <span class="token keyword">SET</span> var2 <span class="token operator">=</span> <span class="token string">'Other'</span><span class="token punctuation">;</span>
    <span class="token keyword">END</span> <span class="token keyword">CASE</span><span class="token punctuation">;</span>

    <span class="token comment">-- 输出结果</span>
    <span class="token keyword">SELECT</span> var2<span class="token punctuation">;</span>
<span class="token keyword">END</span> <span class="token comment">//</span>

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，首先使用 CREATE PROCEDURE 语句创建了一个名为 my_procedure 的存储过程。在存储过程中声明了两个变量 var1 和 var2。然后，通过 SET 语句给 var1 赋值为 3。</p>
<p>接下来使用 CASE 语句根据 var1 的值进行不同的操作。当 var1 为 1 时，将 var2 设为’One’；当 var1 为 2 时，将 var2 设为’Two’；当 var1 为 3 时，将 var2 设为’Three’；否则将 var2 设为’Other’。</p>
<p>最后，使用 SELECT 语句输出 var2 的值。你可以调用该存储过程来执行，并查看结果。</p>
<h3 id="存储过程之-while" tabindex="-1"><a class="header-anchor" href="#存储过程之-while" aria-hidden="true">#</a> 存储过程之 While</h3>
<p>MySQL 存储过程中可以使用 WHILE 循环来实现迭代操作。WHILE 循环用于在满足一定条件时重复执行一段代码块。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DELIMITER</span> <span class="token comment">//</span>

<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> my_procedure<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">BEGIN</span>
    <span class="token keyword">DECLARE</span> counter <span class="token keyword">INT</span><span class="token punctuation">;</span>
    <span class="token keyword">DECLARE</span> result <span class="token keyword">INT</span><span class="token punctuation">;</span>

    <span class="token comment">-- 初始化计数器</span>
    <span class="token keyword">SET</span> counter <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">SET</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token comment">-- 使用WHILE循环计算1到10的累加和</span>
    <span class="token keyword">WHILE</span> counter <span class="token operator">&lt;=</span> <span class="token number">10</span> <span class="token keyword">DO</span>
        <span class="token keyword">SET</span> result <span class="token operator">=</span> result <span class="token operator">+</span> counter<span class="token punctuation">;</span>
        <span class="token keyword">SET</span> counter <span class="token operator">=</span> counter <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">END</span> <span class="token keyword">WHILE</span><span class="token punctuation">;</span>

    <span class="token comment">-- 输出结果</span>
    <span class="token keyword">SELECT</span> result<span class="token punctuation">;</span>
<span class="token keyword">END</span> <span class="token comment">//</span>

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，首先使用 CREATE PROCEDURE 语句创建了一个名为 my_procedure 的存储过程。在存储过程中声明了两个变量 counter 和 result，分别用于计数和存储累加和的结果。</p>
<p>然后，在 WHILE 循环中，当 counter 小于等于 10 时，重复执行循环体内的代码块。循环体内的代码实现了将 counter 的值累加到 result 中，并将 counter 递增 1 的操作。</p>
<p>最后，使用 SELECT 语句输出最终的累加结果 result。你可以调用该存储过程来执行，并查看输出结果。</p>
<h3 id="存储过程之-loop" tabindex="-1"><a class="header-anchor" href="#存储过程之-loop" aria-hidden="true">#</a> 存储过程之 Loop</h3>
<p>在 MySQL 存储过程中，可以使用 LOOP 循环来实现循环执行一段代码块，直到遇到退出条件为止。</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">DELIMITER</span> <span class="token comment">//</span>

<span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span> my_procedure<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">BEGIN</span>
    <span class="token keyword">DECLARE</span> counter <span class="token keyword">INT</span><span class="token punctuation">;</span>
    <span class="token keyword">DECLARE</span> result <span class="token keyword">INT</span><span class="token punctuation">;</span>

    <span class="token comment">-- 初始化计数器</span>
    <span class="token keyword">SET</span> counter <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">SET</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token comment">-- 使用LOOP循环计算1到10的累加和，直到counter等于11时退出循环</span>
    <span class="token keyword">LOOP</span>
        <span class="token keyword">SET</span> result <span class="token operator">=</span> result <span class="token operator">+</span> counter<span class="token punctuation">;</span>
        <span class="token keyword">SET</span> counter <span class="token operator">=</span> counter <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>

        <span class="token keyword">IF</span> counter <span class="token operator">></span> <span class="token number">10</span> <span class="token keyword">THEN</span>
            <span class="token keyword">LEAVE</span><span class="token punctuation">;</span>
        <span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>
    <span class="token keyword">END</span> <span class="token keyword">LOOP</span><span class="token punctuation">;</span>

    <span class="token comment">-- 输出结果</span>
    <span class="token keyword">SELECT</span> result<span class="token punctuation">;</span>
<span class="token keyword">END</span> <span class="token comment">//</span>

<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，首先使用 CREATE PROCEDURE 语句创建一个名为 my_procedure 的存储过程。在存储过程中声明了两个变量 counter 和 result，用于计数和存储累加和的结果。</p>
<p>然后，在 LOOP 循环中，重复执行循环体内的代码块。循环体内的代码实现将 counter 的值累加到 result 中，并将 counter 递增 1。</p>
<p>在每次迭代后，使用 IF 语句检查退出条件。当 counter 大于 10 时，使用 LEAVE 语句退出循环。</p>
<p>最后，使用 SELECT 语句将最终的累加结果 result 输出。你可以调用该存储过程来执行，并查看输出结果。</p>
</div></template>


