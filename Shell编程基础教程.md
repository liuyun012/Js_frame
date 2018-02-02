# Shell编程基础
通过shell脚本来实现一些git库 提交，拷贝等的自动化功能实现  -- by Qzx
## 资料参考网址
- [Shell脚本编程30分钟入门](https://github.com/qinjx/30min_guides/blob/master/shell.md)
- [Shell脚本学习系列教程](http://me.52fhy.com/shell-book/)


### Shell脚本简介
> Shell是一种脚本语言，常见的Shell脚本解释器有bash、sh、csh、ksh等。

### 第一个shell脚本(Hello World)
1. 打开文本编辑器，新建一个文件`test.sh`，扩展名为`.sh`(sh代表shell)。
2. 输入下面代码

```
#!/bin/sh
echo "Hello World !"
```
备注："#!"是一个约定的标记，告诉系统这个脚本需要什么解释器来执行，当作为解释器参数来执行文件时，该行无效。
3. 在命令行运行：

```
sh test.sh
```
4. 运行结果： `Hello World !`

### 基本内容
- **注释**
	以`#`开头，会被解释器忽略，没有多行注释，只能每一行加一个#号。
	 
	```
	# --------
	# 这是注释块
	# --------
	```
- **打印输出**
	echo: 是Shell的一个内部指令，用于在屏幕上打印出指定的字符串。
	
	```
	echo arg 
	echo -e arg #执行arg里的转义字符。echo加-e默认会换行
	echo arg > myfile #显示结果重定向至文件，会生成myfile文件
	```
	printf: 格式化输出语句，是`echo`命令的增强版。
- **变量**
	- 定义：变量名不加美元符号（$）,如：your_name="Qzx"; 注：变量名和等号间不能有空格。
	- 通过语句给变量赋值：for file in `ls /etc`。
	- 使用：在已定义过的变量名前加美元符号：
	```
	your_name="Qzx"
	echo $your_name
	echo ${your_name}
	```
	- 变量名外加花括号是可选的，主要为了帮助解释器识别变量的边界，如：
	```
	for skill in Ada Coffe Action Java; do
		echo "I am good at ${skill}Script"
	done
	```
	- 变量删除：unset variable_name。
	- 变量类型：
		1. 局部变量：在脚本或命令中定义，仅在当前shell实例中有效，其他shell启动的程序不能访问。
		2. 环境变量：所有的程序，包括shell启动的程序，都能访问环境变量。
		3. shell变量：shell变量是由shell程序设置的特殊变量。
- **字符串操作**
	- 单引号字符串限制：
		1. 单引号里的任何字符串都会原样输出，单引号字符串中的变量是无效的
		2. 单引号字符串中不能出现单引号（对单引号使用转义字符也不行）
	- 双引号字符串：
		1. 双引号可以有变量
		2. 双引号可以出现转义字符
	- 拼接字符串
	```
	your_name="Qzx"
	greeting="hello, "$your_name" !"
	greeting_1="hello, ${your_name} !"
	echo $greeting $greeting_1
	```
	- 获取字符串长度
	```
	string="abcd"
	echo ${#string} #输出：4
	```
	- 提取子字符串
	```
	string="alibaba is a great company"
	echo ${string:1:4}  #输出：liba
	```
	- 查找子字符串
	```
	# 找出字母i在这句话中的位置，要在linux下运行，mac下会报错
	string="alibaba is a great company"
	echo `expr index "$string" is`  #输出：3  
	```
- **Shell 数组**
	- 在Shell中，用括号来表示数组，数组元素用"空格"符号分割开。定义数组的一般形式为：
	```
	# 数组名=(值1 值2 ... 值n)
	array_name=(value0 value1 value2 value3)
	# 也可以单独定义数组的各个分量,可使用不连续的下标，且下标范围没有限制
	array_name[0]=value0
	array_name[1]=value1
	array_name[n]=valuen
	```
	- 读取数组
		
		```
		# 一般格式 ${数组名[下标]}
		valuen=${array_name[n]}
		# 使用@符号可以获取数组中的所有元素
		echo ${array_name[@]}
		```
	- 获取数组的长度
	
		```
		# 取得数组元素的个数
		length=${#array_name[@]}
		# 或者
		length=${#array_name[*]}
		# 取得数组单个元素的长度
		length=${#array_name[n]}
		```
- **Shell基本运算符** 
	1. 算数运算符
		
		```
		a=10
		b=20
		`expr $a + $b` 加法 结果为 30。
		`expr $a - $b` 减法 结果为 -10。
		`expr $a \* $b` 乘法 结果为 200。
		`expr $b / $a` 除法 结果为 2。
		`expr $b % $a` 取余 结果为 0。
		`a=$b`  赋值 将变量b的值赋给 a。
		`[$a == $b]` 相等 结果返回 false
		`[$a != $b]` 不相等 结果返回 true 
		```
	2. 关系运算符
	3. 布尔运算符
	4. 字符串运算符
	5. 文件测试运算符
- **Shell里的流程控制**
	- if else 
	
	```
	if condition1
	then 
		command1
	elif condition2
		command2
	else 
		commandN
	fi
	# 写成一行（适用于终端命令提示符）
	if `ps -ef | grep ssh`;  then echo hello; fi
	```
	- for while
	
	```
	for var in item1 item2 ... itemN
	do 
		command1
		command2
		...
		commandN
	done
	
	while condition
	do 
		command
	done
	```
- **Shell里的一些特殊符号**
- **命令行参数**
	