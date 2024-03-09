import React, { useState, useEffect } from "react";

const weatherIcons = {
  "01d": "./images/Main/weather/sun.png",
  "01n": "./images/Main/weather/sun.png",
  "02d": "./images/Main/weather/cloud.png",
  "02n": "./images/Main/weather/cloud.png",
  "03d": "./images/Main/weather/two.png",
  "03n": "./images/Main/weather/two.png",
  "04d": "./images/Main/weather/two.png",
  "04n": "./images/Main/weather/two.png",
  "09d": "./images/Main/weather/rain.png",
  "09n": "./images/Main/weather/rain.png",
  "10d": "./images/Main/weather/rain.png",
  "10n": "./images/Main/weather/rain.png",
  "11d": "./images/Main/weather/thunderstorm.png",
  "11n": "./images/Main/weather/thunderstorm.png",
  "13d": "./images/Main/weather/snowflake.png",
  "13n": "./images/Main/weather/snowflake.png",
  "50d": "./images/Main/weather/mist.png",
  "50n": "./images/Main/weather/mist.png",
};

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const API_WEATHER = "30485a4ae2910822e4d10c277d0f92b4";

  // GET WEATHER
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }, []);

  async function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_WEATHER}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }
  function error() {
    console.log("Unable to receive your location");
  }
  // GET WEATHER

  return (
    <div
      className="
    flex
     flex-col
     justify-center
     items-center
     w-screen
     h-screen
     bg-[#190C40]
     text-white
     text-center
     text-6xl
      font-medium"
    >
      {weather && weather.weather && (
        <img
          src={weatherIcons[weather.weather[0].icon]}
          alt="Current weather icon"
          className="w-[200px]"
        />
      )}
      <p className="p-12">
        {weather && weather.main && `${Math.round(weather.main.temp)}°C`}
      </p>
      <p>{weather && weather.name}</p>
      <p>{weather && weather.weather && weather.weather[0].icon}</p>
    </div>
  );
};

export default Weather;
