import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import { RotatingLines } from "react-loader-spinner";
import WeatherDetails from "./WeatherDetails";
import WeatherForecast from "./WeatherForecast";
import BackgroundImage from "./BackgroundImage";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [unit, setUnit] = useState("celsius");

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

  function getCurrentCoords(position) {
    let longitude = position.coords.longitude;
    let latitude = position.coords.latitude;
    let apiKey = "72b484ab5570dfdd776f4960e244a513";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(getCurrentCoords);
  }

  function changeUnit(event) {
    event.preventDefault();
    setUnit(unit === "celsius" ? "fahrenheit" : "celsius");
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <BackgroundImage icon={weatherData.icon}>
          <div className="row">
            <BackgroundImage icon={weatherData.icon} mobile>
              <div className="today-weather-section">
                <div className="d-flex form-row">
                  <form className="search-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                      <input
                        className="form-control"
                        type="search"
                        placeholder="Search for a city..."
                        autoComplete="off"
                        onChange={handleCityChange}
                      />
                      <input
                        type="submit"
                        className="btn btn-dark"
                        value="Search"
                      />
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={getCurrentLocation}
                      >
                        <FontAwesomeIcon icon={faLocationDot} />
                      </button>
                    </div>
                  </form>
                  <div className="button-container">
                    <button
                      type="button"
                      className="btn btn-warning unit-button"
                      onClick={changeUnit}
                    >
                      <span className={unit === "celsius" ? "bold" : ""}>
                        {" "}
                        °C{" "}
                      </span>
                      |{" "}
                      <span className={unit === "fahrenheit" ? "bold" : ""}>
                        {" "}
                        °F{" "}
                      </span>
                    </button>
                  </div>
                </div>
                <WeatherDetails data={weatherData} unit={unit} />
              </div>
            </BackgroundImage>
            <div className="col-md-12 col-lg-4 p-0">
              <WeatherForecast
                coordinates={weatherData.coordinates}
                unit={unit}
              />
            </div>
          </div>
        </BackgroundImage>
      </div>
    );
  } else {
    return (
      <div className="loading-container">
        <RotatingLines
          strokeColor="white"
          strokeWidth="5"
          animationDuration="0.75"
          width="55"
          visible={true}
        />
      </div>
    );
  }
}
