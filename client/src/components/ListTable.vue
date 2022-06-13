<template>
  <div>
    <div class="mx-auto container bg-white dark:bg-gray-800 dark:bg-gray-800 shadow rounded">
      <!-- <h1 class="text-2xl font-bold text-center">Watchlist</h1> -->
      <div class="w-full lg:w-1/3 flex flex-col lg:flex-row items-start lg:items-center"></div>
    </div>
    <div class="w-full overflow-x-scroll xl:overflow-x-hidden">
      <table class="min-w-full bg-indigo-50 dark:bg-gray-800">
        <thead>
          <tr class="w-full h-16 border-gray-300 border-b py-8">
            <th
              class="pl-8 text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
            ></th>
            <th
              class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
            >
              Stock
            </th>
            <th
              class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
            >
              Stock-ID
            </th>
            <th
              class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
            >
              Sell
            </th>
            <th
              class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
            >
              Buy
            </th>
            <th
              class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
            >
              Change
            </th>
            <th
              class="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4"
            >
              <div class="opacity-0 w-2 h-2 rounded-full bg-indigo-400"></div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="stock of stocks" :key="stock.uid" class="h-24 border-gray-300 border-b">
            <td
              class="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4"
            >
              <input
                type="checkbox"
                class="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white dark:bg-gray-800 outline-none"
                onclick="tableInteract(this)"
              />
            </td>
            <td
              class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 font-semibold tracking-normal leading-4"
            >
              MSFT
            </td>
            <td
              class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
            >
              Microsoft
            </td>
            <td
              class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
            >
              311,63 $
            </td>
            <td
              class="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4"
            >
              314,32 $
            </td>
            <td
              class="text-sm pr-6 whitespace-no-wrap text-green-500 font-semibold tracking-normal leading-4"
            >
              +3,63%
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
// import { ref, onMounted } from 'vue';


</script>
