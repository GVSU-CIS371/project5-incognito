import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "./components/Home.vue";
import GroceriesView from "./components/Groceries.vue";
const routes = [
  {
    path: "/",
    name: "home",
    props: true,
    component: HomeView,
  },
  {
    path: "/groceries",
    name: "groceries",
    props: true,
    component: GroceriesView,
  },
  // you need to add more routess here
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
