// $ npm init

// $ npm install typescript --save-dev

// $ npm run tsc -- --init

// $ npm install express

// $ npm install --save-dev eslint @types/express @typescript-eslint/eslint-plugin @typescript-eslint/parser

// $ npm install --save-dev ts-node-dev

// npm install cors --save

// $ npm run dev

// $ npm run tsc

// $ cd src

// $ npm run dev

// $ npm run dev --resolveJsonModule

import express from 'express';

import diaryRouter from './routes/diaries';

const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

const PORT = 3000;

app.use('/api/diaries', diaryRouter);

app.get('/api/ping', (_req, res) => {

  console.log('ping');

  res.send('pong');

});

app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);

});