# JavaScript 基础操作汇总
javascript基础知识点汇总整理 by Qzx

## 参考网址
- [JavaScript 对象参考手册](http://www.w3school.com.cn/jsref/)

## JavaScript基础参考手册汇总
#### Array 对象
创建方式： ① new Array()   ② new Array(size)  ③ new Array(ele0,ele1,ele2,...,elen)  ④  []  <br>
参数: size 是期望的数组元素个数， ele0,...elsen是参数列表，初始化的值

##### Array 对象属性
 属性         |  描述
 ------      |  ------
 constructor | 返回创建此对象的数组函数的引用
 length      | 设置或返回数组中元素的数目
 prototype   | 使您有能力向对象添加属性和方法
 
##### Array 对象方法(index下标，num个数，items新的元素)
 方法        |  描述      |    例子
 ------     | -----      |  ------
 concat()   | 连接两个或更多的数组，并返回结果  | arr1.concat(arr2)
 join()     | 把数组的所有元素放入一个字符串，并通过指定的分隔符进行分割  | arr.join(',')
 splice(index, num, items)    | 删除元素，并向数组添加新元素  |  arr.splice(2, 0, "新元素")
 slice(start, end)  | 从某个已有的数组返回选定的元素(start可负，end可选) | arr.slice(2, 4)
 pop()      | 删除并返回数组的最后一个元素     |  arr.pop()
 push()     | 向数组的末尾添加一个或更多元素，并返回新的长度  | arr.push('James','Jack')
 shift()    | 删除并返回数组的第一个元素      | arr.shift()
 unshift()  | 向数组的开头添加一个或更多元素，并返回新的长度  | arr.unshift('James','Jack')
 sort()     | 对数组的元素进行排序           |  arr.sort()
 reverse()  | 颠倒数组中元素的顺序           | arr.reverse()
 reduce()   | 对数组所有元素调用指定的回调函数 | arr.reduce((a,b) => a+b, 0) 数组内所有元素相加
 map()      | 对数组的每个元素调用定义的回调函数 | arr.map((a) => a + 10) 数组内所有元素加 10
 toString() | 将数组转换为字符串，并返回结果   | arr.toString()
 toSource() | 返回该对象的源代码             | arr.toSource()
 valueOf()  | 返回数组对象的原始值           | arr. valueOf()
  
#### String 对象
创建方式： ①  new String(s)  ②  String(s)  ③ ''
参数： s 是要存储在 String 对象中或转换成原始字符串的值
##### String 对象属性
 属性         |  描述
 ------      |  ------
 constructor | 返回创建此对象的数组函数的引用
 length      | 字符串的长度
 prototype   | 允许您向对象添加属性和方法
 
##### String 对象方法
 方法           |  描述       |    例子
 ------        | -----      |  ------
 indexOf()     | 检索字符串   | str.indexOf("Hello") 
 lastIndexOf() | 从后向前搜索字符串  | str.indexOf("Hello") 
 match()       | 找到一个或多个正则表达式的匹配   | str.match("World")
 replace()     | 替换与正则表达式匹配的字符串     | str.replace(/Microsoft/g, "W3School")
 search()      | 检索与正则表达式匹配的值        |  str.search(/w3school/i)   i 忽略大小写
 slice()       | 提出字符串的片段，并在新的字符串中返回被提取的部分 | str.slice(6,11)
 split()       | 将字符串分割为字符串数组        | str.split(" ")
 toLowerCase() | 将字符串转换为小写             | str.toLowerCase()
 toUpperCase() | 将字符串转换为大写             | str. toUpperCase()
 substr()      | 从起始索引号提取字符串中指定数目的字符   | str.substr(3,7)
 substring()   | 提取字符串中两个指定的索引号之间的字符   | str.substring(3,7)
 link()        | 将字符串显示为链接  | str.link("http://www.w3school.com.cn")
 strike()      | 使用删除线来显示字符串          | str.strike() 
 big()         | 用大号字体显示字符串
 bold()        | 使用粗体显示字符串
 charAt()      | 返回在指定位置的字符  | str.charAt(3)
 charCodeAt()  | 返回在指定的位置的字符的 Unicode 编码
 concat()      | 连接字符串    | str1.concat(str2)
 fontcolor()   | 使用指定的颜色来显示字符串  | str.fontcolor("Red")
 fontsize()    | 使用指定的尺寸来显示字符串  | str.fontsize(16)
 
#### Date 对象
 创建对象： var myDate = new Date()
##### Date 对象方法
 属性           		|  描述
 ------        		|  ------
 Date()             | 返回当日的日期和时间
 getDate()     		| 从 Date 对象返回一个月中的某一天(1~31)
 getDay()      		| 从 Date 对象返回一周中的某一天(0~6)
 getMonth()         | 从 Date 对象返回月份（0~11）
 getFullYear        | 从 Date 对象以四位数字返回年份
 getHourse()        | 返回 Date 对象的小时（0~23）
 getMinutes()       | 返回 Date 对象的分钟（0~59）
 getSeconds()       | 返回 Date 对象的秒数（0~59）
 getMilliseconds()  | 返回 Date 对象的毫秒（0~999）
 getTime()          | 返回 1970 年 1 月 1 日至今的毫秒数
 parse()            | 返回 1970年1月1日午夜到指定日期（字符串）的毫秒数。
 setDate()          | 设置 Date 对象中月份（1~31）
 setMonth()         | 设置 Date 对象中的月份（0~11）
 setFullYear()      | 设置 Date 对象中的年份（四位数字）
 setHours()         | 设置 Date 对象中的小时（0~23）
 setMinutes()       | 设置 Date 对象的分钟（0~59）
 setSeconds()       | 设置 Date 对象的秒数（0~59）
 setMilliseconds()  | 设置 Date 对象的毫秒（0~999）
 setTime()          | 以毫秒设置 Date 对象
 
#### Math 对象
Math 不是对象的类，不需要通过new 来构造，直接调用即可
##### Math 对象属性 
 属性   |  描述      |    例子
 ------| -----      |  ------
 E     | 返回算术常量 e，即自然对数的底数（约等于2.718）。 | Math.E
 LN2   | 返回 2 的自然对数（约等于0.693）。        | Math.LN2
 LN10	 | 返回 10 的自然对数（约等于2.302）。       | Math.LN10
 LOG2E	 | 返回以 2 为底的 e 的对数（约等于 1.414）。 | Math.LOG2E
 LOG10E | 返回以 10 为底的 e 的对数（约等于0.434）。| Math.LOG10E
 PI	     | 返回圆周率（约等于3.14159）。            | Math.PI
 SQRT1_2 | 返回返回 2 的平方根的倒数（约等于 0.707）。| Math.SQRT1_2
 SQRT2	  | 返回 2 的平方根（约等于 1.414）。        | Math.SQRT2
 
##### Math 对象方法
 属性       |  描述 
 ------    | -----
 random()  |	返回 0 ~ 1 之间的随机数
 floor(x)	 | 对数进行下舍入
 round(x)  |	把数四舍五入为最接近的整数
 ceil(x)	 | 对数进行上舍入
 max(x,y)	 | 返回 x 和 y 中的最高值
 min(x,y)	 | 返回 x 和 y 中的最低值
 log(x)	 | 返回数的自然对数（底为e)
 exp(x)	 | 返回 e 的指数
 abs(x)	 | 返回数的绝对值
 pow(x,y)	 | 返回 x 的 y 次幂
 sqrt(x)	 | 返回数的平方根
 sin(x)	 | 返回数的正弦
 cos(x)	 | 返回数的余弦
 tan(x)	 | 返回角的正切
 
#### JavaScript 全局对象
全局属性和函数可用于所有内建的 JavaScript 对象
##### 顶层函数（全局属性）
 属性       |  描述 
 ------    | -----
 NaN       | 指示某个值是不是数字值
 undefined | 指示未定义的值
 infinity  | 代表正的无穷大的数值
 java      | 代表 java.* 包层级的一个 JavaPackage
 Packages	 | 根 JavaPackage 对象
 
##### 顶层函数（全局方法）
 属性          |  描述 
 ------       | -----
parseInt()    | 解析一个字符串并返回一个整数
parseFloat()  | 解析一个字符串并返回一个整数
Number()      | 把对象的值转换为数字
isNaN()       | 检查某个值是否是数字
String()      | 把对象的值转换为字符串
eval()        | 计算 JavaScript 字符串，并把它作为脚本代码来执行。
escape()      | 对字符串进行编码
unescape()    | 对由 escape() 编码的字符串进行解码
 
 


 


