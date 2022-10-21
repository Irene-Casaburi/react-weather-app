import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [ready, setReady] = useState(false);
  const [forecastData, setForecastData] = useState(false);

  useEffect(() => {
    getForecast();
  }, [props.coordinates]);

  function handleResponse(response) {
    setReady(true);
    setForecastData(response.data.daily);
  }

  function getForecast() {
    setReady(false);
    let apiKey = "a43564c91a6c605aeb564c9ed02e3858";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (ready) {
    return (
      <div className="WeatherForecast">
        <div className="weather-forecast-section">
          <div className="row align-items-start">
            {forecastData.map(function(dailyForecast, index) {
              if (index < 8) {
                return (
                  <div key={index}>
                    <WeatherForecastDay
                      data={dailyForecast}
                      unit={props.unit}
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
