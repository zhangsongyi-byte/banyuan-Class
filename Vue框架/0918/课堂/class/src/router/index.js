import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: ()=>import('../views/contact.vue'),
    meta:{
      isShowHeader:false,
      isShowFooter:true,
      title:'联系我们'
    }
  },
  {
    path: "/join",
    name: "Join",
    component: ()=>import('../views/join.vue'),
    meta:{
      isShowHeader:true,
      isShowFooter:false,
      title:'加入我们'
    }
  },
  {
    path: "/club",
    name: "Club",
    component: ()=>import('../views/club.vue'),
    meta:{
      title:'高校俱乐部'
    }
  },
  {
    path: "/clubdetail",
    name: "ClubDetail",
    component: ()=>import('../views/clubDetail.vue'),
    meta:{
      isShowHeader:false,
      isShowFooter:false,
      title:'俱乐部详情页'
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
