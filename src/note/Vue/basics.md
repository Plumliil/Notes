<!-- ---
prev: ../React
next: false
--- -->
# 基础篇

## 什么是 vue

一套用于构建用户界面的前端框架

- 构建用户界面：用 vue 往 html 中填充数据
- 框架：一套现成的解决方案，程序员只能遵守框架的规范，学习 vue 就是学习框架用法（指令，组件，路由，vuex）
- 只有把以上内容掌握，才有开发 vue 项目能力

## vue 特性

在 vue 页面中，vue 会监听数据变化，从而自动重新渲染页面结构

![](https://s2.loli.net/2023/03/29/mS67KG9XuJYvdCw.png)

好处：数据变化时，页面重新渲染

坏处：数据驱动视图时双向绑定

### 1.提高开发效率，不再操作 dom，解放用户的双手

### 2.框架和库的区别

框架是一套完整的解决方案，对项目的侵入性比较大，更换框架=重写项目
库是提供某一个小功能，对项目的侵入性比较小，如果某个库无法完成某些需求，可以切换其他库

### 3.MVC 和 MVVM 之间的区别

MVC 是后端开发概念，M 为 Model 层，V 是 View 层看作前端页面，C 相当于业务逻辑层

MVVM 是前端视图层的概念，主要把每个页面分成了 M，V 和 VM。其中 VM 是 MVVM 思想的核心，因为 VM 是 M 和 VM 之间的调度者，M 保存的是每个页面中单独的数据，V 就是每个页面中的 HTML 结构,每当 V 层想要获取和保存数据的时候，都要由 VM 做中间件处理
好处：前端页面使用 MVVM 的思想主要是为了方便开发，应为 MVVM 提供了数据的双向绑定（由 VM 提供）

## vue 指令

### 内置指令
#### v-clock
先通过样式隐藏内容,然后在内存中进行值得替换并显示最终结果
使用 v-clock 让用户看不到插值表达式闪烁，当 vue.js 在后边引用时
#### v-text
默认 v-text 没有闪烁问题，v-text 会覆盖元素中原始内容，但是插值表达式只会替换自己的占位符，不会把整个元素覆盖
#### v-html
可以直接渲染 html 标签
#### v-pre
填充原始信息,显示原始信息,跳过编译过程
```html
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- <script src="./lib/vue.min.js"></script> -->
    <style>
      [v-clock] {
        display: none;
      }
    </style>
  </head>
  <body>
    <div id="app">
      <p v-clock>{{msg}}</p>
      <h4 v-text="msg"></h4>
      <span v-html="msg2"></span>
    </div>
    <script>
      var vue = new Vue({
        el: "#app",
        data: {
          msg: "hello Vue!",
          msg2: "<h3>v-html</h3>",
        },
      });
    </script>
  </body>
</html>
```
#### v-bind
提供绑定属性的一个指令
```html
<input type="button" name="" v-bind:title="mytitle" value="button" />
```
v-bind 属性可以简洁为一个：要绑定的属性，且 v-bind 中可以写合法的表达式
```html
<input type="button" name="" :title="mytitle +'123'' " value="button" />
```
mytitle:'自定义 title'
允许 v-bind 绑定属性值期间，如果绑定内容需要进行动态拼接，则字符串的外面应该包裹单引号如

`<P :title="'box'+index">BOX</P>`
#### v-on
提供绑定事件的一个指令 v-on:=@
```html
<body>
  <div id="app">
    <input type="button" :title="mytitle" value="Button" v-on:click="show" />
  </div>
  <script>
    var vue = new Vue({
      el: "#app",
      data: {
        mytitle: "自定义title",
      },
      methods: {
        // 在methods属性中定义了当前Vue实例所有可用的方法
        show: function () {
          alert("show");
        },
      },
    });
  </script>
</body>
```

### 条件渲染指令

v-if：每次动态创建和移除元素创建删除节点,来实现（进入页面，某些元素默认不显示，后期可能也不显示才使用 v-if）
v-show:动态为元素添加 display:none 样式来实现元素显示隐藏（频繁切换性能更好）
在实际开发中绝大多数勤快，不用考虑性能，直接 v-if
v-else-if：必须配合 v-if 使用，实现多项判断
v-else：v-if 的相反情况

### 列表渲染指令

vue 提供了 v-for 列表渲染指令，用来辅助开发者继续一个数组来循环渲染列表结构。v-for 指令需要用 item in items 形式语法中
key 属性绑定,官方建议只要用到 v-for 一定要绑定一个 key，key 值最好为 item.id（提升性能，防止列表状态紊乱）
官方对 key 值的类型是有要求的，字符串或数字类型
key 的值是千万不能重复的，否则终端会报错：Duplicate keys detected

- items 是待循环的数组
- item 是被循环的每一项


## 事件修饰符

放在事件后

- .stop:阻止事件向上冒泡
- .prevent:阻止默认行为
- .capture:事件捕获机制
- .self:只有点击当前元素才会触发事件
- .once:事件只执行一次

## 指令修饰符

#### 双向数据绑定

双向数据绑定用到了 v-model 这一指令

v-model 只能和特殊的元素搭配使用
input,textarea,select

`<input type="text" value="" v-model="msg" @keyup.enter="enter" />`

为了方便对用户内容做处理，vue 为 vue-model 指令提供了 3 个修饰符，分别是：

| 修饰符  | 作用                           | 示例                             |
| ------- | ------------------------------ | -------------------------------- |
| .number | 自动将用户的输入值转为数值类型 | `<input v-model.number="age" />` |
| .trim   | 自动过滤用户输入的守卫空白字符 | `<input v-model.trim="msg" />`   |
| .lazy   | 在"change"时而非"input"时更新  | `<input v-model.lazy="msg" />`   |

## 按键修饰符

```javascript
<div id="app">
    <input type="text" @keyup.esc="clearInput" @keyup.enter="commitAjax">
</div>
<script>
    const app = new Vue({
        el: '#app',
        data: {
            msg:'xxxxx'
        },
        methods:{
            clearInput(e){
                console.log('clearInput')
                e.target.value=null
            },
            commitAjax(){
                console.log('commitAjax')
            }
        }
    })
</script>
```

## 过滤器

过滤器是 vue 开发者提供的功能，常用于文本的格式化，过滤器可以和 v-bind 绑定
过滤器应该被添加在 javascript 表达式的尾部，由管道符进行调用，示例代码如下

### 私有过滤器和全局过滤器

在 filters 节点下定义的过滤器，称为“私有过滤器”，因为它只能在当前 vm 示例所
控制的 el 区域内使用，如果希望在多个 vue 实例之间共享过滤器，则可可以按照如下格式定义全局过滤器

`<p>message的值是：{{msg | capi}}</p>`

```javascript
 filters:{
            // 过滤器形参中的val永远是管道符|前的值
            capi(val){
                // 字符串由charAt方法 这个方法接收一个索引值，表示从字符串中把索引对应的值
                const first=val.charAt(0).toUpperCase()
                const other=val.slice(1)
                //过滤器钟一定要有一个返回值
                return first + other
            }
        }
```

```javascript
// Vue.filter 方法接收两个参数
// 第一个参数是全局过滤器的名字
// 第二个参数是全局过滤器的处理函数
Vue.filter("capi", (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1) + "--";
});
```

### 过滤器的注意点

- 要定义到 filters 节点下，本质是一个函数
- 在过滤器函数中，一定要有 return 值
- 在过滤器的形参中，就可以获取到管道符前面待处理的那个值
- 如果全局过滤器和私有过滤器名字一致，此时就按照就近原则，调用私有过滤器

### 过滤器格式化时间

```javascript
Vue.filter("dateFormat", (time) => {
  const dt = dayjs(time).format("YYYY-MM-DD HH-mm-ss");
  return dt;
});
```

### 串联的使用过滤器

过滤器可以串联调用
`<P>{message | filter1 | filter2 | filter3 }</p>`

### 调用过滤器还可以传参

过滤器的本质是 javascript 函数，因此可以接受参数
`<P>{message | filter(arg1 , arg2) }</p>`
// 过滤器处理函数的形参列表中
// 第一个参数永远是管道符前待处理的参数
// 从第二个参数开始，才是调用过滤器时对传递过来的 arg1，arg2 参数

```javascript
Vue.filter("filter", (msg, arg1, arg2) => {
  // 过滤器代码逻辑
});
```

### 过滤器的兼容性

vue3 不支持过滤器

## 监听器

#### 什么是监听器

监听器允许开发者监视数据的变化，从而针对数据变化做特定动作
语法格式如下：

```javascript
watch:{
            // 监听器本质上是一个函数，要监视哪个数据的变化，就把数据名做方法名即可
            // newVal 变化后的新值 oldVal 变化后的旧值
            // 新值在前 旧值在后
            msg(newVal,oldVal) {
                console.log(oldVal + '-----已更改为-----' + newVal)
            }
        }
```

应用场景：查询用户名是否重复，当旧值更改时就通过接口查询

### 对象格式的监听器

// immediate 选项的默认值是 false
// immediate 的作用是控制侦听器是否自动触发一次
immediate:true

```javascript
watch:{
            // 对象格式的监听器
            msg:{
                // 侦听器的处理函数
                handle (newVal,oldVal) {
                    console.log(newVal,oldVal)
                } ,
                // immediate 选项的默认值是 false
                // immediate 的作用是控制侦听器是否自动触发一次
                immediate:true
            }
        }
```

### 深度侦听

如果是对象属性发生变化无法触发监听器
可以通过 deep 选项深度监听属性变化

```javascript
watch:{
            // 对象格式的监听器
            info:{
                handle(newVal){
                    console.log(newVal)
                },
                // 开启深度监听，只要对象中任何一个属性变化，都会触发对象监听器
                deep:true
            }
        }
```

```javascript
watch:{
            // 对象格式的监听器
            'info.msg'(newVal){
                console.log(newVal)
            }
        }
```

## 计算属性

指是通过一系列运算之后，最终得到的一个属性值
这个动态计算出来的属性值可以被模板结构或 methods 方法使用，示例代码如下：

```html
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html"
xmlns="http://www.w3.org/1999/html">
    <head>
    <meta charset="UTF-8">
    <title>Title</title>
<script src="../vue.js"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/dayjs/1.4.1/dayjs.min.js"></script>
<style>
    .box{
    width: 200px;
    height: 200px;
}
</style>
</head>
<body>
    <div id="app">
        r:<input type="text" v-model="r">
    </br>
        g:<input type="text" v-model="g">
    </br>
        b:<input type="text" v-model="b">
    </br>
        <div class="box" :style="{backgroundColor:rgb}">
        {{rgb}}
    </div>
    <button @click="show">按钮</button>
</div>
<script>

    const app = new Vue({
    el: '#app',
    data: {
    r:255,
    g:0,
    b:0
},
    methods:{
    show(){
    console.log(this.rgb)
}
},
    // 监听属性
    watch:{},
    // 计算属性
    // 所有的计算属性都要定义到computed节点下
    // 计算属性在定义的时候，要定义成方法格式
    computed:{
    // rgb作为一个计算属性被定义为方法格式
    // 最终，在这个方法中，要返回一个生成好的rgb(x,x,x)
    rgb(){
    return `rgb(${this.r},${this.g},${this.b})`
}
}
})
    console.log(app)
</script>
</body>
</html>
```

### 特点

- 定义的时候要被定义为方法
- 在使用计算属性的时候，当普通的属性使用即可

### 好处

- 实现了代码复用
- 只要计算属性中依赖的数据源变化了，则计算属性会自动重新求值

## axios

#### 基础语法

```javascript
axios({
  method: "请求类型",
  url: "请求地址",
}).then((result) => {
  // .then用来指定请求成功后的回调函数
  // 形参中的 result 是请求成功后的结果
});
```

调用 axios 得到的返回值是一个 promise 对象
axios 在请求到数据后，在真正的数据外套了一层壳

```javascript
{
    config:{},
    data:{'真实数据'},
    headers:{},
    request:{},
    status:xxx,
    statusText:''
}
```

### 基本使用

- 发起 get 请求

```javascript
axios({
  method: "GET",
  url: "请求地址",
  // url中查询参数 (get)
  params: {
    id: 1,
  },
}).then((result) => {
  // .then用来指定请求成功后的回调函数
  // 形参中的 result 是请求成功后的结果
  console.log(result);
});
```

- 发起 post 请求

```javascript
axios({
  method: "POST",
  url: "请求地址",
  // url中查询参数 (get)
  data: {
    name: "zhangsan",
    age: 20,
  },
}).then((result) => {
  // .then用来指定请求成功后的回调函数
  // 形参中的 result 是请求成功后的结果
  console.log(result);
});
```

### await async

通过 await 可以获取到返回值，而不是 promise
对象，但必须用在 async 修饰的方法中

#### 解构赋值

```vue
async getData(){ const {data:res}=await axios({ method:'POST', url:'xxxxxxx', //
请求体参数 (post) data:{} }) console.log(res) }
```

### 简化

访问方法

```vue
async getData(){ const {data:resPost}=await
axios.post('http://xxx.xxx.xxx',{name:'xxx'}) const {data:resGet}=await
axios.get('http://xxx.xxx.xxx',{params:{name:'xxx'}}) console.log(resPost)
console.log(resGet) }
```

## vue-cli

单页面程序（Single Page Application），简称 SPA,顾名思义，指的是一个 Web 网站只有唯一一个 HTML 界面，
所有的功能与交互都在这唯一的一个页面内完成。

### 什么是 vue-cli

vue-cli 是 Vue.js 开发的标准工具。它简化了程序员基于 Webpack 创建工程化 Vue 项目的过程。
引用 vue-cli 官网上一句话，承轩 u 你可以专注于撰写应用，而不必花好几天纠结 webpack 配置

### 安装和使用

vue-cli 是 npm 上一个全局包，使用 npm install 命令，即可方便的把它安装到电脑上
`npm install -g @vue/cli` 1.基于 vue-cli 快速生成工程化 Vue 项目
`vue create 项目名称`
2.vue 项目中 src 目录的构成

- assets 文件夹：存放项目中的静态资源文件
- components 文件夹：程序员封装的可复用组件都要放到 components 目录下
- main.js 入口文件：整个项目的执行都要先执行该入口文件
- App.vue 项目的根组件：

Vue 实例的$mount()方法，作用和 el 属性完全一样

## vue 组件

组件化开发指的是：根据封装的思想，把页面上可重用的 UI 结构封装为组件，从而方便项目开发和维护

### vue 组件的三个部分

- template 组件模板结构
- script 组件的 javascript 行为
- style 组件的 css 样式(默认 css 语法)加上 lang 可以改成其他语法
- `<style lang="less"></style>`

```javascript
<template>
  <div id="app">
    <p>{{msg}}</p>
    <button @click="changeMsg">按钮</button>
  </div>
</template>

<script>
  // 默认导出，固定语法
  export default {
    // data 数据源
    // 注意：vue组件中的data不能像之前一样，不能指向对象
    // 注意：组件中的data必须是一个函数
    data(){
        return{
          msg:0
        }
    },
    methods:{
      changeMsg(e){
        this.msg+=1
        // 在组件中 this就表示当前组建的实例对象
        console.log(this)
      }
    },
    watch:{},
    computed:{},
    filters:{}
  }
</script>

<style>
  #app{
    background-color: pink;
  }
</style>
```

### 组件之间的父子关系

组件在封装好之后是相互独立的，不存在父子关系
使用组建的三个步骤

- 使用 import 语法导入需要的组件
- 使用 components 节点组测组件
- 以标签的形式使用刚才注册的组件

### 通过 components 注册的是私有组件

例如：在组件 A 的 components 节点下，注册了组件 F
则组件 F 只能用个在组件 A 中，不能用被用在组件 C 中
缺点：多次复用时很麻烦
实例代码如下:

```javascript
// main.js
// 导入需要被全局注册的组件
import Count from "@/components/Count";
Vue.component("MyCount", Count);
```

### 注册全局组件

在 vue 项目的 main.js 文件中,通过 Vue.component()方法，可以注册全局组件，示例代码如下

### 结合 v-bind 使用自定义属性

v-bind 内的值是 javascript 数字不加的话为普通字符串

### props

props 是组件的自定义属性，在封装组件的时候，合理的使用 props 可以极大的提高组件的复用性
自定义属性名字是封装这自定义的（'合法即可'）
格式语法如下：

```javascript
export default {
  // props是自定义属性，允许使用者通过自定义属性，为当前组件指定初始值
  props: ["init"],
  data() {
    return {};
  },
  methods: {},
};
```


#### props 里的数据是只读的

程序员不能直接修改 props 里的值，负责终端会报错
可以把 props 里的值转存到 data 中

```javascript
export default {
  // props是自定义属性，允许使用者通过自定义属性，为当前组件指定初始值
  props: ["init"],
  name: "Count",
  data() {
    return {
      count: this.init,
    };
  },
};
```

#### props 默认值

定义对象里的 props
实例代码如下：

```javascript
export default {
  // props是自定义属性，允许使用者通过自定义属性，为当前组件指定初始值
  props: {
    init: {
      default: 0,
    },
  },
  name: "Count",
  data() {
    return {
      count: this.init,
    };
  },
};
```

#### props 里的 type 值类型

type:

- String
- Number
- Boolean
- Array
- Object
  示例代码：

```javascript
export default {
  // props是自定义属性，允许使用者通过自定义属性，为当前组件指定初始值
  props: {
    init: {
      default: 0,
      type: Number,
    },
  },
  name: "Count",
  data() {
    return {
      count: this.init,
    };
  },
};
```

#### props 里的必填 required

当 required 为 true，如果不传值就会报错，有默认值也没用

```vue
export default { //
props是自定义属性，允许使用者通过自定义属性，为当前组件指定初始值 props: { init:
{ default: 0, type:Number, required:true } }, name: "Count", data() { return {
count: this.init } } }
```

#### 组件之间的样式冲突问题

默认情况下，写在.vue 组件中的样式会全局生效，因此会造成多个组件之间的样式冲突问题。
导致组件之间样式冲突的根本原因是：
①：单页面应用程序中，所有组件的 DOM 结构，都是基于唯一的 index.html 页面呈现的
②：每个组件中的样式，都会影响整个 index.html 页面中的 Dom 元素
如何解决：

- 给当前组件内的标签中加入自定义属性
  `data-v-xxx`
  `h1[data-v-xxx]{xxx}`
- 在 style 标签内加入 scoped 属性，防止组件间样式冲突
- 在父组件中更改子组件的样式
  当使用第三方库时需要用到/deep/，更改子组件的子元素
  `h1[data-v-xxx]{}`/deep/前
  `[data-v-xxx]h1{}`/deep/后
  `/deep/ h1{}`

## 生命周期

### 组件间的生命周期

生命周期是指一个组件从创建->运行->销毁的整个阶段，强调的是一个时间段
生命周期函数：是由 vue 框架提供的内置函数，会伴随着组件的生命周期，自动按次序执行
<!-- ![img.png](img.png) -->
注意：生命周期强调的是时间段，生命周期函数强调的是时间点

#### 创建阶段生命周期函数

- beforeCreate(){} 组件的 props/data/methods 尚未被创建，都处于不可用状态
- created(){} 组件的 props/data/methods 已创建好，处于可用状态，但是组建的模板结构尚未生成
- beforeMount(){} 将要把内存中编译好的 HTML 结构渲染到浏览器中，此时浏览器中还没有当前组件的 DOM 结构
- mounted(){} 已经把内存中的 HTML 结构，成功的渲染到浏览器中，此时浏览器中已然包含了当前组建的 DOM 结构

### 运行阶段生命周期函数

- beforeUpdate(){} 将要根据变化后，最新的数据，重新渲染组件的模板结构。（此时还未渲染）
- updated(){} 已经根据最新的数据，完成了组件 DOM 结构的重新渲染，数据变化之后为了操作最新的数据，必须放在 updated 生命周期函数里

### 销毁阶段生命周期函数

- beforeDestroy(){} 将要销毁此组件，此时尚未销毁，组件还处于正常工作的状态
- destroy(){} 组件已经被销毁，此组件在浏览器中对应的 DOM 结构已经被完全移除

## 数据共享

### 父组件向子组件传递数据

父组件向子组件共享数据需要使用自定义属性
不能修改 props 里的值，只能转存

- 父

```vue
<Son :msg="message" :user="userInfo"></Son>
```

- 子

```javascript
<template>
  <div class="son">
    <h1>Son 组件</h1>
    <p>父组件传递过来的 msg 值为：{{msg}}</p>
    <p>父组件传递过来的 user 值为：{{user}}</p>
  </div>
</template>

<script>
export default {
  props:['msg','user'],
  name: "Son"
}
</script>
```

### 子组件向父组件传值

- 子
  `this.$emit('numChange',this.num)`
- 父
  `<right @numChange="getNewNum"></right>`

```javascript
getNewNum(val){
      this.numFromSon=val
    }
```

### 兄弟组件之间的传值

在 vue2.x 中，兄弟组件之间数据共享的方案是 EventBus
EventBus 的使用步骤

- 创建 eventBus.js 模块，并向外共享一个 Vue 的实例对象
- 在数据发送方，调用 bus.$emit('时间名称',要发送的数据)方法触发自定义事件
- 在数据接收方，调用 bus.$on('事件名称',事件处理函数)方法注册一个自定义事件
  <!-- ![img_1.png](img_1.png) -->

## ref 引用

### 什么是 ref 引用

ref 用来辅助开发者在不依赖 jQuery 的情况下，获取 DOM 元素或组件的引用

### 使用 ref 引用组件

`<Left ref="left"></Left>`
`console.log(this.$refs.left)`

### this.$nextTick(cb)方法

组件的$nextTick(cb)方法，会把 cb 回调推迟到下一个 DOM 更新周期之后执行。通俗的理解是：
等组件 DOM 更新完成之后，在执行 cb 回调函数，从而能保证 cb 回调函数可以操作到最新的 DOM 元素
