function Filter({ searchTerm, onSearchChange, regionFilter, onRegionChange }) {
  return (
    <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={e => onSearchChange(e.target.value)}
        style={{ padding: '0.5rem', flex: '1' }}
      />

      <select
        value={regionFilter}
        onChange={e => onRegionChange(e.target.value)}
        style={{ padding: '0.5rem' }}
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
