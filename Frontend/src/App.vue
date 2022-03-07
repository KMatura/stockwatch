<template>
</template>

<script>
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import VueAxios from 'vue-axios';

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
