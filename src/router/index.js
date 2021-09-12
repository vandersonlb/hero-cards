export default [
  {
    path: "/",
    component: () => import("@/views/Crud.vue"),
    name: "crud",
  },
  {
    path: "/cadastro",
    component: () => import("@/views/Register.vue"),
    name: "register",
  },
];
