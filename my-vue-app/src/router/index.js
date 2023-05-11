import { createRouter, createWebHashHistory } from "vue-router";
import DefaultLayout from '../components/layouts/DefaultLayout.vue';
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Home from "../components/Home.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: DefaultLayout,
            children: [
                {
                    path: "/",
                    name: "home",
                    component: Home,
                },
                {
                    path: "/login",
                    name: "login",
                    component: Login,
                },
                {
                    path: "/register",
                    name: "register",
                    component: Register,
                },
            ],
        },
    ],
});

export { router };
