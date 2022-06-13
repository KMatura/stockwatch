<template>
  <div>
    <NavBar></NavBar>
    <h1>{{ secret }}</h1>
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
