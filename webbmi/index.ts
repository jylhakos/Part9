// $ npm install ts-node typescript

// $ npm install --save-dev @types/node

// $ npm i -S run-func

// $ npm install express

// $ npm install --save-dev @types/express

// $ npm install --save-dev ts-node-dev

// const express = require('express')

import express from 'express'

const app = express()

app.get('/hello', (_req, res) => {
  res.send('Hello World')
})

const PORT = 3003

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
