import CountryDetails from "./CountryDetails";

const CountryList = ({ filteredCountries, clickFunction, visible }) => {
  if (visible) {
    if (filteredCountries.length <= 10) {
      return (
        <ol>
          {filteredCountries.map((country) => (
            <li key={country.name.common}>
              {country.name.common}{" "}
              <button onClick={clickFunction}>show</button>
            </li>
          ))}
        </ol>
      );
    } else return <p>Too many matches, specify another filter</p>;
  }
};

export default CountryList;
