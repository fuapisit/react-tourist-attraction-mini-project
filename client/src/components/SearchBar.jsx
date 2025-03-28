import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="หาที่เที่ยวแล้วไปกัน" 
        value={query} 
        onChange={handleSearch} 
      />
    </div>
  );
};

export default SearchBar;
