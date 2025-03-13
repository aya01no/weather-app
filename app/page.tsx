"use client";

import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, serWeather] = useState(null);

const fetchWeather = async ()  => {
  const res = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=e7bba24a31bd6cdb520c0cdb7d28ead5&units=metric&lang=ja");
  const date = await res.json();
  serWeather(date);
};

return(
  <div>
    <input
    type="text"
    value={city}
    onChange={(e) => setCity(e.target.value)}
    placeholder="都市名を入力"
    />
    <button onClick={fetchWeather}>天気を確認</button>
    {
      weather && (
        <div>
          <p>{weather.name}</p>
          <p>{weather.weather[0].description}</p>
          <p>{weather.main.temp}℃</p>
        </div>
      )
    }
  </div>
);
};

export default Weather;
