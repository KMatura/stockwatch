<template>
  <div
    id="modal"
    tabindex="-1"
    class="h-max justify-center hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
  >
    <div class="m-auto relative p-4 w-full max-w-4xl h-full md:h-auto">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div
          class="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600"
        >
          <h3 class="text-xl font-medium text-gray-900 dark:text-white">
            {{ }}
          </h3>
          <button
            @click="modalHandler()"
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="large-modal"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div class="flex p-6 space-y-6 w-full row">
          <div class="w-2/3">
            <LineChart :symbol="symbol"></LineChart> <!--nciht sofort laden -->
          </div>
          <div class="ml-5 w-64 col">
            <div class="items-center justify-between mt-8">
              <p class="text-white">Price: {{data[0].price }}$</p>
              <p class="text-white">24h High: {{ data[0].day_high }}$</p>
              <p class="text-white">24h Low: {{ data[0].day_low }}$</p>
              <p class="text-white">Yearly High: {{ data[0]['52_week_high'] }}$</p>
              <p class="text-white">Yearly Low: {{ data[0]['52_week_low'] }}$</p>
            </div>
          </div>
        </div>
        <div
          class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"
        >
          <button
            @click="modalHandler()"
            data-modal-toggle="large-modal"
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Hinzufügen
          </button>
          <button
            @click="modalHandler()"
            data-modal-toggle="large-modal"
            type="button"
            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full flex justify-center py-12" id="button">
    <button
      class="focus:outline-none mx-auto transition duration-150 ease-in-out hover:bg-indigo-10 bg-gray-100 font-medium rounded text-indigo-700 px-4 sm:px-8 py-2 text-xs sm:text-sm"
      type="button"
      data-modal-toggle="extralarge-modal"
      @click="modalHandler(true)"
    >
      View {{ symbol }}
    </button>
  </div>
</template>

<script>
import { ref } from 'vue';
import LineChart from './StockChart.vue';
import get24hData from '../getData.js';
import axios from 'axios';

export default {
  name: 'CentreAlignedShort',
  methods: {
    async modalHandler(val) {
      let el = document.getElementById('modal');
      const result = await axios.get(`https://api.stockdata.org/v1/data/quote?symbols=${this.symbol}&api_token=cx6vIPYVwWq3TbwrbSdY3nMCulfjF4syxr0zyFAL`);
      this.data = result.data
      console.log(result.data)
      if (val) {
        this.fadeIn(el);
      } else {
        this.fadeOut(el);
      }
    },
    fadeOut(el) {
      el.style.opacity = 1;
      (function fade() {
        if ((el.style.opacity -= 0.1) < 0) {
          el.style.display = 'none';
        } else {
          requestAnimationFrame(fade);
        }
      })();
    },
    fadeIn(el, display) {
      el.style.opacity = 0;
      el.style.display = display || 'flex';
      (function fade() {
        let val = parseFloat(el.style.opacity);
        if (!((val += 0.2) > 1)) {
          el.style.opacity = val;
          requestAnimationFrame(fade);
        }
      })();
    },
  },
  props: {
    symbol: String,
  },
  data: () => ({
    data: [
    {
      "ticker": "AAPL",
      "name": "Apple Inc",
      "exchange_short": "NASDAQ",
      "exchange_long": "NASDAQ Stock Exchange",
      "mic_code": "XNAS",
      "currency": "USD",
      "price": null,
      "day_high": 140.72,
      "day_low": 137.09,
      "day_open": 140.32,
      "52_week_high": 182.94,
      "52_week_low": 127.07,
      "market_cap": 2249809723392,
      "previous_close_price": 142.61,
      "previous_close_price_time": "2022-06-09T16:00:00.000000",
      "day_change": -4,
      "volume": 1830996,
      "is_extended_hours_price": false,
      "last_trade_time": "2022-06-10T16:00:00.000000"
    }
  ]
  }),
};
</script>
