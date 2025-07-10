import React from "react";

const SearchBar = ({ onSearch, value, onChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search recipes..."
        value={value}
        onChange={onChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
