import { defineUserConfig } from "vuepress";
import { shikiPlugin } from "@vuepress/plugin-shiki";
import { searchPlugin } from "@vuepress/plugin-search";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/docs/",
  title: "Plumliil-Docs",
  description: "Learn together and make progress together",
  plugins: [
    shikiPlugin({
      // 你的选项
      theme: "one-dark-pro",
    }),
  ],

  theme,
  // Enable it with pwa
  shouldPrefetch: false,
});
