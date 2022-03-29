<template>
  <div>
    <NavBar></NavBar>
    <!-- <h6 class="text-center fs-1">Chart...</h6>
    <TrendingStocks></TrendingStocks>
    <LineChart></LineChart> -->
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    NavBar
}
};
</script>

<style></style>
