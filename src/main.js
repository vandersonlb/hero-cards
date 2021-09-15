import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import VueRouter from "vue-router";
import routes from "@/router";
import vuetify from "./plugins/vuetify";

Vue.use(VueAxios, axios);
axios.defaults.baseURL = 'http://localhost:3000/';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history",
});

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
