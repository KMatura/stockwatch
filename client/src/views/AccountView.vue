<template>
  <div id="app" class="container d-flex flex-column align-items-center min-vh-100">
    <h1 class="my-3">{{ userStore.user.name }}'s Account</h1>
    <div class="mx-auto d-block">
      <router-link to="/">Home</router-link> | <router-link to="/logout">Logout</router-link>
    </div>
    <h5 v-if="secret.length > 0" class="my-3 my-3 text-danger">Your secret: {{ secret }}</h5>
    <p>Yes das wars</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { useUserStore } from '../stores/userStore.js';

let secret = ref('');
const userStore = useUserStore();

onMounted(async () => {
  const {data} = await axios.get(`/api/users/${userStore.user.id}/secret`);
  secret.value = data;
});
</script>