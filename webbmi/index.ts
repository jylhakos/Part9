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

// 9.7
import { Result, calculateExercises } from "../exerciseCalculator/exerciseCalculator";

const app = express();

app.use(express.json());

function validate(array: Array<any>): boolean | undefined {
  if (!Array.isArray(array)) {
    return false;
  }

  for (let i = 0, e = array.length; i < e; i++) {
    if (isNaN(array[i])) {
      return false;
    }
  }

  return true
}

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

app.post('/exercises', (req : Request, res : Response) => {

  console.log('/exercises')

  try {

    

    const body: any = JSON.stringify(req.body);

    console.log('body', body);

    const data: any = JSON.parse((body));

    if (!(data.daily_exercises) || !(data.target)) {
      res.json({
        error: "parameters missing"
      })
      return
    }

    const daily_exercises: Array<number> = data.daily_exercises;

    const target: number = Number(data.target);

    console.log('data', daily_exercises, target);

    if (validate(daily_exercises) === false) {
      console.log("malformatted parameters")
      res.json({
        error: "malformatted parameters"
      })
      return
    }

    console.log('isNaN(target)', isNaN(target));

    if (isNaN(target)) {
      console.log("malformatted parameters")
      res.json({
        error: "malformatted parameters"
      })
      return
    }

    const result: Result = calculateExercises(daily_exercises, target);

    console.log(result)

    res.json(result);

  } catch (e) {

    res.status(500).send(e.message);
  }

})

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// $ curl -X "POST" http://localhost:3002/exercises -H "Content-Type: application/json" -d "{\"daily_exercises\":\"[1, 0, 2, 0, 3, 0, 2.5]\", \"target\":\"2.5\"}" -v

// $ curl -X "POST" http://localhost:3002/exercises -H "Content-Type: application/json" -d '{ "daily_exercises": [1, 0, 2, 0, 3, 0, 2.5], "target": 2.5 }' -v
