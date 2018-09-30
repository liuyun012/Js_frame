# Travis CI Github自动化部署方案

### 参考网址
- [Travis CI 官网文档](https://docs.travis-ci.com/)
- [持续集成服务 Travis CI 教程 - 阮一峰](http://www.ruanyifeng.com/blog/2017/12/travis_ci_tutorial.html)
- [Travis-CI自动化测试并部署至自己的CentOS服务器](https://juejin.im/post/5a9e1a5751882555712bd8e1)
- [Travis CI 系列：自动化部署博客](https://laravel-china.org/articles/6111/travis-ci-series-automated-deployment-blog?order_by=created_at&)
- [rvm，ruby的安装](https://blog.csdn.net/ctypyb2002/article/details/80982982)
- [CentOS 安装 Ruby 2.3.0](https://github.com/johnnian/Blog/issues/33)

### Travis CI介绍

- 简介： Travis CI 是在软件开发领域中的一个在线的，分布式的持续集成服务，用来构建及测试在GitHub托管的代码，Travis对开源项目是免费，对私有项目是收费的。
- 环境准备
	- Github 公开项目
	- 项目创建 gh-pages 分支
	- 确保项目的 `Settings` 里面的，设置 `GitHub Pages` 的 Source 为  gh-pages branch。

## Travis 自动化部署项目配置流程

一、创建新的 Github 项目代码仓库(或采用已有的项目)
二、注册并配置 Travis CI

- 注册：登录 [travis-ci.org](https://travis-ci.org/)，点击右上角的个人头像，使用Github第三方授权登录；
- Travis 会列出 Github 上面你的所有仓库，以及你所属于的组织，选择你需要 Travis 帮你构建的仓库；
- 在 Repositories 选项，选择需要自动化部署的项目。开启build,，也就是点击 ❎ 变成 ✅ 的过程；
- 如果在 Repositories 选项中没有新建的项目，可以点击 Sync account 进行项目同步；
- 点击 选中项目后面的 `Settings`，在 `Environment Variables`下面设置全局变量 GITHUB_TOKEN 值为个人的访问令牌
- 个人访问令牌的生成可参考 [为命令行创建个人访问令牌](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)
- 加密环境变量参考：[在.travis.yml中加密环境变量](https://docs.travis-ci.com/user/environment-variables#Defining-encrypted-variables-in-travisyml)

三、添加 Travis 配置文件 (.travis.yml)

在项目根目录的master 分支里面添加 .travis.yml 配置文件(该文件必须保存在 Github 仓库里面)，基本配置如下：

```html
# 指定运行环境
language: node_js
# 指定运行的node版本
node_js:
- '8'
# 运行的脚本命令
script:
- yarn build
# 指定监控的分支，只有指定的分支提交时才会运行脚本
branches:
  only:
  - master
# 安装环境依赖和脚本
install:
- yarn install
# 自动化部署命令
deploy:
  provider: pages # 常见快捷部署功能，pages 指代要部署到  Github Pages
  skip-cleanup: true  # 确保已skip-cleanup设置为true, 否则 Travis CI将删除在构建期间创建的所有文件
  github-token: $GITHUB_TOKEN  # Set in the settings page of your repository, as a secure variable
  target-branch: gh-pages  # 要推送的分支，默认 gh-pages
  local-dir: dist   # 推向分支的文件目录，相对于当前目录
  on:
    branch: master  # 监控的分支
```

四、补充说明和使用技巧

- 环境变量
	.travis.yml的env字段可以定义环境变量

	```html
	env:
  - DB=postgres
  - SH=bash
  - PACKAGE_VERSION="1.0.*"
	```
	注：有些环境变量(比如用户名和密码)不能公开。可以写在每个仓库的设置页面，Travis 会自动把它们加入环境变量，且只有管理员才能看到变量的值。

- 加密信息
	如果不放心保密信息明文存在 Travis 的网站，可以使用 Travis 提供的加密功能，直接在本地加密变量。
	
	```html
	# 1. 通过 gem 安装 Ruby 的包 travis
	$ sudo gem install travis

	# 2. 在项目的根目录下，执行 travis encrypt命令
	$ travis encrypt SOMEVAR=secretvalue --add env.matrix
	```
	注：上面命令中，`SOMEVAR`是要加密的变量名，`secretvalue` 是要加密的变量值，--add参数会把输出自动写入.travis.yml，省掉了修改env字段的步骤。

- 加密文件
	如果要加密的是文件（比如私钥），Travis 提供了加密文件功能。 

## 自动化部署到个人服务器