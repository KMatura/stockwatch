<template>
  <body>
    <br>
    <h1 class="text-2xl text-3xl font-bold leading-normal text-indigo-700 text-center">Trending today</h1>
    <div
      class="flex flex-wrap items-center justify-center gap-7 py-20 sm:px-6 px-4"
    >
      <div class="w-64 p-4 rounded border hover:shadow-lg bg-indigo-700">
        <div class="flex justify-center items-center flex-col">
          <div class="flex justify-center items-center flex-col mt-3">
            <p class="text-sm font-medium leading-none text-white">AAPL</p>
            <p class="text-sm font-medium leading-none text-white">Apple</p>
          </div>
        </div>
        <div class="flex items-center justify-between mt-8">
          <h1 class="text-2xl font-semibold leading-normal text-white">
            {{ aapl }} $
          </h1>
          <div class="p-1 flex justify-between">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 14V2"
                stroke="#059669"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 4L8 2L6 4"
                stroke="#059669"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 14H10"
                stroke="#059669"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p class="text-xs leading-3 text-green-700">2.90%</p>
          </div>
        </div>
        <div class="h-16 mt-14">
          <canvas
            height="56"
            tabindex="0"
            class="focus:outline-none"
            aria-label="graph"
            role="img"
            id="myChart3"
          ></canvas>
        </div>
        <div class="w-56 h-9">
          <button
            role="button"
            aria-label="message"
            class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 hover:bg-gray-100 flex items-center justify-center flex-1 h-full py-3 px-20 bg-gray-50 border rounded border-gray-200"
          >
            <p class="text-sm font-medium leading-none text-indigo-700">Show</p>
          </button>
        </div>
      </div>
      <div class="w-64 p-4 rounded border hover:shadow-lg bg-indigo-700">
        <div class="flex justify-center items-center flex-col">
          <div class="flex justify-center items-center flex-col mt-3">
            <p class="text-sm font-medium leading-none text-white">MSFT</p>
            <p class="text-sm font-medium leading-none text-white mt-1">
              Microsoft
            </p>
          </div>
        </div>
        <div class="flex items-center justify-between mt-8">
          <h1 class="text-2xl font-semibold leading-normal text-white">
            {{ msft }} $
          </h1>
          <div class="p-1 flex justify-between">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 14V2"
                stroke="#059669"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 4L8 2L6 4"
                stroke="#059669"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 14H10"
                stroke="#059669"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p class="text-xs leading-3 text-green-700">1.98%</p>
          </div>
        </div>
        <div class="h-16 mt-14">
          <canvas
            height="56"
            tabindex="0"
            class="focus:outline-none"
            aria-label="graph"
            role="img"
            id="myChart2"
          ></canvas>
        </div>
        <div class="w-56 h-9">
          <button
            role="button"
            aria-label="message"
            class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 hover:bg-gray-100 flex items-center justify-center flex-1 h-full py-3 px-20 bg-gray-50 border rounded border-gray-200"
          >
            <p class="text-sm font-medium leading-none text-indigo-700">Show</p>
          </button>
        </div>
      </div>
      <div class="w-64 p-4 rounded border hover:shadow-lg bg-indigo-700">
        <div class="flex justify-center items-center flex-col">
          <div class="flex justify-center items-center flex-col mt-3">
            <p class="text-sm font-medium leading-none text-white">GOOGL</p>
            <p class="text-sm font-medium leading-none text-white">
              Alphabet Inc Class A
            </p>
          </div>
        </div>
        <div class="flex items-center justify-between mt-8">
          <h1 class="text-2xl font-semibold leading-normal text-white">
            {{ googl }} $
          </h1>
          <div class="p-1 flex justify-between">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 14V2"
                stroke="#059669"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 4L8 2L6 4"
                stroke="#059669"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 14H10"
                stroke="#059669"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p class="text-xs leading-3 text-green-700">2.90%</p>
          </div>
        </div>
        <div class="h-16 mt-14">
          <canvas
            height="56"
            tabindex="0"
            class="focus:outline-none"
            aria-label="graph"
            role="img"
            id="myChart3"
          ></canvas>
        </div>
          <ChartModal></ChartModal>
        </div>
      </div>
  </body>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import get24h from '../getData.js';
import axios from 'axios';
import ChartModal from './ChartModal.vue';

let aapl = ref('');
let msft = ref('');
let googl = ref('');

// onMounted(async () => {
//   const { data } = await axios.get(
//     'https://api.stockdata.org/v1/data/quote?symbols=AAPL%2CMSFT%2CGOOGL&api_token=eJLUoUVC234SV2oMXYJYNj8SWxehg0B8HNJj41uD'
//   );

onMounted(async () => {
  // const { data } = await axios.get(
  //   'https://api.stockdata.org/v1/data/quote?symbols=AAPL%2CMSFT%2CGOOGL&api_token=eJLUoUVC234SV2oMXYJYNj8SWxehg0B8HNJj41uD'
  // );

  console.log(data);
  aapl.value = data.data[0].price;
  msft.value = data.data[1].price;
  googl.value = data.data[2].price;
});

</script>

<style scoped></style>
