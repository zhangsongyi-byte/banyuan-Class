import Vue from "vue";
/* 引入路由 */
import VueRouter from "vue-router"
/* 使用路由 */
Vue.use(VueRouter);

/* 引入申明的页面 */
import Home from "../pages/home.vue"
import About from "../pages/about.vue"
import Contact from "../pages/contact.vue"
import User from "../pages/user.vue"
import Test from "../pages/test.vue"
import Slide from "../pages/slide.vue"
import Nav from "../pages/nav.vue"
import Footer from "../pages/footer.vue"

/* 定义路由表 */
const routes=[
    {
        path:'/',
        name:'router',
        // redirect:'/home'
    },
    {
        path:'/home',
        name:'home',
        components:{
            default:Home,
            slide:Slide,
            nav:Nav,
            footer:Footer
        }
        /* 重定向 */
        // redirect:'/test'
    },
    {
        path:'/about',
        component:About,
        name:'about'
    },
    {
        path:'/contact',
        component:Contact,
        name:'contact',
        /* 别名 */
        alias:'/ccc'
    },
    {
        path:'/user/:id/abc/:ld',
        component:User,
        name:'user'
    },
    {
        path:'/test',
        component:Test,
        name:'test'
    },
    
]


const router= new VueRouter({
    /* hash老式写法，localhost:8080/#home */
    mode:"history",
    /* 网站基于的根路径 */
    base:"/",
    routes
});

export default router;