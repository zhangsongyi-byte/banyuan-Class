<template>
    <div>
        <div class="left-slide">
            <ul>
                <li><router-link to="/user/myclass">我的课程</router-link></li>
                <li><router-link to="/user/email">邮件</router-link></li>
                <li><router-link to="/user/setting">设置</router-link></li>
            </ul>
        </div>
        <div class="right-main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name:"index"
}
</script>

<style lang="scss">
    .left-slide{
        width: 200px;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        background-color: powderblue;
        ul{
            li{
                list-style: none;
                line-height: 50px;
                font-size: 20px;
            }
        }
        a{
            text-decoration: none;
            color: #000;
        }
        a:hover{
            color: red;
        }
    }
    .right-main{
        position: fixed;
        top:0;
        bottom: 0;
        right: 0;
        left: 200px;
        background-color: rosybrown;
        text-align: center;
    }
</style>

