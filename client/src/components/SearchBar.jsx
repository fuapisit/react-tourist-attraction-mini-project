import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 text-left">
        ค้นหาที่เที่ยว
      </h2>
      <input
        className="mt-2 w-full p-3 border border-gray-300 rounded-lg text-center 
                   focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text" 
        placeholder="หาที่เที่ยวแล้วไปกัน" 
        value={query} 
        onChange={handleSearch} 
      />
    </div>
  );
};

export default SearchBar;
