import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  if (!movies.length) return <p>No movies found.</p>;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "1.5rem",
        padding: "2rem 0",
        justifyItems: "center",
      }}
    >
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
