<<<<<<< HEAD:src/views/HomeView.vue
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

import useStockStore from '../stores/store.js';

const store = useStockStore();

store.symbol = symbvol.value

const symbvol = ref('');

function searchIndex(payload) {
  store.symbol = payload
</script>
=======
<template>
  <div>
    <NavBar></NavBar>
    <SearchBar @search="searchIndex()"></SearchBar>
    <TrendingStocks></TrendingStocks>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NavBar from '../components/NavBar.vue';
import TrendingStocks from '../components/TrendingStocks.vue';
import SearchBar from '../components/SearchBar.vue';
import LineChart from '../components/StockChart.vue';

function searchIndex(payload) {
  symbvol.value = payload;
}
</script>
>>>>>>> 53c05bb206e7ba70e8f50328c5de40b949afc061:client/src/views/HomeView.vue
