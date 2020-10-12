<template>
  <div class="home">
    <div>
      <h1>个人信息</h1>
      <img :src="myUserInfo.avatar" alt="">
      <div>昵称：{{myUserInfo.nickname}}</div>
      <div>用户名：{{myUserInfo.username}}</div>
      <div>学校：{{myUserInfo.school}}</div>
      <div>年龄：{{myUserInfo.age}}</div>
    </div>
    <div v-for="item in list" :key="item.id">
      <img :src="item.image" style="width:250px;height:250px;" alt="">
      <div>{{item.name}}</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios"
export default {
  name: "Home",
  data() {
    return {
      list:[],
      myUserInfo:{}
    }
  },
  components: {
    HelloWorld
  },
  created() {
    // this.getShopList(),
    // this.getUserInfo()
    this.login()
  },
  methods: {
    login(){
      axios({
        method:'post',
        url:'http://49.235.98.65:3000/user/login',
        /* post用data来传数据 */
        data:{
          username:'jwjk11',
          password:'alalal'
        }
      }).then(res=>{
        console.log(res.data.user)
        this.myUserInfo=res.data.user
      })
    },
    getShopList(){
       /* 箭头函数不会改变this的指向，如果写成function(response)，this的指向会改变，this.list会显示undefined */
      axios.get('http://49.235.98.65:3000/shop/shopList').then((response)=>{
        console.log(response)
        this.list=response.data
      })
      .catch((error)=>{
        console.log(error)
      })
    },
    getUserInfo(){
      let userid='5f69cd1b0023164a8b9f3ee3';
      axios({
        method:'get',
        url:`http://49.235.98.65:3000/user/userinfo`,
        headers:{'user':userid},
        /* get请求是通过params来传数据 */
        params:{
          id:userid
        }
      }).then((response)=>{
        this.myUserInfo=response.data
        console.log(response)
      }).catch((error)=>{
        console.log(error)
      })
    }
  },
};
</script>
