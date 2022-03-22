<template>
  <div>
    <NavBar></NavBar>
    <h6 class="text-center fs-1">Chart...</h6>
    <TrendingStocks></TrendingStocks>
    <LineChart></LineChart>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import TrendingStocks from './components/TrendingStocks.vue';
import LineChart from './components/LineChart.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    NavBar,
    LineChart
},
  data(){

  },
  async created(){
    const {data} = await axios.get("https://api.stockdata.org/v1/data/quote?symbols=AAPL,TSLA,MSFT&api_token=eJLUoUVC234SV2oMXYJYNj8SWxehg0B8HNJj41uD");
    console.log(data);
  }
};
</script>

<style></style>
