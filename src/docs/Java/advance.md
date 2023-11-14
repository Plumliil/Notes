## 进阶篇

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
package com.example.hemajava.controller;

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
package com.example.hemajava;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HeMaJavaApplication {

    public static void main(String[] args) {
        SpringApplication.run(HeMaJavaApplication.class, args);
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

#### yaml

##### yaml配置信息书写
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
  port: 8001
#发件人相关信息
email:
  user: email.plumliil.cn
  code: akjhfakjahfuikasd
  host: smtp.qq.com
  auth: true
```

@Value("${键名}")

```java
package com.example.hemajava.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class EmailConfig {
    @Value("${email.user}")
    private String user;
    @Value("${email.code}")
    private String code;
    @Value("${email.host}")
    private String host;
    @Value("${email.auth}")
    private String auth;

    public String getEmail() {
        System.out.println(this.user + this.code + this.host + this.auth + "--------------------");
        return this.user + this.code + this.host + this.auth;
    }
}
```

@ConfigurationProperties(prefix = "前缀")注解

- 配文件前缀和prefix相同
- 配置文件中配置属性和类属性相同
- 
```java
package com.example.hemajava.service;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;
@ConfigurationProperties(prefix = "email")
@Component
public class EmailConfig {
    private String user;
    private String code;
    private String host;
    private String auth;

    public String getEmail() {
        System.out.println(this.user + this.code + this.host + this.auth + "--------------------");
        return this.user + this.code + this.host + this.auth;
    }
}

```

#### 比较

相较于properties,yaml配置文件层级更加清晰,更加关注配置的数据

### 整合MyBatis


### Bean管理


### 自动配置


### 自定义stater

### SpringBoot 简单搭建本地接口

Spring boot 简单步骤

1. 建立 entity 实体类，跟数据库表字段保持一致
2. 建立 mapper 接口，定义要操作数据库的动作
3. 建立 mapper 的 xml 文件，写具体的 sql 语句
4. 建立 service 类，处理业务逻辑
5. 在 controller 类中展示处理的结果
