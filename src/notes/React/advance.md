<!-- ---
prev: ../TypeScript
next: ../Vue
--- -->

# 进阶篇

## Hook

### useState

先放上 React 官方类型定义

```ts
type Dispatch<A> = (value: A) => void;
type SetStateAction<S> = S | ((prevState: S) => S);
```

```ts
/**
 * Returns a stateful value, and a function to update it.
 *
 * @version 16.8.0
 * @see https://reactjs.org/docs/hooks-reference.html#usestate
 */
function useState<S>(
  initialState: S | (() => S)
): [S, Dispatch<SetStateAction<S>>];
```

我们在使用 useState 的时候会给 useState 传递一个参数,而这个参数的返回值是一个数组,

数组中有两个元素,第一个元素为我们设置的值,第二个为更新 第一个值的方法

在类型定义上看,S 为一个泛型,用来指定初始值的类型,从括号中看,传入参数可以为一个值或者一个函数,这个函数返回值是一个数组,第一个值是我们的初始值,第二个参数为 dispatch,dispatch 本质是一个函数,接收一个参数这个参数可以是具体的值也可以是一个函数,如果是一个函数,那么这个函数返回的参数就是上一次设置的值

```tsx
import { useState } from "react";
const Index = () => {
  const [count, setCount] = useState(() => 0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount((prevCount) => prevCount + 2)}>+2</button>
    </div>
  );
};
```

如果我们将 button 的点击事件抽离出来,并且在点击事件中连续执行四次 setCount,那么它执行的结果是什么呢,它只会+10

```tsx
const Index = () => {
  const [count, setCount] = useState(() => 0);
  const btnClick = () => {
    setCount(count + 10);
    setCount(count + 10);
    setCount(count + 10);
    setCount(count + 10);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount((prevCount) => prevCount + 2)}>+2</button>
      <button onClick={btnClick}>+40</button>
    </div>
  );
};
```

这个函数内的 setCount 只会执行一次,但是当我们用另一种方法时,他就会执行我们想要执行的次数

```tsx
const btnClick = () => {
  setCount((prevCount) => prevCount + 10);
  setCount((prevCount) => prevCount + 10);
  setCount((prevCount) => prevCount + 10);
  setCount((prevCount) => prevCount + 10);
};
```

useState 这个 Hook 是用来管理 state 的，它可以让函数组件具有维持状态的能力。即在一个函数组件的多次渲染之间，这个 state 是共享的。

### useEffect

effect 意为副作用
通过 Effect Hook 可以来获得一些类似与 class 中生命周期的功能
事实上,类似于网络请求,手动更新 Dom,事件监听,都是 React 更新 Dom 的一些副作用,所以对于完成这些功能的 Hook 被称为 Effect Hook

从定义来看

```tsx
type DependencyList = ReadonlyArray<unknown>;
```

```tsx
/**
 * Accepts a function that contains imperative, possibly effectful code.
 *
 * @param effect Imperative function that can return a cleanup function
 * @param deps If present, effect will only activate if the values in the list change.
 *
 * @version 16.8.0
 * @see https://reactjs.org/docs/hooks-reference.html#useeffect
 */
function useEffect(effect: EffectCallback, deps?: DependencyList): void;
```

useEffect 函数第二个参数是一个数组,该数组储存函数依赖,

- 当第二个参数不传时,只要逐渐重新渲染,那么 useEffect 函数都会重新执行一遍
- 当第二个参数为空数组`[]`时,只会在组件渲染时执行一次
- 当第二个参数的数组中有参数时,对应的 useEffect 会在该参数变化时进行执行
  通过 useEffect 的 Hook,可以告诉 React 需要在渲染后执行某些操作,useEffect 要求我们传入一个回调函数,在 React 执行更新完 Dom 操作后,就会执行这个回调函数,默认情况下,无论是第一次选然后还是每次更新之后都会执行这个回调函数

在 React 组件中,useEffect 不止能定义一个,在组件中我们不可避免的在生命周期中做一些操作,我们可以定义多个 useEffect 来区分操作,useEffect 执行的顺序就是定义的顺序如:

```tsx
const Index = () => {
  const [count, setCount] = useState(() => 0);
  // 网络请求
  useEffect(() => {
    console.log("网络请求");
  }, []);
  // 修改Dom
  useEffect(() => {
    console.log("修改Dom:button内容改变", count);
  }, [count]);
  // 定义事件
  useEffect(() => {
    console.log("订阅一些事件");
    return () => {
      console.log("取消订阅某些事件");
    };
  }, []);
  return (
    <div>
      <h1>useEffect Hook</h1>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
};
```

### useContext

Context Hook 是可以让子组件给后代组件共享数据

接受一个上下文对象(从' React.createContext '返回的值)并返回当前\* context 值，该值由最近的给定上下文提供程序提供。

```tsx
/**
 * Accepts a context object (the value returned from `React.createContext`) and returns the current
 * context value, as given by the nearest context provider for the given context.
 *
 * @version 16.8.0
 * @see https://reactjs.org/docs/hooks-reference.html#usecontext
 */
function useContext<T>(
  context: Context<T> /*, (not public API) observedBits?: number|boolean */
): T;
```

子孙组件

```tsx
import { useContext } from "react";
import { FirContext, SecContext } from ".";
export const MyComp = () => {
  const fir = useContext(FirContext);
  const sec = useContext(SecContext);
  return (
    <div>
      <h1>MyComp</h1>
      <h3>
        {fir.title}:{fir.content}
      </h3>
      <h3>
        {sec.title}:{sec.content}
      </h3>
    </div>
  );
};
```

父组件

```tsx
import { createContext } from "react";

export const FirContext = createContext();
export const SecContext = createContext();

const Index = () => {
  return (
    <div>
      <h1>Context Hook</h1>
      <FirContext.Provider
        value={{
          title: "FirContext",
          content: "Docs Content FirContext.Provider",
        }}
      >
        <SecContext.Provider
          value={{
            title: "SecContext",
            content: "Docs Content SecContext.Provider",
          }}
        >
          <MyComp />
        </SecContext.Provider>
      </FirContext.Provider>
    </div>
  );
};
```

### useReducer

在某些场景下,如果 state 处理的逻辑较为复杂,可以使用 useReducer 来对其进行拆分,或者这次修改的 state 需要依赖之前的 state 时也可以使用
看看官方怎么说:

```tsx
/**
 * An alternative to `useState`.
 *
 * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
 * multiple sub-values. It also lets you optimize performance for components that trigger deep
 * updates because you can pass `dispatch` down instead of callbacks.
 *
 * @version 16.8.0
 * @see https://reactjs.org/docs/hooks-reference.html#usereducer
 */
// overload where dispatch could accept 0 arguments.
function useReducer<R extends ReducerWithoutAction<any>, I>(
  reducer: R,
  initializerArg: I,
  initializer: (arg: I) => ReducerStateWithoutAction<R>
): [ReducerStateWithoutAction<R>, DispatchWithoutAction];
```

从上述代码可以看出,useReducer 是 useState 的另一种选择,当我们要实现的状态逻辑较为复杂时,useReducer 优先级更高,还可以优化触发深度更新组件的性能,因为 useReduce 可以向下出传递 dispatch 而不是回调

useReducer 支持我们传递三个参数,
第一个参数是 reducer 纯函数
第二个参数是我们要使用的初始化值
第三个参数是一个函数,它支持我们对 useReducer 进行初始化操作

```tsx
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    // return { ...state, count:count+1 };
    case "decrement":
      return state - 1;
    // return { ...state, count: count - 1 };
    default:
      return state;
  }
};

const Index = () => {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, 1);
  // const [state, dispatch] = useReducer(reducer, { count: 1 });
  return (
    <>
      <h1>useReducer</h1>
      <h2>当前计数:{state}</h2>
      {/* <h2>当前计数:{state.count}</h2> */}
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
    </>
  );
};
```

从上面代码可以看出我们可以传递两种不同形式的参数,数字和对象,对应的使用方法也需要改变,同时我们可以对 reducer 进行抽离来复用,改变的数据不会共享

### useRef

useRef 在 react 中有两个作用

- 用来存储数据
- 使用 Ref 访问 DOM 元素

在第一个作用中 useRef 创建一个对象来存储数据,和 useState 不同的是,改变 useRef 创造出来的对象的值组件不会重新渲染,需要等到下次渲染才会显示到页面上

在函数组件中进行获取 Dom 元素时,有时会结合`forwardRef`来使用,`forwardRef`可以用来转发 `ref`,使用`forwardRef`包裹的组件接收第二个参数`ref`,这个`ref`为父组件传入的`ref`,从而可以对子组件中的 Dom 进行操作.

```tsx
import React, { forwardRef, useRef } from "react";

const Foo = forwardRef((props, iptRef: any) => {
  const clickHandler = () => {
    console.log("iptRef", iptRef);
    iptRef.current.focus();
  };
  return (
    <div>
      <input type="text" ref={iptRef} />
      <button onClick={clickHandler}>聚焦</button>
    </div>
  );
});

const Demo = () => {
  const fooRef = useRef<any>();
  const clickHandler = () => {
    console.log("fooRef", fooRef);
    fooRef.current.focus();
  };
  return (
    <div>
      <Foo ref={fooRef} />
      <button onClick={clickHandler}>FOO REF</button>
    </div>
  );
};

export default Demo;
```

上述代码两个按钮均可实现输入框聚焦功能,当点击按钮时控制带打印如下

```shell
index.tsx:5 iptRef {current: input}
index.tsx:19 fooRef {current: input}
```

这两个 `ref` 操作的是同一个 `Dom` 节点

### useCallback

useCallback 的实际目的是进行性能优化,useCallback 会返回一个函数的 memoized(记忆值);在依赖不变的情况下,多次定义的时候,返回的值是相同的
useCallback 接收两个参数,第一个参数是要完成的回调,第二个参数是回调依赖值

```tsx
// @flow
import * as React from "react";
const Foo = React.memo((props: any) => {
  console.log("Foo render");
  return (
    <div>
      <ul>{props.render()}</ul>
    </div>
  );
});
export default (props: Props) => {
  const [range, setRange] = React.useState({ min: 0, max: 10 });
  const [count, setCount] = React.useState(0);
  console.log("APP render");
  const render = () => {
    let list = [];
    console.log("Render Function Action");
    for (let i = 0; i < range.max; i++) {
      list.push(<li key={i}>{i}</li>);
    }
    return list;
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        <h1>+1</h1>
      </button>
      <button
        onClick={() =>
          setRange({
            min: range.min,
            max: range.max + 10,
          })
        }
      >
        <h1>range max +10</h1>
      </button>
      <Foo render={render}></Foo>
    </div>
  );
};
```

以上述代码为例`render`函数渲染了一个数字列表,当我们点击`+1` 按钮时`count +1`组件重新渲染,控制台会打印以下

```shell
index.tsx:17 APP render
index.tsx:7 Foo render
index.tsx:20 Render Function Action
```

但是此时 `render` 函数还是原来的那个 `render`,同一引用,本质上没有发生变化,但是它任然会再渲染一边,这不是我们想要的,此时就可以使用 `useCallback` 进行简单优化,仔细观察整个函数,函数的渲染只和`renge.max`有关,所以只需要监听这个 range 依赖,当 `range` 变化时再重新渲染

```tsx
const render = React.useCallback(() => {
  console.log("Render Function Action");
  let list = [];
  console.log(1);
  for (let i = 0; i < range.max; i++) {
    list.push(<li key={i}>{i}</li>);
  }
  return list;
}, [range]);
```

### useMemo

`useMemo` 和 `useCallback` 都可以进行 `react` 组件优化,但不同的一点是 `useCallback` 是固定的是一个函数,而 useMemo 固定的是一个值
以 `useCallback` 代码为例,我们使用 `useMemo` 替换 `useCallback`

```tsx
const render = React.useMemo(() => {
  console.log("Render Function Action");
  let list = [];
  console.log(1);
  for (let i = 0; i < range.max; i++) {
    list.push(<li key={i}>{i}</li>);
  }
  return list;
}, [range]);
```

函数已经经过替换,但是想要正常使用,仍需要修改 `render` 的使用方法,`useCallback` 包裹的函数在调用时仍是一个函数,我们需要加括号进行调用,而 `useMemo` 包裹的函数直接调用其值即可

```tsx
// useCallback
<ul>{props.render()}</ul>
```

```tsx
// useMemo
<ul>{props.render}</ul>
```

`useMemo` 是性能优化的手段,传入 `useMemo` 的函数会在渲染期间执行,最好不要再函数内部执行与渲染无关的操作,诸如副作用的操作属于 `useEffect` 的范畴,而不是 `useMemo`.`useMemo` 只负责渲染

`useCallback(fn,deps) ` 相当于 ` useMemo(()=>fn,deps)`

### memo

和 `useCallback` 与 `useMemo` 定义函数逻辑,优化函数处理不同,`memo` 是优化函数组件的一种方式,它可以让组件不重复渲染,不进行刷新

```tsx
// @flow
import * as React from "react";
const Foo = (props: any) => {
  console.log("Foo render");
  return (
    <div>
      <h2>{props.count}</h2>
    </div>
  );
};

export default (props: Props) => {
  const [count, setCount] = React.useState(0);
  console.log("APP render");
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <Foo count={1}></Foo>
    </div>
  );
};
```

如上述代码所示,当我们点击+1 按钮时,count 发生变化此时页面会重新渲染,`Foo render`,`App render`均会打印,但是此时的`Foo`组件没有进行改变,和渲染前并无区别,所以没必要进行渲染,而`memo`所做的事就是当`Foo`的依赖如`count`发生变化时,`Foo`才会重新渲染

```jsx
const Foo = React.memo((props: any) => {
  console.log("Foo render");
  return (
    <div>
      <h2>{props.count}</h2>
    </div>
  );
});
```

将上述`Foo`组件使用`memo`进行包裹此时再点击+1 按钮,只会打印`App render`,而`Foo render`不会进行打印,这就起到了优化的作用
