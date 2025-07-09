import { useEffect, useState } from 'react';
import axios from 'axios';
import CountryCard from './components/CountryCard';
import Filter from './components/Filter';

const API_URL = 'https://restcountries.com/v3.1/all?fields=name,flags,region,area,capital,population,cca3';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [regionFilter, setRegionFilter] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await axios.get(API_URL);
        setCountries(response.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message || 'Failed to fetch countries');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = regionFilter === 'All' || country.region === regionFilter;
    return matchesSearch && matchesRegion;
  });

  return (
    <div style={{
      padding: '1rem 2rem',
      fontFamily: 'sans-serif',
      maxWidth: '1400px',
      margin: '0 auto'
    }}>
      <h1>🌍 Country Explorer</h1>

      <Filter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        regionFilter={regionFilter}
        onRegionChange={setRegionFilter}
      />

      {isLoading && <p>Loading countries...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!isLoading && !error && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            padding: '0 1rem',
          }}
        >
          {filteredCountries.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
