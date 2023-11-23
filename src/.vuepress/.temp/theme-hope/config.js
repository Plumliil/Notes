import { defineClientConfig } from "@vuepress/client";

import { HopeIcon, Layout, NotFound, useScrollPromise, injectDarkmode, setupDarkmode, setupSidebarItems } from "E:/A_Personal/Plumliil-docs/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import Slide from "E:/A_Personal/Plumliil-docs/node_modules/vuepress-plugin-md-enhance/lib/client/SlidePage.js";

import "E:/A_Personal/Plumliil-docs/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // render icon for auto-catalog
    app.component("HopeIcon", HopeIcon);


  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,
    Slide,
  }
});