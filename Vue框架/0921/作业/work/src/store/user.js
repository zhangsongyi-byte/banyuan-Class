const user={
    namespaced:true,
    state:{
        obj:''
    },
    mutations:{
        getList(state,data){
            state.obj=data
        }
    }
}

export default user