<template>
  <div id="app">
    <router-view>
    
    </router-view>
  </div>
</template>

<script>
import Code from "./views/code"
import Interest from "./views/interest"
import Lesson from "./views/lesson"
export default {
  name:'App',
  data(){
    return{
      activeComp:'Code'
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


</style>
