<template>
    <div>
        登录页面
        <input type="text">
        <button>登录</button>
    </div>
</template>

<script>
export default {
    name:"index",
    beforeCreate() {
        console.log('beforeCreate')
    },
    created() {
        console.log('created')
    },
    beforeMount() {
        console.log('beforeMount')
    },
    mounted() {
        console.log('mounted')
    },
    
}
</script>

