import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/index.css'
import store from "./store";

const app = createApp(App)

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

app.use(store)
app.use(router)
app.mount('#app')