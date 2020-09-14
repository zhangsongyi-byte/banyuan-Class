import Vue from "vue";
import App from "./App.vue";
import moment from "moment";
moment.locale("zh-cn");


Vue.config.productionTip = false;


Vue.directive("ossPath", (el, binding) => {
  let ossImg = binding.value;
  if (ossImg) {
    el.setAttribute("src", ossImg);
  }
});



Vue.filter("glaobalFormatTime", value => {
  let time = moment(value).format("MMMM Do YYYY, h:mm:ss a");
  return time;
});

new Vue({
  render: h => h(App)
}).$mount("#app");
