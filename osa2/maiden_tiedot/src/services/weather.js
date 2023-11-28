import { fetchWeatherApi } from 'openmeteo';

const WeatherData = async ([lat, lon]) => {
  const params = {
    "latitude": lat,
    "longitude": lon,
    "current": ["temperature_2m", "rain", "weather_code", "wind_speed_10m"],
    "wind_speed_unit": "ms",
    "forecast_days": 1
  };
  const url = "https://api.open-meteo.com/v1/forecast";
  const responses = await fetchWeatherApi(url, params);

  // Process first location. Add a for-loop for multiple locations or weather models
  const response = responses[0];

  // Attributes for timezone and location
  const utcOffsetSeconds = response.utcOffsetSeconds();
  const timezone = response.timezone();
  const timezoneAbbreviation = response.timezoneAbbreviation();
  const latitude = response.latitude();
  const longitude = response.longitude();

  const current = response.current();

  // Note: The order of weather variables in the URL query and the indices below need to match!
  return {
    temperature: current.variables(0).value(),
    rain: current.variables(1).value(),
    weatherCode: current.variables(2).value(),
    windSpeed: current.variables(3).value(),
  }
};

export default WeatherData;

// `weatherData` now contains a simple structure with arrays for datetime and weather data








// import axios from 'axios'

// const api_key = import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY
// const baseUrlWeather = 'http://api.openweathermap.org/data/2.5/weather?'


// const getWeatherInCity = (city) => {
//   const urlWithKey = baseUrlWeather.concat("q=", city, "&units=metric", "&appid=", api_key)
//   const request = axios.get(urlWithKey)
//   return request.then(response => response.data)
// }

// export default { getWeatherInCity }



