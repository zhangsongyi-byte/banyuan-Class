* Filter

```
* 全局过滤器：  注意：在new Vue({}) 之前

Vue.filter('filter1', function (value) {
   if (!value) return ''
   value = value+'-----vakue'
   return value
})


* 局部过滤器
filters: {
   filter2 (value) {
      if (!value) return ''
      value = value+'--22---vakue'
      return value
   }
},


* 多个过滤器串联
{{ food | filterA | filterB | filterC | filterA }}


filter vs 方法：  filter可以在main.js里设置全局过滤，方法只能定义在一个页面里，切串联使用麻烦


eg:
<template v-for="(item,index) in list">
   <li v-if="item.isDiscount">{{ item.name }}-----价格：{{ item.price | dealDiscount }}</li>
   <li v-else>{{ item.name }}-----价格：{{ item.price }}</li>
</template>
```











* 组件

```
var HeaderVue = {
   template: `
      <div style="background-color:red;height:200px;" >{{text}}</div>
   `,
   data () {
      return {
         text: 'hello，我是头部'
      }
   }
}

var FooterVue = {
   template: `
      <div style="background-color:blue;height: 400px;" >{{text}}</div>
   `,
   data () {
      return {
         text: 'hello，我是尾部'
      }
   }
}

components: {
   'header-vue': HeaderVue,
   'body-vue': BodyVue,
   'footer-vue': FooterVue
}

<header-vue></header-vue>
```









* 全局组件


```
ar GlobalVue = {
   template:`
      <div>
         <div>
            <li>我是全局组件</li>
         </div>
      </div>
   `
}

//注册成全局组件
Vue.component('global-vue', GlobalVue);

```









* 父给子传值 props

```
<global-vue v-bind:msg="msg"></global-vue>
简写 <global-vue :msg="msg"></global-vue>



以字符串数组形式列出的 prop：
props:['msg','tt']



props: {
   msg: {
      type: String,
      require: true
   },
}

require:  必传
default: 默认值
validator: 验证

```







* 子给父传值

```
this.$emit('help', '爸爸，我迷路啦');  给父亲发射事件
this.$off('help');          关闭发射器

@help="fun"
```









* slot 插槽

```
子组件里：
<slot name="插槽名字"></slot>


父页面里：
<div slot="插槽名字"></div>

注意 父亲里除了div 给别的标签也行，给个标签主要是为了绑定某个slot时候给个标识

```


