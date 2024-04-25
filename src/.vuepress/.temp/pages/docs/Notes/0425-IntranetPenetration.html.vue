<template><div><h1 id="服务器内网穿透" tabindex="-1"><a class="header-anchor" href="#服务器内网穿透" aria-hidden="true">#</a> 服务器内网穿透</h1>
<blockquote>
<p><a href="https://github.com/fatedier/frp" target="_blank" rel="noopener noreferrer">https://github.com/fatedier/frp<ExternalLinkIcon/></a></p>
</blockquote>
<blockquote>
<p>frp 是一个专注于内网穿透的高性能的反向代理应用，支持 TCP、UDP、HTTP、HTTPS 等多种协议，且支持 P2P 通信。可以将内网服务以安全、便捷的方式通过具有公网 IP 节点的中转暴露到公网。</p>
</blockquote>
<h2 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h2>
<h3 id="使用docker-compose安装frps" tabindex="-1"><a class="header-anchor" href="#使用docker-compose安装frps" aria-hidden="true">#</a> 使用docker compose安装frps</h3>
<p>在服务器创建一个目录 <code v-pre>/opt/frp</code></p>
<p>在目录中创建两个文件
docker-compose.yml</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #E06C75">version</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&#39;3&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E06C75">services</span><span style="color: #ABB2BF">:</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">frps</span><span style="color: #ABB2BF">:</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">image</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">snowdreamtech/frps:0.49.0</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">container_name</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">frps</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">restart</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">unless-stopped</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">volumes</span><span style="color: #ABB2BF">:</span></span>
<span class="line"><span style="color: #ABB2BF">      - </span><span style="color: #98C379">./frps.ini:/etc/frp/frps.ini</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">network_mode</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">host</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">[</span><span style="color: #98C379">common</span><span style="color: #ABB2BF">]</span></span>
<span class="line"><span style="color: #98C379">bind_port = 25999</span></span>
<span class="line"></span>
<span class="line"><span style="color: #98C379">token = EmQHpH2SP&amp;%6rq</span><span style="color: #ABB2BF"> </span><span style="color: #7F848E; font-style: italic"># 密码</span></span>
<span class="line"></span>
<span class="line"><span style="color: #98C379">dashboard_addr = 0.0.0.0</span></span>
<span class="line"><span style="color: #98C379">dashboard_port = 25998</span></span>
<span class="line"><span style="color: #98C379">dashboard_user = admin</span></span>
<span class="line"><span style="color: #98C379">dashboard_pwd = EmQHpH2SP&amp;%6rq</span><span style="color: #ABB2BF"> </span><span style="color: #7F848E; font-style: italic"># 密码</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code v-pre>/opt/frp</code>目录下</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">docker </span><span style="color: #98C379">compose</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">pull</span><span style="color: #ABB2BF"> </span><span style="color: #7F848E; font-style: italic"># 拉取docker compose文件中定义的服务所需的镜像</span></span>
<span class="line"><span style="color: #ABB2BF">docker </span><span style="color: #98C379">compose</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">up</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">-d</span><span style="color: #ABB2BF"> </span><span style="color: #7F848E; font-style: italic"># 启动compose容器</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>docker compose pull 用于拉取 Docker Compose 文件中定义的服务所需的镜像。当你在 Docker Compose 文件中定义了服务，并且这些服务的镜像还没有本地存在时，你可以使用该命令来下载这些镜像。</p>
<p>docker-compose up -d 是用于在 Docker Compose 环境中启动服务的命令，其中：</p>
<p>-d 参数是指以“分离模式”（detached mode）运行，这意味着服务将在后台运行，而不会阻塞终端。
docker-compose up 命令会读取 docker-compose.yml 文件，并根据其中定义的服务配置启动容器。</p>
<p>查看容器日志</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">docker </span><span style="color: #98C379">logs</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">frps</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>检查防火墙，开放25998，25999端口 (云服务器也许去对应控制台放开)</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic"># 查看防火墙状态</span></span>
<span class="line"><span style="color: #ABB2BF">systemctl </span><span style="color: #98C379">status</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">firewall</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic"># 关闭防火墙</span></span>
<span class="line"><span style="color: #ABB2BF">systemctl </span><span style="color: #98C379">stop</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">firewalld</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>此时去服务器访问端口25998，可以看到登录页面，输入用户名和密码即可</p>
<h3 id="windows服务器操作" tabindex="-1"><a class="header-anchor" href="#windows服务器操作" aria-hidden="true">#</a> windows服务器操作</h3>
<h4 id="下载对应frp应用" tabindex="-1"><a class="header-anchor" href="#下载对应frp应用" aria-hidden="true">#</a> 下载对应frp应用</h4>
<blockquote>
<p><a href="https://github.com/fatedier/frp" target="_blank" rel="noopener noreferrer">https://github.com/fatedier/frp<ExternalLinkIcon/></a></p>
</blockquote>
<h4 id="到对应frp下载目录中" tabindex="-1"><a class="header-anchor" href="#到对应frp下载目录中" aria-hidden="true">#</a> 到对应frp下载目录中</h4>
<h5 id="修改相关frpc-toml配置文件" tabindex="-1"><a class="header-anchor" href="#修改相关frpc-toml配置文件" aria-hidden="true">#</a> 修改相关frpc.toml配置文件</h5>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #98C379">serverAddr = &quot;xxx.xxx.xxx.xxx&quot;</span><span style="color: #ABB2BF"> </span><span style="color: #7F848E; font-style: italic"># 服务器ip</span></span>
<span class="line"><span style="color: #98C379">serverPort = 25999</span></span>
<span class="line"><span style="color: #98C379">auth.token = &quot;xxxx&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">[[</span><span style="color: #98C379">proxies</span><span style="color: #ABB2BF">]]</span></span>
<span class="line"><span style="color: #98C379">name = &quot;应用名称自定义&quot;</span></span>
<span class="line"><span style="color: #98C379">type = &quot;tcp&quot;</span></span>
<span class="line"><span style="color: #98C379">localIP = &quot;127.0.0.1&quot;</span></span>
<span class="line"><span style="color: #98C379">localPort = 3000</span><span style="color: #ABB2BF"> </span><span style="color: #7F848E; font-style: italic"># 本地端口号</span></span>
<span class="line"><span style="color: #98C379">remotePort = 3000</span><span style="color: #ABB2BF"> </span><span style="color: #7F848E; font-style: italic"># 远程端口号</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h5>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">frpc </span><span style="color: #D19A66">-c</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">frpc.toml</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


