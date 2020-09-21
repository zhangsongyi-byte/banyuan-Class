const login ={
    namespaced:true,
    state: {
        isLogin:true,
        count:1000
    },
    getters:{
        strCount(state){
            return 'login'+state.count
        },
        finishList(state){
            let arr=state.list.filter(item=>{
                return !item.isFinish
            })
            return arr
        }
    },
    /* mutations里面进行的是同步操作 */
    mutations: {
        updateLogin(state,value){
            state.isLogin=value
        },
        addCount(state){
            state.count+=1000
        }
    },
    /* actions里可以进行一些异步操作，不能直接修改state里面的值，要通过调用mutations里面的方法来改变state里面的值 */
    actions:{
        updateAction({commit}){
            commit('addCount')
            // console.log('a',a)
        },
        /* 解构写法 */
        // addCount2({commit},value){
        //     commit('addCount',value)
        // },

    }
}

export default login