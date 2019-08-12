import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import Gallery from './Gallery'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// let urls = [
//     "./pictures_portfolio/marinelife1.JPG",
//     "./pictures_portfolio/marinelife2.JPG",
//     "./pictures_portfolio/marinelife3.JPG"
// ]

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// ReactDOM.render(<Gallery imageIrls={urls} />, document.getElementById("mount"));
