# npm发包教程及组件按需加载的实现
整理汇总一下npm发包的流程和ui组件实现按需加载  by Qzx

## 参考网址
- [node官网](http://nodejs.cn/)
- [npm官网](https://www.npmjs.com/)
- [npm中文官网](https://www.npmjs.com.cn/)

## npm发包流程实现
- 配置环境 安装node.js (已有的请忽略)
	1. 官网下载最新的node安装包，正常安装[node.js](http://nodejs.cn/)；
	2. 安装完成后，执行 `node -v`, 查看是否正常安装；
	3. 执行：`sudo npm update npm -g`，将npm 升级到最新；
	4. 查看npm是否正常： `npm -v`。

- 发包具体示例
	1. 注册npm账号，填写 用户名、密码和邮箱；
	2. 找个位置，新建一个文件夹；
	3. cd 进入文件夹，执行 `npm init -y`, 有需要改变的内容自己再去文件修改和添加；
	4. 使用 `npm login`，登录自己的 npm 账号；
	5. 使用 `npm publish`，发布自己的包到 npm;
	6. 查看自己发布的包是否成功，可以去别的项目执行 `npm install 你发布的包名`，下载成功。
	
	**注意**：1. 发布自己包之前，应先去 npm 官网搜索自己要发布的包名是否已经存在，已存在的包名会提交失败；2. 自己发布的包更新时，每次都要到package.json, 将 version 修改，例如：从1.0.0改为1.0.1。然后再执行 `npm publish`更新；整体步骤示例图片如下：
	
	![](https://github.com/liuyun012/Js_frame/blob/master/images/WechatIMG97.jpg) 
	
- 补充说明(包名检索和查看自己发布的包)
	1. 打开npm官网，输入你的包名，如有结果则存在；
	2. 点击个人头像 -> Packages, 即可查看自己已发布的所有包。
	
	![](https://github.com/liuyun012/Js_frame/blob/master/images/1532835956642.jpg) 
	![](https://github.com/liuyun012/Js_frame/blob/master/images/1532836082894.jpg) 