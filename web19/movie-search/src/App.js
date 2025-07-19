import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import axios from "axios";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const searchMovies = async (query) => {
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${query}`
    );
    setMovies(res.data.Search || []);
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
                <MovieList movies={movies} />
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
