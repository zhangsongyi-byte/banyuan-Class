<template>
    <!-- <div> -->
        <div class="container">
            <div class="list-top">任务列表</div>
            <div class="add-container">
                添加任务：<input type="text" placeholder="输入任务名称，点回车即可添加任务" v-model='task' @keyup.enter="addTask">
            </div>
            <div class="list-container">
                <div class="left">
                    <div :class="['left-ul',isClick === 'undone'?'bgColor':'']" @click="jump(false,'undone')">未完成任务 ({{getCountUndone}})</div>
                    <div :class="['left-ul',isClick === 'done'?'bgColor':'']"  @click="jump(true,'done')">已完成任务 ({{getCountDone}})</div>
                    <div :class="['left-ul',isClick === 'all'?'bgColor':'']"  @click="jump('','all')">全部任务 ({{getCount}})</div>
                </div>
                <div class="right">
                    <Task :list='newArr' @check='check' @remove="fatherRemove"></Task>
                </div>
            </div>
        </div>
    <!-- </div> -->
</template>

<script>
import Task from '../components/task'
export default {
    name:'todolist',
    data() {
        return {
            task:'',
            isClick:"",
            newArr:[],
            list:[
                {
                    text:'待办事件',
                    isShow:false
                },
                {
                    text:'已完成事件',
                    isShow:true
                }
            ]
        }
    },
    components:{
        Task
    },
    computed: {
        getCount(){
            let data=this.list
            return data.length
        },
        getCountDone(){
            let data=this.list.filter((item=>item.isShow===true))
            return data.length
        },
        getCountUndone(){
            let data=this.list.filter((item=>item.isShow===false))
            return data.length
        }
    },
    methods: {
        addTask(){
            this.list.push({
                text:this.task,
                isShow:false
            })
            this.task=''
        },
        jump(bool,name){
            this.isClick = name
            let data=this.list
            if(typeof(bool)=='boolean'){
                this.newArr=data.filter((item=>item.isShow===bool))
            }else{
                this.newArr=data
            }
        },
        check(data){
            this.newArr[data.ind].isShow=!this.newArr[data.ind].isShow
    },
        fatherRemove(data){
            this.newArr.splice(data.index,1)
            let q=this.list.findIndex(obj => obj.id == data.item.id)  
            this.list.splice(q,1)
    },
    },
}
</script>

<style lang="scss">
    .container{
        width: 1000px;
        height: 700px;
        box-shadow: 0 3px 10px #ccc;
        margin: auto;
        margin-top:30px;
        border-radius: 10px;
        background-color: #f3f3f3;
        .list-top{
            width: 100%;
            height: 30px;
            background-color: #2a9fec;
            border-radius: 10px 10px 0 0;
            color: #fff;
            text-align: center;
            font-weight: 700;
        }
        .add-container{
            width: 80%;
            // background-color: cadetblue;
            height: 100px;
            margin: auto;
            display: flex;
            align-items: center;
            input{
                width: 700px;
                height: 26px;
                border:1px solid #ccc;
            }
        }
        .list-container{
            width: 90%;
            height: 470px;
            margin: auto;
            margin-top: 50px;
            // background-color: coral;
            display: flex;
            .left{
                width: 160px;
                height: 100%;
                // background-color: cornflowerblue;
                .left-ul{
                    width: 130px;
                    height: 40px;
                    background-color: #FFF;
                    color: #2a9fec;
                    margin-bottom: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 5px;
                }
            }
            .right{
                width: 800px;
                height: 100%;
                margin-left: 40px;
                background-color: #fff;
                border: 10px solid #ddd;
                border-radius: 7px;
            }
        }
    }

    .bgColor{
        background-color:#2a9fec !important;
        color: #fff!important;
    }
</style>