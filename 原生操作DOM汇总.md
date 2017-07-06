# 原生JavaScript DOM操作汇总
回归最初，熟练掌握原生DOM的操作 by Qzx
## 1. 创建元素

```
创建元素：document.createElement
```
使用<i style="color: red">`document.createElement()`</i> 可以创建新元素，只接受一个参数：创建元素的标签名，这个标签名在`HTML`文档中不区分大小写，在`XHTML`中区分大小写。
在使用 <i style="color: red">`createElement()`</i>创建新元素的同时，可以同时为新元素设置 `ownerDocument` 属性，可操作元素的特性。

```
var div = document.createElement("div");
div.id = "myDiv";
div.className = "div1";
```
此时，新元素尚未被添加到文档树中，因此设置各种特性均不会影响浏览器的显示，要添加到文档树，可用<i style="color: red">`appendChild()、insertBefore()、replaceChild()`</i>。

```
document.body.appendChild(div);
```
## 2. 创建节点
```
创建文本节点：document.createTextNode
```
使用<i style="color: red">`document.createTextNode()`</i>来创建文本节点，接受一个参数：要插入节点的文本。与设置已有文本节点的值一样，作为参数的文本将按照 `HTML` 或 `XML` 的格式进行编码。

```
document.createTextNode("121212");
```
可以添加多个文本节点，假如两个文本节点是相邻的同胞节点，那么两个文本节点会连起来，中间不会有空格。
## 3. 节点关系
文本关系如下:

```
<div id="div1">
	<div id="div2">2</div>
	<div id="div3">3</div>
	<div id="div4">4</div>
</div>
```
> 父节点：parentNode

`parentNode` 是指定节点的父节点，一个元素节点的父节点可能是一个元素（Element）节点，也可能是一个文档（Document）节点，或者是个文档碎片（DocumentFragment）节点。每一个节点都有一个`parentNode`属性。<br>
对于下面的节点类型：`Attr、Document、DocumentFragment、Entity、Notation,其parentNode属性返回null`。如果当前节点刚刚被建立，还没有插入到DOM树中，则该节点的parentNode属性也是 返回 null。

```
<script type="text/javascript">
	var child2 = document.getElementById("div2");
	var parent = child2.parentNode;
</script>
```
> 兄弟节点： nextSibling, previousSibling

<i style="color: red">`nextSibling` </i>返回某节点的下一个兄弟节点，<i style="color: red">`previousSibling` </i>返回某节点的上一个兄弟节点，没有的话返回 null。<br>
<b>注意</b>：可能因为元素换行的原因返回的是 text 节点。
> 第一个或者最后一个子节点： firstChild、lastChild

firstChild 返回 node 的子节点中的第一个节点的引用，没有则返回 null;<br>
lastChild 返回 node 的子节点中的最后一个节点的引用，没有则返回 null; 

## 4、节点元素关系

```
末尾添加节点：someNode.appendChild()
```
`appendChild()`用于向 childNodes 列表的末尾添加一个节点，并且返回这个新增的节点。

```
某个节点前插入：someNode.insetBefore(newNode, someNode)
```
`insetBefore()`可以将节点插入到某个特定的位置，接受两个参数：要插入的节点和作为参考的节点。插入节点后，被插入的节点变成参考节点的前一个同胞节点，同时被方法返回，如果参考节点是 null, 则与 appendChild() 执行相同的操作。

```
替换节点： someNode.replaceChild(newNode, someNode.firstChild);
```
`replaceChild()`接受两个参数：要插入的节点和要被替换的节点。被替换的节点将由这个方法返回并从文档中移除，同时由要插入的节点占据其位置

```
// 移除第一个子节点
var returnNode = someNode.removeChild(newNode, someNode.firstChild);
```
```
克隆节点 : cloneNode(true/false)
```
返回调用该方法的节点的一个副本，参数表示是否采用深度克隆，如果为 true, 则该节点的所有后代节点也会被克隆，如果为 false,则只克隆该节点本身，文本或者换行、空格这些不会复制，因为他们都是一个 textNode。<br>
<b>注意：</b>为防止一个文档中出现两个 ID 重复的元素，使用 cloneNode() 方法克隆的节点在需要时应该制定另外一个与 原 ID 值不同的ID。

```
var div1 = document.getElementById("div1");
var cloneHtml = div1.cloneNode(true);
document.body.appendChild(cloneHtml);
``` 
## 5. 元素选择

```
// html 代码示例
<div id="div1">
    <p id="div2" class="one" name="nameone">2</p>
    <div id="div3">3</div>
    <div id="div4" name="div2">4</div>
</div>
```

```
document.querySelector
document.querySelectorAll 
```
<i style="color: red">`querySelector`</i> : 返回节点子树内与之相匹配的第一个 Element 节点。若没有匹配的节点则返回 null。<br>
<i style="color: red">`querySelectorAll`</i>: 返回一个包含节点子树内所有与之相匹配的 Element 节点列表，若没有匹配的则返回 一个空节点列表。<br>
<b>注意：</b>由 querySelector()、querySelectorAll()返回的节点列表不是动态实时的（非live Collection）。<br>
选择器方法接受一个或者多个用逗号分隔的选择器来确定需要返回的元素。

```
// 选择文档中所有 CSS 类是 waring 或者 note 的段落(p)元素
var special = document.querySelectAll("p.warning, p.notr");
// 也可以通过ID来查询
var el = document.querySelector("#main, #basic, #exclamation");
```

```
document.getElementById()  : 匹配特定ID
document.getElementsByTagName()  : 匹配标签名
document.getElementsByName()  : 匹配文档中所有 name 属性的标签
document.getElementsByClassName()  : 匹配所有指定 class 的子元素
```










