<template>
  <div>
    <NavBar></NavBar>
    <TrendingStocks :intraday24h="data"></TrendingStocks>
    <!-- <LineChart></LineChart> -->
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import TrendingStocks from '../components/TrendingStocks.vue';
// import LineChart from '../components/LineChart.vue';
</script>