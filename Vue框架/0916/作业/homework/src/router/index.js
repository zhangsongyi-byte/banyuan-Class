import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Code from "../views/code.vue";
import Interest from "../views/interest.vue";
import Lesson from "../views/lesson.vue";
import Content from "../views/content.vue";



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/code",
    name: "code",
    component: Code
  },
  {
    path: "/lesson",
    name: "lesson",
    component: Lesson
  },
  {
    path: "/interest",
    name: "interest",
    component: Interest
  },
  {
    path: "/content",
    name: "content",
    component: Content
  },
];

const router = new VueRouter({
  mode: "history",
  base: '/',
  routes
});

export default router;
