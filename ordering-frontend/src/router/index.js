import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "@/components/HomeComponent.vue";
import MemberList from "@/views/MemberList";
import LoginComponent from "@/views/LoginComponent";

const routes = [
  {
    path: "/",
    name: "HOME",
    component: HomeComponent,
  },
  {
    path: "/members",
    name: "MemberList",
    component: MemberList,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
