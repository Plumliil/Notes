# 基础篇

## 配置管理

### 查询当前文件加下提交代码作者
```shell
git show
Author:xxx <youremail@email.com>
```

### 全局修改提交代码邮箱

```shell
git config --global user.email "youremail@email.com"
```

### 删除本地分支

如果该分支包含未合并的修改和未推送的提交，-d 标志将不允许删除该本地分支
此时应该使用 -D
```shell
git branch -d branchname
```

### 删除远程分支

```shell
git push origin --delete branchname
```

## 常用命令

### 撤回上一次已 commit 但未 push 的代码

#### 

```shell
git reset --soft HEAD~1
```

### 查询当前分支是从哪个分支拉取以及分支操作记录(提交记录,merge 记录)


```shell
git reflog show 分支名
```


## 标签管理

### 为当前分支打上tag

```shell
git tag -a v1.0.0 -m “标签说明”
```

### 将tag推到远程仓库

```shell
git push origin v1.0.0
```

### 删除本地tag

```shell
git tag -d v1.0.0
```

### 删除远程

```shell
git push origin :refs/tags/v1.0.0
```

### 分支重命名
```shell
git branch -m oldBranch newBranch
```
### 删除远程分支
```shell
git push --delete origin oldBranch
```
### 推送本地分支到远端

```shell
git push origin newBranch
```
