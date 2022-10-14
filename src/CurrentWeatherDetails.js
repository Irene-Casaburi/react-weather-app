import React from "react";

export default function CurrentWeatherDetails(props) {
  return (
    <div className="CurrentWeatherDetails">
      <h2>
        <strong className="temperature">
          {Math.round(props.data.temperature)}
        </strong>
        <span className="units">°C °F </span>
      </h2>
      <h1>{props.data.city}</h1>
      <p>Last updated: {}</p>
      <div>
        <img src={props.data.icon} alt={props.data.conditions}></img>
      </div>
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
