# JavaScript 常见问题汇总
平常项目中遇到的javascript问题及解决方案汇总整理 by Qzx
## JavaScript问题解决及说明相关网址
- 将对象序列化的方法：
	- 1、 jQuery的 $.param(obj) 序列化对象
	- 2、 原生javascript方法，需要手动遍历obj
	
		```
		var arr = [];
		for(var key in obj){
		    arr.push(key + '=' + obj[key]);
		}
		console.log(arr.join('&'));
		``` 

## JavaScript项目中常见操作整理汇总
- [19 个 JavaScript 常用的简写技术](https://juejin.im/post/5948db9661ff4b006c061b2b)
	- 三元操作符  var a = b < 10 ? '0' + b : b;
	- 短路求值简写方式 var a = b || [];
	- 声明变量简写方法 let x, y, z=3;
	- if存在条件简写 if (true) { }   if (!true) { }
	- javaScript 循环简写 for (let i in arr)  [2,5,8].forEach(function(data, key){ console.log(data)  })
	- 十进制指数  1e0 === 1;  1e1 === 10; 1e5 === 100000;
- 字符串操作

- ES6 对象额合并方法 ：Object.assign(source1, source2);
  {...source1, ...source2}


