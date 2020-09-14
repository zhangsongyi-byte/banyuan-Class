<template>
    <div class="home-container">
        <img v-oss-src="'/commonbg/logo.png'" :style="{width:wid*2+'px'}">
        <ul class="ul">
            <li>首页</li>
            <li>职前集训</li>
            <li>高校俱乐部</li>
        </ul>
    </div>
</template>

<script>

export default {
    name:'header',
    data(){
        return{
            wid:100
        }
    }
}
</script>

<style>
.home-container{
    height: 60px;
    padding: 0 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-shadow: 2px 6px 10px #eee;
}
.ul{
    display: flex;
    flex-direction: row;

}

.ul li{
    list-style: none;
    margin-left: 10px;
}
</style>