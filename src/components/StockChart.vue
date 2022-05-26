<template>
  <Line v-if="loaded" :chart-data="chartData" :width="200" :height="200"></Line>
</template>
<script>
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
      const data = await get24hData('AAPL');
      let dates = data.map((item) => item.date);

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

// const createChart = async() => {
//   const resdata = await axios.get(
//     'https://api.stockdata.org/v1/data/eod?symbols=AAPL&api_token=cx6vIPYVwWq3TbwrbSdY3nMCulfjF4syxr0zyFAL'
//   );

//   const labels = [
//     resdata['data']['data']['6']['date'],
//     resdata['data']['data']['5']['date'],
//     resdata['data']['data']['4']['date'],
//     resdata['data']['data']['3']['date'],
//     resdata['data']['data']['2']['date'],
//     resdata['data']['data']['1']['date'],
//     resdata['data']['data']['0']['date'],
//   ];

//   const data = {
//     labels: labels,
//     datasets: [
//       {
//         label: resdata['data']['meta']['name'],
//         backgroundColor: 'rgb(255, 99, 132)',
//         borderColor: 'rgb(255, 99, 132)',
//         data: [
//           resdata['data']['data']['0']['close'],
//           resdata['data']['data']['1']['close'],
//           resdata['data']['data']['2']['close'],
//           resdata['data']['data']['3']['close'],
//           resdata['data']['data']['4']['close'],
//           resdata['data']['data']['5']['close'],
//           resdata['data']['data']['6']['close'],
//         ],
//       },
//     ],
//   };

//   const config = {
//     type: 'line',
//     data: data,
//     options: {},
//   };
//   const ibmchart = new Chart(document.getElementById('chart'), config);
//   // for (let o in resdata['data']['Monthly Time Series']) {
//   //   console.log(o);
//   // }
// };
</script>
