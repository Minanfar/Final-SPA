import { useState } from "react";
import "./Weather.css";

const WeatherDisplay = () => {
  const [city, setCity] = useState("Berlin");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);

  const API_KEY = "6da47bdbd86dfd6f6e9b9bdb0b04c10e";

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );

      if (response.ok) {
        const data = await response.json();
        setWeather(data);
      } else {
        setError("Wetterdaten konnten nicht abgerufen werden.");
      }
    } catch (error) {
      setError("Es gab ein Problem beim Abrufen der Wetterdaten.");
    }

    setLoading(false);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleGetWeather = () => {
    fetchWeather();
  };

  const toggleTemperatureScale = () => {
    setIsCelsius(!isCelsius);
  };

  const convertToCelsius = (temp) => {
    return (temp - 273.15).toFixed();
  };

  const convertToFahrenheit = (temp) => {
    return ((temp - 273.15) * 1.8 + 32).toFixed();
  };

  return (
    <div className="main">
      <div className="input-container">
        <h1 className="title">Wetteranzeige</h1>
        <input
          className="city-input"
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="Stadt eingeben"
        />
        <button className="get-weather-button" onClick={handleGetWeather}>
          Wetter abrufen
        </button>
      </div>
      {loading && <p>Lade Wetterdaten...</p>}

      {error && <p>{error}</p>}

      {weather && (
        <div className="card">
          <div>
            {(weather.weather[0].main === "Clouds" ||
              weather.weather[0].main === "Mist") && (
              <div className="container">
                <div className="cloud front">
                  <span className="left-front"></span>
                  <span className="right-front"></span>
                </div>
                <span className="sun"></span>
                <div className="cloud back">
                  <span className="left-back"></span>
                  <span className="right-back"></span>
                </div>
              </div>
            )}

            {weather.weather[0].main === "Clear" && (
              <div className="container">
                <span className="sun sunshine"></span>
                <span className="sun"></span>
              </div>
            )}

            {(weather.weather[0].main === "Rain" ||
              weather.weather[0].main === "Drizzle") && (
              <div className="container">
                <div className="rain-container">
                  <span className="rain"></span>
                  <span className="rain"></span>
                  <span className="rain"></span>
                </div>
                <div className="cloud back">
                  <span className="left-back"></span>
                  <span className="right-back"></span>
                </div>
                <div className="cloud front">
                  <span className="left-front"></span>
                  <span className="right-front"></span>
                </div>
              </div>
            )}
            {weather.weather[0].main === "Snow" && (
              <div className="container">
                <div className="rain-container">
                  <span className="snow"></span>
                  <span className="snow"></span>
                  <span className="snow"></span>
                </div>
                <div className="cloud back">
                  <span className="left-back"></span>
                  <span className="right-back"></span>
                </div>
                <div className="cloud front">
                  <span className="left-front"></span>
                  <span className="right-front"></span>
                </div>
              </div>
            )}
          </div>
          <div className="card-header">
            <span>{weather.name}</span>
            <span>{weather.weather[0].description}</span>
            <span>Luftfeuchtigkeit: {weather.main.humidity}%</span>
          </div>
          <span className="temp">
            {weather && isCelsius
          ? convertToCelsius(weather.main.temp) + "°C"
          : convertToFahrenheit(weather.main.temp) + "°F"}
          </span>
          <div className="temp-scale">
            <span   
              onClick={toggleTemperatureScale}
              style={{ cursor: "pointer" }}
            >
              {isCelsius ? "Celsius" : "Fahrenheit"}
            </span>
          </div>
          <p className="date">{new Date().toDateString()}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;
