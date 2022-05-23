<script setup>
import { RouterLink, createWebHistory, RouterView } from 'vue-router';
</script>

<template>
  <div>
    <RouterView/>
    <FooterView></FooterView>
    <!-- <FooterView class="content-center"></FooterView> -->
  </div>
</template>

<script>
import FooterView from './components/FooterView.vue';
import { onBeforeMount } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import firebase from 'firebase/compat';



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
