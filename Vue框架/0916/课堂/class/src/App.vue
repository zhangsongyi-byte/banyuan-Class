<template>
  <div class="container">
    <!-- 路由里的页面都在这里显示 -->
    <router-view class="main"></router-view>
    <router-view class="slide" name="slide"></router-view>
    <router-view class="nav" name="nav"></router-view>
    <router-view class="footer" name="footer"></router-view>
  </div>
</template>

<script>

export default {
  name: "App"
};
</script>

<style lang="scss">
  .container{
    position: relative;
  }
  .slide{
    width: 100px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: gray;
  }

  .nav{
  position: fixed;
  left: 100px;
  top: 0;
  right: 0;
  height: 100px;
  background-color: pink;
  }
  .main{
    position: fixed;
    top: 100px;
    left: 100px;
    width: 100%;
    height: 100%;
    background-color: palegoldenrod;
  }
  .footer{
    position: fixed;
    bottom: 0;
    left: 100px;
    right: 0;
    height: 70px;
    background-color: cadetblue;
  }
</style>
