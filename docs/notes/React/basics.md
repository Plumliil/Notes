# 基础篇

## 创建项目

使用 react 创建项目主要有以下几种方式

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
      ReactDOM.render(element, document.querySelector("#root"));
    </script>
  </body>
</html>
```

`ReactDOM.render(element, container[, callback])`

创建元素 element 后需要将创建好的元素渲染到页面上,此时通过 render 函数可以实现此功能,
render 函数的作用是在提供的容器内渲染一个元素,这个元素可以使普通元素也可以是 React 组件

### 2.使用 create-react-app 创建

```shell
npx create-react-app react-demo
cd react-demo
npm start
```

### 3.框架

除了这两种方式外还可以使用 umi,next 等一些应用框架来直接搭建 react 项目
以 umi 为例,我们可以在在创建好的 umi 项目中的`src/page/index.tsx`文件中直接编写 React 代码:

> umi 官网 : https://v3.umijs.org/zh-CN/docs

```ts
import styles from "./index.less";
export default function IndexPage() {
  return (
    <div id="root" className={styles.root}>
      <h1>Hello React!</h1>
    </div>
  );
}
```

## JSX

### 什么是 JSX

简单来说 JSX 是 Javascript 和 XML 结合的一种格式,是 JavaScript 的语法扩展

### 为什么要使用 JSX

- 简单 语法简单,我们用它来描述 UI 界面时更加迅速
- 迅速 执行更快，因为它在编译为 JavaScript 代码后进行了优化
- 安全 类型安全，在编译过程中我们就能发现错误。

### 如何规范使用 JSX

- 只能有一个根标签
- 所有标签要闭合（单边标签得有斜杠）
- 小写首字母对应 HTML 的标签，组件名首字母大写
- 注释需要写在花括号中 `{/*注释...*/}`
- 在 JSX 中使用 JavaScript 表达式。表达式写在花括号 {} 中
- 内联样式的 style：样式名以驼峰命名法表示,外联样式 className 外部样式时使用

## 类组件和函数组件

在 react 中我们可以使用两种方法来创建 react 元素组件,这两种组件分别是函数组件和类组件,在 Hooks 逐渐流行的今天,函数组件应用范围越来越广而类组件写法日渐式微,接下来分开讲讲这两个组件编写方式

### 类组件 Class

类组件顾名思义就是使用 javascript 关键字 class 来创建组件,它继承自 React.Component,在编写时我们需要返回一段 JSX 代码来作为组件本体如

```tsx
class MyComp extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
}
```

但是类组件不只有`render`这一个函数这么简单,在类组件中我们可以完整的运用 react 组件的生命周期如 constructor,componentDidMount 等,如下

```tsx
class MyComp extends React.Component {
  componentDidMount() {
    console.log("在此处编写挂载时函数");
  }
  componentWillUnmount() {
    console.log("在此处编写卸载后函数");
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
      </div>
    );
  }
}
```

react 生命周期在此处不多做介绍,此后会单独开篇来记录

在类组件中我们可以使用 state 来管理状态如:

```tsx
class MyComp extends React.Component {
  constructor() {
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +1
        </button>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          -1
        </button>
      </div>
    );
  }
}
```

在 react 的类组件中我们可以使用 props 参数来接收父组件传递的属性:

子组件

```tsx
class ChildComp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>Hello {this.props.name}!</h1>
      </>
    );
  }
}
```

父组件

```tsx
class ParentComp extends React.Component {
  render() {
    return (
      <>
        <ChildComp name="React" />
      </>
    );
  }
}
```

### 函数组件 Function

函数组件是使用函数创建组件,在编写时同样需要返回一段 JSX 代码来作为组件本体如

```tsx
function MyComp() {
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}
```

使用函数组件,我们可以避免复杂的操作,更迅速更便捷的来使用 React,伴随着 HOOK 函数的流行,函数组件也被更多的 coder 喜爱.

在函数组件中,状态管理也换了一种写法,在这里引入了 useState 这一钩子函数来管理状态,这样避免了在类组件中进行令人烦恼的 state 的 this 调用,简化了代码,在本篇目中只为简单介绍使用方式,具体的 StateHook 在其他篇目做进一步讲解,具体使用方法如下:

```tsx
function MyComp() {
  const [count, useCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count+1)>
        +1
      </button>
      <h1>{ count}</h1>
      <button onClick={() => setCount(count-1)}>
        -1
      </button>
    </div>
  );
}
```

单纯的从行数可以看出,使用函数来定义组件相较于实用类来定义组件代码简介了很多

在函数组件中也同样支持使用 props 来接收父组件传给子组件的属性,而且和 state 类似,同样避免了 this 调用,我们可以直接使用 props 对象里的属性,但需要注意的时 props 是**只读的**,在子组件中不能直接修改 props 值.
子组件
```tsx
class ChildComp(props){
    return (<>
        <h1>Hello {props.name}!</h1>
    </>)
}
```
父组件
```tsx
function ParentComp() {
  return (
    <>
      <ChildComp name="React" />
    </>
  );
}
```
简单在函数组件中使用props如上所示,同样代码很简洁

和类组件另一个很大的不同是函数组件内没有生命周期,但是React给我们提供了useEffect钩子来模拟生命周期,下面简单写一个模拟componentDidMount的方法,其他生命周期在Hook篇进行详细讲解
```tsx
function MyComp(){
  useEffect(()=>{console.log('首次渲染页面')},[])
  return (
    <>
      <h1>Hello World!</h1>
    </>
  )
}
```

## 条件渲染
相较于Vue使用v-if和v-show来实现条件渲染,React实现条件渲染的方式略微复杂,在[React官方文档](https://react.docschina.org/docs/conditional-rendering.html)中,对需要进行条件渲染的组件进行了一层封装,如下

观察这两个组件:
```tsx
function UserGreeting() {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}

```
再创建一个 Greeting 组件，它会根据用户是否登录来决定显示上面的哪一个组件。
```tsx
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
// Try changing to isLoggedIn={true}:
root.render(<Greeting isLoggedIn={false} />);

```
除了这一种方法我们可以使用三元表达式来进行判断渲染
```tsx
const root = ReactDOM.createRoot(document.getElementById('root')); 
// Try changing to isLoggedIn={true}:
root.render(<>{isLoggedIn?<UserGreeting />:<GuestGreeting />}</>);

```

## 列表 & Key

## 表单

## 状态提升
