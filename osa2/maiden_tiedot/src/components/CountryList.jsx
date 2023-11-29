import { useState } from "react";
import CountryDetails from "./CountryDetails";

const ShowButton = ({ clickFunction }) => (
  <button onClick={clickFunction}>show</button>
);

const CountryList = ({ filteredCountries, listVisible, setCountry }) => {
  const [showSelectedCountry, setShowSelectedCountry] = useState(false);

  const handleSetSelectedCountry = (countryName, setCountry) => {
    console.log("SELECTED", countryName);
    const newSelectedCountry = countryName;
    setCountry(countryName);
    setShowSelectedCountry(true);
  };

  const handleSetShowSelectedCountry = (show) => {
    setShowSelectedCountry(show);
  };

  console.log("filteredCountries.length", filteredCountries.length);
  console.log("setShowSelectedCountry", showSelectedCountry);

  if (filteredCountries.length == 0) {
    return <p>No matches</p>;
  } else if (
    filteredCountries.length <= 10 &&
    filteredCountries.length > 1 &&
    // filteredCountries.length > 1
    !showSelectedCountry
    // listVisible
  ) {
    // console.log("SHOULD RETURN LIST");
    // console.log("LÖRS LÄRS", selectedCountry);
    // console.log("showselected", showSelectedCountry);
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
  } else if (filteredCountries.length == 1) {
    return <CountryDetails country={filteredCountries[0]} />;
  } else if (filteredCountries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else {
    // console.log("LÖRS LÄRS", selectedCountry);
    console.log("filteredCountries.length", filteredCountries.length);
    console.log("filteredCountries", filteredCountries);
    console.log("listVisible", listVisible);
    console.log("showselected", showSelectedCountry);
    // filteredCountries = filteredCountries.filter(
    //   (country) => country.name.common == countryName
    // );
    return (
      <p>hih</p>
      // <CountryDetails
      //   country={
      //     filteredCountries.filter(
      //       (country) => country.name.common == selectedCountry
      //     )[0]
      //   }
      // />
    );
  }
};

export default CountryList;
