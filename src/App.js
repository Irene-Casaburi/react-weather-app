import React from "react";
import "./App.css";
import CurrentWeather from "./CurrentWeather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <CurrentWeather defaultCity="London" />
        </div>
      </div>
    </div>
  );
}
