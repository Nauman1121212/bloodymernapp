const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-bar">
      <input
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
      ></input>
      <p>{value}</p>
    </div>
  );
};

export default SearchBar;
