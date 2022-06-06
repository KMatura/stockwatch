<template>
  <div>
    <Line v-if="loaded" :chart-data="chartData"></Line>
  </div>
</template>
<script>
import { defineProps, ref } from 'vue';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
} from 'chart.js';
import { Line } from 'vue-chartjs';
import axios from 'axios';
import get24hData from '../getData.js';
import { parseJSON, format } from 'date-fns';


ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
);

export default {
  name: 'LineChart',
  components: { Line },
  props: {
    chartId: {
      type: String,
      default: 'line-chart',
    },
    width: {
      type: Number,
      default: 200,
    },
    height: {
      type: Number,
      default: 200,
    },
    symbol: String,
  },
  data: () => ({
    loaded: false,
    chartData: {
      labels: null,
      datasets: [
        {
          label: null,
          backgroundColor: '#f8979',
          data: null,
          pointRadius: 1,
          pointHitRadius: 50,
        },
      ],
    },
  }),

  async mounted() {
    this.loaded = false;

    try {
      // const data = await get24hData('LHA');
      console.log('symbol', this.symbol);
      const data = await get24hData(this.symbol);
      console.log('stcdata',data);
      let dates = data.map((item) =>
        format(parseJSON(item.date), 'dd-MM hh:mm')
      );

      const closes = data.map((item) => item.data.close);
      this.chartData.labels = dates;
      this.chartData.datasets[0].label = data[0].ticker;
      this.chartData.datasets[0].data = closes;
      this.loaded = true;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style scoped>
div { 
  width: 35vw;
  background-color:aliceblue;
  margin-left: auto;
  margin-right: auto;
}
</style>
