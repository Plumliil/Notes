# 基础篇

Docker是容器的一种实现
和虚拟机不同的是不需要运行一个完整的操作系统
一个物理服务器上可能只会运行几个虚拟机,但是可能会运行上百个docker容器

docker是使用Client Server架构模式

docker client和docker daemon之间通过socket或者restful api进行通信,docker daemon是服务端守护进程,负责管理docker的各种资源 docker client负责向docker daemon发送请求,docker daemon接收到请求后进行处理,然后将结果返回给docker client,这里的docker deamon是一个后台进程,用来接收并处理来自docker客户端的请求,然后将结果返回给客户端,终端中输入的命令都是通过docker 客户端发送给docker daemon,docker daemon进行处理然后将结果返回给客户端,就可以在终端中看到结果

## 镜像
镜像是一个只读的模板,可以用来创建容器

## 容器
容器是docker的运行实例,提供了一个独立的可移植的环境,可以在环境中运行应用程序

镜像和容器的关系像是类和实例的关系

镜像是类

容器是实例

### 容器化和Dockerfile

Dockerfile是一个文本文件,里边包含了一条条指令来告诉docker如何来构建镜像,镜像中包含了应用程序执行的所有命令(各种依赖,配置环境等等)

一般情况下在目录根文件下创建该文本文件

- 创建一个Dockerfile 来告诉docke构建应用程序镜像所需要的步骤和配置
- 使用Dockerfile构建镜像
- 使用镜像创建和运行容器



## 仓库
docker仓库用于存放docker镜像


## 示例

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

``` shell
# 构建镜像
docker build -t hellodocker .
```

```shell
# 查看构建的镜像
docker images ls
```

```shell
# 运行镜像
docker run hello-docker
```

```shell
# 登录docker hub
docker login
```

```shell
# 对镜像tag标记并容器转镜像 镜像id docker images查看
docker tag {镜像ID号}{dockerhub用户名}/{仓库名}:{tag}
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