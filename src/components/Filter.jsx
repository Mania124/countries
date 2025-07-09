import './Filter.css';

function Filter({ searchTerm, onSearchChange, regionFilter, onRegionChange }) {
  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={e => onSearchChange(e.target.value)}
        className="search-input"
      />

      <select
        value={regionFilter}
        onChange={e => onRegionChange(e.target.value)}
        className="region-select"
      >
        <option value="All">All Regions</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default Filter;
