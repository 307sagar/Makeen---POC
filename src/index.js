import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import DragDrop from './DragDrop'; 

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    <DragDrop />
  </React.StrictMode>,
  rootElement
);
