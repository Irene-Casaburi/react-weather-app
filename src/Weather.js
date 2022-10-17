import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import WeatherDetails from "./WeatherDetails";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  useEffect(() => {
    searchCity();
  }, []);

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      conditions: response.data.weather[0].main,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
    });
  }

  function searchCity() {
    const apiKey = "72b484ab5570dfdd776f4960e244a513";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="col-8">
          <div className="today-weather-section">
            <form className="search-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search for a city..."
                  autoComplete="off"
                  onChange={handleCityChange}
                />
                <input type="submit" className="btn btn-dark" value="Search" />
                <button type="button" className="btn btn-danger">
                  <FontAwesomeIcon icon={faLocationDot} />
                </button>
              </div>
            </form>
            <WeatherDetails data={weatherData} />
          </div>
        </div>
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    return "Loading...";
  }
}