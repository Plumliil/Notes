import { defineClientConfig } from '@vuepress/client'

import LiiUi from 'lii-ui'
import 'lii-ui/dist/style.css'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    console.log("client.ts");
    console.log(app, router, siteData);
    app.use(LiiUi);
  },
  setup() { },
  rootComponents: [],
})
