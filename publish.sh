#记录当前的目录
currentDir=`pwd`
#git clone代码文件名字
productionFileName=dist
#目标文件名字
targetFileName=plus_h5_pay


# 设定目标分之的名称
branch_name_set=master
# 跳到目标文件夹
cd ../../feature
#记录目标的目录
targetDir=`pwd`

# check whether the current branch is the dev branch
branch_name="$(git symbolic-ref HEAD 2>/dev/null)"
branch_name=${branch_name##refs/heads/}

if [ $branch_name != branch_name_set ]; then
  echo "=============ERROR: 请切换至" $branch_name_set "分支==============="
  read -p "你要切换分之到目标分支吗(y/n)?" -n 1 -r
  echo
  if [[ $REPLY =~ ^[Yy]$ ]]
  then
    git checkout $branch_name_set
    git pull origin $branch_name_set
    echo '================切换到" $branch_name_set "更新完毕!==============='
  else
    echo '你点击了取消'
    exit 1
  fi
fi




# 移动文件 并且删除项目
# 先删除原先的文件
rm -rf $targetDir/$targetFileName
mv $currentDir/$productionFileName/ $targetDir/$targetFileName

echo '==================欢迎下次光临!==================='
