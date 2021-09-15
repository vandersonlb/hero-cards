export default [
  {
    path: "/",
    component: () => import("@/views/Crud.vue"),
    name: "home",
  },
  {
    path: "/register",
    component: () => import("@/views/Register.vue"),
    name: "register",
  },
];
