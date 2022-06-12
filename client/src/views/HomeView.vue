<template>
  <div>
    <NavBar></NavBar>
    <SearchBar></SearchBar>
    <TrendingStocks></TrendingStocks>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NavBar from '../components/NavBar.vue';
import TrendingStocks from '../components/TrendingStocks.vue';
import SearchBar from '../components/SearchBar.vue';
import LineChart from '../components/StockChart.vue';
</script>

<style>
TrendingStocks{
  margin-bottom: 10rem;
}
</style>
