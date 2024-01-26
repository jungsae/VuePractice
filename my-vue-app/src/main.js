import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from 'axios';

axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

createApp(App).mount('#app')
