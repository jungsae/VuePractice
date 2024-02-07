import { createRouter, createWebHistory } from "vue-router";
// export default인 경우에는 {} 필요없고, 여러개의 요소가 있을 경우에는 {} 필요.
import { memberRoutes } from "./memberRouter.js";
import { orderRoutes } from "./orderRouter.js";

const routes = [
  {
    // url경로 지정
    path: "/",
    // 이 라우터의 이름
    name: "home",
    component: () => import("@/components/HomeComponent.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/LoginComponent.vue"),
  },
  // ...은 스프레드 연산자로 불린다.
  // 주로, 배열요소를 다른 배열요소에 합할때 사용
  ...memberRoutes,
  ...orderRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
