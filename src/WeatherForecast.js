import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="col-4">
        <div className=" weather-forecast-section">
          <span className="weather-forecast-day">Tuesday</span>
          <WeatherIcon icon="01d" />
          <div className="weather-forecast-temperatures">
            <div className="weather-forecast-temperature-max">15°C</div>
            <div className="weather-forecast-temperature-min">12°C</div>
          </div>
        </div>
      </div>
    </div>
  );
}
