import { Router } from 'express';
import { getStockRealtime } from '../controllers/getStockdata.js';

const router = Router();

router.get('/getStockRealtime', getStockRealtime);

export { router }