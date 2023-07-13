# 基础篇

## 库,表,数据三者关系

### 什么是库

库是用来存放 n 张表

### 什么是表

表可以存放数据,由字段,数据类型(字符串 varchar,整数 int bigint,小数 float,日期 Date 等)组成

### 什么是数据

表中的信息:文本,视频,图片,音频等

## 数据类型,库,表操作

### 数据类型

- 常见数据类型: varchar(n),float,int(n),bigint(n),date,datetime,text
- 默认值: Default `默认值`
- 非空: NOT NULL
- 自动增长: AUTO_INCREMENT,尽量作用在 int 类型字段上
- 主键: PRIMARY KEY 不能够重复,一张表只有一个字段可以作为主键,供操作数据使用
- 唯一键:UNIQUE

```sql
CREATE TABLE students (
	id BIGINT ( 20 ) AUTO_INCREMENT PRIMARY KEY COMMENT 'ID',
	stu_name VARCHAR ( 40 ) DEFAULT NULL COMMENT '学生姓名',
  gender VARCHAR ( 2 ) DEFAULT '男' COMMENT '性别'
)
```

### 创建库

```sql
--  普通创建库
CREATE DATABASE 库名;
-- 指定编码创建库
CREATE DATABASE 库名 CHARACTER SET 编码名(utf8等)
```

### 删除库

```sql
DROP DATABASE 库名
```

### 创建表

```sql
-- CREATE TABLE 表名 (
-- 字段 1 数据类型,
-- 字段 2 数据类型,
-- 字段 3 数据类型,
-- 字段 4 数据类型,
-- ...
-- )
USE 库名; -- 在哪个数据库下
CREATE TABLE grade(
	name VARCHAR(40),
	class VARCHAR(20),
  score FLOAT
)
```

### 删除表

```sql
DROP TABLE 表名;
```

## 数据的增删改查

### 增

```sql
-- INSERT INTO 表名(字段1,字段2...) VALUES(值1,值2...)
INSERT INTO `grade` (name,class,score) VALUES('张三','三年一班',89) -- 插入一条
INSERT INTO `grade` (name,class,score) VALUES('张三','三年一班',89),('李四','三年一班',78) -- 插入多条
-- INSERT INTO 表名 SET 字段名1=字段值1,字段名2=字段值2...
INSERT INTO `grade` SET name='李四',class='三年一班',score=87
-- INSERT INTO 表名 VALUES(值1,值2,值3) 省略字段前提是插入全部值
INSERT INTO `grade` VALUES('王五','三年一班',76)

```

需要注意的是字段名和字段值需一一对应

### 删

```sql
-- DELETE FROM 表名 WHERE 条件
DELETE FROM `grade` WHERE name='李四'
```

### 改

算术运算符

- \+
- \-
- \*
- /

```sql
-- UPDATE 表名 SET 字段名1=字段值1,字段名2=字段值2... WHERE 条件
UPDATE `grade` SET class='三年二班' WHERE name='张三'
```

#### 表的重命名

```sql
-- RENAME TABLE 旧表名 TO 新表名;
RENAME TABLE grade TO student_info;
```

#### 更新表字段

```sql
-- 新增表字段
-- ALTER TABLE 表名 ADD 字段名 数据类型
ALTER TABLE student_info ADD gender VARCHAR(2)
-- 删除表字段
-- ALTER TABLE 表名 DROP 字段名
ALTER TABLE student_info DROP gender
-- 字段重命名
-- ALTER TABLE 表名 CHANGE 旧字段名 新字段名 新字段名数据类型
ALTER TABLE student_info CHANGE name sname VARCHAR(40)
-- 修改字段类型 改长短
ALTER TABLE student_info CHANGE name name VARCHAR(25)
-- 添加日期字段 date 只有年月日 datetime 有年月日时分秒
-- ALTER TABLE 表名 ADD 日期字段名 DATE;
UPDATE student_info SET birthday='2001-01-01' WHERE sname='李四'
```

### 查

#### 关系运算符

- =
- \>
- \>=
- <
- <=
- !=
  关系运算符需放在`WHERE`关键字后

#### 逻辑运算符

- AND 与
- OR 或
- NOT 非

#### 查询数据

```sql
-- SELECT 字段1,字段2... from 表名 [where 条件]
-- 查询某张表内全部数据记录
SELECT * FROM `grade`;
-- 查询某一个字段
SELECT name FROM `grade`;
-- 通过AS为查询到的数据起别名
SELECT name AS uname FROM `grade` WHERE score>=90
-- 多条件查询
SELECT name AS uname FROM `grade` WHERE score>90 AND class='三年一班'
```

##### 排序

排序时字段可以是数值类型,也可以是 varchar 类型

如果字段是中文不能排序,如果是英文按照 a-z 排序

- 升序 ASC
- 降序 DESC

```sql
-- 升序查成绩
SELECT * FROM students ORDER BY grade ASC
-- 降序查成绩
SELECT * FROM students ORDER BY grade DESC
```

#### SQL 语句分类

- 查询语言 DQL database query language
  - 对表的查询 SELECT
- 定义语言 DDL database defined language
  - 创建库 CREATE DATABSE
  - 创建表 CREATE TABLE
  - 删除表 DROP TABLE
- 操作语言 DML database management language
  - 插入 INSERT
  - 更新 UPDATE
  - 删除 DELETE

#### 查询库

```sql
-- SHOW CREATE DATABASE 库名; 查询指定库信息
SHOW CREATE DATABASE db0712;
-- 查询当前mmysql下所有库信息
SHOW DATABASES;
-- 查询当前用户连接的数据库
SELECT DATABASE();
```

#### 查询表

```sql
-- 查询当前库下表信息
-- SHOW CREATE TABLE 表名;
SHOW CREATE TABLE grade;
-- 查询表结构
-- DESC TABLES;
DESC grade;
```

### 总结

- 创建库,创建表 : CREATE
- 删除库,删除表 : DROP
- 修改库,修改表表 : ALTER
- 查询库,查询表 : SHOW , SELECT
- 添加数据 : INSERT
- 修改数据 : UPDATE
- 查询数据 : SELECT
- 删除数据 : DELETE

## 数据库备份与还原

#### 通过命名备份 还原

```shell
# 备份
# mysqldump -uroot -p密码 需要备份的数据库>备份后sql脚本名
mysqldump -uroot -p db0712>c:\db0712_student_info.sql
# 还原
# 进入环境 -> 创建一个库 -> 还原数据
create database db0712
use database db0712
source c:\db0712_student_info.sql
```

#### 通过工具

以 navicate 为例

- 右键库
- 选择转储 SQL 文件
- 根据需要选择结构和数据
- 运行 SQL 文件

## 高级 SQL 查询

## 连接查询

## 存储过程与函数

### 聚合函数与常见函数

#### 聚合函数

在函数中,函数使用 SELECT 关键字调用 SELECT 函数名(字段) [FROM 表名]

- 找出最大值:MAX(字段名)
  ```sql
  SELECT MAX(grade) AS 最高分 FROM students
  ```
- 找出最小值:MIN(字段名)
  ```sql
  SELECT MIN(grade) AS 最低分 FROM students
  ```
- 求平均数:AVG(字段名)
  ```sql
  SELECT AVG(grade) AS 平均分 FROM students
  ```
- 求和:SUM()
  ```sql
  SELECT SUM(grade) AS 平均分 FROM students
  ```
- 统计数据总数:COUNT()
  当某个字段为空时不计入统计数,所以统计时一般使用\*来统计所有数据
  ```sql
  SELECT COUNT(*) AS 平均分 FROM studentsS
  SELECT COUNT(grade) AS 平均分 FROM studentsS
  ```

#### 常用函数

##### 时间函数

```sql
  SELECT 时间函数()

```

- 获取当前时间:NOW()
- 获取当前年月日:CURDATE()
- 获取当前时分秒:CURTIME()
- 返回日期 date 的年份: YEAR()
- 返回日期 date 为一年中的第几周: WEEK()
- 返回时间 time 的小时值: HOURE()
- 返回时间 time 的分钟值: MINUTE()
- 返回 date1 和 date2 之间相隔天数: DATEDIFF(date1,date2)
- 计算日期参数 date 加上 n 天后的日期: ADDDATE(date,n))

##### 数学函数

- 向上取整 CEIL(数值)
- 向下取整 FLOOR(数值)
- 随机数 RAND() 不接受参数,返回 0-1 小数
  - 随机整数
  ```sql
  SELECT CEIL(RAND()*100)
  ```

## 视图

## 高级特性之事务
