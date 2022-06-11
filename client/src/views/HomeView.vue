<template>
  <div>
    <NavBar></NavBar>
    <SearchBar @search="searchIndex()"></SearchBar>
    <TrendingStocks></TrendingStocks>
    <LineChart></LineChart>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NavBar from '../components/NavBar.vue';
import TrendingStocks from '../components/TrendingStocks.vue';
import SearchBar from '../components/SearchBar.vue';
import LineChart from '../components/StockChart.vue';

import { useStockStore } from '../stores/store.js';

const store = useStockStore();

// const symbvol = ref('');

// store.symbol = symbvol.value;

// function searchIndex(payload) {
//   store.symbol = payload;
// }
</script>
