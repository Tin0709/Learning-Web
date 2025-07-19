import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${id}&plot=full`
      );
      setMovie(res.data);
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div style={{ padding: "2rem", maxWidth: "1000px", margin: "auto" }}>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#007BFF",
          marginBottom: "1rem",
          display: "inline-block",
        }}
      >
        ← Back to search
      </Link>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          overflow: "hidden",
        }}
      >
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300x450?text=No+Image"
          }
          alt={movie.Title}
          style={{
            width: "100%",
            maxWidth: "300px",
            objectFit: "cover",
            height: "100%",
            backgroundColor: "#eee",
          }}
        />

        <div style={{ padding: "2rem", flex: 1 }}>
          <h2 style={{ marginTop: 0 }}>
            {movie.Title} ({movie.Year})
          </h2>
          <p>
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p>
            <strong>Director:</strong> {movie.Director}
          </p>
          <p>
            <strong>Actors:</strong> {movie.Actors}
          </p>
          <p>
            <strong>Plot:</strong> {movie.Plot}
          </p>
          <p>
            <strong>IMDb Rating:</strong> ⭐ {movie.imdbRating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
