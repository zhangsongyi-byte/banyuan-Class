import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Index from "../views/index.vue";
// import Login from "../views/login.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/about/:id",
    name: "About",
    component:About
  },
  {
    path: "/home",
    name: "Home",
    component:Home
  },
  {
    path: "/login",
    name: "Login",
    component:()=>import('../views/login'),
    // beforeEnter: (to, from, next) => {
    //   console.log('login page',to,from)
    //   next()
    // }
  },
  {
    path: "/user",
    name: "User",
    component:()=>import('../views/user/index.vue'),
    children:[
      {
        path:"myclass",
        name:"myClass",
        component:()=>import('../views/user/myclass.vue')
      },
      {
        path:"setting",
        name:"Setting",
        component:()=>import('../views/user/setting.vue')
      },
      {
        path:'email',
        name:'Email',
        component:()=>import('../views/user/email.vue')
      }
    ]
  },
  {
    path:'/client',
    name:'Client',
    component:()=>import('../views/client/index.vue'),
    children:[
      {
        path:'login',
        name:'Login',
        component:()=>import('../views/client/login.vue')
      },
      {
        path:'regist',
        name:'Regist',
        component:()=>import('../views/client/regist.vue')
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// router.beforeEach((to,from,next)=>{
  // const isLogin=localStorage.getItem('isLogin') || false;
  // console.log("from",from)
  // console.log("to",to)
  // if(to.name === 'About'){
  //   if(!isLogin){
  //     console.log('你没登录')
  //     next({
  //       name:'Login'
  //     })
  //     return
  //   }else{
  //     console.log('你已经登录，可以进入about页面')
  //     next()
  //     return
  //   }
  // }
  // next()
// })

router.beforeResolve((to,from,next)=>{
  console.log('beforeResolve')
  next()
})

export default router;
