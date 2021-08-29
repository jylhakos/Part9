// $ npm install ts-node typescript

// $ npm install --save-dev @types/node

// $ npm i -S run-func

// $ npm install express

// $ npm install --save-dev @types/express

// $ npm install --save-dev ts-node-dev

// const express = require('express')

// http://localhost:3002/bmi?height=180&weight=72

// $ npm install --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser

// 9.6

// $ npm run lint

import express, { Request, Response } from 'express';

import { calculateBmi } from "../calculateBmi/calculateBmi";

const app = express();

// 9.4
app.get('/hello', (_req, res) => {
  res.send('Hello World');
});

// 9.5
app.get('/bmi', (req : Request, res : Response) => {

  console.log('req.query', req.query);

  if (!(req.query.height) || !(req.query.weight)) {
    res.send({error: "malformatted parameters"});
    return;
  }

  const height = Number(req.query.height);

  const weight = Number(req.query.weight);

  console.log(height, weight);

  // 9.6
  const bmi: number | string | undefined = calculateBmi(height, weight);

  res.send({weight: weight, height: height, bmi: bmi});
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
