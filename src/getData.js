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

async function get24h(symbol) {
  let dayData;
  let url = `https://api.stockdata.org/v1/data/intraday?symbols=${symbol}&api_token=eJLUoUVC234SV2oMXYJYNj8SWxehg0B8HNJj41uD`;
  try {
    // const response = await axios.get(url)
    // console.log(response.data.data);
    // const data = response.data.data;
    const { data } = await axios.get('http://localhost:3001/data'); //get last 7 days intraday data
    const latestDate = parseJSON(data[0].date); //prod
    console.log('current' + latestDate)
    //const latestDate = parseJSON('2022-03-28T09:52:00.000Z');
    const date24hAgo = subDays(latestDate, 1);
    const lIndex = data.findIndex((element) =>
      isEqual(latestDate, parseJSON(element.date))
    ); //Index of latest date in data
    const vIndex = data.findIndex((element) =>
      isEqual(date24hAgo, parseJSON(element.date))
    ); //Index of the date 24h ago

    if (isSameDay(latestDate, currentDate)) {
      //latestDate twice for dev. For production: change to currentDate.   //if current date is same as the latest date in the provided data
      dayData = data.filter((element) =>
        isSameDay(parseJSON(element.date), latestDate)
      ); //filter data to only include todays data
      // console.log(dayData[0], dayData[dayData.length - 1]);
      // console.log('data length', dayData.length)
      return dayData;
    } else {
      console.log(date24hAgo, latestDate);
      if (!isSameDay(date24hAgo, latestDate)) {
        //if latest date is not in the data
        dayData = data.filter((element) =>
          isSameDay(parseJSON(element.date), date24hAgo)
        ); //filter data to only include yesterdays data
        return dayData;
      }
      }
      if (isWeekend(currentDate)) {
        //latestDate nur zum Testen, ansonsten currentDate verwenden
        console.log('Weekend');
      }
      if (await isTradingHoliday(currentDate)) {
        console.log('Trading Holiday');
        console.log(await isTradingHoliday(currentDate));
      }
      else {
        console.log('Error');
      }
    }
    catch (error) {
      console.log(error);
  }
}

// if(!data.find((element) => isEqual(date24hAgo, parseJSON(element.date)))){  //check if there is no data from 24h ago
//     min24hDate = data24h.map((x) => parseJSON(x.date));

//     if(isWeekend(date24hAgo)){
//         const lastFriday = previousFriday(latestDate);
//         console.log(lastFriday);
//     }
//     //if there is no data from 24h ago, get the latest data from the previous week  (previous friday)
//     const lastFriday = previousFriday(latestDate);
//     const lastFridayIndex = data.findIndex((element) => isEqual(lastFriday, parseJSON(element.date)));
//     data24h = _.slice(data, lastFridayIndex, lastFridayIndex + 7);
// }
// return data24h;
// console.log(await get24h());
export default get24h;

//An einem vollen Tag gibt es 389 Datensätze. Wenn ich am Montag nur 20 Datensätze hab, nehme ich mir vom Freitag die fehlenden 369.
