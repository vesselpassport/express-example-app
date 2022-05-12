import express, { json, urlencoded } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import path from 'path';

import { initApi } from './api';
import { addVesselHeadersMiddleware } from './utils/vessel';

const { FRONTEND_DOMAIN, SERVER_DOMAIN } = process.env;

const app = express();

app.use(express.static(path.join(__dirname, '../../client/build')));
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(morgan('dev'));

app.use(
  cors({
    origin: [FRONTEND_DOMAIN, SERVER_DOMAIN],
    credentials: true,
  })
);
app.use(cookieParser());

app.use(addVesselHeadersMiddleware);

initApi(app);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

export default app;
