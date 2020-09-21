<template>
    <div class="header-container">
        <img :src="imgUrl" alt="">
        <div class="nav-box">
            <div class="nav-title"><router-link to="/">首页</router-link></div>
            <div class="nav-title"><router-link to="/contact">联系我们</router-link></div>
            <div class="nav-title"><router-link to="/join">加入我们</router-link></div>
            <div class="nav-title"><router-link to="/club">俱乐部</router-link></div>
            <div class="nav-title"><router-link to="/about">关于我们</router-link></div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Header',
    data() {
        return {
            imgUrl:"https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/commonbg/logo.png"
        }
    },
}
</script>

<style lang="scss">
    .header-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 3px 5px #ccc;
        height: 80px;
        img{
            width: 200px;
            height: 40px;
            margin-left:20px
        }
        .nav-box{
            display: flex;
            div{
                margin-right: 20px;
                a{
                    text-decoration: none;
                    color: #333;
                    font-size: 18px;
                }
            }
        }
    }
</style>