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

## 遍历语句
Jade使用 `each` 对数组和对象遍历，用法与JavaScript大同小异。

```
// 遍历数组
ul 
	each val, index in ['zero', 'one', 'two']
		li= index + ': ' + val

// 遍历对象
ul 
	each val, index in {1:'one',2:'two',3:'three'}
		li= index + ': ' + val
```
生成的 HTML: 

```
<!-- 遍历数组 -->
<ul>
	<li>0: zero</li>
	<li>1: one</li>
	<li>2: two</li>
</ul>
<!-- 遍历对象 -->
<ul>
	<li>1: one</li>
	<li>2: two</li>
	<li>3: three</li>
</ul>
```
## 循环语句
Jade 使用 `while` 实现循环，用法与JavaScript相似：

```
- var n = 0;
ul 
	while n < 4
		li= n++
```
生成的 HTML:

```
<ul>
	<li>0</li>
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>
```
## mixins
在 Scss 和 Jade 中，混合宏（mixins）都是举足轻重的语法，混合宏具有复用、解耦、可读、可扩、可维护等优势。创建混合宏需要使用 `mixin` 标识符，创建混合宏实例时，需要使用 `+` 标识符：

```
//- Declaration
mixin list
	ul
		li foo
		li bar
		li baz
//- Use
+list
+list
```
生成的 HTML:

```
<ul> 
	<li>foo</li> 
	<li>bar</li> 
	<li>baz</li> 
</ul> 
<ul> 
	<li>foo</li> 
	<li>bar</li> 
	<li>baz</li> 
</ul> 
```
上面是最基本的混合宏，给它传递参数，才能让它更有通用性：

```
mixin pet(name)
	li.pet= name
ul
	+pet('cat')
	+pet('dog')
	+pet('pig')
```
生成的 HTML:

```
<ul>
	<li class="pet">cat</li>
	<li class="pet">dog</li>
	<li class="pet">pig</li>
</ul>
```
此外，还可以使用 `...` 标识符表示不定数量的参数：

```
mixin list(id, ...items)
	ul(id=id)
		each item in items
			li= item
+list('my-list', 1, 2, 3, 4)
```
生成的 HTML:

```
<ul id="my-list"> 
	<li>1</li> 
	<li>2</li> 
	<li>3</li> 
	<li>4</li> 
</ul>
```
有时候，我们需要替换混合宏的某个部分，就可以使用 `block` 标识符来占位：

```
mixin article(title)
	.article
		.article-wrapper
			h1= title
			if block
				block
			else 
				p No content provided
+article('Hello world')

+article('Hello world')
	p This is my
	p Amazing article
```
生成的 HTML:

```
<div class="article">
	<div class="article-wrapper">
		<h1>Hello world</h1>
		<p>No content provided</p>
	</div>
</div>
<div class="article">
	<div class="article-wrapper">
		<h1>Hello world</h1>
		<p>This is my</p>
		<p>Amazing article</p>
	</div>
</div>
```
有关属性的混合宏，其中一种是：

```
mixin link(href, name) 
	a(href=href)&attributes(attributes)= name
	
+link('/foo', 'foo')(class="btn")
```
生成的 HTML:

```
<a href="/foo" class="btn">foo</a>
```
上面混合宏中并没有声明 `attributes`，是因为 Jade 已经隐式为其引用了所有传递给 `&attributes` 的参数
## includes
实现高度复用的一种方式是将代码片段保存到不同文件中，然后在需要的地方导入这些片段，为此，Jade 提供了 `include` 指令。下面是一个 `index` 页面：

```
//- index.jade
doctype html
html
	include ./includes/head.jade
	body
		h1 My Site
		p Welcome to my super lame site.
		include ./incliudes/foot.jade
```
`head` 代码片段：

```
//- includes/head.jade
head
	title My Site
	script(src='/javascripts/jquery.js')
	script(src='/javsscripts/app.js')
```
`footer` 代码片段：

```
//- includes/foot.jade
#footer
	p Copyright (c) footer
```
生成的 HTML:

```
<!doctype html>
<html>
	<head>
		<title>My Site</title>
		<script src='/javascripts/jquery.js'></script>
		<script src='/javsscripts/app.js'></script>
	</head>
	<body>
		<h1>My Site</h1>
		<p>Welcome to my super lame site.</p>
		<div id="footer">
			<p>Copyright (c) footer</p>
		</div>
	</body>
</html>
```
## 继承
Jade 中使用 `extends` 来继承代码片段，与 `include` 本分地引用代码段不同，继承可以修改代码片段。
首先，在 `layout` 页面使用 `block` 标识符，可以设置一个可修改的代码片段，紧跟之后的是该代码片段的名字：

```
//- layout.jade
doctype html 
html 
	head
		block title
			title Default title
	body
		block content
```
然后，在 `index` 页面继承 `layout`, 并可以根据代码片段的名字修改相关代码：

```
//- index.jade
extends ./layout.jade

block title
	title Article Title

block content
	h1 My Article
```
生成的 HTML:

```
<!doctype html> 
<html> 
	<head> 
		<title>Article Title</title> 
	</head> 
	<body> 
	<h1>My Article</h1> 
	</body> 
</html>
```
上面的继承方式，会抹除原来代码片段的部分，如果想要追加代码片段，可以使用 `append` 和 `prepend` 指令。 `append` 用于在原来代码片段之后追加，`prepend` 用于在原有代码之前追加，一个初始页面：

```
//- layout.jade
doctype html 
html 
	head
		title Layout
	body
		block content
			p Hello
```
生成的 HTML:

```
<html> 
	<head> 
		<script src="/vendor/jquery.js"></script> 
		<script src="/vendor/caustic.js"></script> 
	</head>
	<body> 
		<p>Hello</p> 
		<p>World</p> 
	</body> 
</html>
```
使用 `prepend` :

```
extend layout

block prepend content
	p World
```
生成的 HTML：

```
<html> 
	<head> 
		<script src="/vendor/jquery.js"></script> 
		<script src="/vendor/caustic.js"></script> 
	</head>
	<body> 
		<p>World</p> 
		<p>Hello</p> 
	</body> 
</html>
```









