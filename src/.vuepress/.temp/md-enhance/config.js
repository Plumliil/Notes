import { defineClientConfig } from "@vuepress/client";
import ChartJS from "E:/MySpace/docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeTabs from "E:/MySpace/docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "E:/MySpace/docs/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "E:/MySpace/docs/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import "E:/MySpace/docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import CodeDemo from "E:/MySpace/docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import ECharts from "E:/MySpace/docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import "E:/MySpace/docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import FlowChart from "E:/MySpace/docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import "E:/MySpace/docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "E:/MySpace/docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import Mermaid from "E:/MySpace/docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import Presentation from "E:/MySpace/docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation.js";
import Playground from "E:/MySpace/docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "E:/MySpace/docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "E:/MySpace/docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "E:/MySpace/docs/node_modules/katex/dist/katex.min.css";
import "E:/MySpace/docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";
import { defineAsyncComponent } from "vue";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS)
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("ECharts", ECharts);
    app.component("FlowChart", FlowChart);
    app.component("Mermaid", Mermaid);
    app.component("Presentation", Presentation);
    app.component("Playground", Playground);
    app.component("Tabs", Tabs);
    app.component("VuePlayground", defineAsyncComponent(() => import("E:/MySpace/docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/VuePlayground.js")));
    
  },
});
