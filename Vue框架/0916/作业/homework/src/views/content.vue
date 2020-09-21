<template>
    <div class="container">
    
        <div :class="['left',isShow?'show-left':'hidden-left']">
            <div @click="goBack">返回</div>
            <div>标题</div>
            <div>描述</div>
        </div>
        <div :class="['right',isShow?'left-240':'left-0']">
            <div class="right-top">
                <button @click="isShow = !isShow">show</button>
            </div>
            <div class="right-main">
                <!-- <div v-if="showTab==='title'">{{info.title}}</div> -->
                <!-- <div v-else>{{info.summary}}</div> -->
                <Code :list="list"></Code>
            </div>
        </div>
    </div>
</template>

<script>
import Code from "../views/code"

export default {
    name:'content',
    data() {
        return {
            // showTab:'title',
            // info:{
            // },
            isShow:false
        }
    },
    created() {
        // const query=this.$route.query
        // const data=JSON.parse(query.data)
        // this.info=data
    },
    methods: {
        goBack(){
            this.$router.go(-1)
        },
        // showw(name){
        //     this.showTab=name
        // }
    },
}
</script>

<style lang="scss">
    .container{
        position: relative;
    }
    .left{
        position: fixed;
        // width: 240px;
        left: 0;
        top: 0;
        bottom: 0;
        background-color: pink;
        div{
            font-size:20px;
            color: #fff;
            line-height: 50px;
            text-align: center;
        }
    }
            .show-left{
                width: 240px;
            }
            .hidden-left{
                width: 0px;
            }

    .right{
        position: fixed;
        // left: 240px;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: powderblue;
        border-top: solid 8px #3d3d3d;
        border-left: solid 8px #3d3d3d;
        border-right: solid 8px #3d3d3d;
    }
            .left-240{
                left: 240px;
            }
            .left-0{
                left: 0px;
            }
</style>