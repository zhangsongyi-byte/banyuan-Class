<template>
  <div class="home">
    <h1>{{ $store.state.login.count }}</h1>
    <!-- <button @click="add">增加10</button> -->
    <br>
    <br>
    <!-- <button @click="addType">增加100</button> -->
    <br>
    <br>
    <button @click="addAction">增加1000</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  // components: {
  //   HelloWorld
  // },
  created() {
    console.log(this.$store)
    console.log('store',this.$store.state.count)
  },
  methods: {
    /* 正常方式调用 */
    // add(){
    //   this.$store.commit('addCount');
    // },
    // /* type的方式调用mutations,传的是一个对象，以type绑定方法名 */
    // addType(){
    //   this.$store.commit({
    //     type:'addCountType',
    //     count:100
    //   })
    // },
    addAction(){
      this.$store.dispatch('login/updateAction')
    }
  },
};
</script>
