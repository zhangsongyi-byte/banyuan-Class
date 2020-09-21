<template>
  <div id="app">
      <Header v-if="configObj.isShowHeader"></Header>
    <transition name="fade">
      <router-view class="main" />
    </transition>
      <Footer v-if="configObj.isShowFooter"></Footer>
  </div>
</template>

<script>
import Header from './components/header'
import Footer from './components/footer'

export default {
  name:'App',
  data() {
    return {
      configObj:{
        isShowHeader:true,
        isShowFooter:true,
        title:'半圆官网'
      }
    }
  },
  components:{
    Header,
    Footer
  },
  watch:{
    "$route":{
      handler(newV,oldV){
        let meta=newV&&newV.meta
        const defaltConfig={
          title:'半圆官网',
          isShowHeader:true,
          isShowFooter:true
        }
        this.configObj=Object.assign(defaltConfig,meta)
        // let isShow=newV.meta.isShowHeader
        // if(typeof isShow==='boolean'){
        //   this.showHeader=isShow
        // }else{
        //   this.showHeader=true
        // }
        // let isShowF=newV.meta.isShowFooter
        // if(typeof isShowF==='boolean'){
        //   this.showFooter=isShowF
        // }else{
        //   this.showFooter=true
        // }
        // document.title=newV.meta.title || '半圆官网'
        // if(newV.meta&&newV.meta.isShowHeader){
        //   this.showHeader=true
        // }else{
        //   this.showHeader=false
        // }
      },
      immediate:true
    }
  }
}
</script>

<style lang="scss">
body{
  margin: 0;
  padding: 0;
}
.main{
  min-height: 800px;
}

.fade-enter-active{
  transition: opacity 0.5s;
} 

.fade-enter{
  opacity: 0;
}


</style>
