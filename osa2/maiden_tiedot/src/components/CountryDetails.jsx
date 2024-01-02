import weatherService from "../services/weather";
import { useState, useEffect } from "react";

const CountryDetails = ({ country }) => {
  const [cityWeather, setCityWeather] = useState([]);

  useEffect(() => {
    weatherService.getWeatherInCity(country.capital).then((cityWeather) => {
      setCityWeather(cityWeather);
    });
  }, []);

  return (
    <>
      <h1>{country.name.common}</h1>
      <ul style={{ listStyleType: "none", paddingLeft: "0px" }}>
        <li>capital {country.capital}</li>
        <li>area {country.area}</li>
        <li>
          <Languages languages={country.languages} />
        </li>
        <li>
          <Flag flag={country.flags} />
        </li>
        <li>
          <Weather data={cityWeather} />
        </li>
      </ul>
    </>
  );
};

const Languages = ({ languages }) => {
  return (
    <>
      <h2>Languages</h2>
      <ul style={{ paddingLeft: "16px" }}>
        {Object.entries(languages).map(([code, language]) => (
          <li key={code}>{language}</li>
        ))}
      </ul>
    </>
  );
};

const Flag = ({ flag }) => {
  if (flag.png && flag.alt)
    return <img src={flag.png} alt={flag.alt} style={{ marginTop: "20px" }} />;
  else if (flag.svg && flag.alt)
    return <img src={flag.svg} alt={flag.alt} style={{ marginTop: "20px" }} />;
};

const Weather = ({ data }) => {
  if (data.length === 0) {
    return <p>Weather data not available</p>;
  } else {
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    return (
      <>
        <h2>Weather in {data.name}</h2>
        <p>temperature {data.main.temp} Celsius</p>
        <img src={iconUrl} alt={data.weather.description} />
        <p>wind {data.wind.speed} m/s</p>
      </>
    );
  }
};

export default CountryDetails;
