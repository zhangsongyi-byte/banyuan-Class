import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/regist",
    name: "Regist",
    component: ()=>import("../views/regist")
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/login.vue")
  },
  {
    path:'/homepage',
    name:'HomePage',
    component:()=>import("../views/homepage.vue"),
    children:[
      {
        path:'center',
        name:"Center",
        component
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
