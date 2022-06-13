<template>
  <div>
    <NavBar></NavBar>
    <br />
    <h3 class="text-5xl text-center font-bold text-blue-500">
      {{ userStore.user.name }}'s Watchlist
    </h3>
    <div class="mx-auto container bg-white dark:bg-gray-800 dark:bg-gray-800 shadow rounded">
      <!-- <h1 class="text-2xl font-bold text-center">Watchlist</h1> -->
      <div class="w-full lg:w-1/3 flex flex-col lg:flex-row items-start lg:items-center"></div>
    </div>
    <div class="w-full overflow-x-scroll xl:overflow-x-hidden">
      <table class="min-w-full bg-indigo-50 dark:bg-gray-800">
        <thead>
          <tr class="w-full h-16 border-gray-300 border-b py-8">
            <th
              class="pl-8 text-blue-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
            ></th>
            <th
              class="text-gray-600 dark:text-gray-400 font-semibold pr-6 text-left text-sm tracking-normal leading-4"
            >
              Stock
            </th>
            <th
              class="text-gray-600 dark:text-gray-400 font-semibold pr-6 text-left text-sm tracking-normal leading-4"
            >
              Stock-Symbol
            </th>
            <th
              class="text-gray-600 dark:text-gray-400 font-semibold pr-6 text-left text-sm tracking-normal leading-4"
            >
              Day-High
            </th>
            <th
              class="text-gray-600 dark:text-gray-400 font-semibold pr-6 text-left text-sm tracking-normal leading-4"
            >
              Day-Low
            </th>
            <th
              class="text-gray-600 dark:text-gray-400 font-semibold pr-6 text-left text-sm tracking-normal leading-4"
            >
              Change
            </th>
            <th
              class="pl-8 text-blue-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
            ></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(stock, i) in stockData" :key="i" class="h-24 border-gray-300 border-b">
            <td
              class="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4"
            ></td>
            <td
              class="text-sm pr-6 whitespace-no-wrap font-bold text-gray-800 dark:text-gray-100 font-semibold tracking-normal leading-4"
            >
              {{ stock.data[0].name }}
            </td>
            <td
              class="text-sm pr-6 whitespace-no-wrap font-semibold text-gray-800 dark:text-gray-100 tracking-normal leading-4"
            >
              {{ stock.data[0].ticker }}
            </td>
            <td
              class="text-sm pr-6 whitespace-no-wrap font-semibold text-gray-800 dark:text-gray-100 tracking-normal leading-4"
            >
              {{ stock.data[0].day_high }} $
            </td>
            <td
              class="text-sm pr-6 whitespace-no-wrap font-semibold text-gray-800 dark:text-gray-100 tracking-normal leading-4"
            >
              {{ stock.data[0].day_low }} $
            </td>
            <td
              class="text-sm pr-6 whitespace-no-wrap font-semibold text-gray-800 font-semibold tracking-normal leading-4"
            >
              {{ stock.data[0].day_change }} %
            </td>
            <td
              class="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4"
            >
              <button
                @click="deleteStock(stock.data[0].ticker)"
                type="button"
                class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import ListTable from '../components/ListTable.vue';
import { useUserStore } from '@/stores/UserStore.js';
import { onMounted, ref } from 'vue';
import axios from 'axios';

const userStore = useUserStore();

const userstocks = userStore.user.userstocks;

let stocks = ref([]);

let stockData = ref([]);

onMounted(async () => {
  for (const stock of userstocks) {
    stocks.value.push(stock);
  }
  for (let i = 0; i < stocks.value.length; i++) {
    const { data: stock } = await axios.get(
      `https://api.stockdata.org/v1/data/quote?symbols=${stocks.value[i]}&api_token=YBnCQp2nppQOUV4DgBjndxbVieFpcTChCqWeywGE`,
    );
    stockData.value.push(stock);
    console.log(stock);
  }
});

const deleteStock = async (ticker) => {
  const { data } = await axios.delete(
    ``,
  );
};	
</script>