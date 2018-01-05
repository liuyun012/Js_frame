# MySQL数据库学习资料汇总
数据库（Database）是按照数据结构来组织、存储和管理数据的仓库，每个数据库都有一个或多个不同的API用于创建，访问，管理，搜索和复制所保存的数据。MySQL是一个关系型数据库管理系统。
## 参考资料网址
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
		```
	
	- 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	