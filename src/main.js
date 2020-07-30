import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import About from "./components/About.vue";
import Home from "./components/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/About",
    name: "About",
    component: About,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({ routes: routes });

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
