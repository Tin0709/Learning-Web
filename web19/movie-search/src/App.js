import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import axios from "axios";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const searchMovies = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${query}`
      );
      setMovies(res.data.Search || []);
      if (!res.data.Search) {
        setError("No movies found.");
      }
    } catch (err) {
      setError("Failed to fetch movies.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Router>
      <div className={`app-container ${darkMode ? "dark" : "light"}`}>
        <header className="app-header">
          <h1 className="app-title">🎬 Movie Search App</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="dark-toggle"
          >
            {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar onSearch={searchMovies} />
                {loading ? (
                  <div className="spinner"></div>
                ) : error ? (
                  <p className="error">{error}</p>
                ) : movies.length > 0 ? (
                  <MovieList movies={movies} />
                ) : (
                  <p className="empty">No movies found.</p>
                )}
              </>
            }
          />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
