<template>
    <div class="hello">
        <button @click="fun('cat')">我是猫</button>
        <button @click="fun('dog')">我是狗</button>
        <button @click="fun('rabbit')">我是兔子</button>
        <h2>HelloVue</h2>
        <h3>{{vueName}}</h3>
    </div>
</template> 

<script>
export default {
    name: 'HelloVue',
    data(){
        return{
            vueName:'vue'
        }
    },
    methods: {
        fun(name){
            this.vueName=name
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
