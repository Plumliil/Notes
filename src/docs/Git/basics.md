# 基础篇

## 常用命令

### git reset 

#### 撤回上一次已 commit 但未 push 的代码

```shell
git reset --soft HEAD~1
```

### git reflog

#### 查询当前分支是从哪个分支拉取以及分支操作记录(提交记录,merge 记录)

```shell
git reflog show 分支名
```

### git show

#### 查询当前文件加下提交代码作者

```shell
git show
Author:xxx <youremail@email.com>
```

### git config --global user.email

#### 全局修改提交代码邮箱

```shell
git config --global user.email "youremail@email.com"
```

### git branch -d

#### 删除本地分支

```shell
git branch -d branchname
```