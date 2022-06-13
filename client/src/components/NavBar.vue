<script setup>
import { RouterLink, createWebHistory, RouterView } from 'vue-router';
</script>

<template>
  <div class="bg-white">
    <nav class="2xl:mx-auto sm:py-4 sm:px-7 py-5 px-4">
      <div class="flex justify-between">
        <div class="hidden sm:flex flex-row items-center space-x-6">
          <a href="#" class="font-bold text-blue-600 hover:text-blue-700">
            <RouterLink to="/Watchlist">Watchlist</RouterLink>
          </a>
          <a href="#" class="font-bold text-blue-600 hover:text-blue-700">
            <RouterLink to="/AboutUs">About us</RouterLink>
          </a>
          <a href="#" class="font-bold text-blue-600 hover:text-blue-700">
            <RouterLink to="/faq">FAQ</RouterLink>
          </a>
        </div>
        <div class="flex space-x-3 items-center" href="#">
            <img src="../assets/stockwatch_logo.png" class="w-14" alt="StockWatchLogo" />
            <h1 class="font-bold text-2xl leading-6 text-blue-600" href="#">
              <RouterLink to="/">StockWatch</RouterLink>
            </h1>
        </div>
        <div class="hidden sm:flex flex-row space-x-4">
          <button
            class="rounded-md flex space-x-2 w-24 h-10 font-bold text-sm leading-3 text-blue-600 bg-white border border-blue-600 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center"
          >
            <RouterLink to="/register">Register</RouterLink>
          </button>
          <button
            class="rounded-md flex space-x-2 w-24 h-10 font-bold text-sm leading-3 text-white bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:bg-blue-600 hover:bg-blue-700 duration-150 justify-center items-center"
          >
            <RouterLink to="/login">Login</RouterLink>
          </button>
        </div>

        <div
          id="bgIcon"
          @click="toggleMenu()"
          class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 flex justify-center items-center sm:hidden cursor-pointer"
        >
          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg6.svg" alt="burger" />
          <img
            class="hidden"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg7.svg"
            alt="cross"
          />
        </div>
      </div>

      <div id="MobileNavigation" class="hidden sm:hidden mt-4 mx-auto">
        <div class="flex flex-row items-center justify-center space-x-6">
          <a href="#" class="font-medium text-blue-600 hover:text-blue-700">
            <RouterLink to="/watchlist">Watchlist</RouterLink>
          </a>
          <a href="#" class="font-medium text-blue-600 hover:text-blue-700">
            <RouterLink to="/AboutUs">About us</RouterLink>
          </a>
          <a href="#" class="font-medium text-blue-600 hover:text-blue-00">
            <RouterLink to="/faq">FAQ</RouterLink>
          </a>
        </div>
        <div class="flex flex-col gap-4 mt-4 w-80 mx-auto">
          <button
            class="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-blue-600 bg-blue-600 bg-opacity-0 hover:opacity-100 duration-100 border border-blue-600 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center"
          >
            <RouterLink to="/register">Sign Up</RouterLink>
          </button>
          <button
            class="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 focus:bg-blue-600 hover:bg-blue-600 duration-150 justify-center items-center"
          >
            <RouterLink to="/login">Sign In</RouterLink>
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggleMenu() {
      var icon = document.getElementById('bgIcon');
      const childEle = icon.children;

      childEle[0].classList.toggle('hidden');
      childEle[1].classList.toggle('hidden');

      var mobileNav = document.getElementById('MobileNavigation').classList.toggle('hidden');
    },
  },
};
</script>

<style></style>
