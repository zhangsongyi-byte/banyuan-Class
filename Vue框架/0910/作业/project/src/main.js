import Vue from 'vue'
import App from './App.vue'
import Config from './utils/config'

Vue.config.productionTip = false

Vue.directive('oss-src',function(el,binding){
  let imgURL=binding.value
  if(imgURL){
    el.setAttribute('src',Config.ossPath+imgURL)
  }
})

Vue.directive('css-src',function(el,binding){
  let imgURL=binding.value
  if(imgURL){
    el.setAttribute('src',Config.cssPath+imgURL)
  }
})

Vue.filter('globalFormatTime',(value)=>{
  if (!value) {
      return ''
  }
  let time = new Date(value)
  let y = time.getFullYear()
  let m = time.getMonth()
  let d = time.getDate()
  return y + '年' + m + '月' + d + '日' 
})

new Vue({
  render: h => h(App),
}).$mount('#app')
