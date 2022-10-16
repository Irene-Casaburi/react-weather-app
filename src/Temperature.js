import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showCelsiusTemperature(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheitTemperature(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "celsius") {
    return (
      <div className="Temperature">
        <strong className="temperature">
          {Math.round(props.celsiusTemperature)}
        </strong>
        <span className="units">
          °C |
          <a href="/" onClick={showFahrenheitTemperature}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheitTemperature = (props.celsiusTemperature * 9) / 5 + 32;
    return (
      <div className="Temperature">
        <strong className="temperature">
          {Math.round(fahrenheitTemperature)}
        </strong>
        <span className="units">
          <a href="/" onClick={showCelsiusTemperature}>
            °C
          </a>
          | °F
        </span>
      </div>
    );
  }
}
