<template>
    <div>
        <div class="left-side">
            <div class="img-container">
                <img
            data-v-43b09033
            class="banyuanImg"
            src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/logo_black_bottom@2x.png"
        />
            </div>
            <div class="name-container">
        <img
            data-v-43b09033
            src="https://by-image.oss-cn-shanghai.aliyuncs.com/images/160007348352558676.png"
            alt
            class="user-icon"
        />
        </div>
        <div>非会员</div>
        <div class="class-container">
        <div class="my-class">
            <div
            :style="{marginBottom:'30px'}"
            :class="['icon-hover',routerName==='myClass'?'bgColor':'']"
            >
            <img
                data-v-43b09033
                class="classImg"
                src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/uc-index-my-course.png"
            />
            <span><router-link to="/banyuan/myclass">我的课程</router-link></span>
            </div>
            <div
            :class="['icon-hover',routerName==='Email'?'bgColor':'']"
            >
            <img
                data-v-43b09033
                class="classImg"
                src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/uc-index-email.png"
                />
            <span><router-link to='/banyuan/email'>邮箱</router-link></span>
            </div>
        </div>
        <div class="my-class">
            <div
            :style="{marginBottom:'30px'}"
            :class="['icon-hover',routerName==='Setting'?'bgColor':'']"
            >
            <img
                data-v-43b09033
                class="classImg"
                src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/uc-index-set.png"
            />
            <span><router-link to='/banyuan/setting'>设置</router-link></span>
            </div>
            <div class="icon-hover">
            <img
                    data-v-43b09033
                    class="classImg"
                    src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/uc-index-quit.png"
            />
            <span @click="goBack">退出</span>
            </div>
        </div>
        </div>
        </div>
        <div class="right-main">
        <button @click="jumpBack">返回</button>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name:'Index',
    data() {
        return {
        }
    },
    created() {
        console.log(this.$route.name)
    },
    computed: {
        routerName(){
            let name=this.$route.name
            return name
        }
    },
    methods: {
        goBack(){
            this.$router.push({
                path:'/'
            })
        },
        // judge(name){
        //     if(name===this.$route.name){
        //         return true
        //     }
        //     return false
        // }
        jumpBack(){
            this.$router.go(-1)
        }

    },
}
</script>

<style lang="scss">
    .left-side{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 250px;
        background-color: rosybrown;
        padding: 10px 0;
        text-align: center;
        color: #2c3e50;


        a{
            text-decoration: none;
            color: #2c3e50;
        }

        .img-container{
            margin-bottom: 100px;
        }

        .banyuanImg{
            width: 150px;
            height: 50px;
        }
        .user-icon {
            width: 78px;
            height: 78px;
            border-radius: 50%;
        }
    }
    .right-main{
        position: fixed;
        top: 0;
        bottom: 0;
        right:0;
        left: 250px;
        background-color: salmon;
    }

    .class-container {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.classImg {
    width: 22px;
    height: 22px;
    vertical-align: top;
    margin-right: 9px;
}

.icon-hover {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.icon-hover:hover {
    background-color: rgba(105, 100, 209);
}

.bgColor {
    background-color: rgba(105, 100, 209, 0.5);
}
</style>