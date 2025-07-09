import './CountryCard.css';

function CountryCard({ country }) {
  return (
    <div
      className="country-card"
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '1rem',
        backgroundColor: '#f9f9f9',
        textAlign: 'left',
        minHeight: '280px',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
      }}
    >
      <img
        className="country-flag"
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        style={{
          width: '100%',
          height: '100px',
          objectFit: 'cover',
          borderRadius: '4px',
          marginBottom: '0.5rem'
        }}
      />
      <h2 className="country-name" style={{
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
        fontSize: '0.85rem'
      }}>
        <strong>Continent:</strong> {country.region}
      </p>
      <p style={{
        margin: '0.25rem 0',
        color: '#555',
        fontSize: '0.85rem'
      }}>
        <strong>Capital:</strong> {country.capital?.[0] || 'N/A'}
      </p>
      <p style={{
        margin: '0.25rem 0',
        color: '#555',
        fontSize: '0.85rem'
      }}>
        <strong>Population:</strong> {country.population ? country.population.toLocaleString() : 'N/A'}
      </p>
      <p style={{
        margin: '0.25rem 0',
        color: '#555',
        fontSize: '0.85rem'
      }}>
        <strong>Area:</strong> {country.area ? `${country.area.toLocaleString()} sq km` : 'N/A'}
      </p>
    </div>
  );
}

export default CountryCard;
