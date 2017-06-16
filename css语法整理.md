# CSS 语法整理
平常项目中遇到的css不常用语法整理 by Qzx
## css问题解决及说明相关网址
- [前端CSS规范整理 -- 标点符](https://www.biaodianfu.com/css-style-guide.html)
- [PostCSS深入学习系列教程](http://www.w3cplus.com/PostCSS/postcss-deep-dive-preprocessing-with-precss.html)
- [大量 css3 hover效果动画](http://ianlunn.github.io/Hover/)
- [CSS3 知识库](http://lib.csdn.net/base/css3)
- [Flex布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool)
- [Flex布局教程：实例篇](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html?bsh_bid=683103006)
- [纯css3 实现 loading动画](http://www.webhek.com/post/css-loaders.html)
- [用CSS绘制三角形](https://segmentfault.com/a/1190000002783179)
- [css3中单位px,em,rem,vh,vw,vmin,vmax的区别](http://blog.csdn.net/jyy_12/article/details/42557241)
- [前端不为人知的一面--前端冷知识集锦](http://www.cnblogs.com/Wayou/p/things_you_dont_know_about_frontend.html)
- [CSS文字两端对齐](http://blog.163.com/lgh_2002/blog/static/440175262013580153222/)
- [CSS clip:rect矩形剪裁功能及一些应用介绍](http://www.zhangxinxu.com/wordpress/2011/04/css-clip-rect/)
- [CSS align-items 属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items)
- [css单词断词、换行](http://www.alloyteam.com/2016/05/css-word-for-word-breaker-do-you-really-understand/)
- [巧用 mask-image 实现简单进度加载界面](http://www.cnblogs.com/vajoy/p/5095511.html)
- [CSS3 3D transform变换介绍](http://www.zhangxinxu.com/wordpress/2012/09/css3-3d-transform-perspective-animate-transition/)
- [CSS3图片摇摆动画](http://www.zzsck.org/js/picture/4097.html)
- [CSS3 pointer-events:none应用举例及扩展, 按钮点透事件](http://www.zhangxinxu.com/wordpress/2011/12/css3-pointer-events-none-javascript/)
- [pointer-events属性说明  MDN](https://developer.mozilla.org/cn/docs/Web/CSS/pointer-events)

## Css项目中不常见属性汇总
1. 字体样式设置：<br>
	单词间距：word-spacing:8px;  字与字间距：letter-spacing: 1px; 
	设置开头缩进(两个字)：text-indent : 2em; 
2. 阻止按钮的默认行为：pointer-events: none;
	具体用法：pointer-events: auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit
	实际应用案例： ① 提交页面，提交按钮点击后，添加这个样式属性（style="pointer-events"），来防止重复提交。
	② 一些层的绝对定位，覆盖按钮，穿透可以点击它。等等。
3. 简单的文字模糊效果
	
```
	p {
    color: transparent;
    text-shadow: #111 0 0 5px;
	}
```
<p style="color: transparent;text-shadow: #111 0 0 3px;">提交页面，提交按钮点击后，</p>

4. css 垂直居中 <br>
	方案1： 将父容器设置为 `display: table`, 然后将子元素设置为 `display: table-cell`, 然后加上 `vertical-align: middle`来实现。
	方案2：利用 `translate` 来实现水平垂直居中样式，需 IE9+。
	
```
	.center-vertical {
	    position: relative;
	    top: 50%;
	    transform: translateY(-50%);
	    left: 50%;
	    transform: translateX(-50%); 
	}
```

5. 多重边框 <br>
	利用重复制定 `box-shadow` 来达到多个边框的效果
	
```
	/*CSS Border with Box-Shadow Example*/
	div {
	    box-shadow: 0 0 0 6px rgba(0, 0, 0, 0.2), 0 0 0 12px rgba(0, 0, 0, 0.2), 0 0 0 18px rgba(0, 0, 0, 0.2), 0 0 0 24px rgba(0, 0, 0, 0.2);
	    height: 200px;
	    margin: 50px auto;
	    width: 400px
	}
```
<div style="width: 300px;height: 100px; margin: 50px auto; box-shadow: 0 0 0 6px rgba(0, 0, 0, 0.2), 0 0 0 12px rgba(0, 0, 0, 0.2), 0 0 0 18px rgba(0, 0, 0, 0.2), 0 0 0 24px rgba(0, 0, 0, 0.2);"></div>

6. 



