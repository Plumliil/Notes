# 基础篇

nginx的出现是为了解决C10K(10000 concurrent connection 同时处理一万个并发连接)的问题

## nginx安装

以ubuntu为例

```shell
# 1.安装前置依赖
sudo apt install curl gnupg2 ca-certificates lsb-release ubuntu-keyring

# 2.导入官方密钥
curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor \
    | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg >/dev/null

# 3.验证下载文件中是否包含了正确的密钥
gpg --dry-run --quiet --no-keyring --import --import-options import-show /usr/share/keyrings/nginx-archive-keyring.gpg

# 4. 设置稳定版或者主线版的Nginx包

# 稳定版
echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] \
http://nginx.org/packages/ubuntu `lsb_release -cs` nginx" \
    | sudo tee /etc/apt/sources.list.d/nginx.list

# 主线版
echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] \
http://nginx.org/packages/mainline/ubuntu `lsb_release -cs` nginx" \
    | sudo tee /etc/apt/sources.list.d/nginx.list

# 5. 设置仓库优先级，优先使⽤Nginx官⽅仓库

# 6. 安装nginx
sudo apt update
sudo apt install nginx

# 7. 验证安装

sudo nginx
curl -I 127.0.0.

```
## 常用命令

- `nginx` : 启动Nginx
- `nginx -c filename` : 指定配置⽂件
- `nginx -V` : 查看Nginx的版本和编译参数等信息
- `nginx -t` : 检查配置⽂件是否正确，也可⽤来定位配置⽂件的位置
- `nginx -s quit` : 优雅停⽌Nginx
- `nginx -s stop` : 快速停⽌Nginx
- `nginx -s reload` : 重新加载配置⽂件
- `nginx -s reopen` : 重新打开⽇志⽂件

- `ps -ef|grep nginx` : 查看进程


## 进程模型

- master:读取和验证配置文件以及管理worker进程
- worker:nginx工作进程,处理nginx的实际请求

master实现对worker的控制


## 配置文件

Nginx的配置⽂件是 nginx.conf ，⼀般位于 /etc/nginx/nginx.conf 。
可以使⽤ nginx -t 来查看配置⽂件的位置和检查配置⽂件是否正确

Nginx的配置⽂件是由⼀系列的指令组成的，每个指令都是由⼀个指令名和⼀个或者多个参数
组成的。

指令和参数之间使⽤空格来分隔，指令以分号 ; 结尾，参数可以使⽤单引号或者双引号来包
裹

```yml
# 全局配置
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

```

### 全局配置

全局块是配置⽂件的第⼀个块，也是配置⽂件的主体部分，主要⽤来设置⼀些影响Nginx服务
器整体运⾏的配置指令，主要包括配置运⾏Nginx服务器的⽤户（组）、允许⽣成的worker
process数、进程PID存放路径、⽇志存放路径和类型以及配置⽂件引⼊等

```yml
# 指定运⾏Nginx服务器的⽤户，只能在全局块配置
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
```
### events配置

```yml
events {
# 指定使⽤哪种⽹络IO模型，只能在events块中进⾏配置
# use epoll
# 每个worker process允许的最⼤连接数
 worker_connections 1024;
}
```

### http配置

http块是配置⽂件的主要部分，包括http全局块和server

```yml
http {
# nginx 可以使⽤include指令引⼊其他配置⽂件
 include /etc/nginx/mime.types;
# 默认类型，如果请求的URL没有包含⽂件类型，会使⽤默认类型
 default_type application/octet-stream; # 默认类型
# 开启⾼效⽂件传输模式
 sendfile on;
# 连接超时时间
 keepalive_timeout 65;
# access_log ⽇志存放路径和类型
# 格式为：access_log <path> [format [buffer=size] [gzip[=level]]
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
```
### server配置
server块是配置虚拟主机的，⼀个http块可以包含多个server块，每个server块就是⼀个虚拟主机

```yml
server {
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
# server_name ⽤来指定虚拟主机的域名，可以使⽤精确匹配、通配符匹配和正则匹配等⽅式
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
```

## 反向代理和负载均衡

正向代理代理客户端

反向代理代理服务端
客户端访问一个网站时访问域名,域名分发到不同服务器上

### 反向代理
反向代理服务器是一个位于客户端和后端服务器之间的服务器。客户端发送请求到反向代理服务器，然后反向代理服务器将请求转发到后端服务器并将响应返回给客户端。

### 负载均衡
负载均衡器分配传入的网络流量到多个后端服务器（也称为上游服务器），以确保不单个服务器过载并优化资源使用。

配置示例

```yml
http {
    upstream backend_servers_1 {
        # 定义上游服务器池
        server 192.168.1.101:8080;
        server 192.168.1.102:8080;
        server 192.168.1.103:8080;
    }
    
    upstream backend_servers_2 {
        # 定义上游服务器池
        server 192.168.1.101:8080;
        server 192.168.1.102:8080;
        server 192.168.1.103:8080;
    }

    server {
        listen 80;
        server_name example.com;

        location / {
            proxy_pass http://backend_servers_1; # 将请求转发到上游服务器池
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
        location /api/ {
            proxy_pass http://backend_servers_2; # 将请求转发到上游服务器池
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        # 处理静态文件请求
        location /static {
            root /var/www/html;
        }

        error_page 500 502 503 504 /50x.html;
        location = /50x.html {
            root /var/www/html;
        }
    }
}
```


### 负载均衡策略
Nginx支持多种负载均衡策略，可以通过在 upstream 块中配置来实现。

#### 1. 轮询（Round Robin）
默认策略，依次将请求分配给每个服务器。

```yml
upstream backend_servers {
    server 192.168.1.101:8080;
    server 192.168.1.102:8080;
    server 192.168.1.103:8080;
}
```
#### 2. 最少连接数（Least Connections）
将请求分配给当前连接数最少的服务器。
```yml
upstream backend_servers {
    least_conn;
    server 192.168.1.101:8080;
    server 192.168.1.102:8080;
    server 192.168.1.103:8080;
}
```

#### 3. IP哈希（IP Hash）
基于客户端IP地址的哈希值分配请求，确保同一客户端的请求总是被分配到同一台服务器（用于会话保持）。

```yml
upstream backend_servers {
    ip_hash;
    server 192.168.1.101:8080;
    server 192.168.1.102:8080;
    server 192.168.1.103:8080;
}
```


#### 4. 加权轮询（Weighted Round Robin）
为每台服务器分配权重，根据权重比例分配请求。


```yml
upstream backend_servers {
    server 192.168.1.101:8080 weight=3;
    server 192.168.1.102:8080 weight=1;
    server 192.168.1.103:8080 weight=2;
}
```

#### 注释
- proxy_set_header Host $host;: 设置 Host 头。
- proxy_set_header X-Real-IP $remote_addr;: 设置 X-Real-IP 头，以便后端服务器可以获取客户端的真实IP地址。
- proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;: 设置 X-Forwarded-For 头，用于记录客户端IP地址。
- proxy_set_header X-Forwarded-Proto $scheme;: 设置 X-Forwarded-Proto 头，以便后端服务器知道请求的协议（http 或 https）。


> Nginx官方文档
> https://nginx.org/en/docs/