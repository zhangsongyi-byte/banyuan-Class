<template>
    <div>
        <global-header v-if="isShow"></global-header>
        <div>
            <div class="home-main" id="home" @click="closeHeader">
                <p>欢迎加入半圆</p>
                <div class="h5-container">
                    <h5 @click="getInputValue">咨询</h5>
                    <input ref="inputEle" value="我是input">
                </div>
                    <h1>{{time | formatTime}}</h1>
            </div>
        </div>

        <Footer ref="footerRef"></Footer>
    </div>
</template>

<script>
// import Header from "./header";
import Footer from "./footer";
import Moment from "moment";
Moment.locale('zh-cn')

export default {
    name: "home",
    data() {
    return {
        time:new Date().getTime(),
        isShow:true,
        title:'home页面的title'
    };
    },
    components:{
        Footer
    },
    filters:{
        formatTime(value){
            let time=Moment(value).format('YYYY-MM-DD, hh:mm:ss a dddd')
            return time
        },
        relativeTime(value){
            let time=Moment('2010-10-02','YYYYMMDD').fromNow(); 
            return time
        }
    },
    methods: {
        getInputValue(){
            // console.log(this.$refs.inputEle.value)
            /* this.$refs.footerRef相当于在footer.vue中的this，所以这里直接获取到的是footer里的data值 */
            // console.log(this.$refs.footerRef.list[3].gender)
            // let divEle=document.getElementById('home')
            // console.log('divEle====>',divEle)
        },
        closeHeader(){
            this.isShow=!this.isShow
        }
    },
    beforeCreate() {
        console.log('beforeCreate')
    },
    created() {
        console.log('created',this.title)
    },
    beforeMount() {
        console.log('beforeMount')
    },
    mounted() {
        this.$nextTick(()=>{
            console.log('mounted1',this.$refs.inputEle.value)
        })
        console.log('mounted2',this.$refs.inputEle.value)
    },
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    updated() {
        console.log('updated')
    },
    beforeDestroy() {
        setTimeout(()=>{
            console.log('=======',this.title)
        },500)
        console.log('beforeDestroy')
    },
    destroyed() {
        setTimeout(()=>{
            console.log('------',this.title)
        },500)
        console.log('destroyed')
    },
};
</script>

<style>
.home-main{
    width: 100%;
    height: calc(100vh - 60px - 268.53px);
    background-color: #6967ce;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.home-main p{
    height: 45px;
    font-size: 32px;
    font-weight: 500;
    color: #fff;
}

.h5-container{
    width: 280px;
    height: 55px;
    background-color: #fff;
    border-radius: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.home-main h5{
    font-size: 18px;
    font-weight: 400;
    color: #333;
    text-align: center;
    line-height: 55px;
    opacity: 1;
    cursor: pointer;
}
</style>