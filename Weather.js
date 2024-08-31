// src/Weather.js
import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css'; // Import the CSS file

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    const apiKey = 'cc68ab2bb48547283fa42dc13980339a'; // Your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      if (response.data.main) {
        setWeather(response.data);
        setError('');
      } else {
        setError('City not found');
        setWeather(null);
      }
    } catch (err) {
      setError('Error fetching weather data');
      setWeather(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className="weather-container">
      <h1>Weather Information</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button type="submit">Get Weather</button>
      </form>

      {error && <p>{error}</p>}
      {weather && (
        <div className="weather-info">
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather icon" />
        </div>
      )}
    </div>
  );
};

export default Weather;
