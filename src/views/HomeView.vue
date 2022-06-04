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
