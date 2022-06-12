<template>
  <div class="mb-32">
    <br />
    <h1 class="text-2xl font-bold leading-normal text-indigo-700 text-center">
      Trending today
    </h1>
    <div
      class="flex flex-wrap items-center justify-center gap-7 py-20 sm:px-6 px-4"
    >
      <div class="w-64 p-4 rounded border hover:shadow-lg bg-indigo-700">
        <div class="flex justify-center items-center flex-col">
          <div class="flex justify-center items-center flex-col mt-3">
            <div class="image">
              <img src="https://logo.clearbit.com/apple.com?size=80" />
            </div>
            <p class="text-sm font-medium leading-none text-white">AAPL</p>
            <p class="text-sm font-medium leading-none text-white">Apple</p>
          </div>
        </div>
        <div class="flex items-center justify-between mt-8">
          <h1 class="text-2xl font-semibold leading-normal text-white">
            {{ aapl.price }} $
          </h1>
          <p
            :class="{
              'text-red-500': aapl.day_change < 0,
              'text-green-600': aapl.day_change > 0,
            }"
          >
            {{ aapl.day_change }}%
          </p>
        </div>
                <div class="flex items-center justify-between mt-8">
          <p class="text-white">24h High:</p><p class="text-white">{{aapl.day_high}}</p>
        </div>
        <div class="flex items-center justify-between mt-8 mb-6">
          <p class="text-white">24h Low:</p><p class="text-white">{{aapl.day_low}}</p>      
        </div>
      </div>
      <div class="w-64 p-4 rounded border hover:shadow-lg bg-indigo-700">
        <div class="flex justify-center items-center flex-col">
          <div class="flex justify-center items-center flex-col mt-3">
            <div class="image">
              <img src="https://logo.clearbit.com/microsoft.com?size=80" />
            </div>
            <p class="text-sm font-medium leading-none text-white">MSFT</p>
            <p class="text-sm font-medium leading-none text-white mt-1">
              Microsoft
            </p>
          </div>
        </div>
        <div class="flex items-center justify-between mt-8">
          <h1 class="text-2xl font-semibold leading-normal text-white">
            {{ msft.price }} $
          </h1>
          <p
            :class="{
              'text-red-500': msft.day_change < 0,
              'text-green-600': msft.day_change > 0,
            }"
          >
            {{ msft.day_change }}%
          </p>
        </div>
        <div class="flex items-center justify-between mt-8">
          <p class="text-white">24h High:</p>
          <p class="text-white">{{ msft.day_high }}</p>
        </div>
        <div class="flex items-center justify-between mt-8 mb-6">
          <p class="text-white">24h Low:</p>
          <p class="text-white">{{ msft.day_low }}</p>
        </div>
      </div>
      <div class="w-64 p-4 rounded border hover:shadow-lg bg-indigo-700">
        <div class="flex justify-center items-center flex-col">
          <div class="flex justify-center items-center flex-col mt-3">
            <div class="image">
              <img
                class="my-auto"
                src="https://logo.clearbit.com/google.com?size=80"
              />
            </div>
            <p class="text-sm font-medium leading-none text-white">GOOGL</p>
            <p class="text-sm font-medium leading-none text-white">
              Alphabet Inc Class A
            </p>
          </div>
        </div>
        <div class="flex items-center justify-between mt-8">
          <h1 class="text-2xl font-semibold leading-normal text-white">
            {{ googl.price }} $
          </h1>
          <p
            :class="{
              'text-red-500': googl.day_change < 0,
              'text-green-600': googl.day_change > 0,
            }"
          >
            {{ googl.day_change }}%
          </p>
        </div>
        <div class="flex items-center justify-between mt-8">
          <p class="text-white">24h High:</p>
          <p class="text-white">{{ googl.day_high }}</p>
        </div>
        <div class="flex items-center justify-between mt-8 mb-6">
          <p class="text-white">24h Low:</p>
          <p class="text-white">{{ googl.day_low }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import get24h from '../getData.js';
import ChartModal from './ChartModal.vue';

let aapl = ref('');
let msft = ref('');
let googl = ref('');

// onMounted(async () => {
//   const { data } = await axios.get(
//     'https://api.stockdata.org/v1/data/quote?symbols=AAPL%2CMSFT%2CGOOGL&api_token=eJLUoUVC234SV2oMXYJYNj8SWxehg0B8HNJj41uD'
//   );

onMounted(async () => {
  const { data } = await axios.get(
    'https://api.stockdata.org/v1/data/quote?symbols=AAPL%2CMSFT%2CGOOGL&api_token=cx6vIPYVwWq3TbwrbSdY3nMCulfjF4syxr0zyFAL'
  );

  console.log(data);
  aapl.value = data.data[0];
  msft.value = data.data[1];
  googl.value = data.data[2];
});
</script>
<style>
.image {
  height: 5rem;
  justify-content: center;
}
</style>
