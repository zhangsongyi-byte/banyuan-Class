<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="setLo">点击</button> -->
  <button @click="closeHome">closeHome页面</button>
  <Home v-if="isShow"></Home>

  </div>
</template>
<script>
import Home from "./components/home";

export default {
  name: "App",
  data(){
    return{
      isShow:true
    }
  },
  components: {
    Home
  },
  methods: {
    closeHome(){
      this.isShow=!this.isShow
    }
  },
};
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
</style>
