import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import router from './router';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBe9-5kLHi5-qEC6Md2Vc1CmhSFACW_KWY',
  authDomain: 'stockwatch-a5e83.firebaseapp.com',
  projectId: 'stockwatch-a5e83',
  storageBucket: 'stockwatch-a5e83.appspot.com',
  messagingSenderId: '236619010685',
  appId: '1:236619010685:web:d5da292f178f4fe39b5714',
  measurementId: 'G-6S85K4BXXM',
};

initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);

app.mount('#app');