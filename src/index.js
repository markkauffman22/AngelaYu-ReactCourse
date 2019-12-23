// 350. JavaScript expressions in JSX & ES6 Template Literals
// any Expression (not Statements) in curly braces {} in HTML
// is evaluated as JavaScript
import React from "react";
import ReactDOM from "react-dom";

const fName = "Angela";
const lName = "Yu";
const num = 7;

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <p>Your lucky number is {num}</p>
    <p>Your Random number is {Math.random() * 10}</p>
    <p>Your Random lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
