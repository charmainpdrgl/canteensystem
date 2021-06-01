import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/bootstrap.css';
import "../src/assets/styles.css";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

createApp(App).use(router).mount('#app')
