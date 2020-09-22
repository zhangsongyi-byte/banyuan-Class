<template>
    <div class="container">
        <div class="left">
            <div class="left-title">姓名：{{user.name}}</div>
            <div class="left-title">年龄：{{user.age}}</div>
            <div class="left-title">性别：{{user.gender}}</div>
            <div class="left-title">学校：{{user.school}}</div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import { mapState } from 'vuex'
    export default{
        name:'userRight',
        computed: {
            ...mapState({
                "user":state=>state.user
            })
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
        background-color: rgb(8, 8, 68);
        color: #fff;

        .left-title{
            padding: 50px 20px;
            
        }
    }
}
    
</style>