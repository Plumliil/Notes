<template><div><h1 id="进阶篇" tabindex="-1"><a class="header-anchor" href="#进阶篇" aria-hidden="true">#</a> 进阶篇</h1>
<h2 id="springboot" tabindex="-1"><a class="header-anchor" href="#springboot" aria-hidden="true">#</a> SpringBoot</h2>
<h3 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h3>
<h4 id="起步依赖" tabindex="-1"><a class="header-anchor" href="#起步依赖" aria-hidden="true">#</a> 起步依赖</h4>
<p>本质上是一个maven坐标,整合了一整个功能所需要的所有坐标</p>
<h4 id="自动配置" tabindex="-1"><a class="header-anchor" href="#自动配置" aria-hidden="true">#</a> 自动配置</h4>
<p>遵循约定大于配置的原则,在boot程序启动后,一些bean对象会自动注入到ioc容器,不需要手动声明,简化开发</p>
<h4 id="其他特性" tabindex="-1"><a class="header-anchor" href="#其他特性" aria-hidden="true">#</a> 其他特性</h4>
<ul>
<li>内嵌的Tomcat,Jetty(无需配置WAR文件)</li>
<li>外部化配置</li>
<li>不需要XML配置(properties/yml)</li>
</ul>
<h3 id="入门" tabindex="-1"><a class="header-anchor" href="#入门" aria-hidden="true">#</a> 入门</h3>
<ul>
<li>创建Maven工程</li>
<li>导入spring-boot-start-web起步依赖</li>
<li>编写Controller</li>
<li>提供启动类</li>
</ul>
<p>Controller</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">package</span><span style="color: #E06C75"> </span><span style="color: #C678DD">com.example.javademo.controller</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">org.springframework.web.bind.annotation.RequestMapping</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">org.springframework.web.bind.annotation.RestController</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic">// Maven注解</span></span>
<span class="line"><span style="color: #ABB2BF">@</span><span style="color: #E5C07B">RestController</span></span>
<span class="line"><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">HelloController</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #ABB2BF">@</span><span style="color: #E5C07B">RequestMapping</span><span style="color: #E06C75">(</span><span style="color: #98C379">&quot;/hello&quot;</span><span style="color: #E06C75">)</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #E5C07B">String</span><span style="color: #61AFEF"> hello</span><span style="color: #ABB2BF">(){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;Hello World!&quot;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动类</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">package</span><span style="color: #E06C75"> </span><span style="color: #C678DD">com.example.javademo</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">org.springframework.boot.SpringApplication</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">org.springframework.boot.autoconfigure.SpringBootApplication</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">@</span><span style="color: #E5C07B">SpringBootApplication</span></span>
<span class="line"><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">javademoApplication</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">static</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> main</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF">[] </span><span style="color: #E06C75; font-style: italic">args</span><span style="color: #ABB2BF">)</span><span style="color: #61AFEF"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">SpringApplication</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">run</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">javademoApplication</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">class</span><span style="color: #ABB2BF">, args);</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h3>
<h4 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> properties</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">#多环境配置，测试，生产用不同的配置文件</span></span>
<span class="line"><span style="color: #ABB2BF">spring.profiles.active=</span><span style="color: #56B6C2">test</span></span>
<span class="line"><span style="color: #ABB2BF"> </span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#应用名称</span></span>
<span class="line"><span style="color: #ABB2BF">spring.application.name=apply</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#端口号</span></span>
<span class="line"><span style="color: #ABB2BF">server.port=8008</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># http</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#设定是否对object mapper也支持HATEOAS，默认为: true</span></span>
<span class="line"><span style="color: #ABB2BF">spring.hateoas.apply-to-primary-object-mapper</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#是否优先使用JSON mapper来转换.</span></span>
<span class="line"><span style="color: #ABB2BF">spring.http.converters.preferred-json-mapper</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#指定http请求和相应的Charset，默认: UTF-8</span></span>
<span class="line"><span style="color: #ABB2BF">spring.http.encoding.charset</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#是否开启http的编码支持，默认为true</span></span>
<span class="line"><span style="color: #ABB2BF">spring.http.encoding.enabled</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#是否强制对http请求和响应进行编码，默认为true</span></span>
<span class="line"><span style="color: #ABB2BF">spring.http.encoding.force</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 数据库连接配置</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">#描述数据源</span></span>
<span class="line"><span style="color: #ABB2BF">spring.datasource.url=</span></span>
<span class="line"><span style="color: #ABB2BF">spring.datasource.username=root</span></span>
<span class="line"><span style="color: #ABB2BF">spring.datasource.password=0000</span></span>
<span class="line"><span style="color: #ABB2BF">spring.datasource.driverClassName </span><span style="color: #98C379">=</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">com.mysql.cj.jdbc.Driver</span></span>
<span class="line"><span style="color: #ABB2BF">spring.datasource.</span><span style="color: #56B6C2">type</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">=</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">com.alibaba.druid.pool.DruidDataSource</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="yml" tabindex="-1"><a class="header-anchor" href="#yml" aria-hidden="true">#</a> yml</h4>
<h5 id="yml配置信息书写" tabindex="-1"><a class="header-anchor" href="#yml配置信息书写" aria-hidden="true">#</a> yml配置信息书写</h5>
<ul>
<li>值前边必须有空格作为分隔符</li>
<li>使用空格作为缩进表示层级关系,相同的层级左侧对齐</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">server:</span></span>
<span class="line"><span style="color: #ABB2BF">  port: </span><span style="color: #D19A66">8009</span></span>
<span class="line"><span style="color: #ABB2BF">  servlet:</span></span>
<span class="line"><span style="color: #ABB2BF">    context-path: </span><span style="color: #98C379">/start2</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="yaml配置信息的获取" tabindex="-1"><a class="header-anchor" href="#yaml配置信息的获取" aria-hidden="true">#</a> yaml配置信息的获取</h5>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">server:</span></span>
<span class="line"><span style="color: #ABB2BF">  port: </span><span style="color: #D19A66">8081</span></span>
<span class="line"><span style="color: #ABB2BF">user:</span></span>
<span class="line"><span style="color: #ABB2BF">  nickName: </span><span style="color: #98C379">张三</span></span>
<span class="line"><span style="color: #ABB2BF">  age: </span><span style="color: #D19A66">18</span></span>
<span class="line"><span style="color: #ABB2BF">  info: </span><span style="color: #98C379">我今年</span><span style="color: #ABB2BF">${user.age}</span><span style="color: #98C379">。</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@Value(&quot;${键名}&quot;)</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">package</span><span style="color: #E06C75"> </span><span style="color: #C678DD">com.example.javademo.service</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">org.springframework.boot.context.properties.ConfigurationProperties</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">org.springframework.stereotype.Component</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">@</span><span style="color: #E5C07B">Component</span></span>
<span class="line"><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">UserProperties</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #ABB2BF">@</span><span style="color: #E5C07B">Value</span><span style="color: #E06C75">(</span><span style="color: #98C379">&quot;${user.nickName}&quot;</span><span style="color: #E06C75">)</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">private</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">String</span><span style="color: #E06C75"> nickName</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #ABB2BF">@</span><span style="color: #E5C07B">Value</span><span style="color: #E06C75">(</span><span style="color: #98C379">&quot;${user.info}&quot;</span><span style="color: #E06C75">)</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">private</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">String</span><span style="color: #E06C75"> info</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #E5C07B">String</span><span style="color: #61AFEF"> getNickName</span><span style="color: #ABB2BF">()</span><span style="color: #61AFEF"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> nickName;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> setNickName</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">nickName</span><span style="color: #ABB2BF">)</span><span style="color: #61AFEF"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">nickName</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> nickName;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #E5C07B">String</span><span style="color: #61AFEF"> getInfo</span><span style="color: #ABB2BF">()</span><span style="color: #61AFEF"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> info;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> setInfo</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">info</span><span style="color: #ABB2BF">)</span><span style="color: #61AFEF"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">info</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> info;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@ConfigurationProperties(prefix = &quot;前缀&quot;)注解</p>
<ul>
<li>配文件前缀和prefix相同</li>
<li>配置文件中配置属性和类属性相同</li>
<li></li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">package</span><span style="color: #E06C75"> </span><span style="color: #C678DD">com.example.javademo.service</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">org.springframework.boot.context.properties.ConfigurationProperties</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">org.springframework.stereotype.Component</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">@</span><span style="color: #E5C07B">Component</span></span>
<span class="line"><span style="color: #ABB2BF">@</span><span style="color: #E5C07B">ConfigurationProperties</span><span style="color: #E06C75">(</span><span style="color: #D19A66">prefix</span><span style="color: #E06C75"> </span><span style="color: #56B6C2">=</span><span style="color: #E06C75"> </span><span style="color: #98C379">&quot;user&quot;</span><span style="color: #E06C75">)</span></span>
<span class="line"><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">UserProperties</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">private</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">String</span><span style="color: #E06C75"> nickName</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">private</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">String</span><span style="color: #E06C75"> info</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #E5C07B">String</span><span style="color: #61AFEF"> getNickName</span><span style="color: #ABB2BF">()</span><span style="color: #61AFEF"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> nickName;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> setNickName</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">nickName</span><span style="color: #ABB2BF">)</span><span style="color: #61AFEF"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">nickName</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> nickName;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #E5C07B">String</span><span style="color: #61AFEF"> getInfo</span><span style="color: #ABB2BF">()</span><span style="color: #61AFEF"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> info;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> setInfo</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">info</span><span style="color: #ABB2BF">)</span><span style="color: #61AFEF"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">info</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> info;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="比较" tabindex="-1"><a class="header-anchor" href="#比较" aria-hidden="true">#</a> 比较</h4>
<p>相较于properties,yaml配置文件层级更加清晰,更加关注配置的数据</p>
<h3 id="整合mybatis" tabindex="-1"><a class="header-anchor" href="#整合mybatis" aria-hidden="true">#</a> 整合MyBatis</h3>
<p>原先</p>
<ul>
<li>引入MyBatis依赖</li>
<li>SqlSessionFactoryBean</li>
<li>MapperScannerConfigurer</li>
<li>Datasource</li>
</ul>
<p>现在</p>
<h4 id="引入依赖-修改配置" tabindex="-1"><a class="header-anchor" href="#引入依赖-修改配置" aria-hidden="true">#</a> 引入依赖 修改配置</h4>
<p>pom.xml</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">&lt;!--		mysql驱动依赖--&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">		&lt;</span><span style="color: #E06C75">dependency</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">			&lt;</span><span style="color: #E06C75">groupId</span><span style="color: #ABB2BF">&gt;com.mysql&lt;/</span><span style="color: #E06C75">groupId</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">			&lt;</span><span style="color: #E06C75">artifactId</span><span style="color: #ABB2BF">&gt;mysql-connector-j&lt;/</span><span style="color: #E06C75">artifactId</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">		&lt;/</span><span style="color: #E06C75">dependency</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">&lt;!--		mybatis--&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">		&lt;</span><span style="color: #E06C75">dependency</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">			&lt;</span><span style="color: #E06C75">groupId</span><span style="color: #ABB2BF">&gt;org.mybatis.spring.boot&lt;/</span><span style="color: #E06C75">groupId</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">			&lt;</span><span style="color: #E06C75">artifactId</span><span style="color: #ABB2BF">&gt;mybatis-spring-boot-starter&lt;/</span><span style="color: #E06C75">artifactId</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">			&lt;</span><span style="color: #E06C75">version</span><span style="color: #ABB2BF">&gt;3.0.2&lt;/</span><span style="color: #E06C75">version</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">		&lt;/</span><span style="color: #E06C75">dependency</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>application.yml</p>
<div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #E06C75">spring</span><span style="color: #ABB2BF">:</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">datasource</span><span style="color: #ABB2BF">:</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">driver-class-name</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">com.mysql.cj.jdbc.Driver</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">url</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">jdbc:mysql://localhost:3306/mybatis</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">username</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">root</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">password</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">1234</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="编写业务代码" tabindex="-1"><a class="header-anchor" href="#编写业务代码" aria-hidden="true">#</a> 编写业务代码</h4>
<h5 id="controller" tabindex="-1"><a class="header-anchor" href="#controller" aria-hidden="true">#</a> controller</h5>
<p>UserController</p>
<p>处理关于用户（User）的HTTP请求</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">package</span><span style="color: #E06C75"> </span><span style="color: #C678DD">com.example.javademo.controller</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">com.example.javademo.pojo.User</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">com.example.javademo.service.UserService</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">org.springframework.beans.factory.annotation.Autowired</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">org.springframework.web.bind.annotation.RequestMapping</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">org.springframework.web.bind.annotation.RestController</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic">// 这个注解表示这个类是一个控制器类，并且其中的方法都会以 JSON 格式返回数据，相当于 @Controller 和 @ResponseBody 的组合。</span></span>
<span class="line"><span style="color: #ABB2BF">@</span><span style="color: #E5C07B">RestController</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">// 这里声明了一个名为 UserController 的类，其中有一个私有字段 userService，并通过 @Autowired 注解进行自动装配，即由 Spring 框架负责注入 UserService 的实例。</span></span>
<span class="line"><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">UserController</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #ABB2BF">@</span><span style="color: #E5C07B">Autowired</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">private</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">UserService</span><span style="color: #E06C75"> userService</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #7F848E; font-style: italic">// 这个方法使用了 @RequestMapping 注解，指定了处理的 HTTP 请求路径为 &quot;/findById&quot;。当有请求发送到这个路径时，Spring Boot 将调用 findById 方法。</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #ABB2BF">@</span><span style="color: #E5C07B">RequestMapping</span><span style="color: #E06C75">(</span><span style="color: #98C379">&quot;/findById&quot;</span><span style="color: #E06C75">)</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #E5C07B">User</span><span style="color: #61AFEF"> findById</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">Integer</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">id</span><span style="color: #ABB2BF">)</span><span style="color: #61AFEF"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #7F848E; font-style: italic">// 在方法内部，调用了 userService 的 findById 方法，该方法用于根据用户ID查询用户信息。然后，将查询结果（一个 User 对象）直接返回给客户端。</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">userService</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">findById</span><span style="color: #ABB2BF">(id);</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="mapper" tabindex="-1"><a class="header-anchor" href="#mapper" aria-hidden="true">#</a> mapper</h5>
<p>UserMapper</p>
<p>使用 MyBatis 注解方式定义的数据库映射接口（Mapper）</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">package</span><span style="color: #E06C75"> </span><span style="color: #C678DD">com.example.javademo.mapper</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">com.example.javademo.pojo.User</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">org.apache.ibatis.annotations.Mapper</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">org.apache.ibatis.annotations.Select</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">// 导入了 MyBatis 的 @Mapper 注解。这个注解用于告诉 MyBatis，这个接口是一个映射器接口，需要由 MyBatis 在运行时生成对应的实现类。</span></span>
<span class="line"><span style="color: #ABB2BF">@</span><span style="color: #E5C07B">Mapper</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">// 定义了一个名为 UserMapper 的接口。这个接口用于描述对用户表进行数据库操作的方法。</span></span>
<span class="line"><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">interface</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">UserMapper</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">// 使用了 MyBatis 的 @Select 注解，该注解用于声明一个查询操作。其中的 SQL 查询语句是直接写在注解中的。#{id} 是一个占位符，表示在运行时会使用实际的参数值替代。</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #ABB2BF">@</span><span style="color: #E5C07B">Select</span><span style="color: #E06C75">(</span><span style="color: #98C379">&quot;select * from my_table_user where id = #{id}&quot;</span><span style="color: #E06C75">)</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #7F848E; font-style: italic">// 定义了一个名为 findById 的方法，用于根据用户的ID查询用户信息。方法的返回类型是 User，表示返回的结果会映射为一个 User 对象。</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #E5C07B">User</span><span style="color: #61AFEF"> findById</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">Integer</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">id</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="pojo" tabindex="-1"><a class="header-anchor" href="#pojo" aria-hidden="true">#</a> pojo</h5>
<p>User</p>
<p>这个 User 类是一个简单的 Java Bean（POJO），用于封装用户的基本信息。通过提供 getter 和 setter 方法，以及一个构造方法，可以方便地获取和设置用户对象的属性。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">package</span><span style="color: #E06C75"> </span><span style="color: #C678DD">com.example.javademo.pojo</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">User</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">private</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Integer</span><span style="color: #E06C75"> id</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">private</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">String</span><span style="color: #E06C75"> name</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">private</span><span style="color: #E06C75"> </span><span style="color: #C678DD">short</span><span style="color: #E06C75"> age</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">private</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">String</span><span style="color: #E06C75"> gender</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #E5C07B">Integer</span><span style="color: #61AFEF"> getId</span><span style="color: #ABB2BF">()</span><span style="color: #61AFEF"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> id;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> setId</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">Integer</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">id</span><span style="color: #ABB2BF">)</span><span style="color: #61AFEF"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">id</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> id;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #E5C07B">String</span><span style="color: #61AFEF"> getName</span><span style="color: #ABB2BF">()</span><span style="color: #61AFEF"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> name;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> setName</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">name</span><span style="color: #ABB2BF">)</span><span style="color: #61AFEF"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">name</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> name;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">short</span><span style="color: #61AFEF"> getAge</span><span style="color: #ABB2BF">()</span><span style="color: #61AFEF"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> age;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> setAge</span><span style="color: #ABB2BF">(</span><span style="color: #C678DD">short</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">age</span><span style="color: #ABB2BF">)</span><span style="color: #61AFEF"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">age</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> age;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #E5C07B">String</span><span style="color: #61AFEF"> getGender</span><span style="color: #ABB2BF">()</span><span style="color: #61AFEF"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> gender;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> setGender</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">gender</span><span style="color: #ABB2BF">)</span><span style="color: #61AFEF"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">gender</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> gender;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #E5C07B">String</span><span style="color: #61AFEF"> getPhone</span><span style="color: #ABB2BF">()</span><span style="color: #61AFEF"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> phone;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> setPhone</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">phone</span><span style="color: #ABB2BF">)</span><span style="color: #61AFEF"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">phone</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> phone;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> User</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">Integer</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">id</span><span style="color: #ABB2BF">, </span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">name</span><span style="color: #ABB2BF">, </span><span style="color: #C678DD">short</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">age</span><span style="color: #ABB2BF">, </span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">gender</span><span style="color: #ABB2BF">, </span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">phone</span><span style="color: #ABB2BF">)</span><span style="color: #61AFEF"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">id</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> id;</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">name</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> name;</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">age</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> age;</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">gender</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> gender;</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">phone</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> phone;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">private</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">String</span><span style="color: #E06C75"> phone</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="service" tabindex="-1"><a class="header-anchor" href="#service" aria-hidden="true">#</a> service</h5>
<p>UserService</p>
<p>这个接口是为用户服务定义了一些操作，其中唯一的方法是根据用户ID查询用户信息。具体的实现将由该接口的实现类提供，这样的设计允许不同的实现类通过实现相同的接口来提供不同的服务逻辑。这也符合面向接口编程的思想，提高了代码的灵活性和可扩展性。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">package</span><span style="color: #E06C75"> </span><span style="color: #C678DD">com.example.javademo.service</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">com.example.javademo.pojo.User</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">// 定义了一个名为 UserService 的接口。接口是一种抽象的数据类型，它定义了一组方法的签名，而不提供方法的具体实现。在这里，UserService 接口定义了一个名为 findById 的方法。</span></span>
<span class="line"><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">interface</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">UserService</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #E5C07B">User</span><span style="color: #61AFEF"> findById</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">Integer</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">id</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>UserServiceImpl</p>
<p>这段代码是一个实现了 UserService 接口的服务类</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">package</span><span style="color: #E06C75"> </span><span style="color: #C678DD">com.example.javademo.service.impl</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">com.example.javademo.mapper.UserMapper</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">com.example.javademo.pojo.User</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">com.example.javademo.service.UserService</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">org.springframework.beans.factory.annotation.Autowired</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">org.springframework.stereotype.Service</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic">// @Service 注解表示这个类是一个服务类，会被 Spring 扫描并纳入容器中管理。</span></span>
<span class="line"><span style="color: #ABB2BF">@</span><span style="color: #E5C07B">Service</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">// 定义了一个名为 UserServiceImpl 的类，该类实现了 UserService 接口。</span></span>
<span class="line"><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">UserServiceImpl</span><span style="color: #E06C75"> </span><span style="color: #C678DD">implements</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">UserService</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">// 声明了一个私有字段 userMapper，并通过 @Autowired 注解进行自动装配，即由 Spring 框架负责注入 UserMapper 的实例。</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #ABB2BF">@</span><span style="color: #E5C07B">Autowired</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">private</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">UserMapper</span><span style="color: #E06C75"> userMapper</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #7F848E; font-style: italic">// 这个方法实现了 UserService 接口中定义的 findById 方法。在方法内部，调用了 userMapper 的 findById 方法，该方法是通过 MyBatis 框架执行具体的数据库查询操作。然后，将查询结果（一个 User 对象）直接返回</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #ABB2BF">@</span><span style="color: #E5C07B">Override</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #E5C07B">User</span><span style="color: #61AFEF"> findById</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">Integer</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">id</span><span style="color: #ABB2BF">)</span><span style="color: #61AFEF"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">userMapper</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">findById</span><span style="color: #ABB2BF">(id);</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bean管理" tabindex="-1"><a class="header-anchor" href="#bean管理" aria-hidden="true">#</a> Bean管理</h3>
<h4 id="bean注册" tabindex="-1"><a class="header-anchor" href="#bean注册" aria-hidden="true">#</a> Bean注册</h4>
<table>
<thead>
<tr>
<th>--注解--</th>
<th>--说明---</th>
<th>---位置---</th>
</tr>
</thead>
<tbody>
<tr>
<td>@Component</td>
<td>声明bean的基础注解</td>
<td>不属于以下三类时用此注解</td>
</tr>
<tr>
<td>@Controller</td>
<td>@Component的衍生注解</td>
<td>标注在控制器类上</td>
</tr>
<tr>
<td>@Service</td>
<td>@Component的衍生注解</td>
<td>标注在业务类上</td>
</tr>
<tr>
<td>@Repository</td>
<td>@Component的衍生注解</td>
<td>标注在数据访问类上(由于与mybatis整合,用的少)</td>
</tr>
</tbody>
</table>
<p>如果要注册的bean对象来自第三方(不是自定义的),是无法使用@Component及其衍生注解声明bean的</p>
<p>如果要注册第三方bean,建议在启动类中集中注册</p>
<h3 id="自动配置-1" tabindex="-1"><a class="header-anchor" href="#自动配置-1" aria-hidden="true">#</a> 自动配置</h3>
<h3 id="自定义stater" tabindex="-1"><a class="header-anchor" href="#自定义stater" aria-hidden="true">#</a> 自定义stater</h3>
<!-- 
### SpringBoot 简单搭建本地接口

Spring boot 简单步骤

1. 建立 entity 实体类，跟数据库表字段保持一致
2. 建立 mapper 接口，定义要操作数据库的动作
3. 建立 mapper 的 xml 文件，写具体的 sql 语句
4. 建立 service 类，处理业务逻辑
5. 在 controller 类中展示处理的结果 -->
</div></template>


