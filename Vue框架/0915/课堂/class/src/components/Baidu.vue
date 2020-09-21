<template>
    <div>
        <div class="header">
            <div class="header-left">
                <div class="left-title">news</div>
                <div class="left-title">hao123</div>
                <div class="left-title">map</div>
                <div class="left-title">video</div>
                <div class="left-title">tieba</div>
                <div class="left-title">major</div>
                <div class="left-title">more</div>
            </div>
            <div class="header-right">
                <div class="right-title">设置</div>
                <button class="right-title login-btn">login</button>
            </div>
        </div>

        <div class="center-container">
            <div class="img-container">
                <img src="../assets/logo.png" alt="">
            </div>
            <div class="input-container">
                <input type="text" class="search-input">
                <button class="search-btn">search</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Baidu'
}
</script>

<style lang="less">
@font:14px;
    .header{
        width: 100%;
        height: 70px;
        // background-color: #000;
        color: #000;
        display: flex;
        justify-content: space-between;
        font-size: @font;
        .header-left{
            display: flex;
            flex-direction: row;
            // justify-content: space-between;
            align-items: center;
            .left-title{
                margin-left: 20px;
            }
        }
        .header-right{
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            .login-btn{
                background-color: blue;
                padding: 5px;
                color: #fff;
                border-radius: 5px;
                border: none;
            }
            .right-title{
                margin-right: 20px+10;
            }
        }
    }
    .center-container{
        width: 100%;
        height: calc(100vh - 500px);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        img{
            width: 200px;
            height: 160px;
        }
        .input-container{
            display: flex;
            flex-direction: row;
            .search-input{
                width: 200px+150;
                height: 25px+5;
                border: 1px solid #666;
                border-right: none;
            }
            .search-btn{
                width: 80px;
                height: 35px;
                border: 0.5px solid #eee;
                background-color: blue;
                color: #fff;
                border-radius: 0 5px+2 5px+2 0;
            }
        }
    }
</style>