export const data = JSON.parse("{\"key\":\"v-6dc9e038\",\"path\":\"/docs/TypeScript/other.html\",\"title\":\"其他\",\"lang\":\"en-US\",\"frontmatter\":{\"description\":\"any类型污染问题 ```ts let s:any = 'string'; let n:number; n = s; // 不报错 n * 123 // 不报错 n.toFixed() // 不报错 ``` 在上方代码中,any类型的s污染number类型的n ```ts let s1:unknown = 'string'; let n1:number...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/docs/docs/TypeScript/other.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Plumliil-Docs\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"其他\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"any类型污染问题 ```ts let s:any = 'string'; let n:number; n = s; // 不报错 n * 123 // 不报错 n.toFixed() // 不报错 ``` 在上方代码中,any类型的s污染number类型的n ```ts let s1:unknown = 'string'; let n1:number...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Plumliil\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"其他\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Plumliil\\\",\\\"url\\\":\\\"https://plumliil.cn\\\"}]}\"]]},\"headers\":[{\"level\":3,\"title\":\"any类型污染问题\",\"slug\":\"any类型污染问题\",\"link\":\"#any类型污染问题\",\"children\":[]}],\"readingTime\":{\"minutes\":0.31,\"words\":93},\"filePathRelative\":\"docs/TypeScript/other.md\",\"autoDesc\":true}")

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
