<template>
    <div>
        <h1>首页</h1>
        <button @click="jumpAbout">跳转关于我们params</button>
        <button @click="jumpAboutQuery">跳转关于我们query</button>
        <button @click="jumpUser">跳转user</button>
        <div>
            <input type="text" v-model="input1" />
            <button @click="goBack">后退</button>
        </div>
        <div>
            <input type="text" v-model="input2" />
            <button @click="goPush">前进</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "home",
    data() {
        return {
            input1: -1,
            input2: 1
        };
    },
    methods: {
        jumpAbout() {
            /* push方式跳转页面 */
            this.$router.push({
            // path:'/about'
            name: "about",
            /* 跳转页面的时候传参，这种方式不会保留参数，页面一刷新，数据就会消失 */
            params: {
                a: "///",
                id: 34,
                b: {
                    name: "b",
                    id: 23
                },
                name: "home传参到about"
            }
        });

        /* replace方式，直接将上一层路由替换掉，返回上一层时找不到替换前的页面*/
        // this.$router.replace({
        //     path:'/about'
        // })
        /* go方式，-1是后退一个页面，1是前进一个页面*/
        // this.$router.go(-2)

        },
        goBack() {
        this.$router.go(this.input1);
        },
        goPush() {
        this.$router.go(this.input2);
        },

        jumpAboutQuery() {
            /* query传参方式，刷新页面的时候数据不会消失 */
            this.$router.push({
                name: "about",
                query: {
                name: "web",
                id: 33
                }
        });
        },
        jumpUser() {
        this.$router.push({
            /* 这种传参方式，参数的名字是固定的 */
            path: "/user/2/abc/45"
        });
        }
    }
    };
</script>

<style lang="scss">

</style>