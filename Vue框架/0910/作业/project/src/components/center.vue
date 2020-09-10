<template>
    <div class="img-container">
        <img v-css-src="item.url" alt="">
        <div class="title">{{item.title}}</div>
        <div class="time">{{time | globalFormatTime}}</div>
        <div class="text">{{item.text}}</div>
    </div>
</template>

<script>
export default {
    name:'center',
    data(){
        return{
            time:new Date().getTime()
        }
    },
    props:['item']
}
</script>

<style>
.img-container img{
    width: 400px;
    height: 198px;
}

.title{
    width: 397px;
    height: 50px;
    border: 2px solid #eee;
    display: flex;
    align-items: center;
}

.img-container{
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 370px;
}

.text,.time{
    margin-top: 20px;
}
</style>