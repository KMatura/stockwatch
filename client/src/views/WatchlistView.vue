<template>
  <div>
    <NavBar></NavBar>
    <br>
    <h3 class="text-5xl text-center font-bold text-blue-500">{{ userStore.user.name }}'s Watchlist</h3>
    <h1 v-if="secret.length > 0">{{ secret }}</h1>
    <ListTable></ListTable>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import ListTable from '../components/ListTable.vue';
import { useUserStore } from '@/stores/UserStore.js';
import { onMounted, ref } from 'vue';
import axios from 'axios';

const userStore = useUserStore();

let secret = ref('');

onMounted(async () => {
  const { data } = await axios.get(`http://localhost:3000/api/user/${userStore.user.id}secret`);
  secret.value = data;
});
</script>
