* cli脚手架安装使用

```
* 全局安装yarn：
npm install -g yarn

* 安装成功后查看版本号
yarn --version         简写：yarn -v

* 查看yarn源
yarn config get registry

* 修改yarn源为=》淘宝源
yarn config set registry https://registry.npm.taobao.org

* 全局安装webpack
yarn global add webpack-cli
yarn global add webpack

* 安装cli
yarn global add @vue/cli
yarn global add @vue/cli-init


* 查看yarn源
yarn config get registry

* 修改yarn 源为淘宝源
yarn config set registry https://registry.npm.taobao.org



* yarn使用
yarn add 包名            // 局部安装依赖
yarn global add 包名     // 全局安装依赖
yarn remove 包名         // 局部卸载依赖
yarn global remove 包名  // 全局卸载依赖


* cli初始化项目
vue create 项目名


* 导出development output.js配置
vue inspect > output.js // 相当于vue inspect --development > output.js


* 导出生产模式配置(线上正式环境)
vue inspect --production > output.js
```









```
 ◉ Choose Vue version    // vue版本
 ◉ Babel                 // es6解析es5
 ◯ TypeScript            
 ◯ Progressive Web App (PWA) Support   // 渐进式的web支持
 ◯ Router
 ◯ Vuex
 ◯ CSS Pre-processors      // css 预处理器，less、sass
 ◉ Linter / Formatter      // 格式化
 ◯ Unit Testing            // 站在程序员的角度测试
 ◯ E2E Testing             // 站在用户的角度测试
```









#### 目录解析

- dist:用于存放使用打包之后的项目文件
- node_modules:用于存放项目的各种依赖
- public：用于存放静态资源
- public/index.html：是一个模板文件，作用是生成项目的入口文件。浏览器访问项目的时候就会默认打开生成好的index.html。
- src：是存放各种vue文件的地方。
- src/assets：用于存放着各种静态文件，比如图片。
- src/components:用于存放我们的公共组件，比如header、footer等。
- src/views：用于存放我们写好的各种页面，比如Login.vue，Home.vue。
- src/App.vue：是主vue模块，所有的页面都是在填充到App.vue中国，然后解析到html模板里
- src/main.js：入口文件，主要作用是初始化vue实例，同时可以在此文件中引用某些组件库或者全局挂载一些变量。全局filter，全局组件都在此定义
- .gitignore：配置git上传想要忽略的文件。
- babel.config.js：es6转es5，是一个工具链，主要用于在当前和较旧的浏览器或环境中将ES6的代码转换向后兼容（低版本ES）。
- package.json：模块基本信息项目开发所需要的模块，版本，项目名称。
- package-lock.json：是在npm install时候生成的一份文件，用于记录当前状态下实际安装的各个npm package的具体来源和版本号
- output.js：是导出的webpack配置文件



* 运行命令
```
 yarn run serve
 npm run serve
 都可
```
注意： 不同项目 运行命令可能不太一样，首先要查看项目的package.json的“scripts”，里面有的命令就是能用的命令，当然大部分都是serve运行项目



#### 后面用到的

* src/router/index.js：vue-router路由文件。需要引入src/views文件夹下的.vue，配置path、name、component。
* src/App.vue：是主vue模块，主要是使用router-link引入其他模块，App.vue是项目的主组件，所有的页面都是在App.vue下切换的。

* src/store/index.js：是vuex的首选文件，主要用于项目里边的一些状态保存。比如state、mutations、actions、getters、modules。可分模块，然后在此引入一起导出
* browserslistrc：浏览器兼容性解决




* 自定义指令
```
Vue.directive('oss-src', function (el, binding) {//指令名称为：real-img
  let imgURL = binding.value;//获取图片地址
  if (imgURL) el.setAttribute('src', Config.ossStaticPath + imgURL);
})
```




* Import、export

```
例子1：
export function setStorage (key, data) {
    if(!key) return
    localStorage.setItem(key, JSON.stringify(data))
}

/**
 * 获取storage
 * @param {String} key 键值名
 */
export function getStorage (key) {
    if(!key) return
    let res = localStorage.getItem(key);
    try {
        return JSON.parse(res)
    } catch (err) {
        return res
    }
}

js里导出多个export时，引入要如下写法
import { setStorage, getStorage, removeStorage } from '@common/util/common'




例子2：
function setStorage (key, data) {
    if(!key) return
    localStorage.setItem(key, JSON.stringify(data))
}

/**
 * 获取storage
 * @param {String} key 键值名
 */
function getStorage (key) {
    if(!key) return
    let res = localStorage.getItem(key);
    try {
        return JSON.parse(res)
    } catch (err) {
        return res
    }
}

export default {
   setStorage, getStorage
}
import Common from 'path'


export {
   setStorage, getStorage
}
import { setStorage, getStorage } from 'path'
```

































