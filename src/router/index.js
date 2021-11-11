import { createRouter, createWebHashHistory } from "vue-router";

import Home from "views/home/Home.vue";
import Category from "views/home/Home.vue";
import Cart from "views/home/Home.vue";
import Profile from "views/home/Home.vue";

const routes = [
  { path: "", redirect: "/home" },
  { path: "/home", component: Home },
  { path: "/category", component: Category },
  { path: "/cart", component: Cart },
  { path: "/profile", component: Profile },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
