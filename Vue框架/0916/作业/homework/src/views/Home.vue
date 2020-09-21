<template>
  <div id="app">
    <div id="nav">
      <div @click="change('Interest')" class="nav-title">趣味课堂</div>
      <div @click="change('Lesson')" class="nav-title">预备课程</div>
      <div @click="change('Code')" class="nav-title">编程入门</div>
    </div>
    <div class="component-container">
      <Code :type="activeComp"></Code>
      <!-- <keep-alive>
        <component :is="activeComp" :type="activeComp"></component>
      </keep-alive> -->
    </div>
  </div>
</template>

<script>
import Code from "./code"
import Interest from "./interest"
import Lesson from "./lesson"

export default {
  name:'Home',
  data(){
    return{
      activeComp: 'Code'
    }
  },
  components:{
    Code,
    Interest,
    Lesson
  },
  methods: {
    change(name){
      this.activeComp=name
    }
}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
}

body{
  margin: 0;
  padding: 0;
}

#nav{
  width: 100px;
  height: 100%;
  // background-color: pink;
  padding: 20px;
  line-height: 30px;
  font-size: 18px;
}

.component-container{
  width: calc(100vw - 100px);
  height: 100%;
  padding:20px;

  // background-color: plum;
}

.nav-title:hover{
  color: red;
}


</style>
