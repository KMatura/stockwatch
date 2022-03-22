import express from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import morgan from 'morgan';
import path from 'path';

import { config } from 'dotenv';
config();

import { router as stockRouter } from './routes/stock.js';


const app = express();

app.use(morgan('dev'));
app.use(helmet());

const dirname = path.resolve();

app.use(express.static(path.join(dirname, 'public')));
app.use(express.json());

app.use(stockRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));

console.log('Server started');
