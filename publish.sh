#!/usr/bin/env bash

###
 # @Author: luodan
 # @Date: 2021-11-16 17:00:47
 # @LastEditTime: 2021-11-16 18:10:52
 # @LastEditors: luodan
 # @Description: 发布到 npm 上
 # @FilePath: /cli/publish.sh
### 

set -e

# 修改npm源地址
npm config get registry
npm config set registry=https://registry.npmjs.org

# 登陆输入自己的npm账号和密码，还有邮箱
echo '登录'
npm login

echo "发布中..."
npm publish --access=public

# 改回npm源地址
npm config set registry=https://registry.npm.taobao.org

echo -e "\n发布成功\n"
exit
