import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Afiliados from "../views/Afiliados.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/afiliados",
    name: "Afiliados",
    component: Afiliados,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
