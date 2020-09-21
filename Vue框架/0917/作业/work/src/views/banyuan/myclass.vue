<template>
    <div class="myclass">
        <h1>这是我的课程页面</h1>
        <button @click="jumpTo">详情</button>
    </div>
</template>

<script>
export default {
    name:'myclass',
    methods: {
        jumpTo(){
            this.$router.push({
                path:'/about'
            })
        },
        
    },
}
</script>

<style lang="scss">
    .myclass{
        button{
            width: 80px;
            height: 40px;
            background-color: sandybrown;
            color: seashell;
            border-radius: 5px;
            border: none;
            margin-left: 100px;
        }
    }
</style>