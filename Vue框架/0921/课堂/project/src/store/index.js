import Vue from 'vue'
import Vuex from 'vuex'

import home from './home'
import login from './login'

Vue.use(Vuex)

const store=new Vuex.Store({
    strict:true,
    state:{},
    mutations:{},
    modules:{
        home,
        login
    }
})

export default store