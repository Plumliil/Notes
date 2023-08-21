# 基础篇

## 什么是 java

### java 特点

- 简洁高效
- 跨平台啊
- 面向对象
- 分布式计算
- 健壮性
- 多线程

### java 运行机制

java 源文件编译成字节码文件`.class`16 进制 计算机读取字节码文件运行程序

### java 三大体系

- java SE: 定义了 java 的核心类库,包含了各种常用组件,是 java 开发的基础
- Java ME: 基于 java SE, 针对移动端设备的开发组件,比如收集,机顶盒等
- java EE: 基于 java SE 扩展出来的企业级开发组件,如 java web,servlet,jsp 等

### java 环境

- JRE: Java Runtime Environment java 运行环境
- JDK: Java Development Kit java 开发包

## java 基础

### 简单的 java 程序

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("hello world");
    }
}
```

### java 编码规范

#### 强制规范

- java 文件名类名必须保持一致
- main 方法为程序的入口,必须按照格式编写,唯一能改的地方为参数格式一个参数名
- 类是组织架构代码结构的,类中的方法是执行业务逻辑的,类和方法都必须使用花括号来组织结构,必须成对出现

#### 建议规范

- 一行只写一条语句
- 代码缩进注意

### 注释

#### 单行

```java
// 注释内容
int num = 1
```

#### 多行

```java
/*
 注释内容
*/
int num = 1
```

#### 文档注释

```java
/**
 * 注释内容
 */
int num = 1
```

### 关键字

java 中预先定义好的,具有指定意义的标识符,是程序的核心组成部分,不是由开发者定义的

java 程序 = 关键字 + java 类库 + 开发者自定义的标识符

```java
public class Main {
    public static void main(String[] args) {
        System.out.printf("Hello World!");
    }
}
```

在上述代码中

- 关键字: public , static , void , main
- java 类库: System.out.println
- 开发者自定义标识符: Hello World

更多关键字可点击[此处](https://baike.baidu.com/item/java%E5%85%B3%E9%94%AE%E5%AD%97/5808816)查看

### 变量

#### 什么是变量

变量是计算机语言中一个概念,可以表示某个具体的值,并且这个值可以改变

计算机存储数据的地方叫做内存,内存会为不同的数据开辟不同的空间来进行存储

程序是通过内存地址找到具体的储存空间,从中取出数据,内存地址是 16 进制的数据

java 中变量三要素: 数据类型 变量名 变量值

```java
int num1 = 1
double num2 = 3.1415926
```

#### 如何使用变量

- 创建变量
  - 1. 声明变量的数据类型和变量名,变量可以包括数字字母下划线$不能包含空格运算发,不能以纯关键字,纯数字来命名 `int num`
  - 2. 给内存空间赋值 `num = 100`

### 基本数据类型

在 java 中共有 8 中数据类型,整体来说可分为两大类,数值类型(整数,小数)和非数值类型(字母,单词,汉字)

| 分类       | 基本数据类型 | 所占空间                  | 描述                                    |
| ---------- | ------------ | ------------------------- | --------------------------------------- |
| 数值类型   | byte         | 1 个字节(8 位二进制数)    | 数据的最小单位,一个字节位 8 位 2 进制数 |
| 数值类型   | short        | 2 个字节(16 位二进制数)   | 短整型                                  |
| 数值类型   | int          | 4 个字节(32 位二进制数)   | 整形                                    |
| 数值类型   | long         | 8 个字节(64 位二进制数)   | 长整型                                  |
| 数值类型   | float        | 4 个字节(32 位二进制数)   | 单精度浮点型                            |
| 数值类型   | double       | 8 个字节(64 位进制数)     | 双精度浮点型                            |
| 非数值类型 | char         | 2 个字节(16 位 2 进制数)  | 单个字符                                |
| 非数值类型 | boolean      | 1/8 个字节(1 位 2 进制数) | 判断逻辑条件,成立或者不成立 true/false  |

### 数据类型转换

#### 自动转换

```java
public class Test {
    public static void main(String[] args) {
        int num = 10;
        double num2 = num;
        System.out.println(num2);
    }
}

```

转换过程由程序自动完成,程序会自动识别并且发生转换,但这种转换只能从低字节向高字节进行转换,反之则不行

同时浮点型数据可以对数据进行更加精确的描述,整型数据类型可以自动转为浮点型,无需考虑低字节高字节问题

#### 强制转换

```java
public class Test {
    public static void main(String[] args) {
        double num = 10.99;
        int num2 = (int)num;
        System.out.println(num2); // 10
    }
}

```

强制转换存在数据丢失问题,小数点后内容删除,只保留整数位,造成精度损失

### 运算符

#### 赋值运算符

用来做赋值运算,给变量赋值
语法: 数据类型 变量名 = 数值/变量

```java
// 将10赋值给num
int num = 10;
// 将num赋值给num2
int num2=num;
```

#### 基本算数运算符

完成 java 程序中基本的数学运算,只适用于数值类型数据( + 除外, + 可以进行字符串拼接)

- \+
- \-
- \*
- /
- %
- ++
- \--

操作数 运算符 操作数

#### 复合算数运算符

基于算术运算符进一步简化代码

`A+=B => A=A+B`

- +=
- -=
- \*=
- /=

#### 关系运算符

用来计算一个表达式是否成立 true / false

- ==
- !=
- \>
- <
- \>=
- <=

其中 `> < >= <=`只能用来比较数字
`== !=`除了比较数值类型,也可以判断两个对象是否相等 s's's's's's's's's's's's's's's's's's's

```java
public class Test {
    public static void main(String[] args) {
        int num1 = 10;
        int num2 = 11;
        System.out.println(num1 > num2); // false
        System.out.println(num1 < num2); // true
        System.out.println(num1 != num2); // true
    }
}
```

#### 逻辑运算符

只能用 boolean 类型的数据判断,主要哦按段 boolean 数据之间的逻辑关系

- 或: | , ||
- 且: & , &&
- 非: !

基本语法: 变量 A 逻辑运算符 变量 B

```java
public class Test {
    public static void main(String[] args) {
        int num1 = 10;
        int num2 = 11;
        System.out.println((++num1 == num2) && (++num1 != num2)); // true
    }
}

```

#### 条件运算符

条件运算符也叫做三元表达式 用来给变量赋值 根据不同条件赋不同值

```java
public class Test {
    public static void main(String[] args) {
        String str=11>10?"成立":"不成立";
        System.out.println(str); // 成立
    }
}
```

#### 位运算符

对表达式以二进制的形式进行计算 A&B A 和 B 转为二进制在进行运算

> 十进制和二进制的转换

> 十进制 转 二进制 : 目标除以 2 如果能除尽该位记作 0,除不尽记作 1,再对商进行除以 2,一直类推直到商为 0,将每一位的值进行反序组合就是二进制 10 -> 2:1010 15->2:1111 17->2:10001

> 二进制 转 十进制 : 从右往左算起,该位上数字乘以本位的权重(2 的第几位的次数减一次方) 2->10:2 的 2-1 次方 将乘积相加就是对应的十进制

- & : 按位与 A & B 每一位的数字一一对应,若都为 1,则该位记作 1,否则记作 0
- | : 按位或 A | B 每一位的数字一一对应,只要有 1 个 1,该位记作 1 ,否则为 0
- ^ : 按位异或 每一位的数字一一对应,相同记作 0,否则记作 1
- <<: 左移 A 乘以 2 的 B 次方 , 2 << 3 2*2^3->2*8
- \>>: 左移 A 除以 2 的 B 次方 , 2 >> 3 2/2^3->2/8

```java
public class Test {
    public static void main(String[] args) {
        int num = 2;
        int n1 = num << 3;
        int n2 = num >> 3;
        System.out.println(n1); // 16
        System.out.println(n2); // 0
        System.out.println(10 | 2); // 10
        System.out.println(10 | 5); // 15
        System.out.println(10 & 2); // 2
        System.out.println(10 ^ 3); // 9 10:1010 3:0011 => 1001 9
    }
}
```

### 流程控制

#### if else

```java
if(判断条件){
    // 条件成立
}else{
    // 条件不成立
}
```

#### 多重 if

```java
if(判断条件1){
    // 条件1成立
    if(判断条件2){
        // 条件2成立
    }else{
        // 条件2不成立
    }
}else if(判断条件三) {
    // 判断条件一不成立判断条件三成立
}else{
    判断条件一,三均不成立
}
```

#### switch case

switch case 只能完成等值判断,switch 支持的数据类型包括 int,short,,byte,char,枚举,String,不支持 boolean

```java
switch (变量){
    case 值1:
        代码1;
        break;
    case 值2:
        代码2;
        break;
    case 值3:
        代码3;
        break;
    ...
    default:
        代码n

}
```

#### while

循环四要素:

- 初始化循环变量
- 循环条件
- 循环条件
- 更新循环变量

```java
while(循环条件){
    // 循环体
}
```

```java
public class Test {
    public static void main(String[] args) {
        int num = 10;
        while (num > 1) {
            System.out.println("hello world");
            num--;
        }
    }
}

```

#### do while

while 先判断再执行,do while 先执行一次循环体再进行判断循环条件

```java
do{
    // 循环体
}while(循环条件)
```

#### for 循环

```java
for(初始化循环变量;循环条件;更新循环变量){
    循环体
}
```

```java
public class Test {
    public static void main(String[] args) {
        for (int i = 0; i < 10; i++) {
            System.out.println(i);
        }
    }
}
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

```

#### 双重循环

```java
public class Test {
    public static void main(String[] args) {
        for (int i = 0; i < 3; i++) {
            // 打印空格
            for (int k = 0; k < 2-i; k++) {
                System.out.print(" ");
            }
            // 打印*号
            for (int j = 0; j < 6; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
//   ******
//  ******
// ******
```

```java
public class Test {
    public static void main(String[] args) {
        for (int i = 0; i < 4; i++) {
            // 打印空格
            for (int j = 0; j < 3 - i; j++) {
                System.out.print(" ");
            }
            // 打印*号
            for (int j = 0; j < 2 * i + 1; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        for (int i = 0; i < 3; i++) {
            // 打印空格
            for (int j = 0; j < i + 1; j++) {
                System.out.print(" ");
            }
            // 打印*号
            for (int j = 0; j < 5 - 2 * i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
```

```java
public class Test {
    public static void main(String[] args) {
        for (int i = 1; i <= 9; i++) {
            // 打印空格
            for (int j = 0; j <= i; j++) {
                System.out.print(i + "*" + j + "=" + i * j + "\t");
            }
            System.out.println();
        }
    }
}
// 1*0=0	1*1=1
// 2*0=0	2*1=2	2*2=4
// 3*0=0	3*1=3	3*2=6	3*3=9
// 4*0=0	4*1=4	4*2=8	4*3=12	4*4=16
// 5*0=0	5*1=5	5*2=10	5*3=15	5*4=20	5*5=25
// 6*0=0	6*1=6	6*2=12	6*3=18	6*4=24	6*5=30	6*6=36
// 7*0=0	7*1=7	7*2=14	7*3=21	7*4=28	7*5=35	7*6=42	7*7=49
// 8*0=0	8*1=8	8*2=16	8*3=24	8*4=32	8*5=40	8*6=48	8*7=56	8*8=64
// 9*0=0	9*1=9	9*2=18	9*3=27	9*4=36	9*5=45	9*6=54	9*7=63	9*8=72	9*9=81
```

#### 终止循环

- break: 跳出整个循环体
- continue: 跳出本次循环,进入下次循环

```java
public class Test {
    public static void main(String[] args) {
        int sum = 0;
        for (int i = 1; i <= 100; i++) {
            sum += i;
//            if (sum > 50) continue; // 5050
//            if (sum > 50) break; // 55
        }
        System.out.println(sum);
    }
}
```

### 数组

#### 基本概念

在 java 中数组是一种可以存储大量数据类型相同的变量的数据结构,具有相同数据类型的数据集合

> 数组的基本要素

一个数组由四个基本元素构成:

- 数组名称
- 数组元素
- 元素下标
- 数据类型

#### 简单使用

- 声明数组: 数据类型 数组名[] / 数据类型[] 数组名 `int[] array / int array[]`
- 分配内存空间: 指定数组长度,数组一旦创建,长度不能修改
- 给数组赋值: 通过下表找到数组中位置进行赋值
- 使用数组: 通过下标取出数组中的具体数值

```java
public class Test {
    public static void main(String[] args) {
        int[] array = new int[4];
        array[0] = 90;
        array[1] = 86;
        array[2] = 79;
        array[3] = 93;
        int sum = 0;
        for (int i = 0; i < array.length; i++) {
            sum += array[i];
            System.out.println("平均分是:" + sum / array.length);
        }
    }
}

```

边声明边赋值

```java
public class Test {
    public static void main(String[] args) {
        int[] array1 = {10, 20, 30};
        int[] array2 = new int[]{40, 50, 60};
    }
}
```

基本数据类型的变量和值都保存在栈内存中

数组属于引用类型的存储,变量保存在栈内存中,变量的值保存在堆内存中,通过地址的引用进行关联

引用类型: 只要通过 new 关键字创建的变量都是引用类型

数组使用常见错误:

- 数据类型不匹配: 定义 int 声明 String

- 边声明边赋值必须写在同一行

- 数组下标越界

#### 实际运用

学员成绩为{96,93,87,80,73,62},增加一个 83 分的成绩,并进行降序排列

```java
import java.util.Arrays;

public class Test {
    public static void main(String[] args) {
        int[] array = {96, 93, 87, 80, 73, 62};
        int source = 83;
        int[] array2 = new int[array.length + 1];
        int index = 0;
        for (int i = 0; i < array.length; i++) {
            if (array[i] < source) {
                index = i;
                break;
            }
        }
        for (int i = 0; i < array2.length; i++) {
            if (i < index) {
                array2[i] = array[i];
            } else if (i == index) {
                array2[i] = source;
            } else {
                array2[i] = array[i-1];
            }
        }
        System.out.println(Arrays.toString(array2));
    }
}
```

#### 二维数组

```java
// 声明二维数组
int[][] array;
// 开辟内存空间 第二个不强制定义数组长度
array = new int[3][3];
array[0][0] = 1;
array[0][1] = 2;
array[0][2] = 3;
array[1][0] = 4;
array[1][1] = 5;
array[1][2] = 6;
array[2][0] = 7;
array[2][1] = 8;
array[2][2] = 9;
```

二维数组也支持边声明边赋值的方式

```java
int[][] array = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
int[][] array2 = new int[][]{{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
```

```java
public class Test {
    public static void main(String[] args) {
        // 声明二维数组
        int[][] array = new int[3][6];
        int sum = 0;
        for (int i = 0; i < array.length; i++) {
            System.out.println("-----第" + (i + 1) + "层-----");
            for (int j = 0; j < array[i].length; j++) {
                int num = (i + 1) * (j + 1);
                System.out.println("第" + (j + 1) + "个格挡的货品个数:" + num);
                sum += sum;
            }
        }
    }
}
```

## java 面向对象

### 什么是面向对象

面向过程,面向功能划分的软件设计结构,自上而下,将一个大问题分解成多个小问题
面向过程局限性:过程中每一步都需要进行记录,同时制约了程序的拓展性和维护性

面向对象是一种编程思想,将程序中所有参与角色全部抽象成对象,通过对象之间的相互调用来实现业务功能

面向过程注重的是每一个步骤,面向对象注重整个需求的模块化结构
面向对象的核心思想就是重用性以及扩展性和灵活性

### 类和对象

每个对象都有各自的特征

- 属性: 对象的静态特征
- 方法: 对象的动态特征

对象就是用来描述客观存在的一个实体,该实体有一组属性和方法组成

类就是产生对象的模板,所有对象都是通过类来创建的,对象的抽象,旺财和狗的关系

类和对象的关系:类是对象的抽象化描述

一个类可以创建出很多个对象,一个对象归属于一个类

类是抽象的概念,是一种描述,仅仅是模板,对象是实实在在具体的存在

学生类 ,班级类, 课程类

张三 去 一班 上 数学课

张三 去 二班 上 语文课

### 定义类

基本语法

```java
public class 类名{
    // 定义属性
    public 数据类型 属性名;
    // 定义方法
    public 返回值类型 方法名(参数列表){
        // 方法体
    }
}
```

方法的定义有两个重点:

- 返回值类型
- 参数列表

有返回值的方法需要在定义时指定返回值的数据类型,在方法体中使用 return 将结果进行返回

```java
public int add(int num1,int num2) {
    return num1 + num2;
}
```

无返回值方法不需要对结果进行返回

```java
public void test() {
    System.out.println("无返回值");
}
```

定义一个 user 类

```java
public class User {
    // 定义属性
    public int id;
    public String name;
    public char gender;
    public String password;

    // 定义方法
    public void show() {
        System.out.println("展示用户信息");
    }
}

```

### 构造函数

构造函数,构造方法,构造器

java 通过类的构造函数来创建对象,构造函数是一种特殊的方法,方法名必须和类名保持一致,不需要进行返回值类型的定义,基本语法如下:

```java
public 构造函数名(参数列表){

}
```

构造函数包括有参构造和无参构造,区别在于是否有参数

无参构造

```java
public User() {

}
```

有参构造

```java
public User(int id, String name, char gender, String password) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.password = password;
}
```

每个类都有一个默认的无参构造函数,我们在定义类的时候无需声明无参构造函数,但如果手动定义了一个有参构造,此时默认的无参构造会被覆盖需要手动定义

User.java

```java
public class User {
    // 定义属性
    public int id;
    public String name;
    public char gender;
    public String password;

    // 定义方法
    public void show() {
        System.out.println("展示用户信息");
        System.out.println("id; " + this.id);
        System.out.println("name: " + this.name);
        System.out.println("gender: " + this.gender);
        System.out.println("password: " + this.password);
    }


    public User() {

    }

    public User(int id, String name, char gender, String password) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.password = password;
    }
}

```

Test.java

```java
public class Test {
    public static void main(String[] args) {
        new User();
        new User(1, "zs", '男', "password");
    }
}

```

### 创建对象

创建对象只需要调用类的构造函数即可,区别是调用无参构造创建对象只会创建对象,不会对对象赋值

```java
public class Test {
    public static void main(String[] args) {
        User user = new User();
        user.show();
    }
}
// 展示用户信息
// id: 0
// name: null
// gender:
// password: null
```

无参构造 手动赋值

```java
public class Test {
    public static void main(String[] args) {
        User user = new User();
        user.id='1';
        user.name="zs";
        user.gender="男";
        user.password="password";
        user.show();
    }
}
// 展示用户信息
// id: 1
// name: zs
// gender: 男
// password: password
```

```java
public class Test {
    public static void main(String[] args) {
        User user = new User(1, "zs", '男', "password");
        user.show();
    }
}
// 展示用户信息
// id: 1
// name: zs
// gender: 男
// password: password
```

### this 关键字

在 java 中,this 用户来指代当前类的实例化对象,通过 this 可以调用当前类的属性和方法,比如构造器中,可以通过 this 来完成对属性信息的赋值

```java
public User(int id, String name, char gender, String password) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.password = password;
}
```

this 除了可以在类中访问属性也可以在类中调用方法,方法:构造函数和普通方法调用构造函数:this(参数列表)

```java
public User() {
    this(1, "zs", '男', "password");
}
```

```java
public User(int id, String name, char gender, String password) {
    this();
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.password = password;
}
```

调用普通方法: this.fn()

### 方法重载

构成重载的条件

- 两个方法在同一个类中
- 方法名相同
- 参数列表不同(参数个数或者类型不同)
- 与返回值和访问权限修饰符无关

```java
public class Test {
    public static void main(String[] args) {

    }

    public void method() {
        System.out.println("无参数");
    }

    public void method(int num) {
        System.out.println("有参数: " + num);
    }

}
```

以下哪些情况不属于方法重载? 1,4 不属于

```java
// 两个方法相同,不属于重载
public int test(){}
public int test(){}
```

```java
// 属于重载,方法参数不同
public double test(double a,double b){}
public double test(){}
```

```java
// 属于方法重载,方法参数不同,与返回值类型无关
public String test(){}
public void test(int a){}
```

```java
// 不属于方法重载,方法名不同,为两个不同的方法
public void test(){}
public void test2(){}
```

在业务多且相似的情况下使用方法重载如一个求和方法,在不同的类型下可以使用不同的重载方法,整型和整型,整型和浮点,浮点和浮点等

### 成员变量和局部变量

变量的作用域范围是不同的

作用域: 程序中可以通过变量名来访问该变量的范围

变量声明时所在位置决定作用域

- 成员变量: 如果一个变量是在方法中被声明,则这个变量为局部变量
- 局部变量: 如果一个变量在方法外,类中声明,则他是成员变量

```java
public class Test {
    // 成员变量
    String name = "张三";

    public void method() {
        // 局部变量
        int num = 10;
    }

}
```

成员变量的作用域在整个类中,类中的每个方法都可以访问该变量

局部变量的作用域在定义该变量的方法中,出了这个方法就无法访问

当成员变量和局部变量冲突时,局部变量优先级更高

成员变量会有默认值,局部变量没有默认值定义后需赋值否则无法使用

### 封装

#### 什么是封装

封装就是将类的信息全部隐藏到内部,外部不能直接进行赋值和访问,必须通过类中提供的方法来进行访问和赋值,我们可以在方法中添加逻辑处理实现过滤,屏蔽错误数据的赋值

#### 封装步骤

1. 修改属性的访问权限,使得外部不能直接访问
2. 提供外部可以直接调用的方法
3. 在方法中添加属性控制逻辑

```java
public class User {
    // 定义属性
    private int id;
    private String name;
    private char gender;
    private String password;

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public char getGender() {
        return gender;
    }

    public String getPassword() {
        return password;
    }

    public void setId(int id) {
        if (id < 0) {
            System.out.println("id数据错误,已处理为默认值");
            this.id = 0;
        } else {
            this.id = id;
        }
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setGender(char gender) {
        this.gender = gender;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    // 定义方法
    public void show() {
        System.out.println("展示用户信息");
        System.out.println("id: " + this.id);
        System.out.println("name: " + this.name);
        System.out.println("gender: " + this.gender);
        System.out.println("password: " + this.password);
    }

}

```

#### static 关键字

static 表示静态或者全局,可以用来修饰成员变量,成员方法,代码块

用 static 修饰的成员变量和成员方法不需要再依赖于对象,可以直接通过类访问,也可以通过任意一个对象访问

用 static 修饰的成员变量叫做静态变量

用 static 修饰的成员方法叫做静态方法

静态变量和静态方法多个对象公用的,内存中只有一份

没有用 static 修饰的成员变量和成员方法,一个对象对应一个,内存中有多份,不是所有对象共享

```java
public class User {
    public static String name;

    public static void show() {
        System.out.println("这是一个user对象");
    }
}
```

```java
public class Test {
    public static void main(String[] args) {
        User.name = "张三";
        System.out.println(User.name);
        User.show();
    }
}

```

```java
public class Test {
    private int id;

    public static void main(String[] args) {
        Test test = null;
        for (int i = 0; i < 10; i++) {
            test = new Test();
            test.id++;
        }
        System.out.println(test.id); // 1 每一次操作的都是新的对象,每个新对象id都是从0开始,所以结果是1
    }
}

```

```java
public class Test {
    private static int id;

    public static void main(String[] args) {
        Test test = null;
        for (int i = 0; i < 10; i++) {
            test = new Test();
            test.id++;
        }
        System.out.println(test.id); // 10 经过static修饰后id变成静态变量,变成类共有变量,每次循环id+1
    }
}

```

> 值得注意的是:static 修饰的成员方法为静态方法,静态方法中不能使用 this 关键字

### 继承

#### 概念

一个类继承另一个类的属性和方法,被继承的类叫做父类,继承的类叫做子类

```java
public class People {
    private int id;
    private String name;
    private int age;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
```

```java
public class Teacher extends People {}
```

```java
public class Teacher extends Student {}
```

```java
public class Test {
    public static void main(String[] args) {
        Student student =new Student();
        student.setName("张三");
        System.out.println(student.getName());
    }
}
```

子类由两部分组成,一部分是父类的属性和方法,一部分是子类本身的属性和方法

一个类只能由一个直接父类,但是父类的父类的属性方法子类也可以继承

#### 子类访问父类

实现了继承关系的父子类,在创建子类对象是,无论调用的是有参构造还是无参构造,都会默认先创建父类对象,并且是默认通过无参构造创建父类对象

java 中每个类都有一个共同的父类 Object,所有 java 类都是由 Object 类派生出来的

super 关键字: 用于子类访问父类属性和方法,也可以调用父类的有参构造

```java
public class People {
    public People() {
        System.out.println("无参构造创建父类 People 对象");
    }

    public People(String name) {
        System.out.println("有参构造创建父类 People 对象");
    }
}
```

```java
public class Student extends People {
    public Student() {
        super("李四");
        System.out.println("无参构造创建 Student 对象");
    }

    public Student(char gender) {
        System.out.println("有参构造创建 Student 对象");
    }
}
```

```java
public class Test {
    public static void main(String[] args) {
        Student student =new Student();
    }
}
// 有参构造创建父类 People 对象
// 无参构造创建 Student 对象
```

##### super 使用

super 只能访问父类的公有属性和方法

- super.属性
- super.方法

#### 子类访问权限

访问权限修饰符: 修饰类,属性,方法
public , protected , 默认 , provide

| 访问修饰符 | 同一个类 | 同一个包   | 不同包     | 子类       |
| ---------- | -------- | ---------- | ---------- | ---------- |
| 默认       | 可以访问 | 可以访问   | 不可以访问 | 不可以访问 |
| public     | 可以访问 | 不可以访问 | 不可以访问 | 不可以访问 |
| provide    | 可以访问 | 可以访问   | 可以访问   | 可以访问   |
| protected  | 可以访问 | 可以访问   | 不可以访问 | 可以访问   |

包 package :用来管理 java 类,类似于用不同文件夹存放不同文件

```java
package package1;

public class User {}
```

包的作用

1. 管理 java 类,便于查找文件
2. 区分同名的类,防止命名冲突
3. 实现访问权限控制

包的命名规范:

1. 包一般为小写字母开头,.不能放在开头结尾,数字不能放在开头,.用来分层

```java
public class People {
    private int id;

    public void setId(int id) {
        this.id = id;
    }

    public People() {
        System.out.println("编号为 " + id);
    }

    public void show() {
        System.out.println("编号为 " + id);
    }
}
```

```java
public class Student extends People {

    public Student(int id) {
        super.setId(id);
    }
}
```

```java
public class Test {
    public static void main(String[] args) {
        Student student =new Student(1);
        student.show();
    }
}
// 编号为 0
// 编号为 1
```

#### 方法重写

子类在继承父类方法基础上,对父类方法进行覆盖

```java
public class People {
    public void show() {
        System.out.println("People 类");
    }
}
```

```java
public class Student extends People {
    @Override
    public void show(){
        System.out.println("Student 类");
    }
}
```

```java
public class Teacher extends People {
    @Override
    public void show(){
        System.out.println("Teacher 类");
    }
}
```

```java
public class Test {
    public static void main(String[] args) {
        Student student =new Student();
        student.show();
        Teacher teacher =new Teacher();
        teacher.show();
    }
}
// Student 类
// Teacher 类
```

重写规则:

1. 构造方法不能被重写
2. 父子类方法名相同
3. 父子类方法参数列表相同
4. 子类方法返回值与父类方法返回值相同或是其子类 Number 的子类是 Double

#### 方法重写和方法重载

|          | 所在位置 | 方法名 | 参数列表 | 返回值                   | 访问权限     |
| -------- | -------- | ------ | -------- | ------------------------ | ------------ |
| 方法重写 | 子类     | 相同   | 相同     | 相同或者父类返回值的子类 | 不能小于父类 |
| 方法重载 | 同一个类 | 相同   | 不同     | 没有要求                 | 们没有要求   |

### 多态

#### 什么是多态

一个事物有多个表现形态
定义一个方法: 在具体的生成环境中根据不同需求呈现出不同的业务逻辑

```java
package book;
// 多态写法 公共Member
// 这是一个公共类，代表一个会员。它有一个名为 buyBook() 的方法，该方法在子类中将被重写，以实现不同类型的会员购书的特定行为。
public class Member {
    public void buyBook(){}
}
```

```java
package book;
// 普通会员 继承Member
// 这是一个继承自 Member 类的子类，代表普通会员。它重写了父类的 buyBook() 方法，以在控制台输出 "普通会员买书打 九 折"。
public class OrdinaryMember extends Member {
    public void buyBook(){
        System.out.println("普通会员买书打 九 折");
    }
}
```

```java
package book;
// 超级会员 继承Member
// 这是另一个继承自 Member 类的子类，代表超级会员。它也重写了父类的 buyBook() 方法，以在控制台输出 "超级会员买书打 六 折"。
public class SuperMember extends Member {
    public void buyBook(){
        System.out.println("超级会员买书打 六 折");
    }
}

```

```java
package book;
// 这是一个收银员类，它包含了一个名为 member 的私有成员变量，以及 getMember() 和 setMember() 方法来获取和设置会员对象。它还有一个 settlement() 方法，用于调用会员的 buyBook() 方法。
public class Cashier {
    private Member member;
    public Member getMember() {
        return member;
    }
    public void setMember(Member member) {
        this.member = member;
    }
    public void settlement(){
        this.member.buyBook();
    }
}

```

```java
package book;
// 这是一个测试类，其中的 main 方法用于演示多态性。在 main 方法中，创建了一个普通会员对象 ordinaryMember、一个超级会员对象 superMember，以及一个 Cashier 对象 cashier。然后通过 cashier 对象的 setMember() 方法设置不同类型的会员对象，最终调用 cashier 对象的 settlement() 方法，触发会员的购书行为。
public class Test {
    public static void main(String[] args) {
        OrdinaryMember ordinaryMember = new OrdinaryMember();
        SuperMember superMember = new SuperMember();
        Cashier cashier = new Cashier();
//        cashier.setMember(superMember); // 超级会员买书打 六 折
        cashier.setMember(ordinaryMember); // 超级会员买书打 九 折
        cashier.settlement();
    }
}
```

根据上述代码，当执行 cashier.settlement() 时，会根据设置的会员类型（普通会员或超级会员）调用相应会员类的 buyBook() 方法，输出相应的购书折扣信息。这就是多态性的体现，因为 Cashier 类不需要知道具体是哪个会员类的实例，它只需要调用相应的方法，具体的行为由子类决定。

#### 多态的使用

1. 形参为父类,调用方法时传入的参数为子类对象

- ```java
    --- Cashier
    public void settlement(Member member) {
        member.buyBook();
    }
    --- Test
    public static void main(String[] args) {
        OrdinaryMember ordinaryMember = new OrdinaryMember();
        SuperMember superMember = new SuperMember();
        Cashier cashier = new Cashier();
        cashier.settlement(ordinaryMember); // 超级会员买书打 九 折
        cashier.settlement(superMember); // 超级会员买书打 六 折
    }
  ```

2. 定义方法时返回值类型为父类,调用方法时返回的为子类对象

- ```java
    ---Cashier
    public Member getMember(String name) {
        if(name.equals("ordinaryMember")){
            return new OrdinaryMember();
        }else{
            return new SuperMember();
        }
    }
    ---Test
    public static void main(String[] args) {
        OrdinaryMember ordinaryMember = new OrdinaryMember();
        SuperMember superMember = new SuperMember();
        Cashier cashier = new Cashier();
        System.out.println(cashier.getMember("ordinaryMember")); // book.  OrdinaryMember@404b9385
        System.out.println(cashier.getMember("superMember")); // book.SuperMember@6d311334
    }
  ```

#### 抽象方法和抽象类

子类重写父类方法实现多态,从而实现程序的拓展性,可维护性

抽象方法: 只有方法声明,没有方法的定义,通过给方法添加 abstract 关键字来实现,一旦某个方法被定义为抽象方法,则该方法所在的类必须声明为抽象类

```java
package book;

public abstract class Member {
    public abstract void buyBook();
}
```

抽象类和普通类的区别,抽象类不能被实例化,抽象方法和普通方法的区别是抽象方法没有方法体

抽象类中可以没有抽象方法,但是普通类中不能定义抽象方法

如果父类中包含抽象方法,则子类必须重写该方法,如果子类也是抽象类,则子类不用重写抽象方法

## 面向对象进阶

### Object 类

Object 是 JDK 提供的类,位于 java.lang 包中,该类是 Java 中所有类的直接父类或者间接父类,java 中每一个类都是 Object 类的派生类,java 中定义的类都可以使用 Object 类中的方法

```java
package entity.pojo;

public class Account {
    public void test(){
        hashCode();
        toString();
        getClass();
        equals(null);
        clone();
        notify();
        notifyAll();
        wait();
        wait(100L);
        wait(100L,100);
    }
}
```

### 重写 Object 类的方法

1. toString: 以字符串的形式来返回某个类的实例化对象信息
2. equals: 判断两个对象是否相等
3. hashCode: 返回对象的散列码

> toString

```java
public String toString() {
    return getClass().getName() + "@" + Integer.toHexString(hashCode());
}
```

```java
package entity;

public class User {
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    private int id;
    private String name;

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
```

> equals

```java
public boolean equals(Object obj) {
    return (this == obj);
}
```

```java
    public boolean equals(Object anObject) {
        if (this == anObject) {
            return true;
        }
        return (anObject instanceof String aString)
                && (!COMPACT_STRINGS || this.coder == aString.coder)
                && StringLatin1.equals(value, aString.value);
    }
```

> hashCode

```java
public native int hashCode();
```

本地方法,java 无法访问操作系统底层,c++写的一套程序由 c++来调用,这种方式就是本地方法

hashCode 方法作用是返回某个对象的散列值: 内存地址结合对象内部信息组成

```java
public int hashCode() {
    return Objects.hash(id, name);
}
```

### 包装类

java 中数据类型基本上可以分为两类

- 8 种基本数据类型
- 引用数据类型

通过构造器 new 出来的对象是引用类型,基本数据类型不是对象

包装类是 java 提供的一组类,专门用来创建 8 种数据类型对应的对象

| 基本数据类型 | 包装类    |
| ------------ | --------- |
| byte         | Byte      |
| short        | Short     |
| int          | Integer   |
| long         | Long      |
| float        | Float     |
| double       | Double    |
| char         | Character |
| boolean      | Boolean   |

![](https://img1.imgtp.com/2023/08/10/jACt692k.png)

### 装箱和拆箱

装箱: 将基本数据类型转换为对应的包装类对象
拆箱: 将包装类对象转换为对应的基本数据类型

> 装箱

1. public Type(type value)

```java
public class Test {
    public static void main(String[] args) {
        byte b = 1;
        Byte byt = new Byte(b);
        short s = 2;
        Short shor = new Short(s);
        int i = 3;
        Integer integer = new Integer(i)
        long l = 4;
        Long lon = new Long(l);
        float f = 5.5f;
        float floa = new Float(f);
        double d = 6.6;
        Double doubl = new Double(d);
        char c = 'C';
        Character cha = new Character(c);
        boolean bl = true;
        Boolean boolea = new Boolean(bl);
    }
}
```

2. public Type (String value) / public Type(char value)

```java
public class Test {
    public static void main(String[] args) {
        Byte byt = new Byte("1");
        Short shor = new Short("2");
        Integer integer = new Integer("3")
        Long lon = new Long("4");
        float floa = new Float("5.5f");
        Double doubl = new Double("6.6");
        Character cha = new Character('c');
        Boolean boolea = new Boolean("true");
    }
}
```

3. valueOf(type value)

```java
public class Test {
    public static void main(String[] args) {
        byte b=1;
        Byte byt = Byte.valueOf(b);
    }
}
```

4. valueOf(String value) / valueOf(char value)

```java
public class Test {
    public static void main(String[] args) {
        Byte byt = Byte.valueOf("1");
        Character cha = Character.valueOf('c');
    }
}
```

> 拆箱

1. \*Value

```java
public class Test {
    public static void main(String[] args) {
        Byte byt = Byte.valueOf("1");
        byte b = byt.byteValue();
        Character cha = Character.valueOf('c');
        char c = cha.charValue();
    }
}

```

2. parse\*(String value)

```java
public class Test {
    public static void main(String[] args) {
        byte b = Byte.parseByte("1");
        // 没有char
    }
}
```

3. toString(value) 转字符串

```java
import entity.User;

public class Test {
    public static void main(String[] args) {
        byte b = 1;
        String bstr = Byte.toString(b);
        System.out.println(bstr);
    }
}

```

### 接口

#### 什么是接口

接口是 java 程序开发中很重要的一种思想,实际应用种非常广泛

接口是由抽象类衍生出的一种概念

接口也是多态的一种实际应用

#### 如何使用接口

基本语法

```java
public interface 接口名{
  public 返回值 方法名(参数列表)
}
```

接口是一个极度抽象的抽象类,抽象类中允许存在非抽象方法,但是接口中不允许存在非抽象方法,必须全部是抽象方法

不能实例化接口对象,只能实例化其对应的实现类的对象,实现类中全部是接口抽象方法的具体实现

基本语法

```java
public class 实现类名 implements 接口名{
  public 返回值 方法名(参数列表){

  }
}
```

通过 implements 来指定实现类具体要实现的接口在实现类的内部需要对接口的所有抽象方法进行实现

```java
public interface MyInterface {
    public void test();
}
```

```java
public class MyImplements implements MyInterface{

    @Override
    public void test() {
        System.out.println("实现了接口的抽象方法");
    }
}
```

同时实现多个接口的抽象方法

```java
public class MyImplements implements MyInterface,MyInterface2{
    @Override
    public void run() {
        System.out.println("实现了 接口1的 run 方法");
    }
    @Override
    public void fly() {
        System.out.println("实现了 接口2的 fly 方法");
    }
}
```

#### 面向接口编程的实际应用

产品 A-> 设备 A

- Equipment 接口：

这是一个接口，接口是一种抽象的类型，定义了一组方法签名（只有方法声明而没有方法体）。在这里，Equipment 接口定义了一个名为 work 的抽象方法，表示设备的工作操作。

- EquipmentA 类和 EquipmentB 类：

这两个类都实现了 Equipment 接口。它们分别代表不同的设备类型。每个类都必须提供 work 方法的具体实现，来描述设备的实际工作内容。

- Factory 类：

这是一个工厂类，拥有一个 Equipment 类型的私有成员变量 equipment，以及用于获取和设置该成员变量的方法。Factory 类还有一个名为 work 的方法，它会打印 "开始生产"，然后调用 equipment 的 work 方法。

- Test 类：

这个类包含了 main 方法，是程序的入口点。在 main 方法中，首先创建了一个 EquipmentA 对象和一个 EquipmentB 对象，然后创建了一个 Factory 对象，并将其成员变量 equipment 设置为 equipmentB。最后，调用了 factory 的 work 方法。

```java
package interfaces;

public interface Equipment {
    public void work();
}
```

```java
package interfaces;

public class EquipmentA implements Equipment {
    public void work(){
        System.out.println("设备A运行,生成产品A");
    }
}
```

```java
package interfaces;

public class EquipmentB implements Equipment {
    public void work(){
        System.out.println("设备B运行,生成产品B");
    }
}
```

```java
package interfaces;

public class Factory {
    private Equipment equipment;

    public Equipment getEquipment() {
        return equipment;
    }

    public void setEquipment(Equipment equipment) {
        this.equipment = equipment;
    }

    public void work(){
        System.out.println("开始生产");
        this.equipment.work();
    }
}

```

```java
package interfaces;

public class Test {
    public static void main(String[] args) {
        EquipmentA equipmentA=new EquipmentA();
        EquipmentB equipmentB=new EquipmentB();
        Factory factory=new Factory();
        factory.setEquipment(equipmentB);
        factory.work();
    }
}
// 开始生产
// 设备B运行,生成产品B
```

在 Test 类的 main 方法中，首先创建了一个 EquipmentA 对象 equipmentA 和一个 EquipmentB 对象 equipmentB。接着，创建了一个 Factory 对象 factory。将 factory 的 equipment 成员变量设置为 equipmentB，即设备 B。调用 factory 的 work 方法，输出 "开始生产"，然后通过 equipmentB 调用其 work 方法，输出 "设备 B 运行,生成产品 B"。

### 异常

#### 什么是异常

1. 编译时错误

2. 运行时错误
   java 中有一组类专门描述各种不同的运行时错误,叫做异常类,java 结合异常类提供了处理错误的机制,
   一旦发生错误,会自动创建一个包含错误信息的异常对象,并将该对象提交给系统封,由系统转交给能够处理异常的代码进行处理.

异常分为两类:Error 和 Exception

#### 异常的使用

try-catch

try:监听可能会抛出异常的代码

catch:处理异常

用 try 来监听可能会抛出异常的代码,一旦捕获到异常,交给 catch 来处理

```java
try{
  // 可能抛出异常的代码
} catch{
  // 处理异常
}
```

```java
public class Main {
    public static void main(String[] args) {
        try {
            int num = 10 / 0;
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

try-catch-finally

finally 的作用:无论程序是否抛出异常,都会执行 finally 里代码

```java
public class Main {
    public static void main(String[] args) {
        try {
            int num = 10 / 0;
        } catch (Exception e) {
            e.printStackTrace();
        }finally {
            System.out.println("finally... ");
        }
    }
}
// finally...
```

#### 异常类

<b>RuntimeException</b>

- ArithmeticException: 表示数学运算异常
- ClassNotFonundException: 表示类未定义
- IllegalArgumentException: 表示参数格式错误
- ArrayIndexOutOfBoundsException: 数组下标越界异常
- NullPointerException: 表示空指针异常
- NoSuchMethodException: 表示方法未定义异常
- NumberFormatException: 表示其他数据类型转为数值类型的时候不匹配异常

#### throw 和 throws

- throw: 表示主动抛出一个异常
  - ```java
      public class Main {
        public static void main(String[] args) {
          throw new NullPointerException();
        }
      }
    ```
- throws: 修饰方法,表示该方法可能会抛出某个异常
  - ```java
      public class Main {
      public static void main(String[] args) {
          try {
              test();
          }catch (Exception e) {
              System.out.println("抛出了异常: "+ e.getMessage());
          }
      }
      public static void test() throws NumberFormatException {
          String str = "java";
          int num = Integer.parseInt(str);
          System.out.println(num);
        }
      }
    ```

#### 自定义异常

实际开发中除了可以使用 java 提供的异常外,也可以自定义异常类,只需要继承 Exception 即可

```java
package exception;

public class MyNumberException extends Exception{
    public MyNumberException(String error){
        super(error);
    }
}

```

```java
package exception;

public class Test {
    public static void main(String[] args) {
        try {
            Test test = new Test();
            test.add("hello");
        }catch (Exception e) {
            e.printStackTrace();
        }
    }

    public int add(Object object) throws MyNumberException {
        if (!(object instanceof Integer)){
            String str = "传入的参数不是整数类型!";
            throw new MyNumberException(str);
        }else{
            int num=(double)object;
            return num++;
        }
    }
}
// exception.MyNumberException: 传入的参数不是整数类型!
```

## 多线程

### 线程和进程

- 进程: 计算机正在运行的一个独立程序,是动态的,当关闭应用程序,该进程关闭
- 线程: 是组成进程的基本单位

一个进程由一个或多个线程组成

进程是独享内存空间,线程是共享内存空间

单独的线程无法执行,必须以来进程才能执行

线程是用来执行任务的,所以每个线程对象都需要绑定一个任务

- 多线程:在一个进程中,多个线程同时执行,每个线程交替执行,交替获取计算机资源

### java 中线程使用

在 java 中有两种方式来开启线程:

1. 继承 Thread 类
2. 实现 Runnable 接口

#### 继承 Thread 类

```java
package test;

public class MyThread extends Thread {
    @Override
    public void run() {
        for (int i = 0; i < 100; i++) {
            System.out.println("----MyThread----");
        }
    }
}

```

```java
package test;

public class Test {
    public static void main(String[] args) {
        // 创建线程对象
        MyThread myThread = new MyThread();
        // 启动线程
        myThread.start();
        for (int i = 0; i < 100; i++) {
            System.out.println("=====Main====");
        }
    }
}
```

#### 实现 Runnable 接口

实现 Runnable 接口是用来描述任务的,实现 run 方法来描述任务

实现线程和任务的解耦合,单独定义一个类实现 Runnable 接口作为任务,创建 Thread 对象之后再把任务整合进去

```java
package test;

public class MyRunnable implements Runnable{
    @Override
    public void run() {
        for (int i = 0; i < 100; i++) {
            System.out.println("------Runnable------");
        }
    }
}

```

```java
package test;

public class Test {
    public static void main(String[] args) {
        // 创建任务
        MyRunnable myRunnable = new MyRunnable();
        // 创建线程
        Thread thread =new Thread(myRunnable);
        thread.start();
        for (int i = 0; i < 100; i++) {
            System.out.println("=====Main====");
        }
    }
}

```

#### 线程状态

- 创建状态
- 就绪状态
- 运行状态
- 阻塞状态
- 终止状态

![](https://img1.imgtp.com/2023/08/13/TWSmV2OL.png)

#### 线程调度

##### 线程休眠

让当前线程暂停执行,使线程从运行状态->阻塞状态,让出 CPU 资源,sleep(long millis)单位毫秒

线程内部执行

```java
package test;

public class MyThread extends Thread {
    @Override
    public void run() {
        for (int i = 0; i < 100; i++) {
            if (i == 5) {
                try {
                    sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
            System.out.println("----MyThread----");
        }
    }
}

```

外部休眠,休眠三秒后启动

```java
public class Test {
    public static void main(String[] args) {
        MyThread myThread = new MyThread();
        try {
            myThread.sleep(3000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        myThread.start();
        for (int i = 0; i < 100; i++) {
            System.out.println("=====Main====");
        }
    }
}
```

主线程进行休眠,休眠 1s 后启动主线程

```java
public class Test {
    public static void main(String[] args) {
        MyThread myThread = new MyThread();
        myThread.start();
        for (int i = 0; i < 100; i++) {
            if(i==5){
                try {
                    Thread.currentThread().sleep(1000);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
            }
            System.out.println("=====Main====");
        }
    }
```

#### 线程合并

将指定的某个线程加入到当前线程中,合并为一个线程.`join()`

A 线程和 B 线程

`B.join()` 表示当前开始 CPU 资源被 B 独占,A 进入阻塞状态,B 执行完毕,A 才能继续执行

```java
package test;

public class JoinRunnable implements Runnable {
    @Override
    public void run() {
        for (int i = 0; i < 20; i++) {
            System.out.println((i + "-----JoinRunnable"));
        }
    }
}

```

```java
package test;

public class Test {
    public static void main(String[] args) {
        JoinRunnable joinRunnable = new JoinRunnable();
        Thread thread = new Thread(joinRunnable);
        thread.start();
        for (int i = 0; i < 100; i++) {
            if (i == 10) {
                try {
                    thread.join();
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
            }
            System.out.println(i + "=====Main====");
        }
    }
}

```

JoinRunnable 类：
这是一个实现了 Runnable 接口的类，它定义了一个 run() 方法。Runnable 接口用于表示一个能被多线程执行的任务。在 JoinRunnable 类中，run() 方法会循环打印从 0 到 19 的数字，每次都会附加 "-----JoinRunnable"。

Test 类：
这个类是程序的入口，其中包含 main 方法。在 main 方法中，首先创建了一个 JoinRunnable 的实例，然后将其作为参数创建了一个新的 Thread 对象。接着调用了 thread.start()，这会启动一个新的线程，使得 JoinRunnable 中的 run() 方法开始执行。

同时，在 main 方法中也有一个循环，它会打印从 0 到 99 的数字，每次都会附加 "=====Main===="。在这个循环中，当 i 等于 10 时，程序会调用 thread.join()。join() 方法的作用是等待调用它的线程（在这里就是 thread）执行完成后，再继续执行调用 join() 的线程（在这里就是主线程）。也就是说，当 i 等于 10 时，主线程会等待新线程（即 thread）执行完成后才会继续往下执行。

`join(long millis)` 在 millis 内 B 独占资源进行执行,当时间一到,无论 B 是否执行完毕都会释放 CPU 资源,和 A 继续交替执行

#### 线程礼让

在某个特定的时间点,让线程暂停抢占 CPU 资源的行为,运行状态->阻塞状态,只礼让一次

- yield()

```java
// YieldThread1
public class YieldThread1 extends Thread {
    @Override
    public void run() {
        for (int i = 0; i < 10; i++) {
            if (i == 5) {
                Thread.currentThread().yield();
            }
            System.out.println(Thread.currentThread().getName() + "'--------'" + i);
        }
    }
}
// YieldThread2
public class YieldThread2 extends Thread {
    @Override
    public void run() {
        for (int i = 0; i < 10; i++) {
            System.out.println(Thread.currentThread().getName() + "'--------'" + i);
        }
    }
}
```

```java
public class Test {
    public static void main(String[] args) {
        YieldThread1 thread1 = new YieldThread1();
        YieldThread2 thread2 = new YieldThread2();
        thread1.setName("thread1");
        thread2.setName("thread2");
        thread1.start();
        thread2.start();
    }
}

// thread2'--------'0
// thread2'--------'1
// thread2'--------'2
// thread1'--------'0
// thread1'--------'1
// thread2'--------'3
// thread2'--------'4
// thread2'--------'5
// thread2'--------'6
// thread1'--------'2
// thread2'--------'7
// thread2'--------'8
// thread2'--------'9
// thread1'--------'3
// thread1'--------'4
// thread1'--------'5
// thread1'--------'6
// thread1'--------'7
// thread1'--------'8
// thread1'--------'9
```

#### 线程同步

多个线程同时访问某个资源时,不是同时对某资源进行访问修改,而是顺序执行

多个线程同时访问共享资源是,可能会存在数据错误情况,如何解决?

通过线程同步,多个线程不是同时访问数据,而是顺序访问.

`synchronized` 修饰静态方法

```java
public class Account implements Runnable {
    private static int num;

    @Override
    public synchronized void run() {
        try {
            Thread.currentThread().sleep(1);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        num++;
        System.out.println(Thread.currentThread().getName() + "是当前的第" + num + "位访客");
    }
}

```

```java
public class Test {
    public static void main(String[] args) {
        Account account = new Account();
        Thread t1 = new Thread(account, "线程A");
        Thread t2 = new Thread(account, "线程B");
        t1.start();
        t2.start();
    }
}
```

这段代码的目的是通过两个线程同时执行 "Account" 类的实例，模拟多线程并发访问。然而，由于每个线程都在 "run" 方法中对访客计数加 1，同时还有一个很短的休眠时间，这可能导致计数出现错误。因为多个线程可能会在计数变化之前同时访问和修改 "num" 变量，从而产生竞态条件。

要更准确地模拟多线程访问，可能需要更长的休眠时间或更复杂的操作，以避免竞态条件和计数错误。

```java
public class Test2 {
    public static void main(String[] args) {
        for (int i = 0; i < 5; i++) {
            Thread thread = new Thread(new Runnable() {
                @Override
                public void run() {
                    Test2.test();
                }
            });
            thread.start();
        }
    }
    public static synchronized void test() {
        System.out.println("start...");
        try {
            Thread.currentThread().sleep(1000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        System.out.println("end...");
    }
}
// start...
// end...
// start...
// end...
// start...
// end...
// start...
// end...
// start...
// end...
```

这段 Java 代码定义了一个名为 "Test2" 的类，其中包含一个名为 "main" 的方法。在这个方法中，创建了 5 个线程，每个线程都会执行一个匿名内部类实现的 Runnable 接口，该接口的 run 方法调用了 "Test2" 类中的 "test" 方法。这样，多个线程将并发地调用 "test" 方法。以下是代码的解释：

Thread thread = new Thread(new Runnable() { ... });: 创建一个新线程，其中传递了一个匿名内部类的实例作为 Runnable 接口的实现。这个匿名内部类的 run 方法实现了对 "Test2" 类的 "test" 方法的调用。

public static synchronized void test() {: 这是一个静态的同步方法 "test"，使用了 synchronized 关键字，这意味着在同一时刻只有一个线程可以执行这个方法。这里之所以用静态方法，是因为在 main 方法中创建的匿名内部类不能直接访问非静态的实例方法。

这段代码的主要目的是模拟多线程并发访问一个同步方法。由于 "test" 方法使用了 synchronized 关键字，每次只有一个线程可以进入该方法执行。然后，由于每个线程在执行期间都会休眠 1 秒钟，这导致每个线程的执行时间都会延长，从而在输出上形成间隔。

请注意，虽然 "test" 方法是同步的，但由于创建了多个线程，它们仍然可以并行执行，只是在进入 "test" 方法内部时会按照线程的顺序排队等待。因此，你会看到 "start..." 和 "end..." 的输出在每个线程之间交替出现，并且有 1 秒的时间间隔。

#### 重入锁

ReentrantLock 是对 synchronized 的升级,synchronized 是通过 JVM 实现的,ReentrantLock 是通过 JDK 实现的,可以给同一个资源添加多个锁

```java
import java.util.concurrent.locks.ReentrantLock;

public class Account implements Runnable {
    private static int num;
    private ReentrantLock reentrantLock = new ReentrantLock();

    @Override
    public synchronized void run() {
        reentrantLock.lock();
        try {
            Thread.currentThread().sleep(1);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        num++;
        System.out.println(Thread.currentThread().getName() + "是当前的第" + num + "位访客");
        reentrantLock.unlock();
    }
}

```

需要注意的是上几次锁就需要解几次锁,否则会卡住线程

#### 限时获取锁

ReentrantLock 具备限时性的特点:判断某个线程在特定时间内能够获取到锁

tryLock(long timeout,TimeUnit unit):返回 boolean 类型,true 表示可获取,false 表示不可获取

```java
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.ReentrantLock;

public class TimeLock implements Runnable {
    private ReentrantLock reentrantLock = new ReentrantLock();

    public void run() {
        try {
            if (reentrantLock.tryLock(3, TimeUnit.SECONDS)) {
                System.out.println(Thread.currentThread().getName() + "  get lock");
                Thread.currentThread().sleep(5000);
            } else {
                System.out.println(Thread.currentThread().getName() + "  not get lock");
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }finally {
            reentrantLock.unlock();
        }

    }
}

```

```java
public class Test {
    public static void main(String[] args) {
        TimeLock timeLock = new TimeLock();
        new Thread(timeLock, "线程A").start();
        new Thread(timeLock, "线程B").start();
    }
}

```

代码开始执行,线程 A 和线程 B 开始抢占线程,当 A 抢占成功,进入 TimeLock,reentrantLock.tryLock(3, TimeUnit.SECONDS)此时为 true,三秒内能够上锁,此时线程 A 打印 get lock 并且将线程休眠 5 秒,此时线程 B 进入 TimeLock,但是此时进程已经休眠 5s 小于 3s,reentrantLock.tryLock(3, TimeUnit.SECONDS)三秒内无法上锁,reentrantLock.tryLock(3, TimeUnit.SECONDS)为 false,打印 not get lock 并抛出错误

#### 生产者消费者模式

生产者和消费者公用一块缓冲区,生产者负责添加数据,消费者负责取出数据

```java
public class Hamburger {
    private Integer id;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Hamburger(Integer id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Hamburger{" +
                "id=" + id +
                '}';
    }
}
```

```java
package test;

public class Container {
    public Hamburger[] array = new Hamburger[6];
    public Integer index = 0;

    // 向容器中添加汉堡
    public synchronized void push(Hamburger hamburger) {
        while (index == array.length) {
            try {
                this.wait();
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
        this.notify();
        array[index] = hamburger;
        index++;
        System.out.println("生产了一个汉堡" + hamburger);
    }

    // 从容器总取出汉堡
    public synchronized Hamburger pop() {
        while (index == 0) {
            try {
                this.wait();
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
        this.notify();
        index--;
        System.out.println("消费了一个汉堡" + array[index]);
        return array[index];
    }
}

```

```java
package test;

public class Consumer implements Runnable {
    private Container container;

    public Consumer(Container container) {
        this.container = container;
    }

    @Override
    public void run() {
        for (int i = 0; i < 30; i++) {
            this.container.pop();
            try {
                Thread.currentThread().sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

```

```java
package test;

public class Test {
    public static void main(String[] args) {
        Container container = new Container();
        Producer producer = new Producer(container);
        Consumer consumer = new Consumer(container);
        new Thread(producer).start();
        new Thread(producer).start();
        new Thread(consumer).start();
        new Thread(consumer).start();
        new Thread(consumer).start();
    }
}

```

### 集合框架

#### 什么是集合

程序中需要有多个对象,如何保存?

数组长度固定,数据类型固定

此时集合可以解决这个问题,集合是一个长度可变,可以保存任意数据类型的动态数组

集合框架: 不是一个类,而是由一组类和接口构成的一个框架体系

> 集合接口
> Collection,List,Set,Map,Iterator,ListIterator,Enumeration,SortedSet,SortedMap,Queue,Map.Entry

#### Collection

存储一组无序,不唯一的对象

> 常用方法

size,isEmpty,contains,iterator,toArray,add,remove,containsAll,addAll,removeAll,clear,equals,hashCode

> 常用子接口

List,Set

##### List 接口实现类

###### ArrayList

ArrayList: 底层是基于数组的数据结构,查询快,添加/删除慢

```java
import java.util.ArrayList;
import java.util.Iterator;

public class Test {
    public static void main(String[] args) {
        ArrayList list = new ArrayList();
        list.add("hello");
        list.add("java");
        list.add("javascript");
        list.add("typescript");
        System.out.println(list.size());
        System.out.println(list.get(0)); // hello
        System.out.println(list.remove(0)); // hello
        System.out.println(list.contains("hello")); // false
        System.out.println(list.contains("world")); // false
        System.out.println(list); // [java, javascript, typescript]
        Iterator it = list.iterator();
        while (it.hasNext()) {
            System.out.println(it.next());
        }
        // java
        // typescript
        // javascript
        list.add(1,"react");
        System.out.println(list); // [java, react, javascript, typescript]
        list.set(0,"vue");
        System.out.println(list); // [vue, react, javascript, typescript]
        System.out.println(list.indexOf("typescript")); // 3
    }
}
```

###### LinkedList

linkedList: 先进先出的队列,采用链表的形式来实现,元素之间通过储存彼此的位置信息实现连接,查找慢,添加/删除快,与 ArrayList 相反

```java
import java.util.LinkedList;

public class Test {
    public static void main(String[] args) {
        LinkedList list=new LinkedList();
        list.add("hello");
        list.add("world");
        list.add("Java");
        System.out.println(list); // [hello, world, Java]
        list.addFirst("A");
        list.addLast("B");
        System.out.println(list); // [A, hello, world, Java, B]
        list.push("Push");
        System.out.println(list); // [Push, A, hello, world, Java, B]
        System.out.println(list.getFirst()); // Push
        System.out.println(list.getLast()); // B
        System.out.println(list.pop()); // Push
        System.out.println(list); // [A, hello, world, Java, B]
    }
}

```

#### Set 接口实现类

Set 中存储的数据没有顺序,并且唯一

##### hashSet

唯一且无序:元素存入和取出顺序不一致 不可 for 循环

```java
import java.util.HashSet;
import java.util.Iterator;
public class Test {
    public static void main(String[] args) {
        HashSet set = new HashSet();
        set.add("hello");
        set.add("hello");
        set.add("hello");
        set.add("world");
        Iterator iterator = set.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next()); // world hello
        }
        System.out.println(set.size()); // 2
    }
}

```

#### LinkedHashSet

唯一有序

```java
import java.util.Iterator;
import java.util.LinkedHashSet;

public class Test {
    public static void main(String[] args) {
        LinkedHashSet set = new LinkedHashSet();
        set.add("hello");
        set.add("hello");
        set.add("hello");
        set.add("world");
        Iterator iterator = set.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next()); // hello world
        }
        System.out.println(set.size()); // 2
        System.out.println(set); // [hello, world]
    }
}

```

重写 A 方法,判断 A 不相同

```java
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.Objects;

public class Test {
    public static void main(String[] args) {
        LinkedHashSet set = new LinkedHashSet();
        set.add(new A(1));
        set.add(new A(1));
        System.out.println(set); // [A{number=1}]
    }
}

class A {
    private int number;

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    @Override
    public String toString() {
        return "A{" +
                "number=" + number +
                '}';
    }

    @Override
    public int hashCode() {
        return 1;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        A a = (A) obj;
        return Objects.equals(number, a.number);
    }

    public A(int number) {
        this.number = number;
    }
}
```

##### TreeSet

唯一有序: 指的是集合内部自动给所有元素进行升序排列

```java
import java.util.Iterator;
import java.util.TreeSet;

public class Test {
    public static void main(String[] args) {
        TreeSet set=new TreeSet();
        set.add(1);
        set.add(1);
        set.add(1);
        set.add(2);
        set.add(3);
        set.add(4);
        System.out.println(set); // [1,2,3,4]
        Iterator iterator=set.iterator();
        while(iterator.hasNext()){
            System.out.println(iterator.next()); // 1 2 3 4
        }
    }
}
```

实现 compareTo 接口对比对象数据

```java
import java.util.Iterator;
import java.util.Objects;
import java.util.TreeSet;

public class Test {
    public static void main(String[] args) {
        TreeSet set = new TreeSet();
        set.add(new A(1));
        set.add(new A(3));
        set.add(new A(4));
        set.add(new A(2));
        System.out.println(set); // [A{number=1}, A{number=2}, A{number=3}, A{number=4}]
    }
}
class A implements Comparable {
    private int number;

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    @Override
    public String toString() {
        return "A{" +
                "number=" + number +
                '}';
    }

    @Override
    public int hashCode() {
        return 1;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        A a = (A) obj;
        return Objects.equals(number, a.number);
    }

    public A(int number) {
        this.number = number;
    }

    public int compareTo(Object o) {
        A a = (A) o;
        if (this.number > a.number) {
            return 1;
        } else if (this.number < a.number) {
            return -1;
        } else {
            return 0;
        }
    }
}

```
