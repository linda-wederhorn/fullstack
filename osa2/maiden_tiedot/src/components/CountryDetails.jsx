const CountryDetails = ({ country }) => {
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

export default CountryDetails;
