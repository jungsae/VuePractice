import { createApp } from "vue";
import App from "./App.vue";
import { router } from "@/router/index";
import "@/assets/css/bootstrap.min.css";
import axios from "axios";

// index.html의 id인 app에 마운트가 되도록 하는 코드
// createApp(App).mount('#app')
const app = createApp(App);
// 401 응답의 경우 interceptor를 통해 공통적으로 토큰 제거 후 로그아웃 처리
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.clear();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
// axios를 전역적으로 사용
app.config.globalProperties.$axios = axios;
app.use(router);
app.mount("#app");
