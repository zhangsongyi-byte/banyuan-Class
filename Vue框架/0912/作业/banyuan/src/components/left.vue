<template>
    <div>
        <div class="side">
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
            :class="['icon-hover',activeComp==='HelloClass'?'backcolor':'']"
            @click="change('HelloClass')"
            >
            <img
                data-v-43b09033
                class="classImg"
                src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/uc-index-my-course.png"
            />
            <span>我的课程</span>
            </div>
            <div
            :class="['icon-hover',activeComp==='HelloEmail'?'backcolor':'']"
            @click="change('HelloEmail')"
            >
            <img
                data-v-43b09033
                class="classImg"
                src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/uc-index-email.png"
                />
            <span>邮箱</span>
            </div>
        </div>
        <div class="my-class">
            <div
            :style="{marginBottom:'30px'}"
            :class="['icon-hover',activeComp==='Set'?'backcolor':'']"
            @click="change('Set')"
            >
            <img
                data-v-43b09033
                class="classImg"
                src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/uc-index-set.png"
            />
            <span>设置</span>
            </div>
            <div class="icon-hover">
            <img
                    data-v-43b09033
                    class="classImg"
                    src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/uc-index-quit.png"
            />
            <span>退出</span>
            </div>
        </div>
        </div>
    </div>
    <div class="center">
        <keep-alive>
        <component :is="activeComp"></component>
        </keep-alive>
    </div>
    </div>
</template>

<script>
import HelloClass from "./HelloClass";
import HelloEmail from "./HelloEmail";
import Set from "./set";

export default {
    name: "left",
    data() {
    return {
        activeComp: "HelloClass",
    };
    },
    components: {
        HelloClass,
        HelloEmail,
        Set,
    },
    methods: {
    change(name) {
        this.activeComp = name;
    },
    },
};
</script>

<style>
.side {
    height: 100vh;
    width: 15.6vw;
    background-color: #141c3b;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
}

.img-container {
    margin-bottom: 30px;
}

.banyuanImg {
    width: 146px;
    height: 43px;
}

.user-icon {
    width: 78px;
    height: 78px;
    border-radius: 50%;
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

.backcolor {
    background-color: rgba(105, 100, 209, 0.5);
}

.center {
    position: fixed;
    top: 50px;
    left: 20%;
}
</style>