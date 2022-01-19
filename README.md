# TypeScript

TypeScript is a typed superset of JavaScript, and it's compiled into plain JavaScript code.

The code transformations enable TypeScript code to be transpiled into executable JavaScript.

Type annotations in TypeScript is way to record the intended contract of a function or a variable.

TypeScript type annotations and type checking exist only at compile time.

TypeScript does type checking and static code analysis.

TypeScript has to be compiled into executable JavaScript.

TypeScript's Native Compiler (tsc) helps us initialize a project by generating the tsconfig.json file.

You can install ts-node and typescript packages by running the npm command.

```

$ npm install ts-node typescript --save-dev

```
The contents of the index.ts file has the following code.

```

import express from 'express';
const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/ping', (_req, res) => {
  console.log('pong');
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

```

The app starts with npm run dev command in development mode, and we can verify that a request to http://localhost:3000/ping gives the response pong.

A production build is created by running the TypeScript compiler.

We can use create-react-app to create a TypeScript app by adding a template argument to the initialisation script.

```

$ npx create-react-app app --template typescript

```

An example app using React components called Welcome with TypeScript syntax.

```

import React from "react";
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";

const Welcome = props => {
  return <h1>Hello, {props.name}</h1>;
};

Welcome.propTypes = {
  name: PropTypes.string
};

const element = <Welcome name="World" />;
ReactDOM.render(element, document.getElementById("root"));

```
A link to TypeScript

https://www.typescriptlang.org/

![alt text](https://github.com/jylhakos/Part9/blob/main/Part9.png?raw=true)

