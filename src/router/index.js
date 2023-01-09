import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/views/Testes.vue"),
    name: "home",
  },
  {
    path: "/register",
    component: () => import("@/views/Register.vue"),
    name: "register",
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;