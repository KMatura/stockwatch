<template>
  <div>
    <NavBar></NavBar>
    <TrendingStocks></TrendingStocks>
    <LineChart></LineChart>
    <SearchBar></SearchBar>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import TrendingStocks from '../components/TrendingStocks.vue';
import LineChart from '../components/LineChart.vue';
import SearchBar from '../components/SearchBar.vue';
</script>