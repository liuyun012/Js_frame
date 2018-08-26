# JavaScript学习知识积累
记录学习JavaScript学习过程中的知识点 -- by Qzx
## 参考网址
- [JavaScript教程 -- 廖雪峰](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001434499190108eec0bdf14e704a09935cd112e501e31a000)


## 基础语法
- Number类型：
	
	```
	NaN  // 表示Not a Number, 当无法计算结果时用 NaN表示
	Infinity  // 表示无限大，当数值超过了JavaScript的Number所能表示的最大值时，显示
	```
	
	唯一能判断`NaN`的方法是通过`isNaN()`函数：
	
	```
	isNaN(NaN);  // true
	```
	浮点数的比较问题，浮点数的运算过程中会产生误差，要比较两个浮点数是否相等，只能计算它们之差的绝对值，看是否小于某个阈值：
	
	```
	Math.abs(1/3 - (1-2/3) < 0.0000001;  // true
	```
- 字符串
	- 转义字符的使用
	JavaScript的字符串就是用`''` `""`括起来的字符表示。如果`'`本身也是一个字符，则用`""`括起来，若既包含`'`又包含`"`，则用转义字符'\'来标识。
	
	```
	"I'm OK";   // 包含字符`I`, `'`, `m`,``, 空格 ,`O`,`K`这6个字符
	'I\'m \"OK\"!';   // 既包含 ' 又包含 "
	```
	- 把一个字符串全部变为大写：`toUpperCase()`
	
	```
	var s = 'Hello';
	s.toUpperCase();  // 返回'HELLO'
	```
	- 把一个字符串全部变小写： `toLowerCase`
	- 搜索指定字符串出现的位置：`indexOf()`
	
	```
	var s = 'Hello, world';
	s.indexOf('world');  // 返回7
	s.indexOf('World');  // 没有找到指定的子串，返回 -1
	```
	- 返回指定索引区间的子串： `substring()`
	
	```
	var s = 'hello, world';
	s.substring(0, 5); // 从索引0开始到5(不包括5)，返回 'hello'
	s.substring(7);    // 从索引7开始到结束，返回'world'
	```
- 数组
	- 数组的length: 直接给`Array`的`length`赋一个新的值会导致`Array`大小的变化
	- `indexOf()`：搜索一个指定的元素的位置
	- `slice()` : 截取`Array`的部分元素，然后返回一个新的`Array`
	- `push() 和 pop()`: `push`是向数组的末尾添加若干元素，`pop`则把数组的最后一个元素删除掉，返回被删掉的元素。
	- `unshift() 和 shift()`: `unshift`是向头部添加若干元素，`shift`则把第一个元素删掉。
	- `sort()`: 对当前的`Array`进行排序，会直接修改当前`Array`的元素位置
	- `reverse()`: 把整个数组的元素反转
	- `splice()`: 分割数组，从指定的索引开始删除若干元素，再从该位置添加若干元素
	
	```
	var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
	// 从索引2开始删除3个元素,然后再添加两个元素:
	arr.splice(2, 3, 'Google', 'Facebook'); // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
	arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
	// 只删除,不添加:
	arr.splice(2, 2); // ['Google', 'Facebook']
	arr; // ['Microsoft', 'Apple', 'Oracle']
	// 只添加,不删除:
	arr.splice(2, 0, 'Google', 'Facebook'); // 返回[],因为没有删除任何元素
	arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
	```
	- `concat()`: 把当前的`Array`和另一个`Array`连接起来，并返回一个新的`Array`,当前数组没有发生改变
	- `join()`: 把当前数组的每个元素都用指定的字符串连接起来，返回连接后的字符串
	- 多维数组
- 对象
	- 对象时一种无序的集合数据类型，由若干键值对组成 ，若属性名包含特殊字符时，必须用`''`括起来。
	- 对象属性的添加和删除
	
	```
	var xiaoming = {
	    name: '小明'
	};
	xiaoming.age = 18; // 新增一个age属性
	delete xiaoming.age; // 删除age属性
	```
	- 检测对象是否拥有某一属性，可以用 `in` 操作符: 'name' in xiaoming; // true
	注意：`in`判断一个属性的存在，这个属性不一定是自己的，有可能是继承的
	- 判断一个属性是否是自身拥有的，而不是继承得到的，可以使用`hasOwnProperty()`方法
	
	```
	var xiaoming = {
	    name: '小明'
	};
	xiaoming.hasOwnProperty('name'); // true
	xiaoming.hasOwnProperty('toString'); // false
	```
	- JavaScript把`null`,`undefined`,`0`,`NaN`和空字符`''`视为`false`，其他的一概视为`true`;
- Map和Set: Es6规范引入新的数据类型`Map`，`Set`
 - Map结构提供了"值-值"的对应，是一种更完善的Hash结构实现

	```
	const m = new Map();
	const o = {p: 'Hello World'};
	
	m.set(o, 'content')
	m.get(o)  // "content"
	
	m.has(o) // true
	m.delete(o) // true
	m.has(o) // false
	
	const map = new Map([
	  ['name', '张三'],
	  ['title', 'Author']
	]);
	
	map.size // 2
	map.has('name') // true
	map.get('name') // "张三"
	map.has('title') // true
	map.get('title') // "Author"
	```
	- Map实例的属性和操作方法：`size`,`set(key, value)`,`get(key)`,`has(key)`,`delete(key)`,`clear()`
	- Set结构类似数组，但成员的值是唯一的，没有重复
		
		```
		const s = new Set();
		[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
		
		for (let i of s) {
		  console.log(i);  // 2 3 5 4
		}
		
		// 数组去重的方法
		[...new Set(array)]
		```
	- Set实例的属性和方法：`size`, `add(value)`, `delete(value)`, `has(value)`, `clear()`

- 函数：一种代码抽象的方式
	- arguments: 指向当前函数的调用者传入的所有参数
	- 变量作用域与变量提升
	- 命名空间 : 将所有变量和函数全部绑定到一个全局变量中，可以减少命名冲突
	- 解构赋值：
	- 方法：在一个对象中绑定函数，称为这个对象的方法
		- this的指向问题：1. 以对象的方法调用，则该函数的this指向被调用的对象，单独调用函数，则该函数的this指向全局对象 ，也就是window。
		- 控制`this`的指向问题：apply()方法传入两个参数，一个作为函数上下文的对象，另一个作为函数参数所组成数组； call()方法也传入参数，一个作为函数上下文的对象，后面传入的是一个参数列表。bind()方法也接收两部分参数，第一个参数是作为函数上下文的对象，第二部分参数是个列表，可以接收多个参数，但bind的方法不会立即执行，而是返回一个改变了上下文this后的函数，原函数中的this并没有被改变。
	- 高阶函数：一个函数接收另一个函数作为参数，这种函数被称之为高阶函数。
	
	```
	// 一个简单的高阶函数
	function add(x,y,f) {
		return f(x) + f(y);
	}
	```
		- map的使用：  