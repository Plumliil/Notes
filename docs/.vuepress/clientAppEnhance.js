import { defineClientAppEnhance } from '@vuepress/client'

// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

import LiiUi from 'lii-ui'
import 'lii-ui/dist/style.css'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  console.log("clientAppEnhance.js");
  console.log(app, router, siteData);
  app.use(LiiUi);
})
