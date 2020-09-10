<template>
  <div id="app">
    <Page></Page>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Page from "./components/page.vue"

export default {
  name: 'App',
  components: {
    Page
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
  padding: 0;
}
</style>
