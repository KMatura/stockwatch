<template></template>

<script setup>
import style from '../../public/css/style.css';
const createChart = async () => {
  const resdata = await axios.get(
    'https://api.stockdata.org/v1/data/eod?symbols=AAPL&api_token=cx6vIPYVwWq3TbwrbSdY3nMCulfjF4syxr0zyFAL',
  );

  const labels = [
    resdata['data']['data']['6']['date'],
    resdata['data']['data']['5']['date'],
    resdata['data']['data']['4']['date'],
    resdata['data']['data']['3']['date'],
    resdata['data']['data']['2']['date'],
    resdata['data']['data']['1']['date'],
    resdata['data']['data']['0']['date'],
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: resdata['data']['meta']['name'],
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [
          resdata['data']['data']['0']['close'],
          resdata['data']['data']['1']['close'],
          resdata['data']['data']['2']['close'],
          resdata['data']['data']['3']['close'],
          resdata['data']['data']['4']['close'],
          resdata['data']['data']['5']['close'],
          resdata['data']['data']['6']['close'],
        ],
      },
    ],
  };

  const config = {
    type: 'line',
    data: data,
    options: {},
  };
  const ibmchart = new Chart(document.getElementById('ibmchart'), config);
  for (let o in resdata['data']['Monthly Time Series']) {
    console.log(o);
  }
};
async function getData() {
  console.log('ja');
  let data = await axios.get(
    'https://api.stockdata.org/v1/data/eod?symbols=AAPL&api_token=cx6vIPYVwWq3TbwrbSdY3nMCulfjF4syxr0zyFAL',
  );
  console.log(data);
}
</script>
