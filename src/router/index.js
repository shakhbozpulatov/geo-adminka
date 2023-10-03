import { createWebHistory, createRouter } from "vue-router";
import { routes } from "./routes";
import { checkRouteIsExist } from "./middleware";

const router = createRouter({
  history: createWebHistory(),
  mode: "history",
  routes,
});

router.beforeEach(checkRouteIsExist);

export default router;
