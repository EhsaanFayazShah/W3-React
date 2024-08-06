import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { App, Car, Garage, Goal } from "./App";

const cars = ["Ford", "BMW", "Audi", "Lamborghoni"];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Car color="red" />
    <Car model="mustang" />
    <Goal isGoal="true" />
    <Garage cars={cars} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
