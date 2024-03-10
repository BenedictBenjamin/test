import React from "react";
import ReactDOM from "react-dom/client";
// css 파일
import "./styles/normalize.css";
import "./styles/index.css";


import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);


reportWebVitals();
