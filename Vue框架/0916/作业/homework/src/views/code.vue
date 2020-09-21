<template>
    <div class="code-all">
        <div class="code-container">
            <div v-for="item in forList" :key="item.id" class="img-container">
                <img :src="item.coverUrl" alt="">
                <div>{{item.title}}</div>
                <div>{{item.summary}}</div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Data from "../router/data"
export default {
    name: "compCode",
    props: {
      type: {
        type: String,
        require: true
      }
    },
    data(){
        return{
            list: Data.list,
        }
    },
    created() {
      // let data=JSON.stringify(this.list)
      console.log('list',this.list)
    },
    computed: {
      forList () {
        let arr = [];
        switch(this.type) {
          case 'Code':
            arr = this.list.filter(item => {
              return item.type == 'code'
            })
            console.log("arr", arr)
            break;
          case 'Interest':
            arr = this.list.filter(item => {
              return item.type == 'interest'
            })
            console.log("arr", arr)
            break;
          case 'Lesson':
            arr = this.list.filter(item => {
              return item.type == 'lesson'
            })
            console.log("arr", arr)
            break;
        }
        return arr
      }
    },
    methods: {
        jumpTo(item){
          console.log('code item',item)
          // this.$router.push({
          //   name:'content',
          
          // })
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
