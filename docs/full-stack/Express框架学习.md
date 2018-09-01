# Express开发框架学习汇总

基于 Node.js 平台，快速、开放、极简的 web 开发框架。它提供一系列强大的特性，帮助你创建各种 Web 和移动设备应用。

## 参考资料网址

- [Express中文官网](http://www.expressjs.com.cn/)

## Express入门教程

- 安装
	
假定已安装 [Node.js](https://nodejs.org/zh-cn/)，为你的应用创建一个项目目录，命令将要求你输入几个参数，直接按“回车”键接受默认设置。

	```html
	$ mkdir myapp
	$ cd myapp
	$ npm init
	$ npm install express --save
	```		
- Hello World实例 
	
1. 进入myapp目录，创建一个为 app.js 的文件，将下面的代码复制进去：
	
	```html
	var express = require('express');
	var app = express();

	app.get('/', function (req, res) {
		res.send('Hello World!');
	});

	var server = app.listen(3000, function () {
		var host = server.address().address;
		var port = server.address().port;
		console.log('Example app listening at http://%s:%s', host, port);
	});
	```
	
2. 在终端通过如下命令启动此应用
		
	```
	$ node app.js
	```
	
3. 然后在浏览器中打开 `http://localhost:3000/` 并查看输出结果。

- Express 应用生成器

	```html
	$ npm install express-generator -g
	$ express -h    // -h 选项可列出所有可用的命令行选项
	$ express myapp
	$ cd myapp 
	$ npm install
	$ DEBUG=myapp npm start   // 启动这个应用（MacOS 或 Linux 平台）
	```
	在浏览器中打开 http://localhost:3000/ 网址就可以看到这个应用了

- 数据库集成 -- MySql为例
	
1. 安装mysql
		
	```html
	$ npm install mysql
	```
	
2. 数据库连接代码示例
		
	```html
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : 'root'
	});
	
	connection.connect();
	
	connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
		if (err) throw err;
		console.log('The solution is: ', rows[0].solution);
	});
	
	connection.end();
	```