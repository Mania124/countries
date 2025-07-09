import './CountryCard.css';

function CountryCard({ country }) {
  return (
    <div className="country-card">
      <img
        className="country-flag"
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
      />
      <h2 className="country-name">
        {country.name.common}
      </h2>
      <p className="country-info">
        <strong>Continent:</strong> {country.region}
      </p>
      <p className="country-info">
        <strong>Capital:</strong> {country.capital?.[0] || 'N/A'}
      </p>
      <p className="country-info">
        <strong>Population:</strong> {country.population ? country.population.toLocaleString() : 'N/A'}
      </p>
      <p className="country-info">
        <strong>Area:</strong> {country.area ? `${country.area.toLocaleString()} sq km` : 'N/A'}
      </p>
    </div>
  );
}

export default CountryCard;
