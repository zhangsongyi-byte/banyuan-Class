<template>
    <div class="header-container">
        <img v-oss-src="'/commonbg/logo.png'">
        <ul class="ul">
            <li>首页</li>
            <li>职前集训</li>
            <li>高校俱乐部
                <img v-oss-src="'/commonbg/ic_arrow_down_black.svg'">
            </li>
            <li>登录 | 注册</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'header',
    data(){

    }
}
</script>

<style>
    .header-container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 10px 50px;
        background-color: white;
        box-shadow: 2px 6px 10px #eee;
        width: 1340px;
        height: 80px;
        position: fixed;
        top: 0;
        z-index: 99;
    }
    .ul{
        display: flex;
        align-items: center;
    }
    .ul li{
        list-style: none;
        margin-left: 30px;
    }
</style>