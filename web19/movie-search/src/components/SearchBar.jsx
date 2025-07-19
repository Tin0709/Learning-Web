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
        setSuggestions([]);
      }
    };

    const delayDebounce = setTimeout(fetchSuggestions, 400);
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
    <div
      style={{ position: "relative", maxWidth: "500px", margin: "0 auto 2rem" }}
    >
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
            padding: "0.6rem 1rem",
            flex: 1,
            border: "1px solid #ccc",
            borderRadius: "6px 0 0 6px",
            fontSize: "16px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "0.6rem 1rem",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "0 6px 6px 0",
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
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderTop: "none",
            listStyle: "none",
            margin: 0,
            padding: 0,
            boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
            zIndex: 10,
          }}
        >
          {suggestions.map((movie) => (
            <li
              key={movie.imdbID}
              onClick={() => handleSuggestionClick(movie.Title)}
              style={{
                padding: "0.75rem 1rem",
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
