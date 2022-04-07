import axios from 'axios';
import { add, format, sub, parseJSON, isEqual, closestIndexTo, isWeekend, previousFriday, subDays, isSameDay  } from 'date-fns';
import _ from 'lodash';


async function get24h(){
    let dayData;
    try{
        const { data } = await axios.get('http://localhost:3001/data');                                     //get last 7 days intraday data
        // const latestDate = parseJSON(data[0].date); //prod
        const currentDate = new Date();
        const latestDate = parseJSON('2022-03-26T09:52:00.000Z');
        const date24hAgo = subDays(latestDate, 1);        
        const lIndex = data.findIndex((element) => isEqual(latestDate, parseJSON(element.date)));           //Index of latest date in data
        const vIndex = data.findIndex((element) => isEqual(date24hAgo, parseJSON(element.date)));           //Index of the date 24h ago

        if(isSameDay(currentDate, latestDate)){                                                            //if current date is same as the latest date in the provided data
            dayData = data.filter((element) => isSameDay(parseJSON(element.date), latestDate));       //filter data to only include todays data
            console.log(dayData[0], dayData[dayData.length - 1]);
        }
        else{
            if(isWeekend(latestDate)){
                console.log('Weekend');
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
get24h();

            // indexOfClosestDate = closestIndexTo(date24hAgo, min24hDate);
            // data24h = _.slice(data, 0, indexOfClosestDate)
            // console.log(indexOfClosestDate);            //An einem vollen Tag gibt es 389 Datensätze. Wenn ich am Montag nur 20 Datensätze hab, nehme ich mir vom Freitag die fehlenden 369.
            // console.log(data24h);
        // }
        // console.log(date24hAgo)
        // console.log(data.length)
        // console.log(data24h.length);
        // console.log(vIndex);
        // console.log(data24h)
//     }
//     catch(err){
//         console.log(err);
//     }
// }

