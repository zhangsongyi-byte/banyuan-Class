<template>
    <div class="container">
        <div class="left">
            <div class="left-title">姓名：{{list.name}}</div>
            <div class="left-title">年龄：{{list.age}}</div>
            <div class="left-title">性别：{{list.gender}}</div>
            <div class="left-title">学校：{{list.school}}</div>
        </div>
        <div class="right">
            <h3>个人信息</h3>
            <div class="right-container">
                <h4>信息修改</h4>
                <div class="info-container">
                    <div class="input-box" style="margin-bottom:30px">
                        姓名 <input type="text" v-model="name">
                        <span style="margin-left:80px">学校</span> <input type="text" v-model="school">
                    </div>
                    <div class="input-box">
                        性别 <input type="text" v-model="gender">
                    </div>
                    <br>
                    <div class="input-box">
                        年龄 <input type="text" v-model="age">
                    </div>
                    <br>
                    <button @click="save">保存</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'user',
    data() {
        return {
            name:'',
            age:'',
            gender:'',
            school:'',
            list:''
        }
    },
    created() {
        let data=this.$store.state.user.obj
        console.log(data)
        this.name=data.name
        this.age=data.age
        this.gender=data.gender
        this.school=data.school
        this.list={name:this.name,age:this.age,gender:this.gender,school:this.school}
    },
    methods: {
        save(){
            this.list={name:this.name,age:this.age,gender:this.gender,school:this.school}
        }
    },
}
</script>

<style lang="scss">
.container{
    .left{
        width: 200px;
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        background-color: peachpuff;

        .left-title{
            padding: 50px 20px;
            
        }
    }
    .right{
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 200px;
        // background-color: plum;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 150px;

        .right-container{
            width: 70%;
            height: 60%;
            box-shadow: 0 3px 10px #eee;
            padding: 20px 50px;

            .info-container{
                width: 480px;
                margin-left: 30px;
                input{
                    width: 130px;
                    height: 35px;
                    margin-left: 10px;
                    border-radius: 3px;
                    border: 1px solid #eee;
                }
                button{
                    width: 80px;
                    height: 30px;
                    color: #fff;
                    background-color: plum;
                    border: none;
                    border-radius: 5px;
                }
            }
        }
    }
}
    
</style>