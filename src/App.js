import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Weather defaultCity="London" />
        </div>
        <footer>
          Created by{" "}
          <a
            href="https://www.linkedin.com/in/irenecasaburi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Irene Casaburi
          </a>
          . Open-source code available on{" "}
          <a
            href="https://github.com/Irene-Casaburi/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
