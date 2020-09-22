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
      if(!this.name){
                alert('请输入姓名')
            }else if(!this.age){
                alert('请输入年龄')
            }else if(!this.gender){
                alert('请输入性别')
            }else if(!this.school){
                alert('请输入学校')
            }else{
              this.list={
                  name:this.name,
                  age:this.age,
                  gender:this.gender,
                  school:this.school
                }
                this.$store.commit('user/getList',this.list)
                this.$router.push({
                  name:'User'
                })
            }
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
