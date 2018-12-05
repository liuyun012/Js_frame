# oh-my-zsh 常用插件推荐

## 一、0h-my-zsh 的安装和配置 
 - 安装
 - 配置
 	- history 命令时间格式调整（HIST_STAMPS="yyyy-mm-dd"）  

## 二、常用插件

- git
	- 插件安装：默认包含
	- 作用：
- autojump
- Z
- zsh-syntax-highlighting
	- 插件安装：[官网](https://github.com/zsh-users/zsh-syntax-highlighting)
	
	```
	git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting 
	```
- zsh-autosuggestions
	- 插件安装：[官网](https://github.com/zsh-users/zsh-autosuggestions)
	
	```
	git clone git://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions
	```
- git-open
	- 插件安装：[官网](https://github.com/paulirish/git-open) 
	
	```
	git clone https://github.com/paulirish/git-open.git $ZSH_CUSTOM/plugins/git-open
	```
	- 作用：在终端里打开当前项目的远程仓库地址
- zsh-incremental
	- 插件安装：[官网](http://mimosa-pudica.net/zsh-incremental.html) 
	
	```
	1. 下载插件包到本地(incr-0.2.zsh)
	2. 执行 `open ~/.oh-my-zsh/custom/plugins`,新建文件夹 incr
	3. 将插件包拷贝到 incr文件夹，并重命名为 incr.plugin.zsh
	4. 在 ~/.zshrc 新增插件 incr
	``` 
	- 作用：实现快速定位命令 自动补全目录