<template>
    <div>
        <Header></Header>
        <div class="container">
        <div v-for="item in list" :key="item.title" class="list-box">
            <Center :item="item"></Center>
        </div>

        </div>
        <Footer></Footer>
    </div>
</template>


<script>
import Header from "./header"
import Footer from "./footer"
import Center from "./center"

export default {
    name:'page',
    data(){
        return {
            list :[
            {
                url:'/WEB_css.jpeg',
                title:'CSS入门',
                text:'CSS是一种能为网页增添样式的语言，它能够修改网页中的字体样式，颜色，背景，增加华丽的动画与3D效果是给网页增添设计感的工具'
            },
            {
                url:'/WEB_css_block.jpeg',
                title:'CSS工具箱',
                text:'CSS是一种能为网页增添样式的语言，它能够修改网页中的字体样式，颜色，背景，增加华丽的动画与3D效果是给网页增添设计感的工具'
            },
            {
                url:'/WEB_css_style.png',
                title:'CSS样式文字',
                text:'CSS是一种能为网页增添样式的语言，它能够修改网页中的字体样式，颜色，背景，增加华丽的动画与3D效果是给网页增添设计感的工具'
            },
            {
                url:'/WEB_css_layout.jpg',
                title:'CSS布局',
                text:'CSS是一种能为网页增添样式的语言，它能够修改网页中的字体样式，颜色，背景，增加华丽的动画与3D效果是给网页增添设计感的工具'
            },

        ]
        }

    },
    components:{
        Header,
        Footer,
        Center
    }
}
</script>

<style>
    .container{
        width: 920px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: auto;
        margin-top: 100px;
        margin-bottom: 50px;
    }
</style>