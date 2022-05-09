<template>
  <div>
    <NavBar></NavBar>
    <TrendingStocks></TrendingStocks>
    <SearchBar></SearchBar>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import TrendingStocks from '../components/TrendingStocks.vue';
import SearchBar from '../components/SearchBar.vue';
</script>