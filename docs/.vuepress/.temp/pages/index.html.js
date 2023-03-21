export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"https://s2.loli.net/2022/04/05/qa4sCStuDX5gyBb.png\",\"actionText\":\"快速上手 →\",\"actionLink\":\"/zh/`guide/\",\"features\":[{\"title\":\"JavaScript\",\"details\":\"组件，指令使用简单，文档简明易懂\"},{\"title\":\"TypeScript\",\"details\":\"组件种类多样，应用场景广泛\"},{\"title\":\"Vue\",\"details\":\"通过不断的学习进步来完善组件以及指令\"},{\"title\":\"React\",\"details\":\"通过不断的学习进步来完善组件以及指令\"},{\"title\":\"Less\",\"details\":\"通过不断的学习进步来完善组件以及指令\"},{\"title\":\"...\",\"details\":\"......\"}]},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":null},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
