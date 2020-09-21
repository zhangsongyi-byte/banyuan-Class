<template>
    <div class="allTAsk">
        <div class="per-list" v-for='(item,index) in list' :key="index" >
        <div class="checkBox"  @click="check(index)">
            <svg v-if='item.isShow' t="1600482404983" class="icon" viewBox="0 0 1397 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3223" width="16" height="16"><path d="M1396.363636 121.018182c0 0-223.418182 74.472727-484.072727 372.363636-242.036364 269.963636-297.890909 381.672727-390.981818 530.618182C512 1014.690909 372.363636 744.727273 0 549.236364l195.490909-186.181818c0 0 176.872727 121.018182 297.890909 344.436364 0 0 307.2-474.763636 902.981818-707.490909L1396.363636 121.018182 1396.363636 121.018182zM1396.363636 121.018182" p-id="3224" fill="#8a8a8a"></path></svg>
        </div>
        <p :style="{textDecoration: item.isShow?'line-through':''}">{{item.text}}</p>
        <span @click="close(item,item.id)" class="close">x</span>
        </div>
    </div>
</template>
<script>
    export default {
    name:'allTask',
    props:{
        list:{
        type:Array
        }
    },
    computed: {
        test(){
        console.log(this.list)
        }
    },
    methods:{
        check(index){
        // console.log(this.list)
        this.$emit('check',{
            ind:index
        })
        },
        close(item,value){
        this.$emit('remove',{
            id:value,
            item:item
        })
        }
    }
    }
</script>
<style lang="scss">
    .per-list{
        display: flex;
        // justify-content: space-between;
        border-bottom: 1px solid #eee;
        height: 30px;
        align-items: center;
        padding: 0 10px;
        .checkBox{
        width: 15px;
        height: 15px;
        border: 1px solid #8186d5;
        border-radius: 3px;
        }
        p{
        text-align: left;
        padding: 0 10px;
        }
        span{
        position: absolute;
        right: 300px;
        display: none;
        }
    }
    .per-list:hover{
        background-color: #f7fbfc;
        span{
        display: block;
        }
    }
</style>