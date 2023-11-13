import { useState, useEffect,useContext  } from "react";
import "./css/Weather.css";
import { UserContext } from "./context/UseContext";
import LoginPage from "./LoginPage";

const WeatherDisplay = () => {
  const [city, setCity] = useState("Berlin");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);
  const { setShowLoginPage, isLoggedIn, setLoggedIn, username } =
    useContext(UserContext);

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
useEffect(() => {
    // Check if the user is logged in
    if (username) {
      setLoggedIn(true);
    } else {
      setShowLoginPage(true);
      setLoggedIn(false);
    }
  }, [username, setShowLoginPage]);
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
      isLoggedIn ? (
        <div className='weather-main-dev'>
          <div className=''>
            <h1 className='weather-title'>Weather Forecasting</h1> <div className='search'>
          <input
            type='text'
            value={city}
            onChange={handleCityChange}
            placeholder='city ...'
          />
          <button type="submit" onClick={handleGetWeather}>Search</button>
        </div>
      </div>
      {loading && <p>Loading data...</p>}

      {error && <p>{error}</p>}

      {weather && (
        <div className='weather-main'>
          <div>
            {(weather.weather[0].main === "Clouds" ||
              weather.weather[0].main === "Mist") && (
              <div className='weather-input-container'>
                <div className='cloud front'>
                  <span className='left-front'></span>
                  <span className='right-front'></span>
                </div>
                <span className='sun'></span>
                <div className='cloud back'>
                  <span className='left-back'></span>
                  <span className='right-back'></span>
                </div>
              </div>
            )}

            {weather.weather[0].main === "Clear" && (
              <div className='weather-input-container'>
                <span className='sun sunshine'></span>
                <span className='sun'></span>
              </div>
            )}

            {(weather.weather[0].main === "Rain" ||
              weather.weather[0].main === "Drizzle") && (
              <div className='weather-input-container'>
                <div className='rain-container'>
                  <span className='rain'></span>
                  <span className='rain'></span>
                  <span className='rain'></span>
                </div>
                <div className='cloud back'>
                  <span className='left-back'></span>
                  <span className='right-back'></span>
                </div>
                <div className='cloud front'>
                  <span className='left-front'></span>
                  <span className='right-front'></span>
                </div>
              </div>
            )}
            {weather.weather[0].main === "Snow" && (
              <div className='weather-input-container'>
                <div className='rain-container'>
                  <span className='snow'></span>
                  <span className='snow'></span>
                  <span className='snow'></span>
                </div>
                <div className='cloud back'>
                  <span className='left-back'></span>
                  <span className='right-back'></span>
                </div>
                <div className='cloud front'>
                  <span className='left-front'></span>
                  <span className='right-front'></span>
                </div>
              </div>
            )}
          </div>
          <div className='card-header'>
            <p className='weather-date'>{new Date().toDateString()}</p>
            <h2>{weather.name}</h2>
            <span>{weather.weather[0].description}</span>
            <span>Humidity {weather.main.humidity}%</span>
          </div>
          <span className='temp'>
            {weather && isCelsius
              ? convertToCelsius(weather.main.temp) + "°C"
              : convertToFahrenheit(weather.main.temp) + "°F"}
          </span>

          <span
            className='temp-scale'
            onClick={toggleTemperatureScale}
            style={{ cursor: "pointer" }}
          >
            {isCelsius ? "to Fahrenheit" : "to Celsius"}
          </span>
          </div>
      )}
    </div>
  ) : (
    <LoginPage />
  )
);
};

export default WeatherDisplay;
