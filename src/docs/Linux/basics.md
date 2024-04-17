# 基础篇

## 基本命令

- cd 切换目录 ~ 家目录 . 当前目录 .. 上级目录 - 上次所在目录
- ls 显示当前目录下文件
- touch 创建文件
- mkdir 创建文件夹
- pwd 查看当前目录
- tree 查看系统目录结构,部分 Linux 终端需要安装此命令 `sudo apt install tree`
- sudo 以系统管理者的身份执行指令
- apt 是一个在 Debian 和 Ubuntu 中的 Shell 前端软件包管理器 可以进行软件安装(需要 root 权限)

## 常用

### 复制文件到当前目录

```shell
cp my_file ./my_copy_file
```
- ./ 表示当前目录
- 
### 复制文件夹到当前目录并重命名

```shell
cp -r my_file_dir/ ./my_copy_file_dir/
```
- -r 表示递归，是对多个文件的操作

### 安装vi/vim

```shell
apt-get update
apt-get install vim
```
- 更新软件源
- 安装vim
