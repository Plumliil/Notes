# 基础篇

## 介绍
### 基本概念
#### 镜像
镜像是一个只读的模板,可以用来创建容器

#### 容器
容器是docker的运行实例,提供了一个独立的可移植的环境,可以在环境中运行应用程序

镜像和容器的关系像是类和实例的关系

镜像是类

容器是实例

##### 容器化和Dockerfile

Dockerfile是一个文本文件,里边包含了一条条指令来告诉docker如何来构建镜像,镜像中包含了应用程序执行的所有命令(各种依赖,配置环境等等)

一般情况下在目录根文件下创建该文本文件

- 创建一个Dockerfile 来告诉docke构建应用程序镜像所需要的步骤和配置
- 使用Dockerfile构建镜像
- 使用镜像创建和运行容器



#### 仓库
docker仓库用于存放docker镜像


#### 示例

在hellodocker文件夹下创建一个简单的js文件index.js,并创建配置文件Dockerfile

```js
console.log('hello docker');
```

```docker
FROM node:14-alpine
COPY index.js /index.js
# CMD [ "node",'/index.js' ]
CMD node /index.js
```

```shell
# 提交容器 docker ps -a 显示容器信息
docker commit {容器ID号}{dockerhub用户名}/{仓库名}:{tag}
```

```shell
# 推送镜像到远程dockerhub仓库
docker push {dockerhub用户名}/{仓库名}:{tag}
```

```shell
# 拉取镜像
docker pull {dockerhub用户名}/{仓库名}:{tag}
```


## 常用命令

### 构建镜像
```bash
docker build -t <image-name>:<tag> -f <Dockerfile-path> <context-path>
```
- `docker build`: 这是构建Docker镜像的命
- `-t <image-name>:<tag>`: 指定构建后的镜像名称和标签。其中，`<image-name>`是您为镜像起的名称，`<tag>`是镜像的标签（如版本号），通常为latest或具体的版本号（如1.0.0）。如果省略标签，默认为latest。例如：-t my-app:latest。
- `-f <Dockerfile-path>`: （可选）指定Dockerfile的路径。如果Dockerfile位于当前目录下且名为"Dockerfile"，则可以省略此选项。否则，请提供Dockerfile的完整路径，如-f `/path/to/Dockerfile`。
- `<context-path>`: （可选）指定构建上下文的路径，即Docker将发送到守护进程进行构建的目录路径。守护进程会将该路径下的所有内容（包括子目录）打包成tar文件发送到服务器端。默认情况下，上下文路径是执行`docker build`命令时所在的目录。例如：.表示当前目录，`/path/to/context`表示指定的目录。

### 对镜像tag标记并容器转镜像
```shell
docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]
```
- SOURCE_IMAGE[:TAG]：源镜像的名称和标签。如果不指定标签，默认为latest。
- TARGET_IMAGE[:TAG]：目标镜像的名称和标签，可以是本地或远程仓库的镜像。

示例：
```shell
docker tag myapp:latest myapp:v1.0
```
或
```shell
docker tag myapp:v1.0 registry.example.com/myapp:v1.0-production
docker push registry.example.com/myapp:v1.0-production
```

### 在运行的容器中执行命令 docker exec
```shell
docker exec [OPTIONS] CONTAINER COMMAND [ARG...]
docker exec -it {容器ID号} /bin/bash
```
OPTIONS说明：
- -d :分离模式: 在后台运行
- -i :即使没有附加也保持STDIN 打开
- -t :分配一个伪终端
实例：
```shell
docker exec -it nginx /bin/bash # 进入容器的虚拟终端 /bin/sh
```
## linux安装docker-compose
### 1.去github下载docker-compose
https://github.com/docker/compose/tags
### 2.下载好的上传服务器
```shell
# 拷贝文件到/usr/local/bin，如果文件已经在/usr/local/bin目录，忽略此步骤
# 假如二进制文件docker-compose-linux-x86_64上传的目录是：/opt/docker
cp /opt/docker/docker-compose-linux-x86_64 /usr/local/bin


# 更改二进制文件名字
mv docker-compose-linux-x86_64 docker-compose

```
### 3.授予权限
```shell
sudo chmod +x /usr/local/bin/docker-compose
```
### 4.测试安装结果
```shell
docker-compose --version
```