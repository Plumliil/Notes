import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "首页",
    link: "/",
  },
  {
    text: "笔记",
    prefix: "/docs",
    link: '/docs'
  },
  {
    text: "轮子",
    prefix: "/tools",
    children: [
      {
        text: "前端部署工具",
        children: [
          {
            text: "SimplifyDeploy",
            prefix: "/simplifyDeploy",
            link: '/simplifyDeploy'
          },
        ],
      },
      // {
      //   text: "函数仓库",
      //   children: [
      //     {
      //       text: "liilib",
      //       prefix: "/liilib",
      //       link: '/liilib'
      //     },
      //   ],
      // },
    ],
  },
  {
    text: "Blog",
    link: "https://blog.plumliil.cn",
  },
  // {
  //   text: "Github",
  //   link: "https://github.com/Plumliil",
  // },
]);
