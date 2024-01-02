import { useState } from "react";
import CountryDetails from "./CountryDetails";

const ShowButton = ({ clickFunction }) => (
  <button onClick={clickFunction}>show</button>
);

const CountryList = ({ filteredCountries, setCountry, selectedCountry }) => {
  const handleSetSelectedCountry = (countryName, setCountry) => {
    const newSelectedCountry = countryName;
    setCountry(newSelectedCountry);
  };

  // DO NOT SHOW COUNTRY LIST WHEN 0 FILTER MATCHES
  if (filteredCountries.length == 0) {
    return <p>No matches</p>;
    // SHOW COUNTRY LIST WHEN 2-10 FILTER MATCHES
  } else if (
    filteredCountries.length <= 10 &&
    filteredCountries.length > 1 &&
    selectedCountry == ""
  ) {
    return (
      <ol>
        {filteredCountries.map((country) => (
          <li key={country.name.common}>
            {country.name.common}{" "}
            <ShowButton
              clickFunction={() =>
                handleSetSelectedCountry(country.name.common, setCountry)
              }
            />
          </li>
        ))}
      </ol>
    );
    // DO NOT SHOW COUNTRY LIST WHEN >10 FILTER MATCHES
  } else if (filteredCountries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
    // SHOW COUNTRY DETAILS WHEN ONLY 1 FILTER MATCH
  } else if (filteredCountries.length == 1) {
    setCountry(filteredCountries[0].name.common);
    return <CountryDetails country={filteredCountries[0]} />;
    // SHOW COUNTRY DETAILS WHEN COUNTRY SELECTED WITH BUTTON
  } else {
    return (
      <CountryDetails
        country={
          filteredCountries.filter(
            (country) => country.name.common == selectedCountry
          )[0]
        }
      />
    );
  }
};

export default CountryList;
