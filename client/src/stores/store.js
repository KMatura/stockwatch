import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  // other options...
});

export const useStockStore = defineStore('stockStore', {
  state: () => {
    return {
      symbol: String,
    };
  },
});
