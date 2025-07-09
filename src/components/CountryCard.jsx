function CountryCard({ country }) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '1rem',
        backgroundColor: '#f9f9f9',
        textAlign: 'left',
        minHeight: '320px',
      }}
    >
      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        style={{
          width: '100%',
          height: '120px',
          objectFit: 'cover',
          borderRadius: '4px',
          marginBottom: '0.5rem'
        }}
      />
      <h2 style={{
        marginTop: '0',
        marginBottom: '0.5rem',
        fontSize: '1.2rem',
        color: '#333',
        fontWeight: 'bold'
      }}>
        {country.name.common}
      </h2>
      <p style={{
        margin: '0.25rem 0',
        color: '#555',
        fontSize: '0.9rem'
      }}>
        <strong>Continent:</strong> {country.region}
      </p>
      <p style={{
        margin: '0.25rem 0',
        color: '#555',
        fontSize: '0.9rem'
      }}>
        <strong>Capital:</strong> {country.capital?.[0] || 'N/A'}
      </p>
      <p style={{
        margin: '0.25rem 0',
        color: '#555',
        fontSize: '0.9rem'
      }}>
        <strong>Population:</strong> {country.population ? country.population.toLocaleString() : 'N/A'}
      </p>
      <p style={{
        margin: '0.25rem 0',
        color: '#555',
        fontSize: '0.9rem'
      }}>
        <strong>Area:</strong> {country.area ? `${country.area.toLocaleString()} sq km` : 'N/A'}
      </p>
    </div>
  );
}

export default CountryCard;
