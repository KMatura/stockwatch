import axios from 'axios';
import { add, format, sub, parseJSON, isEqual, closestIndexTo, isWeekend, previousFriday, subDays, isSameDay  } from 'date-fns';
import _ from 'lodash';

async function isTradingHoliday(date) {
  const { data } = await axios.get('http://localhost:3002/data');
  for (const {date} of data) {
    const found = data.find(el => isSameDay(parseJSON(el.date), parseJSON(date)));
    if (found) {
      return true;
    }
    else{
        return false;
    }
  }
}

console.log(await isTradingHoliday(parseJSON('2024-12-25T00:00:00.000000Z')));

async function get24h(){
    let dayData;
    try{
        const { data } = await axios.get('http://localhost:3001/data');                                     //get last 7 days intraday data
        // const latestDate = parseJSON(data[0].date); //prod
        const currentDate = new Date();
        const latestDate = parseJSON('2022-03-28T09:52:00.000Z');
        const date24hAgo = subDays(latestDate, 1);        
        const lIndex = data.findIndex((element) => isEqual(latestDate, parseJSON(element.date)));           //Index of latest date in data
        const vIndex = data.findIndex((element) => isEqual(date24hAgo, parseJSON(element.date)));           //Index of the date 24h ago

        if(isSameDay(latestDate, latestDate)){                                                         //latestDate twice for dev. For production: change to currentDate.   //if current date is same as the latest date in the provided data
            dayData = data.filter((element) => isSameDay(parseJSON(element.date), latestDate));       //filter data to only include todays data
            console.log(dayData[0], dayData[dayData.length - 1]);
            console.log('data length', dayData.length)
            return dayData;
        }
        else{
            if(isWeekend(latestDate)){      //latestDate nur zum Testen, ansonsten currentDate verwenden
                console.log('Weekend');
            }
            else if(isTradingHoliday(latestDate)){
                console.log('Trading Holiday');
            }
        }
        console.log(currentDate);
    }
    catch(error){
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
console.log(await get24h());
export default get24h;

         //An einem vollen Tag gibt es 389 Datensätze. Wenn ich am Montag nur 20 Datensätze hab, nehme ich mir vom Freitag die fehlenden 369.
