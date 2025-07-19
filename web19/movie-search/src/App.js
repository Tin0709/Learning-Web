import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (query) => {
    if (!query) return;
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${query}`
    );
    setMovies(res.data.Search || []);
  };

  return (
    <div className="app-container">
      <h1>🎬 Movie Search App</h1>
      <SearchBar onSearch={searchMovies} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
