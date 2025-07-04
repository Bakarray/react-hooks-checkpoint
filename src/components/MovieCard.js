import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-link">
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
                className={
                  i < Math.floor(movie.rating / 2) ? "star filled" : "star"
                }
              >
                {i < movie.rating / 2 ? "★" : "☆"}
              </span>
            ))}
            <span className="rating-value">{movie.rating.toFixed(1)}</span>
          </div>
          <p className="movie-description">
            {movie.description.substring(0, 100)}...
          </p>
          <div className="view-details">View Details →</div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
