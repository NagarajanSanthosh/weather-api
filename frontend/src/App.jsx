import React, { useState } from 'react';
import axios from 'axios';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  const [weather, setWeather] = useState(null);

  const getWeather = async (city) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/weather?city=${city}`);
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data', error);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <WeatherForm onGetWeather={getWeather} />
      <WeatherDisplay weather={weather} />
    </div>
  );
}

export default App;
