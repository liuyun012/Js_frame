# 原生JavaScript DOM操作汇总
回归最初，熟练掌握原生DOM的操作 by Qzx
## 简介
通过html dom 可以访问html文档的所有元素，当网页被加载时，浏览器会创建页面的文档对象模型（Document Object Model）。通过可编程的对象模型，JavaScript 获得了足够的能力来创建动态的HTML。

 - JavaScript 能够改变页面中的所有 HTML 元素
 - JavaScript 能够改变页面中所有 HTML 属性
 - JavaScript 能够改变页面中所有 CSS 样式
 - JavaScript 能够对页面中的所有事件作出反应
 
参考网址：

- [HTML DOM Element 属性和方法](http://www.w3school.com.cn/jsref/dom_obj_all.asp)
- [HTML DOM Event 对象事件](http://www.w3school.com.cn/jsref/dom_obj_event.asp)


## 1. 元素查找与获取
```
通过Id查找: document.getElementById("idName");
通过class类名查找: document.getElementByClassName("className");
通过标签名查找: document.getElementsByTagName("tagName");
通过name属性查找: document.getElementsByName();
```
## 2. 修改HTML元素的内容
```
改变html输出流: document.write();
改变html内容: document.getElementById("idName").innerHTML="文本内容";
改变html属性: document.getElementById("idName").attribute="new value";
	    例如: document.getElementById("idName").src = 'location.png';
改变html元素样式: document.getElementById("idName").style.property=new style;
	    例如: document.getElementById("idName").style.color="red";	
```

## 3. 添加和删除节点（HTML元素）
```
var para = document.createElement("p");
var node = document.createTextNode("这是新段落");
para.appendChild(node);
var element = document.getElementById("div1");
element.appendChild(para);
```
添加步骤：

1. 创建新的 `<p>` 元素
2. 创建文本节点
3. 向已有的元素追加新元素

## 4. 常用的dom对象方法(documnet.)
方法                      |  描述   
-----                    |  ------
getElementById()	         | 返回带有指定 ID 的元素。
getElementsByTagName()	  | 返回包含带有指定标签名称的所有元素的节点列表（集合/节点数组）。
getElementsByClassName() | 返回包含带有指定类名的所有元素的节点列表。
appendChild()	            | 把新的子节点添加到指定节点。
removeChild()	            | 删除子节点。
replaceChild()	         | 替换子节点。
insertBefore()	         | 在指定的子节点前面插入新的子节点。
createAttribute()	      | 创建属性节点。
createElement()	         | 创建元素节点。
createTextNode()	         | 创建文本节点。
getAttribute()	         | 返回指定的属性值。
setAttribute()	         | 把指定属性设置或修改为指定的值。

## 5. html元素的属性和方法(element对象表示元素)

方法                      |  描述   
------                   |  ------
element.id               | 设置或者返回元素的 id 属性  
element.className        | 设置或者返回元素的 class 属性  
element.style            | 设置或返回元素的 style 属性
element.title            | 设置或者返回元素的 title 属性
element.innerHTML        | 设置或返回元素的内容
element.tagName          | 返回元素的标签名
element.lastChiled       | 返回元素的最后一个子元素
element.nodeValue        | 设置或返回元素的值
element.nodeName         | 返回元素的名称
element.nodeType         | 返回元素的节点类型
element.toString()       | 把元素转为字符串
element.textContent      | 设置或者返回节点及其后代的内容
element.parentNode       | 返回元素的父节点
element.appendChild()    | 向元素添加新的子节点，作为最后一个子节点
element.cloneNode()      | 克隆元素
element.getAttribute()   | 返回元素节点的指定属性值
element.getAttributeNode() | 返回指定的属性节点
element.removeAttribute()  | 从元素中移除指定属性
element.removeAttributeNode()  | 移除指定的属性节点，并返回被移除的节点
element.hasAttribute()   | 如果元素拥有指定属性，则返回true,否则返回false
element.hasAttributes()  | 如果元素拥有属性，则返回true,否则返回false
element.hasChildNodes()  | 如果元素拥有子节点，则返回true,否则返回false
element.clientWidth      | 返回元素的可见宽度
element.clientHeight     | 返回元素的可见高度
element.offsetWidth      | 返回元素的宽度
element.offsetHeight     | 返回元素的高度
element.offsetLeft       | 返回元素的水平偏移位置
element.offsetTop        | 返回元素的垂直偏移位置
element.offsetParent     | 返回元素的偏移容器
element.scrollWidth      | 返回元素的整体宽度
element.scrollHeight     | 返回元素的整体高度
element.scrollLeft       | 返回元素左边缘与视图之间的距离
element.scrollTop        | 返回元素上边缘与视图之间的距离
element.childNodes       | 范湖元素子节点的 NodeList 。
nodelist.item()          | 返回 NodeList 中位于指定下标的节点
nodelist.length          | 返回 NodeList 中的节点数

## 6. HTML DOM Event对象
##### Event 对象
Event 对象代表事件的状态，比如事件在其中发生的元素、键盘按键的状态、鼠标的位置、鼠标按钮的状态。事件通常与函数结合使用，函数不会在事件发生前被执行！
### 事件句柄（Event Handlers）
属性         |          此事件发生在何时...
------      | ------
onclick     | 当用户点击某个对象时调用
onload      | 一张页面或一幅图像完成加载
onblur      | 元素失去焦点
onchange    | 域的内容被改变
ondblclick  | 当用户双击某个对象时调用的事件
onfocus     | 元素获得焦点
onsubmit    | 确认按钮被点击
onreset     | 重置按钮被点击
onselect    | 文本被选中
onabort     | 图像的加载被中断
onerroer    | 在加载文档或图像时发生错误
onkeydown   | 某个键盘按键被按下
onkeypress  | 某个键盘按键被松开
onmousedown | 鼠标按钮被按下
onmouseup   | 鼠标按键被松开
onmousemove | 鼠标被移动
onmouseout  | 鼠标从某元素移开
onmouseover | 鼠标移到某元素之上
onresize    | 窗口或框架被重新调整大小
onunload    | 用户退出页面


## 7. 常用的原生JavaScript操作方法汇总
- 原生ajax发生接口（4步）

```
// 先 new 出一个 XMLHttpRequest 对象
var xhr = new XMLHttpRequest();

// 配置请求对象的信息
xhr.open('GET/POST', 'url地址', ['是否异步']);
注意：若使用post请求，一定要设置请求头
xhr.setRequestHeader("Content-Type","application/x-www-from-urlencoded; charset=gb2312");

// 发送请求, get请求没有报文头写null
xhr.send([post请求参数字符串])

// 处理服务器上面返回的响应
xhr.onreadystatechange = function () {
	if(xhr.readyState == 4 && xhr.status == 200) {
		// 做一些操作  xhr.responseText
	}
}

```

- 监听手机横竖屏事件

```
// 监听 orientation changes
window.addEventListener("orientationchange", function(event) {
 // 根据event.orientation|screen.orientation.angle等于0|180、90|-90度来判断横竖屏
}, false);
```
orientationchange事件在低端的adroid机器上存在兼容性问题，可能不会触发










