# Vue-Router

## 什么是vue-router

vue-router是vue.js官方给出的路由解决方案，它只能结合vue项目进行使用，能够情感送的管理SPA项目
中的组件切换

## vue-router的常见用法

### 安装vue-router包

在vue2中：
`npm i vue-router@3.5.2 -S`

### 创建路由模块

~~~javascript
// router.js
import Vue from 'vue'
import VueRouter from 'vue-router'

// 调用vue.use()函数，把vue-router安装为vue的插件
Vue.use(VueRouter)
// 创建路由的实例对象
const router = new VueRouter()
// 向外共享路由的实例对象
export default router
~~~

### 导入并挂载路由模块

在进行模块化导入的时候，如果给定的是文件夹，则默认导入这个文件夹下名字叫做index
.js的文件

~~~javascript
// main.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
    router, // 路由的实例对象
    render: h => h(App)
}).$mount('#app')

~~~

### 声明路由链接和占位符

只要在项目中安装和配置了vue-router，都可以使用router-view这个组件
它的作用很单纯-占位符
`<router-view></router-view>`

## 路由的基本用法

在路由模块中声明路由的对应关系

### 使用redirect重定向

路由重定向指的是：用户在访问地址A的时候，强制用户跳转到地址C，从而展示特定的组件页面。
通过路由规则的redirect属性，指定一个新的路由地址，可以很方便的设置路由的重定向

~~~javascript
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
Vue.use(VueRouter)

// routes 是一个数组，作用 定义hash地址与组件之间的关系
const routes = [
    // 路由规则
    // 当用户访问 / 的时候，通过redirect属性跳转到 /home 对应的路由规则
  {path: '/', redirect: '/home'},
  {path: '/home', name: 'Home', component: Home}
]
const router = new VueRouter({
    // routes 是一个数组，作用 定义hash地址与组件之间的关系
    routes
})

export default router
~~~

### 嵌套路由

通过路由实现组件的嵌套展示，叫做嵌套路由
<!-- ![img_5.png](img_5.png) -->

### 通过children属性声明子路由规则

子路由规则不以斜线开头
在src/index.js路由模块中，导入需要的组件，并使用children属性声明子路由规则：

~~~javascript
{
    path: '/about',
    name: 'About',
    component: About,
    children:[
      {path:'tab1',name:'Tab1',component: Tab1},
      {path:'tab2',name:'Tab2',component: Tab2}
    ]
  }
~~~

### 默认子路由

如果children数组中，某个路由规则的path值为空字符串，则这条路由规则叫做'默认子路由'
默认子路由和重定向功能相同

~~~javascript
{
    path: '/about',
    name: 'About',
    component: About, 
    children:[
      {path:'',name:'Tab1',component: Tab1},
      {path:'tab2',name:'Tab2',component: Tab2}
    ]
  }
~~~

## 动态路由匹配

思考：有如下三个路由链接：
<!-- ![img_6.png](img_6.png) -->
缺点：路由规则的复用性差

### 动态路由的概念

动态路由是指：把Hash地址中的可变部分定义为参数向，从而提高路由规则的复用性
在vue-router中使用英文的：来定义路由的参数向。示例代码如下：
<!-- ![img_7.png](img_7.png) -->

~~~javascript
  // 在movie组件中希望根据id的值展示对应电影的信息
  {
    path: '/movie/:id',
    name: 'Movie',
    component: Movie, 
    props:true
  }
~~~

- 可以通过`this.$route.params.id`来获取id值以便渲染数据
- 可以通过开启props:true开启prop传参 子组件： `props:['id'],`

### 拓展query和fullpath

- 在hash地址中，/后面的参数项叫做路径参数
  在路由参数对象中，需要使用this.$route.params来访问路径参数
- 在hash地址中，?后面的参数项叫做查询参数
  在路由参数对象中，需要使用this.$route.query来访问查询参数
- 在this.$route中，path只是路径部分，fullPath是完整地址
  例如：/movie/2?name=zs&age=20 是fullPath的值 /movie/2是path的值

## 编程式导航跳转

### vue-router中编程式导航API，其中最常用的导航API分别是：

- this.$router.push('hash地址')
  - 跳转到指定的hash地址,并增加一条历史记录
- this.$router.replace('hash地址')
  - 跳转到指定的hash地址，并替换掉当前的历史记录
- this.$router.go(n) n 表示数字 -1 表示后退一层，如果后退层数超过上限则原地不动，同理 1 表示前进一层
### $router.go的简化
- $router.back() 表示后退一层
- $router.forward() 表示前进一层

## 路由导航守卫
### 全局前置守卫
每次发生路由的导航跳转时，都会触发全局前置守卫。
因此，在全局前置守卫中，程序员可以对每个路由进行访问权限的控制
`router.beforeEach(fn)`
### 守卫方法的三个形参
- to 将要访问的路由信息对象
- from 将要离开的路由信息对象
- next 是一个函数，调用next()表示放行，允许这次路由导航
~~~javascript
router.beforeEach((to,from,next)=>{
  // to表示将要访问的路由信息
  console.log(to)
  // next函数表示放行
  next()
})
~~~
### next函数的三种调用方式
<!-- ![img_8.png](img_8.png) -->
当前用户拥有后台主页的访问权限，直接放行：next()
当前用户没有后台主页的访问权限，前置其跳转到登录页面：next('/login)
当前用户没有后台主页的访问权限，不允许跳转到后台主页：next(false)
### 前置守卫
~~~javascript
router.beforeEach((to,from,next)=>{
  // to表示将要访问的路由信息
  // from表示将要离开的路由的信息对象
  // next函数表示放行
  // 分析
  // 要拿到用户访问的hash地址
  // 判断hash地址是否等于 /main
  // 如果等于/main 证明需要登陆之后，才能访问成功
  // 如果不等于/main，则不需要登录，直接放行 next()
  // 如果访问的地址是 /main 则需要读取localstorage中的token值
  // 如果有token就放行
  // 如果没有token则强制跳转到登录页
  if(to.path==='/main'){
    const token=localStorage.getItem('token')
    if(token){
      next()
    }else{
      next('/login')
    }
  }
})
~~~