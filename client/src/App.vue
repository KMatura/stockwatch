<script setup>
import { RouterLink, createWebHistory, RouterView } from 'vue-router';
</script>

<template>
  <div>
    <RouterView/>
  </div>
</template>

<script>
import FooterView from './components/FooterView.vue';
import { onBeforeMount } from 'vue';
import { useRouter, useRoute } from 'vue-router';



export default {
  name: 'App',
  setup() {
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(() => {
      firebase.Auth().onAuthStateChanged(user => {
        if (!user) {
          router.push('/login');
        } else if (route.path == '/login' || route.path == '/register') {
          router.replace('/');
        }
      });
    })
  }
};

</script>

<style></style>
