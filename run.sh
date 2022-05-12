#!/bin/bash

cd client;
npm install;
npm run build;
cd ../server;
npm run start;
