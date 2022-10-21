import React from "react";

export default function Temperature(props) {
  if (props.unit === "celsius") {
    return (
      <div className="Temperature">
        <strong className="temperature">
          {Math.round(props.celsiusTemperature)}
        </strong>
        <span className="units">°C</span>
      </div>
    );
  } else {
    let fahrenheitTemperature = (props.celsiusTemperature * 9) / 5 + 32;
    return (
      <div className="Temperature">
        <strong className="temperature">
          {Math.round(fahrenheitTemperature)}
        </strong>
        <span className="units">°F</span>
      </div>
    );
  }
}
