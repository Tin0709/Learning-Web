import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div
      style={{
        width: "200px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "0.5rem",
        textAlign: "center",
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
      <h4>{movie.Title}</h4>
      <p>{movie.Year}</p>
    </div>
  );
};

export default MovieCard;
