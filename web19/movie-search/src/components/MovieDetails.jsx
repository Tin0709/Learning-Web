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

  if (!movie) {
    return <div className="spinner"></div>;
  }

  return (
    <div className="details-wrapper">
      <Link to="/" className="back-link">
        ← Back to search
      </Link>

      <div className="movie-detail-card">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300x450?text=No+Image"
          }
          alt={movie.Title}
          className="detail-poster"
        />

        <div className="detail-info">
          <h2>
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
