<template><div><h1 id="simplify-deploy" tabindex="-1"><a class="header-anchor" href="#simplify-deploy" aria-hidden="true">#</a> simplify-deploy</h1>
<p>simplify-deploy 部署工具是一个模块，旨在通过 SSH 简化到不同环境的部署过程。它利用 Node.js 和提供的配置来将文件部署到远程服务器。</p>
<h2 id="地址" tabindex="-1"><a class="header-anchor" href="#地址" aria-hidden="true">#</a> 地址</h2>
<p><a href="https://github.com/Plumliil/simplify-deploy" target="_blank" rel="noopener noreferrer">https://github.com/Plumliil/simplify-deploys<ExternalLinkIcon/></a></p>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2>
<p>部署工具通过 module.exports 对象在 deploy-config.js 文件中进行配置。以下是一个示例配置：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #E5C07B">module</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">exports</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">option</span><span style="color: #ABB2BF">: {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">host</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&quot;0.0.0.0&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">port</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&quot;22&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">username</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&quot;root&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">password</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&quot;root&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">sit</span><span style="color: #ABB2BF">: {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">remoteDir</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&quot;/home/nginx/html&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">localDir</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&quot;C:/Users/simplify/Desktop/app/dist/dev/dist&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    },</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">uat</span><span style="color: #ABB2BF">: {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">bakDir</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&quot;/bakup/nginx/bak&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">remoteDir</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&quot;/home/nginx/html&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">localDir</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&quot;C:/Users/simplify/Desktop/app/dist/uat/dist&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    },</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">prod</span><span style="color: #ABB2BF">: {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">bakDir</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&quot;/bakup/nginx/bak&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">remoteDir</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&quot;/home/nginx/html&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">localDir</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&quot;C:/Users/simplify/Desktop/app/dist/prod/dist&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    },</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>
<p>要使用 simplify-deploy 部署工具，请按照以下步骤进行：</p>
<p>如果尚未安装，请安装 Node.js 和 npm。</p>
<ul>
<li>克隆存储库：git clone <a href="mailto:git@github.com">git@github.com</a>:Plumliil/simplify-deploy.git</li>
<li>安装依赖项：npm install</li>
<li>查看可执行命令: npm run deploy --help</li>
<li>运行部署脚本: 根据提示命令行参数来运行部署脚本。
确保根据您的特定部署要求调整 deploy-config.js 中的配置。</li>
</ul>
<h2 id="配置-1" tabindex="-1"><a class="header-anchor" href="#配置-1" aria-hidden="true">#</a> 配置</h2>
<h3 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置" aria-hidden="true">#</a> 基础配置</h3>
<ul>
<li>host：远程服务器的 IP 地址或主机名。</li>
<li>port：SSH 端口号。</li>
<li>username：用于身份验证的 SSH 用户名。</li>
<li>password：用于身份验证的 SSH 密码。</li>
</ul>
<h3 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置" aria-hidden="true">#</a> 环境配置</h3>
<ul>
<li>bakDir：远程服务器上的备份目录。(非必填,如服务器不存在该目录则自动创建)</li>
<li>remoteDir：将要部署文件的远程目录。</li>
<li>localDir：包含要部署文件的本地目录。</li>
</ul>
</div></template>


