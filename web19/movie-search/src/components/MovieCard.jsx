import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => (
  <Link
    to={`/movie/${movie.imdbID}`}
    style={{ textDecoration: "none", color: "inherit" }}
  >
    <div
      style={{
        width: "200px",
        backgroundColor: "white",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        overflow: "hidden",
        transition: "transform 0.2s",
      }}
    >
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/200x300?text=No+Image"
        }
        alt={movie.Title}
        style={{ width: "100%", height: "300px", objectFit: "cover" }}
      />
      <div style={{ padding: "0.75rem" }}>
        <h4 style={{ margin: "0 0 0.5rem" }}>{movie.Title}</h4>
        <p style={{ margin: 0, color: "#666" }}>{movie.Year}</p>
      </div>
    </div>
  </Link>
);

export default MovieCard;
