import express, { response } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

app.get('/api/weather', async (req, res) => {
    const { city } = req.query;
    const apiKey = process.env.WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherData = JSON.stringify({
                main: data.weather[0]["main"],
                description: data.weather[0]["description"],
                country: data.sys.country,
                temp: data.main.temp,
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                pressure: data.main.pressure,
                humidity: data.main.humidity,
                wind: data.wind,
            })
            console.log(weatherData);


        })
        .catch(e => console.error(`Error `, e))


})

app.listen(port, () => {
    console.log("Server is running");

})