<template>
    <div>
        关于我们
        <h2>{{name}}</h2>
        <h3>{{query}}</h3>
    </div>
</template>

<script>
export default {
    name:'about',
    data(){
        return{
            name:'',
            query:''
        }
    },
    created() {
        // console.log('router',this.$route)
        // /* 接收home页面传过来的参数 */
        // console.log('router',this.$route.params)
        // this.name=this.$route.params.name
        
        const query=this.$route.query
        this.query=query.id
    },
}
</script>

<style lang="scss">
    
</style>