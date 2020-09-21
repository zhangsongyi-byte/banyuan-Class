<template>
  <div class="about">
    <h1>About页面</h1>
    <button @click="controllerModel(true)">查看信息</button>

    <div class="model" v-if="isShow">
      <div class="model-main">
        <span @click="controllerModel(false)">X</span>
        <h1>简介</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'about',
  data() {
    return {
      isShow:false
    }
  },
  methods: {
    controllerModel(bool){
      this.isShow=bool
    }
    
  },
}
</script>

<style lang="scss">
  .model{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.6);
    &-main{
      width: 400px;
      height: 300px;
      background-color: #fff;
      border-radius: 6px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      span{
        position: absolute;
        right: 0;
        top: 0;
      }
    }
  }
</style>
