// $ npm install ts-node typescript

// $ npm install --save-dev @types/node

// $ npm i -S run-func

// $ npm install express

// $ npm install --save-dev @types/express

// $ npm install --save-dev ts-node-dev

// const express = require('express')

// http://localhost:3002/bmi?height=180&weight=72

import express from 'express'

import { calculateBmi } from "../calculateBmi/calculateBmi"

const app = express()

// 9.4
app.get('/hello', (_req, res) => {
  res.send('Hello World')
})

// 9.5
app.get('/bmi', (req : any, res : any) => {

  console.log('req.query', req.query)

  if (!(req.query.height) || !(req.query.weight)) {
    res.send({error: "malformatted parameters"})
    return
  }

  const height: number = Number(req.query.height)

  const weight: number = Number(req.query.weight)

  console.log(height, weight)

  const bmi: any = calculateBmi(height, weight)

  res.send({weight: weight, height: height, bmi: bmi})
})

const PORT = 3002

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
