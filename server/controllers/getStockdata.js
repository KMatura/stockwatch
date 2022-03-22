import axios from 'axios';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

// function createURL(){
//     const apiKey = process.env.API_KEY;

// }

async function getStockRealtime(req, res){
    try{
        const { data } = await axios.get(`https://api.stockdata.org/v1/data/quote?symbols=AAPL&api_token=eJLUoUVC234SV2oMXYJYNj8SWxehg0B8HNJj41uD`);
        res.status(200).json(data);
    }
    catch(err) {
        res.status(400).send('Erroror\n' + err);
    }
}

export { getStockRealtime };