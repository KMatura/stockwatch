import express from 'express';
import path from 'path';
import morgan from 'morgan';
import helmet from 'helmet';

import { config } from 'dotenv';
config();

import routes from './routes/routes.js';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(morgan('dev'));
app.use(helmet());

const dirname = path.resolve();

app.use(express.static(path.join(dirname, 'public')));
app.use(express.json());
app.use('/', routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));

console.log('Server started');