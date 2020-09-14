import Vue from "vue";
import App from "./App.vue";
import Config from "./utils/config"
import Header from "./components/header"

Vue.config.productionTip = false;

/* 在全局自定义指令 */
Vue.directive('oss-src',function(el,binding){
  let imgURL=binding.value
  if(imgURL){
    el.setAttribute('src',Config.ossPath+imgURL)
  }
})

Vue.directive('focus',function(el){
  console.log(el)
  el.focus()
})

/* 全局组件，头部 */
Vue.component('global-header',Header)

new Vue({
  render: h => h(App)
}).$mount("#app");
