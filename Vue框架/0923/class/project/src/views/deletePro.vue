<template>
    <div class="about">
        <button @click="deletePro">删除</button>
        <button @click="updatePassword">修改密码</button>
    </div>
</template>

<script>
    export default {
    name:'about',
    data() {
        return {

        }
    },
    created() {
        this.deletePro()
    },
    methods: {
        async updatePassword(){
            let params={
                oldPassword:'alalal',
                newPassword:'abcabc'
            }
            const data=await this.yPut('/user/changePassword',params)
            console.log(data)
            if(data){
                console.log('更改成功')
            }
        },
        async deletePro(){
        let params={
            id:'5f69cd1b0023164a8b9f3ee3'
        }
        const data=await this.yDel('/admin/shopItem',params)
        if(data){
            
        }
        },

    },
    }
</script>
