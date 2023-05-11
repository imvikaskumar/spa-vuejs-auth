<template>
    <div class="container">
        <template v-if="user">
            <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <div class="col-md-3 mb-2 mb-md-0">
                    <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
                    <svg class="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
                    </a>
                </div>
    
                <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><router-link :to="{name:'home'}" active-class="nav-link px-2 link-primary">Home</router-link></li>
                    <li><router-link :to="{name:'post'}" active-class="nav-link px-2 link-primary">Latest Posts</router-link></li>
                </ul>
    
                <div class="col-md-3 text-end">
                    <button @click="logout" type="button" class="btn btn-outline-primary me-2">Logout</button>
                </div>
            </header>
        </template>
        <template v-else>
            <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <div class="col-md-3 mb-2 mb-md-0">
                    <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
                    <svg class="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
                    </a>
                </div>
    
                <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <router-link :to="{name:'login'}"  active-class="nav-link px-2 link-primary">Login</router-link>&nbsp;
                    <router-link :to="{name:'register'}" active-class="nav-link px-2 link-primary">Sign-up</router-link>
                </ul>
    
                <div class="col-md-3 text-end">
                    
                </div>
            </header>
        </template>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
    setup(){
        const store = useStore();
        
        const user = computed(() => store.state.authentication.authUser);

        const logout = () => {
            store.dispatch('authentication/handleLogout');
        }

        return {
            user,
            logout
        }
    }
}
</script>
