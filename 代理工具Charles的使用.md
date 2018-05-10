## Charles的使用教程
手机端代理工具Charles(俗称花瓶)的详细使用教程及问题解决汇总(v4.2.1，iOS10.3) -- by Qzx

## 参考网址
- [Charles 官网 -- 推荐支持正版](https://www.charlesproxy.com/)
- [Charles 从入门到精通](http://blog.devtang.com/2015/11/14/charles-introduction/)
- [Charles 抓包配置流程(Charles4.1.2 iOS)](https://www.jianshu.com/p/a5265f35980a)
- [细说 Charles 配置 HTTPS 代理的乱码问题](https://malcolmyu.github.io/2017/02/26/Dive-into-Charles-HTTPS-Proxying/)
- [关于Charles抓HTTPS包的tips](https://www.ianisme.com/ios/2502.html)
- [Charles 4.2.1 Mac破解版](http://www.sdifen.com/charles421.html)

## 简介
[Charles](https://www.charlesproxy.com/) 是在Mac下常用的网络封包截取工具，在移动开发中，通过将自己设置成手机系统的网络访问代理服务器，来截取手机网络接口请求信息，配合 Charles 的 SSL 功能，可分析和查看 Https 协议。<br>
Charles 主要的功能包括：

1. 截取 Http 和 Https 网络封包
2. 支持Ajax调试，可以自动将json或xml数据格式化，方便查看
3. 支持重发网络请求，方便后端调试
4. 支持修改网络请求参数
5. 支持网络请求的截获并动态修改
6. 支持模拟慢速网络以及等待时间较长的请求
7. Charles 4 新增：支持 Http2 和 IPv6

## 使用教程
#### 安装
- 下载安装包，打开后将 Charles 拖到 Application 目录下完成安装。
- 启动 Charles 后，第一次 Charles 会请求给它设置系统代理的权限，点击右侧允许按钮，登录密码授予 Charles 该权限。
- 进入配置项：Proxy --> Proxy Settings... --> Port 默认 8888，将Enable transparent HTTP proxying 前面的选择框☑️勾选。
- Charles启动时默认是会抓取Mac 的请求数据包的，可将 macOS Proxy 取消勾选；
- 取消软件自动检查更新提示：点击 Preferences -> Launch -> Check for updates, 取消勾选；
- 注意：Chrome 和 Firefox 浏览器默认不使用系统的代理服务器设置，若要截取，需要在 Chrome 中设置成使用系统的代理服务器设置，或直接将代理服务器设置成 `127.0.0.1:8888` 。

#### 界面按钮功能介绍
- 两种视图模式(Structure 和 Sequence)
	- Structure 视图将 网络请求按访问的域名分类
	- Sequence 视图将 网络请求按访问的时间排序
	- Filter 功能可输入关键字快速筛选出 URL 中带指定关键字的网络请求
- 顶部按钮功能
	- 黄色扫帚 Clear the current Sesssion  
	- 红色 Recording
	- 乌龟🐢 Throttling 
	- 六边形 Breakpoints

#### 常用功能
-  **过滤网络请求**
	- 在主界面的中部的 Filter 栏中填入需要过滤出来的关键字
	- 在 Charles 的菜单栏选择 “Proxy”->”Recording Settings”，然后选择 Include 栏，选择添加一个项目，然后填入需要监控的协议，主机地址，端口号。这样就可以只截取目标网站的封包了。
	- 在想过滤的网络请求上右击，选择 “Focus”，之后在 Filter 一栏勾选上 Focussed 一项
-  **截取手机设备上的网络封包**
	- 电脑端Charles设置：在 Charles 的菜单栏上选择 “Proxy”->”Proxy Settings”，填入代理端口 8888，并且勾上 “Enable transparent HTTP proxying”。
	- 手机移动端设置：点击 Charles 的 “Help”->”Local IP Address”，可获取 Charles 运行所在电脑的 IP 地址；在 iPhone 的 “ 设置 “->” 无线局域网 “ 中，可看到当前连接的 wifi 名，通过点击右边的详情键， 在其最底部有「HTTP 代理」一项，我们将其切换成手动，然后填上 Charles 运行所在的电脑的 IP，以及端口号 8888。
	- 设置后，打开 iPhone 上的任意需要网络通讯的程序，就可以看到 Charles 弹出 iPhone 请求连接的确认菜单（如下图所示），点击 “Allow” 即可完成设置。
- **截取 Https 通讯信息** <br>
	说明：Https 协议属于加密协议，要想截取分析 Https 协议相关的内容，需要安装 Charles 的 CA 证书。具体步骤如下：图片部分可参考 [细说 Charles 配置 HTTPS 代理的乱码问题](https://malcolmyu.github.io/2017/02/26/Dive-into-Charles-HTTPS-Proxying/)
	
	1. `Proxy –> SSL Proxying Setting –> Enable SSL Proxying` 点击 Add，编辑Location，输入 Host: * , Port: 443，点击 OK。
	2. PC 端证书安装：`Help –> SSL Proxying –> Install Charles Root Certificate`，选择 Charles 的证书，并信任此证书。
	3. 移动端证书安装：`Help –> SSL Proxying –>Install Charles Root Certificate on a Mobile Device`， 安装弹出的对话框要求，手机配置好端口为 8888 的代理之后，在手机浏览器访问 `http://chls.pro/ssl` 就可以下载证书并安装了。
	4. 注意：对于 iOS 10.3以上的手机需要设置证书信任：点击 `通用 -> 关于本机 -> 证书信任设置 -> 选择 Charles 的证书打开`。

- **模拟慢速网络**
	- 在 Charles 的菜单上，选择 “Proxy”->”Throttle Setting” 项，在之后弹出的对话框中，我们可以勾选上 “Enable Throttling”，并且可以设置 Throttle Preset 的类型。
	- 若只想模拟指定网站的慢速网络，可以再勾选上图中的 “Only for selected hosts” 项，然后在对话框的下半部分设置中增加指定的 hosts 项即可。

- **修改网络请求，多次发送接口请求**  
	- 需求：为调试服务器的接口，需反复尝试不同参数的网络请求，Charles 可方便地提供网络请求的修改和重发功能。
	- 在已发送的网络请求上面点击右键，选择"Compose"，即可创建一个可编辑的网络请求，可以修改该请求的任何信息，包括 URL 地址、端口、参数等，之后点击 “Execute” 即可发送该修改后的网络请求，这对于我们和服务端调试接口非常方便。

- **反向代理**
	- Charles的反向代理功能允许我们将本地的端口映射到远程的另一个端口上，例，将本机的 61234 端口映射到了远程（lyun012.cn）的80端口上了。这样，当我访问本地的 61234 端口时，实际返回的内容会由 lyun012.cn 的 80 端口提供。 
	- 选择 “Proxy”->”Reverse Proxies Settings” 项，勾选Enable Reverse Proxies，点击Add 添加 需要代理的网址及端口。

- **修改服务器返回内容**
	- 需求：有些时候我们想让服务器返回一些指定的内容，方便我们调试一些特殊情况。例如列表页面为空的情况，数据异常的情况，部分耗时的网络请求超时的情况等。
	- Charles 提供了Map 功能、Rewrite 功能以及Breakpoints 功能，都可达到修改服务器返回内容的目的，三者在功能上的差异是：
		1. Map 功能适合长期地将某一些请求重定向到另一个网络地址或者本地文件；
		2. Rewrite 功能适合对网络请求进行一些正则替换；
		3. Breakpoints 功能适合做一些临时性的修改。
	- Map 功能
		- Map Remote: 将指定的网络请求重定向到另一个网址请求地址
			- 在 Charles 的菜单中，选择 “Tools”->”Map Remote” 进入设置页面。 
			- Host分别填写网络重定向的源地址和目的地址，对于不需要限制的条件，可以留空。
		- Map Local: 将指定的网络请求重定向到本地文件
			- 在 Charles 的菜单中，选择 “Tools”->“Map Local” 进入设置页面。
			- 需要填写的重定向的源地址和本地的目标文件
	- Rewrite 功能
		- 需求：Rewrite 功能功能适合对某一类网络请求进行一些正则替换，以达到修改结果的目的，例如：一个 API 请求是获得用户昵称，而我当前的昵称是 “tangqiaoboy”，我们想试着直接修改网络返回值，将 tangqiaoboy 换成成 iosboy，适用于批量和长期的替换。
		-  在 Charles 的菜单中，选择 “Tools”->“Rewrite Settings”，勾选"Enable Rewrite"，点击Add。
	- Breakpoints 功能  
		- 很多时候，我们只是想临时修改一次网络请求结果，最好通过 Breakpoints 实现。
		- Breakpoints 功能类似我们在 Xcode 中设置的断点一样，当指定的网络请求发生时，Charles 会截获该请求，这个时候，我们可以在 Charles 中临时修改网络请求的返回内容。
		- 在 Charles 的菜单中，选择 “Proxy”->”Breakpoint Settings” 进入设置页面。
		- 点击六边形图标可以控制断点的开启和断开。
