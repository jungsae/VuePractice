<template>
    <div>
        <h1>healthCheck</h1>
        <form @submit.prevent="healthCheck">
            <button type="submit">Ping!</button>
        </form>
    </div>
    <div>
        <h1>회원가입</h1>
        <form @submit.prevent="signUp">
            <input type="email" v-model="email" placeholder="email">
            <input type="password" v-model="password" placeholder="Password">
            <button type="submit">signUp</button>
        </form>
    </div>
    <div>
        <h1>로그인</h1>
        <form @submit.prevent="Login">
            <input type="text" v-model="email" placeholder="Username">
            <input type="password" v-model="password" placeholder="Password">
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        async healthCheck() {
            try {
                const response = await axios.get('http://192.168.0.13:8080/ping');
                console.log(response);
            } catch (error) {
                console.error("Health-Check error:", error);
            }
        },
        async signUp() {
            try {
                console.log(this.email)
                console.log(this.password)
                const request = await axios.post('http://192.168.0.13:8080/sign-up', {
                    email: this.email,
                    password: this.password
                });
                console.log(request)
                console.log(request.data)

                // localStorage.setItem('token', response.data.Authorization);
            } catch (error) {
                console.error("Sign-up error:", error);
            }
        },
        async Login() {
            try {
                // const response = await axios.get('http://localhost:8080/author/4/circle/dto');
                const request = await axios.post('http://192.168.0.13:8080/login');
                console.log(this.eamil)
                console.log(this.password)

                console.log(request);
                console.log(response.data);

                this.username = response.data.name;
                this.password = response.data.password;

                console.log(this.username)
                console.log(this.password)
            } catch (e) {
                console.log("Error fetching posts:", e);
            }
        },
    }
};
</script>
