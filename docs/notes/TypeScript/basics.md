<!-- ---
prev: ../JavaScript
next: ../React
--- -->
# 基础篇

### 原始数据类性和 any

undefined 和 null 是所有类型的子类型

### 数组和元组

Array

```ts
let arrOfNumber: number[] = [1, 2, 3];
let arrOfString: string[] = ["a", "b", "c"];
let arrOfBoolean: boolean[] = [true, false];
```

Tuple

```ts
let user: [string, number] = ["zs", 19];
user.push("男");
```

### interface 接口

对对象的形状(shape)进行描述
对函数类型进行描述
Duck Typing 鸭子类型

```ts
interface IPerson {
  readonly id: number;
  name: string;
  age: number;
  sex?: "男";
}

let user: IPerson = {
  id: 1,
  name: "zs",
  age: 19,
};
```

### Function 函数

- 在 js 中 函数是一等公民

```ts
function add(x: number, y: number, z?: number): number {
  if (typeof z === "number") return x + y + z;
  return x + y;
}
console.log(add(1, 2, 3));
interface ISum {
  (x: number, y: number, z?: number): number;
}
let add2: ISum = add;
```

### 类型推论,联合类型和类型断言

#### 联合类型

```ts
let numOrStr: number | string;
```

只能访问共有方法(交集)

#### 类型断言

使用`as`进行类型断言,使用者清楚知道某个值的详细信息

```ts
function getLength(value: string | number): number {
  const str = value as string;
  if (str.length) return str.length;
  const number = value as number;
  return number.toString().length;
}
```

### 类 Class

类(Class):定义了一起事物的抽象特点
对象(Object):类的实例
面向对象(OOP)三大特征:封装,继承,多态(不同实例不同方法)

- private:私有,自己访问
- public:公开访问
- protected:自己以及子类访问

```ts
class Animal {
  readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
  protected run() {
    return `${this.name} is running`;
  }
}

class Dog extends Animal {
  static color: string[] = ["yellow"];
  constructor(name: string) {
    super(name);
    console.log(this.name);
  }
  run() {
    return "Woo " + super.run();
  }
}
let tiger = new Animal("泰格");
// console.log(tiger.run()); // 属性“run”受保护，只能在类“Animal”及其子类中访问。
// tiger.name='tiger'; // 无法分配到 "name" ，因为它是只读属性。
let dh = new Dog("dahuang");
console.log(dh.run()); // Woo dahuang is running
```

### 类和接口

在 js 中，一个 class 只能继承自另一个 class，若其他类中的方法与属性也想继承，则很麻烦。而在 ts 中可以使用 implements 来实现一些类共有方法属性的提取。

```ts
interface Radio {
  switchRadio(trigger: boolean): void;
}
interface Battery {
  checkBatteryStatus(): void;
}
interface RadioWidthBattery extends Radio {
  checkBatteryStatus(): void;
}
// interface 抽象验证类的属性
// implements 实现方法

class Car implements Radio {
  switchRadio(trigger: boolean) {}
}
class Cellphone implements RadioWidthBattery {
  switchRadio(trigger: boolean) {}
  checkBatteryStatus() {}
}
```

上述两个类都有一个共同的方法，我们可以使用 interface 接口把他提取出来,implements 实现它。此时 car 和 cellphone 两个类中都需要有 switchRadio 方法，不然会报错。

interface 还可以继承，直接用 extends 即可

### 枚举

- 常量值:const number
- 计算值:computed number

```ts
enum Direction {
  Up,
  Down,
  Right,
  Left,
}

console.log(Direction.Up);
console.log(Direction.Left);
console.log(Direction[0]);
```

```ts
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Right = "RIGHT",
  Left = "LEFT",
}

const value = "UP";
if (value === Direction.Up) {
  console.log("go up!");
}
```

### 类型别名,字面量和交叉类型

类型别名

```ts
type PlusType = (x: number, y: number) => number;
let sum: PlusType = (x, y) => {
  return x + y;
};
const result = sum(1, 2);
const result2 = sum(2, 3);
console.log(result, result2); // 3 5

type StrOrNumber = string | number;
let result3: StrOrNumber = "123";
result3 = 123;
```

字符串字面量

```ts
const str: "name" = "name";
const number: 1 = 1;

type Directions = "Up" | "Down" | "Left" | "Right";
let toWhere: Directions = "Left";
```

交叉类型

```ts
interface IName {
  name: string;
}

type IPerson = IName & { age: number };
let person: IPerson = { name: "zs", age: 19 };
```

### 声明文件

TypeScript 作为 JavaScript 的超集，在开发过程中不可避免要引用其他第三方的 JavaScript 的库。虽然通过直接引用可以调用库的类和方法，但是却无法使用 TypeScript 诸如类型检查等特性功能。为了解决这个问题，需要将这些库里的函数和方法体去掉后只保留导出类型声明，而产生了一个描述 JavaScript 库和模块信息的声明文件。通过引用这个声明文件，就可以借用 TypeScript 的各种特性来使用库文件了。

### 内置类型
类似Date,RegExp...
~~~ts
const a: Array<number> = [1, 2, 3];
const date = new Date();

console.log(date.getTime());
const reg = /abc/;
console.log(reg.test("abc"));

console.log(Math.pow(2, 2));

let body = document.body;
let allLis = body.querySelectorAll("li");
allLis.length;
body.addEventListener("click", (e) => {
  console.log(e);
  e.preventDefault()
});

~~~

- Omit 去除类型中某些项
  - `type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;`
  - Omit会构造一个除类型K外具有T性质的类型
- Pick 选取类型中指定类型
  - `type Pick<T, K extends keyof T> = { [P in K] : T[P]; };`
  - 从T中选择一组属性，将它们在K中联合
- Partial 将类型中所有选项变为可选，即加上？
  - `type Partial<T> = {[P in keyof T]?: T[P];};`
- Required 将类型中所有选项变为必选，去除所有？
  - `type Required<T> = {[P in keyof T]-?: T[P];};`

