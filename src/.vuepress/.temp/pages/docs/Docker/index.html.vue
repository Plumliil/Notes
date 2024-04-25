<template><div><h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h1>
<p>Docker是一种基于Go语言实现的开源容器项目，它利用操作系统本身已有的机制和特性，实现轻量级虚拟化，被认为是内核级的虚拟化。Docker的目标是达到项目运行环境“一次封装，到处运行”的目的。Docker创建的运行环境被称为Docker容器，容器是通过Docker镜像创建的，而Docker镜像文件可以放在私有仓库中或公共仓库中。Docker还鼓励面向服务的体系结构和微服务架构。</p>
<p>对于开发者而言，Docker可以以统一的方式打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何安装了Docker引擎的服务器上（包括流行的Linux机器、windows机器），实现虚拟化。对于运行环境而言，容器是完全使用沙箱机制，相互之间不会有任何接口。这使得Docker在机器和数据中心中运行变得容易，并且不依赖于任何语言、框架或系统。</p>
<p>Docker是容器的一种实现
和虚拟机不同的是不需要运行一个完整的操作系统
一个物理服务器上可能只会运行几个虚拟机,但是可能会运行上百个docker容器</p>
<p>docker是使用Client Server架构模式</p>
<p>docker client和docker daemon之间通过socket或者restful api进行通信,docker daemon是服务端守护进程,负责管理docker的各种资源 docker client负责向docker daemon发送请求,docker daemon接收到请求后进行处理,然后将结果返回给docker client,这里的docker deamon是一个后台进程,用来接收并处理来自docker客户端的请求,然后将结果返回给客户端,终端中输入的命令都是通过docker 客户端发送给docker daemon,docker daemon进行处理然后将结果返回给客户端,就可以在终端中看到结果</p>
</div></template>


