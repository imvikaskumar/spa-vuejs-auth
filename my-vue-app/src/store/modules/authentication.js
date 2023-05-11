import axios from 'axios';
import { router } from '../../router/index';


export const authentication = {
    namespaced: true,

    state() {
        return {
            authUser: null,
            authLoginErrors: [],
            authRegisterErrors: [],
            isLoggedIn: false
        };
    },

    mutations: {
        setUser(state, payload){
            state.authUser = payload
        },

        setLoginError(state, payload){
            state.authLoginErrors = payload
        }
        ,
        setRegisterError(state, payload){
            state.authRegisterErrors = payload
        }
    },

    actions: {
        async getToken(){
            await axios.get('/sanctum/csrf-cookie');

        },

        async getUser(ctx){
            if(ctx.state.authUser == null){
                await ctx.dispatch('getToken')
                await axios.get('/api/user').then((res) => {
                    ctx.commit('setUser', res.data)
                });
            }
        },

        async handleLogin(ctx, payload){
            await ctx.dispatch('getToken')
            try {
                await axios.post('/login', {
                    email: payload.value.email,
                    password: payload.value.password
                });
                ctx.state.isLoggedIn = true
                router.push('/')
            } catch (error) {
                if(error.response.status == 422){
                    ctx.commit('setLoginError', error.response.data.errors)
                }
            }
        },

        async handleRegister(ctx, payload){
            await ctx.dispatch('getToken')
            try {
                await axios.post('/register', {
                    name: payload.value.name,
                    email: payload.value.email,
                    password: payload.value.password,
                    password_confirmation: payload.value.password_confirmation
                });
                ctx.state.isLoggedIn = true
                router.push('/')
                
            } catch (error) {
                if(error.response.status == 422){
                    ctx.commit('setRegisterError', error.response.data.errors)
                }
            }
        },

        async handleLogout(ctx){
            await ctx.dispatch('getToken')
            await axios.post('/logout');
            ctx.state.authUser = null
            ctx.state.authErrors = []
            ctx.state.isLoggedIn = false
            router.push('/')
        }
    },

    getters: {},
};
