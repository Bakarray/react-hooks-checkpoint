// src/components/MovieCard.js
import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.posterURL} alt={movie.title} />
      </div>
      <div className="movie-details">
        <h3>{movie.title}</h3>
        <div className="movie-rating">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={i < Math.floor(movie.rating) ? "star filled" : "star"}
            >
              {i < movie.rating ? "★" : "☆"}
            </span>
          ))}
          <span className="rating-value">{movie.rating.toFixed(1)}</span>
        </div>
        <p className="movie-description">{movie.description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
