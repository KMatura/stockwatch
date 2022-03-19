<template>
  <div>
    <NavBar></NavBar>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    NavBar,
  },
  async created(){
    const {data} = await axios.get("https://api.stockdata.org/v1/data/quote HTTP/1.");
    console.log(data);
  }
};
</script>

<style></style>
