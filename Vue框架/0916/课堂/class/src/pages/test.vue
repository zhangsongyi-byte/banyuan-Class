<template>
    <div>
        test
        <div>
            <input type="text" v-model="input1">
            <button @click="goBack">后退</button>
        </div>
        <div>
            <input type="text" v-model="input2">
            <button @click="goPush">前进</button>
        </div>
    </div>
</template>

<script>
export default {
    name:'test',
    data(){
        return{
            input1:-1,
            input2:1
        }
    },
    methods: {
        goBack(){
            this.$router.go(this.input1)
        },
        goPush(){
            this.$router.go(this.input2)
        },
    },
}
</script>

<style lang="scss">
    
</style>