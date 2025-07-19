import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "1rem 0" }}>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "0.5rem", width: "250px" }}
      />
      <button
        type="submit"
        style={{ padding: "0.5rem 1rem", marginLeft: "0.5rem" }}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
