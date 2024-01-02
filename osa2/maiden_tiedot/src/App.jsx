import countryService from "./services/countries";
import WeatherData from "./services/weather";
import CountryList from "./components/CountryList";
import { useState, useEffect } from "react";
import Filter from "puhelinluettelo/src/components/Filter";
import CountryDetails from "./components/CountryDetails";

const App = () => {
  // Country list from service
  const [countries, setCountries] = useState([]);
  // Filter state
  const [newFilter, setNewFilter] = useState("");
  // The selected country, or empty string if no country is selected
  const [selectedCountry, setSelectedCountry] = useState("");

  //  Get all country details from service
  useEffect(() => {
    countryService.getAll().then((initialCountries) => {
      setCountries(initialCountries);
    });
  }, []);

  // Update filter value and reset selected country
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
    console.log("countrylist length", countriesToShow.length);
    setSelectedCountry("");
  };

  // Filter countries based on filter value
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

  console.log("APP.JS: SELECTED COUNTRY IS NOW", selectedCountry);

  return (
    <>
      <p>find countries</p>{" "}
      <Filter filterText={newFilter} changeFunction={handleFilterChange} />
      <CountryList
        filteredCountries={countriesToShow}
        setCountry={setSelectedCountry}
        selectedCountry={selectedCountry}
      />
    </>
  );
};

export default App;
