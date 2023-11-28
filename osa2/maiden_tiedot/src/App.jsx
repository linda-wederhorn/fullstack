import countryService from "./services/countries";
import CountryList from "./components/CountryList";
import { useState, useEffect } from "react";
import Filter from "puhelinluettelo/src/components/Filter";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newFilter, setNewFilter] = useState("");

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

  return (
    <>
      <p>find countries</p>{" "}
      <Filter filterText={newFilter} changeFunction={handleFilterChange} />
      <CountryList
        filteredCountries={countriesToShow}
        clickFunction={handleButtonClick}
      />
    </>
  );
};

export default App;
