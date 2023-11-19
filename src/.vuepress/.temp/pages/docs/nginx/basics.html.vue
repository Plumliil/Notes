<template><div><h1 id="基础篇" tabindex="-1"><a class="header-anchor" href="#基础篇" aria-hidden="true">#</a> 基础篇</h1>
<p>nginx的出现是为了解决C10K(10000 concurrent connection 同时处理一万个并发连接)的问题</p>
<h2 id="nginx安装" tabindex="-1"><a class="header-anchor" href="#nginx安装" aria-hidden="true">#</a> nginx安装</h2>
<p>以ubuntu为例</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 1.安装前置依赖</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">curl</span> gnupg2 ca-certificates lsb-release ubuntu-keyring

<span class="token comment"># 2.导入官方密钥</span>
<span class="token function">curl</span> https://nginx.org/keys/nginx_signing.key <span class="token operator">|</span> gpg <span class="token parameter variable">--dearmor</span> <span class="token punctuation">\</span>
    <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /usr/share/keyrings/nginx-archive-keyring.gpg <span class="token operator">></span>/dev/null

<span class="token comment"># 3.验证下载文件中是否包含了正确的密钥</span>
gpg --dry-run <span class="token parameter variable">--quiet</span> --no-keyring <span class="token parameter variable">--import</span> --import-options import-show /usr/share/keyrings/nginx-archive-keyring.gpg

<span class="token comment"># 4. 设置稳定版或者主线版的Nginx包</span>

<span class="token comment"># 稳定版</span>
<span class="token builtin class-name">echo</span> <span class="token string">"deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] \
http://nginx.org/packages/ubuntu <span class="token variable"><span class="token variable">`</span>lsb_release <span class="token parameter variable">-cs</span><span class="token variable">`</span></span> nginx"</span> <span class="token punctuation">\</span>
    <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/nginx.list

<span class="token comment"># 主线版</span>
<span class="token builtin class-name">echo</span> <span class="token string">"deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] \
http://nginx.org/packages/mainline/ubuntu <span class="token variable"><span class="token variable">`</span>lsb_release <span class="token parameter variable">-cs</span><span class="token variable">`</span></span> nginx"</span> <span class="token punctuation">\</span>
    <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/nginx.list

<span class="token comment"># 5. 设置仓库优先级，优先使⽤Nginx官⽅仓库</span>

<span class="token comment"># 6. 安装nginx</span>
<span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> nginx

<span class="token comment"># 7. 验证安装</span>

<span class="token function">sudo</span> nginx
<span class="token function">curl</span> <span class="token parameter variable">-I</span> <span class="token number">127.0</span>.0.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2>
<ul>
<li>
<p><code v-pre>nginx</code> : 启动Nginx</p>
</li>
<li>
<p><code v-pre>nginx -c filename</code> : 指定配置⽂件</p>
</li>
<li>
<p><code v-pre>nginx -V</code> : 查看Nginx的版本和编译参数等信息</p>
</li>
<li>
<p><code v-pre>nginx -t</code> : 检查配置⽂件是否正确，也可⽤来定位配置⽂件的位置</p>
</li>
<li>
<p><code v-pre>nginx -s quit</code> : 优雅停⽌Nginx</p>
</li>
<li>
<p><code v-pre>nginx -s stop</code> : 快速停⽌Nginx</p>
</li>
<li>
<p><code v-pre>nginx -s reload</code> : 重新加载配置⽂件</p>
</li>
<li>
<p><code v-pre>nginx -s reopen</code> : 重新打开⽇志⽂件</p>
</li>
<li>
<p><code v-pre>ps -ef|grep nginx</code> : 查看进程</p>
</li>
</ul>
<h2 id="进程模型" tabindex="-1"><a class="header-anchor" href="#进程模型" aria-hidden="true">#</a> 进程模型</h2>
<ul>
<li>master:读取和验证配置文件以及管理worker进程</li>
<li>worker:nginx工作进程,处理nginx的实际请求</li>
</ul>
<p>master实现对worker的控制</p>
<h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2>
<p>Nginx的配置⽂件是 nginx.conf ，⼀般位于 /etc/nginx/nginx.conf 。
可以使⽤ nginx -t 来查看配置⽂件的位置和检查配置⽂件是否正确</p>
<p>Nginx的配置⽂件是由⼀系列的指令组成的，每个指令都是由⼀个指令名和⼀个或者多个参数
组成的。</p>
<p>指令和参数之间使⽤空格来分隔，指令以分号 ; 结尾，参数可以使⽤单引号或者双引号来包
裹</p>
<div class="language-txt line-numbers-mode" data-ext="txt"><pre v-pre class="language-txt"><code># 全局配置

worker_processes 1

events {
  # events配置
}
http {
  
  # http配置
  
  server {
  
   # server配置
  
    location / {

      # location配置
  
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局配置" tabindex="-1"><a class="header-anchor" href="#全局配置" aria-hidden="true">#</a> 全局配置</h3>
<p>全局块是配置⽂件的第⼀个块，也是配置⽂件的主体部分，主要⽤来设置⼀些影响Nginx服务
器整体运⾏的配置指令，主要包括配置运⾏Nginx服务器的⽤户（组）、允许⽣成的worker
process数、进程PID存放路径、⽇志存放路径和类型以及配置⽂件引⼊等</p>
<div class="language-txt line-numbers-mode" data-ext="txt"><pre v-pre class="language-txt"><code># 指定运⾏Nginx服务器的⽤户，只能在全局块配置
# 将user指令注释掉，或者配置成nobody的话所有⽤户都可以运⾏
# user [user] [group]
# user nobody nobody;
user nginx;
# 指定⽣成的worker进程的数量，也可使⽤⾃动模式，只能在全局块配置
worker_processes 1;
# 错误⽇志存放路径和类型
error_log /var/log/nginx/error.log warn;
# 进程PID存放路径
pid /var/run/nginx.pid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="events配置" tabindex="-1"><a class="header-anchor" href="#events配置" aria-hidden="true">#</a> events配置</h3>
<div class="language-txt line-numbers-mode" data-ext="txt"><pre v-pre class="language-txt"><code>events {
# 指定使⽤哪种⽹络IO模型，只能在events块中进⾏配置
# use epoll
# 每个worker process允许的最⼤连接数
 worker_connections 1024;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="http配置" tabindex="-1"><a class="header-anchor" href="#http配置" aria-hidden="true">#</a> http配置</h3>
<p>http块是配置⽂件的主要部分，包括http全局块和server</p>
<div class="language-txt line-numbers-mode" data-ext="txt"><pre v-pre class="language-txt"><code>http {
# nginx 可以使⽤include指令引⼊其他配置⽂件
 include /etc/nginx/mime.types;
# 默认类型，如果请求的URL没有包含⽂件类型，会使⽤默认类型
 default_type application/octet-stream; # 默认类型
# 开启⾼效⽂件传输模式
 sendfile on;
# 连接超时时间
 keepalive_timeout 65;
# access_log ⽇志存放路径和类型
# 格式为：access_log &lt;path> [format [buffer=size] [gzip[=level]]
[flush=time] [if=condition]];
 access_log /var/log/nginx/access.log main;
# 定义⽇志格式
 log_format main '$remote_addr - $remote_user [$time_local]
"$request" '
'$status $body_bytes_sent "$http_referer" '
'"$http_user_agent" "$http_x_forwarded_for"';
# 设置sendfile最⼤传输⽚段⼤⼩，默认为0，表示不限制
# sendfile_max_chunk 1m;
# 每个连接的请求次数
# keepalive_requests 100;
# keepalive超时时间
 keepalive_timeout 65;
# 开启gzip压缩
# gzip on;
# 开启gzip压缩的最⼩⽂件⼤⼩
# gzip_min_length 1k;
# gzip压缩级别，1-9，级别越⾼压缩率越⾼，但是消耗CPU资源也越多
# gzip_comp_level 2;
# gzip压缩⽂件类型
# gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
# upstream指令⽤于定义⼀组服务器，⼀般⽤来配置反向代理和负载均衡
 upstream www.example.com {
# ip_hash指令⽤于设置负载均衡的⽅式，ip_hash表示使⽤客户端的IP进⾏hash，
这样可以保证同⼀个客户端的请求每次都会分配到同⼀个服务器，解决了session共享的问题
 ip_hash;
# weight ⽤于设置权重，权重越⾼被分配到的⼏率越⼤
 server 192.168.50.11:80 weight=3;
 server 192.168.50.12:80;
 server 192.168.50.13:80;
 }
erver {
# 参考server配置
 }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="server配置" tabindex="-1"><a class="header-anchor" href="#server配置" aria-hidden="true">#</a> server配置</h3>
<p>server块是配置虚拟主机的，⼀个http块可以包含多个server块，每个server块就是⼀个虚拟主机</p>
<div class="language-txt line-numbers-mode" data-ext="txt"><pre v-pre class="language-txt"><code>server {
# 监听IP和端⼝
# listen的格式为：
# listen [ip]:port [default_server] [ssl] [http2] [spdy]
[proxy_protocol] [setfib=number] [fastopen=number] [backlog=number];
# listen指令⾮常灵活，可以指定多个IP和端⼝，也可以使⽤通配符
# 下⾯是⼏个实际的例⼦：
# listen 127.0.0.1:80; # 监听来⾃127.0.0.1的80端⼝的请求
# listen 80; # 监听来⾃所有IP的80端⼝的请求
# listen *:80; # 监听来⾃所有IP的80端⼝的请求，同上
# listen 127.0.0.1; # 监听来⾃来⾃127.0.0.1的80端⼝，默认端⼝为80
 listen 80;
# server_name ⽤来指定虚拟主机的域名，可以使⽤精确匹配、通配符匹配和正则匹配等
⽅式
# server_name example.org www.example.org; # 精确匹配
# server_name *.example.org; # 通配符匹配
# server_name ~^www\d+\.example\.net$; # 正则匹配
 server_name localhost;
# location块⽤来配置请求的路由，⼀个server块可以包含多个location块，每个
location块就是⼀个请求路由
# location块的格式是：
# location [=|~|~*|^~] /uri/ { ... }
# = 表示精确匹配，只有完全匹配上才能⽣效
# ~ 表示区分⼤⼩写的正则匹配
# ~* 表示不区分⼤⼩写的正则匹配
# ^~ 表示普通字符匹配，如果匹配成功，则不再匹配其他location
# /uri/ 表示请求的URI，可以是字符串，也可以是正则表达式
# { ... } 表示location块的配置内容
 location / {
# root指令⽤于指定请求的根⽬录，可以是绝对路径，也可以是相对路径
 root /usr/share/nginx/html; # 根⽬录
# index指令⽤于指定默认⽂件，如果请求的是⽬录，则会在⽬录下查找默认⽂件
 index index.html index.htm; # 默认⽂件
 }
# 下⾯是⼀些location的示例：
 location = / { # 精确匹配请求
 root /usr/share/nginx/html;
 index index.html index.htm;
 }
 location ^~ /images/ { # 匹配以/images/开头的请求
 root /usr/share/nginx/html;
 }
 location ~* \.(gif|jpg|jpeg)$ { # 匹配以gif、jpg或者jpeg结尾的请求
 root /usr/share/nginx/html;
 }
 location !~ \.(gif|jpg|jpeg)$ { # 不匹配以gif、jpg或者jpeg结尾的请求
 root /usr/share/nginx/html;
 }
 location !~* \.(gif|jpg|jpeg)$ { # 不匹配以gif、jpg或者jpeg结尾的请求
 root /usr/share/nginx/html;
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反向代理和负载均衡" tabindex="-1"><a class="header-anchor" href="#反向代理和负载均衡" aria-hidden="true">#</a> 反向代理和负载均衡</h2>
<p>正向代理代理客户端</p>
<p>反向代理代理服务端
客户端访问一个网站时访问域名,域名分发到不同服务器上</p>
<blockquote>
<p>Nginx官方文档
https://nginx.org/en/docs/</p>
</blockquote>
</div></template>


