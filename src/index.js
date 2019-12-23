import React from "react";
import ReactDOM from "react-dom";

// Inject HTML into website with React.
// make many HTML elements into one with <div>
ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>This is a Paragraph</p>
    <ul>
      <li> Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </div>,
  document.getElementById("root")
);
