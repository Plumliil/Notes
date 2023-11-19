<template><div><h1 id="基础篇" tabindex="-1"><a class="header-anchor" href="#基础篇" aria-hidden="true">#</a> 基础篇</h1>
<h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2>
<h3 id="git-reset" tabindex="-1"><a class="header-anchor" href="#git-reset" aria-hidden="true">#</a> git reset</h3>
<h4 id="撤回上一次已-commit-但未-push-的代码" tabindex="-1"><a class="header-anchor" href="#撤回上一次已-commit-但未-push-的代码" aria-hidden="true">#</a> 撤回上一次已 commit 但未 push 的代码</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">--soft</span> HEAD~1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="git-reflog" tabindex="-1"><a class="header-anchor" href="#git-reflog" aria-hidden="true">#</a> git reflog</h3>
<h4 id="查询当前分支是从哪个分支拉取以及分支操作记录-提交记录-merge-记录" tabindex="-1"><a class="header-anchor" href="#查询当前分支是从哪个分支拉取以及分支操作记录-提交记录-merge-记录" aria-hidden="true">#</a> 查询当前分支是从哪个分支拉取以及分支操作记录(提交记录,merge 记录)</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> reflog show 分支名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="git-show" tabindex="-1"><a class="header-anchor" href="#git-show" aria-hidden="true">#</a> git show</h3>
<h4 id="查询当前文件加下提交代码作者" tabindex="-1"><a class="header-anchor" href="#查询当前文件加下提交代码作者" aria-hidden="true">#</a> 查询当前文件加下提交代码作者</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> show
Author:xxx <span class="token operator">&lt;</span>youremail@email.com<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-config-global-user-email" tabindex="-1"><a class="header-anchor" href="#git-config-global-user-email" aria-hidden="true">#</a> git config --global user.email</h3>
<h4 id="全局修改提交代码邮箱" tabindex="-1"><a class="header-anchor" href="#全局修改提交代码邮箱" aria-hidden="true">#</a> 全局修改提交代码邮箱</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">"youremail@email.com"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="git-branch-d" tabindex="-1"><a class="header-anchor" href="#git-branch-d" aria-hidden="true">#</a> git branch -d</h3>
<h4 id="删除本地分支" tabindex="-1"><a class="header-anchor" href="#删除本地分支" aria-hidden="true">#</a> 删除本地分支</h4>
<p>如果该分支包含未合并的修改和未推送的提交，-d 标志将不允许删除该本地分支
此时应该使用 -D</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> branch <span class="token parameter variable">-d</span> branchname
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="git-push-origin-d" tabindex="-1"><a class="header-anchor" href="#git-push-origin-d" aria-hidden="true">#</a> git push origin -d</h3>
<h4 id="删除远程分支" tabindex="-1"><a class="header-anchor" href="#删除远程分支" aria-hidden="true">#</a> 删除远程分支</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> branchname
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


