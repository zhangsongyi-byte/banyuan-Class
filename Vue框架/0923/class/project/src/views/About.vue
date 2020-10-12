<template>
  <div class="about">
    <div>{{aboutUserInfo&&aboutUserInfo.nickname}}</div>
    <img :src="aboutUserInfo&&aboutUserInfo.avatar">
    <div>{{aboutUserInfo&&aboutUserInfo.username}}</div>
    <div>{{aboutUserInfo&&aboutUserInfo.school}}</div>
    <div>{{aboutUserInfo&&aboutUserInfo.age}}</div>
    <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  name:'about',
  data() {
    return {
      aboutUserInfo:{}
    }
  },
  created() {
    // this.getUserInfo(),
  },
  methods: {
    async getUserInfo(){
      const data=await this.yGet('/user/userinfo',{
        params:{
          id:'5f69cd1b0023164a8b9f3ee3'
        }
      })
      if(data){
        this.aboutUserInfo=data
        console.log('about data',data)
      }
    },
    async login(){
      let params={
        username:'zhang',
        password:'123123123'
      }
      const data=await this.yPost('/user/login',params)
    }
  },
}
</script>
