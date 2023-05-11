import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from '../components/layouts/DefaultLayout.vue';
import GuestLayout from '../components/layouts/GuestLayout.vue';
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Home from "../components/Home.vue";
import Post from "../components/Post.vue";
import { store } from '../store/index';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: DefaultLayout,
            children: [
                {
                    path: "/",
                    name: "home",
                    component: Home,
                    meta: { requiresAuth: true },
                },
                {
                    path: "/posts",
                    name: "post",
                    component: Post,
                    meta: { requiresAuth: true },
                },
            ],
        },
        {
            path: "/",
            component: GuestLayout,
            children: [
                {
                    path: "/login",
                    name: "login",
                    component: Login,
                    meta: { guest: true },
                },
                {
                    path: "/register",
                    name: "register",
                    component: Register,
                    meta: { guest: true },
                },
            ],
        },   
    ],
});

export { router };
