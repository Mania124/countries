import { useEffect, useState } from 'react';
import axios from 'axios';
import CountryCard from './components/CountryCard';
import Filter from './components/Filter';
import Footer from './components/Footer';
import './App.css';

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

  const filteredCountries = countries
    .filter((country) => {
      const matchesSearch = country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRegion = regionFilter === 'All' || country.region === regionFilter;
      return matchesSearch && matchesRegion;
    })
    .sort((a, b) => a.name.common.localeCompare(b.name.common));

  const handleHeaderClick = () => {
    // Reset all filters and reload data
    setSearchTerm('');
    setRegionFilter('All');
    setError(null);

    // Optionally reload the page completely
    // window.location.reload();
  };

  return (
    <div className="app-container">
      <div className="app-header">
        <h1 className="app-title" onClick={handleHeaderClick}>🌍 Country Explorer</h1>
        <Filter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          regionFilter={regionFilter}
          onRegionChange={setRegionFilter}
        />
      </div>

      <div className="app-content">
        {isLoading && <p className="loading-message">Loading countries...</p>}
        {error && <p className="error-message">{error}</p>}

        {!isLoading && !error && (
          <div className="countries-grid">
            {filteredCountries.map((country) => (
              <CountryCard key={country.cca3} country={country} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;
