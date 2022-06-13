<template>
  <div
    id="modal"
    tabindex="-1"
    class="h-max justify-center hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
  >
    <div class="m-auto relative p-4 w-1/2 h-full md:h-auto">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div
          class="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600"
        >
          <h3 class="text-xl font-medium text-gray-900 dark:text-white">
            {{ data.data[0].name}} <small class="ml-8">{{data.data[0].exchange_long}}</small>
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
        <div class="p-6 space-y-6 w-full">
          <div class="w-full">
            <LineChart  v-if="data.data[0].ticker!='none'" :symbol="symbol"></LineChart> <!--nciht sofort laden -->
            <h1 v-else="data.data[0].ticker!='none'" class="text-center">Chart unavailable</h1>
          </div>
          <div class="w-full flex-row columns-2">
            <table class="text-white">
              <tbody>
                <tr>
                  <td>Price:</td>
                  <td class="pl-5">{{ data.data[0].price }}$</td>
                </tr>
                <tr>
                  <td>24h High:</td>
                  <td class="pl-5">{{ data.data[0].day_high }}$</td>
                </tr>
                <tr>
                  <td>24h Low: </td>
                  <td class="pl-5">{{ data.data[0].day_low }}$</td>
                </tr>
              </tbody>
            </table>
            <table class="text-white">
              <tbody>
                <tr>
                  <td>24h Change: </td>
                  <td class="pl-5" :class="{'text-red-500': data.data[0]['day_change'] < 0}">{{ data.data[0]['day_change'] }}$</td>
                </tr>
                <tr class="my-3">
                  <td>52W-Low</td>
                  <td class="pl-5">{{ data.data[0]['52_week_low'] }}$</td>
                </tr>
                  <tr class="my-3">
                  <td>52W-High</td>
                  <td class="pl-5">{{ data.data[0]['52_week_high'] }}$</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"
        >
          <button
            @click="console.log('added')"
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
import { ref, defineAsyncComponent } from 'vue';
import LineChart from './StockChart.vue';
import get24hData from '../getData.js';
import axios from 'axios';

export default {
  name: 'CentreAlignedShort',
  components: {
    LineChart,
  },
  methods: {
    async modalHandler(val) {
      let el = document.getElementById('modal');
      const result = await axios.get(`https://api.stockdata.org/v1/data/quote?symbols=${this.symbol}&api_token=eJLUoUVC234SV2oMXYJYNj8SWxehg0B8HNJj41uD`);
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
  data() {
    return {
      data: {
  "meta": {
    "requested": 1,
    "returned": 1
  },
  "data": [
    {
      "ticker": "none",
      "name": "Microsoft Corporation",
      "exchange_short": "NASDAQ",
      "exchange_long": "NASDAQ Stock Exchange",
      "mic_code": "XNAS",
      "currency": "USD",
      "price": 248.04,
      "day_high": 248.94,
      "day_low": 244.3,
      "day_open": 245.02,
      "52_week_high": 349.67,
      "52_week_low": 246.44,
      "market_cap": 1899443781632,
      "previous_close_price": 252.9,
      "previous_close_price_time": "2022-06-10T15:59:59.000000",
      "day_change": -1.96,
      "volume": 155775,
      "is_extended_hours_price": false,
      "last_trade_time": "2022-06-13T10:21:13.000000"
    }
  ]
}
    };
  },
};
</script>
<style>
.line-chart{
  width: 400px;
}
</style>

