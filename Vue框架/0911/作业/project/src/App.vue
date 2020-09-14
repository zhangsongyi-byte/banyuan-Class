<template>
  <div id="app">
    <div class="container">
      <div class="wrap">
        <Address></Address>
      </div>
    </div>
  </div>
</template>

<script>
import Address from "./components/address";

export default {
  name: "App",
  components: {
    Address
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0 auto;
}
.container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.warpper {
  min-width: 320px;
  max-width: 500px;
  margin: 0 auto;
  height: 100%;
  background-color: #fff;
}
</style>
