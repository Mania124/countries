function CountryCard({ country }) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '1rem',
        backgroundColor: '#f9f9f9',
      }}
    >
      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        style={{ width: '100%', borderRadius: '4px' }}
      />
      <h2 style={{ marginTop: '0.5rem' }}>{country.name.common}</h2>
      <p>
        <strong>Region:</strong> {country.region}
      </p>
      <p>
        <strong>Population:</strong> {country.population.toLocaleString()}
      </p>
    </div>
  );
}

export default CountryCard;
