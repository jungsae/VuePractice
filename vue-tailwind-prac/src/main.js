import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueRouter from 'vue-router'
var router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        { path: '/home', component: HomeComponent }
    ]
})


createApp(App).use(router).mount('#app')
