import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";

export default function CurrentWeatherDetails(props) {
  return (
    <div className="CurrentWeatherDetails">
      <h2>
        <Temperature celsiusTemperature={props.data.temperature} />
      </h2>
      <h1>{props.data.city}</h1>
      <p>
        <FormattedDate date={props.data.date} />
      </p>
      <WeatherIcon icon={props.data.icon} />
      <h3 className="conditions">{props.data.conditions}</h3>
      <div className="details">
        <p>
          Humidity: {props.data.humidity}% Wind: {Math.round(props.data.wind)}
          km/h
        </p>
      </div>
    </div>
  );
}
