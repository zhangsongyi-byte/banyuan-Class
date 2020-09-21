<template>
    <div class="footer-container">
        <h1>footer</h1>
    </div>
</template>

<script>
export default {
    name:'Header',
    data() {
        return {
            imgUrl:"https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/logo_black_bottom@2x.png"
        }
    },
}
</script>

<style lang="scss">
    .footer-container{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100px;
        background-color: #000;
        color: #fff;
    }
</style>