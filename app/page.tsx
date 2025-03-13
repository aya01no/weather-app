"use client";

import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;

const fetchWeather = async ()  => {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ja`);
  const date = await res.json();
  setWeather(date);
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
          <p>{weather.weather?.[0]?.description}</p>
          <p>{weather.main?.temp}℃</p>
        </div>
      )
    }
  </div>
);
};

export default Weather;
