import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <div className="col-8">
        <div className="today-weather-section">
          <form className="search-form">
            <div className="input-group">
              <input
                className="form-control"
                type="search"
                placeholder="Search for a city..."
                autoComplete="off"
              />
              <input type="submit" className="btn btn-dark" value="Search" />
              <button type="button" className="btn btn-danger">
                <FontAwesomeIcon icon={faLocationDot} />
              </button>
            </div>
          </form>

          <h2>
            <strong className="temperature">17</strong>
            <span className="units">°C °F </span>
          </h2>
          <h1>London</h1>
          <p>Last updated: today</p>
          <div> </div>
          <h3 className="conditions">Cloudy</h3>
          <div className="details">
            <p>Humidity: 70% Wind: 5km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}
