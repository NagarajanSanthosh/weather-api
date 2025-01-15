import React, { useEffect, useState } from 'react';
import SearchBox from './SearchBox';
import { Card, CardContent, Typography, CircularProgress } from '@mui/material';
const weatherDescriptions = {
    "Thunderstorm with light rain": "../assets/thunderstorm.png",
    "Thunderstorm with rain": "../assets/thunderstorm.png",
    "Thunderstorm with heavy rain": "../assets/thunderstorm.png",
    "Light thunderstorm": "../assets/thunderstorm.png",
    "Thunderstorm": "../assets/thunderstorm.png",
    "Heavy thunderstorm": "../assets/thunderstorm.png",
    "Ragged thunderstorm": "../assets/thunderstorm.png",
    "Thunderstorm with light drizzle": "../assets/thunderstorm.png",
    "Thunderstorm with drizzle": "../assets/thunderstorm.png",
    "Thunderstorm with heavy drizzle": "../assets/thunderstorm.png",
    "Light intensity drizzle": "../assets/drizzle.png",
    "Drizzle": "../assets/drizzle.png",
    "Heavy intensity drizzle": "../assets/drizzle.png",
    "Light intensity drizzle rain": "../assets/drizzle.png",
    "Drizzle rain": "../assets/drizzle.png",
    "Heavy intensity drizzle rain": "../assets/drizzle.png",
    "Shower rain and drizzle": "../assets/drizzle.png",
    "Heavy shower rain and drizzle": "../assets/drizzle.png",
    "Shower drizzle": "../assets/drizzle.png",
    "Light rain": "../assets/rain.png",
    "Moderate rain": "../assets/rain.png",
    "Heavy intensity rain": "../assets/rain.png",
    "Very heavy rain": "../assets/rain.png",
    "Extreme rain": "../assets/rain.png",
    "Freezing rain": "../assets/rain.png",
    "Light intensity shower rain": "../assets/rain.png",
    "Shower rain": "../assets/rain.png",
    "Heavy intensity shower rain": "../assets/rain.png",
    "Ragged shower rain": "../assets/rain.png",
    "Light snow": "../assets/snow.png",
    "Snow": "../assets/snow.png",
    "Heavy snow": "../assets/snow.png",
    "Sleet": "../assets/snow.png",
    "Light shower sleet": "../assets/snow.png",
    "Shower sleet": "../assets/snow.png",
    "Light rain and snow": "../assets/snow.png",
    "Rain and snow": "../assets/snow.png",
    "Light shower snow": "../assets/snow.png",
    "Shower snow": "../assets/snow.png",
    "Heavy shower snow": "../assets/snow.png",
    "Mist": "../assets/haze.gif",
    "Smoke": "../assets/haze.gif",
    "Haze": "../assets/haze.gif",
    "Sand/dust whirls": "../assets/haze.gif",
    "Fog": "../assets/haze.gif",
    "Sand": "../assets/haze.gif",
    "Dust": "../assets/haze.gif",
    "Volcanic ash": "../assets/volcano.png",
    "Squalls": "../assets/thunderstorm.png",
    "Tornado": "../assets/thunderstorm.png",
    "Clear sky": "../assets/sunny.png",
    "Few clouds (11-25%)": "../assets/cloudy_sunny.png",
    "Scattered clouds (25-50%)": "../assets/cloud.png",
    "Broken clouds (51-84%)": "../assets/cloud.png",
    "Overcast clouds (85-100%)": "../assets/cloud.png"
};

function Weather() {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);
    const [wDisplay, setWDisplay] = useState(false);

    async function fetchWeatherData(param) {
        setLoading(true);
        try {
            const apiKey = "8df5cef66064669e29906bbce7272bc6";
            if (param === '') param = 'madurai';
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${apiKey}`;
            const response = await fetch(url);
            const data = await response.json();
            if (data) {
                setWeatherData(data);
                setLoading(false);
            }
        } catch (e) {
            setLoading(false);
            console.log(e);
        }
    }

    return (
        <div style={{ padding: '20px' }}>
            <SearchBox
                search={search}
                setSearch={setSearch}
                handleSearch={() => {
                    setWDisplay(true);
                    fetchWeatherData(search);
                }}
            />
            {loading ? (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <CircularProgress color="success" />
                </div>
            ) : (
                wDisplay && weatherData && (
                    <Card style={{ marginTop: '20px' }}>
                        <CardContent>
                            <div>
                                <Typography variant="h5" color="success">
                                    {weatherData.name}, {weatherData.sys.country}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {new Date().toLocaleDateString("en-IN", {
                                        weekday: "long",
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                </Typography>
                            </div>
                            <Typography variant="h4" style={{ marginTop: '10px' }}>
                                Temp: {Math.round(weatherData.main.temp - 273.15)}°C
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                {weatherData.weather[0]["description"]}


                            </Typography>
                            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                                <div>
                                    <Typography variant="h6">Wind Speed</Typography>
                                    <Typography variant="body1">{weatherData.wind.speed} m/s</Typography>
                                </div>
                                <div>
                                    <Typography variant="h6">Humidity</Typography>
                                    <Typography variant="body1">{weatherData.main.humidity}%</Typography>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )
            )}
        </div>
    );
}

export default Weather;
