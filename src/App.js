import React, { useEffect, useState } from "react";
import "./App.css";

/**
 * A function that takes in a city name and returns the weather forecast for that city
 * @param {*} city Name of the city
 */
const getWeather = (city) => {};

function App() {
  const [userLocation, setUserLocation] = useState("Toronto");

  return (
    <div className="Weather">
      <h1>Location: {userLocation}</h1>
      <h1>Weather</h1>
    </div>
  );
}

export default App;
