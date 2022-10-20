import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  let maxTemperature = Math.round(props.data.temp.max);
  let minTemperature = Math.round(props.data.temp.min);

  let daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = new Date(props.data.dt * 1000);
  let day = daysOfTheWeek[date.getDay()];

  return (
    <div className="WeatherForecastDay">
      <div className="d-flex align-items-center daily-forecast-item">
        <span className="weather-forecast-day">{day}</span>
        <div className="forecast-icons">
          <WeatherIcon icon={props.data.weather[0].icon} />
        </div>
        <div className="weather-forecast-temperatures">
          <div className="weather-forecast-temperature-max">
            {maxTemperature}°C
          </div>
          <div className="weather-forecast-temperature-min">
            {minTemperature}°C
          </div>
        </div>
      </div>
    </div>
  );
}
