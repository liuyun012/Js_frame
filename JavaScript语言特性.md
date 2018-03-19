一、JavaScript基本的语言特性

- 基本类型和引用类型
	1. 基本类型：string, number, boolean, null, undefined
	2. 引用类型：Function, Array, Object
	3. 访问方式：基本类型 -- 操作和保存在变量的实际的值；引用类型：值保存在内存中，js不允许直接访问内存，在操作的时候，操作的是对象的引用。
- 函数声明和函数表达式
`function`关键字用来在一个表达式定义一个函数，也可以使用`Function`构造函数和一个函数声明来定义函数。

```
// 方法一：函数声明
function foo() {}

// 方法二：函数表达式
var foo = function() {};
```
第三种自执行函数表达式，主要用于创建一个新的作用域，在此作用域内声明的变量不会和其他作用域内的变量冲突或混淆，大多是以匿名方式存在，且立即执行：

```
(function () {
	// var x = ...
})();
```
javascript存在变量声明被提升的机制，函数声明的方式会将这个函数变量提升到作用域的最前面，函数表达式的写法只会将var声明的变量提升，并先赋值为 `undefined`;

- JSON ：JSON.parse -- 将JSON字符串反序列化成对象； JSON.stringify -- 将对象序列化成JSON字符串。

```
// 这是JSON字符串
var foo = '{ "prop": "val"}';

// 这是对象字面量
var bar = { "prop": "val"};
```
- 原型及原型链
	- 原型：每一个JavaScript对象在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性
	- 构造函数: 当通过new来创建一个新对象时，JS底层将新对象的原型链指向了构造函数的原型对象，在新对象和函数对象之间建立了一条原型链，通过新对象可以访问到函数对象原型prototype中的方法和属性。 
	
	```
	function Person() {
	
	}
	var person = new Person();
	person.name = 'Kevin';
	console.log(person.name)  // Kevin
 	```
	- prototype属性：Object.prototype表示实例原型
	- `__proto__`: 每个JavaScript对象都具有的一个属性，该属性指向对象的原型。

	```
	function Person() {

	}
	var person = new Person();
	console.log(person.__proto__ === Person.prototype); // true
	```
	- constructor: 每个原型都有一个constructor属性指向关联的构造函数。
	
	```
	function Person() {

	}
	
	var person = new Person();
	console.log(person.__proto__ == Person.prototype) // true
	console.log(Person.prototype.constructor == Person) // true
	```
   - 原型链：由相互关联的原型组成的链状结构就是原型链。
   - 每一个对象都会从原型"继承"属性的本质：JavaScript只是在两个对象之间创建一个关联，这样，一个对象就可以通过委托访问另一个对象的属性和函数。
- 变量对象
	- 变量数据是与执行上下文相关的数据作用域，存储了在上下文中定义的变量和函数声明。
	- 全局对象：是预定义的对象，作为JavaScript的全局函数和全局属性的占位符。
	- 在函数上下文中，变量对象包括：函数的所有形参，函数声明，变量声明。 
	```
	alert(x);      // function
	var x = 10;
	alert(x);      // 10
	x = 20;
	function x() {};
	alert(x);      // 20
	``` 
- this
	- 在一个函数上下文中，this由调用者提供，由调用函数的方式决定。如果调用括号()的左边是引用类型的值，this将设为引用类型值的 base对象。当this值为null是，其值会被隐士转换为全局对象。
	
	```
	(function () {
	  alert(this); // null => global
	})();
	```
	- 局部变量，内部函数，形式参数存储在给定函数的激活对象中
	
	```
	function foo() {
	   function bar() {
	      alert(this); // global 全局对象
	   }
	   bar(); // the same as AO.bar()
	}
	```
	
- 闭包
	- 定义：能够读取其他函数内部变量的函数或定义在一个函数内部的函数。
	- 自由变量：指在函数中使用，但既不是函数参数也不是函数的局部变量的变量。
	- 用途： 一个是可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中。
	- 使用注意点：
	
		1. 由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。
		2. 闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值。

- 斐波那契数列函数实现
	
	```
	function fib(max) {
		var t,a=0,b=1,arr=[0, 1];
		while (arr.length < max) {
			[a, b] = [b, a+b];
			arr.push(b);
		}
		return arr;
	}
	// 测试：
	fib(5);  // [0, 1, 1, 2, 3]
	fib(10);  // [0,1,1,2,3,5,8,13,21,34]
	```

二、Web安全问题

- XSS攻击：对Web页面注入脚本，使用JavaScript窃取用户信息，诱导用户操作。
- CSRF攻击：伪造用户请求向网站发起恶意请求。
- 钓鱼攻击：利用网站的跳转链接或者图片制造钓鱼陷阱。
- HTTP参数污染：利用对参数格式验证的不完善，对服务器进行参数注入攻击。
- 远程代码执行：用户通过浏览器提交执行命令，由于服务器端没有针对执行函数做过滤，导致在没有指定绝对的情况下就执行命令。

三、Web安全解决方案

- 提供各种过滤模板函数，防止钓鱼或xss攻击；
- 添加常见的Web安全头的支持；
- CSRF的防御方案；
- 定制白名单，用于安全跳转和url过滤；
- 各种模板相关的工具函数做预处理； 

四、常规知识点

- SVN和Git的区别：
	- SVN优点：集中式服务器，已于管理，安全性高，管理方便。代码一致性高，适合开发人数不多的项目开发。
	- Svn缺点：服务器压力太大，数据库容量暴增。离线无法工作。
	- Git优点：分布式开发，公共服务器压力和数据量都不大，速度快，灵活，容易解决冲突，可离线工作。
	- Git缺点：学习周期相对比较长，代码保密性差，库克隆就可以完全公开所有代码和版本信息。  
- 栈内存和堆内存的区别：基本类型一般保存在栈内存，引用类型指保存在堆内存的对象。
- 从输入URL到页面加载的过程：
	
	1. 在浏览器地址栏中输入url
	2. 浏览器先查看浏览器缓存-系统缓存-路由器缓存，如果缓存中有，会直接在屏幕中显示页面内容。若没有，则跳到第三步操作。
	3. 需要域名解析(DNS解析)，解析获取相应的IP地址；
	4. 浏览器根据IP地址与服务器建立socket连接；(三次握手连接，TCP协议)
	5. 浏览器与服务器通信：浏览器请求，服务器处理请求；
	6. 说明：浏览器根据URL 内容生成 HTTP请求，请求中包含请求文件的位置、请求文件的方式等；服务器接到请求后，根据HTTP请求中的内容来决定如何获取相应的HTML文件；服务器将得到的HTMLwenj发送给浏览器；在浏览器还没有完全接收HTML文件时便开始渲染、显示网页；在执行HTML中代码时，根据需要，浏览器会继续请求网页、CSS、JavaScript等文件。
	7. 浏览器接收到HTTP响应
	8. 读取页面内容，浏览器渲染，解析html源码
	9. 生成Dom树，解析css样式，js交互 
	10. 浏览器与服务器断开连接  
- 页面优化方案

	1. 减少http请求，合理设置HTTP缓存；
	2. 使用浏览器缓存，在http请求头设置 cache-control 和 expires属性，可设定浏览器缓存。
	3. 启用压缩，在服务器端对文件进行压缩，在浏览器端对文件解压缩，减少通信传输的数据量。
	4. CSS Sprites，合并CSS图片，减少请求，或者使用svg字体图标；
	5. 图片懒加载，优先加载首屏图片，剩余图片滚动是再加载；
	6. CSS文件放在页面最上部，JavaScript文件放在页面最下面；
	7. 减少cookie传输，太大的cookie会严重影响数据传输，考虑静态资源使用独立域名访问。
	8. JavaScript代码优化：尽量少的操作DOM,减少页面的重排和重绘；减少作用域链的查找，优化数据大操作，减少字符串的拼接
	9. CSS选择符优化：减少ID和元素类名的使用，减少类名的嵌套层级
	10. 使用CDN加速缓存
	11. 反向代理

- 跨域解决方案
	- 定义：一个域下的文档或脚本试图去请求另一个域下的资源，狭义上指由浏览器同源策略限制的一类请求场景。
	- 同源策略/SOP：一种约定，浏览器核心和最基本的安全功能，所谓同源是指"协议+域名+端口"三者相同。即便两个不同的域名指向同一个ip地址，也非同源。
	- 同源限制的行为：1. Cookie、LocalStorage 和 IndexDB 无法获取。2. DOM 和 JS 对象无法获得。 3. AJAX 请求不能发送。
	- 常见的解决方案：1、通过 jsonp 跨域；2、iframe跨域；3、postMessage跨域；4、跨域资源共享(CORS); 5、nginx代理跨域；6、nodejs中间件代理跨域；7、WebSocket协议跨域。
	
	1. 通过jsonp跨域方案
		- 通常为了减轻web服务器的负载，我们把js、css、img等静态资源分离到另一台独立域名的服务器上面。在html页面中再通过相应的标签从不同域名下加载静态资源，被浏览器允许。故可通过动态创建script，再请求一个带参网址实现跨域通信。
		
		```
		// 通过原生实现
		<script>
			var script = document.createElement('script');
			script.type = 'text/javascript';
			
			// 传参并指定回调执行函数为 onBack
			script.src = 'http://www.domain2.com:8080/login?user=admin&callback=onBack';
			document.head.appendChild(script);
			
			// 回调执行函数
			function onBack(res) {
				alert(JSON.stringify(res));
			}
		</script>
		```
		缺点：只能实现 get 一种请求。
	2. postMessage跨域
		- 用法：postMessage(data, origin),接收两个参数：data -- 任意基本类型或可复制对象。origin: 协议+主机+端口号，也可设置为"*"。同源可设置为"/";
		- 解决问题：a. 页面和其打开的新窗口的数据传递；b.多窗口之间消息传递；c.页面与嵌套的iframe消息传递。d.上面三个场景的跨数据传递。
	3. 跨资源共享(CORS)
		普通跨域请求：只服务端设置Access-Control-Allow-Origin即可，前端无须设置，若要带cookie请求，前后端都需要设置。但由于同源策略的限制，所读取的cookie为跨域请求接口所在域的cookie,而非当前页，需做代理设置。
		
	4. nginx代理跨域
		- nginx配置解决iconfont跨域
			
			```
			location / {
				add_header Access-Control-Allow-Origin *;
			}
			```
		- nginx反向代理接口跨域
			1. 跨域原理：同源策略是浏览器的安全策略，不是HTTP协议的一部分，服务端调用HTTP接口只是使用HTTP协议，不会执行JS脚本，不需要同源策略，也就不存在跨域问题。
			2. 实现思路：通过nginx配置一个代理服务器(域名相同，端口不同)做跳板，反向代理访问domain2接口，并顺便修改cookie中的domain信息，方便当前域cookie写入，实现跨域登录。
			nginx的具体配置
			```
			#proxy服务器
			server {
			    listen       81;
			    server_name  www.domain1.com;
			
			    location / {
			        proxy_pass   http://www.domain2.com:8080;  #反向代理
			        proxy_cookie_domain www.domain2.com www.domain1.com; #修改cookie里域名
			        index  index.html index.htm;
			
			        # 当用webpack-dev-server等中间件代理接口访问nignx时，此时无浏览器参与，故没有同源限制，下面的跨域配置可不启用
			        add_header Access-Control-Allow-Origin http://www.domain1.com;  #当前端只跨域不带cookie时，可为*
			        add_header Access-Control-Allow-Credentials true;
			    }
			}
			```
			前端代码实例：
			
			```
			var xhr = new XMLHttpRequest();

			// 前端开关：浏览器是否读写cookie
			xhr.withCredentials = true;
			
			// 访问nginx中的代理服务器
			xhr.open('get', 'http://www.domain1.com:81/?user=admin', true);
			xhr.send();
			```
	5. WebSocket协议跨域：HTML5新的协议，实现了浏览器与服务器全双工通信，同时允许跨域通讯。
	
	```
	// 前端代码实现
	<div>user input：<input type="text"></div>
	<script src="./socket.io.js"></script>
	<script>
	var socket = io('http://www.domain2.com:8080');
	
	// 连接成功处理
	socket.on('connect', function() {
	    // 监听服务端消息
	    socket.on('message', function(msg) {
	        console.log('data from server: ---> ' + msg); 
	    });
	
	    // 监听服务端关闭
	    socket.on('disconnect', function() { 
	        console.log('Server socket has closed.'); 
	    });
	});
	
	document.getElementsByTagName('input')[0].onblur = function() {
	    socket.send(this.value);
	};
	</script>
	```
		


















