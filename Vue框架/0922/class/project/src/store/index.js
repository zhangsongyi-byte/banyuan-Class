import Vue from "vue";
import Vuex from "vuex";
import * as types from "./mutation-type"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin:false,
    list:[
      {name:'Jack'},
      {name:'Lucy'},
      {name:'Mike'},
      {name:'Weal'},
    ],
    user:JSON.parse(localStorage.getItem('userinfo')) || {}
  },
  mutations: {
    [types.UPDATE_LOGIN](state){
      state.isLogin=!state.isLogin
    },
    [types.UPDATE_LIST](state,value){
      console.log(value)
      state.list=value
    },
    [types.UPDATE_INFO](state,data){
      state.user=data
    }
  },
  actions: {
    updateLoginState({commit},bool){
      commit(types.UPDATE_LOGIN,bool)
    },
    action1({commit},value){
      commit(types.UPDATE_LIST,value)
    },
    updateInfo({commit},obj){
      localStorage.setItem('userinfo',JSON.stringify(obj))
      commit(types.UPDATE_INFO,obj)
    }
  },
  modules: {}
});
