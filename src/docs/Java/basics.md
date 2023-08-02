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
