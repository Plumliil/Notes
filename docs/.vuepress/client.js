import { defineClientConfig } from "@vuepress/client";
import LiiUi from "lii-ui";
import "lii-ui/dist/style.css";
// import Valine from "./components/Valine";

export default defineClientConfig({
  enhance( { app, router, siteData } ) {
    app.use(LiiUi);
  },
  setup() {},
  rootComponents: [],
});
