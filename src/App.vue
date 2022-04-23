<script setup>
import { RouterLink, createWebHistory, RouterView } from 'vue-router';
</script>

<template>
  <div>
    <RouterView/>
    <FooterView></FooterView>
    {{intraday24h}}
  </div>
</template>

<script>
import FooterView from './components/FooterView.vue';
import { onBeforeMount } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import firebase from 'firebase/compat';

import get24h from './getData.js';

const intraday24h = await get24h();
console.log(intraday24h);

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(() => {
      firebase.Auth().onAuthStateChanged(user => {
        if (!user) {
          router.push('/login');
        } else if (route.path == '/login' || route.path == '/register') {
          router.replace('/');
        }
      });
    })
  }
};

const createChart = async () => {
  const resdata = await axios.get(
    'https://api.stockdata.org/v1/data/eod?symbols=AAPL&api_token=cx6vIPYVwWq3TbwrbSdY3nMCulfjF4syxr0zyFAL',
  );

  const labels = [
    resdata['data']['data']['6']['date'],
    resdata['data']['data']['5']['date'],
    resdata['data']['data']['4']['date'],
    resdata['data']['data']['3']['date'],
    resdata['data']['data']['2']['date'],
    resdata['data']['data']['1']['date'],
    resdata['data']['data']['0']['date'],
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: resdata['data']['meta']['name'],
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [
          resdata['data']['data']['0']['close'],
          resdata['data']['data']['1']['close'],
          resdata['data']['data']['2']['close'],
          resdata['data']['data']['3']['close'],
          resdata['data']['data']['4']['close'],
          resdata['data']['data']['5']['close'],
          resdata['data']['data']['6']['close'],
        ],
      },
    ],
  };

  const config = {
    type: 'line',
    data: data,
    options: {},
  };
  const ibmchart = new Chart(document.getElementById('ibmchart'), config);
  for (let o in resdata['data']['Monthly Time Series']) {
    console.log(o);
  }
};
</script>

<style></style>
