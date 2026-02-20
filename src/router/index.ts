import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home/Home.vue";
import Mods from "../pages/Mods/Mods.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/mods", name: "Mods", component: Mods },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
