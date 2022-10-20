import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";
import "./WeatherDetails.css";

export default function WeatherDetails(props) {
  return (
    <div className="WeatherDetails">
      <div className="d-flex align-items-center">
        <div className="d-flex weather-temperature">
          <div>
            <h2 className="temperature">
              <Temperature celsiusTemperature={props.data.temperature} />
            </h2>
          </div>
        </div>
        <div className="d-flex align-items-end">
          <div className="today-weather-subsection">
            <h1 className="city">{props.data.city}</h1>
            <p className="date">
              <FormattedDate date={props.data.date} />
            </p>
          </div>
          <div className="today-weather-subsection">
            <div className="d-flex align-items-center weather-icon-section">
              <WeatherIcon icon={props.data.icon} />
              <h3 className="conditions">{props.data.conditions}</h3>
            </div>
            <div className="details">
              <p className="humidity-wind">
                Humidity: {props.data.humidity}% Wind:{" "}
                {Math.round(props.data.wind)}
                km/h
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
