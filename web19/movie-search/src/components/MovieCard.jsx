import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => (
  <Link
    to={`/movie/${movie.imdbID}`}
    style={{ textDecoration: "none", color: "inherit" }}
  >
    <div className="movie-card">
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/200x300?text=No+Image"
        }
        alt={movie.Title}
        className="movie-poster"
      />
      <div className="movie-info">
        <h4 className="movie-title">{movie.Title}</h4>
        <p className="movie-year">{movie.Year}</p>
      </div>
    </div>
  </Link>
);

export default MovieCard;
