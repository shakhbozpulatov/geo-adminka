export const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/dashboard",
    component: () => import("@/layout/TheDefault.vue"),
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("@/pages/PHomeView.vue"),
      },
    ],
  },
  {
    // the 404 route, when none of the above matches
    path: "/404",
    name: "404",
    component: () => import("@/pages/PError.vue"),
  },
  {
    path: "/500",
    name: "500",
    component: () => import("@/pages/PError.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/pages/PError.vue"),
  },
];
