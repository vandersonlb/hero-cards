import Vue from "vue";
import App from "./App.vue";

import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

import VueRouter from "vue-router";
Vue.use(VueRouter);

import routes from "@/router";

const router = new VueRouter({
  routes,
  mode: "history",
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
