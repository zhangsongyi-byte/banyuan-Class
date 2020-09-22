* 页面引入方式

```
* mapState（放在computed中声明）
...mapState({
   "count": state => state.login.count
})

* mapMutations(放在methods中声明)
...mapMutations([
   'mutationFunName'
]),

* mapActions(放在methods中声明)
...mapActions([
   'actionFunName'
]),



调用：(想方法一样调用)
this.
```





* 定义mutation-type

```
type.js

/** 登录 */
export const SAVE_USER = 'SAVE_USER';

/** 退出 */
export const CLEAR_USER = 'CLEAR_USER';

import * as types from './mutations-type'

[types.SAVE_USER] (state, data) {
   state.user = data
},

commit(types.SAVE_USER, userInfo);
```













* 解决刷新数据丢失问题

```
localStorage.setItem('key', JSON.stringify(value));

JSON.parse(localStorage.getItem('key')) || defaultData 
```





* key

```
一个插入的例子
<template>
  <div>
    <p v-for="item in list" :key="item.id">{{ item.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'Setting',
  data () {
    return {
      list: [
        {name: 'a', id: 1},
        {name: 'b', id: 2},
        {name: 'c', id: 3},
        {name: 'd', id: 4},
        {name: 'e', id: 5}
      ]
    }
  },
  mounted() {
    setTimeout(()=>{
      this.list.splice(2, 0, {name: 'f'});
    }, 2000)
  },
}
</script>
```



上面案例重现的是以下过程

![image-20200921214216045](/Users/edz/file/Vue课程/资料/image-20200921214216045.png)





不使用key的情况

```
old： A B C D E
new： A B F C D E


A更新成A（节点一样不会发生更新）
B更新成B（节点一样不会发生更新）
C更新成F
D更新成C
E更新成D
插入E
```

..

![image-20200921214259133](/Users/edz/file/Vue课程/资料/image-20200921214259133.png)







使用key

![image-20200922153631025](/Users/edz/file/Vue课程/资料/image-20200922153631025.png)

```
首次循环 patch A
A B C D E
A B F C D E


第2次循环 patch B
B C D E
B F C D E


第3次循环 patch E
C D E
F C D E

第4次循环 patch D
C D
F C D

第5次循环 patch C
C
F C

第6次
增加F节点
```









浏览器调试看下执行过程

```
while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {

oldStartVnode.tag==='p'
```







eg

```
覆盖list时看下执行过程

```











Key值不设置时 会标红，看着难受，我们可以暂时设置一个唯一值index下标，跟没设置key的一样的效果

但是当页面不只是显示，如果有了增删改操作，并且操作的元素内部 有不是通过循环每一项item来赋值的情况时，就不可以继续用index 设置key值了，删除的项对应的旧key值会被复用，页面会出现显示错乱的问题。

```
key值正确设置：
1. item.id
2. uuid()
```



那些情况可以继续用index设置key

```
循环展示出列表，就不需要在变化的情况，eg: 搬运自主学习列表页
```

那些情况不能用index下标做key

```
页面上for循环的列表 有增删改的情况  eg: 后台管理增删改页面
```



















