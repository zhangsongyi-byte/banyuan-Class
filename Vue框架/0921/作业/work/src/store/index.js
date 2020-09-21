import Vue from "vue";
import Vuex from "vuex";

import login from "../store/login";
import user from "../store/user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    login,
    user
  }
});
