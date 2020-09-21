<template>
    <div class="code-all">
        <div class="code-container">
            <div v-for="item in list" :key="item.id" class="img-container" @click="jump(item)">
                <img :src="item.coverUrl" alt="">
                <div>{{item.title}}</div>
                <div>{{item.summary}}</div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: "Lesson",
    data(){
        return{
            list:[
                {
                    "id": 998,
                    "coverUrl": "http://by-camp.oss-cn-shanghai.aliyuncs.com/wiki/Javase-online/images/PRE_MACBOOK.png",
                    "summary": "学习编程过程中，我们将花费大量时间使用计算机，使用其中的工具完成我们的工作。这些工具的运行都是依靠操作系统，这里我们来介绍一下如何高效的使用操作系统以及工具。",
                    "title": "操作系统使用技巧",
                    "type": "lesson"
                },
                {
                    "id": 996,
                    "coverUrl": "http://by-camp.oss-cn-shanghai.aliyuncs.com/wiki/Javase-online/images/PRE_markdown.png",
                    "summary": "使用Markdown书写笔记文档，很多编程语言都实现了跨平台，markdown作为一种自带格式的文本，也可以很方便的在任意支持这种格式的平台或软件中打开，供自己或分享给他人阅读。",
                    "title": "Markdown",
                    "type": "lesson"
                },
                {
                    "id": 813,
                    "coverUrl": "http://by-camp.oss-cn-shanghai.aliyuncs.com/wiki/Javase-online/images/PRE_terminal.jpg",
                    "summary": "计算机好比一个图书馆，无论作为计算机专业人员还是业余爱好者，都要学会如何存取计算机这个大图书馆。熟悉命令行相关操作，是你迈向计算机程序开发的第一步。",
                    "title": "命令行操作",
                    "type": "lesson"
                },
                {
                    "id": 834,
                    "coverUrl": "http://by-camp.oss-cn-shanghai.aliyuncs.com/online/frontcover/PRE_code.png",
                    "summary": "“首先是一名打字员，然后才是一名程序员”，输入（打字）速度是一名程序员必备的基础修养。",
                    "title": "代码录入训练",
                    "type": "lesson"
                },
                {
                    "id": 876,
                    "coverUrl": "http://by-camp.oss-cn-shanghai.aliyuncs.com/online/frontcover/PRE_git.png",
                    "summary": "Git是现在非常流行的一个软件版本管理工具，github上托管着数量巨大的开源代码项目，学习这些内容将对以后编写和学习代码有着巨大的帮助。",
                    "title": "Git",
                    "type": "lesson"
                },
            ]
        }
    },
    methods: {
        aaa() {
            console.log("//")
        },
        jump(item) {
            console.log('lesson item')
            console.log('lesson item', item)
        }
    },
};
</script>

<style lang="scss">

    .code-all{
        // align-items: center;
        // justify-content: center;
    }

    .img-container{
        display: flex;
        flex-direction: column;
        width: 400px;
    }
    .code-container{
        width: 920px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: auto;
        img{
            width: 400px;
            height: 198px;
        }
    }
</style>
