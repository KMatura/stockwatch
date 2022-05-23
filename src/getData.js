import axios from 'axios';
import {
  add,
  format,
  sub,
  parseJSON,
  isEqual,
  closestIndexTo,
  isWeekend,
  previousFriday,
  subDays,
  isSameDay,
} from 'date-fns';
import _ from 'lodash';

const currentDate = new Date();

async function isTradingHoliday(date) {
  const { data } = await axios.get('http://localhost:3002/data');
  const found = data.find((el) => isSameDay(parseJSON(el.date), parseJSON(date)));
  if (found) {
    return true;
  } if(found == undefined) {
    return false;
  }
}

// async function get24h(symbol) {
//   let dayData;
//   const API_KEY_K = 'cx6vIPYVwWq3TbwrbSdY3nMCulfjF4syxr0zyFAL';
//   let url = `https://api.stockdata.org/v1/data/intraday?symbols=${symbol}&api_token=${API_KEY_K}&interval=minute&extended_hours=true`;
//   try {
//     const response = await axios.get(url)
//     console.log(response.data.data);
//     const data = response.data.data;
//     // const { data } = await axios.get('http://localhost:3001/data'); //get last 7 days intraday data
//     const latestDate = parseJSON(data[0].date); //prod
//     console.log('current' + latestDate)
//     const date24hAgo = subDays(latestDate, 1);
//     const lIndex = data.findIndex((element) =>
//       isEqual(latestDate, parseJSON(element.date))
//     ); //Index of latest date in data
//     const vIndex = data.findIndex((element) =>
//       isEqual(date24hAgo, parseJSON(element.date))
//     ); //Index of the date 24h ago

//     if (isSameDay(latestDate, currentDate)) {
//       dayData = data.filter((element) =>
//         isSameDay(parseJSON(element.date), latestDate)
//       ); //filter data to only include todays data

//       return dayData;
//     } else {
//       console.log(date24hAgo, latestDate);
//       if (isSameDay(date24hAgo, latestDate)) {  //if the date 24h ago is the same as the latest date in the provided data
//         //if latest date is not in the data
//         dayData = data.filter((element) =>
//           isSameDay(parseJSON(element.date), date24hAgo)
//         ); //filter data to only include yesterdays data
//         return dayData;
//       }
//       }
//       if (isWeekend(currentDate)) {
//         return console.log('Weekend');
//       }
//       if (await isTradingHoliday(currentDate)) {
//         return console.log('trading holiday', await isTradingHoliday(currentDate));
//       }
//       else {
//         console.log('Error');
//       }
//     }
//     catch (error) {
//       console.log(error);
//   }
// }

async function get24hData(symbol) {
  let dayData;
  let isCurrent;
  const API_KEY_K = 'eJLUoUVC234SV2oMXYJYNj8SWxehg0B8HNJj41uD';
  let url = `https://api.stockdata.org/v1/data/intraday?symbols=${symbol}&api_token=${API_KEY_K}&interval=minute&extended_hours=true`;
  try {
    const response = await axios.get(url)
    const data = response.data.data;
    console.log(data);
    if(data.length < 1){
      return console.log('No data', response);
    }
    if(isSameDay(currentDate, parseJSON(data[0].date))) {
      dayData = data.filter((element) =>
        isSameDay(parseJSON(element.date), parseJSON(data[0].date))
      );
      return dayData;
    }
    if(isSameDay(parseJSON(data[0].date), subDays(currentDate, 1))) {
      dayData = data.filter((element) =>
        isSameDay(parseJSON(element.date), parseJSON(data[0].date))
      );
      return dayData;
    }
  }
  catch (error) {
    console.log(error);
  }
}
    // const { data } = await axios.get('http://localhost:3001/data'); //get last 7 days intraday data

export default get24hData;
