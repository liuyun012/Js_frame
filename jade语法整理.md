# Jade 语法整理
Jade 是HTML预处理语言，省略了大量的尖括号，简洁，高效

## Doctype
```
	doctype html
```
生成的HTML：

```
<!DOCTYPE html>
```
其他常用类型还有： `doctype xml`, `doctype transitional`, `doctype strict`

## 标签
标签是 HTML 的核心元素，Jade对缩进敏感，可以根据缩进划分层次结构，省略一些界定符号（大括号、尖括号......）。

```
ul 
	li Item A
	li Iten B
	li Item C
```
生成的HTML：

```
<ul>
	<li>Item A</li>
	<li>Item B</li>
	<li>Item C</li>
</ul>
```
> 提示：一定要保持一致的缩进格式，建议统一将`tab`键输出为空格，并采用4个空格为标准缩进。

## 缩进
Jade 支持两种注释：单行注释和多行注释，每种注释支持两种模式：输出到源文件和不输出到源文件，差别在于多了一个 `-`。
创建一个单行输出注释和单行不输出注释:

```
// 这个单行注释会输出到编译后的文件中
p 单行输出注释
//- 这个单行注释不会输出到编译后的文件中
p 单行不输出注释
```
生成的HTML:

```
<!-- 这个单行注释会输出到编译后的文件中-->
<p>单行输出注释</p>
<p>单行不输出注释</p>
```
相比起单行注释，多行注释的内容要在注释符号的下一行，以相同的缩进来编写。

```
//
	这个多行注释会输出到编译后的文件中
	这个多行注释会输出到编译后的文件中
p 多行输出注释
//- 
	这个多行注释不会输出到编译后的文件中
	这个多行注释不会输出到编译后的文件中
p 多行不输出注释
```
生成的HTML: 

```
<!-- 
这个多行注释会输出到编译后的文件中
这个多行注释会输出到编译后的文件中
-->
<p>多行输出注释</p> 
<p>多行不输出注释</p> 
```
## 属性
在Jade 中填写属性，基本上和HTML保持一致：

```
input(type='checkout', checked)
input(
	type='checkbox'
	name='agreement'
	checked
)
```
生成的HTML:

```
<input type="checkbox" checked>
<input type="checkbox" name="agreement" checked>
```
对于频繁使用的类名和ID名，Jade提供了两个字面量：类名字面量和ID字面量，若不在字面量前指定标签名，则默认使用 `div`

```
.link
a.link
#button
a#button
```
生成的HTML:

```
<div class="link"></div>
<a class="link"></a>
<div id="button"></div>
<a id="button"></a>
```
另一个常被修改的属性是 `style`, 为了方便修改该属性，Jade接收一个类似JavaScript对象类型的参数：

```
a(style={color: 'red', background: 'green'})
```
生成的HTML：

```
<a style="color:red;background:green"></a>
```
为方便的添加其他自定义属性，Jade特意增加一个语法格式 `&attributes` :

```
- var attributes = {'data-foo': 'bar'};
div#foo(data-bar="foo")&attributes(attributes)
```
生成的HTML:

```
<div id="foo" data-bar="foo" data-foo="bar"></div>
```
另外，还可以根据条件设置属性的语法形式：

```
- var authenticated= true
body(class=authenticated ? 'authed' : 'anon')
- var currentUrl = '/about'
a(class={active: currentUrl === '/'} href='/') Home
a(class={active: currentUrl === '/about'} href='/about') About 
```
生成的HTML:

```
<body class="authed"></body>
<a href="/">Home</a><a href="/about" class="active"></a>
```
## 文本
Jade支持三种文本输出方式：单行文本、管道文本和多行文本：

```
// 单行文本内容直接跟在标签名后面
p 这里是单行文本内容
// 管道文本使用管道符
p 
	| 这是一行管道文本，行数无限制
	| 这是一行管道文本，行数无限制
	| 这是一行管道文本，行数无限制
	| ......
// 多行文本需要在标签名后添加点号
p. 
	这是多行文本，注意缩进
	这是多行文本，注意缩进
	这是多行文本，注意缩进
	......
```
生成的HTML: 

```
<!-- 单行文本内容直接跟在标签名后面 -->
<p>这里是单行文本内容</p>
<!-- 管道文本使用管道符 -->
<p>
	这里是一行管道文本，行数无限制
	这里是一行管道文本，行数无限制
	这里是一行管道文本，行数无限制
	......
</p>
<!-- 多行文本需要在标签名后添加点号 -->
<p>
	这里是一行管道文本，行数无限制
	这里是一行管道文本，行数无限制
	这里是一行管道文本，行数无限制
	......
</p>
```
## 代码嵌入
将JavaScript嵌入到Jade中，共3种方法：<br>
① 使用 `-`,代码中的特殊字符不会被转义：

```
-for (var i=0; i<3; i++)
	li <a></a>
```
生成的HTML:

```
<li><a></a></li>
<li><a></a></li>
<li><a></a></li>
```
② 使用 `=`，代码中的特殊字符将会转义：

```
p
	= 'This code is <escaped>!'
```
生成的HTML:

```
<p>this is &lt;escaped;&gt;!</p>
```
③ 使用 `!=`，代码中的特殊字符不会被转义：

```
p
	!= 'This code is <escaped>!'
```
生成的HTML:

```
<p>this is <escaped>!</p>
```
## 插值语法
Jade 提供了字符串插值和标签插值，其中字符串插值要考虑到安全性问题，所以又分成转义和不转义两种情况：

```
// 转义字符串插值 #{}
- var theGreat = "<span>escape!</span>";
p This will be safe: #{theGreat}
// 不转义字符串插值 !{}
- var theGreat = "<span>escape!</span>";
p This will be safe: !{theGreat}
// 标签插值
p #[a(href="jade-lang.com") Jade]
```
生成的HTML:

```
<!-- 转义字符串插值 #{} -->
<p>This will be safe: &lt;span&gt;escape!&lt;/span&gt;</p>
<!-- 不转义字符串插值 !{} -->
<p>This will be safe: <span>escape!</span></p>
<!-- 标签插值 -->
<p><a href="jade-lang.com"></a></p>
```
## 条件语句
最基本的条件语句：`if ... else if ... else`:

```
- var user = { description: 'foo bar baz' }
- var authorised = false
#user 
	if user.description
		h2 Description
		p.description=  user.description
	else if authorised
		h2 Description
		p.description.
			User has no description, 
			why not add one...
	else 
		h1 Description
		p.description User has no description
```
生成的HTML:

```
<div id="user">
	<h2>Description</h2>
	<p class="description">foo bar baz</p>
</div>
```
此外，Jade还提供了一个 `unless`条件语句，它会判断`条件是否不符合要求`，若不符合，则执行下一步。

```
- var con = false
unless con
	p Hellp, World
```
生成的HTML:

```
<p>Hello, World</p>
```
## 分支语句
Jade中提供了类似`switch`语法 -- `case`:

```
- var friends = 10 
case friends 
	when 0 
		p you have no friends 
	when 1 
		p you have a friend 
	default 
		p you have #{friends} friends
```
生成的HTML：

```
<p>you have 10 friends</p>
```
注意：在Jade中并没有提供类似`break` 的语法，对于所有的条件默认只有一种输出结果，如果没有符合条件的就输出`defualt` 中的内容，但有一种特例：

```
- var friends = 0 
case friends 
	when 0 
	when 1 
	default p you have #{friends} friends
```
生成的HTML:

```
<p>you have very 0 friends</p>
```
上面的示例可以看出，当没有可输出内容时，就会执行向下查找可执行语句，一直到 `default`












