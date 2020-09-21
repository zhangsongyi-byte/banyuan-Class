<template>
  <div id="app">
    <Header></Header>
    <Content></Content>
  </div>
</template>

<script>
import Header from "./components/Header"
import Content from "./components/content"

export default {
  name: "App",
  components: {
    Header,
    Content
  }
};
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
