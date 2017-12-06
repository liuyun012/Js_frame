## PHP 简介 和 开发环境配置
PHP(Hypertext Preprocessor)是全球最流行的Web程序开发语言(没有之一)。语法简单,易于学习、功能强大、灵活易用。PHP、Apache和MySQL的组合已成为Web服务器的一种配置标准。

- 配置PHP开发环境
	- windows下： [XAMPP 集成工具](https://www.apachefriends.org/zh_cn/index.html)
	- Mac下：[MAMP 集成工具](https://www.mamp.info/en/)
	- Php在线代码工具： [php 在线工具](http://www.runoob.com/try/runcode.php?filename=demo_intro&type=php)
- PHP 开发工具
	- [PHP 开发工具推荐](http://www.runoob.com/w3cnote/php-develop-tools.html)
	- [PhpStorm 软件](https://www.jetbrains.com/phpstorm/)
	- [phpStorm 2017 最新版激活及汉化破解方式](http://www.edbiji.com/doccenter/showdoc/176/nav/3066.html)
	- [PhpStorm 2017.1.4 Mac中文破解版](http://www.sdifen.com/phpstorm201714.html)
	- [Mysql 开源数据库](https://www.mysql.com/cn/)
	- [Sequel Pro -- Mac 上的MySQL 管理工具](https://www.sequelpro.com/)
	- [phpMyAdmin -- MySQL 管理工具](https://www.phpmyadmin.net/)


## PHP 入门教程及框架汇总
- PHP 教程及资料
	- [PHP 菜鸟教程](http://www.runoob.com/php/php-tutorial.html) 
	- [PHP W3Cschool教程](https://www.w3cschool.cn/php/)
- PHP 框架及项目 
	- [Thinkphp 框架](http://www.thinkphp.cn/) 
	- [Laravel 官网](https://laravel.com/)
	- [Laravel 学院](http://laravelacademy.org/)

## PHP基础知识
- 基本语法 <br>
	php脚本以 <?php 开始，以 ?> 结束，默认文件扩展名 ".php"：
	
	```
	<?php
		//PHP 代码
	?>
	```
	在浏览器输出文本的基础指令：echo, print, 每个代码行必须以分号结束，用于把指令集区分开, 注释分 单行注释 和 多行注释。
	
	```
		echo "Hello World! ";
		echo "欢迎 世界 ";
		
		// 这是 PHP 单行注释
		/*
			这是
			PHP多行
			注释
		*/
	```
- 基础数据类型及操作
	- 变量(以 $符合开始，后面跟变量的名称，变量名必须以字母或者下划线开始)
		- $符号开始，后面跟变量名称
		- 变量名以字母或下划线开始，只能包含字母数字字符以及下划线（A-z、0-9和_）
		- 变量名不能包含空格，区分 大小写（$y 和 $Y 是两个不同的变量） 
		- 变量作用域：local、global、static、parameter
		- 局部和全局作用域,全局变量存储在一个名为 $GLOBALS[index] 的数组中。 index 保存变量的名称。
		
		```
		<?php
			$x=5; // 全局作用域
			$y=10;
			function myTest() 
			{ 
			    $y=10; // 局部变量 
			}
			
			myTest()；
			echo "变量 y 为: $y";
			function myTest0()
			{
			    global $x,$y; // 函数内访问全局变量
			    $y=$x+$y;
			    static $z=0;
			    echo $z;
			    $z++;
			}	
			myTest0();
			echo $y; // 输出 15	
		?>
		```
	- 数据类型： String(字符串)、Integer(整型)、Float(浮点型)、Boolean(布尔型)、Array(数组)、Object(对象)、NUll(空值) <br>
		通过PHP的 var_dump() 函数可以返回变量的数据类型和值
	
		```
		$x = "Hello world!";  // 字符串
		$x = 5985; // 整数
		$x = -345; // 负数
		$x = 0x8C; // 十六进制数
		$x = 047;  // 八进制数
		$x = 2.4e3;
		$x = 8E-5;
		$x=true;   // 布尔值
		$cars=array("Volvo","BMW","Toyota");  // 数组
		class Car   // 声明类对象
		{
		  var $color;
		  function Car($color="green") {
		    $this->color = $color;
		  }
		  function what_color() {
		    return $this->color;
		  }
		}
		$x=null;
		var_dump($x);
		```
	- 常量 define()函数，默认为全局的
		
		```
		bool define ( string $name , mixed $value [, bool $case_insensitive = false ] )
		```
		三个参数：name: 必选参数，常量名称即标识符； value: 必须参数，常量的值。
		case_insensitive: 可选参数，若设置为 TRUE,则该常量大小写不敏感，默认为false。
	
		```
		// 区分大小写的常量名
		define("GREETING", "欢迎访问 Runoob.com");
		echo GREETING;    // 输出 "欢迎访问 Runoob.com"
		// 不区分大小写的常量名
		define("GREETING", "欢迎访问 Runoob.com", true);
		echo greeting;  // 输出 "欢迎访问 Runoob.com"	
		```
	- 字符串 （文字值变量时，需加 单引号或者双引号）
		- 并置运算符( . ), 将两个字符串值连接起来
		- strlen()函数，返回字符串的长度(字符数)
		- dtrpos()函数，查找一个字符或一段指定的文本，找到则返回第一个匹配的字符位置，否则返回FALSE。
		- mb_strlen(), 指定编码输出中文字符个数
	
		```
		$txt='Hello world!'; 
		$txt2="What a nice day!"; 
		echo $txt1 . " " . $txt2; // Hello world! What a nice day!
		echo strlen("Hello world!");  // 输出 12
		echo strpos("Hello world!","world");  // 输出 6， 第一个字符的位置为 0
		echo strlen("中文字符");   // 输出 12，一个中文占 3 个字符数
		echo mb_strlen("中文字符",'utf-8');  // 输出 4
		```
	- 运算符
		- 算数运算符 ( +、-、*、/、%、-x、a.b 和 intdiv() )
		- 赋值运算符 ( =、+=、-=、^=、/=、%=、.= )
		- 递增/递减运算符 ( ++x、x++、--x、x--)
		- 比较运算符 ( ==、===、!=、<>、!==、>、<、>=、<= )
		- 逻辑运算符 ( and、or、xor、&&、||、！ )
		- 数组运算符 ( +、==、===、!=、<>、!==)
		- 三元运算符 ( ?: )
		- 组合比较符 ( <=> )
	- If...Else 条件语句 (if(){ }、if(){ } else {}、if() {} elseif() { }else { })
	- switch 语句
	
	```
	<?php
		switch (n)
		{
		case label1:
		    如果 n=label1，此处代码将执行;
		    break;
		case label2:
		    如果 n=label2，此处代码将执行;
		    break;
		default:
		    如果 n 既不等于 label1 也不等于 label2，此处代码将执行;
		}
	?>
	```
	- 数组 array()
		- count()函数：获取数组的长度
		- 遍历数值数组
		
		```
		<?php
			$cars=array("Volvo","BMW","Toyota");
			$arrlength=count($cars);
			 
			for($x=0;$x<$arrlength;$x++)
			{
			    echo $cars[$x];
			    echo "<br>";
			}
		?>
		``` 
		- 关联数组，创建关联数组的方法：
		
		```
		$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
		// 或者
		$age['Peter']="35";
		$age['Ben']="37";
		$age['Joe']="43";
		```
		- 遍历关联数组
		
		```
		<?php
			$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
			 
			foreach($age as $x=>$x_value)
			{
			    echo "Key=" . $x . ", Value=" . $x_value;
			    echo "<br>";
			}
		?>
		```
- 数组排序
	- sort() - 升序排列
	- rsort() - 降序排列
	- asort() - 根据关联数组的值，对数组升序排列
	- ksort() - 根据关联数组的键，对数组升序排列
	- arsort() - 根据关联数组的值，对数组降序排列
	- krsort() - 根据关联数组的键，对数组降序排列 
- PHP 超级全局变量
	- $GLOBALS 包含全部变量的全局组合数组，变量的名字就是数组的键
	- $_SERVER  包含诸如头信息(header)、路径(path)、以及脚本位置(script locations)等信息的数组。
	- $_REQUEST 用于收集HTML表单提交的数据
	- $_POST 广泛应用于收集表单数据，在HTML标签的指定该属性："method="post""
	- $_GET 广泛应用于收集表单数据，在HTML标签的指定该属性："method="get"
	- $_FILES
	- $_ENV
	- $_COOKIE
	- $_SESSION
- 函数
	- 内建函数,超1000个 [PHP参考手册](http://www.runoob.com/php/php-ref-array.html) 
	- 创建 PHP 函数（函数名应能提示它的功能，以字母或者下划线开头）
	- 添加函数，为函数添加更多功能，添加参数，参数类似变量
	- 返回值 -- return语句
- PHP魔法变量
	- __LINE__ ：文件中的当前行号。
	- __FILE__ ：文件的完整路径和文件名。如果用在被包含文件中，则返回被包含的文件名。
	- __DIR__ ： 文件所在的目录。如果用在被包括文件中，则返回被包括的文件所在的目录。
	- __FUNCTION__ ：返回该函数被定义时的名字（区分大小写）。
	- __CLASS__ ： 返回该类被定义时的名字（区分大小写）。
	- __TRAIT__ ： Trait 名包括其被声明的作用区域
	- __METHOD__ ： 返回该方法被定义时的名字（区分大小写）。
	- __NAMESPACE__ ： 当前命名空间的名称（区分大小写）。
-  命名空间(namespace) <br>
	- 解决以下两类问题：
		- 用户编写的代码与PHP内部的类/函数/常量或第三方类/函数/常量之间的名字冲突。
		- 为很长的标识符名称(通常是为了缓解第一类问题而定义的)创建一个别名（或简短）的名称，提高源代码的可读性。
	- 定义命名空间：通过关键词 namespace 来声明，如果一个文件中包含命名空间，它必须在其它所有代码之前声明命名空间。
	
	```
	< ?php  
		namespace MyProject1;  
		// MyProject1 命名空间中的PHP代码  
		 
		namespace MyProject2;  
		// MyProject2 命名空间中的PHP代码    
		 
		// 另一种语法
		namespace MyProject3 {  
		 // MyProject3 命名空间中的PHP代码    
	}  
	?>
	``` 
	- 子命名空间，命名空间的名字可以使用分层次的方式定义
		
		```
		<?php
			namespace MyProject\Sub\Level;  //声明分层次的单个命名空间
			
			const CONNECT_OK = 1;
			class Connection { /* ... */ }
			function Connect() { /* ... */  }
		?>
		```
- PHP 面向对象 <br>
	对象的三个主要特征：
	
		- 对象的行为：可以对 对象施加那些操作
		- 对象的形态：当施加那些方法是对象如何响应
		- 对象的表示：具体区分在相同的行为与状态下有什么不同
	面向对象内容：类、对象、成员变量、成员函数、继承、父类、子类、多态、重载、抽象性、封装、构造函数、析构函数。
	
	```
	<?php
		class phpClass {
		  var $var1;
		  var $var2 = "constant string";
		  
		  function myfunc ($arg1, $arg2) {
		     [..]
		  }
		  [..]
		}
	?>
	```
	