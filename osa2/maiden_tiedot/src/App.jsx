import countryService from "./services/countries";
import WeatherData from "./services/weather";
import CountryList from "./components/CountryList";
import { useState, useEffect } from "react";
import Filter from "puhelinluettelo/src/components/Filter";
import CountryDetails from "./components/CountryDetails";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newFilter, setNewFilter] = useState("");
  const [showSelectedCountry, setShowSelectedCountry] = useState(false);

  useEffect(() => {
    countryService.getAll().then((initialCountries) => {
      setCountries(initialCountries);
    });
  }, []);

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
    console.log("countrylist length", countriesToShow.length);
    setShowSelectedCountry(false);
    if (countriesToShow.length == 1) setShowSelectedCountry(true);
  };

  const countriesToShow =
    newFilter === ""
      ? countries
      : countries.filter((country) =>
          country.name.common.toLowerCase().includes(newFilter)
        );

  // const [lat, lng] = countriesToShow[0].latlng;
  // console.log("countriesToShow[0]", lat, lng);

  // useEffect(() => {
  //   weatherData([lat, lng])
  //     .then((weatherData) => setCityWeather(weatherData))
  //     .catch((error) => {
  //       console.error(error.message);
  //     });
  // }, []);

  console.log();

  return (
    <>
      <p>find countries</p>{" "}
      <Filter filterText={newFilter} changeFunction={handleFilterChange} />
      <CountryList
        filteredCountries={countriesToShow}
        listVisible={!showSelectedCountry}
      />
    </>
  );
};

export default App;
