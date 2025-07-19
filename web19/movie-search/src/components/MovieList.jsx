import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  if (!movies.length) return <p>No movies found.</p>;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
