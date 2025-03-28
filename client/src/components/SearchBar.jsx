import { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <p>ค้นหาที่เที่ยว</p>
      <input
        type="text"
        placeholder="ค้นหาที่เที่ยว..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      
    </div>
  );
};

export default SearchBar;
