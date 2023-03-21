# 快速上手
## 引入 Lii

~~~javascript
import Vue from 'vue';
import LiiUI from 'lii-ui';
import 'lii-ui/dist/style.css';
import App from './App.vue';

const app=createApp(App);
app.use(LiiUI);
app.mount('#app')
~~~

以上代码便完成了 Lii 的引入。需要注意的是，样式文件需要单独引入。

