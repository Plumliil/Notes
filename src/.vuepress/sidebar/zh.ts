import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/note": [
    {
      text: "Git",
      prefix: "git/",
      collapsible: true,
      children: ["README.md", "basics.md"],
    },
    {
      text: "JavaScript",
      prefix: "javascript/",
      collapsible: true,
      children: ["README.md", "basics.md", "advance.md"],
    },
    {
      text: "TypeScript",
      prefix: "typescript/",
      collapsible: true,
      children: ["README.md", "basics.md", "advance.md"],
    },
    {
      text: "React",
      prefix: "react/",
      collapsible: true,
      children: ["README.md", "basics.md", "advance.md"],
    },
    {
      text: "Vue",
      prefix: "vue/",
      collapsible: true,
      children: ["README.md", "basics.md", "advance.md", "VueRouter.md", "Vuex.md"],
    },
    {
      text: "Less",
      prefix: "less/",
      collapsible: true,
      children: ["README.md", "basics.md"],
    },
    {
      text: "Linux",
      prefix: "linux/",
      collapsible: true,
      children: ["README.md", "basics.md"],
    },
    {
      text: "MongoDB",
      prefix: "mongodb/",
      collapsible: true,
      children: ["README.md", "basics.md"],
    },
    {
      text: "Nodejs",
      prefix: "nodejs/",
      collapsible: true,
      children: ["README.md", "basics.md", "advance.md"],
    },
    {
      text: "Mysql",
      prefix: "mysql/",
      collapsible: true,
      children: ["README.md", "basics.md"],
    },
    {
      text: "Java",
      prefix: "java/",
      collapsible: true,
      children: ["README.md", "basics.md", "advance.md"],
    },
    {
      text: "Nginx",
      prefix: "nginx/",
      collapsible: true,
      children: ["README.md", "basics.md"],
    },
    {
      text: "Docker",
      prefix: "docker/",
      collapsible: true,
      children: ["README.md", "basics.md"],
    },
    // {
    //   text: "随笔",
    //   prefix: "notes/",
    //   collapsible: true,
    //   children: ["0425-IntranetPenetration.md"],
    // },
  ],
});
