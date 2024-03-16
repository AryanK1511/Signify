import React, { useState, useEffect } from "react";
import weatherIcons from "./WeatherIconsData";
import HomeButton from "../Main/HomeButton";

// ===== Weather component =====
const Weather = () => {
  // State to hold the data received from the API
  const [weather, setWeather] = useState(null);
  const API_WEATHER = "30485a4ae2910822e4d10c277d0f92b4";
  const [pageLoaded, setPageLoaded] = useState(false);

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
        setPageLoaded(true);
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
        font-medium
        overflow-hidden"
    >
      {pageLoaded && (
        <>
          {weather && weather.weather && (
            <img
              src={weatherIcons[weather.weather[0].icon]}
              alt="Current weather icon"
              className="w-[200px] pt-20"
            />
          )}
          {weather && weather.main && (
            <p className="">{`${Math.round(weather.main.temp)}°C`}</p>
          )}
          {weather && weather.name && <p>{weather.name}</p>}
          <div className="flex">
            {weather && weather.main && (
              <WeatherData
                icon={"./images/Main/weather/humidity.png"}
                data={weather.main.humidity}
                metric={"%"}
                title={"Humidity"}
              />
            )}
            {weather && weather.wind && (
              <WeatherData
                icon={"./images/Main/weather/wind.png"}
                data={weather.wind.speed}
                metric={"m/s"}
                title={"Wind speed"}
              />
            )}
          </div>
          <HomeButton customStyle={"mb-36"}/>
        </>
      )}
    </div>
  );
};

function WeatherData({ icon, data, metric, title }) {
  return (
    <div
      className="
      p-20
    flex
    justify-center
    items-center
    "
    >
      <img src={icon} alt={`${title} icon`} className="w-[120px]" />
      <div
        className="
      flex
      flex-col
      items-start
      text-3xl
      "
      >
        <p>{`${data} ${metric}`}</p>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Weather;
