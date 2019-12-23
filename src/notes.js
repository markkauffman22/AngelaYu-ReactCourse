//var React = require("react");
//var ReactDOM = require("react-dom");
// ES6 way .. the 'import' keyword ...
import React from "react";
import ReactDOM from "react-dom";

// Inject HTML into website with React!
ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"));
//Babel converts this to ...
//ReactDOM.render(React.createElement("h1", null, "Hello World"), document.getElementById("root"));

//the ReactDom.render line is identical to pure, vanilla JavaScript as..

var h1 = document.createElement("h1");
h1.innerHTML = "Hello World2";
document.getElementById("root").appendChild(h1);

// React works by creating JSX files. The HTML above is picked up by a
// compiler and it gets converted or compiled down to JavaScript.
// The compiler comes for the require("react") line above.

// Inside the React module is Babel, a JavaScript compiler.
// It converts ES6,7,8 down to a version every browser can understand.
