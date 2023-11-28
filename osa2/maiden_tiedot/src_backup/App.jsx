import countryService from "./services/countries";
import WeatherData from "./services/weather";
import CountryList from "./components/CountryList";
import { useState, useEffect } from "react";
import Filter from "puhelinluettelo/src/components/Filter";
import CountryDetails from "./components/CountryDetails";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newFilter, setNewFilter] = useState("");
  const [selectedCountry, selectCountry] = useState("");
  const [cityWeather, setCityWeather] = useState("");
  const [showCountryList, setShowCountryList] = useState(true);
  const [showCountryDetails, setShowCountryDetails] = useState(true);

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };

  const handleButtonClick = (event) => {
    console.log("SHOW BUTTON CLICKED", event);
  };

  useEffect(() => {
    countryService.getAll().then((initialCountries) => {
      setCountries(initialCountries);
    });
  }, []);

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

  const toggleVisibilities = () => {
    console.log("called once");
    if (countriesToShow.length <= 10 && countriesToShow.length > 1) {
      setShowCountryList(true);
      // setShowCountryDetails(false);
    } else if (countriesToShow.length == 1) {
      setShowCountryList(false);
      // setShowCountryDetails(true);
    }
  };

  // toggleVisibilities();

  return (
    <>
      <p>find countries</p>{" "}
      <Filter filterText={newFilter} changeFunction={handleFilterChange} />
      <CountryList
        filteredCountries={countriesToShow}
        clickFunction={handleButtonClick}
        visible={showCountryList}
      />
      {/* <CountryDetails country={selectedCountry} visible={showCountryDetails} /> */}
    </>
  );
};

export default App;
