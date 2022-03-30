import axios from 'axios';
import { add, format, sub, parseJSON, isEqual, closestIndexTo } from 'date-fns';
import _ from 'lodash';

async function get24h() {
  let data24h;
  let closestDate;
  let min24hDate;
  let indexOfClosestDate;
  try {
    const { data } = await axios.get('http://localhost:3000/data'); //get last 7 days intraday data
    // const currentDate = parseJSON(data[0].date);
    const currentDate = parseJSON('2022-03-28T09:30:00.000Z');
    const date24hAgo = sub(currentDate, { days: 1 }); //Current date - 24h. 24h from now
    const vIndex = data.findIndex((element) => isEqual(date24hAgo, parseJSON(element.date)));

    data24h = _.slice(data, 0, vIndex);

    if (!data.find((element) => isEqual(date24hAgo, parseJSON(element.date)))) {
      min24hDate = data24h.map((x) => parseJSON(x.date));

      indexOfClosestDate = closestIndexTo(date24hAgo, min24hDate);
      data24h = _.slice(data, 0, indexOfClosestDate);
      console.log(indexOfClosestDate); //An einem vollen Tag gibt es 389 Datensätze. Wenn ich am Montag nur 20 Datensätze hab, nehme ich mir vom Freitag die fehlenden 369.
      // console.log(data24h);
    }
    // console.log(date24hAgo)
    // console.log(data.length)
    // console.log(data24h.length);
    // console.log(vIndex);
    // console.log(data24h)
  } catch (err) {
    console.log(err);
  }
}

get24h();
