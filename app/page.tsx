"use client";

import React, { useState } from "react";
import './App.css';

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;

const fetchWeather = async ()  => {
  try {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ja`);
  
  if (!res.ok) {
    throw new Error(`HTTPエラー:${res.status}`);
  }

  const date = await res.json();
  setWeather(date);
} catch (error) {
  console.error("天気情報の取得に失敗", error.message);
}
};

return(
  <div className="container">
  <div className="form-area">
    <input
    type="text"
    value={city}
    onChange={(e) => setCity(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        fetchWeather();
      }
    }}
    placeholder="都市名を入力"
    className="input"
    />
    <button onClick={fetchWeather} className="btn">
      天気を確認
      </button>
  </div>

    {
      weather && (
        <div className="result-area">
          <p className="city-name">{weather.name}</p>
          <p className="description">{weather.weather[0].description}</p>
          <p className="temp">{weather.main.temp}℃</p>
        </div>
      )
    }
  </div>
);
};

export default Weather;
