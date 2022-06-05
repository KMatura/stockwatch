import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import router from './router';
import { createPinia } from 'pinia';
import axios from 'axios';

const app = createApp(App);

axios.defaults.baseURL = 'http://localhost:8000';

app.use(router);
app.use(createPinia());

app.mount('#app');