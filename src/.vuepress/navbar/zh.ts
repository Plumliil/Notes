import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "首页",
    link: "/",
  },
  {
    text: "笔记文档",
    prefix: "/docs",
    link:'/docs'
  },
  {
    text: "函数库",
    link: "/liilib",
    prefix: "/liilib",
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
