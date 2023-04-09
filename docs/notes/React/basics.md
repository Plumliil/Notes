<!-- ---
prev: ../TypeScript
next: ../Vue
--- -->

# 基础篇

## 创建项目

使用 React 创建项目主要有以下几种方式

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

除了这两种方式外还可以使用 umi,next 等一些应用框架来直接搭建 React 项目
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

## 类组件 & 函数组件

在 React 中我们可以使用两种方法来创建 React 元素组件,这两种组件分别是函数组件和类组件,在 Hooks 逐渐流行的今天,函数组件应用范围越来越广而类组件写法日渐式微,接下来分开讲讲这两个组件编写方式

### 类组件 Class

类组件顾名思义就是使用 javascript 关键字 class 来创建组件,它继承自 React.Component,在编写时我们需要返回一段 JSX 代码来作为组件本体如

```tsx
class MyComp extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
}
```

但是类组件不只有`render`这一个函数这么简单,在类组件中我们可以完整的运用 React 组件的生命周期如 constructor,componentDidMount 等,如下

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

在 React 的类组件中我们可以使用 props 参数来接收父组件传递的属性:

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

简单在函数组件中使用 props 如上所示,同样代码很简洁

和类组件另一个很大的不同是函数组件内没有生命周期,但是 React 给我们提供了 useEffect 钩子来模拟生命周期,下面简单写一个模拟 componentDidMount 的方法,其他生命周期在 Hook 篇进行详细讲解

```tsx
function MyComp() {
  useEffect(() => {
    console.log("首次渲染页面");
  }, []);
  return (
    <>
      <h1>Hello World!</h1>
    </>
  );
}
```
## State & 生命周期
在React中,state用来进行渲染组件内的数据,在Class组件中中我们可以通过this.state来使用,this.setState来修改,和Class组件不同在函数组件中,我们使用Hook函数useState来进行state的定义和修改


生命周期的运用在Class组件和函数组件中也有区别,先贴上一张流传比较广React的生命周期图示
![React生命周期.png](https://s2.loli.net/2023/03/29/JPTiefqmlMRprbG.png)

React的生命周期可以分为
- constructor:在组件挂载前被调用,并且如果必要的话需要在其他语句之前在此调用super(),通常在此生命周期中来初始化state数据以及为事件处理函数绑定实例
- static getDerivedStateFromProps:语义化的意思是从props中湖区state,作用是将传入的props映射到state上,在render方法前调用,并且在每次渲染时都会调用,对于我来说,这个生命周期函数很少会用到
- render:该方法是class组件中唯一必须实现的方法，用于渲染dom, render()方法必须返回reactDOM
- conponentDidMount:组件挂载后立即调用,最常用到的生命周期函数,通常在这里进行网络请求的发起以及事件监听方法的启用,并且可以在此直接调用setState()进行state修改
- shouldComponentUpdate:组件更新前调用,可以控制组件是否更新,返回true时组件更新,false时组件不更新,值得注意的是在此调用setState会持续触发组件更新渲染,直到内存崩溃
- getSnapshotBeforeUpdate:在最近一次的渲染输出被提交前调用,即render后componentDidMount前
- componentDidUpdate:会在组件更新后立即调用,首次渲染组件时不执行该生命周期函数
- componentWillUnmount:在组建即将被卸载或者销毁时进行调用,在此处可以移除监听事件或定时器,清理Dom元素等操作

生命周期的执行顺序如下:
创建时:
- constructor()
- static getDerivedStateFromProps()
- render()
- componentDidMount()
更新时
- static getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()
卸载时
- componentWillUnmount()

在函数式组件中没有具体的生命周期函数,上述的constructor函数组件在创建执行时相当于调用了constructor,而组建的返回值就是render的返回值,但是例如componentDidMount,componentDidUpdate,componentWillUnmount等函数无法使用
但是在`React v16.8.0`中,推出了`Hooks API`,我们可以使用其中的useEffect来进行生命周期的模拟,来在函数时组件中模拟生命周期
使用useEffect模拟最常用的几个钩子方法如下:
- 模拟componentDidMount: `useEffect(() => console.log('mounted'), []);`第二个元素为空数组,只会在组件挂载后运行一次
- 模拟componentDidUpdate:`useEffect(() => console.log('mounted or updated'));`第二个参数不写,表示任意一个值state发生变化就会触发该函数
- 模拟componentWillUnmount:`useEffect(() => { return () => {console.log('will unmount')}});`在第一个函数中返回一个函数代表组件将被卸载,这个函数就是组件卸载前执行的最后一次代码,而第一个函数是在渲染时执行

## 条件渲染

相较于 Vue 使用 v-if 和 v-show 来实现条件渲染,React 实现条件渲染的方式略微复杂,在[React 官方文档](https://react.docschina.org/docs/conditional-rendering.html)中,对需要进行条件渲染的组件进行了一层封装,如下

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

const root = ReactDOM.createRoot(document.getElementById("root"));
// Try changing to isLoggedIn={true}:
root.render(<Greeting isLoggedIn={false} />);
```

除了这一种方法我们可以使用三元表达式来进行判断渲染

```tsx
const root = ReactDOM.createRoot(document.getElementById("root"));
// Try changing to isLoggedIn={true}:
root.render(<>{isLoggedIn ? <UserGreeting /> : <GuestGreeting />}</>);
```

## 列表 & Key

### 列表

在 React 中可以通过数组的循环来创建列表

```tsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers) => <li>{numbers}</li>);
ReactDOM.render(<ul>{listItems}</ul>, document.getElementById("example"));
```

上述是渲染的一种方式,我们也可以选择直接将渲染后的 jsx 放在`{}`来进行列表的渲染

```tsx
const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <ul>
    {numbers.map((numbers) => (
      <li>{numbers}</li>
    ))}
  </ul>,
  document.getElementById("example")
);
```

在渲染时我们需要给每个被渲染的元素一个唯一的 key,不然会出现警告 a key should be provided for list items

### Key

Key 可以在 DOM 中的某些元素被增加或删除的时候帮助 React 识别哪些元素发生了变化。因此你应当给数组中的每一个元素赋予一个确定的标识。

Key 只需要在兄弟节点之间保持唯一性

当我们进行列表渲染组件时需要注意 key 的位置,需要直接放在子组件上而不是子组件内部的 jsx 代码中

```tsx
function ListItem(props) {
  // 正确！这里不需要指定 key：
  return <li>{props.value}</li>;
}
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    // 正确！key 应该在数组的上下文中被指定
    <ListItem key={number.toString()} value={number} />
  ));
  return <ul>{listItems}</ul>;
}
const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById("root")
);
```

## 表单

在 React 里，HTML 表单元素的工作方式和其他的 DOM 元素有些不同，这是因为表单元素通常会保持一些内部的 state。
以函数组件和 input 标签为例,我们一般会修改 input 标签的 value,将 value 设置为 state 中的数据,并通过 input 的 onChange 事件配合 setState 来进行表单内容的获取以及修改,如下:

```tsx
function MyComp() {
  const [iptValue, setIptValue] = useState("");
  const inputHandler = (e: any) => {
    setIptValue(e.target.value);
  };
  return (
    <>
      <input value={iptValue} onChange={inputHandler} />
      <h2>{iptValue ? iptValue : "我是input内容"}</h2>
    </>
  );
}
```
除了input元素以外,textarea和select的使用也大致相同

当我们需要选择处理多个input元素时,我们可以给每个input添加name属性,并通过event.target.name来选择我们需要处理的那一个input
```tsx
function IndexPage() {
  const [iptValue, setIptValue] = useState('');
  const [iptValue2, setIptValue2] = useState('');
  const [iptValue3, setIptValue3] = useState('');
  const [context, setContext] = useState('');
  const inputHandler = (e: any) => {
    if (e.target.name === 'ipt1') {
      setIptValue(e.target.value);
      setContext('iptValue:' + iptValue);
    } else if (e.target.name === 'ipt2') {
      setIptValue2(e.target.value);
      setContext('iptValue2:' + iptValue2);
    } else {
      setIptValue3(e.target.value);
      setContext('iptValue3:' + iptValue3);
    }
  };
  return (
     <>
      <input value={iptValue} onChange={inputHandler} name="ipt1" />
      <input value={iptValue2} onChange={inputHandler} name="ipt2" />
      <input value={iptValue3} onChange={inputHandler} name="ipt3" />
      <h2>{context ? context : '我是input内容'}</h2>
    </>
  );
}

```

## 状态提升

> 通常，多个组件需要反映相同的变化数据，这时我们建议将共享状态提升到最近的共同父组件中去。[React 状态提升](https://react.docschina.org/docs/lifting-state-up.html)

在 React 中状态提升指的是公共父组件统一管理子组件状态的过程。如下列代码所示,我们创建了两个子组件,`Child1,Child2`,一个父组件`Parent`

```tsx
function Child1(props: any) {
  const [child1Value, setChild1Value] = useState(0);
  useEffect(() => {
    setChild1Value(props.value1 * 2);
  }, [props.value1]);
  const changeValue = (e: any) => {
    props.onValueChange(e.target.value);
  };
  return <input value={child1Value} onChange={changeValue} />;
}
```
```tsx
function Child2(props: any) {
  const [child2Value, setChild2Value] = useState(0);
  const changeValue = (e: any) => {
    props.onValueChange(e.target.value);
  };
  useEffect(() => {
    setChild2Value(props.value2 * 3);
  }, [props.value2]);
  return <input value={child2Value} onChange={changeValue} />;
}
```
```tsx
function Parent() {
  const [iptValue, setIptValue] = useState('');
  const onValueChange = (value: any) => {
    setIptValue(value);
  };
  useEffect(() => {}, [iptValue]);
  return (
    <>
      <Child1 value1={iptValue} onValueChange={onValueChange} />
      <Child2 value2={iptValue} onValueChange={onValueChange} />
    </>
  );
}
```
在这两个组件中实现了分别实现了两个很简单的功能,在`Child1`和`Child2`中分别对父组件传递过来的`value`属性进行数学运算,并通过`onValueChange`事件对父组件中的`iptValue`进行修改,实现子组件修改父组件的数据,子组件依赖父组件数据.

在以上代码中`Child1,Child2`都需要反映相同的变化数据`iptValue`,且需要同步变化,同时这两个子组件之间不能相互作用,此时就可以公共父组件处理要渲染的数据.

React 的状态提升就是用户对子组件操作，子组件不改变自己的状态，通过自己的`props`事件把这个操作改变的数据传递给父组件，改变父组件的状态，从而改变受父组件控制的所有子组件的状态，这也是**React单项数据流**的特性决定的。

> 在 React 应用中，任何可变数据应当只有一个相对应的唯一“数据源”。通常，state 都是首先添加到需要渲染数据的组件中去。然后，如果其他组件也需要这个 state，那么你可以将它提升至这些组件的最近共同父组件中。你应当依靠自上而下的数据流，而不是尝试在不同组件间同步 state。[React 状态提升](https://react.docschina.org/docs/lifting-state-up.html)
