<template>
  <div class="home">
    <h2>是否登录{{isLogin}}</h2>
    <h2>name列表：{{list}}</h2>
    <button @click="fun">更改登录状态</button>
    <br>
    <br>
    <br>
    <div>
      name:{{user.name}}
    </div>
    <div>
      age:{{user.age}}
    </div>
    <div>
      gender:{{user.gender}}
    </div>
    <div>
      school:{{user.school}}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import {mapActions, mapMutations, mapState} from "vuex"

export default {
  name: "Home",
  computed: {
    ...mapState({
      "isLogin":state=>state.isLogin,
      "list":state=>state.list,
      "user":state=>state.user
    })
    
  },
  methods: {
    // ...mapMutations([
    //   'updateLogin',
    //   'updateList'
    // ]),
    ...mapActions([
      'updateLoginState',
      'action1'
    ]),
    fun(){
      // this.updateLogin()
      this.updateLoginState(false)
      let list=[{name:'zhangsan'},{name:'lisi'},{name:'wangwu'},{name:'zhaoliu'}]
      this.action1(list)
      // this.updateList(list)
    }
  },
};
</script>
