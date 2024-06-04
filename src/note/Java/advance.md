# 进阶篇

## SpringBoot

### 特性

#### 起步依赖
本质上是一个maven坐标,整合了一整个功能所需要的所有坐标

#### 自动配置
遵循约定大于配置的原则,在boot程序启动后,一些bean对象会自动注入到ioc容器,不需要手动声明,简化开发

#### 其他特性

- 内嵌的Tomcat,Jetty(无需配置WAR文件)
- 外部化配置
- 不需要XML配置(properties/yml)

### 入门

+ 创建Maven工程
+ 导入spring-boot-start-web起步依赖
+ 编写Controller
+ 提供启动类

Controller

```java
package com.example.javademo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// Maven注解
@RestController
public class HelloController {
    @RequestMapping("/hello")
    public String hello(){
        return "Hello World!";
    }
}

```
启动类
```java
package com.example.javademo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class javademoApplication {

    public static void main(String[] args) {
        SpringApplication.run(javademoApplication.class, args);
    }

}

```

### 配置文件
#### properties
```shell
#多环境配置，测试，生产用不同的配置文件
spring.profiles.active=test
 
#应用名称
spring.application.name=apply
#端口号
server.port=8008

# http
#设定是否对object mapper也支持HATEOAS，默认为: true
spring.hateoas.apply-to-primary-object-mapper
#是否优先使用JSON mapper来转换.
spring.http.converters.preferred-json-mapper
#指定http请求和相应的Charset，默认: UTF-8
spring.http.encoding.charset
#是否开启http的编码支持，默认为true
spring.http.encoding.enabled
#是否强制对http请求和响应进行编码，默认为true
spring.http.encoding.force

# 数据库连接配置
#描述数据源
spring.datasource.url=
spring.datasource.username=root
spring.datasource.password=0000
spring.datasource.driverClassName = com.mysql.cj.jdbc.Driver
spring.datasource.type = com.alibaba.druid.pool.DruidDataSource

```

#### yml

##### yml配置信息书写
- 值前边必须有空格作为分隔符
- 使用空格作为缩进表示层级关系,相同的层级左侧对齐
```shell
server:
  port: 8009
  servlet:
    context-path: /start2
```

##### yaml配置信息的获取
```shell
server:
  port: 8081
user:
  nickName: 张三
  age: 18
  info: 我今年${user.age}。
```

@Value("${键名}")

```java
package com.example.javademo.service;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
public class UserProperties {
    @Value("${user.nickName}")
    private String nickName;
    @Value("${user.info}")
    private String info;

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }
}

```

@ConfigurationProperties(prefix = "前缀")注解

- 配文件前缀和prefix相同
- 配置文件中配置属性和类属性相同
- 
```java
package com.example.javademo.service;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "user")
public class UserProperties {
    private String nickName;
    private String info;

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }
}

```

#### 比较

相较于properties,yaml配置文件层级更加清晰,更加关注配置的数据

### 整合MyBatis

原先

- 引入MyBatis依赖
- SqlSessionFactoryBean
- MapperScannerConfigurer
- Datasource
  
现在

#### 引入依赖 修改配置
pom.xml
```xml
<!--		mysql驱动依赖-->
		<dependency>
			<groupId>com.mysql</groupId>
			<artifactId>mysql-connector-j</artifactId>
		</dependency>
<!--		mybatis-->
		<dependency>
			<groupId>org.mybatis.spring.boot</groupId>
			<artifactId>mybatis-spring-boot-starter</artifactId>
			<version>3.0.2</version>
		</dependency>
```
application.yml
```yml
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://localhost:3306/mybatis
    username: root
    password: 1234
```

#### 编写业务代码

##### controller
UserController

处理关于用户（User）的HTTP请求

```java
package com.example.javademo.controller;

import com.example.javademo.pojo.User;
import com.example.javademo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// 这个注解表示这个类是一个控制器类，并且其中的方法都会以 JSON 格式返回数据，相当于 @Controller 和 @ResponseBody 的组合。
@RestController
// 这里声明了一个名为 UserController 的类，其中有一个私有字段 userService，并通过 @Autowired 注解进行自动装配，即由 Spring 框架负责注入 UserService 的实例。
public class UserController {
    @Autowired
    private UserService userService;
    // 这个方法使用了 @RequestMapping 注解，指定了处理的 HTTP 请求路径为 "/findById"。当有请求发送到这个路径时，Spring Boot 将调用 findById 方法。
    @RequestMapping("/findById")
    public User findById(Integer id) {
        // 在方法内部，调用了 userService 的 findById 方法，该方法用于根据用户ID查询用户信息。然后，将查询结果（一个 User 对象）直接返回给客户端。
        return userService.findById(id);
    }
}

```
##### mapper
UserMapper

使用 MyBatis 注解方式定义的数据库映射接口（Mapper）

```java
package com.example.javademo.mapper;

import com.example.javademo.pojo.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
// 导入了 MyBatis 的 @Mapper 注解。这个注解用于告诉 MyBatis，这个接口是一个映射器接口，需要由 MyBatis 在运行时生成对应的实现类。
@Mapper
// 定义了一个名为 UserMapper 的接口。这个接口用于描述对用户表进行数据库操作的方法。
public interface UserMapper {
// 使用了 MyBatis 的 @Select 注解，该注解用于声明一个查询操作。其中的 SQL 查询语句是直接写在注解中的。#{id} 是一个占位符，表示在运行时会使用实际的参数值替代。
    @Select("select * from my_table_user where id = #{id}")
    // 定义了一个名为 findById 的方法，用于根据用户的ID查询用户信息。方法的返回类型是 User，表示返回的结果会映射为一个 User 对象。
    public User findById(Integer id);
}

```
##### pojo
User

这个 User 类是一个简单的 Java Bean（POJO），用于封装用户的基本信息。通过提供 getter 和 setter 方法，以及一个构造方法，可以方便地获取和设置用户对象的属性。

```java
package com.example.javademo.pojo;

public class User {
    private Integer id;
    private String name;
    private short age;
    private String gender;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public short getAge() {
        return age;
    }

    public void setAge(short age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public User(Integer id, String name, short age, String gender, String phone) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.phone = phone;
    }

    private String phone;

}

```
##### service
UserService 

这个接口是为用户服务定义了一些操作，其中唯一的方法是根据用户ID查询用户信息。具体的实现将由该接口的实现类提供，这样的设计允许不同的实现类通过实现相同的接口来提供不同的服务逻辑。这也符合面向接口编程的思想，提高了代码的灵活性和可扩展性。

```java
package com.example.javademo.service;

import com.example.javademo.pojo.User;
// 定义了一个名为 UserService 的接口。接口是一种抽象的数据类型，它定义了一组方法的签名，而不提供方法的具体实现。在这里，UserService 接口定义了一个名为 findById 的方法。
public interface UserService {
    User findById(Integer id);
}
```
UserServiceImpl

这段代码是一个实现了 UserService 接口的服务类

```java
package com.example.javademo.service.impl;

import com.example.javademo.mapper.UserMapper;
import com.example.javademo.pojo.User;
import com.example.javademo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// @Service 注解表示这个类是一个服务类，会被 Spring 扫描并纳入容器中管理。
@Service
// 定义了一个名为 UserServiceImpl 的类，该类实现了 UserService 接口。
public class UserServiceImpl implements UserService {
// 声明了一个私有字段 userMapper，并通过 @Autowired 注解进行自动装配，即由 Spring 框架负责注入 UserMapper 的实例。
    @Autowired
    private UserMapper userMapper;
    // 这个方法实现了 UserService 接口中定义的 findById 方法。在方法内部，调用了 userMapper 的 findById 方法，该方法是通过 MyBatis 框架执行具体的数据库查询操作。然后，将查询结果（一个 User 对象）直接返回
    @Override
    public User findById(Integer id) {
        return userMapper.findById(id);
    }
}

```


### Bean管理

#### Bean注册

| --注解--    | --说明---            | ---位置---                                   |
| ----------- | -------------------- | -------------------------------------------- |
| @Component  | 声明bean的基础注解   | 不属于以下三类时用此注解                     |
| @Controller | @Component的衍生注解 | 标注在控制器类上                             |
| @Service    | @Component的衍生注解 | 标注在业务类上                               |
| @Repository | @Component的衍生注解 | 标注在数据访问类上(由于与mybatis整合,用的少) |

如果要注册的bean对象来自第三方(不是自定义的),是无法使用@Component及其衍生注解声明bean的

如果要注册第三方bean,建议在启动类中集中注册


### 项目启动



#### ThreadLocal

ThreadLocal是JDK提供的线程安全的变量，可以用来存取数据。

示例场景:
在用户登录后，需要将用户信息存入ThreadLocal中，以便后续的业务逻辑使用。

- 用来存取数据
- 使用ThreadLocal存取数据线程安全
- 用完需调用remove方法进行释放