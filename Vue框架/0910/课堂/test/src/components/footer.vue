<template>
    <div class="footer-container">
        <div class="about-us">
            <h2>我们的故事</h2>
            <h3>半圆的发展历程和背景，更清晰的了解我们</h3>
        </div>
        <div class="about-us">
            <h2>成为一员</h2>
            <h3>半圆致力于数字领域的不断开拓</h3>
        </div>
    </div>
</template>

<script>


export default {
    name:'footer',
    data(){
        return{
            s: 11,
            list:[
                {name:'lily',gender:'woman'},
                {name:'jack',gender:'man'},
                {name:'Joe',gender:'man'},
                {name:'nancy',gender:'woman'},
            ]
        }
    },
    methods: {
        getRef(){
            console.log('我是组件内的方法')
        }
    },
}
</script>

<style>
.footer-container{
    width: 100%;
    background: #303232;
    padding: 64px 0 85px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
}

.about-us h2{
    font-size: 22px;
    line-height: 30px;
    color: #e3e3e3;
    font-weight: 500;
    cursor: pointer;
}

.about-us h3{
    cursor: pointer;
    font-size: 14px;
    line-height: 24px;
    color: #e3e3e3;
    font-weight: 400;
    max-width: 190px;
}
</style>