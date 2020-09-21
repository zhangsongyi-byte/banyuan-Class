<template>
    <div>
        <div class="left-slide">
            <ul>
                <li><router-link to='/client/regist'>注册</router-link></li>
                <li><router-link to='/client/login'>登录</router-link></li>
            </ul>
        </div>
        <div class="right-main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name:'Login'
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