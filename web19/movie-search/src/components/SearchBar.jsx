import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!query) {
        setSuggestions([]);
        return;
      }

      try {
        const res = await axios.get(
          `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${query}`
        );
        setSuggestions(res.data.Search || []);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        setSuggestions([]);
      }
    };

    const delayDebounce = setTimeout(() => {
      fetchSuggestions();
    }, 400); // debounce

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    onSearch(query);
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (title) => {
    setQuery(title);
    onSearch(title);
    setShowSuggestions(false);
  };

  return (
    <div style={{ position: "relative", maxWidth: "400px", margin: "auto" }}>
      <form onSubmit={handleSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
          }}
          style={{
            padding: "0.5rem",
            flex: 1,
            border: "2px solid #007BFF",
            borderRadius: "4px 0 0 4px",
            fontSize: "16px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "0.5rem 1rem",
            border: "1px solid #007BFF",
            backgroundColor: "#007BFF",
            color: "white",
            borderRadius: "0 4px 4px 0",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </form>

      {showSuggestions && suggestions.length > 0 && (
        <ul
          style={{
            position: "absolute",
            width: "100%",
            backgroundColor: "white",
            border: "1px solid #ccc",
            listStyle: "none",
            margin: 0,
            padding: "0.5rem 0",
            maxHeight: "200px",
            overflowY: "auto",
            zIndex: 1000,
          }}
        >
          {suggestions.map((movie) => (
            <li
              key={movie.imdbID}
              onClick={() => handleSuggestionClick(movie.Title)}
              style={{
                padding: "0.5rem 1rem",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
              }}
              onMouseDown={(e) => e.preventDefault()}
            >
              {movie.Title} ({movie.Year})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
