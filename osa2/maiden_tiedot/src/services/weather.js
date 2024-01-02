import axios from 'axios'

const api_key = import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY
const baseUrlWeather = 'http://api.openweathermap.org/data/2.5/weather?'

const getWeatherInCity = (city) => {
  const urlWithKey = baseUrlWeather.concat("q=", city, "&units=metric", "&appid=", api_key)
  const request = axios.get(urlWithKey)
  return request.then(response => response.data)
}

export default { getWeatherInCity }



