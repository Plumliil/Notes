<template><div><h1 id="基础篇" tabindex="-1"><a class="header-anchor" href="#基础篇" aria-hidden="true">#</a> 基础篇</h1>
<h2 id="基本命令" tabindex="-1"><a class="header-anchor" href="#基本命令" aria-hidden="true">#</a> 基本命令</h2>
<ul>
<li>cd 切换目录 ~ 家目录 . 当前目录 .. 上级目录 - 上次所在目录</li>
<li>ls 显示当前目录下文件</li>
<li>touch 创建文件</li>
<li>mkdir 创建文件夹</li>
<li>pwd 查看当前目录</li>
<li>tree 查看系统目录结构,部分 Linux 终端需要安装此命令 <code v-pre>sudo apt install tree</code></li>
<li>sudo 以系统管理者的身份执行指令</li>
<li>apt 是一个在 Debian 和 Ubuntu 中的 Shell 前端软件包管理器 可以进行软件安装(需要 root 权限)</li>
</ul>
<h2 id="常用" tabindex="-1"><a class="header-anchor" href="#常用" aria-hidden="true">#</a> 常用</h2>
<h3 id="复制文件到当前目录" tabindex="-1"><a class="header-anchor" href="#复制文件到当前目录" aria-hidden="true">#</a> 复制文件到当前目录</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">cp </span><span style="color: #98C379">my_file</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">./my_copy_file</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>./ 表示当前目录</li>
<li></li>
</ul>
<h3 id="复制文件夹到当前目录并重命名" tabindex="-1"><a class="header-anchor" href="#复制文件夹到当前目录并重命名" aria-hidden="true">#</a> 复制文件夹到当前目录并重命名</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">cp </span><span style="color: #D19A66">-r</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">my_file_dir/</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">./my_copy_file_dir/</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>-r 表示递归，是对多个文件的操作</li>
</ul>
<h3 id="安装vi-vim" tabindex="-1"><a class="header-anchor" href="#安装vi-vim" aria-hidden="true">#</a> 安装vi/vim</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">apt-get </span><span style="color: #98C379">update</span></span>
<span class="line"><span style="color: #ABB2BF">apt-get </span><span style="color: #98C379">install</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">vim</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>更新软件源</li>
<li>安装vim</li>
</ul>
</div></template>


