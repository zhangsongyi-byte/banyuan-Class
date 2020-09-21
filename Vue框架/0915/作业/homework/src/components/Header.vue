<template>
    <div>
<!-- 头部搜索框 -->

    <div class="header-search">
        <div class="header-top">
            <div class="search-left">
                <img src="https://img.alicdn.com/tfs/TB1Ly5oS3HqK1RjSZFPXXcwapXa-238-54.png" class="ali-img">
                <div class="china-container">
                    <div class="china">中国站</div>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                </div>
            </div>
            <div class="search-center">
                <div class="search-up">
                    <div class="search-up-selected" style="background-color: coral; color: white;">全部</div>
                    <div class="search-up-selected">域名</div>
                    <div class="search-up-selected">商标</div>
                    <div class="search-up-selected">公司</div>
            </div>
            <div class="search-middle">
                <img src="../assets/fdj.png" alt="" class="fdj-img">
                <input type="text" class="search-input" placeholder="企业用户专属优惠">
                <button class="search-button">搜索</button>
                <img src="../assets/camera.png" alt="" class="camera-img">
            </div>
            <div class="search-down">
                智能商标注册&nbsp;|&nbsp;<span
                    style="color: tomato;">企业必备产品榜单&nbsp;</span>|&nbsp;云服务器ECS&nbsp;|&nbsp;云数据库MySQL版
            </div>
        </div>
            <div class="search-right">
                <a href="">购物车</a>
                <a href="">文档</a>
                <a href="">备案</a>
                <a href="">控制台</a>
                <a href="">登录</a>
                <button>免费注册</button>
            </div>
        </div>
        

        <div class="header-bottom">
            <div class="bottom-left">
                <div class="bottom-title">最新活动</div>
                <div class="bottom-title">产品分类</div>
                <div class="bottom-title">企业应用中心</div>
                <div class="bottom-title">解决方案</div>
                <div class="bottom-title">云市场</div>
                <div class="bottom-title">支持与服务</div>
                <div class="bottom-title">合作伙伴与生态</div>
                <div class="bottom-title">开发者</div>
                <div class="bottom-title">云栖号</div>
                <div class="bottom-title">了解阿里云</div>
            </div>
            <div class="bottom-right">
                <img data-src="https://gw.alicdn.com/tfs/TB1QKiexhD1gK0jSZFKXXcJrVXa-720-200.gif" src="https://gw.alicdn.com/tfs/TB1QKiexhD1gK0jSZFKXXcJrVXa-720-200.gif">
            </div>
        </div>
    </div>

    
    </div>
</template>

<script>
export default {
    name:'header'
}
</script>
    
<style lang="scss">
    @import "../style/header.scss"
</style>