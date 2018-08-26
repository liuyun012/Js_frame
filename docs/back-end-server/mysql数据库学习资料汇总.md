# MySQL数据库学习资料汇总
数据库（Database）是按照数据结构来组织、存储和管理数据的仓库，每个数据库都有一个或多个不同的API用于创建，访问，管理，搜索和复制所保存的数据。MySQL是一个关系型数据库管理系统。
## 参考资料网址
- [书籍参考《MySQL数据库入门》](https://e.jd.com/30190816.html)
- [MySQL中文官网](https://www.mysql.com/cn/)
- [MySQL教程 -- 菜鸟教程](http://www.runoob.com/mysql/mysql-tutorial.html)
- [mac安装mysql的两种方法（含配置）](https://www.jianshu.com/p/fd3aae701db9)
- [MAMP -- PHP集成开发工具](https://www.mamp.info/en/)
- [Sequel Pro -- Mac上的MySQL管理工具](https://sequelpro.com/)
- [Sequel Pro使用入门教程](https://segmentfault.com/a/1190000006255923)
- [mysql基本操作命令汇总--笔记](https://www.jianshu.com/p/118e1c41e9f0)

## MySQL入门教程
- 安装
	1. 使用mysql安装包安装
	2. 通过homebrew工具安装
	3. 通过安装 PHP集成开发环境工具 -- MAMP 
- Sequel Pro 的使用
	1. 启动 mysql 服务，端口默认 3306； 
	2. 通过 root 连接数据库，因为新建数据库和新建用户需要 root 用户权限；
	3. 新建数据库：点击 Choose Database-> Add Database创建数据库；
	4. 新建用户：点击右上角User，弹出下面用户操作对话框，建立 web 用户，给刚才新建的 laravel 数据库赋予权限；
	5. 用新建 web 用户连接 laravel 数据库；
	6. 在 Query 可以用 命令 去修改数据库的东西；(Run Current -- 运行当前行命令， Run All Queries -- 运行所有命令)

- mysql基本操作命令汇总
	- 0-0. 命令行工具操作(终端)
	
		```
		// 连接数据库
		mysql -u root -p
		// 退出数据库
		quit 或者 control + D 退出
		``` 
	- 1-1. 数据库操作(Sequl Pro的 Query)
		
		```
		// 创建数据库
		create database h_test;
		// 查看数据库
		show databases;
		// 查看数据库信息
		show create database h_test;
		// 修改数据库的编码，可使用上一条语句查看是否修改成功
		alter database h_test default character set gbk collate gbk_bin;
		// 删除数据库
		drop database h_test;
		// 综上，可以直接创建数据库且设置编码方式
		CREATE DATABASE h_test DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
		```
	- 1-2. 数据表操作
		
		```
		// 首先选定操作的数据库
		use h_test;
		// 创建表student
		create table student(
		  id  int(11),
		  name  varchar(20),
		  age int(11)
		);
		// 查看数据表
		show tables;
		// 查看数据表信息，后面加上参数 \G 可使结果更加美观
		show create table student;
		// 查看表的字段信息
		desc student;
		// 修改表名
		alter table student rename to h_student;
		// 修改字段名
		alter table h_student change name stu_name varchar(20);
		// 修改字段的数据类型
		alter table h_student modify id int(20);
		// 添加字段
		alter table h_student add grade float;
		// 删除字段
		alter table h_student drop grade;
		// 修改字段的位置
		alter table h_student modify stu_name varchar(20) first;
		alter table h_student modify id int(11) after age;
		// 删除数据表
		drop table h_student;
		```
	- 1-3. 表的约束
		
		| 约束条件 |   说明  |
		|  :---   |  :---: | 
		| PRIMARY KEY | 主键约束，用于唯一标识对应的记录 |
		| FOREIGN KEY | 外键约束   |
		| NOT NULL    | 非空约束   |
		| UNIQUE      | 唯一性约束 |
		| DEFAULT     | 默认值约束，用于设置字段的默认值 |
	- 1-4. 索引
		> 作用：提高表中数据的查询速度 <br>
		> 种类：1.普通索引 2.唯一性索引 3.全文索引 4.单列索引 5.多列索引 6.空间索引
		
		```
		// 创建索引
		// 一、创建表的时候创建索引
		create table 表名(
			字段名 数据类型[完整性约束条件],
			...
			字段名 数据类型,
			[UNIQUE][FULLTEXT|SPATIAL] INDEX|KEY
		);
		// 1-1. 创建普通索引
		create table test1(
			id  INT,
			name 	VARCHAR(20),
			age INT,
			INDEX (id)
		);
		// 可以插入一条数据，查看索引是否被使用
		explain select * from test1 where id=1 \G;
		// 1-2. 创建唯一性索引
		create table test2(
			id  INT,
			name 	VARCHAR(20),
			age INT,
			UNIQUE INDEX unique_id(id asc)
		);
		// 1-3. 创建全文索引
		create table test3(
			id  INT,
			name 	VARCHAR(20),
			age INT,
			FULLTEXT INDEX fulltext_name(name)
		)ENGINE=MyISAM;
		// 1-4. 创建单列索引
		create table test4(
			id  INT,
			name 	VARCHAR(20),
			age INT,
			INDEX single_name(name(20))
		);
		// 1-5. 创建多列索引
		create table test5(
			id  INT,
			name 	VARCHAR(20),
			age INT,
			INDEX multi(id,name(20))
		);
		// 1-6. 创建空间索引
		create table test6(
			id  INT,
			space GEOMETRY NOT NULL,
			SPATIAL INDEX sp(space)
		)ENGINE=MyISAM;
		---------------------------------------------
		// 二、使用create index语句在已经存在的表上创建索引
		// 首先新建一个表，这个表没有索引
		create table student(
			id int,
			age int,
			name varchar(20),
			intro varchar(40),
			g GEOMETRY NOT NULL
		)ENGINE=MyISAM;
		// 2-1. 创建普通索引
		create index index_id on student(id);
		// 2-2. 创建唯一性索引
		create unique index uniqueidx on student(id);
		// 2-3 创建单列索引
		create index singleidx on student(age);
		// 2-4. 创建多列索引
		create index mulitidx on student(name(20),intro(40));
		// 2-5. 创建全文索引
		create fulltext index fulltextidx on student(name);
		// 2-6. 创建空间索引
		create spatial index spatidx on student(g);
		// 下图是第二种方法创建索引演示后的所有索引
		命令：show create table student;
		CREATE TABLE `student` (
		  `id` int(11) DEFAULT NULL,
		  `age` int(11) DEFAULT NULL,
		  `name` varchar(20) DEFAULT NULL,
		  `intro` varchar(40) DEFAULT NULL,
		  `g` geometry NOT NULL,
		  UNIQUE KEY `uniqueidx` (`id`),
		  KEY `index_id` (`id`),
		  KEY `singleidx` (`age`),
		  KEY `mulitidx` (`name`,`intro`),
		  SPATIAL KEY `spatidx` (`g`),
		  FULLTEXT KEY `fulltextidx` (`name`)
		) ENGINE=MyISAM DEFAULT CHARSET=utf8
		```
		
		```
		// 三、使用alter table语句在已经存在的表上创建索引 
		// 删除student表，重新创建 
		drop table student;
		create table student(
			id int,
			age int,
			name varchar(20),
			intro varchar(40),
			space GEOMETRY NOT NULL
		)ENGINE=MyISAM;
		// 3-1. 创建普通索引
		alter table student add index index_id(id);
		// 3-2. 创建唯一性
		alter table student add unique uniqueidx(id);
		// 3-3. 创建单列索引
		alter table student add index singleidx(age);
		// 3-4. 创建多列索引
		alter table student add index multidx(name(20),intro(40));
		// 3-5. 创建全文索引
		alter table student add fulltext index fulltextidx(name);
		// 3-6. 创建空间索引
		alter table student add spatial index spatidx(space);
		```
		
		```
		// 删除索引，有下面两种方式
		// 1. 使用alter table删除索引fulltextidx
		alter table student drop index fulltextidx;
		// 2. 使用drop index 删除索引spatidx
		drop index spatidx on student;
		```
	- 1-5、添加数据
		
		```
		// 重新建立表 student
		drop table student;
		create table student(
		  id int,
		  name varchar(20) not null,
		  grade float
		);
		// 插入一条数据，也可以少某个字段的同时也少对应的数据
		insert into student(id,name,grade) values(1,'howie',70);
		// 也可以不指定字段名，但要注意顺序
		insert into student values(2,'howie',80);
		// 也可以这样添加数据
		insert into student set id=3,name="howie",grade=90;
		// 同时添加多条数据
		insert into student values (4,'howie',80),(5,'howie',80),(6,'howie',80);
		```
	- 1-6、更新数据
	
		```
		// 更新id=1的数据
		update student set name="howie",grade=60 where id=1;
		// 批量更新，如果没有where子句，会更新表中所有对应数据
		update student set grade=100 where id<4;
		```
	- 1-7、删除数据
	
		```
		// 删除id=6的数据
		delete from student where id=6;
		// 批量删除数据
		delete from student where id>3;
		// 删除所有数据，DDL(数据定义语言)语句 truncate table student也可以删除表内所有数据
		delete from student;
		```
		
## 二、单表查询和多表操作

> 单表查询：如何从数据库中获取你需要的数据
> 多表查询：实际开发中，需要进行2张表以上进行操作
	
### 2-1-1. 单表查询

	```
	// 建立表 student
	create table student(
		id int not null auto_increment,
		name varchar(20) not null,
		grade float,
		primary key(id)
	);
	// 插入数据
	insert into student (name,grade) values ("howie1",40),("howie1",50),("howie2",50),("howie3",60),("howie4",70),("howie5",80),("howie6",null);
	// 查询全部
	select * from student;
	// 查询某个字段
	select name from student;
	// 条件查询，查询 id=2 学生的信息
	select * from student where id=2;
	// in关键字查询，也可以使用not in
	select * from student where id IN(1,2,3);
	// between and 关键字查询
	select * from student where id between 2 and 5;
	// 空值(NULL)查询，使用IS NULL 来判断
	select * from student where grade is null;
	// distinct 关键字查询
	select distinct name from student;
	// like 关键字查询，查询以h开头，e结尾的数据
	select * from student where name like "h%e";
	// and关键字多条件查询，or关键字的使用也是类似
	select * from student where id>5 and grade>60;
	```
### 2-1-2. 高级查询

	```
	// 聚合函数
	// count()函数，sum()函数，avg()函数，max()函数，min()函数
	select count(*) from student;    // 列表总数
	select sum(grade) from student;  // 计算总和
	select avg(grade) from student;  // 计算平均值
	select max(grade) from student;  // 求最大值
	select min(grade) from student;  // 求最小值
	// 对查询结果进行排序
	select * from student order by grade;  // 默认正序
	select * from student order by grade desc; // 倒序
	// 分组查询
	// 1.单独使用group by 分组
	select * from student group by grade;
	// 2.和聚合函数一起使用
	select count(*),grade from student group by grade;
	// 3.和having关键字一起使用
	select sum(grade),name from student group by grade having sum(grade)>100;
	// 使用limit限制查询结果的数量
	select * from student limit 5;    // 最多5个
	select * from student limit 2,2;  // 从第2开始，查询2个
	select * from student order by grade desc limit 2,2;
	// 函数，mysql提供了许多函数
	select concat(id,':',name,':',grade) from student;
	// 为表取别名
	select * from student as stu where stu.name="howie1";
	// 为字段取别名，as关键字也可以不写
	select name as stu_name,grade stu_grade from student;
	```
### 2-2. 多表操作
> 1. 了解外键
> 2. 了解关联关系
> 3. 了解各种连接查询多表的数据
> 4. 了解子查询，会使用各种关键字以及比较运算符查询多表中的数据

### 2-2-1. 外键
> 外键是指引用另外一个表中的一列或者多列，被引用的列应该具有主键约束或者唯一性约束，用于建立和加强两个数据表之间的连接。
	
```
// 创建表 class, student
create table class(
   id int not null primary key,
   classname varchar(20) not null
)ENGINE=InnoDB;
create table student(
	stu_id int not null primary key,
	stu_name varchar(20) not null,
	cid int not null      // 表示班级id, 它就是class表的外键
)ENGINE=InnoDB;
// 添加外键约束
alter table student add constraint FK_ID foreign key(cid) references class(id);
// 删除外键约束
alter table student drop foreign key FK_ID;
```

### 2-2-2. 操作关联表

```
// 数据表有三种关联关系，多对一、多对多、一对一
// 学生(student)和班级(class)是多对一关系，添加数据
// 首选添加外键约束
alter table student add constraint FK_ID foreign key(cid) references class(id);
// 添加数据，这两个表便有了关联，若插入中文在终端显示空白，可设置 set names 'gbk';
insert into class values(1,"软件一班"),(2,"软件二班");
insert into student values(1,"howie",1),(2,"howie1",2),(3,"howie2",1),(4,"howie3",2);
// 交叉连接
select * from student cross join class;
// 内连接，该功能也可以使用where 语句实现
select student.stu_name,class.classname from student join class on class.id=student.cid;
// 外连接
// 首先在student,class表中插入数据
insert into class values(3,"软件三班");
// 左连接，右连接
select s.stu_id,s.stu_name from student s left join class c on c.id=s.cid;
select s.stu_id,s.stu_name,c.classname from student s right join class c on c.id=s.cid;
// 复合条件连接查询就是添加过滤条件
// 子查询
// in关键字子查询跟上面的in关键字查询类似
select * from student where cid in(select id from class where id=2);
// exists关键字查询，相当于测试，不产生数据，只返回true或者false,只有返回true,外层才会执行
select * from student where exists(select id from class where id=12);   // 外层不会执行
select * from student where exists(select id from class where id=1); // 外层会执行
// any关键字查询
select * from student where cid>any(select id from class);
// all关键字查询
select * from student where cid>all(select id from class);
``` 

## 三、事务与存储过程
> 事务的概念，会开启、提交和回滚事务
> 事务的四种隔离级别
> 创建存储过程
> 调用、查看、修改和删除存储过程

### 3-1 事务管理

```
start transaction;  -- 开启事务
commit;   			-- 提交事务
rollback;  			-- 取消事务(回滚)
// 创建表account, 插入数据
create table account(
	id int primary key auto_increment,
	name varchar(40),
	money float
);
insert into account(name,money) values('a',1000),('b',2000),('c',3000);
// 利用事务实现转账功能，首先开启事务，然后执行语句，提交事务
start transaction;
update account set money=money-100 where name='a';
update account set money=money+100 where name='b';
commit;
// 事务的提交，通过这个命令查看mysql提交方式
select @@autocommit;  -- 若为1，表示自动提交，为0，就要手动提交
// 设置事务的提交方式为手动提交
set @@autocommit = 0;  -- 设置为手动提交
start transaction;
update account set money=money+100 where name='a';
update account set money=money-100 where name='b';
// 现在执行 select * from account 可以看到转账成功，若此时退出数据库重新登录，会看到各账户余额没有改变，所以一定要用commit语句提交事务，否则会失败
// 事务的回滚，别忘记设置为手动提交的模式
start transaction;
update account set money=money-100 where name='a'; 
update account set money=money+100 where name='b';  
// 若此时a不想转账给b,可以使用事务的回滚
rollback;
// 事务的隔离级别
read uncommitted;
read committed;
repeatable read;
serializable;
```

### 3-2 存储过程

```
// 创建查看student表的存储过程
// 创建student表
create table student(
	id int not null primary key auto_increment,
	name varchar(4),
	grade float
)ENGINE=InnoDB default character set utf8;
delimiter //   -- 将mysql的结束符设置为//
create procedure Proc()
	begin
	select * from student;
	end //
delimiter ;   -- 将mysql的结束符设置为 ;
call Proc();  -- 这样就可以调用该存储过程
// 变量的使用，mysql中变量不用事前申明，在用的时候直接用“@变量名”使用就可以
set @number=100;  -- 或set @num:=1;
// 定义条件和处理程序
// 光标的使用 (没有运行过去)
// 1.声明光标
DECLARE * cursor_name* CURSOR FOR select_statement
2. 光标OPEN语句
OPEN cursor_name
3. 光标FETCH语句
FETCH cursor_name INTO var_name [, var_name] ...
4. 光标CLOSE语句
CLOSE cursor_name
// 流程控制的使用 暂不做介绍
```

### 3-3 调用存储过程

```
// 定义存储过程
delimiter //
create procedure proc1(in name varchar(4),out num int)
begin
select count(*) into num from student where name=name;
end//
delimiter ;
// 调用存储过程
call proc1("tom",@num)  -- 查找名为tom学生人数
// 查看结果
select @num; -- 结果 0
```

```
// 查看存储过程
show procedure status like 'p%'  -- 获得以p开头的存储过程信息
// 修改存储过程
alter {procedure|function} sp_name[characteristic...]
// 删除存储过程
drop procedure proc1;
```

## 四、视图
> 如何创建视图 <br>
> 查看、修改、更新、删除视图

### 4-1、视图的基本操作

```
// 在单表上创建视图，重新创建student表，插入数据
create table student(
	id int not null primary key auto_increment,
	name varchar(10) not null,
	math float,
	chinese float
);
insert into student(name,math,chinese) values('howie1',66,77),('howie2',66,77),('howie3',66,77);
// 开始创建视图
create view stu_view as select math,chinese,math+chinese from student;   -- select * from stu_view 可以查看是否成功
// 也可以创建自定义字段名称的视图
create view stu_view2(math,chin,sum) as select math,chinese,math+chinese from student;
```

```
// 在多表上创建视图，创建表 stu_info, 插入数据
create table stu_info(
	id int not null primary key auto_increment,
	class varchar(10) not null,
	addr varchar(100)
);
insert into stu_info(class,addr) values('1','anhui'),('2','fujian'),('3','guangdong');
// 创建视图stu_class
create view stu_class(id,name,class) as select student.id,student.name,stu_info.class from student,stu_info where student.id=stu_info.id;
// 查看视图
desc stu_class;
show table status like 'stu_class'
show create view stu_class
// 修改视图
create or replace view stu_view as select * from student;
alter view stu_view as select chinese from student;
// 更新视图
update stu_view set chinese=100;
insert into student values(null,'haha',100,100);
delete from stu_view2 where math=100;
// 删除视图
drop view if exists stu_view2;
```