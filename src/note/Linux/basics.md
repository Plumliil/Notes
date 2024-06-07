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

### 压缩解压缩

#### tar.gz
```shell
# 压缩
tar -czvf mydir.tar.gz mydir
# 解压缩
tar -xzvf mydir.tar.gz
```
- tar: 调用 tar 程序，tar 是一个用于创建和解包 tar 存档的工具
- -c: 创建一个新的 tar 文件。
- -z: 使用 gzip 压缩。这个选项会在创建 tar 文件的同时使用 gzip 进行压缩，使得输出件名通常以 .gz 结尾
- -v: 显示详细信息。这个选项会在处理每个文件时显示文件名，便于查看进度
- -f: 指定输出文件的名称。后面跟上想要创建的 tar 文件的名字。
- mydir.tar.gz: 输出文件的名称，将要创建的 tar.gz 压缩包的名称。
- mydir: 要被压缩的目录或文件。指定一个或多个目录或文件进行压缩。
  
#### .zip

```shell
# 压缩
zip -r mydir.zip mydir
# 解压缩
unzip mydir.zip mydir
```
- zip: 调用 zip 程序，zip 是一个用于创建 ZIP 压缩文件的工具。
- -r: 递归地压缩目录。这个选项告诉 zip 工具包含指定目录中的所有文件和子目录，并递归处理所有子目录。
- mydir.zip: 输出文件的名称，将要创建的 ZIP 压缩包的名称。
- mydir: 要被压缩的目录或文件。可以指定一个或多个目录或文件进行压缩。

- unzip: 调用 unzip 程序，unzip 是一个用于解压 ZIP 文件的工具。
- mydir.zip: 要解压的 ZIP 文件的名称。
- mydir: 解压到目标目录