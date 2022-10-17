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
      </div>
    </div>
  );
}
