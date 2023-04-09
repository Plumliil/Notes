const { viteBundler } = require("@vuepress/bundler-vite");
const { defineUserConfig } = require("@vuepress/cli");
const { defaultTheme } = require("vuepress");
const { searchPlugin } = require("@vuepress/plugin-search");
// const { containerPlugin } = require('@vuepress/plugin-container')

module.exports = defineUserConfig({
  lang: "zh-CN",
  title: "Plumliil-Docs",
  description: "笔记文档",
  head: [
    //额外的需要被注入到当前页面的 HTML <head> 中的标签
    [
      "link",
      {
        rel: "icon",
        href: "https://s2.loli.net/2022/04/05/qa4sCStuDX5gyBb.png",
      },
    ],
    ["link", { rel: "stylesheet", href: "/css/style.css" }], //自定义样式,也可以使用styles/index.styl来设置
    ["script", { charset: "utf-8", src: "/js/main.js" }], //自定义js文件
  ],
  theme: defaultTheme({
    // 主题设置
    logo: "https://s2.loli.net/2022/04/05/qa4sCStuDX5gyBb.png",
    // repo: "https://github.com/Plumliil",
    repo: "https://github.com/Plumliil/Plumliil-docs",
    repoLabel: "GitHub",
    navbar: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    editLink: true,
    editLinkText: "更好想法?",
    editLinkPattern: "https://github.com/Plumliil/Plumliil-docs/issues",
    sidebarDepth: 2,
    lastUpdated: true,
    lastUpdatedText: "更新时间",
    contributors: false,
    displayAllHeaders: true,
    contributorsText: "贡献者",
    // nextLinks: true,
    // prevLinks:true,
    notFound: [
      "这里什么都没有",
      "我们怎么到这来了？",
      "这是一个 404 页面",
      "看起来我们进入了错误的链接",
    ],
    backToHome: "返回首页",

    // a11y
    openInNewWindow: "在新窗口打开",
    toggleDarkMode: "切换夜间模式",
    toggleSidebar: "切换侧边栏",
  }),
  bundler: viteBundler({
    viteOptions: {
      ssr: {
        noExternal: ["Plumliil-Docs"],
      },
    },
    vuePluginOptions: {},
  }),
  plugins: [
    searchPlugin(),
    "demo-container-v2",
    "demo-container",
    [
      "@vuepress/register-components",
      {
        components: [
          {
            name: "Valine",
            path: "./components/Valine.vue",
          },
        ],
      },
    ],
  ],
});
