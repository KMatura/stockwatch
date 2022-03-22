import express from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import morgan from 'morgan';
import path from 'path';

const app = express();

app.use(helmet());
