import React from "react";
import "./App.css";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <CurrentWeather defaultCity="London" />
          <WeatherForecast />
        </div>
      </div>
    </div>
  );
}
