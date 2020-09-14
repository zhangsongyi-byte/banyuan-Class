<template>
  <div id="app">
    <button @click="change('HelloWorld')">HelloWorld</button>
    <button @click="change('HelloVue')">HelloVue</button>
    <button @click="change('HelloJs')">HelloJs</button>

  <!-- 组件 -->
    <!-- <hello-world v-if="activeComp==='HelloWorld'"></hello-world>
    <hello-vue v-if="activeComp==='HelloVue'"></hello-vue>
    <hello-js v-if="activeComp==='HelloJs'"></hello-js> -->

  <!-- 动态组件 -->
  <!-- keep-alive属性，保存页面的修改 -->
  <keep-alive>
    <component :is="activeComp"></component>
  </keep-alive>
  </div>

</template>

<script>
// import Common from "./mixins/common"
// import Velocity from "velocity-animate"
import HelloWorld from "./components/HelloWorld"
import HelloVue from "./components/HelloVue"
import HelloJs from "./components/HelloJs"


export default {
  name: 'App',
  data() {
    return {
      a:'aaa',
      message:'我是父组件的数据',
      isShow:true,
      activeComp:'HelloWorld'
    }
  },
  components:{
    HelloWorld,
    HelloVue,
    HelloJs
  },
  // mixins:[Common.myMixin],
  methods: {
    click1(){
      /* 如果父组件和mixin里的数据名出现重名，会优先取父组件的数据，如果父组件没有，才会取mixin里的数据*/
      console.log('mixin message',this.message)
      this.sayHello()
    },
    change(name){
      this.activeComp=name
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.font{
  font-size: 14px;
  color: blue;
}
.fade-enter{
  /* 进入之前 */
  opacity: 0;
  font-size: 30px;
  color: red;
}

.fade-enter-active{
  /* 之前到之后的过程 */
  animation: big-small 3s;
}

.fade-enter-to{
  /*进入之后 */
  opacity: 1;
  font-size: 14px;
  color: blue;
}

.fade-leave{
  font-size: 14px;
  color: blue;
}


.fade-leave-active{
  transition: all 3s;
}

.fade-leave-to{
  opacity: 0;
  font-size: 30px;
  color: blueviolet;
}

@keyframes big-small{
  25%{
    font-size: 30px;
  }
  50%{
    font-size: 14px;
  }
  75%{
    font-size: 30px;
  }
  100%{
    font-size: 14px;
  }
}

@keyframes bounce-in{
  0%{
    transition: scale(0);
  }
  50%{
    transition: scale(1.5);
  }
  100%{
    transition: scale(1);
  }
}
</style>
