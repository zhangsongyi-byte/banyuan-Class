<template>
  <div id="app">
    <div class="button-container">
      <button @click="change('Less')">less</button>
      <button @click="change('Sass')">sass</button>
      <button @click="change('Baidu')">baidu</button>
    </div>
    <less v-if="page==='Less'"></less>
    <!-- <baidu></baidu> -->
    <baidu v-if="page==='Baidu'"></baidu>
    <sass v-if="page==='Sass'"></sass>
  </div>
</template>

<script>
import Less from './components/less'
import Sass from './components/sass'
import Baidu from './components/Baidu'

export default {
  name: 'App',
  data(){
    return{
      page:'sass'
    }
  },
  components: {
    Baidu,
    Less,
    Sass
  },
  methods: {
    change(name){
      this.page=name
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
  margin: 0;
  padding: 0;
}

.button-container{
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.button-container button{
  width: 200px;
  height: 30px;
}
</style>
