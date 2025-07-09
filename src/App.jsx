import { useEffect, useState } from 'react';

const API_URL = 'https://restcountries.com/v3.1/all';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [regionFilter, setRegionFilter] = useState('All');

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(err => console.error('Fetch error:', err));
  }, []);

  const filteredCountries = countries.filter(country => {
    const matchesSearch = country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = regionFilter === 'All' || country.region === regionFilter;
    return matchesSearch && matchesRegion;
  });

  return (
    <div style={{ padding: '1rem' }}>
      <h1>🌍 Country Explorer</h1>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        <select value={regionFilter} onChange={e => setRegionFilter(e.target.value)}>
          <option value="All">All Regions</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        {filteredCountries.map(country => (
          <div key={country.cca3} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem' }}>
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} style={{ width: '100%' }} />
            <h2>{country.name.common}</h2>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
