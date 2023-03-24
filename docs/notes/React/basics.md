# 基础篇

## 创建项目

单纯使用 react 创建项目主要有以下几种方式

### 1.在 html 文件中

在单独的 html 文件中使用`CDN`导入,但是要注意的是,如果需要使用`JSX`语法需要同时导入`babel`

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.3/react.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.3/react-dom.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
```
**完整代码**
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>My React</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.3/react.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.3/react-dom.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      const element = <h1>Hello React!</h1>;
      ReactDOM.render(element,document.querySelector('#root'));
    </script>
  </body>
</html>
```
`ReactDOM.render(element, container[, callback])`

创建元素element后需要将创建好的元素渲染到页面上,此时通过render函数可以实现此功能,
render函数的作用是在提供的容器内渲染一个元素,这个元素可以使普通元素也可以是React组件
### 2.使用create-react-app创建
```shell
npx create-react-app react-demo
cd react-demo
npm start
```
### 3.框架
除了这两种方式外还可以使用umi,next等一些应用框架来直接搭建react项目
以umi为例,我们可以在在创建好的umi项目中的`src/page/index.tsx`文件中直接编写React代码:
> umi官网 : https://v3.umijs.org/zh-CN/docs
~~~ts
import styles from './index.less';
export default function IndexPage() {
  return (
    <div id="root" className={styles.root}>
      <h1>Hello React!</h1>
    </div>
  );
}
~~~

## JSX
### 什么是JSX

### 为什么要使用JSX

### 如何规范使用JSX
## 函数组件和类组件

## 条件渲染