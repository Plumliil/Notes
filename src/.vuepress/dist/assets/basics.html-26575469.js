import{_ as l,W as e,X as i,Z as s,$ as n,a0 as p,a1 as c,C as o}from"./framework-b3a1bbcf.js";const r={},b=c(`<h1 id="基础篇" tabindex="-1"><a class="header-anchor" href="#基础篇" aria-hidden="true">#</a> 基础篇</h1><p>nginx的出现是为了解决C10K(10000 concurrent connection 同时处理一万个并发连接)的问题</p><h2 id="nginx安装" tabindex="-1"><a class="header-anchor" href="#nginx安装" aria-hidden="true">#</a> nginx安装</h2><p>以ubuntu为例</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 1.安装前置依赖</span></span>
<span class="line"><span style="color:#ABB2BF;">sudo </span><span style="color:#98C379;">apt</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">install</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">curl</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">gnupg2</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">ca-certificates</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">lsb-release</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">ubuntu-keyring</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 2.导入官方密钥</span></span>
<span class="line"><span style="color:#ABB2BF;">curl </span><span style="color:#98C379;">https://nginx.org/keys/nginx_signing.key</span><span style="color:#ABB2BF;"> | gpg </span><span style="color:#D19A66;">--dearmor</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#ABB2BF;">    | sudo </span><span style="color:#98C379;">tee</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">/usr/share/keyrings/nginx-archive-keyring.gpg</span><span style="color:#ABB2BF;"> &gt;</span><span style="color:#98C379;">/dev/null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 3.验证下载文件中是否包含了正确的密钥</span></span>
<span class="line"><span style="color:#ABB2BF;">gpg </span><span style="color:#D19A66;">--dry-run</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--quiet</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--no-keyring</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--import</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--import-options</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">import-show</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">/usr/share/keyrings/nginx-archive-keyring.gpg</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 4. 设置稳定版或者主线版的Nginx包</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 稳定版</span></span>
<span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] </span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#98C379;">http://nginx.org/packages/ubuntu \`lsb_release </span><span style="color:#D19A66;">-cs</span><span style="color:#98C379;">\` nginx&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#ABB2BF;">    | sudo </span><span style="color:#98C379;">tee</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">/etc/apt/sources.list.d/nginx.list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 主线版</span></span>
<span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] </span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#98C379;">http://nginx.org/packages/mainline/ubuntu \`lsb_release </span><span style="color:#D19A66;">-cs</span><span style="color:#98C379;">\` nginx&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">\\</span></span>
<span class="line"><span style="color:#ABB2BF;">    | sudo </span><span style="color:#98C379;">tee</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">/etc/apt/sources.list.d/nginx.list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 5. 设置仓库优先级，优先使⽤Nginx官⽅仓库</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 6. 安装nginx</span></span>
<span class="line"><span style="color:#ABB2BF;">sudo </span><span style="color:#98C379;">apt</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">update</span></span>
<span class="line"><span style="color:#ABB2BF;">sudo </span><span style="color:#98C379;">apt</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">install</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 7. 验证安装</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">sudo </span><span style="color:#98C379;">nginx</span></span>
<span class="line"><span style="color:#ABB2BF;">curl </span><span style="color:#D19A66;">-I</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">127.0.0.</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><ul><li><p><code>nginx</code> : 启动Nginx</p></li><li><p><code>nginx -c filename</code> : 指定配置⽂件</p></li><li><p><code>nginx -V</code> : 查看Nginx的版本和编译参数等信息</p></li><li><p><code>nginx -t</code> : 检查配置⽂件是否正确，也可⽤来定位配置⽂件的位置</p></li><li><p><code>nginx -s quit</code> : 优雅停⽌Nginx</p></li><li><p><code>nginx -s stop</code> : 快速停⽌Nginx</p></li><li><p><code>nginx -s reload</code> : 重新加载配置⽂件</p></li><li><p><code>nginx -s reopen</code> : 重新打开⽇志⽂件</p></li><li><p><code>ps -ef|grep nginx</code> : 查看进程</p></li></ul><h2 id="进程模型" tabindex="-1"><a class="header-anchor" href="#进程模型" aria-hidden="true">#</a> 进程模型</h2><ul><li>master:读取和验证配置文件以及管理worker进程</li><li>worker:nginx工作进程,处理nginx的实际请求</li></ul><p>master实现对worker的控制</p><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><p>Nginx的配置⽂件是 nginx.conf ，⼀般位于 /etc/nginx/nginx.conf 。 可以使⽤ nginx -t 来查看配置⽂件的位置和检查配置⽂件是否正确</p><p>Nginx的配置⽂件是由⼀系列的指令组成的，每个指令都是由⼀个指令名和⼀个或者多个参数 组成的。</p><p>指令和参数之间使⽤空格来分隔，指令以分号 ; 结尾，参数可以使⽤单引号或者双引号来包 裹</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;"># 全局配置</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">worker_processes 1</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">events {</span></span>
<span class="line"><span style="color:#abb2bf;">  # events配置</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;">http {</span></span>
<span class="line"><span style="color:#abb2bf;">  </span></span>
<span class="line"><span style="color:#abb2bf;">  # http配置</span></span>
<span class="line"><span style="color:#abb2bf;">  </span></span>
<span class="line"><span style="color:#abb2bf;">  server {</span></span>
<span class="line"><span style="color:#abb2bf;">  </span></span>
<span class="line"><span style="color:#abb2bf;">   # server配置</span></span>
<span class="line"><span style="color:#abb2bf;">  </span></span>
<span class="line"><span style="color:#abb2bf;">    location / {</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">      # location配置</span></span>
<span class="line"><span style="color:#abb2bf;">  </span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;">  }</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局配置" tabindex="-1"><a class="header-anchor" href="#全局配置" aria-hidden="true">#</a> 全局配置</h3><p>全局块是配置⽂件的第⼀个块，也是配置⽂件的主体部分，主要⽤来设置⼀些影响Nginx服务 器整体运⾏的配置指令，主要包括配置运⾏Nginx服务器的⽤户（组）、允许⽣成的worker process数、进程PID存放路径、⽇志存放路径和类型以及配置⽂件引⼊等</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;"># 指定运⾏Nginx服务器的⽤户，只能在全局块配置</span></span>
<span class="line"><span style="color:#abb2bf;"># 将user指令注释掉，或者配置成nobody的话所有⽤户都可以运⾏</span></span>
<span class="line"><span style="color:#abb2bf;"># user [user] [group]</span></span>
<span class="line"><span style="color:#abb2bf;"># user nobody nobody;</span></span>
<span class="line"><span style="color:#abb2bf;">user nginx;</span></span>
<span class="line"><span style="color:#abb2bf;"># 指定⽣成的worker进程的数量，也可使⽤⾃动模式，只能在全局块配置</span></span>
<span class="line"><span style="color:#abb2bf;">worker_processes 1;</span></span>
<span class="line"><span style="color:#abb2bf;"># 错误⽇志存放路径和类型</span></span>
<span class="line"><span style="color:#abb2bf;">error_log /var/log/nginx/error.log warn;</span></span>
<span class="line"><span style="color:#abb2bf;"># 进程PID存放路径</span></span>
<span class="line"><span style="color:#abb2bf;">pid /var/run/nginx.pid</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="events配置" tabindex="-1"><a class="header-anchor" href="#events配置" aria-hidden="true">#</a> events配置</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">events {</span></span>
<span class="line"><span style="color:#abb2bf;"># 指定使⽤哪种⽹络IO模型，只能在events块中进⾏配置</span></span>
<span class="line"><span style="color:#abb2bf;"># use epoll</span></span>
<span class="line"><span style="color:#abb2bf;"># 每个worker process允许的最⼤连接数</span></span>
<span class="line"><span style="color:#abb2bf;"> worker_connections 1024;</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="http配置" tabindex="-1"><a class="header-anchor" href="#http配置" aria-hidden="true">#</a> http配置</h3><p>http块是配置⽂件的主要部分，包括http全局块和server</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">http {</span></span>
<span class="line"><span style="color:#abb2bf;"># nginx 可以使⽤include指令引⼊其他配置⽂件</span></span>
<span class="line"><span style="color:#abb2bf;"> include /etc/nginx/mime.types;</span></span>
<span class="line"><span style="color:#abb2bf;"># 默认类型，如果请求的URL没有包含⽂件类型，会使⽤默认类型</span></span>
<span class="line"><span style="color:#abb2bf;"> default_type application/octet-stream; # 默认类型</span></span>
<span class="line"><span style="color:#abb2bf;"># 开启⾼效⽂件传输模式</span></span>
<span class="line"><span style="color:#abb2bf;"> sendfile on;</span></span>
<span class="line"><span style="color:#abb2bf;"># 连接超时时间</span></span>
<span class="line"><span style="color:#abb2bf;"> keepalive_timeout 65;</span></span>
<span class="line"><span style="color:#abb2bf;"># access_log ⽇志存放路径和类型</span></span>
<span class="line"><span style="color:#abb2bf;"># 格式为：access_log &lt;path&gt; [format [buffer=size] [gzip[=level]]</span></span>
<span class="line"><span style="color:#abb2bf;">[flush=time] [if=condition]];</span></span>
<span class="line"><span style="color:#abb2bf;"> access_log /var/log/nginx/access.log main;</span></span>
<span class="line"><span style="color:#abb2bf;"># 定义⽇志格式</span></span>
<span class="line"><span style="color:#abb2bf;"> log_format main &#39;$remote_addr - $remote_user [$time_local]</span></span>
<span class="line"><span style="color:#abb2bf;">&quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#abb2bf;">&#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#abb2bf;">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span style="color:#abb2bf;"># 设置sendfile最⼤传输⽚段⼤⼩，默认为0，表示不限制</span></span>
<span class="line"><span style="color:#abb2bf;"># sendfile_max_chunk 1m;</span></span>
<span class="line"><span style="color:#abb2bf;"># 每个连接的请求次数</span></span>
<span class="line"><span style="color:#abb2bf;"># keepalive_requests 100;</span></span>
<span class="line"><span style="color:#abb2bf;"># keepalive超时时间</span></span>
<span class="line"><span style="color:#abb2bf;"> keepalive_timeout 65;</span></span>
<span class="line"><span style="color:#abb2bf;"># 开启gzip压缩</span></span>
<span class="line"><span style="color:#abb2bf;"># gzip on;</span></span>
<span class="line"><span style="color:#abb2bf;"># 开启gzip压缩的最⼩⽂件⼤⼩</span></span>
<span class="line"><span style="color:#abb2bf;"># gzip_min_length 1k;</span></span>
<span class="line"><span style="color:#abb2bf;"># gzip压缩级别，1-9，级别越⾼压缩率越⾼，但是消耗CPU资源也越多</span></span>
<span class="line"><span style="color:#abb2bf;"># gzip_comp_level 2;</span></span>
<span class="line"><span style="color:#abb2bf;"># gzip压缩⽂件类型</span></span>
<span class="line"><span style="color:#abb2bf;"># gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;</span></span>
<span class="line"><span style="color:#abb2bf;"># upstream指令⽤于定义⼀组服务器，⼀般⽤来配置反向代理和负载均衡</span></span>
<span class="line"><span style="color:#abb2bf;"> upstream www.example.com {</span></span>
<span class="line"><span style="color:#abb2bf;"># ip_hash指令⽤于设置负载均衡的⽅式，ip_hash表示使⽤客户端的IP进⾏hash，</span></span>
<span class="line"><span style="color:#abb2bf;">这样可以保证同⼀个客户端的请求每次都会分配到同⼀个服务器，解决了session共享的问题</span></span>
<span class="line"><span style="color:#abb2bf;"> ip_hash;</span></span>
<span class="line"><span style="color:#abb2bf;"># weight ⽤于设置权重，权重越⾼被分配到的⼏率越⼤</span></span>
<span class="line"><span style="color:#abb2bf;"> server 192.168.50.11:80 weight=3;</span></span>
<span class="line"><span style="color:#abb2bf;"> server 192.168.50.12:80;</span></span>
<span class="line"><span style="color:#abb2bf;"> server 192.168.50.13:80;</span></span>
<span class="line"><span style="color:#abb2bf;"> }</span></span>
<span class="line"><span style="color:#abb2bf;">erver {</span></span>
<span class="line"><span style="color:#abb2bf;"># 参考server配置</span></span>
<span class="line"><span style="color:#abb2bf;"> }</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="server配置" tabindex="-1"><a class="header-anchor" href="#server配置" aria-hidden="true">#</a> server配置</h3><p>server块是配置虚拟主机的，⼀个http块可以包含多个server块，每个server块就是⼀个虚拟主机</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">server {</span></span>
<span class="line"><span style="color:#abb2bf;"># 监听IP和端⼝</span></span>
<span class="line"><span style="color:#abb2bf;"># listen的格式为：</span></span>
<span class="line"><span style="color:#abb2bf;"># listen [ip]:port [default_server] [ssl] [http2] [spdy]</span></span>
<span class="line"><span style="color:#abb2bf;">[proxy_protocol] [setfib=number] [fastopen=number] [backlog=number];</span></span>
<span class="line"><span style="color:#abb2bf;"># listen指令⾮常灵活，可以指定多个IP和端⼝，也可以使⽤通配符</span></span>
<span class="line"><span style="color:#abb2bf;"># 下⾯是⼏个实际的例⼦：</span></span>
<span class="line"><span style="color:#abb2bf;"># listen 127.0.0.1:80; # 监听来⾃127.0.0.1的80端⼝的请求</span></span>
<span class="line"><span style="color:#abb2bf;"># listen 80; # 监听来⾃所有IP的80端⼝的请求</span></span>
<span class="line"><span style="color:#abb2bf;"># listen *:80; # 监听来⾃所有IP的80端⼝的请求，同上</span></span>
<span class="line"><span style="color:#abb2bf;"># listen 127.0.0.1; # 监听来⾃来⾃127.0.0.1的80端⼝，默认端⼝为80</span></span>
<span class="line"><span style="color:#abb2bf;"> listen 80;</span></span>
<span class="line"><span style="color:#abb2bf;"># server_name ⽤来指定虚拟主机的域名，可以使⽤精确匹配、通配符匹配和正则匹配等</span></span>
<span class="line"><span style="color:#abb2bf;">⽅式</span></span>
<span class="line"><span style="color:#abb2bf;"># server_name example.org www.example.org; # 精确匹配</span></span>
<span class="line"><span style="color:#abb2bf;"># server_name *.example.org; # 通配符匹配</span></span>
<span class="line"><span style="color:#abb2bf;"># server_name ~^www\\d+\\.example\\.net$; # 正则匹配</span></span>
<span class="line"><span style="color:#abb2bf;"> server_name localhost;</span></span>
<span class="line"><span style="color:#abb2bf;"># location块⽤来配置请求的路由，⼀个server块可以包含多个location块，每个</span></span>
<span class="line"><span style="color:#abb2bf;">location块就是⼀个请求路由</span></span>
<span class="line"><span style="color:#abb2bf;"># location块的格式是：</span></span>
<span class="line"><span style="color:#abb2bf;"># location [=|~|~*|^~] /uri/ { ... }</span></span>
<span class="line"><span style="color:#abb2bf;"># = 表示精确匹配，只有完全匹配上才能⽣效</span></span>
<span class="line"><span style="color:#abb2bf;"># ~ 表示区分⼤⼩写的正则匹配</span></span>
<span class="line"><span style="color:#abb2bf;"># ~* 表示不区分⼤⼩写的正则匹配</span></span>
<span class="line"><span style="color:#abb2bf;"># ^~ 表示普通字符匹配，如果匹配成功，则不再匹配其他location</span></span>
<span class="line"><span style="color:#abb2bf;"># /uri/ 表示请求的URI，可以是字符串，也可以是正则表达式</span></span>
<span class="line"><span style="color:#abb2bf;"># { ... } 表示location块的配置内容</span></span>
<span class="line"><span style="color:#abb2bf;"> location / {</span></span>
<span class="line"><span style="color:#abb2bf;"># root指令⽤于指定请求的根⽬录，可以是绝对路径，也可以是相对路径</span></span>
<span class="line"><span style="color:#abb2bf;"> root /usr/share/nginx/html; # 根⽬录</span></span>
<span class="line"><span style="color:#abb2bf;"># index指令⽤于指定默认⽂件，如果请求的是⽬录，则会在⽬录下查找默认⽂件</span></span>
<span class="line"><span style="color:#abb2bf;"> index index.html index.htm; # 默认⽂件</span></span>
<span class="line"><span style="color:#abb2bf;"> }</span></span>
<span class="line"><span style="color:#abb2bf;"># 下⾯是⼀些location的示例：</span></span>
<span class="line"><span style="color:#abb2bf;"> location = / { # 精确匹配请求</span></span>
<span class="line"><span style="color:#abb2bf;"> root /usr/share/nginx/html;</span></span>
<span class="line"><span style="color:#abb2bf;"> index index.html index.htm;</span></span>
<span class="line"><span style="color:#abb2bf;"> }</span></span>
<span class="line"><span style="color:#abb2bf;"> location ^~ /images/ { # 匹配以/images/开头的请求</span></span>
<span class="line"><span style="color:#abb2bf;"> root /usr/share/nginx/html;</span></span>
<span class="line"><span style="color:#abb2bf;"> }</span></span>
<span class="line"><span style="color:#abb2bf;"> location ~* \\.(gif|jpg|jpeg)$ { # 匹配以gif、jpg或者jpeg结尾的请求</span></span>
<span class="line"><span style="color:#abb2bf;"> root /usr/share/nginx/html;</span></span>
<span class="line"><span style="color:#abb2bf;"> }</span></span>
<span class="line"><span style="color:#abb2bf;"> location !~ \\.(gif|jpg|jpeg)$ { # 不匹配以gif、jpg或者jpeg结尾的请求</span></span>
<span class="line"><span style="color:#abb2bf;"> root /usr/share/nginx/html;</span></span>
<span class="line"><span style="color:#abb2bf;"> }</span></span>
<span class="line"><span style="color:#abb2bf;"> location !~* \\.(gif|jpg|jpeg)$ { # 不匹配以gif、jpg或者jpeg结尾的请求</span></span>
<span class="line"><span style="color:#abb2bf;"> root /usr/share/nginx/html;</span></span>
<span class="line"><span style="color:#abb2bf;"> }</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反向代理和负载均衡" tabindex="-1"><a class="header-anchor" href="#反向代理和负载均衡" aria-hidden="true">#</a> 反向代理和负载均衡</h2><p>正向代理代理客户端</p><p>反向代理代理服务端 客户端访问一个网站时访问域名,域名分发到不同服务器上</p>`,29),t={href:"https://nginx.org/en/docs/",target:"_blank",rel:"noopener noreferrer"};function d(v,u){const a=o("ExternalLinkIcon");return e(),i("div",null,[b,s("blockquote",null,[s("p",null,[n("Nginx官方文档 "),s("a",t,[n("https://nginx.org/en/docs/"),p(a)])])])])}const m=l(r,[["render",d],["__file","basics.html.vue"]]);export{m as default};
