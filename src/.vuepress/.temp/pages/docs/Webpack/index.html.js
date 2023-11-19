export const data = JSON.parse("{\"key\":\"v-398a697d\",\"path\":\"/docs/Webpack/\",\"title\":\"Hello TS\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1681611366000,\"contributors\":[{\"name\":\"plumliil_li\",\"email\":\"plumliil.li@elitesland.com\",\"commits\":1}]},\"filePathRelative\":\"docs/Webpack/README.md\"}")

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
