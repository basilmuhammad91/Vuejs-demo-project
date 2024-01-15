
import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/index.css';
import store from "./store";

// Creating a Vue app instance
const app = createApp(App);

// Navigation guard to check if the route requires authentication
router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (store.getters.isAuthenticated) {
            next(); 
            return;
        }
        next("/login");
    } else {
        next(); 
    }
});

// Using Vuex store and Vue Router in the Vue app
app.use(store);
app.use(router);

// Mounting the Vue app to the DOM element with id 'app'
app.mount('#app');
