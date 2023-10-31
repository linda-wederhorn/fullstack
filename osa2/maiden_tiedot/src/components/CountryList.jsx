import CountryDetails from "./CountryDetails";

const CountryList = ({ filteredCountries }) => {
  if (filteredCountries.length <= 10 && filteredCountries.length > 1) {
    return (
      <ol>
        {filteredCountries.map((country) => (
          <li key={country.name.common}>{country.name.common}</li>
        ))}
      </ol>
    );
  } else if (filteredCountries.length == 1) {
    return <CountryDetails country={filteredCountries[0]} />;
  } else return <p>Too many matches, specify another filter</p>;
};

export default CountryList;
