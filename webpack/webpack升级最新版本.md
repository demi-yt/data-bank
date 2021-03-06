# webpack升级最新版本

```
webpack卸载：
npm uninstall webpack webpack-dev-server
webpack安装
npm install webpack webpack-dev-server -D
(注：加-D的作用是可以将依赖写入到devDependencies中)
卸载老版本相互依赖的包
npm uninstall bababel-loader file-loader html-webpack-plugin extract-webpack-plugin -D
重新安装依赖包：
（舍弃extract-webpack-plugin因为webpack4版本中已经将这个依赖包废弃，添加了新的依赖包：mini-css-extract-plugin）
mini-css-extract-plugin:提取css文件
npm install babael-loader file-loader html-webpack-plugin mini-css-extract-plugin -D
安装全局更新包：
npm install -g babel-upgrade
升级所有babel包，升级后加@符号：
npx babel-upgrade --write
全部初始化：
npm install
babel的更新所有要重新下载@vue/babel-plugin-transform-vue-jsx，加@
npm install @vue/babel-plugin-transform-vue-jsx -D
卸载原有的 babel-plugin-transform-vue-jsx -D
npm uninstall babel-plugin-transform-vue-jsx -D
运行：
npm run dev:client
报错：安装命令运行插件
npm install webpack-cli -D
运行：npm run dev:client
报错：在webpack.config.client.js文件中注释掉extract-text-webpack-plugin的引用

```
![Image text](https://raw.githubusercontent.com/demi-yt/data-bank/master/webpack/image/clipboard1.png)

```
运行：npm run dev:client
报错：在webpack.config.client.js文件中添加mode
开发环境：mode: 'development'
正式环境：mode: 'production'
```
![Image text](https://raw.githubusercontent.com/demi-yt/data-bank/master/webpack/image/clipboard2.png)

```
运行：npm run dev:client
报错：
```
![Image text](https://raw.githubusercontent.com/demi-yt/data-bank/master/webpack/image/clipboard3.png)
```
解决办法：先卸载loader相关依赖包
npm uninstall style-loader stylus-loader url-loader eslint-loader css-loader -D
重新安装：
npm install style-loader stylus-loader url-loader eslint-loader css-loader -D
运行：npm run dev:client
报错：
```
![Image text](https://raw.githubusercontent.com/demi-yt/data-bank/master/webpack/image/clipboard4.png)
```
解决办法：
将transform-vue-jsx修改成@vue/babel-plugin-transform-vue-jsx
```
![Image text](https://raw.githubusercontent.com/demi-yt/data-bank/master/webpack/image/clipboard5.png)
```
运行：npm run dev:client
报错：
```
![Image text](https://raw.githubusercontent.com/demi-yt/data-bank/master/webpack/image/clipboard6.png)
```
解决方法：
npm install vue-loader@14.2.4 -D
运行:npm run dev:client
报错：语法错误
```
![Image text](https://raw.githubusercontent.com/demi-yt/data-bank/master/webpack/image/clipboard7.png)
```
解决方法：webpack降级到4.28.4
npm install webpack@4.28.4 -D
运行:npm run dev:client
报错：语法错误 （...语法）
```
![Image text](https://raw.githubusercontent.com/demi-yt/data-bank/master/webpack/image/clipboard8.png)
```
解决办法：...语法，需要@babel/plugin-proposal-object-rest-spread插件包支持
npm install @babel/plugin-proposal-object-rest-spread -D
```
![Image text](https://raw.githubusercontent.com/demi-yt/data-bank/master/webpack/image/clipboard9.png)
```
运行:npm run dev:client
可能报错：
```
![Image text](https://raw.githubusercontent.com/demi-yt/data-bank/master/webpack/image/clipboard10.png)
```
解决办法：将降级css-loader
npm install css-loader@0.28.7 -D
运行:npm run dev:client
大功告成！！！
```
