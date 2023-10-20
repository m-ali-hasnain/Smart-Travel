import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import axios from 'axios'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
axios.defaults.baseURL = 'http://localhost:8080/api'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);