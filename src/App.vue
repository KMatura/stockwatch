<script setup>
import { RouterLink, createWebHistory, RouterView } from 'vue-router';
</script>

<template>
  <div>
    <div><RouterView /></div>
    <RouterLink to="/" class="nav-link">Home</RouterLink>
    <RouterLink to="/settings" class="nav-link">Settings</RouterLink>
    <RouterLink to="/dashboard" class="nav-link">Dashboard</RouterLink>
    <h6 class="text-center fs-1">Chart...</h6>
    <!-- <div>
      <div class="ibmChart">
        <canas id="ibmChart"></canas>
      </div>
    </div> -->
    <!-- <h6 class="text-center fs-1">Chart...</h6>
    <TrendingStocks></TrendingStocks>
    <LineChart></LineChart> -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  components: {},
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
