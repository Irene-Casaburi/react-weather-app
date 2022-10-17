import React from "react";
import WeatherIcon from "./WeatherIcon";

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
      <span className="weather-forecast-day">{day}</span>
      <WeatherIcon icon={props.data.weather[0].icon} />
      <div className="weather-forecast-temperatures">
        <div className="weather-forecast-temperature-max">
          {maxTemperature}°C
        </div>
        <div className="weather-forecast-temperature-min">
          {minTemperature}°C
        </div>
      </div>
    </div>
  );
}
