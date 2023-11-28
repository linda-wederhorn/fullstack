import { useState } from "react";
import CountryDetails from "./CountryDetails";

const ShowButton = ({ clickFunction, country }) => (
  <button onClick={(country) => clickFunction(country)}>show</button>
);

const CountryList = ({ filteredCountries, clickFunction }) => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleSetSelectedCountry = (country) => {
    setSelectedCountry(country);
  };

  const handleButtonClick = () => {
    console.log("SHOW BUTTON CLICKED");
    setSelectedCountry(country);
  };

  if (filteredCountries.length <= 10 && filteredCountries.length > 1) {
    return (
      <ol>
        {filteredCountries.map((country) => (
          <li key={country.name.common}>
            {country.name.common}{" "}
            <ShowButton
              clickFunction={handleSetSelectedCountry(country.name.common)}
              country={country.name.common}
            />
          </li>
        ))}
      </ol>
    );
  } else if (filteredCountries.length == 1) {
    handleSetSelectedCountry(filteredCountries[0]);
    return <CountryDetails country={filteredCountries[0]} />;
  } else return <p>Too many matches, specify another filter</p>;
};

export default CountryList;
