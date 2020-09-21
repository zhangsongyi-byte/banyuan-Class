<template>
  <div class="input-container">
    <h1>登录</h1>
      <input type="text" placeholder="姓名" v-model="name">
      <input type="text" placeholder="年龄" v-model="age">
      <input type="text" placeholder="性别" v-model="gender">
      <input type="text" placeholder="大学" v-model="school">
      <button @click="jumpToUser">登录</button>
  </div>
</template>

<script>
export default {
  name:'login',
  data() {
    return {
      name:'',
      gender:'',
      age:'',
      school:'',
      list:''
    }
  },
  methods: {
    jumpToUser(){
      let name=this.name
      let age=this.age
      let gender=this.gender
      let school=this.school
      this.list={
        name:name,
        age:age,
        gender:gender,
        school:school
      }
      this.$store.commit('user/getList',this.list)
      this.$router.push({
        name:'User'
      })
    }
  },
  
}
</script>

<style lang="scss">
  .input-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
      width: 500px;
      height: 40px;
      border: 1px solid #ccc;
      margin-bottom: 30px;
    }
    button{
      width: 505px;
      height: 40px;
    }
  }
</style>
