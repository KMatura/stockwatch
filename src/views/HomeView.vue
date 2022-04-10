<template>
  <div>
    <NavBar></NavBar>
    <TrendingStocks :intraday24h="data"></TrendingStocks>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import TrendingStocks from '../components/TrendingStocks.vue';
</script>