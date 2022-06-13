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
  const found = data.find((el) =>
    isSameDay(parseJSON(el.date), parseJSON(date))
  );
  if (found) {
    return true;
  }
  if (found == undefined) {
    return false;
  }
}

async function get24hData(symbol) {
  let dayData;
  const API_KEY_K = 'eJLUoUVC234SV2oMXYJYNj8SWxehg0B8HNJj41uD';
  let url = `https://api.stockdata.org/v1/data/intraday?symbols=${symbol}&api_token=${API_KEY_K}&interval=minute&extended_hours=true`;
  try {
    // const response = await axios.get('http://localhost:3001/data');
    // const data = response.data;
    const response = await axios.get(url);
    const data = response.data.data;
    if (data.length < 1) {
      return console.log('No data', response);
    }
    if (isSameDay(currentDate, parseJSON(data[0].date))) {
      dayData = data.filter((element) =>
        isSameDay(parseJSON(element.date), parseJSON(data[0].date))
      );
      return dayData;
    }
    if (isSameDay(parseJSON(data[0].date), subDays(currentDate, 1))) {
      dayData = data.filter((element) =>
        isSameDay(parseJSON(element.date), parseJSON(data[0].date))
      );
      return dayData;
    }
    else {
      dayData = data.filter((element) =>
        isSameDay(parseJSON(element.date), parseJSON(data[0].date))
      );
      return dayData;
    }
  } catch (error) {
    console.log(error);
  }
}
// const { data } = await axios.get('http://localhost:3001/data'); //get last 7 days intraday data

export default get24hData;
