<template>
  <div>
    <NavBar></NavBar>
    <SearchBar @search="searchIndex()"></SearchBar>
    <TrendingStocks></TrendingStocks>
    <!-- <LineChart :symbol="symbvol"></LineChart> -->
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NavBar from '../components/NavBar.vue';
import TrendingStocks from '../components/TrendingStocks.vue';
import SearchBar from '../components/SearchBar.vue';
import LineChart from '../components/StockChart.vue';

const symbvol = ref('');

function searchIndex(payload) {
  symbvol.value = payload;
}
</script>
