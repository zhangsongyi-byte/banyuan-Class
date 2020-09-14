<template>
  <div id="app">
    <Left></Left>
    <Header></Header>
    
  
  </div>
</template>

<script>
import Header from "./components/header"
import Left from "./components/left"

export default {
  name: 'App',
  data(){
    return{
    }
  },
  components:{
    Header,
    Left
  }
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
  padding:0;
}

</style>
