# Travis CI Github自动化部署方案

### 参考网址
- [Travis CI 官网文档](https://docs.travis-ci.com/)
- [Travis-CI自动化测试并部署至自己的CentOS服务器](https://juejin.im/post/5a9e1a5751882555712bd8e1)
- [Travis CI 系列：自动化部署博客](https://laravel-china.org/articles/6111/travis-ci-series-automated-deployment-blog?order_by=created_at&)

### Travis CI介绍

- 简介： Travis CI 是在软件开发领域中的一个在线的，分布式的持续集成服务，用来构建及测试在GitHub托管的代码，Travis对开源项目是免费，对私有项目是收费的。
- 环境准备
	- Github 公开项目
	- 项目创建 gh-pages 分支
	- 在项目的 Settings 里面的  

### Travis 自动化部署项目配置流程

一、创建新的Github项目代码仓库(或采用已有的项目)，
https://juejin.im/post/5a9e1a5751882555712bd8e1
https://zhuanlan.zhihu.com/p/25066056
https://laravel-china.org/articles/6111/travis-ci-series-automated-deployment-blog?order_by=created_at&
https://www.liaoxuefeng.com/article/0014631488240837e3633d3d180476cb684ba7c10fda6f6000
https://mritd.me/2017/02/25/jekyll-blog-+-travis-ci-auto-deploy/
https://scarletsky.github.io/2016/07/29/use-gitlab-ci-for-continuous-integration/
https://zhuanlan.zhihu.com/p/36390666
https://github.com/mattbrailsford/vue-press-demo/blob/master/.travis.yml
https://www.regotcha.com/vuepress/#auto-deploy-to-github-pages-with-travis-ci
https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/
https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/