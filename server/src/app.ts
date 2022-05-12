import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import path from 'path';

import { initApi } from './api';
import { addVesselHeadersMiddleware } from './utils/vessel';

const app = express();

// Add Vessel headers to requests
app.use(addVesselHeadersMiddleware);

// This will serve the frontend
app.use(express.static(path.join(__dirname, '../../client/build')));

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(morgan('dev'));

app.use(cookieParser());

initApi(app);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

export default app;
