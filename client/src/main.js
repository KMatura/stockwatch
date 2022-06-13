import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import router from './router';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import axios from 'axios';

const app = createApp(App);
app.use(router);

const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);

axios.defaults.baseURL = 'http://localhost:3000';

app.use(pinia);
app.mount('#app');